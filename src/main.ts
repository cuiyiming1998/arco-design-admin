import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import '@arco-design/web-vue/dist/arco.css'
import App from './App.vue'
import router from './router/index'
import 'animate.css'
import i18n from './locale'
import 'uno.css'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ArcoVueIcon)
app.use(i18n)

app.mount('#app')
