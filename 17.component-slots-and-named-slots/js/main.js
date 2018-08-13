Vue.component ('alert', {
    props: ['type', 'posi'],
    template: '#alert-template'
    //styles not working :/
});

new Vue ({
    el: 'main',
});

