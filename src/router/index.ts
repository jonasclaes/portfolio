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
    },
    {
        path: '/projects/:slug',
        name: 'Project',
        component: () => import('../views/ProjectPage.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;