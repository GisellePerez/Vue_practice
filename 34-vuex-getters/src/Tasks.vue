<template>
  <main>
    <remaining-tasks></remaining-tasks>
    <ul>
      <li v-for="task in tasks">{{ task.title }}</li>
    </ul>
  </main>
</template>

<script>
  import RemainingTasks from './components/RemainingTasks.vue';
  import {mapState} from 'vuex';
  export default {
    components: {RemainingTasks},
    // computed: {
    //   tasks() {
    //     return this.$store.state.tasks;
    //   }
    // }  

    computed: mapState(['tasks']),
  }
</script>
