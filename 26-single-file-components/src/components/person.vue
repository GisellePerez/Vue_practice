<template>
    <div>
        <template v-if="person">
            <h1 v-text="dataPerson.name"></h1>
            <h2 v-text="dataPerson.email"></h2>
            <img :src="dataPerson.picture" alt="dataPerson.name">
        </template>
        <span v-else>Cargando persona...</span>
    </div>
</template>

<script>
    import axios from 'axios';    
    export default {    
        mounted() {
            axios.get('https://randomuser.me/api/')
            .then(response => {
                console.log(response);
                this.person = response.data.results[0];
            });
        },
        data() {
            return {
                person: null,
            }
        },
        computed: {
            dataPerson(){
                return {
                    name: `${this.person.name.first} ${this.person.name.last}`,
                    picture: this.person.picture.large,
                    email: this.person.email
                }
            }
        },
    }
</script>

<style>

</style>


