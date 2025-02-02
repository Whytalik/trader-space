<template>
  <DataBaseWrapper
    title="Trades"
    :data="tradesData"
    :columns="columns"
    routePath="/trades"
    storeId="trades"
  />
</template>

<script setup>
import { useTradesStore } from "../stores/trades";
import DataBaseWrapper from "@/components/common/DataBase/DatabaseWrapper.vue";

const tradesStore = useTradesStore();
const tradesData = tradesStore.trades;
const columns = tradesStore.tradeColumns;
</script>
