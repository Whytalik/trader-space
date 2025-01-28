<template>
  <div class="gallery-item cursor-pointer" @click="handleItemClick">
    <div class="item-image">
      <img :src="item.image" :alt="item.name" v-if="item.image" />
      <div class="no-image" v-else>
        <NoImageIcon />
      </div>
    </div>
    <div class="item-content">
      <!-- Використовуємо пропси для динамічного заголовку -->
      <h3 class="item-title">{{ title || item.title || "No Title" }}</h3>
      <!-- Якщо description - масив, відображаємо його як список, інакше - як рядок -->
      <p class="item-description">
        <span v-if="Array.isArray(description)">
          <ul>
            <li v-for="(desc, index) in description" :key="index">
              {{ desc }}
            </li>
          </ul>
        </span>
        <span v-else>
          {{ description || item.description || "No Description" }}
        </span>
      </p>
    </div>
    <div class="item-actions">
      <slot name="item-actions" :item="item"></slot>
    </div>
  </div>
</template>

<script>
import NoImageIcon from "@/assets/ViewTypes/NoImageIcon.vue";

export default {
  name: "GalleryItem",
  components: {
    NoImageIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    description: {
      type: [String, Array],
      default: null,
    },
    routePath: {
      type: String,
      default: null,
    },
  },
  methods: {
    handleItemClick() {
      if (this.routePath) {
        this.$router.push(`${this.routePath}/${this.item.id}`);
      }
    },
  },
};
</script>

<style scoped>
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
