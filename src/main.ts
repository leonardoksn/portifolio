import './assets/main.css';
import 'primevue/resources/themes/md-dark-deeppurple/theme.css'

import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import vuescroll from 'vue-scroll';
import App from './App.vue';

const app = createApp(App)

app.use(vuescroll, { throttle: 500 })
app.use(PrimeVue);

app.use(createPinia())

app.mount('#app')
