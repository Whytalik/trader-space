<template>
  <div class="database-wrapper vertical-scroll">
    <DatabaseHeader
      :title="title"
      :currentView="currentView"
      :showViewMenu="showViewMenu"
      @toggle-columns-menu="toggleColumnsMenu"
      @toggle-view-menu="toggleViewMenu"
      @select-view="selectView"
    >
    </DatabaseHeader>
    <ColumnsMenu
      v-if="showColumnsMenu"
      :columns="columns"
      :currentView="currentView"
      @update-columns="updateColumns"
      @close-menu="closeColumnsMenu"
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
      <GalleryView v-else :data="data" :routePath="routePath">
        <template #item-actions="slotProps">
          <slot name="item-actions" v-bind="slotProps"></slot>
        </template>
      </GalleryView>
    </div>
  </div>
</template>

<script>
import ListView from "./views/List/ListView.vue";
import GalleryView from "./views/Gallery/GalleryView.vue";
import DatabaseHeader from "./DataBaseStructure/DatabaseHeader.vue";
import ColumnsMenu from "./DataBaseStructure/ColumnsMenu.vue";

export default {
  name: "DataBaseWrapper",
  components: {
    ListView,
    GalleryView,
    DatabaseHeader,
    ColumnsMenu,
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
    enableViewToggle: {
      type: Boolean,
      default: true,
    },
    defaultView: {
      type: String,
      default: "list",
      validator: (value) => ["list", "gallery"].includes(value),
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
    updateColumns(newColumns) {
      this.$emit("update:columns", [...newColumns]);
    },
    closeColumnsMenu() {
      this.showColumnsMenu = false;
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
