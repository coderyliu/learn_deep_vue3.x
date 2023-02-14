import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/favor',
    name: 'favor',
    component: () => import('../views/favorite/index.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order/index.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/message/index.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/city/index.vue'),
    meta: {
      hiddenTabBar: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/index.vue'),
    meta: {
      hiddenTabBar: true
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/index.vue'),
    meta: {
      hiddenTabBar: true
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router