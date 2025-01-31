<!-- components/ThemeToggle.vue -->
<template>
  <button @click="toggleTheme" class="theme-toggle" :class="{ 'theme-toggle--active': theme === 'dark' }">
    <div class="theme-toggle__icons">
      <SunIcon />
      <MoonIcon />
    </div>
    <div class="theme-toggle__slider"></div>
  </button>
</template>

<script>
import { useThemeStore } from "../../stores/theme";
import SunIcon from "@/assets/theme/SunIcon.vue";
import MoonIcon from "../../assets/ThemeIcons/MoonIcon.vue";

export default {
  name: "ThemeToggle",
  components: {
    SunIcon,
    MoonIcon,
  },
  data() {
    return {
      themeStore: null,
    };
  },
  created() {
    this.themeStore = useThemeStore();
  },
  computed: {
    theme() {
      return this.themeStore.theme;
    },
  },
  methods: {
    toggleTheme() {
      this.themeStore.toggleTheme();
    },
  },
};
</script>

<style scoped>
.theme-toggle {
  @apply relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-normal cursor-pointer border-none;
}

.theme-toggle__slider {
  @apply absolute top-1 left-1 w-6 h-6 bg-white rounded-full transform transition-all duration-normal shadow-md;
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