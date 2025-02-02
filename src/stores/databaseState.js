import { defineStore } from "pinia";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    filters: {},
    sort: {},
    visibleColumns: {},
  }),

  getters: {
    getFilters: (state) => (storeId) => {
      return (
        state.filters[storeId] || {
          text: "",
          date: { start: "", end: "" },
        }
      );
    },

    getSort: (state) => (storeId) => {
      return state.sort[storeId] || { field: null, direction: "asc" };
    },

    getVisibleColumns: (state) => (storeId) => {
      return state.visibleColumns[storeId] || [];
    },
  },

  actions: {
    setFilters(storeId, filters) {
      this.filters[storeId] = filters || {
        text: "",
        date: { start: "", end: "" },
      };
    },

    setSort(storeId, field, direction = "asc") {
      this.sort[storeId] = { field, direction };
    },

    setVisibleColumns(storeId, columns) {
      this.visibleColumns[storeId] = columns;
    },

    clearFilters(storeId) {
      this.filters[storeId] = { text: "", date: { start: "", end: "" } };
    },

    clearSort(storeId) {
      this.sort[storeId] = { field: null, direction: "asc" };
    },

    clearVisibleColumns(storeId) {
      this.visibleColumns[storeId] = [];
    },

    clearAll(storeId) {
      this.clearFilters(storeId);
      this.clearSort(storeId);
      this.clearVisibleColumns(storeId);
    },
  },
});
