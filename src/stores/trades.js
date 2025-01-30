import { defineStore } from "pinia";
import { trades, tradeColumns } from "@/data/trades";
import { sortArray } from "@/utils/sortUtils";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades,
    tradeColumns: tradeColumns,
  }),
  actions: {
    getSortedTrades(column) {
      return sortArray([...this.trades], column);
    },
  },
});
