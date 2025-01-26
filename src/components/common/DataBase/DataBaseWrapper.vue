<template>
    <div class="database-wrapper">
        <div class="database-header">
            <h2 class="database-title">{{ title }}</h2>
            <div class="database-actions">
                <ViewToggle v-model="currentView" v-if="enableViewToggle" />
                <slot name="actions"></slot>
            </div>
        </div>
        <div class="database-content">
            <ListView v-if="currentView === 'list'" :data="data">
                <template #item-actions="slotProps">
                    <slot name="item-actions" v-bind="slotProps"></slot>
                </template>
            </ListView>
            <GalleryView v-else :data="data">
                <template #item-actions="slotProps">
                    <slot name="item-actions" v-bind="slotProps"></slot>
                </template>
            </GalleryView>
        </div>
    </div>
</template>

<script>
import ViewToggle from './views/ViewToggle.vue'
import ListView from './views/ListView.vue'
import GalleryView from './views/GalleryView.vue'

export default {
    name: "DataBaseWrapper",
    components: {
        ViewToggle,
        ListView,
        GalleryView
    },
    props: {
        title: {
            type: String,
            required: true
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
        }
    },
    data() {
        return {
            currentView: this.defaultView
        }
    }
}
</script>