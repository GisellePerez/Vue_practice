<template>
    <section>
        <h1>Add a product</h1>
        <form @submit.prevent="add">
            <input type="text" placeholder="Name" v-model="name" required>
            <input type="number" placeholder="Price" v-model="price" required>
            <input type="submit" value="Add">
        </form>
        <hr>
        <ul>
            <li v-for="(product, index) in products">
                {{ product.name }} - {{ '$' + product.price.toFixed(2) }}
                <button @click="buyProduct(index)"> + </button>
            </li>
        </ul>
    </section>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    export default {
        data() {
            return {
                name: '',
                price: 0
            }
        },
        computed: mapState(['products']),
        methods: {
            ...mapMutations(['buyProduct']),
            add() {
                this.$store.commit('addProduct', {
                    name: this.name,
                    price: Number(this.price),

                });
                this.name = '';
                this.price = 0;
            }
        }
    }
</script>
