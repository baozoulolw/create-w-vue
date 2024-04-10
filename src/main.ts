import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.scss'
import './assets/script/init.ts'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
