import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import RepositoryProvider from "./provider/RepositoryProvider";
createApp(App)
  .use(store)
  .provide("provider", RepositoryProvider)
  .use(router)
  .mount("#app");
