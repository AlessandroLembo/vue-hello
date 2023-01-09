console.log('Vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            welcome: 'Benvenuto su Vue.js',
            textHorizontalAlignment: 'text-center',
            textVerticalAlignment: 'my-5',
            textColor: 'text-primary',
            textSize: 'fw-bold'


        }
    }
});

app.mount('#root');