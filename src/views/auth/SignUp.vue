<template>
  <BaseAuthForm title="Sign Up" :schema="schema" :fields="fields" submit-text="Sign Up"
    switch-message="Already have an account?" switch-text="Sign In" switch-route="login" @submit="signUpHandler" />
</template>

<script>
import { useAuthStore } from "../../stores/auth";
import BaseAuthForm from "../../components/auth/BaseAuthForm.vue";
import { registerSchema } from "../../schemas/auth";

export default {
  name: "SignUpView",
  components: { BaseAuthForm },
  data() {
    return {
      schema: registerSchema,
      fields: [
        {
          name: "username",
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
        {
          name: "password_confirmation",
          label: "Password Confirmation",
          type: "password",
          placeholder: "Confirm your password",
        },
      ],
      authStore: null,
    };
  },
  created() {
    this.authStore = useAuthStore();
  },
  methods: {
    async signUpHandler(values) {
      console.log(values);
      this.authStore.toggleAuthenticationStatus();

      if (this.authStore.isAuthenticated) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
