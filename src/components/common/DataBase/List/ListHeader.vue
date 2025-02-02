<template>
  <thead>
    <tr>
      <th v-for="column in visibleColumns" :key="column.field">
        {{ column.header }}
      </th>
    </tr>
  </thead>
</template>

<script setup>
import { computed } from "vue";
const { columns } = defineProps({
  columns: Array,
});

const visibleColumns = computed(() =>
  columns.filter((column) => column.visible)
);
</script>
