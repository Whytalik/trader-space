<template>
  <DataBaseWrapper
    title="Trading Routines"
    :data="routinesData"
    :columns="columns"
    routePath="/routines"
    storeId="routines"
  />
</template>

<script>
import { mapState } from "pinia";
import { useRoutinesStore } from "../stores/routines";

export default {
  name: "RoutinesView",
  computed: {
    ...mapState(useRoutinesStore, ["routines", "routineColumns"]),
    columns() {
      return this.routineColumns;
    },
    routinesData() {
      return this.routines;
    },
  },
};
</script>
