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

<script>
import BaseAuthForm from "./UniversalForm/BaseAuthForm.vue";
import { useAuthStore } from "../../stores/auth";
import { loginSchema } from "../../schemas/auth";
import { useUserStore } from "../../stores/user";
import { signInFields } from "../../constants/signInFields";

export default {
  name: "LoginView",
  components: { BaseAuthForm },
  data() {
    return {
      schema: loginSchema,
      fields: signInFields,
      errorMessage: "",
    };
  },
  created() {
    this.authStore = useAuthStore();
    this.userStore = useUserStore();
  },
  methods: {
    async signInHandler(values) {
      try {
        await this.userStore.signIn(values.email, values.password);
        this.$router.push({ name: "home" });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
