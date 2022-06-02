import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('@/components/Login.vue'),
        },
        {
            path: '/about',
            component: () => import('@/components/About.vue'),
        },
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/home/index',
            component: () => import('@/components/Layout.vue'),
            children: [
                {
                    path: 'index',
                    component: () => import('@/components/Home.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/components/notfound.vue'),
        },
    ],
})
export default router
