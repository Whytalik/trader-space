import { defineStore } from "pinia";
import { routines, routineColumns } from "@/data/routines";
import { sortArray } from "@/utils/sortUtils";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines: routines,
    routineColumns: routineColumns,
    nextId: Math.max(...routines.map((r) => r.id), 0) + 1,
    tradeIdCache: {},
  }),

  getters: {
    getSortedRoutines: (state) => (column) => {
      if (state.sortedRoutinesCache[column]) {
        return state.sortedRoutinesCache[column];
      }

      const sortedRoutines = sortArray([...state.routines], column);
      state.sortedRoutinesCache[column] = sortedRoutines;
      return sortedRoutines;
    },
    getRoutinesByTradeId: (state) => {
      return (tradeId) => {
        if (state.tradeIdCache[tradeId]) {
          return state.tradeIdCache[tradeId];
        }

        const routinesForTrade = state.routines.filter(
          (routine) => routine.trade_ids && routine.trade_ids.includes(tradeId)
        );

        state.tradeIdCache[tradeId] = routinesForTrade;
        return routinesForTrade;
      };
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
        Object.keys(this.tradeIdCache).forEach((key) => {
          this.tradeIdCache[key] = this.tradeIdCache[key].filter(
            (r) => r.id !== id
          );
        });
      }
    },
  },
});
