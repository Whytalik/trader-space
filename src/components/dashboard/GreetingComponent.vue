<template>
  <div class="greeting">
    <h2 class="greeting-message">{{ greetingMessage }}</h2>
    <p class="session-message">Have a great trading session ahead!</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const { userName } = defineProps({
  userName: String,
});

const greetingMessage = computed(() => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return `Good Morning, ${userName}!`;
  } else if (hours < 18) {
    return `Good Afternoon, ${userName}!`;
  } else {
    return `Good Evening, ${userName}!`;
  }
});
</script>

<style scoped>
.greeting-message {
  @apply text-2xl font-semibold mb-2;
}

.session-message {
  @apply text-xl;
}
</style>
