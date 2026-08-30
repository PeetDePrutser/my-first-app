<script setup>
    import logo from '../assets/real_estate_logo_white.png'
</script>
<template>
    <v-app-bar class="top_bar"> 
<!-- https://stackoverflow.com/questions/54091850/how-to-add-logo-to-appbar-in-vuetify          -->
<!-- https://stackoverflow.com/questions/72794516/vue-3-resolving-image-assets-build -->
        <v-img :src="logo" max-height="60" contain></v-img>

        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-cog</v-icon>1
        </v-btn>


    </v-app-bar>    
</template>


<style>
.top_bar {
    color: white;
    background-color: var(--accent-bg);
}
</style>