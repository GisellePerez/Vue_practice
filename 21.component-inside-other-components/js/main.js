Vue.component ('tasks-container' , { //PARENT
    props: ['tasks'], //if it's gonna show tasks, props should be tasks
    template: 
        `<section>
            <h1><slot></slot></h1>
                <ul>
                    <task v-for="task in tasks" :task="task"><task>
                </ul>
        </section>`,
});

Vue.component ('task', { //CHILD
    props: ['task'],
    template:`<li> {{ task }} </li>`,
});

new Vue ({
    el: 'main',
    data: {
        tasks: [
            'Finish component practice',
            'Start practicing with Vue CLI',
            'Read Vuex documentation',
            'Learn more about Vue Router'
        ]
    }
});