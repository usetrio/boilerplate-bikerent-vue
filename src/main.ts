import './assets/scss/main.scss'

import { plugin as MetaPlugin, createMetaManager } from 'vue-meta'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).use(createMetaManager()).use(MetaPlugin)

app.mount('#app')
