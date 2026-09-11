<script setup lang="js">
import { ref, onMounted } from 'vue';
import ApiService from '../services/api.service';
import { useRoute } from 'vue-router'
import { inspectionsStore } from '../stores/InspectionsStore';

const route = useRoute()
let state = ref("");
let inspections = ref([]);

// console.log("state1: "+$router.params.state);
// inspectionsStore.getAllInspections(route.params.state);

onMounted( () => {
    state.value = route.params.state;
    ApiService.getAllInspections(state)
        .then(data => inspections.value = data);
});


</script>
<template>
    <h2 v-if="state === 'done'">Uitgevoerde Inspecties</h2>
    <h2 v-else-if="state === 'open'">Openstaande Inspecties</h2>
    <h2 v-else>Inspecties</h2>
    <v-list>
        <template v-for="(inspection, index) in inspections"" :key="inspection.id">
            <v-list-item>
                <v-list-item-title>Inspectie ({{ inspection.id }}) - {{ inspection.date }}</v-list-item-title>
                <v-list-item-subtitle>hier iets over de inspectie</v-list-item-subtitle>
            </v-list-item>
        </template>
    </v-list>
</template>

<style>
</style>