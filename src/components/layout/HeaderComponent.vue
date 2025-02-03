<template>
  <header>
    <div class="container">
      <div class="meta-wrapper">
        <img src="@/../public/icon.png" alt="Trader Space Logo" class="logo" />
        <router-link to="/" class="logo-text">Trader Space</router-link>
      </div>
      <div class="user-container">
        <UserComponent v-if="isAuthenticated" @click="navigateToUserProfile" />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import ThemeToggle from "../theme/ThemeToggle.vue";
import UserComponent from "../user/UserComponent.vue";

const router = useRouter();
const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.isAuthenticated);

const navigateToUserProfile = () => {
  router.push("/user-profile");
};
</script>

<style scoped>
.container {
  @apply flex justify-between items-center p-4 w-full border-b border-b-text;
  box-sizing: border-box;
  max-width: 100%;
}

.logo-text {
  @apply text-title font-semibold;
}

.meta-wrapper {
  @apply flex items-center gap-2;
}

.user-container {
  @apply flex gap-4 items-center cursor-pointer;
}
</style>
