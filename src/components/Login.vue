<script setup lang="js">
import { useRouter } from 'vue-router';
import { loginStore } from '../stores/loginStore';

if (loginStore().authenticated) {
  useRouter().replace({name: "home"})
}


</script>
<template>
    <v-card v-if="!loginStore().loggedIn && !loginStore().authenticated">
        <v-card-title>Login</v-card-title>
        <v-card-subtitle>Login for Real Estate Care</v-card-subtitle>
        <v-card-text>
            <form ref="form" @submit.prevent="login()">
                <v-text-field name="username" label="Username" type="text" placeholder="username"
                    required></v-text-field>

                <v-text-field name="password" label="Password" type="password" placeholder="password"
                    required></v-text-field>
                <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
            </form>
        </v-card-text>
    </v-card>

    <v-card v-if="loginStore().loggedIn && !loginStore().authenticated">
        <v-card-title>Two-factor authentication</v-card-title>
        <v-card-text>
            <p>Open your authentication app and enter the code for Real Estate Care</p>
            <form ref="form" @submit.prevent="login()">
                <v-text-field  name="verifyCode" label="Verify code" type="text" placeholder="Enter 6 digits code"
                    required></v-text-field>
                <v-btn type="submit" class="mt-4" color="primary" value="verify">Verify</v-btn>
            </form>
        </v-card-text>
    </v-card>

</template>

<style></style>