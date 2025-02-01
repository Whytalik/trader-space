<template>
  <div
    class="database-wrapper vertical-scroll"
    :class="{ 'no-data': !data.length }"
  >
    <DatabaseHeader
      :title="title"
      :showColumnsMenu="showColumnsMenu"
      :showFilterMenu="showFilterMenu"
      :showSortMenu="showSortMenu"
      :hideControls="hideControls"
      @toggle-columns-menu="toggleColumnsMenu"
      @toggle-filter-menu="toggleFilterMenu"
      @toggle-sort-menu="toggleSortMenu"
      @add-item="handleAddItem"
    />
    <ColumnsMenu
      v-if="showColumnsMenu"
      :columns="mainColumns"
      @close-menu="closeColumnsMenu"
      @update:columns="updateVisibleColumns"
    />
    <FilterMenu
      v-if="showFilterMenu"
      :storeId="storeId"
      @close-menu="closeFilterMenu"
    />
    <SortMenu
      v-if="showSortMenu"
      :storeId="storeId"
      :sortOptions="mainColumns"
      @close-menu="closeSortMenu"
    />
    <div class="database-content">
      <template v-if="filteredAndSortedData.length">
        <ListView
          :data="filteredAndSortedData"
          :columns="mainColumns"
          :visible-columns="visibleMainColumns"
          :route-path="routePath"
        >
          <template #item-actions="slotProps">
            <slot name="item-actions" v-bind="slotProps"></slot>
          </template>
        </ListView>
      </template>
      <template v-else>
        <div class="empty-state">
          <slot name="empty-state">
            <p>No data available</p>
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDatabaseStore } from "@/stores/databaseState";
import { sortArray } from "@/utils/sortUtils";
import ListView from "./List/ListView.vue";
import DatabaseHeader from "./DataBaseStructure/DatabaseHeader.vue";
import ColumnsMenu from "./DataBaseStructure/ColumnsMenu.vue";
import FilterMenu from "./DataBaseStructure/FilterMenu.vue";
import SortMenu from "./DataBaseStructure/SortMenu.vue";

const { title, columns, data, routePath, storeId, hideControls } = defineProps({
  title: {
    type: String,
    required: true,
  },
  columns: {
    type: Array,
    required: false,
  },
  data: {
    type: Array,
    required: true,
  },
  routePath: {
    type: String,
    required: false,
    default: null,
  },
  storeId: {
    type: String,
    required: true,
  },
  hideControls: {
    type: Boolean,
    default: false,
  },
});

const showColumnsMenu = ref(false);
const showFilterMenu = ref(false);
const showSortMenu = ref(false);
const databaseStore = useDatabaseStore();

const mainColumns = computed(() =>
  columns.filter((column) => !column.isInformational)
);
const visibleMainColumns = computed(() =>
  mainColumns.value.filter((column) => column.visible)
);

const filteredAndSortedData = computed(() => {
  let result = [...data];

  const filters = databaseStore.getFilters(storeId);
  if (filters.text) {
    result = result.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(filters.text.toLowerCase())
      )
    );
  }

  if (filters.date.start || filters.date.end) {
    result = result.filter((item) => {
      const itemDate = new Date(item.date);
      const start = filters.date.start ? new Date(filters.date.start) : null;
      const end = filters.date.end ? new Date(filters.date.end) : null;

      return (!start || itemDate >= start) && (!end || itemDate <= end);
    });
  }

  const sort = databaseStore.getSort(storeId);
  if (sort.field) {
    const column = columns.find((col) => col.field === sort.field);
    if (column) {
      result = sortArray(result, column);
    }
  }

  return result;
});

const toggleColumnsMenu = () => {
  showColumnsMenu.value = !showColumnsMenu.value;
  showFilterMenu.value = false;
  showSortMenu.value = false;
};

const toggleFilterMenu = () => {
  showFilterMenu.value = !showFilterMenu.value;
  showColumnsMenu.value = false;
  showSortMenu.value = false;
};

const toggleSortMenu = () => {
  showSortMenu.value = !showSortMenu.value;
  showColumnsMenu.value = false;
  showFilterMenu.value = false;
};

const closeColumnsMenu = () => {
  showColumnsMenu.value = false;
};

const closeFilterMenu = () => {
  showFilterMenu.value = false;
};

const closeSortMenu = () => {
  showSortMenu.value = false;
};

const updateVisibleColumns = (columns) => {
  databaseStore.setVisibleColumns(storeId, columns);
};

const handleAddItem = () => {
  if (routePath) {
    this.$router.push(`${routePath}/form`);
  }
};
</script>

<style scoped>
.database-wrapper {
  @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-4 relative flex flex-col;
  height: calc(100vh - 8.5rem);
}

.database-wrapper.no-data {
  @apply h-auto;
}

.database-content {
  @apply flex-1 overflow-y-auto overflow-x-auto;
}

.empty-state {
  @apply py-8 text-center text-gray-500;
}
</style>
