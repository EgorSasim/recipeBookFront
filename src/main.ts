import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getVuetify } from "./constants/vuetify.constants";
import { createLocalization } from "./i18n";
import {
  dishModelServiceToken,
  userModelServiceToken,
} from "./DITokens/tokens";
import { userModelService } from "./model/user/userModel.service";
import { dishModelService } from "./model/dish/dishModel.service";

const app = createApp(App);

app.use(createLocalization()).use(getVuetify()).use(router);

app.provide(userModelServiceToken, userModelService);
app.provide(dishModelServiceToken, dishModelService);

app.mount("#app");
