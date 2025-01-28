import { defineStore } from "pinia";
import { trades } from "../data/trades";
import { generateColumns } from "../utils/columnGenerator";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades: trades,
    tradeFilters: generateColumns(trades),
  }),
});
