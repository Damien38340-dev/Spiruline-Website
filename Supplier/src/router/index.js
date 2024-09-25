import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from '@/components/SuppliersList.vue'
import Supplier from "@/components/Supplier.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
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
            component: () => import('@/components/SuppliersMap.vue')
            //dynamic
        },
        {
            path: '/supplier',
            name: 'supplier',
            component: Supplier
        },
    ]
})

export default router