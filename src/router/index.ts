import { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouterGuards } from './routerGuards'
import defaultRouters from './defaultRouter'

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouters
})

export function setupRouter(app: App) {
  app.use(router)
  createRouterGuards(router)
}

export default router
