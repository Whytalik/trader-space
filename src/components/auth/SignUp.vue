<template>
  <BaseAuthForm title="Sign Up" :schema="schema" :fields="fields" :errorMessage="errorMessage" submit-text="Sign Up"
    switch-message="Already have an account?" switch-text="Sign In" switch-route="login" @submit="signUpHandler" />
</template>

<script>
import BaseAuthForm from "./BaseAuthForm.vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";
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
      errorMessage: "",
    };
  },
  created() {
    this.authStore = useAuthStore();
    this.userStore = useUserStore();
  },
  methods: {
    signUpHandler(values) {
      console.log("SignUpHandler called", values);
      const user = this.userStore.findUser(values.email, values.password);

      if (user) {
        this.errorMessage = "User already exists";
      } else {
        try {
          console.log(this.userStore.users);
          this.userStore.registerUser({
            username: values.username,
            email: values.email,
            password: values.password,
            password_confirmation: values.password_confirmation,
          });
          console.log("User registered");
          console.log(this.userStore.users);
          this.authStore.setAuthenticationStatus(true);
          this.$router.push({ name: "auth", query: { view: "login" } });
        } catch (error) {
          console.error("Registration error:", error);
          this.errorMessage = error.message;
        }
      }
    },
  },
};
</script>
