import { createApp } from "vue";
import App from "./App.vue";
import router from "@/routers";
import pinia from "@/stores";
import "@/style/index.scss";
import "@/style/common.scss";
import "@/samples/node-api";
import "element-plus/theme-chalk/dark/css-vars.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
