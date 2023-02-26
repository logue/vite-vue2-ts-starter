/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import teleport from '@logue/vue2-helpers/teleport';

import '@/assets/main.css';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const app = new Vue({
  router,
  store,
  render: h => h(App),
});

// Run!
router.isReady().then(() => {
  app.$mount('#app');
});
