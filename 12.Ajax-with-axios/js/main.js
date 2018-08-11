new Vue({
    el:'main',
    mounted() {
        this.loadProfiles()
    },
    data: {
        people: []
    },
    methods: {
        loadProfiles() {
            axios.get('https://randomuser.me/api/?results=50')
                .then(response => {
                    //console.log(response)
                    this.people = response.data.results;
                });
        }
    }
})


// Documentation
// https://github.com/axios/axios