<template>
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
</template>

<script>
import {
  getCurrentTime,
  getCurrentDay,
  getWeekday,
  getWeekNumber,
  getCurrentMonth,
  getMonthNumber,
  getCurrentQuarter,
  getCurrentYear,
} from "@/utils/dateUtils";

export default {
  name: "InfoBar",
  computed: {
    currentTime() {
      return getCurrentTime();
    },
    currentDay() {
      return getCurrentDay();
    },
    weekday() {
      return getWeekday();
    },
    weekNumber() {
      return getWeekNumber();
    },
    currentMonth() {
      return getCurrentMonth();
    },
    monthNumber() {
      return getMonthNumber();
    },
    currentQuarter() {
      return getCurrentQuarter();
    },
    currentYear() {
      return getCurrentYear();
    },
  },
};
</script>

<style scoped>
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
</style>
