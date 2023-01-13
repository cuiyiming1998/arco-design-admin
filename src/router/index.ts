import { createRouter, createWebHashHistory } from 'vue-router'
import defaultRouters from './defaultRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouters
})

export default router
