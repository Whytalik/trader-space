<template>
  <DataBaseWrapper
    title="Trades"
    :data="trades"
    :columns="columns"
    :defaultView="defaultView"
    routePath="/trades"
  />
</template>

<script>
import { useTradesStore } from "../stores/trades";

export default {
  name: "TradesView",
  data() {
    return {
      trades: [],
      columns: [],
    };
  },
  created() {
    const tradesStore = useTradesStore();
    this.trades = tradesStore.getSortedTrades();
    this.columns = tradesStore.tradeFilters;
    this.defaultView = tradesStore.currentView;
  },
};
</script>
