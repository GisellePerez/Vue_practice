Vue.component('my-tasks', { //my own component with a name
    props: ['tasks'],
    template:`<ul><li v-for="task in tasksAjax">{{ task.title }}</li></ul>`,
    //`<p>This is a new task</p>`
})

new Vue({
    el:'main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                //console.log(response)  
                this.tasksAjax = response.data;     
            });
    },
    data: {
        tasksAjax: []
    }

})
