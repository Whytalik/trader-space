<template>
  <header>
    <nav>
      <div>
        <div>
          <router-link to="/">Trader Space</router-link>
        </div>
        <div>
          <template v-if="!isAuthenticated">
            <router-link :to="{ name: 'auth', query: { type: 'register' } }">Register</router-link>
            <router-link :to="{ name: 'auth', query: { type: 'login' } }">Login</router-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  name: "HeaderComponent",
  computed: {
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    },
  },
};
</script>
