import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/config/router'
import { createPinia } from 'pinia'
import { useDataStore } from '@/stores/store'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.mount('#app')

const dataStore = useDataStore();
