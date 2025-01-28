<template>
    <div class="view-menu">
        <button class="view-menu-item" :class="{ 'active': currentView === 'list' }" @click="selectView('list')">
            List View
        </button>
        <button class="view-menu-item" :class="{ 'active': currentView === 'gallery' }" @click="selectView('gallery')">
            Gallery View
        </button>
    </div>
</template>

<script>
export default {
    name: "ViewMenu",
    props: {
        currentView: {
            type: String,
            required: true,
        },
    },
    emits: ["select-view"],
    methods: {
        selectView(view) {
            this.$emit("select-view", view);
        },
    },
};
</script>

<style scoped>
.view-menu {
    @apply absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
}

.view-menu-item {
    @apply w-full px-4 py-2 text-left text-sm hover:bg-input-bg transition-colors duration-fast;
}

.view-menu-item.active {
    @apply bg-input-bg text-button-primary-bg;
}
</style>