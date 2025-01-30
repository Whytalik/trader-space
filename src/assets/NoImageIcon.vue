<template>
  <BaseCard title="Trader Information">
    <div class="content">
      <div class="photo">
        <div class="photo-container">
          <component :is="userAvatarComponent" />
        </div>
        <button class="btn-primary">Change Photo</button>
      </div>
      <div class="info">
        <BaseGrid columns="2">
          <div
            class="info-item"
            v-for="(value, label) in userInfo"
            :key="label"
          >
            <span class="label">{{ label }}</span>
            <span>{{ value }}</span>
          </div>
        </BaseGrid>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import { useUserStore } from "@/stores/user";
import NoImageIcon from "@/assets/NoImageIcon.vue";

export default {
  name: "TraderInfoComponent",
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  computed: {
    userInfo() {
      const user = this.userStore.currentUser || {};
      return {
        Username: user.username || "N/A",
        Email: user.email || "N/A",
        "Full Name": user.full_name || "N/A",
        Location: user.location || "N/A",
        "Trading Experience": user.trading_experience || "N/A",
        Bio: user.bio || "N/A",
      };
    },
    userAvatarComponent() {
      return this.userStore.currentUser?.avatar
        ? {
            render: (h) =>
              h("img", {
                attrs: {
                  src: this.userStore.currentUser.avatar,
                  alt: this.userStore.currentUser.username,
                },
              }),
          }
        : NoImageIcon;
    },
  },
};
</script>

<style scoped>
.content {
  @apply flex flex-col md:flex-row gap-6;
}

.photo {
  @apply flex flex-col items-center gap-4;
}

.photo-container {
  @apply w-48 h-48 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center;
}

.photo-container img,
.photo-container svg {
  @apply w-full h-full object-cover;
}

.photo-container svg {
  @apply w-24 h-24 text-gray-400;
}

.info {
  @apply flex-1;
}

.info-item {
  @apply flex flex-col gap-1;
}

.label {
  @apply text-sm text-gray-500 dark:text-gray-400;
}

.btn-primary {
  @apply px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-lg hover:bg-button-primary-hover transition-colors duration-fast;
}
</style>
