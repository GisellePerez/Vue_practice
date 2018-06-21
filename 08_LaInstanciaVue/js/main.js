const vm1 = new Vue ({
    el:'main',
    data:{
        message: 'Instancia Vue N°1',
    },
    beforeUpdate() {
        console.log('beforeUpdate: ',this.message)
    },
    updated() {
        console.log('updated: ',this.message)
    },
    methods:{
        reverseText(){
            this.message = this.message.split('').reverse().join('');
            //vm2.message = 'Hola desde la Instancia 1';
        }
    },
    computed:{
        messageCaps(){
            return this.message.toUpperCase();
        }
    }
});

const vm2 = new Vue ({
    el:'#app',
    data:{
        message: 'Instancia Vue N°2',
    }
});

