<template>
    <div id="notScoped">
        <div id="container">
            <div>
                <h2>To do list</h2>
                <ul>
                    <li v-for="task in unfinishedTasks">
                        <a href="#" @click="updateTasks(task)" v-text="task.title"></a>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Finished tasks</h2>
                <ul>
                    <li v-for="task in finishedTasks">
                        <a href="#" @click="updateTasks(task)" v-text="task.title"></a>
                    </li>   
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                { title: 'Practice Vue.js', completed: false },
                { title: 'Finish workshop content', completed: false },
                { title: 'Update my repos', completetd: false },
                { title: 'Start new projects', completed: false },
                { title: 'Keep up with new technologies', completed: false }
            ],
            completedTasks: [],
        }
    },
    methods: {
        updateTasks(task) {
            task.completed = !task.completed;
        }
    },
    computed: {
        finishedTasks() {
            return this.tasks.filter(task => task.completed)
        },
        unfinishedTasks() {
            return this.tasks.filter(task => !task.completed)
        }
    }
}
</script>

<style>
    /*these are global styles that transfers to other components*/
    body{
        background-color: antiquewhite;
        padding: 3em;
        width: 70%;
        margin: 0 auto;
    }
</style>

<style scoped> 
    /* these are scoped styles that belong to this component only
    
    /* 
    body{
        padding: 3em;
        width: 70%;
        margin: 0 auto;
    }*/
    #container {
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    #container div {
        width: 50%;
    }
    h2 {
        font-size: 26px;
        margin:  0 0 0 1.2em;
    }
    ul li {
        list-style: none;
        margin: 0.8em 0;
    }
    a {
        text-decoration: none;
        color: rgb(90, 146, 146);
        font-size: 18px;
        font-weight: bold;
    }

</style>
