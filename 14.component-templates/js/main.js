Vue.component ('choose-winner', {
    props:['list'],
    //template: '#choose-winner-template', // comment this for inline templating only

    //templates admit only one root element - wrap everithing on a div or section   
    // template:   `<div> 
    //                 <h1 v-if="winner">The winner is {{ winner }}</h1>
    //                 <template v-else>
    //                     <h1>Contestants</h1>
    //                     <ul>
    //                         <li v-for="person in list">{{ person }}</li>
    //                     </ul>
    //                 </template>
    //                 <button @click="chooseWinner">Choose winner</button>
    //             </div>`,

    methods: {
        chooseWinner() {
            let cant = this.contestants.length;
            let index = Math.floor((Math.random() * cant));
            this.winner =  this.contestants[index -1];
        }
    },
    data() {
        return {
            winner: false,
            contestants: this.list
        }
    },
})

new Vue ({
    el:'main',
    data: {
        people: ['Jack', 'Michael', 'Paul', 'Gloria', 'Linda']
    }
})