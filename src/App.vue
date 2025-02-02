<template>
  <div class="app-wrapper theme-transition">
    <HeaderComponent />
    <main class="main-content">
      <NavigationAsside v-if="isAuthenticated" />
      <div class="page-content">
        <PageTitle v-if="isAuthenticated" :title="pageTitle" />
        <router-view />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useAuthStore } from "./stores/auth";
import { useUserStore } from "./stores/user";
import { useThemeStore } from "./stores/theme";
import { useRoute } from "vue-router";
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import NavigationAsside from "./components/layout/NavigationAsside.vue";
import PageTitle from "./components/layout/PageTitle.vue";

const authStore = useAuthStore();
const userStore = useUserStore();
const themeStore = useThemeStore();
const route = useRoute();

const isAuthenticated = computed(() => authStore.isAuthenticated);

const pageTitle = computed(() => {
  const title =
    typeof route.meta.title === "function"
      ? route.meta.title(route)
      : route.meta.title;
  return title?.split("|")[0].trim();
});

const getDefaultUser = () => {
  return userStore.findUser(
    "ipz224_tvs@student.ztu.edu.ua",
    "ipz224_tvs@student.ztu.edu.ua"
  );
};

onMounted(() => {
  themeStore.initTheme();

  const defaultUser = getDefaultUser();
  if (defaultUser) {
    userStore.setCurrentUser(defaultUser);
    authStore.setAuthenticationStatus(true);
  }
});
</script>

<style scoped>
.app-wrapper {
  @apply min-h-screen flex flex-col bg-background text-text;
}

.main-content {
  @apply flex flex-1;
}

.page-content {
  @apply flex-1 p-6 overflow-auto;
}
</style>
