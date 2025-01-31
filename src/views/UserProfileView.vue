<template>
  <div>
    <TraderInfoComponent />
    <TraderStatsCard />
  </div>
</template>

<script>
import TraderInfoComponent from "../components/user/TraderInfoComponent.vue";
import TraderStatsCard from "../components/user/TraderStatsCard.vue";

export default {
  name: "UserProfileView",
  components: {
    TraderInfoComponent,
    TraderStatsCard,
  },
};
</script>

<style scoped></style>
