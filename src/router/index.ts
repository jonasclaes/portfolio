import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsPage.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;