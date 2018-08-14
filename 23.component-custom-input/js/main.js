Vue.component ('pass' , {
    props: ['password'],
    template: 
        //`<input v-model="password">`, //we're using password so we need to declare that prop
        `<input :value="password" @input="checkPass($event.target.value)" ref="passw">`,
        //to check the passward we use a callback to listen to the event in the input.
        //we pass the input.value as the argument ($event.target.value)
    methods: {
        checkPass(password) {
            //console.log(password);
            //so now i want to throw the input value to the model (parent) 
            
            if(this.notValid.includes(password)) {
                this.$refs.passw.value = password = '';
                //if i type any of the invalid passwords, the input gets empty
            }
            //after typing a valid pass, we emit the event
            this.$emit('input', password); // whit this we get TWO WAY DATA BINDING
        }
    },
    data() {
        return {
            notValid: ['abcd', '123456', 'admin', 'root'],
        }
    }          
})

new Vue ({
    el: 'main',
    data: {
        password: 'laLala&%$'
    }
});