<template>
    <div class="columns-menu">
        <div v-for="column in columns" :key="column.field" class="column-item">
            <label class="checkbox-wrapper">
                <input type="checkbox" v-model="column.visible" @change="updateColumns" />
                {{ column.header }}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColumnsMenu",
    props: {
        columns: {
            type: Array,
            required: true,
        },
    },
    emits: ["update-columns"],
    methods: {
        updateColumns() {
            this.$emit("update-columns", this.columns);
        },
    },
};
</script>

<style scoped>
.columns-menu {
    @apply absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
}

.column-item {
    @apply py-1;
}

.checkbox-wrapper {
    @apply flex items-center gap-2 cursor-pointer;
}

.checkbox-wrapper input {
    @apply w-4 h-4;
}
</style>