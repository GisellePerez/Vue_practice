import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products'
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state:{
        // products: [
        //     {name: 'Steam Link', price: 500},
        //     {name: 'Steam Controller', price: 850},
        //     {name: 'Axiom Verge', price: 312}
        // ],
        cart: [],
    },
    getters: {
        totalShopping: (state) => state.cart.reduce((total,product) => total + product.price,0),
    },
    mutations: {
        //addProduct: (state, product) => state.products.unshift(product),
        buyProduct: (state, index) => state.cart.unshift(state.products[index]),
        deleteProduct: (state, index) => state.cart.splice(index,1),
    },
    modules: {
        products: products
    }
});