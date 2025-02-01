<template>
  <div class="columns-menu">
    <div class="menu-header">
      <BackIcon class="back-icon" @click="emit('close-menu')" />
    </div>
    <div class="scrollable-columns vertical-scroll">
      <div v-for="column in columns" :key="column.field" class="column-item">
        <label class="checkbox-wrapper">
          <input type="checkbox" v-model="column.visible" />
          {{ column.header }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackIcon from "@/assets/BackIcon.vue";

defineProps({
  columns: Array,
});

const emit = defineEmits(["close-menu"]);

</script>

<style scoped>
.columns-menu {
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
</style>
