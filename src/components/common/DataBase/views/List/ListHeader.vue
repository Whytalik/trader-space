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

<script>
export default {
    name: "ListHeader",
    props: {
        columns: {
            type: Array,
            required: true,
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
</style>