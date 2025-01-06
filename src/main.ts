import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getVuetify } from "./constants/vuetify.constants";
import { createLocalization } from "./i18n";

const app = createApp(App)
  .use(createLocalization())
  .use(getVuetify())
  .use(router);

app.mount("#app");
