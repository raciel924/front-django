import {createRouter,createWebHistory} from "vue-router";
import List from "/src/pages/List.vue"
import HelloWorld from "@/components/HelloWorld.vue";
const routes = [
    {
        name:'list',
        path:'/',
        component: List
    },
    {
        name: "hello-word",
        path: "/index",
        component: HelloWorld
    }

]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router