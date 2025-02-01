<template>
  <thead>
    <tr>
      <th v-for="column in visibleColumns" :key="column.field">
        {{ column.header }}
      </th>
      <th v-if="$slots['item-actions']">Actions</th>
    </tr>
  </thead>
</template>

<script setup>
import { computed } from "vue";

const { columns } = defineProps({
  columns: Array,
});

const visibleColumns = computed(() => {
  return columns.filter((column) => column.visible);
});
</script>
