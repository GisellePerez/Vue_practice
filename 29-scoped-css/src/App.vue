<template>
  <div>
    <h1>Main menu</h1>
    <ul>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
      <li><a href="#">Link</a></li>
    </ul>
   
    <tasks></tasks>
  </div>
</template>

<script>
    import Tasks from './components/Tasks.vue';
    export default {
        components: {Tasks},
    }
</script>