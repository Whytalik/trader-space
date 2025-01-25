<template>
  <button @click="toggleTheme" class="theme-toggle" :class="{ 'theme-toggle--active': theme === 'dark' }">
    <div class="theme-toggle__icons">
      <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </div>
    <div class="theme-toggle__slider"></div>
  </button>
</template>

<script>
import { useThemeStore } from "../../stores/theme";

export default {
  name: "ThemeToggle",
  data() {
    return {
      themeStore: null
    };
  },
  created() {
    this.themeStore = useThemeStore();
  },
  computed: {
    theme() {
      return this.themeStore.theme;
    }
  },
  methods: {
    toggleTheme() {
      this.themeStore.toggleTheme();
    }
  }
};
</script>

<style scoped>
.theme-toggle {
  @apply relative w-16 h-8 rounded-full bg-gray-200 
         dark:bg-gray-700 transition-colors duration-normal 
         cursor-pointer border-none;
}

.theme-toggle__slider {
  @apply absolute top-1 left-1 w-6 h-6 bg-white 
         rounded-full transform transition-all duration-normal shadow-md;
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

.theme-toggle__icon--sun {
  @apply text-yellow-500;
}

.theme-toggle__icon--moon {
  @apply text-blue-300;
}
</style>
