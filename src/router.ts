/** Vue Router Configure */
import {
  createRouter,
  type Router,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

/** Router Configure */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
];

const router: Router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  routes,
});

export default router;
