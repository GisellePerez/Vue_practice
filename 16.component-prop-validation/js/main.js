Vue.component('candidate', {
    //props: ['name', 'email', 'image'],
    props: {
        name: {
                type: String,
                required: true
        },
        email: {
            type: [String, Array], //corresponding to type string or array
            default: 'default@mail.com' //if there's no email, this renders instead
        },
        image: null, // null = any type   
        location: {
            type: Object,
            default() {
                return {
                    city: 'Buenos Aires'
                }
            }
        }
        
    },
    template: '#candidate-template'
});

new Vue ({
    el:'main',
    mounted(){
        this.getCandidates();
    },
    data: {
        candidates: []
    },
    methods: {
        getCandidates() {
            axios.get('https://randomuser.me/api/?results=100')
                .then(response => {
                    this.candidates = response.data.results;
                })
        } 
    }
});