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
  @apply border border-gray-300 rounded-lg shadow-md bg-white p-4;
}

.card-header {
  @apply mb-2;
}

.title {
  @apply text-xl font-semibold text-gray-800;
}

.card-body {
  @apply mt-2;
}

.value {
  @apply text-lg text-gray-600;
}
</style>
