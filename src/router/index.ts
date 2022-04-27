import VueRouter, { type Route, type RouteConfig } from 'vue-router';
import { getCurrentInstance } from '@vue/composition-api';
import Vue from 'vue';

import HomePage from '@/views/HomePage.vue';

Vue.use(VueRouter);

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
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue'),
  },
];

export default new VueRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  routes,
});

/** Get router instance (For Composition api) */
export function useRouter(): VueRouter {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  return instance.proxy.$router;
}

/** Get route instance (For Composition api) */
export function useRoute(): Route {
  /** Get Instance */
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`Should be used in setup().`);
  }
  return instance.proxy.$route;
}
