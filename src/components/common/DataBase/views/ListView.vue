<template>
  <div class="list-view">
    <table class="list-table">
      <thead>
        <tr>
          <th v-for="column in visibleColumns" :key="column.field">
            {{ column.header }}
          </th>
          <th v-if="$slots['item-actions']">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id" @click="handleItemClick(item)"
          class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
          <td v-for="column in visibleColumns" :key="column.field">
            {{ item[column.field] }}
          </td>
          <td v-if="$slots['item-actions']">
            <slot name="item-actions" :item="item"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    routePath: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    visibleColumns() {
      return this.columns.filter(column => column.visible);
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    },
    handleItemClick(item) {
      if (this.routePath) {
        this.$router.push(`${this.routePath}/${item.id}`);
      }
    }
  }
}
</script>

<style scoped>
.list-view {
  @apply w-full overflow-x-auto;
}

.list-table {
  @apply min-w-full divide-y divide-gray-200 dark:divide-gray-700;
}

.list-table th {
  @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider;
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