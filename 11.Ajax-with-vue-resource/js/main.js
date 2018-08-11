new Vue ({
    el: 'main',
    mounted() {
        //console.log('Ready');
        //we call this method here
        this.loadProfiles();
    },
    data: {
        people: []
    },
    methods: {
        // we define how the method works here
        loadProfiles(){
            this.$http.get('https://randomuser.me/api/?results=50')
                .then(response => {
                //body data
                console.log(response.body.results);
                this.people = response.body.results;
            });
        }
    }
})



// Documentation 
// https://github.com/pagekit/vue-resource