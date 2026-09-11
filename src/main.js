import App from './App.vue'
import router from './routes'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createPinia } from 'pinia'

const pinia = createPinia();

const vuetify = createVuetify({
    components,
    directives
});

createApp(App)
.use(pinia)
.use(router)
.use(vuetify)
.mount('#app')
