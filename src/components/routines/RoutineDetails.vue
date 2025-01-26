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
            <div class="related-trades" v-if="relatedTrades.length">
                <h3 class="section-title">Related Trades</h3>
                <div class="trades-grid">
                    <div v-for="trade in relatedTrades" :key="trade.id" class="trade-card"
                        @click="$router.push(`/trades/${trade.id}`)">
                        <div class="trade-card-content">
                            <span class="trade-id">#{{ trade.id }}</span>
                            <span class="trade-pair">{{ trade.pair }}</span>
                        </div>
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
import { routines } from "../../data/routines";
import { useTradesStore } from "../../stores/trades";

export default {
    name: "RoutineDetails",
    data() {
        return {
            routine: null,
            relatedTrades: []
        }
    },
    created() {
        const routineId = parseInt(this.$route.params.id);
        this.routine = routines.find(r => r.id === routineId);

        if (this.routine) {
            const tradesStore = useTradesStore();
            this.relatedTrades = tradesStore.trades.filter(
                trade => this.routine.trade_ids.includes(trade.id)
            );
        } else {
            this.$router.push('/routines');
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

.section-title {
    @apply text-xl font-medium mt-8 mb-4;
}

.trades-grid {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.trade-card {
    @apply bg-white dark:bg-gray-800 p-4 rounded-lg border border-input-border cursor-pointer hover:border-input-focus transition-all duration-200;
}

.trade-card-content {
    @apply flex justify-between items-center;
}

.trade-id {
    @apply text-sm font-medium;
}

.trade-pair {
    @apply text-sm text-gray-500;
}
</style>