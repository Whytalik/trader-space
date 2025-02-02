<template>
  <div class="database-header">
    <h2 class="database-title">{{ title }}</h2>
    <div class="database-actions">
      <div class="view-controls">
        <template v-if="!hideControls">
          <BaseButton
            :variant="'secondary'"
            :size="'small'"
            :class="{ active: showFilterMenu }"
            @click="toggleFilterMenu"
            :icon="FilterIcon"
            class="w-8 h-8"
          >
          </BaseButton>

          <BaseButton
            :variant="'secondary'"
            :size="'small'"
            :class="{ active: showSortMenu }"
            @click="toggleSortMenu"
            :icon="SortIcon"
            class="w-8 h-8"
          >
          </BaseButton>

          <BaseButton
            :variant="'secondary'"
            :size="'small'"
            :class="{ active: showColumnsMenu }"
            @click="toggleColumnsMenu"
            :icon="ColumnsIcon"
          >
          </BaseButton>
        </template>

        <BaseButton
          :variant="'primary'"
          :size="'medium'"
          label="Add"
          @click="emit('add-item')"
          :icon="PlusIcon"
        >
        </BaseButton>
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
</style>
