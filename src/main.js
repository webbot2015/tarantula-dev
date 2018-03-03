import Vue from 'vue';

import {routes} from './routes';
import VueRouter from 'vue-router';
import App from './App.vue';

// import 'font-awesome/css/font-awesome.css';
 
Vue.use(VueRouter);
const router = new VueRouter({
  routes : routes,
  mode : 'hash'
});


new Vue({
  el: '#app',
  render: h => h(App),
  router : router
});
