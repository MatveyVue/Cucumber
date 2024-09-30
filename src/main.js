import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'
import router from '.'

const app = createApp(App)

app.use(router)
app.mount('#app')
