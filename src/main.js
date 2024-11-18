import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/config/router'
import { createPinia } from 'pinia'

// Import the Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core';
// Import Font Awesome icon component
import { faArrowRight, faHouse} from '@fortawesome/free-solid-svg-icons'

const pinia = createPinia()
const app = createApp(App)


library.add(faArrowRight, faHouse);
app.use(router)
app.use(pinia)
app.mount('#app')