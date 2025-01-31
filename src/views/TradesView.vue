<template>
  <DataBaseWrapper
    title="Trades"
    :data="tradesData"
    :columns="columns"
    routePath="/trades"
    storeId="trades"
  />
</template>

<script>
import { mapState } from "pinia";
import { useTradesStore } from "../stores/trades";

export default {
  name: "TradesView",
  computed: {
    ...mapState(useTradesStore, ["trades", "tradeColumns"]),
    columns() {
      return this.tradeColumns;
    },
    tradesData() {
      return this.trades;
    },
  },
};
</script>
