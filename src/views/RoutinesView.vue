<template>
  <DataBaseWrapper
    title="Trading Routines"
    :data="routinesData"
    :columns="columns"
    routePath="/routines"
    storeId="routines"
  />
</template>

<script setup>
import { useRoutinesStore } from "../stores/routines";
import DataBaseWrapper from "@/components/common/DataBase/DatabaseWrapper.vue";

const routinesStore = useRoutinesStore();
const routinesData = routinesStore.routines;
const columns = routinesStore.routineColumns;
</script>
