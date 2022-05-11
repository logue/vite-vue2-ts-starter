import VueRouter, { type RouteConfig } from 'vue-router';
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
