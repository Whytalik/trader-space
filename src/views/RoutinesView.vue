<template>
  <DataBaseWrapper
    title="Trading Routines"
    :data="routines"
    :columns="columns"
    routePath="/routines"
    storeId="routines"
  />
</template>

<script>
import { useRoutinesStore } from "../stores/routines";

export default {
  name: "RoutinesView",
  data() {
    return {
      routines: [],
      columns: [],
    };
  },
  created() {
    const routinesStore = useRoutinesStore();
    this.routines = routinesStore.routines;
    this.columns = routinesStore.routineColumns;
  },
};
</script>