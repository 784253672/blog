import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router/index";
import "ant-design-vue/dist/reset.css";
import "./assets/font/font.css";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(Antd);
app.use(pinia);
app.use(router);
app.mount("#app");
