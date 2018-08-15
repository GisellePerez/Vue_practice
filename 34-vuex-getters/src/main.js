import Vue from 'vue'
import Tasks from './Tasks.vue'
import {store} from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(Tasks)
})
