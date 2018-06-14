//Vanilla JavaScript

// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');

// input.addEventListener('keyup', () => h1.innerHTML = input.value );

//Vue js

//1. Creo la instancia de Vue. Operador new. Objeto Vue

new Vue({
    el: 'main', //llamando al div 'main'. Vue puede acceder a todo lo que que tenga dentro main
    data: { //fuente de datos - el modelo
        mensaje: 'Hola Mundo!',
    }
});

//Ahora lo que quiero hacer es relacionar el modelo con el input
// 'directiva' --> le da como superpoderes a los elem a html