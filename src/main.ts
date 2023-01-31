import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import { setupStore } from './store'
import router, { setupRouter } from './router/index'
import 'animate.css'
import i18n from './locale'
import 'uno.css'

const app = createApp(App)

app.use(ArcoVueIcon)
app.use(i18n)
await setupStore(app)
await setupRouter(app)

await router.isReady()

app.mount('#app')
