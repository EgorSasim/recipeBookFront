import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getVuetify } from "./constants/vuetify.constants";

const app = createApp(App).use(getVuetify()).use(router);

app.mount("#app");
