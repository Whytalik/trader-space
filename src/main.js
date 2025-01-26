import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores/pinia";
import CommonComponents from "./extensions/components";
import "./theme/light.css";
import "./theme/dark.css";
import "./style.css";

createApp(App).use(router).use(pinia).use(CommonComponents).mount("#app");
