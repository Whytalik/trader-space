import { defineStore } from "pinia";
import { routines } from "../data/routines";
import { generateColumns } from "../utils/columnGenerator";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines: routines,
    routineFilters: generateColumns(routines),
  }),
});
