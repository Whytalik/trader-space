<template>
  <div class="user-container">
    <div class="user-avatar-wrapper">
      <img
        v-if="userAvatar"
        :src="userAvatar"
        :alt="`${username}'s avatar`"
        class="user-avatar"
      />
      <UserAvatarPlaceholder v-else />
    </div>
    <p class="user-name">{{ username }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useUserStore } from "@/stores/user";
import UserAvatarPlaceholder from "@/assets/UserAvatarPlaceholder.vue";

const userStore = useUserStore();

const userAvatar = computed(() => userStore.currentUser?.avatar || "");
const username = computed(() => userStore.currentUser?.username || "User");
</script>

<style scoped>
.user-container {
  @apply flex items-center gap-3;
}

.user-avatar-wrapper {
  @apply w-8 h-8 overflow-hidden rounded-full;
}

.user-avatar {
  @apply w-full h-full object-cover;
}

.user-name {
  @apply text-sm font-medium;
}

@media (max-width: 768px) {
  .user-name {
    @apply text-base;
  }

  .user-avatar-wrapper {
    @apply w-10 h-10;
  }
}
</style>
