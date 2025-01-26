<template>
  <div class="gallery-view">
    <div class="gallery-grid">
      <div v-for="item in data" :key="item.id" class="gallery-item cursor-pointer" @click="handleItemClick(item)">
        <div class="item-image">
          <img :src="item.image" :alt="item.title" v-if="item.image" />
          <div class="no-image" v-else>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>
        <div class="item-content">
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-description">{{ item.description }}</p>
        </div>
        <div class="item-actions">
          <slot name="item-actions" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  props: {
    data: {
      type: Array,
      required: true
    },
    routePath: {
      type: String,
      required: false,
      default: null
    }
  },
  methods: {
    handleItemClick(item) {
      if (this.routePath) {
        this.$router.push(`${this.routePath}/${item.id}`);
      }
    }
  }
}
</script>

<style scoped>
.gallery-view {
  @apply w-full;
}

.gallery-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.gallery-item {
  @apply flex flex-col bg-background border border-input-border rounded-lg overflow-hidden hover:border-input-focus transition-all duration-fast;
}

.item-image {
  @apply aspect-video bg-gray-100 dark:bg-gray-700;
}

.item-image img {
  @apply w-full h-full object-cover;
}

.no-image {
  @apply w-full h-full flex items-center justify-center;
}

.no-image .icon {
  @apply w-12 h-12 text-gray-400;
}

.item-content {
  @apply p-4;
}

.item-title {
  @apply text-lg font-medium mb-2;
}

.item-description {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.item-actions {
  @apply p-4 pt-0 flex gap-2;
}
</style>