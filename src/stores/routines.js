import { defineStore } from "pinia";
import { routines } from "../data/routines";

export const useRoutinesStore = defineStore("routines", {
  state: () => ({
    routines: routines,
  }),
});
