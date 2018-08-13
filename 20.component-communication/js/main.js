const eventBus = new Vue(); //system for emiting and receiving events

Vue.component('product-list', {
    props: ['products'],
    template: 
        `<section>
            <ul>
                <li v-for="product in products">
                    {{ product.name }} -
                    <small>{{ product.price.toFixed(2) }} $</small>
                    <button @click="deleteProduct(product.price)"> - </button>
                    <button @click="addProduct(product.price)"> + </button>
                </li>
            </ul>
        </section>`,
    methods: {
        addProduct(price) { //important: need to use an argument
            eventBus.$emit('add', price);
        },
        deleteProduct(price) { //important: need to use an argument
            eventBus.$emit('delete', price);
        },
    }
});

Vue.component ('shopping-cart', {
    template: 
        `<section>
            <h2> {{ total.toFixed(2) }} $</h2>
            <h3> {{ totalProducts }} products</h3>
        </section>`,
    data() {
        return {
            totalProducts: 0,
            total: 0,
        }
    },
    created(){
        //it will react once the events had been created
        eventBus.$on('add', (price) => {
            if(this.total <= 0) {
                console.log('From cart',price);
                this.total += price; //lo que tenga, mas el precio
                this.totalProducts++;
            }
        });
        eventBus.$on('delete', (price) => {
            if(this.total > 0) {
                this.total -= price;
                this.totalProducts--;
            }
        });
    },
});

new Vue({
    el: 'main',
    data: {
        products: [
            {name: 'Book', price: 390},
            {name: 'Laptop', price: 15000},
            {name: 'TV', price: 8999},
            {name: 'Board game', price: 250},
            {name: 'Mouse', price: 120}
        ]
    }
});