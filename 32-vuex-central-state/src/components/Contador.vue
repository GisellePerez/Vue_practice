<template>
    <div>
        <h1>Counter: {{ cant }} </h1>
        <button @click="add">Add</button>
        <button @click="reducir">Reducir</button>
    </div>    
</template>


<script>
//this component receives that source of truth
export default {
    //props: ['cant'],
    methods: {
        add() {
            //this.$emit('add');
            this.$store.state.cant++;
        },
        reducir() {
            //this.$emit('reducir');
            this.$store.state.cant--;
        }
    },
    coomputed: {
        cant() {
            return this.$store.state.cant;
        }
    }
}
</script>
