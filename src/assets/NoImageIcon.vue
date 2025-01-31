<template>
  <BaseCard title="Trader Information">
    <div>
      <div>
        <div>
          <component :is="userAvatarComponent" />
        </div>
        <button>Change Photo</button>
      </div>
      <div>
        <BaseGrid columns="2">
          <div v-for="(value, label) in userInfo" :key="label">
            <span>{{ label }}</span>
            <span>{{ value }}</span>
          </div>
        </BaseGrid>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import NoImageIcon from "@/assets/NoImageIcon.vue";

const userStore = useUserStore();

const userInfo = computed(() => ({
  Username: userStore.currentUser.username || "N/A",
  Email: userStore.currentUser.email || "N/A",
  "Full Name": userStore.currentUser.full_name || "N/A",
  Location: userStore.currentUser.location || "N/A",
  "Trading Experience": userStore.currentUser.trading_experience || "N/A",
  Bio: userStore.currentUser.bio || "N/A",
}));

const userAvatarComponent = computed(() => {
  return userStore.currentUser?.avatar ? "img" : NoImageIcon;
});
</script>

<style scoped></style>
