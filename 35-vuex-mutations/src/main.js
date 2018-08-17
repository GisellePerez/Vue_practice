import Vue from 'vue';
import App from './App.vue';
import {store} from './store/store';

new Vue({
  el: '#app',
  store: store, //here we associate the source of info to the main instance
  render: h => h(App)
})
