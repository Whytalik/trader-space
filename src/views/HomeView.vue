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

<script>
import TodayTradesWrapper from "@/components/dashboard/TodayTradesWrapper.vue";
import TodayRoutinesWrapper from "@/components/dashboard/TodayRoutinesWrapper.vue";
import InfoBar from "@/components/dashboard/InfoBar.vue";
import GreetingComponent from "../components/dashboard/GreetingComponent.vue";
import { useUserStore } from "@/stores/user";
import { mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    TodayTradesWrapper,
    TodayRoutinesWrapper,
    InfoBar,
    GreetingComponent,
  },
  computed: {
    ...mapState(useUserStore, ["currentUser"]),
    username() {
      return this.currentUser.username;
    },
  },
};
</script>

<style scoped></style>
