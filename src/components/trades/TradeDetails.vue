<template>
    <div class="trade-view">
        <div class="trade-header">
            <h2 class="trade-title">Trade Details</h2>
            <BaseButton @click="$router.push('/trades')">Back to Trades</BaseButton>
        </div>
        <div class="trade-content" v-if="trade">
            <div class="trade-info">
                <div class="info-grid">
                    <div class="info-item" v-for="(value, key) in trade" :key="key">
                        <span class="label">{{ formatLabel(key) }}</span>
                        <span class="value">{{ formatValue(value) }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="trade-not-found">
            Trade not found
        </div>
    </div>
</template>

<script>
import { useTradesStore } from "../../stores/trades";

export default {
    name: "TradeDetails",
    data() {
        return {
            trade: null
        }
    },
    created() {
        const tradeId = parseInt(this.$route.params.id);
        const tradesStore = useTradesStore();
        this.trade = tradesStore.trades.find(t => t.id === tradeId);

        if (!this.trade) {
            this.$router.push('/trades');
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
            return value;
        }
    }
}
</script>

<style scoped>
.trade-view {
    @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-6;
}

.trade-header {
    @apply flex justify-between items-center mb-6;
}

.trade-title {
    @apply text-2xl font-medium;
}

.trade-content {
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

.trade-not-found {
    @apply text-center py-12 text-gray-500;
}
</style>