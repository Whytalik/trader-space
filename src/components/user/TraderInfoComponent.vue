<template>
    <BaseCard title="Trader Information">
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
                <BaseGrid columns="2">
                    <div class="info-item">
                        <span class="label">Username</span>
                        <span>{{ username }}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Email</span>
                        <span>{{ email }}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Trading Experience</span>
                        <span>{{ experience }}</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Account Type</span>
                        <span>{{ accountType }}</span>
                    </div>
                </BaseGrid>
            </div>
        </div>
    </BaseCard>
</template>

<script>
import { useUserStore } from '../../stores/user';

export default {
    name: "TraderInfoComponent",
    data() {
        return {
            userStore: null
        }
    },
    created() {
        this.userStore = useUserStore();
    },
    computed: {
        username() {
            return this.userStore.currentUser?.username || 'N/A';
        },
        email() {
            return this.userStore.currentUser?.email || 'N/A';
        },
        experience() {
            return this.userStore.currentUser?.experience || 'N/A';
        },
        accountType() {
            return this.userStore.currentUser?.accountType || 'Standard';
        },
        userAvatar() {
            return this.userStore.currentUser?.avatar || null;
        }
    }
}
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