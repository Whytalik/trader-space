<template>
  <tr
    @click="handleItemClick"
    class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
  >
    <td v-for="column in visibleColumns" :key="column.field">
      {{ item[column.field] }}
    </td>
    <td v-if="$slots['item-actions']">
      <slot name="item-actions" :item="item"></slot>
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
