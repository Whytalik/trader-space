<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { ref, watch, onMounted, markRaw } from "vue";
import { useRoute } from "vue-router";

import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

const currentComponent = ref(null);
const route = useRoute();

const setComponent = () => {
  const type = route.query.type;
  currentComponent.value =
    type === "register" ? markRaw(SignUp) : markRaw(SignIn);
};

onMounted(setComponent);
watch(() => route.query.type, setComponent);
</script>
