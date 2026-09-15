<script setup lang="js">
import { ref } from 'vue';

const fontSize = ref(1);

</script>
<template>
    <h2>Settings</h2>
    <v-switch label="Dark modus" inset true-icon="mdi-check" false-icon="mdi-close"></v-switch>
    <v-slider label="Font size" :max="2" :ticks="{
        0: 'Small',
        1: 'Normal',
        2: 'Big',
    }" show-ticks="always" step="1" tick-size="3" v-model="fontSize"></v-slider>
</template>

<style></style>