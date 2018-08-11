const vm = new Vue ({
    el:'main',
    data: {
        title: 'Tasks',
        tasks:[
            {name: 'Go to the market', completed: false},
            {name: 'Practice Vue', completed: false},
            {name: 'Practice express', completed: false},
            {name: 'Learn more ES6', completed: false}
        ]
    },
    methods: { //an object
        completeTask(task){
            //to change the completed attr value for the opposite value (true/false) when i click. REcieves a task as parameter
            //console.log(task);
            task.completed = !task.completed; 
        }
    },
    computed:{
        completedTasks(){
            return this.tasks.filter((task) => task.completed); 
        }
    }
})
