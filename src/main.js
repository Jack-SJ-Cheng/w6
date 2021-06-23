import { createApp } from 'vue';
import bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(bootstrap);
app.use(router);
app.mount('#app');
