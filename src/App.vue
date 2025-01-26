<template>
  <div class="app-wrapper theme-transition">
    <HeaderComponent />
    <main class="main-content">
      <NavigationAsside v-if="isAuthenticated" />
      <div class="page-content">
        <PageTitle v-if="isAuthenticated" :title="$route.meta.title?.split('|')[0].trim()" />
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

    const defaultUser = this.userStore.findUser('ipz224_tvs@student.ztu.edu.ua', 'ipz224_tvs@student.ztu.edu.ua');
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