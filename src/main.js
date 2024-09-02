import './assets/main.css'
import axios from "axios"
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router.js";

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router)
app.mount('#app')

