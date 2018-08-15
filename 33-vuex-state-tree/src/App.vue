<template>
  <h1>Hi! My name is {{ name }} {{ last }} and I'm a {{ profession }}</h1>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    
    // computed: {
    //   name() {
    //     return this.$store.state.name;      
    //   }
    // }

    // computed: mapState({
    //   // name: function(state) {
    //   //   return state.name;
    //   // }
    //   name: state => state.name, //ES6 - explicit return
    //   last: state => state.last
    // }),

    computed: mapState(['name', 'last', 'profession']),
  }
</script>
