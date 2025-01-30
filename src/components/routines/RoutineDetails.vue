<template>
    <div class="routine-view">
        <div class="routine-header">
            <h2 class="routine-title">Routine Details</h2>
            <BaseButton @click="$router.push('/routines')">Back to Routines</BaseButton>
        </div>
        <div class="routine-content" v-if="routine">
            <div class="routine-info">
                <div class="info-grid">
                    <div class="info-item" v-for="column in displayColumns" :key="column.field">
                        <span class="label">{{ column.header }}</span>
                        <span class="value">
                            {{ formatFieldValue(column, routine[column.field]) }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="related-data" v-if="hasRelatedData">
                <h3 class="section-title">Related Data</h3>
                <div class="related-cards">
                    <div class="related-card" v-if="relatedTrades.length">
                        <div class="card-header">
                            <h4 class="card-title">Trades</h4>
                        </div>
                        <div class="card-content">
                            <div class="trades-grid">
                                <div v-for="trade in relatedTrades" 
                                     :key="trade.id" 
                                     class="trade-card"
                                     @click="$router.push(`/trades/${trade.id}`)">
                                    <div class="trade-card-content">
                                        <span class="trade-id">#{{ trade.id }}</span>
                                        <span class="trade-name">{{ trade.name }}</span>
                                    </div>
                                </div>
                            </div>
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
import { useRoutinesStore } from "@/stores/routines";
import { useTradesStore } from "@/stores/trades";
import BaseButton from "@/components/common/BaseButton.vue";

export default {
    name: "RoutineDetails",
    components: {
        BaseButton
    },
    data() {
        return {
            routine: null,
            relatedTrades: [],
            routinesStore: useRoutinesStore(),
            tradesStore: useTradesStore()
        }
    },
    computed: {
        displayColumns() {
            return this.routinesStore.routineColumns.filter(col => !col.isInformational);
        },
        hasRelatedData() {
            return this.relatedTrades.length > 0;
        }
    },
    created() {
        const routineId = parseInt(this.$route.params.id);
        this.routine = this.routinesStore.routines.find(r => r.id === routineId);

        if (this.routine) {
            this.relatedTrades = this.tradesStore.trades.filter(
                trade => this.routine.trade_ids.includes(trade.id)
            );
        } else {
            this.$router.push('/routines');
        }
    },
    methods: {
        formatFieldValue(column, value) {
            if (value === undefined || value === null) return 'N/A';
            
            if (column.field === 'plan') {
                return value ? '✅' : '❌';
            }
            
            if (column.options) {
                return column.options[value] || value;
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

.trade-name {
    @apply text-sm text-gray-500;
}
</style>