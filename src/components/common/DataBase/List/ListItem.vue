<template>
    <tr @click="handleItemClick" class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        <td v-for="column in visibleColumns" :key="column.field">
            {{ item[column.field] }}
        </td>
        <td v-if="$slots['item-actions']">
            <slot name="item-actions" :item="item"></slot>
        </td>
    </tr>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        item: {
            type: Object,
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
        handleItemClick() {
            if (this.routePath) {
                this.$router.push(`${this.routePath}/${this.item.id}`);
            }
        }
    }
};
</script>

<style scoped>
tr {
    @apply bg-white dark:bg-gray-800;
}

tr:nth-child(even) {
    @apply bg-gray-50 dark:bg-gray-700;
}

td {
    @apply px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100;
}
</style>