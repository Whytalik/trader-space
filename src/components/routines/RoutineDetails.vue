<template>
    <div class="routine-view">
        <div class="routine-header">
            <h2 class="routine-title">Routine Details</h2>
            <BaseButton @click="$router.push('/routines')">Back to Routines</BaseButton>
        </div>
        <div class="routine-content" v-if="routine">
            <div class="routine-info">
                <div class="info-grid">
                    <div class="info-item" v-for="(value, key) in routine" :key="key">
                        <span class="label">{{ formatLabel(key) }}</span>
                        <span class="value">{{ formatValue(value) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="routine-not-found">
            Routine not found
        </div>
    </div>
</template>

<script>
import { routines } from "../../data/routine";

export default {
    name: "RoutineDetails",
    data() {
        return {
            routine: null
        }
    },
    created() {
        const routineId = parseInt(this.$route.params.id);
        this.routine = routines.find(r => r.id === routineId);

        if (!this.routine) {
            console.error(`Routine with id ${routineId} not found`);
        }
    },
    methods: {
        formatLabel(key) {
            return key.split(/(?=[A-Z])/).join(' ').charAt(0).toUpperCase() +
                key.split(/(?=[A-Z])/).join(' ').slice(1);
        },
        formatValue(value) {
            if (value instanceof Date) {
                return value.toLocaleDateString();
            }
            if (Array.isArray(value)) {
                return value.join(', ');
            }
            return value;
        }
    }
}
</script>

<style scoped>
.routine-view {
    @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-6;
}

.routine-header {
    @apply flex justify-between items-center mb-6;
}

.routine-title {
    @apply text-2xl font-medium;
}

.routine-content {
    @apply bg-white dark:bg-gray-800 rounded-lg p-6 border border-input-border;
}

.info-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.info-item {
    @apply flex flex-col gap-1;
}

.label {
    @apply text-sm text-gray-500 dark:text-gray-400;
}

.value {
    @apply text-base font-medium;
}

.routine-not-found {
    @apply text-center py-12 text-gray-500;
}
</style> 