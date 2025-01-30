<template>
  <div>
    <h1 class="title">Welcome to Trader Space</h1>

    <div class="greeting">
      <h2 class="greeting-message">{{ greetingMessage }}</h2>
      <p class="session-message">Have a great trading session ahead!</p>
    </div>

    <div class="info-bar">
      <div class="info-item">
        <span><strong>Time:</strong> {{ currentTime }}</span>
      </div>
      <div class="info-item">
        <span
          ><strong>Day:</strong> {{ currentDay }} | <strong>Weekday:</strong>
          {{ weekday }}</span
        >
      </div>
      <div class="info-item">
        <span><strong>Week Number:</strong> {{ weekNumber }}</span>
      </div>
      <div class="info-item">
        <span
          ><strong>Month:</strong> {{ currentMonth }} |
          <strong>Month Number:</strong> {{ monthNumber }}</span
        >
      </div>
      <div class="info-item">
        <span><strong>Quarter:</strong> {{ currentQuarter }}</span>
      </div>
      <div class="info-item">
        <span><strong>Year:</strong> {{ currentYear }}</span>
      </div>
    </div>

    <div class="dashboard-grid">
      <TodayTradesWrapper />
      <TodayRoutinesWrapper />
    </div>
  </div>
</template>

<script>
import TodayTradesWrapper from "@/components/dashboard/TodayTradesWrapper.vue";
import TodayRoutinesWrapper from "@/components/dashboard/TodayRoutinesWrapper.vue";
import { useUserStore } from "@/stores/user";

export default {
  name: "HomeView",
  components: {
    TodayTradesWrapper,
    TodayRoutinesWrapper
  },
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    currentTime() {
      const now = new Date();
      return now.toLocaleTimeString();
    },
    currentDay() {
      const now = new Date();
      return now.toLocaleDateString();
    },
    weekday() {
      const now = new Date();
      return now.toLocaleString("default", { weekday: "long" });
    },
    weekNumber() {
      const now = new Date();
      const startDate = new Date(now.getFullYear(), 0, 1);
      const diff = now - startDate;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      return Math.ceil(dayOfYear / 7);
    },
    currentMonth() {
      const now = new Date();
      return now.toLocaleString("default", { month: "long" });
    },
    monthNumber() {
      const now = new Date();
      return now.getMonth() + 1; // months are zero-based
    },
    currentQuarter() {
      const now = new Date();
      const month = now.getMonth() + 1;
      return Math.ceil(month / 3);
    },
    currentYear() {
      const now = new Date();
      return now.getFullYear();
    },
    greetingMessage() {
      const hours = new Date().getHours();
      if (hours < 12) {
        return `Good Morning, ${this.userName}!`;
      } else if (hours < 18) {
        return `Good Afternoon, ${this.userName}!`;
      } else {
        return `Good Evening, ${this.userName}!`;
      }
    },
  },
  created() {
    const userStore = useUserStore();
    this.userName = userStore.currentUser.username;
  },
};
</script>

<style scoped>
.title {
  @apply text-3xl font-bold mb-6;
}

.greeting-message {
  @apply text-2xl font-semibold mb-2;
}

.session-message {
  @apply text-xl;
}

.info-bar {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 font-medium text-lg;
}

.info-item {
  @apply flex justify-center items-center space-x-2 py-2 px-4 border border-gray-200 rounded-md shadow-md bg-gray-50 dark:bg-gray-700;
}

strong {
  @apply font-bold;
}

@media (max-width: 768px) {
  .info-bar {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

.dashboard-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}
</style>
