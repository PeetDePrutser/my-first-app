import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/DashBoard.vue";
import Inspections from "../components/Inspections.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: DashBoard
    },
    {
        name: 'inspections',
        path: '/inspections/:state',
        component: Inspections
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;