const products = [
    {name: 'Steam Link', price: 500},
    {name: 'Steam Controller', price: 850},
    {name: 'Axiom Verge', price: 312}
];

const mutations = {
    addProduct: (state, product) => state.products.unshift(product)
};

export default {
    state: products,
    mutations: mutations,
};