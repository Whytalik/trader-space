<template>
  <TradeForm :tradeId="tradeId" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import TradeForm from "@/components/trades/TradeForm.vue";

const route = useRoute();

const tradeId = computed(() => {
  return route.params.id ? Number(route.params.id) : null;
});
</script>

<style scoped></style>
