import { createRouter, createWebHashHistory } from 'vue-router'

import GalleryCats from './views/GalleryCats.vue'
import HomeView from './views/HomeView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: GalleryCats,
      path: '/gallery'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
