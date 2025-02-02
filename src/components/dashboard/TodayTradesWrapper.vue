<template>
  <div class="today-trades-wrapper" :class="{ 'no-data': !todayTrades.length }">
    <DataBaseWrapper
      title="Today's Trades"
      :data="todayTrades"
      :columns="columns"
      :hideControls="true"
      routePath="/trades"
      storeId="today-trades"
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
import { computed } from "vue";
import { useTradesStore } from "@/stores/trades";
import DataBaseWrapper from "@/components/common/DataBase/DataBaseWrapper.vue";

const tradesStore = useTradesStore();

const columns = tradesStore.tradeColumns;

const todayTrades = computed(() => {
  return tradesStore.getTodayTrades;
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
