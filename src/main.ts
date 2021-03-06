/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';

import '@/style.css';
import App from '@/App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
});
app.$mount('#app');
