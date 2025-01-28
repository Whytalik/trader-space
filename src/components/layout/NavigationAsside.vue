<template>
  <nav class="nav-aside">
    <div class="nav-group" v-for="(group, index) in menuGroups" :key="index">
      <div class="nav-group-header" :class="{ 'nav-group-header--active': group.isOpen }" @click="toggleGroup(index)">
        <span class="nav-group-title">{{ group.title }}</span>
        <svg class="nav-group-icon" :class="{ 'rotate-180': group.isOpen }" viewBox="0 0 24 24" fill="none"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <transition name="slide" @enter="startTransition" @after-enter="afterTransition" @before-leave="beforeTransition"
        @leave="endTransition">
        <ul v-show="group.isOpen" class="nav-items">
          <li v-for="item in group.items" :key="item.path">
            <router-link :to="item.path" class="nav-link" :class="{ 'nav-link--active': isActiveRoute(item) }">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
import { useRoute } from 'vue-router';
import { navigationConfig } from '@/router/navigation';

export default {
  name: "NavigationAsside",
  data() {
    return {
      menuGroups: navigationConfig.map(group => ({
        ...group,
        isOpen: group.defaultOpen
      }))
    };
  },
  setup() {
    const route = useRoute();
    return { route };
  },
  methods: {
    toggleGroup(index) {
      this.menuGroups[index].isOpen = !this.menuGroups[index].isOpen;
    },
    startTransition(el) {
      el.style.height = '0';
      el.style.opacity = '0';
      void el.offsetHeight;
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    afterTransition(el) {
      el.style.height = 'auto';
    },
    beforeTransition(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    endTransition(el) {
      el.style.height = '0';
      el.style.opacity = '0';
    },
    isActiveRoute(item) {
      if (item.children) {
        return this.route.path.startsWith(item.path);
      }
      return this.route.path === item.path;
    }
  }
};
</script>

<style scoped>
.nav-aside {
  @apply w-64 h-screen bg-background border-r border-input-border p-4;
}

.nav-group {
  @apply mb-2;
}

.nav-group-header {
  @apply flex items-center justify-between p-2 cursor-pointer hover:bg-input-bg rounded-md border border-transparent;
}

.nav-group-header--active {
  @apply border-input-focus bg-input-bg;
}

.nav-group-title {
  @apply font-medium text-sm;
}

.nav-group-icon {
  @apply w-4 h-4 transition-transform duration-fast ease-in-out;
}

.nav-items {
  @apply overflow-hidden;
}

.nav-link {
  @apply block px-4 py-2 text-sm rounded-md hover:bg-input-bg hover:text-button-primary-bg border-b-2 border-transparent transition-all duration-fast;
}

.nav-link--active {
  @apply bg-input-bg border-b-2 border-b-input-focus text-button-primary-bg font-medium;
}

.slide-enter-active,
.slide-leave-active {
  @apply transition-all duration-fast ease-in-out;
}
</style>
