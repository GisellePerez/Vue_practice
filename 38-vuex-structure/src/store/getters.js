export const getters = {
    totalShopping: (state) => state.cart.reduce((total,product) => total + product.price,0)
}