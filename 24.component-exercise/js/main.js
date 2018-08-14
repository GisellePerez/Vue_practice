Vue.component ('users', {
    template: '#users-template',
    mounted() {
        axios.get('https://randomuser.me/api/?results=200')
        .then(response => {
            console.log(response.data.results);
            //this.users = response.data.results;
            const list = response.data.results.map( user => {
                return { //return an object with the data i want
                    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
                    email:  user.email,
                    picture: user.picture.medium,
                }
            });
            //now i want to set this users as info in the model (list)            
            this.users = list;
        })
    },
    data() {
        return{            
            users: [], // users list is stored here
            search:'', //storing the the input value thanks to v-model
        }
    },
    computed: {
        filterUsers() {
            return this.users.filter(user => {
                return user.name.includes(this.search); //the same search in data()
                //filter every element in users and checks if the name includes the same text taht the input.value (search)
            });
        }
    }
});

Vue.component ('user', {
    props:['data'],
    template: '#user-template',
});

new Vue ({
    el:'main',
});

