import { createMemoryHistory, createRouter } from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/privacyPolicy', component: PrivacyPolicy },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})
