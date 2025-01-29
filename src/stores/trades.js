import { defineStore } from "pinia";
import { trades } from "../data/trades";
import { generateColumns } from "../utils/columnGenerator";
import { sortArray } from "@/utils/sortUtils";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades: trades,
    tradeFilters: generateColumns(trades),
    currentView: "list",
  }),
  actions: {
    getSortedTrades(column) {
      return sortArray([...this.trades], column);
    },
  },
});
