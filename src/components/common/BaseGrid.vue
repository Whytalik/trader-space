<template>
  <div class="base-grid" :class="gridClass">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const { columns } = defineProps({
  columns: {
    type: String,
    default: "3",
  },
});

const gridClass = computed(() => `grid-${columns}`);
</script>

<style scoped>
.base-grid {
  @apply grid gap-6;
}

.grid-1 {
  @apply grid-cols-1;
}

.grid-2 {
  @apply grid-cols-1 md:grid-cols-2;
}

.grid-3 {
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
</style>
