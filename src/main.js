import { createApp } from 'vue'
import './styles/main.css'
// Hier nog de huis style CSS importeren

// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})

import App from './App.vue'
import router from './routes'

createApp(App)
.use(vuetify)
.use(router)
.mount('#app')
