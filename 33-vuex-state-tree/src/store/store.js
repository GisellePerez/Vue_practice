//here we'll create the source of data
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    //in state we define the info we want to share with other components
    state: {
        name: 'Giselle Romina',
        last: 'Perez',
        profession: 'developer',
        city: 'Buenos Aires'
    }
});