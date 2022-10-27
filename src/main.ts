import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import { Quasar, setCssVar, colors } from "quasar"

import "quasar/dist/quasar.css"
import "@quasar/extras/material-icons/material-icons.css"

import "@quasar/extras/roboto-font/roboto-font.css"



createApp(App)
    .use(createPinia())
    .use(Quasar, {
        config: {
            dark: true,
            brand: {
                primary: "#60afff",
                secondary: "#1b6b63",
                accent: "#84478f",

                dark: "#1a2227",
                "dark-page": "#222b30",

                positive: "#0d6b23",
                negative: "#9c1121",
                info: "#1d8499",
                warning: "#9e7e26"
            }
        },
        plugins: {},
    })
    .mount("#app")

//XXX handle theme change
setCssVar("primary-dark", colors.lighten(colors.getPaletteColor("primary"), -50))
