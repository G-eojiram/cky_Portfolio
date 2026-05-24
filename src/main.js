import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'   // change path if your file is named differently

createApp(App).use(router).mount('#app')
