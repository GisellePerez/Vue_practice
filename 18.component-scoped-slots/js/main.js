Vue.component ('my-tasks', {
    props: ['list'],
    template: '#my-tasks-template',
});

new Vue ({
    el: 'main',
    data: {
        tasks: [
            {title: 'go running'},
            {title: 'clean the house'},
            {title: 'read a little everyday'},
            {title: 'practice Vue.js'}
        ]
    }
});