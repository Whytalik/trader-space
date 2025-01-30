<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    class="icon" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
</template>

<script>
export default {
  name: "StatusIcon"
};
</script>

<style scoped>
.icon {
  @apply w-5 h-5;
}
</style> 