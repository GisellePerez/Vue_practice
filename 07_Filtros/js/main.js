const vm = new Vue ({
    el: 'main',
    data: {
        search:'',
        min:5,
        games: [
            { name: 'Heavy Rain', gen:'mistery', points: '9' },
            { name: 'Horizon Zero Dawn', gen:'adventure', points: '10' },
            { name: 'Persona 5', gen:'RPG', points: '7' },
            { name: 'Uncharted Lost Legacy', gen:'rpg', points: '4' }
        ]
    },
    computed: {
        bestGames(){
            return this.games.filter((game) => game.points >= this.min);
        },

        //filer results
        findGame(){
            return this.games.filter((game) => game.name.includes(this.search));
        }
    }
    
})