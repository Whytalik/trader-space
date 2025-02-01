<template>
  <BaseAuthForm
    title="Sign Up"
    :schema="schema"
    :fields="fields"
    :errorMessage="errorMessage"
    submit-text="Sign Up"
    switch-message="Already have an account?"
    switch-text="Sign In"
    switch-route="login"
    @submit="signUpHandler"
  />
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseAuthForm from "./UniversalForm/BaseAuthForm.vue";
import { useUserStore } from "@/stores/user";
import { registerSchema } from "@/schemas/auth";
import { signUpFields } from "@/constants/signUpFields";

const schema = registerSchema;
const fields = signUpFields;
const errorMessage = ref("");
const userStore = useUserStore();
const router = useRouter();

const signUpHandler = async (values) => {
  try {
    await userStore.signUp({
      username: values.username,
      email: values.email,
      password: values.password,
      password_confirmation: values.password_confirmation,
    });
    router.push({ name: "auth", query: { view: "login" } });
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>
