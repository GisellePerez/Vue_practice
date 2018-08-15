<template>
  <div>
    <elemento type="header"> This is the header</elemento>
    <elemento type="nav">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </elemento>
    <elemento type="aside">This is an aside</elemento>
    <elemento type="section">This is a section</elemento>
    <elemento type="footer">This is the footer</elemento>
  </div>
</template>

<script>
  import elemento from './components/Elemento.vue'
  export default {
    //components: { element: elemento } //this is the same as writing the next line when key and value share the same name
    components: { elemento }
  }
</script>

<style>
  *{
    padding: 0em;
    margin: 0;
  }
  body{
    text-align: center;
  }
  header{
    background-color: antiquewhite;
    padding: 2em;
  }
  nav{
    background-color: aquamarine;
    padding: 2em;
  }
  aside{
    background-color: blanchedalmond;
    padding: 2em;
  }
  section{
    background-color: azure;
    padding: 2em; 
  }
  footer{
    background-color: bisque;
    padding: 2em;
  }

</style>
