// Vue.component ('todo-list', { //component name
//     props: ['tasks'], //need to declare the tasks as props (pass it as a property on the component)
//     template:`<ul><li v-for="task in tasks">{{ task.title }}</li></ul>` //template: HTML elements
// });

// new Vue ({
//     el: 'main',
//     mounted() {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then(response => 
//             this.tasksAjax = response.data
//         )
//     },
//     data: {
//         tasksAjax: [],
//         localTasks: [
//             {title: 'Do my homework'},
//             {title: 'Learn Vue'},
//             {title: 'Practice ES6'}
//         ]
//     }
// });

// if i want an independent component working withouth taking the info from the Vue instance

Vue.component ('todo-list', { 
    template:`<ul><li v-for="task in tasks">{{ task.title }}</li></ul>`,
    //don't need props anymore because the info is in this scope 
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => 
            this.tasks = response.data //change tasksAjax for tasks
        )
    },
    data() { //called data as a function with a return
        return {
            tasks: [], //change tasksAjax for tasks
        }
    }
});

new Vue ({
    el: 'main',
});