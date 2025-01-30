import { defineStore } from "pinia";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    filters: {},
    sort: {},
    visibleColumns: {},
  }),

  actions: {
    setFilters(storeId, filters) {
      if (!this.filters[storeId]) {
        this.filters[storeId] = {
          text: "",
          date: {
            start: "",
            end: "",
          },
        };
      }
      this.filters[storeId] = filters;
    },

    getFilters(storeId) {
      return (
        this.filters[storeId] || {
          text: "",
          date: {
            start: "",
            end: "",
          },
        }
      );
    },

    setSort(storeId, field, direction = "asc") {
      this.sort[storeId] = { field, direction };
    },

    getSort(storeId) {
      return this.sort[storeId] || { field: null, direction: "asc" };
    },

    setVisibleColumns(storeId, columns) {
      this.visibleColumns[storeId] = columns;
    },

    getVisibleColumns(storeId) {
      return this.visibleColumns[storeId] || [];
    },

    clearFilters(storeId) {
      this.filters[storeId] = {
        text: "",
        date: {
          start: "",
          end: "",
        },
      };
    },

    clearSort(storeId) {
      this.sort[storeId] = {
        field: null,
        direction: "asc",
      };
    },
  },
});
