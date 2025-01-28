<template>
  <div class="database-header">
    <h2 class="database-title">{{ title }}</h2>
    <div class="database-actions">
      <slot name="actions"></slot>
      <div class="view-controls">
        <button
          v-if="isListView()"
          class="control-btn"
          @click="toggleColumnsMenu"
        >
          <MenuIcon />
        </button>
        <div class="view-toggle-wrapper">
          <button class="control-btn" @click="toggleViewMenu">
            <ListIcon v-if="currentView === 'list'" />
            <GalleryIcon v-else />
          </button>
          <ViewMenu
            v-if="showViewMenu"
            :currentView="currentView"
            @select-view="selectView"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIcon from "@/assets/DataBase/MenuIcon.vue";
import ListIcon from "@/assets/DataBase/ListIcon.vue";
import GalleryIcon from "@/assets/DataBase/GalleryIcon.vue";
import ViewMenu from "./ViewMenu.vue";

export default {
  name: "DatabaseHeader",
  components: {
    MenuIcon,
    ListIcon,
    GalleryIcon,
    ViewMenu,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    currentView: {
      type: String,
      required: true,
    },
    showViewMenu: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["toggle-columns-menu", "toggle-view-menu", "select-view"],
  methods: {
    toggleColumnsMenu() {
      this.$emit("toggle-columns-menu");
    },
    toggleViewMenu() {
      this.$emit("toggle-view-menu");
    },
    selectView(view) {
      this.$emit("select-view", view);
    },
    isListView() {
      return this.currentView === "list";
    },
  },
};
</script>

<style scoped>
.database-header {
  @apply flex justify-between items-center mb-4;
}

.database-actions {
  @apply flex items-center gap-4;
}

.view-controls {
  @apply flex items-center gap-1 ml-auto;
}

.control-btn {
  @apply p-2 rounded-md hover:bg-input-bg transition-colors duration-fast;
}

.control-btn.active {
  @apply bg-input-bg text-button-primary-bg;
}
</style>
