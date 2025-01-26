import { defineStore } from "pinia";
import { trades } from "../data/trades";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades: trades,
  }),
});
