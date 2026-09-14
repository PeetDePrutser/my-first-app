import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/DashBoard.vue";
import Inspections from "../components/Inspections.vue";
import Login from "../components/Login.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: DashBoard
    },
    {
        name: 'login',
        path: '/login',
        component: Login
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