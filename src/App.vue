<script setup lang="js">
import AppBar from './components/AppBar.vue'
import Footer from './components/Footer.vue'
import { useRouter } from 'vue-router'
import { loginStore } from './stores/LoginStore.js';

if (!loginStore().isAuthenticated) {
  useRouter().replace({name: "login"})
}
</script>

<template>
  <v-app>
      <AppBar />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
  </v-app>
</template>