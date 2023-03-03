import * as buffer from 'buffer'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import { setupStore } from './store'
import { setupRouter } from './router/index'
import 'animate.css'
import i18n from './locale'
import 'uno.css'

if (typeof (window as any).global === 'undefined')
  (window as any).global = window

if (typeof (window as any).Buffer === 'undefined')
  (window as any).Buffer = buffer.Buffer

const app = createApp(App)

app.use(ArcoVueIcon)
await setupStore(app)
setupRouter(app)
app.use(i18n)

app.mount('#app')
