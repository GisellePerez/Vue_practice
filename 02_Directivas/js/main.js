/*lo convertimos en variable para poder accederlo por consola y cambiar el valor de conectado
a false o a true segun queramos */

const vm = new Vue({

    el: 'main',
    data: {
        conectado:false,
        edad:44
    }
});