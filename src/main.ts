import './assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createApp, watchEffect } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

watchEffect(() => {
  AOS.init();
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
