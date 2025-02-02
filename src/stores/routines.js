import { defineStore } from "pinia";
import { routines, routineColumns } from "@/data/routines";
import { useTradesStore } from "./trades";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines,
    routineColumns,
    nextId: Math.max(...routines.map((r) => r.id), 0) + 1,
    sortedRoutinesCache: {},
    routinesByIdCache: {},
    tradeIdCache: {},
  }),

  getters: {
    getRoutineById: (state) => (id) => {
      if (state.routinesByIdCache[id]) {
        return state.routinesByIdCache[id];
      }
      const routine = state.routines.find((r) => r.id === id);
      if (routine) {
        state.routinesByIdCache[id] = routine;
      }
      return routine;
    },

    getRelatedTrades: () => {
      const tradesStore = useTradesStore();
      return (routine) => {
        return routine.trades_id.map((tradeId) =>
          tradesStore.getTradeById(tradeId)
        );
      };
    },

    getTodayRoutines: (state) => {
      const today = new Date().toISOString().split("T")[0];
      return state.routines.filter((routine) => routine.date === today);
    },
  },

  actions: {
    addRoutine(routineData) {
      const newRoutine = {
        id: this.nextId++,
        ...routineData,
        created_at: new Date().toISOString(),
      };
      this.routines.push(newRoutine);
      return newRoutine;
    },

    updateRoutine(id, routineData) {
      const index = this.routines.findIndex((r) => r.id === id);
      if (index !== -1) {
        this.routines[index] = {
          ...this.routines[index],
          ...routineData,
          updated_at: new Date().toISOString(),
        };
        return this.routines[index];
      }
      throw new Error("Routine not found");
    },

    deleteRoutine(id) {
      const index = this.routines.findIndex((r) => r.id === id);
      if (index !== -1) {
        this.routines.splice(index, 1);
      }
    },
  },
});
