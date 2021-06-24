import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import VueAxios from 'vue-axios';
import bootstrap from 'bootstrap';
import App from './App.vue';
import router from './router';

library.add(faUserSecret);

const app = createApp(App);
app.use(VueAxios, axios);
app.use(bootstrap);
app.use(router);
app.mount('#app');
