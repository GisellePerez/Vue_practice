<template>
  <section>
    <products></products>
    <cart></cart>
  </section>
</template>

<script>
  import Products from './components/Products.vue';
  import Cart from './components/Cart.vue';
  export default {
    components: {Products,Cart}
  }
</script>
