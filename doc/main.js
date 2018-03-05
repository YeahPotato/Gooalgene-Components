import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router.config';

import './assets/scss/index.scss';

import GooalgeneUI from '../packages/index';
// import { gaSidebar , gaIcon,gaButton,gaMore } from '../packages/index';
// console.log(gaSidebar,gaButton,gaIcon,gaMore)

import '../packages/style/default.scss';

// console.log(GooalgeneUI);
// console.log(gaSidebar)
// Vue.use(gaSidebar);
// Vue.use(gaIcon);
// Vue.use(gaButton);
// Vue.use(gaMore);
// Vue.use(gaSidebar);

Vue.use(GooalgeneUI);
Vue.use(VueRouter);

// routes
const router = new VueRouter({ linkExactActiveClass: 'active', linkActiveClass: 'active', routes });


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
