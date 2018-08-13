
Vue.component ('todo-list', {
    template: 
        `<section>
            <h1><slot></slot></h1>
            <ul>
                <task v-for="task in tasks" :task="task"><task>
            </ul>
        </section>`,
    data() {
        return {
            tasks: [
                'Task 1',
                'Task 2',
                'Task 3',
                'Task 4'
            ],
        }
    }
});

Vue.component ('task', { //CHILD
    props: ['task'],
    template: `<li> {{ task }} </li>`,
});

Vue.component ('contact-info', {
    template: `<section><a href="mailto:mail@mail.com">mail@mail.com</a></section>`,
});

Vue.component ('bio', {
    template: `<section><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi. Duis ultricies lacus sed turpis tincidunt id.</p></section>`,
});

new Vue ({
    el: 'main',
    data: {
        selected: 'todo-list'
    }
});