<template>
  <div class="filter-menu">
    <div class="menu-header">
      <BackIcon class="back-icon" @click="closeMenu" />
    </div>
    <div class="scrollable-filters vertical-scroll">
      <div class="filter-item">
        <div class="filter-header">Search Text</div>
        <div class="filter-controls">
          <input
            type="text"
            v-model="filters.text"
            placeholder="Enter text to search..."
            @input="updateFilters"
            class="filter-input"
          />
        </div>
      </div>

      <div class="filter-item">
        <div class="filter-header">Date Range</div>
        <div class="filter-controls date-range">
          <input
            type="date"
            v-model="filters.date.start"
            @change="updateFilters"
            class="filter-input"
          />
          <span class="date-separator">to</span>
          <input
            type="date"
            v-model="filters.date.end"
            @change="updateFilters"
            class="filter-input"
          />
        </div>
      </div>

      <div class="filter-actions">
        <button @click="clearFilters" class="clear-btn">Clear</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
import { useDatabaseStore } from "@/stores/databaseState";
import BackIcon from "@/assets/BackIcon.vue";

const { storeId } = defineProps({
  storeId: {
    type: String,
    required: true,
  },
});

const databaseStore = useDatabaseStore();
const filters = ref({ ...databaseStore.getFilters(storeId) });

const clearFilters = () => {
  databaseStore.clearFilters(storeId);
  filters.value = { ...databaseStore.getFilters(storeId) };
};

const updateFilters = () => {
  databaseStore.setFilters(storeId, filters.value);
};
const emit = defineEmits(["close-menu"]);
const closeMenu = () => emit("close-menu");

watch(filters, updateFilters, { deep: true });
</script>

<style scoped>
.filter-menu {
  @apply absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
  width: 320px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-header {
  @apply mb-4;
}

.back-icon {
  @apply w-6 h-6 cursor-pointer;
}

.back-icon:hover {
  @apply opacity-75;
}

.scrollable-filters {
  @apply overflow-y-auto;
}

.filter-item {
  @apply py-2;
}

.filter-header {
  @apply text-sm font-medium mb-2;
}

.filter-controls {
  @apply flex flex-col gap-2;
}

.date-range {
  @apply flex items-center gap-2;
}

.date-separator {
  @apply text-sm text-gray-500;
}

.filter-input {
  @apply px-3 py-1.5 bg-white dark:bg-gray-700 border border-input-border rounded-md;
}

.filter-actions {
  @apply flex justify-end gap-2 mt-4 pt-4 border-t border-input-border;
}
</style>
