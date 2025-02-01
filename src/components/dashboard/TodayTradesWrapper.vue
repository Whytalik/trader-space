<template>
  <div class="today-trades-wrapper" :class="{ 'no-data': !todayTrades.length }">
    <DataBaseWrapper
      title="Today's Trades"
      :data="todayTrades"
      :columns="columns"
      routePath="/trades"
      storeId="today-trades"
      :hideControls="true"
    >
      <template #empty-state>
        <div class="empty-state">
          <p>No trades for today</p>
        </div>
      </template>
    </DataBaseWrapper>
  </div>
</template>

<script setup>
import { useTradesStore } from "@/stores/trades";
import DataBaseWrapper from "@/components/common/DataBase/DataBaseWrapper.vue";
import { computed } from "vue";

const tradesStore = useTradesStore();

const trades = tradesStore.getSortedTrades();
const columns = tradesStore.tradeColumns;

const todayTrades = computed(() => {
  const today = new Date().toISOString().split("T")[0];
  return trades.filter((trade) => trade.date === today);
});
</script>

<style scoped>
.today-trades-wrapper {
  @apply mb-6;
}

.today-trades-wrapper.no-data {
  @apply h-auto;
}

.empty-state {
  @apply flex flex-col items-center justify-center py-8;
}

.empty-state p {
  @apply text-gray-500 mb-2;
}
</style>
