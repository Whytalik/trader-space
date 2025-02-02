import { defineStore } from "pinia";
import { trades, tradeColumns } from "@/data/trades";
import { useRoutinesStore } from "./routines";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades,
    tradeColumns,
    nextId: Math.max(...trades.map((trade) => trade.id), 0) + 1,
    sortedTradesCache: {},
    tradesByIdCache: {},
  }),

  getters: {
    getTradeById: (state) => (id) => {
      if (state.tradesByIdCache[id]) {
        return state.tradesByIdCache[id];
      }

      const trade = state.trades.find((trade) => trade.id === id);
      if (trade) {
        state.tradesByIdCache[id] = trade;
      }
      return trade;
    },

    getRelatedRoutine: () => {
      const routinesStore = useRoutinesStore();
      return (trade) => {
        return routinesStore.routines.filter((routine) =>
          routine.trades_id.includes(trade.id)
        );
      };
    },

    getTodayTrades: (state) => {
      const today = new Date().toISOString().split("T")[0];
      return state.trades.filter((trade) => trade.date === today);
    },
  },

  actions: {
    addTrade(tradeData) {
      const newTrade = {
        id: this.nextId++,
        ...tradeData,
        created_at: new Date().toISOString(),
      };
      this.trades.push(newTrade);
      this.sortedTradesCache = {};
      this.tradesByIdCache = {};
      return newTrade;
    },

    updateTrade(id, tradeData) {
      const index = this.trades.findIndex((trade) => trade.id === id);
      if (index !== -1) {
        this.trades[index] = {
          ...this.trades[index],
          ...tradeData,
          updated_at: new Date().toISOString(),
        };
        this.sortedTradesCache = {};
        delete this.tradesByIdCache[id];
        return this.trades[index];
      }
      throw new Error("Trade not found");
    },

    deleteTrade(id) {
      const index = this.trades.findIndex((trade) => trade.id === id);
      if (index !== -1) {
        const deletedTrade = this.trades.splice(index, 1)[0];
        this.sortedTradesCache = {};
        delete this.tradesByIdCache[id];
        return deletedTrade;
      }
      throw new Error("Trade not found");
    },
  },
});
