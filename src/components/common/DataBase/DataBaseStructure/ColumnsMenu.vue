<template>
  <div class="columns-menu">
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

    <div class="scrollable-columns vertical-scroll">
      <div v-for="column in columns" :key="column.field" class="column-item">
        <label class="checkbox-wrapper">
          <input
            type="checkbox"
            v-model="column.visible"
            @change="updateColumns"
          />
          {{ column.header }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColumnsMenu",
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
  emits: ["update-columns", "close-menu"],
  methods: {
    updateColumns() {
      this.$emit("update-columns", this.columns);
    },
    closeMenu() {
      this.$emit("close-menu");
    },
    isListView() {
      return this.currentView === "list";
    },
  },
};
</script>

<style scoped>
.columns-menu {
  @apply absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scrollable-columns {
  overflow-y: auto;
  flex-grow: 1;
}

.column-item {
  @apply py-1;
}

.checkbox-wrapper {
  @apply flex items-center gap-2 cursor-pointer;
}

.checkbox-wrapper input {
  @apply w-4 h-4;
}

.close-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
  cursor: pointer;
  margin-bottom: 10px;
}

.close-icon:hover {
  @apply opacity-75;
}
</style>
