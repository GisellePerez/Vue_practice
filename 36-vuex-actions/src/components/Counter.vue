<template>
    <section>
        <h1>Cantidad: {{cant}}</h1>
        <!-- without mapActions
        <button @click="plus">+</button>
        <button @click="minus">-</button>
        -->
        
        <!-- with mapActions -->
        <button @click="plusAsync(12)">+</button>
        <button @click="minusAsync({cant: 15})">-</button>
    </section>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';
    export default {
        computed: mapState(['cant']),
        //methods: mapMutations(['plus', 'minus']),
        /* without mapActions
        methods: {
            plus() {
                //this.$store.commit('plus');  this sis used for mutations (syncrnous)
                this.$store.dispatch('plusAsync'); //dispatch used to stat actions (asyncronous)
            },
            minus() {
               // this.$store.commit('minus'); this sis used for mutations (syncrnous)
               this.$store.dispatch('minusAsync');
            } 

        },*/
        methods: mapActions(['plusAsync','minusAsync']),

    }

    
</script>
