import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import { createPinia } from 'pinia'
import router from './router'
import axios from 'axios'

// 基础地址
axios.defaults.baseURL = 'http://localhost:5000'
const { message, notification, dialog, loadingBar } = createDiscreteApi(['message', 'dialog', 'notification', 'loadingBar'],)
const app = createApp(App)
app.provide('axios', axios)
app.provide('message', message)
app.provide('notification', notification)
app.provide('dialog', dialog)
app.provide('loadingBar', loadingBar)
app.use(naive)
app.use(router)
app.use(createPinia())
app.mount('#app')
