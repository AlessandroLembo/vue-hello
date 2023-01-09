console.log('Vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            firstName: 'Marco'
        }
    }
});

app.mount('#root');