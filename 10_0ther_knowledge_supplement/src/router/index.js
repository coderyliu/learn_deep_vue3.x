import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () => import('../02_SSR/Home.vue'),
    name: 'home'
  },
  {
    path: '/about',
    component: () => import('../02_SSR/About.vue'),
    name: 'about'
  }
]

export function createRouter() {
  return new VueRouter({
    routes,
    mode: 'history'
  })
}

// export default router