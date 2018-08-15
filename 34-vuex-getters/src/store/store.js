import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        tasks: [
            { title: 'prepare future events', completed: false },
            { title: 'update repos', completed: true },
            { title: 'finish workshop material', completed: false },
            { title: 'another task title', completed: true },
            { title: 'yet another task', completed: false }
        ]
    },
    getters: {
        completedTasks: (state => {
            return state.tasks.filter( task => task.completed ).length
        })
    }   
});
