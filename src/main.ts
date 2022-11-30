import { createApp } from "vue"
import App from "./App.vue"
import { createPinia } from "pinia"
import { Quasar, setCssVar, colors,
    QBtn,
    QFooter,
    QHeader,
    QIcon,
    QItem,
    QItemSection,
    QLayout,
    QPage,
    QPageContainer,
    QSelect,
    QToolbar,
    QToolbarTitle
} from "quasar"

import "quasar/dist/quasar.css"
import "@quasar/extras/material-icons/material-icons.css"
import "@quasar/extras/material-icons-round/material-icons-round.css"

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
                positive: "#0d6b23",
                negative: "#9c1121",
                info: "#1d8499",
                warning: "#9e7e26",

                "dark-page": "#222b30"
            }
        },
        plugins: {},
        components: {
            QBtn,
            QFooter,
            QHeader,
            QIcon,
            QItem,
            QItemSection,
            QLayout,
            QPage,
            QPageContainer,
            QSelect,
            QToolbar,
            QToolbarTitle
        }
    })
    .mount("#app")

//XXX handle theme change
setCssVar("primary-dark", colors.lighten(colors.getPaletteColor("primary"), -50))
setCssVar("weak", colors.lighten(colors.getPaletteColor("dark"), 15))
