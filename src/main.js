import Vue from 'vue';
import Vuesax from 'vuesax';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Vuesax styles
import 'vuesax/dist/vuesax.css';

// Swiper-Styles
import 'swiper/swiper-bundle.css';

Vue.use(Vuesax, {});
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
