<template>
  <tr
    class="bg-gray-100 dark:bg-gray-700 cursor-pointer"
    @click="handleItemClick"
  >
    <td v-for="column in visibleColumns" :key="column.field">
      {{
        item[column.field] === true
          ? "✅"
          : item[column.field] === false
            ? "❌"
            : item[column.field]
      }}
    </td>
  </tr>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const { item, columns, routePath } = defineProps({
  item: Object,
  columns: Array,
  routePath: {
    type: String,
    default: null,
  },
});

const router = useRouter();

const visibleColumns = computed(() => {
  return columns.filter((column) => column.visible);
});

const handleItemClick = () => {
  if (routePath) {
    router.push(`${routePath}/${item.id}`);
  }
};
</script>
