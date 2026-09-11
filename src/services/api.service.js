// https://search.brave.com/search?q=vue+javascript+service+example+site%3Astackoverflow.com&source=sim-pages&conversation=09815d2a8e02925ab0e7dc049db11f71e1f1

import axios from "axios";
import { Inspection } from "../models/inspection";

const ApiService = {

    getAllInspections: async (state) => {
        const url = "/inspections.json";
        try {
            const response = await axios.get(url);
            const data = await response.data.inspections;
            return data
            .filter(inspection => inspection.state === state.value)
            .map(inspection => new Inspection(inspection));
        } catch (error) {
            return console.log('Looks like there was a problem: \n', error);
        }

    }   
}

export default ApiService;