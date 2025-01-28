<template>
  <div class="list-view">
    <table class="list-table">
      <ListHeader :columns="columns" />
      <tbody>
        <ListItem v-for="item in data" :key="item.id" :item="item" :columns="visibleColumns" :route-path="routePath">
          <template #item-actions="{ item }">
            <slot name="item-actions" :item="item"></slot>
          </template>
        </ListItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';
import ListHeader from './ListHeader.vue';

export default {
  name: "ListView",
  components: {
    ListItem,
    ListHeader,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    routePath: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    visibleColumns() {
      return this.columns.filter((column) => column.visible);
    },
  },
};
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
