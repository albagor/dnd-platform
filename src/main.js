// dnd-strumenti interattivi © 2025 Dario Pellitteri. All rights reserved.

import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from 'vue-toastification' // <-- 1. IMPORTA
import 'vue-toastification/dist/index.css' // <-- 2. IMPORTA GLI STILI

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(Toast) // <-- 3. USA IL PLUGIN
app.use(router)

app.mount('#app')
