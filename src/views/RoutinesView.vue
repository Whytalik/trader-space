<template>
    <DataBaseWrapper title="Trading Routines" :data="routines" :columns="columns" routePath="/routines" />
</template>

<script>
import { routines } from "../data/routine";
import { generateColumns } from "../utils/columnGenerator";

export default {
    name: "RoutinesView",
    data() {
        return {
            routines: [],
            columns: []
        };
    },
    created() {
        this.routines = routines;
        this.columns = generateColumns(this.routines);
    }
};
</script>

<style scoped>
.routine-view {
    @apply space-y-6;
}

.routine-header {
    @apply flex justify-between items-center mb-6;
}

.routine-title {
    @apply text-2xl font-medium;
}

.routines-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.routine-card {
    @apply bg-white dark:bg-gray-800 rounded-lg border border-input-border overflow-hidden;
}

.card-header {
    @apply p-4 border-b border-input-border;
}

.card-title {
    @apply text-lg font-medium mb-1;
}

.routine-time {
    @apply text-sm text-gray-500 dark:text-gray-400;
}

.card-content {
    @apply p-4;
}

.checklist {
    @apply space-y-3;
}

.checklist-item {
    @apply flex items-center gap-3;
}

.checklist-item input[type="checkbox"] {
    @apply w-4 h-4 rounded border-gray-300;
}

.checklist-item label {
    @apply text-sm text-gray-700 dark:text-gray-300;
}
</style>
