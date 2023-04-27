/** Vue Router Configure */
import {
  createRouter,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

import HomeView from '@/views/HomeView.vue';

/** Router Configure */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: async () => await import('@/views/AboutView.vue'),
  },
];

/** Vue Router */
const router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  routes,
});

export default router;
