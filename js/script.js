// Esercizio: Generare 10 email e stamparle a schermo, utilizzando Vue, Axios e l'endpoint relativo nelle slide che sto per aggiungere su Drive.

var app = new Vue(
    {
        el: '#root',
        data: {
            emailList: [],
        },
        methods: {
        },
        mounted: function() {

            for(let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result)=> {
                    this.email = result.data.response;
                    this.emailList.push(this.email);
                });
            }
            
        },
    }
);