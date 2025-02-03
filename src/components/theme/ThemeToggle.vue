<template>
  <button
    @click="toggleTheme"
    class="theme-toggle"
    :class="{ 'theme-toggle--active': theme === 'dark' }"
  >
    <div class="theme-toggle__icons">
      <SunIcon />
      <MoonIcon />
    </div>
    <div class="theme-toggle__slider"></div>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useThemeStore } from "@/stores/theme";
import SunIcon from "@/assets/theme/SunIcon.vue";
import MoonIcon from "@/assets/theme/MoonIcon.vue";

const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<style scoped>
.theme-toggle {
  @apply relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors  cursor-pointer border-none;
}

.theme-toggle__slider {
  @apply absolute top-1 left-1 w-6 h-6 bg-white rounded-full transform transition-all  shadow-md;
}

.theme-toggle--active .theme-toggle__slider {
  @apply translate-x-8;
}

.theme-toggle__icons {
  @apply absolute inset-0 flex justify-between items-center px-1;
}

.theme-toggle__icon {
  @apply w-4 h-4;
}
</style>
