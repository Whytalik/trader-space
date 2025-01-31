<template>
  <div>
    <h1>Welcome to Trader Space</h1>

    <GreetingComponent :userName="username" />

    <InfoBar />

    <div>
      <TodayTradesWrapper />
      <TodayRoutinesWrapper />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import TodayTradesWrapper from "@/components/dashboard/TodayTradesWrapper.vue";
import TodayRoutinesWrapper from "@/components/dashboard/TodayRoutinesWrapper.vue";
import InfoBar from "@/components/dashboard/InfoBar.vue";
import GreetingComponent from "../components/dashboard/GreetingComponent.vue";

const userStore = useUserStore();
const username = computed(() => userStore.currentUser.username);
</script>

<style scoped></style>
