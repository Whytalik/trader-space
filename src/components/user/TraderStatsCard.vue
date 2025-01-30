<template>
  <BaseCard title="Trading Statistics">
    <div class="stats-grid">
      <div class="stats-section">
        <h3 class="section-title">Overall Performance</h3>
        <div class="stats-items">
          <CardItem>
            <span class="stat-label">Total Trades</span>
            <span class="stat-value highlight">{{ totalTrades }}</span>
          </CardItem>
          <CardItem>
            <span class="stat-label">Total Profit</span>
            <span class="stat-value" :class="getProfitClass(totalProfit)"
              >${{ totalProfit }}</span
            >
          </CardItem>
        </div>
      </div>

      <div class="stats-section">
        <h3 class="section-title">Profit Metrics</h3>
        <div class="stats-items">
          <CardItem v-if="avgWin > 0">
            <span class="stat-label">Average Win</span>
            <span class="stat-value win">${{ avgWin }}</span>
            <span class="sub-stat">Largest: ${{ largestWin }}</span>
          </CardItem>
          <CardItem v-if="avgLoss > 0">
            <span class="stat-label">Average Loss</span>
            <span class="stat-value lose">${{ avgLoss }}</span>
            <span class="sub-stat">Largest: ${{ largestLoss }}</span>
          </CardItem>
        </div>
      </div>

      <div class="stats-section">
        <h3 class="section-title">Risk Management</h3>
        <div class="stats-items">
          <CardItem>
            <span class="stat-label">Average Risk</span>
            <span class="stat-value">{{ avgRisk }}%</span>
            <span class="sub-stat">Max Risk: {{ maxRisk }}%</span>
          </CardItem>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import { useTradesStore } from "@/stores/trades";
import { useTradeStats } from "@/composables/useTradeStats";
import { computed } from "vue";

export default {
  name: "TraderStatsCard",
  setup() {
    const tradesStore = useTradesStore();
    const trades = computed(() => tradesStore.trades);
    const stats = useTradeStats(trades);

    return {
      ...stats,
      getProfitClass(profit) {
        return {
          win: profit > 0,
          lose: profit < 0,
          neutral: profit === 0,
        };
      },
    };
  },
};
</script>

<style scoped>
.stats-grid {
  @apply grid gap-6;
}

.stats-section {
  @apply bg-white dark:bg-gray-800 rounded-lg p-4 border border-input-border;
}

.section-title {
  @apply text-lg font-medium mb-4 text-gray-700 dark:text-gray-300;
}

.stats-items {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4;
}

.stat-label {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

.stat-value {
  @apply text-xl font-medium;
}

.sub-stat {
  @apply text-xs text-gray-500 dark:text-gray-400 mt-1;
}

.highlight {
  @apply text-blue-600 dark:text-blue-400;
}

.win {
  @apply text-green-600 dark:text-green-400;
}

.lose {
  @apply text-red-600 dark:text-red-400;
}

.neutral {
  @apply text-yellow-600 dark:text-yellow-400;
}
</style>
