<template>
  <div title="Trader Information">
    <div>
      <div>
        <div>
          <component :is="userAvatarComponent" />
        </div>
        <BaseButton label="Change Photo"></BaseButton>
      </div>
      <div class="user-info">
        <div
          v-for="(value, label) in userInfo"
          :key="label"
          class="user-info-item"
        >
          <span class="label">{{ label }}</span>
          <span class="value">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
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

<style scoped>
.user-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.user-info-item {
  width: 48%;
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}

.value {
  margin-left: 10px;
  color: #555;
}
</style>
