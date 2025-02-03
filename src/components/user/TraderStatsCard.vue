<template>
  <div title="Trading Statistics">
    <div class="stats-grid">
      <!-- Overall Performance Section -->
      <div class="card-item">
        <CardComponent title="Total Trades" :value="totalTrades" />
      </div>
      <div class="card-item">
        <CardComponent title="Total Profit" :value="`$${totalProfit}`" :class="getProfitClass(totalProfit)" />
      </div>

      <!-- Profit Metrics Section -->
      <div class="card-item" v-if="avgWin > 0">
        <CardComponent title="Average Win" :value="`$${avgWin}`" />
      </div>
      <div class="card-item" v-if="avgLoss > 0">
        <CardComponent title="Average Loss" :value="`$${avgLoss}`" />
      </div>
      <div class="card-item" v-if="largestWin > 0">
        <CardComponent title="Largest Win" :value="`$${largestWin}`" />
      </div>
      <div class="card-item" v-if="largestLoss < 0">
        <CardComponent title="Largest Loss" :value="`$${largestLoss}`" />
      </div>

      <!-- Risk Management Section -->
      <div class="card-item">
        <CardComponent title="Average Risk" :value="`${avgRisk}%`" />
      </div>
      <div class="card-item" v-if="maxRisk > 0">
        <CardComponent title="Max Risk" :value="`${maxRisk}%`" />
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from "vue";
import { useTradesStore } from "@/stores/trades";
import { useTradeStats } from "@/composables/useTradeStats";

const tradesStore = useTradesStore();

const trades = computed(() => tradesStore.trades);
const stats = useTradeStats(trades);

const getProfitClass = (profit) => ({
  win: profit > 0,
  lose: profit < 0,
  neutral: profit === 0,
});

const {
  totalTrades,
  totalProfit,
  avgWin,
  largestWin,
  avgLoss,
  largestLoss,
  avgRisk,
  maxRisk,
} = stats;
</script>

<style scoped>
.stats-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

.card-item {
  @apply mb-4;
}
</style>
