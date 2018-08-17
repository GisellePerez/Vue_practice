<template>
    <section>
        <h2>Shopping Cart</h2>
        <h3>Total: $ {{ totalShopping.toFixed(2) }}</h3>
        <ul>
            <li v-for="(product, index) in cart">
                {{ product.name }}
                <button @click="deleteProduct(index)"> x </button>
            </li>
        </ul>
    </section>
    
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';
    export default {
        computed: {
            ...mapState(['cart']),
            ...mapGetters(['totalShopping']),
        },
        methods: mapMutations(['deleteProduct'])
    }
</script>
