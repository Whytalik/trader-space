<template>
  <div class="gallery-view">
    <div class="gallery-grid">
      <GalleryItem v-for="item in data" :key="item.id" :item="item" :routePath="routePath"
        @click="handleItemClick(item)">
        <template #item-actions="{ item }">
          <slot name="item-actions" :item="item"></slot>
        </template>
      </GalleryItem>
    </div>
  </div>
</template>

<script>
import GalleryItem from "./GalleryItem.vue";

export default {
  name: "GalleryView",
  components: {
    GalleryItem,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    routePath: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleItemClick(item) {
      this.$emit("item-click", item);
    },
  },
};
</script>

<style scoped>
.gallery-view {
  @apply w-full;
}

.gallery-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}
</style>