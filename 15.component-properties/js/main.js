Vue.component('author', {
    props: ['name', 'age'],
    mounted() {
        // props are accessible using 'this' (proxy)
        //console.log( this.name)
        console.log(typeof this.age)
    },
    template: `<div><h1>{{ name }}</h1><button @click="changeProp">Change prop</button></div>`,
    methods: {
        changeProp() {
            this.name = this.name.toUpperCase();
        }
    }
})
new Vue({
    el:'main',
    data: {
        author: 'Giselle Romina'
    }
})