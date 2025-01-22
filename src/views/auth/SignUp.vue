<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-900 text-white"
  >
    <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="signUpHandler" class="space-y-4">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            for="password_confirmation"
            class="block mb-2 text-sm font-medium"
            >Password Confirmation</label
          >
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            class="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
        <div class="mt-4 flex justify-center items-center">
          <p class="text-sm text-gray-400 pr-2">Already have an account?</p>
          <router-link
            :to="{ name: 'auth', query: { type: 'login' } }"
            class="text-blue-500 hover:underline"
            >Sign In</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../../stores/auth";
export default {
  name: "LoginrView",
  methods: {
    signUpHandler() {
      const authStore = useAuthStore();
      authStore.toggleAuthenticationStatus();

      if (authStore.isAuthenticated) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
