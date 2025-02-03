<template>
  <div class="dashboard-container">
    <GreetingComponent class="text-center" :userName="username" />

    <InfoBar />

    <div class="dashboard-row">
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

<style scoped>
.dashboard-container {
  @apply p-4;
}

.dashboard-row {
  @apply flex space-x-4 pt-4;
}

.dashboard-row > div {
  @apply flex-1;
}

h1 {
  @apply text-2xl font-semibold mb-4;
}
</style>
