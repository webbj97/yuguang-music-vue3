import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/index.ts'
import "@/stylesheet/index.scss";

console.log('routes:', routes);

const app = createApp(App);

app.use(routes);

app.mount('#app')
