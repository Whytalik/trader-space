<template>
  <div class="list-view">
    <table class="list-table">
      <ListHeader :columns="columns" />
      <tbody>
        <ListItem
          v-for="item in data"
          :key="item.id"
          :item="item"
          :columns="visibleColumns"
          :route-path="routePath"
        >
          <template #item-actions="{ item }">
            <slot name="item-actions" :item="item"></slot>
          </template>
        </ListItem>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ListItem from "./ListItem.vue";
import ListHeader from "./ListHeader.vue";
import { useTradesStore } from "@/stores/trades";

const { data, columns, visibleColumns, routePath } = defineProps({
  data: Array,
  columns: Array,
  visibleColumns: Array,
  routePath: {
    type: String,
    default: null,
  },
});

const tradesStore = ref(null);

onMounted(() => {
  tradesStore.value = useTradesStore();
});
</script>

<style scoped>
.list-view {
  @apply w-full overflow-x-auto;
}

.list-table {
  @apply min-w-full divide-y divide-gray-200 dark:divide-gray-700;
}

.list-table td {
  @apply px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100;
}

.list-table tbody tr {
  @apply bg-white dark:bg-gray-800;
}

.list-table tbody tr:nth-child(even) {
  @apply bg-gray-50 dark:bg-gray-700;
}
</style>
