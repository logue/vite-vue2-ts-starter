import type { RouteConfig } from 'vue-router';
import type VueRouter from 'vue-router';
import { createRouter } from 'vue2-helpers/vue-router';

import HomePage from '@/views/HomePage.vue';

/** Router Configure */
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/AboutPage.vue'),
  },
];

const router: VueRouter = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  routes,
});

export default router;
