import { createApp } from 'vue'
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './style.css'
import App from './App.vue'
import router from './Routes/routes.js'

const app = createApp(App)
app.use(Quasar, {
    plugins: {
        Notify
    },
})

app.use(router)
app.mount('#app')
