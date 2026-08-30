# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


# Zaken die geladen moeten worden
## npm installs. Wordt in de package.json gezet

npm i vuetify
npm i -D vuetify vite-plugin-vuetify
npm i @mdi/font

## In main.js: De imports opnemen

import { createApp } from 'vue'
import './style.css'

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

createApp(App).use(vuetify).mount('#app')

## in de App.vue

een v-app en een v-main opnemen:
https://vuetifyjs.com/en/components/application/

## AppBar

## Icons

https://pictogrammers.com/library/mdi/