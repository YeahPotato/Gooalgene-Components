import Vue from 'vue';
import App from './App.vue';
import './assets/scss/index.scss';
import 'prismjs';

import GooalgeneUI from '../packages/index';

import '../packages/style/default.scss';

Vue.use(GooalgeneUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
