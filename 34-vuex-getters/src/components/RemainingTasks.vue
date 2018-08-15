<template>
    <h1>Completed tasks: {{ completedTasks }}</h1>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        // computed: {
        //     completedTasks() {
        //         // return this.$store.state.tasks.filter( task => {
        //         //     return task.completed;
        //         // }).length;

        //         return this.$store.getters.completedTasks;
        //     },
        //}
        computed: mapGetters(['completedTasks'])   
    }
</script>
