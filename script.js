console.log('Vue ok', Vue);

const app = Vue.createApp({
    data(){
        return{
            welcome: 'Benvenuto su Vue.js',
            marginSpace: 'my-5',
            textColor: 'text-primary',
            textSize: 'fw-bold',
            welcomeImage: {
                image: 'welcome.jpg',
                name: 'welcome'
            } 

        }
    }
});

app.mount('#root');