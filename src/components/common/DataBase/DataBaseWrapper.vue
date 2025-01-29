<template>
  <div class="database-wrapper vertical-scroll">
    <DatabaseHeader
      :title="title"
      :currentView="currentView"
      :showViewMenu="showViewMenu"
      @toggle-columns-menu="toggleColumnsMenu"
      @toggle-view-menu="toggleViewMenu"
      @select-view="selectView"
      @toggle-sort-menu="toggleSortMenu"
    >
    </DatabaseHeader>
    <ColumnsMenu
      v-if="showColumnsMenu"
      :columns="columns"
      :currentView="currentView"
      @close-menu="closeColumnsMenu"
    />
    <SortMenu
      v-if="showSortMenu"
      :sortOptions="columns"
      @close-menu="closeSortMenu"
    />
    <div class="database-content">
      <ListView
        v-if="currentView === 'list'"
        :data="data"
        :columns="columns"
        :routePath="routePath"
      >
        <template #item-actions="slotProps">
          <slot name="item-actions" v-bind="slotProps"></slot>
        </template>
      </ListView>
    </div>
  </div>
</template>

<script>
import ListView from "./List/ListView.vue";
import DatabaseHeader from "./DataBaseStructure/DatabaseHeader.vue";
import ColumnsMenu from "./DataBaseStructure/ColumnsMenu.vue";
import SortMenu from "./DataBaseStructure/SortMenu.vue";

export default {
  name: "DataBaseWrapper",
  components: {
    ListView,
    DatabaseHeader,
    ColumnsMenu,
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
  },
  data() {
    return {
      currentView: this.defaultView,
      showColumnsMenu: false,
      showViewMenu: false,
      showSortMenu: false,
    };
  },
  methods: {
    toggleColumnsMenu() {
      this.showColumnsMenu = !this.showColumnsMenu;
    },
    toggleViewMenu() {
      this.showViewMenu = !this.showViewMenu;
    },
    selectView(view) {
      this.currentView = view;
      this.showViewMenu = false;
    },
    toggleSortMenu() {
      this.showSortMenu = !this.showSortMenu;
    },
    closeColumnsMenu() {
      this.showColumnsMenu = false;
    },
    closeSortMenu() {
      this.showSortMenu = false;
    },
  },
};
</script>

<style scoped>
.database-wrapper {
  @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-4 relative h-[calc(100vh-12rem)] flex flex-col;
}

.database-content {
  @apply flex-1 overflow-y-auto overflow-x-auto;
}
</style>
