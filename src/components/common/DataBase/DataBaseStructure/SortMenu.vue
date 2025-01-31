<template>
  <div class="sort-menu">
    <div class="menu-header">
      <BackIcon class="back-icon" @click="closeMenu" />
    </div>
    <div class="scrollable-sort-options vertical-scroll">
      <div v-for="option in sortOptions" :key="option.field" class="sort-item">
        <label class="radio-wrapper">
          <input
            type="radio"
            name="sort"
            :value="option.field"
            :checked="databaseStore.getSort(storeId).field === option.field"
            @change="updateSort(option.field)"
          />
          {{ option.header }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { useDatabaseStore } from "@/stores/databaseState";
import BackIcon from "@/assets/BackIcon.vue";

export default {
  name: "SortMenu",
  components: {
    BackIcon,
  },
  props: {
    storeId: {
      type: String,
      required: true,
    },
    sortOptions: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const databaseStore = useDatabaseStore();
    return { databaseStore };
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
    updateSort(field) {
      this.databaseStore.setSort(this.storeId, field, "asc");
    },
  },
};
</script>

<style scoped>
.sort-menu {
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
</style>
