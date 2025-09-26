import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../src/components/HelloWorld.vue'
import HelloEarth from "../src/components/HelloEarth.vue";
import Number from "../src/components/Number.vue";

const routes = [
    {
        path: '/test1',
        name: 'Test1',
        component: HelloEarth
    },
    {
        path: '/test2',
        name: 'Test2',
        component: HelloWorld
    },
    {
        path: '/number/:id',
        name: 'DynamicNumber',
        component: Number
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router