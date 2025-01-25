<template>
    <div class="user-container">
        <div class="user-avatar-wrapper">
            <img v-if="userAvatar" :src="userAvatar" :alt="`${username}'s avatar`" class="user-avatar" />
            <svg v-else class="user-avatar-placeholder" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        </div>
        <p class="user-name">{{ username }}</p>
    </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
    name: "UserComponent",
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    computed: {
        userAvatar() {
            return this.userStore.currentUser?.avatar || '';
        },
        username() {
            return this.userStore.currentUser?.username || 'User';
        }
    }
};
</script>

<style scoped>
.user-container {
    @apply flex items-center gap-3;
}

.user-avatar-wrapper {
    @apply w-8 h-8 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700;
}

.user-avatar {
    @apply w-full h-full object-cover;
}

.user-avatar-placeholder {
    @apply w-full h-full text-gray-400 dark:text-gray-500;
}

.user-name {
    @apply text-sm font-medium;
}
</style>
