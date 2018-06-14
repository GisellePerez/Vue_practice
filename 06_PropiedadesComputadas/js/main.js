const vm = new Vue({
    el: 'main',
    data: {

        mensaje: 'Hola Mundo!',

        nuevaTarea: null, 
    
        tareas: [
            {
                titulo: 'Aprender Vue.js',
                prioridad: true,
                antiguedad: '23'
            },
            {
                titulo: 'Aprender ES6',
                prioridad: false,
                antiguedad: '135'
            },
            {
                titulo: 'Mantener el repo atualizado',
                prioridad: true,
                antiguedad: '378'
            }
        ]
    },
    methods: {
        agregarTarea() {

            this.tareas.unshift(this.nuevaTarea);
            this.nuevaTarea='';

        }
    },

    computed: {
        mensajeAlReves(){
            return this.mensaje.split('').reverse().join('');
        },

        tareasConPrioridad(){
            return this.tareas.filter((tarea) => /*return*/ tarea.prioridad)
        },

        tareasPorAntiguedad(){
            return this.tareas.sort((a,b) => b.antiguedad - a.antiguedad);
        }
    }
});   