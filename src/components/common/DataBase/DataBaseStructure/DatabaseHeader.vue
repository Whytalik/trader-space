<template>
  <div class="database-header">
    <h2 class="database-title">{{ title }}</h2>
    <div class="database-actions">
      <slot name="actions"></slot>
      <div class="view-controls">
        <button class="control-btn" @click="toggleSortMenu">
          <SortIcon />
        </button>
        <div class="view-menu">
          <ViewMenu v-if="showViewMenu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SortIcon from "@/assets/DataBase/SortIcon.vue";

export default {
  name: "DatabaseHeader",
  components: {
    SortIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showViewMenu: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-columns-menu", "toggle-sort-menu"],
  methods: {
    toggleColumnsMenu() {
      this.$emit("toggle-columns-menu");
    },
    toggleSortMenu() {
      this.$emit("toggle-sort-menu");
    },
  },
};
</script>

<style scoped>
.database-header {
  @apply flex justify-between items-center mb-4;
}

.database-actions {
  @apply flex items-center gap-4;
}

.view-controls {
  @apply flex items-center gap-1 ml-auto;
}

.control-btn {
  @apply p-2 rounded-md hover:bg-input-bg transition-colors duration-fast;
}

.control-btn.active {
  @apply bg-input-bg text-button-primary-bg;
}
</style>
