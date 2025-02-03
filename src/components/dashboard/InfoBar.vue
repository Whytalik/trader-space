<template>
  <div class="info-bar">
    <CardComponent title="Time" :value="currentTime" />
    <CardComponent title="Day" :value="currentDay" />
    <CardComponent title="Weekday" :value="weekday" />
    <CardComponent title="Week Number" :value="weekNumber" />
    <CardComponent title="Month" :value="currentMonth" />
    <CardComponent title="Month Number" :value="monthNumber" />
    <CardComponent title="Quarter" :value="currentQuarter" />
    <CardComponent title="Year" :value="currentYear" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const currentTime = ref(getCurrentTime());
const currentDay = ref(getCurrentDay());
const weekday = ref(getWeekday());
const weekNumber = ref(getWeekNumber());
const currentMonth = ref(getCurrentMonth());
const monthNumber = ref(getMonthNumber());
const currentQuarter = ref(getCurrentQuarter());
const currentYear = ref(getCurrentYear());

const updateTime = () => {
  currentTime.value = getCurrentTime();
};

onMounted(() => {
  const intervalId = setInterval(updateTime, 1000);

  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped>
.info-bar {
  @apply grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 font-medium text-lg;
}
</style>
