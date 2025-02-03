<template>
  <div class="card">
    <div class="card-header">
      <h3 class="title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <p class="value">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: [String, Number],
    required: true,
  },
  value: {
    type: [String, Number],
    required: true,
  },
});
</script>

<style scoped>
.card {
  @apply border bg-background rounded-lg shadow-md p-4 border-text;
}

.card-header {
  @apply mb-2;
}

.title {
  @apply text-xl font-semibold text-text;
}

.card-body {
  @apply mt-2;
}

.value {
  @apply text-lg text-text;
}
</style>
