const vm = new Vue({
    el:'main',
    data:{
        laborales: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        tareas:[
            {nombre: 'Hacer las compras', prioridad:'baja'},
            {nombre: 'Aprender Vue y Firebase', prioridad:'alta'},
            {nombre: 'Ir al gym', prioridad:'baja'}
        ],
        persona: {
            nombre: 'Gick0',
            profesion: 'dev',
            ciudad: 'Buenos Aires'
        }
    },
});