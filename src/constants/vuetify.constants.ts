import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { COLOR_THEMES, THEMES_COLORS_PROPS } from "./themes.constants";

export function getVuetify() {
    return createVuetify({
        components,
        directives,
        theme: {
          defaultTheme: COLOR_THEMES.DARK,
          themes: THEMES_COLORS_PROPS,
        },
        icons: {
          defaultSet: "mdi",
        }
      });
}


