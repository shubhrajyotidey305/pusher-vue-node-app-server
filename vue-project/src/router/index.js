import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld";
const routes=[
    {
        path:"/",
        name:"Home",
        component: HelloWorld,
        props: true,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;