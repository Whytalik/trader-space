<template>
  <div class="social-icons">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      :href="icon.link"
      class="social-icon"
      :aria-label="icon.label"
    >
      <svg :class="icon.class" fill="currentColor" viewBox="0 0 24 24">
        <path :d="icon.path" />
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  icons: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.social-icons {
  @apply flex gap-4;
}

.social-icon {
  @apply text-text  transition-colors  cursor-not-allowed;
}
</style>
