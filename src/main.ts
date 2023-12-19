import { createApp } from "vue";
import "./style/index.scss";
import App from "./App.vue";
import "./samples/node-api";

createApp(App)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
