<template>
  <div class="text-3xl">Home | Trader Space</div>
  <div v-for="item in modelList" :key="item">
    {{ item }}
  </div>
</template>

<script setup>
import { useModelStore } from "../store";

const model = useModelStore();
const modelList = model.modelList;
</script>
