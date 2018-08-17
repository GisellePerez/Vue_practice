import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        cant: 0,
    },
    mutations: {
        //plus: (state) => state.cant++, 
        plus: (state,cant) => state.cant += cant,
        //minus: (state) => state.cant--
        minus: (state, cant) => state.cant -= cant
    },
    actions: {
        plusAsync: (context, cant) => {
            setTimeout(() => context.commit('plus', cant), 2000);
        },
        /*
        minusAsync: (context, val) => {
            setTimeout(() => context.commit('minus', val.cant), 2000);
        }*/
        //let's use some ES6
        minusAsync: ({commit}, {cant}) => {
            setTimeout(() => commit('minus', cant), 2000);
        }
    }
})