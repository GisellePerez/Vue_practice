import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        cant: 0,
    },
    mutations: {
        plus: (state) => state.cant++,
        minus: (state) => state.cant--,
    }
});