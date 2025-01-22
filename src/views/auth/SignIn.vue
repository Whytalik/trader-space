<template>
  <BaseAuthForm title="Sign In" :schema="schema" :fields="fields" submit-text="Sign In"
    switch-message="Don't have an account?" switch-text="Sign Up" switch-route="register" @submit="signInHandler" />
</template>

<script>
import { useAuthStore } from "../../stores/auth";
import BaseAuthForm from "../../components/auth/BaseAuthForm.vue";
import { loginSchema } from "../../schemas/auth";

export default {
  name: "LoginView",
  components: { BaseAuthForm },
  data() {
    return {
      schema: loginSchema,
      fields: [
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
      ],
      authStore: null,
    };
  },
  created() {
    this.authStore = useAuthStore();
  },
  methods: {
    signInHandler(values) {
      console.log(values);
      this.authStore.toggleAuthenticationStatus(true);

      if (this.authStore.isAuthenticated) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
