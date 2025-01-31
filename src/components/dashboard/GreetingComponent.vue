<template>
  <div class="greeting">
    <h2 class="greeting-message">{{ greetingMessage }}</h2>
    <p class="session-message">Have a great trading session ahead!</p>
  </div>
</template>

<script>
export default {
  name: "GreetingComponent",
  props: {
    userName: String,
  },
  computed: {
    greetingMessage() {
      const hours = new Date().getHours();
      if (hours < 12) {
        return `Good Morning, ${this.userName}!`;
      } else if (hours < 18) {
        return `Good Afternoon, ${this.userName}!`;
      } else {
        return `Good Evening, ${this.userName}!`;
      }
    },
  },
};
</script>

<style scoped>
.greeting-message {
  @apply text-2xl font-semibold mb-2;
}

.session-message {
  @apply text-xl;
}
</style>
