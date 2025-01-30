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
        <BaseButton
          variant="primary"
          size="sm"
          @click="$emit('add-item')"
          class="ml-2"
        >
          <template #icon-left>
            <PlusIcon class="w-4 h-4" />
          </template>
          Add
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import SortIcon from "@/assets/DataBase/SortIcon.vue";
import ColumnsIcon from "@/assets/DataBase/ColumnsIcon.vue";
import FilterIcon from "@/assets/DataBase/FilterIcon.vue";
import PlusIcon from "@/assets/DataBase/PlusIcon.vue";

export default {
  name: "DatabaseHeader",
  components: {
    SortIcon,
    ColumnsIcon,
    FilterIcon,
    PlusIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showColumnsMenu: {
      type: Boolean,
      default: false,
    },
    showFilterMenu: {
      type: Boolean,
      default: false,
    },
    showSortMenu: {
      type: Boolean,
      default: false,
    },
    hideControls: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "toggle-columns-menu",
    "toggle-filter-menu",
    "toggle-sort-menu",
    "add-item",
  ],
  methods: {
    toggleColumnsMenu() {
      this.$emit("toggle-columns-menu");
    },
    toggleFilterMenu() {
      this.$emit("toggle-filter-menu");
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
