<template>
    <div class="database-wrapper">
        <div class="database-header">
            <h2 class="database-title">{{ title }}</h2>
            <div class="database-actions">
                <slot name="actions"></slot>
                <div class="view-controls">
                    <button class="control-btn" @click="toggleColumnsMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div class="view-toggle-wrapper">
                        <button class="control-btn" @click="toggleViewMenu">
                            <svg v-if="currentView === 'list'" xmlns="http://www.w3.org/2000/svg" class="icon"
                                viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M2 4.75A.75.75 0 012.75 4h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h18.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6z"
                                    clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div v-if="showViewMenu" class="view-menu">
                            <button class="view-menu-item" :class="{ 'active': currentView === 'list' }"
                                @click="selectView('list')">
                                List View
                            </button>
                            <button class="view-menu-item" :class="{ 'active': currentView === 'gallery' }"
                                @click="selectView('gallery')">
                                Gallery View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showColumnsMenu" class="columns-menu">
            <div v-for="column in columns" :key="column.field" class="column-item">
                <label class="checkbox-wrapper">
                    <input type="checkbox" v-model="column.visible" @change="updateColumns(columns)">
                    {{ column.header }}
                </label>
            </div>
        </div>
        <div class="database-content">
            <ListView v-if="currentView === 'list'" :data="data" :columns="columns" :routePath="routePath">
                <template #item-actions="slotProps">
                    <slot name="item-actions" v-bind="slotProps"></slot>
                </template>
            </ListView>
            <GalleryView v-else :data="data" :routePath="routePath">
                <template #item-actions="slotProps">
                    <slot name="item-actions" v-bind="slotProps"></slot>
                </template>
            </GalleryView>
        </div>
    </div>
</template>

<script>
import ListView from './views/ListView.vue'
import GalleryView from './views/GalleryView.vue'

export default {
    name: "DataBaseWrapper",
    components: {
        ListView,
        GalleryView
    },
    props: {
        title: {
            type: String,
            required: true
        },
        columns: {
            type: Array,
            required: false
        },
        data: {
            type: Array,
            required: true
        },
        enableViewToggle: {
            type: Boolean,
            default: true
        },
        defaultView: {
            type: String,
            default: 'list',
            validator: (value) => ['list', 'gallery'].includes(value)
        },
        routePath: {
            type: String,
            required: false,
            default: null
        }
    },
    data() {
        return {
            currentView: this.defaultView,
            showColumnsMenu: false,
            showViewMenu: false
        }
    },
    methods: {
        toggleColumnsMenu() {
            this.showColumnsMenu = !this.showColumnsMenu;
        },
        toggleViewMenu() {
            this.showViewMenu = !this.showViewMenu;
        },
        selectView(view) {
            this.currentView = view;
            this.showViewMenu = false;
        },
        updateColumns(newColumns) {
            this.$emit('update:columns', [...newColumns]);
        }
    }
}
</script>

<style scoped>
.database-wrapper {
    @apply bg-gray-50 dark:bg-gray-900 border border-input-border rounded-lg p-4 relative h-[calc(100vh-12rem)] flex flex-col;
}

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

.control-btn .icon {
    @apply w-5 h-5;
}

.columns-menu {
    @apply absolute right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
}

.column-item {
    @apply py-1;
}

.checkbox-wrapper {
    @apply flex items-center gap-2 cursor-pointer;
}

.checkbox-wrapper input {
    @apply w-4 h-4;
}

.view-toggle-wrapper {
    @apply relative;
}

.view-menu {
    @apply absolute right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-input-border z-50;
}

.view-menu-item {
    @apply w-full px-4 py-2 text-left text-sm hover:bg-input-bg transition-colors duration-fast;
}

.view-menu-item.active {
    @apply bg-input-bg text-button-primary-bg;
}

.database-content {
    @apply flex-1 overflow-y-auto;
}
</style>