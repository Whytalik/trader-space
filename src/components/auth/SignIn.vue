<template>
  <BaseAuthForm
    title="Sign In"
    :schema="schema"
    :fields="fields"
    :errorMessage="errorMessage"
    submit-text="Sign In"
    switch-message="Don't have an account?"
    switch-text="Sign Up"
    switch-route="register"
    @submit="signInHandler"
  />
</template>

<script setup>
import { ref } from "vue";
import BaseAuthForm from "./UniversalForm/BaseAuthForm.vue";
import { useUserStore } from "@/stores/user";
import { loginSchema } from "@/schemas/auth";
import { signInFields } from "@/constants/signInFields";
import { useRouter } from "vue-router";

const schema = loginSchema;
const fields = signInFields;
const errorMessage = ref("");
const userStore = useUserStore();
const router = useRouter();

const signInHandler = async (values) => {
  try {
    await userStore.signIn(values.email, values.password);
    router.push({ name: "home" });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
