import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/DashBoard.vue";
import Inspections from "../components/Inspections.vue";
import Login from "../components/Login.vue";
import Knowledge from "../components/Knowledge.vue";
import Settings from "../components/Settings.vue";

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
    },
    {
        name: 'knowledge',
        path: '/knowledge',
        component: Knowledge
    },
    {
        name: 'settings',
        path: '/settings',
        component: Settings
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;