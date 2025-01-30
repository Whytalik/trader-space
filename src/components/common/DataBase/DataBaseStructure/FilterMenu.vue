<template>
  <div class="filter-menu">
    <div class="menu-header">
      <BackIcon class="back-icon" @click="closeMenu" />
    </div>
    <div class="scrollable-filters vertical-scroll">
      <!-- Текстовий пошук -->
      <div class="filter-item">
        <div class="filter-header">Search Text</div>
        <div class="filter-controls">
          <input
            type="text"
            v-model="filters.text"
            class="filter-input"
            placeholder="Enter text to search..."
            @input="updateFilters"
          />
        </div>
      </div>

      <!-- Фільтр по даті -->
      <div class="filter-item">
        <div class="filter-header">Date Range</div>
        <div class="filter-controls date-range">
          <input
            type="date"
            v-model="filters.date.start"
            class="filter-input"
            @change="updateFilters"
          />
          <span class="date-separator">to</span>
          <input
            type="date"
            v-model="filters.date.end"
            class="filter-input"
            @change="updateFilters"
          />
        </div>
      </div>

      <div class="filter-actions">
        <BaseButton
          variant="secondary"
          size="sm"
          @click="clearFilters"
          class="clear-btn"
        >
          Clear
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { useDatabaseStore } from "@/stores/databaseState";
import BackIcon from "@/assets/DataBase/BackIcon.vue";

export default {
  name: "FilterMenu",
  components: {
    BackIcon,
  },
  props: {
    storeId: {
      type: String,
      required: true,
    },
  },
  setup() {
    const databaseStore = useDatabaseStore();
    return { databaseStore };
  },
  data() {
    const databaseStore = useDatabaseStore();
    return {
      filters: { ...databaseStore.getFilters(this.storeId) },
    };
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
    clearFilters() {
      this.databaseStore.clearFilters(this.storeId);
      this.filters = { ...this.databaseStore.getFilters(this.storeId) };
    },
    updateFilters() {
      this.databaseStore.setFilters(this.storeId, this.filters);
    },
  },
};
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
