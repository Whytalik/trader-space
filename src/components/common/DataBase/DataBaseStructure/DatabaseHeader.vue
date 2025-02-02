<template>
  <div class="database-header">
    <h2 class="database-title">{{ title }}</h2>
    <div class="database-actions">
      <div class="view-controls">
        <template v-if="!hideControls">
          <button
            class="control-btn"
            @click="toggleFilterMenu"
            :class="{ active: showFilterMenu }"
          >
            <FilterIcon />
          </button>
          <button
            class="control-btn"
            @click="toggleSortMenu"
            :class="{ active: showSortMenu }"
          >
            <SortIcon />
          </button>
          <button
            class="control-btn"
            @click="toggleColumnsMenu"
            :class="{ active: showColumnsMenu }"
          >
            <ColumnsIcon />
          </button>
        </template>
        <button class="ml-2" @click="emit('add-item')">
          <template>
            <PlusIcon class="w-4 h-4" />
          </template>
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import SortIcon from "@/assets/SortIcon.vue";
import ColumnsIcon from "@/assets/ColumnsIcon.vue";
import FilterIcon from "@/assets/FilterIcon.vue";
import PlusIcon from "@/assets/PlusIcon.vue";

const { title, showColumnsMenu, showFilterMenu, showSortMenu, hideControls } =
  defineProps({
    title: String,
    showColumnsMenu: Boolean,
    showFilterMenu: Boolean,
    showSortMenu: Boolean,
    hideControls: Boolean,
  });

const emit = defineEmits([
  "toggle-columns-menu",
  "toggle-filter-menu",
  "toggle-sort-menu",
  "add-item",
]);

const toggleColumnsMenu = () => emit("toggle-columns-menu");
const toggleFilterMenu = () => emit("toggle-filter-menu");
const toggleSortMenu = () => emit("toggle-sort-menu");
</script>

<style scoped>
.database-header {
  @apply flex justify-between items-center mb-4;
}

.database-actions {
  @apply flex items-center gap-4;
}

.view-controls {
  @apply flex items-center gap-2;
}

.control-btn {
  @apply p-2 rounded-md hover:bg-input-bg transition-colors duration-fast flex items-center justify-center;
  width: 36px;
  height: 36px;
}

.control-btn.active {
  @apply bg-input-bg text-button-primary-bg;
}
</style>
