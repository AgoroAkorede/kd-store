import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { localStoragePlugin } from './localStoragePlugin'
import 'preline/preline'
import App from './App.vue'
import router from './router'

const app = createApp(App)
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

app.use(createPinia())
const pinia = createPinia()
pinia.use(localStoragePlugin)
app.use(router)

app.mount('#app')
