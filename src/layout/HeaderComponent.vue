<template>
  <header>
    <nav>
      <div>
        <!-- Logo/Home section -->
        <div>
          <router-link to="/">
            Trader Space
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div>
          <template v-if="true">
            <router-link to="/login">
              Login
            </router-link>
            <router-link to="/register">
              Register
            </router-link>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
