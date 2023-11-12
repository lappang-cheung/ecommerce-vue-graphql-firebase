// Required Packages
import { createRouter, createWebHistory} from 'vue-router'
// Pages
import Home from '@/pages/Home'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	next()
})

export default  router
