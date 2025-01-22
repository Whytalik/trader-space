import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores/pinia";
import "./style.css";
import "normalize.css";

createApp(App).use(router).use(pinia).mount("#app");
