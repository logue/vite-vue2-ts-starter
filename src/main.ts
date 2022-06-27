/** Vue main script */
import VueCompositionAPI, { createApp, h } from '@vue/composition-api';
import Vue from 'vue';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

import router from '@/router';
import store from '@/store';

import App from '@/App.vue';

const app = createApp({
  render: () => h(App),
  router,
  store,
});

app.mount('#app');
