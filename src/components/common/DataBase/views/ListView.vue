<template>
  <div class="list-view">
    <div v-for="item in data" :key="item.id" class="list-item">
      <div class="item-content">
        <div class="item-header">
          <h3 class="item-title">{{ item.title }}</h3>
          <span class="item-date">{{ formatDate(item.date) }}</span>
        </div>
        <p class="item-description">{{ item.description }}</p>
      </div>
      <div class="item-actions">
        <slot name="item-actions" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString()
    }
  }
}
</script>

<style scoped>
.list-view {
  @apply space-y-4;
}

.list-item {
  @apply flex justify-between items-start p-4 bg-background 
         border border-input-border rounded-lg hover:border-input-focus transition-all duration-fast;
}

.item-content {
  @apply flex-1;
}

.item-header {
  @apply flex justify-between items-center mb-2;
}

.item-title {
  @apply text-lg font-medium;
}

.item-date {
  @apply text-sm text-gray-500;
}

.item-description {
  @apply text-sm text-gray-600 dark:text-gray-400;
}

.item-actions {
  @apply flex gap-2 ml-4;
}
</style> 