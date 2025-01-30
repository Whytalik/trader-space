import { defineStore } from "pinia";
import { routines, routineColumns } from "../data/routines";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines: routines,
    routineColumns: routineColumns,
  }),
});
