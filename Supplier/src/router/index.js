import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from '@/views/SuppliersList.vue'
import Supplier from "@/components/Supplier.vue";
import Home from "@/views/Home.vue";
import SupplierInfo from "@/views/SupplierInfo.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path: '/suppliers',
            name: 'suppliers',
            component: SuppliersList
            //static
        },
        {
            path: '/map',
            name: 'map',

            // route level code-splitting
            // this generates a separate chunk (Carte.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/SuppliersMap.vue'),
            //dynamic
        },
        {
            path: '/supplier',
            name: 'supplier',
            component: Supplier
        },
        {
            path: '/supplierInfo/:id',
            name: 'SupplierInfo',
            component: SupplierInfo
        }
    ]
})

export default router