<template>
    <div class="trader-info">
        <h2 class="title">Trader Information</h2>
        <div class="content">
            <div class="photo">
                <div class="photo-container">
                    <img v-if="userAvatar" :src="userAvatar" :alt="username" />
                    <svg v-else viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                </div>
                <button class="btn-primary">Change Photo</button>
            </div>
            <div class="info">
                <div class="info-grid">
                    <div class="info-item">
                        <span class="label">Username</span>
                        <span>{{ username }}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Email</span>
                        <span>{{ email }}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Join Date</span>
                        <span>{{ joinDate }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "../../stores/user";

export default {
    name: "TraderInfoComponent",
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    computed: {
        userAvatar() {
            return this.userStore.currentUser?.avatar || '';
        },
        username() {
            return this.userStore.currentUser?.username || 'Not specified';
        },
        email() {
            return this.userStore.currentUser?.email || 'Not specified';
        },
        joinDate() {
            return this.userStore.currentUser?.joinDate || 'Not specified';
        }
    }
}
</script>

<style scoped>
.trader-info {
    @apply space-y-4;
}

.title {
    @apply text-lg font-medium text-text;
}

.content {
    @apply bg-background p-4 rounded-lg border border-input-border grid grid-cols-1 md:grid-cols-3 gap-6;
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
    @apply md:col-span-2;
}

.info-grid {
    @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.info-item {
    @apply flex flex-col gap-1;
}

.label {
    @apply text-sm text-gray-500 dark:text-gray-400;
}
</style>