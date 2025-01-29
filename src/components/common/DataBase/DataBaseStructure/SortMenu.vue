<template>
  <div class="sort-menu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon"
      @click="closeMenu"
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>

    <div class="scrollable-sort-options vertical-scroll">
      <div v-for="option in sortOptions" :key="option.field" class="sort-item">
        <label class="radio-wrapper">
          <input
            type="radio"
            name="sort"
            v-model="selectedSort"
            :value="option.field"
            @change="updateSort"
          />
          {{ option.header }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortMenu",
  props: {
    sortOptions: {
      type: Array,
      required: true,
    },
    currentSort: {
      type: String,
      default: "id",
    },
  },
  data() {
    return {
      selectedSort: this.currentSort,
    };
  },
  emits: ["close-menu", "update-sort"],
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
    updateSort() {
      const updatedOptions = this.sortOptions.map((option) => ({
        ...option,
        sortBy: option.field === this.selectedSort,
      }));

      this.$emit("update-sort", updatedOptions);
      this.$parent.updateSortColumn(this.selectedSort);
    },
  },
};
</script>

<style scoped>
.sort-menu {
  @apply absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scrollable-sort-options {
  overflow-y: auto;
  flex-grow: 1;
}

.sort-item {
  @apply py-1;
}

.radio-wrapper {
  @apply flex items-center gap-2 cursor-pointer;
}

.radio-wrapper input {
  @apply w-4 h-4;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  cursor: pointer;
  margin-bottom: 10px;
}

.icon:hover {
  @apply opacity-75;
}
</style>
