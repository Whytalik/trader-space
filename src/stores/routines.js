import { defineStore } from "pinia";
import { routines } from "@/data/routines";
import { routineColumns } from "@/data/routines";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines: routines,
    nextId: 1,
    routineColumns: routineColumns,
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
