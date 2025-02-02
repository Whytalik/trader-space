<template>
  <div>
    <h1>Welcome to Trader Space</h1>

    <GreetingComponent :userName="username" />

    <InfoBar />

    <div>
      <TodayTradesWrapper />
      <TodayRoutinesWrapper />
    </div>

    <ProfitLineChart :trades="trades" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import { useTradesStore } from "@/stores/trades";
import TodayTradesWrapper from "@/components/dashboard/TodayTradesWrapper.vue";
import TodayRoutinesWrapper from "@/components/dashboard/TodayRoutinesWrapper.vue";
import InfoBar from "@/components/dashboard/InfoBar.vue";
import GreetingComponent from "../components/dashboard/GreetingComponent.vue";
import ProfitLineChart from "@/components/charts/ProfitLineChart.vue";
const userStore = useUserStore();
const username = computed(() => userStore.currentUser.username);
const tradesStore = useTradesStore();
const trades = computed(() => tradesStore.trades);
</script>

<style scoped></style>
