const vm = new Vue({
    el: 'main',
    data: {

        nuevaTarea: null, 
        //todo tiene que ser pate del modelo y tenemos que definirlo para lueogo tomarlo
        //sin recurrir al DOM

        tareas: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los días'
        ]
    },
    methods: {
        agregarTarea() {
            //console.log('Funciona')
            //this - hace referencia a la instancia vue

            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea='';


        }
    }
});

//Vanilla JS

function agregarTarea() {
    const input = document.querySelector('input[type=text]');

    vm.tareas.unshift(input.value);

    input.value = '';

}