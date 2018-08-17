export const mutations = {
    buyProduct: (state, index) => state.cart.unshift(state.products[index]),
    deleteProduct: (state, index) => state.cart.splice(index,1),
};