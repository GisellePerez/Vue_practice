import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products'
import {getters} from './getters'
import {mutations} from './mutations'
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state:{
        cart: [],
    },
    getters: getters,
    mutations: mutations, 
    modules: {
        products: products
    }
});