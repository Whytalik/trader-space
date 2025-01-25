<template>
  <component :is="currentComponent" />
</template>

<script>
import { markRaw } from "vue";
import SignUp from "./SignUp.vue";
import SignIn from "./SignIn.vue";

export default {
  name: "AuthLayout",
  components: {
    SignUp: markRaw(SignUp),
    SignIn: markRaw(SignIn),
  },
  data() {
    return {
      currentComponent: null,
    };
  },
  created() {
    this.setComponent();
  },
  watch: {
    $route: "setComponent",
  },
  methods: {
    setComponent() {
      const type = this.$route.query.type;
      if (type === "register") {
        this.currentComponent = SignUp;
      } else {
        this.currentComponent = SignIn;
      }
    },
  },
};
</script>
