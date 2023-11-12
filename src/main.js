// Required Packages
import { createApp } from 'vue'
// Router
import router from '@/router'
// Get App
import App from './App.vue'
// Add the TailwindCSS
import '@/styles/tailwind.css'

createApp(App)
	.use(router)
	.mount('#app')
