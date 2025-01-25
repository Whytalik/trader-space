<template>
  <div class="app-wrapper theme-transition">
    <HeaderComponent />
    <main class="main-content">
      <NavigationAsside v-if="isAuthenticated" />
      <div class="page-content">
        <router-view />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./layout/HeaderComponent.vue";
import FooterComponent from "./layout/FooterComponent.vue";
import NavigationAsside from "./layout/NavigationAsside.vue";
import { useAuthStore } from "./stores/auth";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    NavigationAsside,
  },
  created() {
    this.authStore = useAuthStore();
  },
  data() {
    return {
      authStore: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.app-wrapper {
  @apply min-h-screen flex flex-col;
}

.main-content {
  @apply flex flex-1;
}

.page-content {
  @apply flex-1 p-6 overflow-auto;
}
</style>