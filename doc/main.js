import Vue from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';

import GooalgeneUI from '../packages/index';
// import { gaSidebar , gaIcon,gaButton,gaMore } from '../packages/index';
console.log(GooalgeneUI)
// console.log(gaSidebar,gaButton,gaIcon,gaMore)

import '../packages/style/default.scss';
// console.log(GooalgeneUI);
// console.log(gaSidebar)
// Vue.use(gaSidebar);
// Vue.use(gaIcon);
// Vue.use(gaButton);
// Vue.use(gaMore);
// Vue.use(gaSidebar);
Vue.use(GooalgeneUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
