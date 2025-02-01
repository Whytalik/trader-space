<template>
  <div>
    <h2 v-if="title">{{ title }}</h2>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
