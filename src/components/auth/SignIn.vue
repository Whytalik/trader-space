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
import BaseAuthForm from "./BaseAuthForm.vue";
import { useAuthStore } from "../../stores/auth";
import { loginSchema } from "../../schemas/auth";
import { useUserStore } from "../../stores/user";

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
      errorMessage: "",
    };
  },
  created() {
    this.authStore = useAuthStore();
    this.userStore = useUserStore();
    console.log(this.userStore.users);
  },
  methods: {
    signInHandler(values) {
      const user = this.userStore.findUser(values.email, values.password);

      if (user) {
        try {
          this.userStore.setCurrentUser(user);
          this.authStore.setAuthenticationStatus(true);
          this.$router.push({ name: "home" });
        } catch (error) {
          this.errorMessage = error.message;
        }
      } else {
        this.errorMessage = "Invalid email or password";
      }
    },
  },
};
</script>
