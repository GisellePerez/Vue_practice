<template>
    <section>
        <h1>Cantidad {{cant}}</h1>
        <button @click="plus">+</button>
        <button @click="minus">-</button>
    </section>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        computed: mapState(['cant']),
        methods: mapMutations(['plus', 'minus'])
        //without using mapMutations
        // methods: {
        //     plus() {
        //         //this.$store.state.cant++; //using this we mutate the state from a child component, so NO
        //         this.$store.commit('plus'); //using mutations property in store.js
        //     },
        //     minus() {
        //        // this.$store.state.cant--;
        //        this.$store.commit('minus');
        //     }
        // },
        
    }
</script>
