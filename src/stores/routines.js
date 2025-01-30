import { defineStore } from "pinia";
import { routines, routineColumns } from "@/data/routines";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines,
    routineColumns
  }),

  getters: {
    getRoutinesByTradeId: (state) => {
      return (tradeId) => {
        return state.routines.filter(
          (routine) => routine.trade_ids && routine.trade_ids.includes(tradeId)
        );
      };
    },
  },

  actions: {
    addRoutine(routine) {
      this.routines.push(routine);
    },

    updateRoutine(updatedRoutine) {
      const index = this.routines.findIndex((r) => r.id === updatedRoutine.id);
      if (index !== -1) {
        this.routines[index] = updatedRoutine;
      }
    },

    deleteRoutine(routineId) {
      this.routines = this.routines.filter((r) => r.id !== routineId);
    },
  },
});
