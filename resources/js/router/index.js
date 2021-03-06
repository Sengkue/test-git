import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import Store from "../pages/Store.vue";
import Report from "../pages/Report.vue";

export const routes = [
    {
        name: "Home",
        path:"/",
        component: Home 
    },
    {
        name: "store",
        path:"/store",
        component: Store 
    },
    {
        name: "report",
        path:"/report",
        component: Report 
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }

});

export default router;