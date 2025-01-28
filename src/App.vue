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

<script>
import HeaderComponent from "./components/layout/HeaderComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import NavigationAsside from "./components/layout/NavigationAsside.vue";
import PageTitle from "./components/layout/PageTitle.vue";
import { useAuthStore } from "./stores/auth";
import { useUserStore } from "./stores/user";
import { useThemeStore } from "./stores/theme";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    NavigationAsside,
    PageTitle,
  },
  created() {
    this.authStore = useAuthStore();
    this.userStore = useUserStore();
    const themeStore = useThemeStore();
    themeStore.initTheme();

    const defaultUser = this.getDefaultUser();
    if (defaultUser) {
      this.userStore.setCurrentUser(defaultUser);
      this.authStore.setAuthenticationStatus(true);
    }
  },
  data() {
    return {
      authStore: null,
      userStore: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.authStore.isAuthenticated;
    },
    pageTitle() {
      const title = typeof this.$route.meta.title === 'function'
        ? this.$route.meta.title(this.$route)
        : this.$route.meta.title;
      return title?.split('|')[0].trim();
    },
  },
  methods: {
    getDefaultUser() {
      return this.userStore.findUser('ipz224_tvs@student.ztu.edu.ua', 'ipz224_tvs@student.ztu.edu.ua');
    },
  }
};
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