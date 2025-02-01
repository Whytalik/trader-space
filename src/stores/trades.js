import { defineStore } from "pinia";
import { trades, tradeColumns } from "@/data/trades";
import { sortArray } from "@/utils/sortUtils";

export const useTradesStore = defineStore("trades", {
  state: () => ({
    trades,
    tradeColumns,
    nextId: Math.max(...trades.map((trade) => trade.id), 0) + 1,
    sortedTradesCache: {},
    tradesByIdCache: {},
  }),

  getters: {
    getSortedTrades: (state) => (column) => {
      if (state.sortedTradesCache[column]) {
        return state.sortedTradesCache[column];
      }

      const sortedTrades = sortArray([...state.trades], column);
      state.sortedTradesCache[column] = sortedTrades;
      return sortedTrades;
    },

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

    getRoutine: (state) => (tradeId) => {
      return state.trades.find((trade) => trade.id === tradeId)?.routine_id;
    },
  },

  actions: {
    find(id) {
      const trade = this.trades.find((trade) => trade.id === id);
      return trade || null;
    },
    
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
