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

<script>
import { useDatabaseStore } from "@/stores/databaseState";
import { sortArray } from "@/utils/sortUtils";
import ListView from "./List/ListView.vue";
import DatabaseHeader from "./DataBaseStructure/DatabaseHeader.vue";
import ColumnsMenu from "./DataBaseStructure/ColumnsMenu.vue";
import FilterMenu from "./DataBaseStructure/FilterMenu.vue";
import SortMenu from "./DataBaseStructure/SortMenu.vue";

export default {
  name: "DataBaseWrapper",
  components: {
    ListView,
    DatabaseHeader,
    ColumnsMenu,
    FilterMenu,
    SortMenu,
  },
  props: {
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
  },
  data() {
    return {
      showColumnsMenu: false,
      showFilterMenu: false,
      showSortMenu: false,
    };
  },
  computed: {
    mainColumns() {
      return this.columns.filter((column) => !column.isInformational);
    },
    visibleMainColumns() {
      return this.mainColumns.filter((column) => column.visible);
    },
    filteredAndSortedData() {
      let result = [...this.data];

      const filters = this.databaseStore.getFilters(this.storeId);
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
          const start = filters.date.start
            ? new Date(filters.date.start)
            : null;
          const end = filters.date.end ? new Date(filters.date.end) : null;

          return (!start || itemDate >= start) && (!end || itemDate <= end);
        });
      }

      const sort = this.databaseStore.getSort(this.storeId);
      if (sort.field) {
        const column = this.columns.find((col) => col.field === sort.field);
        if (column) {
          result = sortArray(result, column);
        }
      }

      return result;
    },
  },
  created() {
    const databaseStore = useDatabaseStore();
    this.databaseStore = databaseStore;
  },
  methods: {
    toggleColumnsMenu() {
      this.showColumnsMenu = !this.showColumnsMenu;
      this.showFilterMenu = false;
      this.showSortMenu = false;
    },
    toggleFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
      this.showColumnsMenu = false;
      this.showSortMenu = false;
    },
    toggleSortMenu() {
      this.showSortMenu = !this.showSortMenu;
      this.showColumnsMenu = false;
      this.showFilterMenu = false;
    },
    closeColumnsMenu() {
      this.showColumnsMenu = false;
    },
    closeFilterMenu() {
      this.showFilterMenu = false;
    },
    closeSortMenu() {
      this.showSortMenu = false;
    },
    updateVisibleColumns(columns) {
      this.databaseStore.setVisibleColumns(this.storeId, columns);
    },
    handleAddItem() {
      this.$router.push(`${this.routePath}/form`);
    },
  },
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
