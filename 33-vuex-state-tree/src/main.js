import Vue from 'vue';
import App from './App.vue';
import {store} from './store/store';

new Vue({
  el: '#app',
  store, //calling store. Now he childern element have access to the nfo stored in store
  render: h => h(App)
})
