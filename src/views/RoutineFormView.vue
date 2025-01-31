<template>
  <RoutineForm :routineId="routineId" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import RoutineForm from "@/components/routines/RoutineForm.vue";

const route = useRoute();

const routineId = computed(() => {
  return route.params.id ? Number(route.params.id) : null;
});
</script>

<style scoped></style>
