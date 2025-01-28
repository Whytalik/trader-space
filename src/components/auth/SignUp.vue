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

<script>
import BaseAuthForm from "./UniversalForm/BaseAuthForm.vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";
import { registerSchema } from "../../schemas/auth";
import { signUpFields } from "../../constants/signUpFields";
export default {
  name: "SignUpView",
  components: { BaseAuthForm },
  data() {
    return {
      schema: registerSchema,
      fields: signUpFields,
      errorMessage: "",
    };
  },
  created() {
    this.authStore = useAuthStore();
    this.userStore = useUserStore();
  },
  methods: {
    async signUpHandler(values) {
      try {
        await this.userStore.signUp({
          username: values.username,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        });
        this.$router.push({ name: "auth", query: { view: "login" } });
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
