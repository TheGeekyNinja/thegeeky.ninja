import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
];
document.title="The Geeky Ninja: Technical Leadership and Development Services";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;