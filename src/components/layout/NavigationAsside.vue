<template>
  <nav class="nav-aside">
    <div class="nav-group" v-for="(group, index) in menuGroups" :key="index">
      <div
        class="nav-group-header"
        :class="{ 'nav-group-header--active': group.isOpen }"
        @click="toggleGroup(index)"
      >
        <span class="nav-group-title">{{ group.title }}</span>
        <svg
          class="nav-group-icon"
          :class="{ 'rotate-180': group.isOpen }"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <ul :class="['nav-items', { 'nav-items--open': group.isOpen }]">
        <li v-for="item in group.items" :key="item.path">
          <router-link
            :to="item.path"
            class="nav-link"
            :class="{ 'nav-link--active': checkActiveRoute(item) }"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { navigationConfig } from "@/router/navigation";
import { isActiveRoute } from "@/utils/routeUtils";

const route = useRoute();
const menuGroups = ref(
  navigationConfig.map((group) => ({
    ...group,
    isOpen: group.defaultOpen,
  }))
);

const toggleGroup = (index) => {
  menuGroups.value[index].isOpen = !menuGroups.value[index].isOpen;
};

const checkActiveRoute = (item) => {
  return isActiveRoute(route, item);
};
</script>


<style scoped>
.nav-aside {
  @apply w-64 bg-background border-r p-4 h-auto;
}

.nav-group {
  @apply mb-2;
}

.nav-group-header {
  @apply flex items-center justify-between p-2 cursor-pointer rounded-md border border-transparent;
}

.nav-group-title {
  @apply font-medium text-sm;
}

.nav-group-icon {
  @apply w-4 h-4 transition-transform ease-in-out;
}

.nav-items {
  @apply overflow-hidden max-h-0 transition-all ease-in-out duration-300;
}

.nav-items--open {
  max-height: 500px;
}

.nav-link {
  @apply block px-4 py-2 text-sm rounded-md border-b-2 border-transparent transition-all;
}

.nav-link--active {
  @apply border-b-2 font-medium border-blue-500;
}

.nav-group-header--active .nav-group-icon {
  @apply rotate-180;
}

.nav-link {
  transition: none;
}
</style>
