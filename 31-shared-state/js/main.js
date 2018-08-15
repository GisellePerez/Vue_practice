/*THIS ONLY WORKS IN SMALL APPS - TO STABLISH CENTRAL STATE WEMUST USE VUEX*/
const shared = {
    user: {
        name: 'Giselle'
    }
};

/* now both share the same info*/
/* in console: $vm0.user.name = 'Another name' || shared.user.name = 'Another name' -> changes in both elements*/
new Vue ({
    el: '#app1',
    data: shared,
});

new Vue ({
    el: '#app2',
    data: shared,
});


/* saparate info in both elements
in console: $vm0.user.name = 'Another name' -> changes in only one of them

new Vue ({
    el: '#app1',
    data: {
        user: {
            name: 'Giselle Romina'
        }
    }
});


new Vue ({
    el: '#app2',
    data: {
        user: {
            name: 'Giselle Romina'
        }
    }
});
*/