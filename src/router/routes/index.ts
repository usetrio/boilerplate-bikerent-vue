import HomeView from '@/views/HomeView.vue'
import type { RouteRecordRaw } from 'vue-router'
import modules from './modules'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...modules
]

export default routes
