import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/styles/antdv/theme.less"
import '@/assets/styles/index.scss'

const app = createApp(App)

app.use(router).use(store).mount('#app')
