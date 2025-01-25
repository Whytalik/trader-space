<template>
  <header>
    <nav>
      <div class="flex justify-between items-center p-4">
        <div>
          <router-link to="/">Trader Space</router-link>
        </div>
        <div class="flex gap-4">
          <button @click="toggleTheme">
            {{ currentTheme.name === 'dark' ? '🌙' : '☀️' }}
          </button>
          <template v-if="!isAuthenticated">
            <router-link :to="{ name: 'auth', query: { type: 'register' } }">
              Register
            </router-link>
            <router-link :to="{ name: 'auth', query: { type: 'login' } }">
              Login
            </router-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { useAuthStore } from "../stores/auth";
import { useThemeStore } from "../stores/theme";

export default {
  name: "HeaderComponent",
  data() {
    return {
      authStore: null,
      themeStore: null
    };
  },
  created() {
    this.authStore = useAuthStore();
    this.themeStore = useThemeStore();
    this.themeStore.initTheme();
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated;
    },
    currentTheme() {
      return this.themeStore.currentTheme;
    }
  },
  methods: {
    toggleTheme() {
      this.themeStore.toggleTheme();
    }
  }
};
</script>
