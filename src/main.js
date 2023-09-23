import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Correctly import the router instance


const app = createApp(App);

// Use the router
app.use(router);

app.mount('#app');
