<script setup lang="js">
  import { ref } from 'vue';
import ApiService from '../services/api.service';

  let inspections = ref([]);
  ApiService.getAllDoneInspections()
  .then(data => inspections = data);

</script>

<template>
  <section id="center">
    <li v-for="inspection in inspections">
      {{ inspection.id }}
    </li>    
    </section>
    <v-container>
        <v-row class="ga-3">
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-bookmark-outline</v-icon>
                    Scheduled
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-check-circle</v-icon>
                    Complete
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-apps</v-icon>
                    Knowledge base
                </template></v-card>
            </v-col>
            <v-col class="w-50">
                <v-card><template v-slot:text>
                    <v-icon size="128">mdi-cog</v-icon>
                    Settings
                </template></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>