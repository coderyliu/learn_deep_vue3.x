import {
  NO
} from '@vue/shared'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

// 这种webpack打包命名法被称为魔法命名
const Home = () => import( /*webpackChunkName:'home-chunk'*/ '../views/Home.vue')
const About = () => import( /*webpackChunkName:'about-chunk'*/ '../views/About.vue')
const User = () => import('../views/User.vue')

const Message = () => import('../views/HomeMessage.vue')
const Shops = () => import('../views/HomeShops.vue')
const NotFound = () => import('../views/NotFound.vue')

const Category = () => import('../views/Category.vue')
const Login = () => import('../views/Login.vue')

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: {
      name: 'coder',
      friends: 'kobe'
    },
    children: [{
        path: '',
        redirect: '/home/message'
      },
      {
        path: 'message',
        component: Message
      },
      {
        path: 'shops',
        component: Shops
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:username',
    component: User,
    name: 'user'
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  },
  {
    path: '/login',
    component: Login,
    // 路由的守卫和全局守卫规则一样
    beforeEnter:(to,from)=>{
      // console.log(to)
      // console.log(from)
      // return false
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// 动态添加路由
// 1.创建一个顶层路由对象
const categoryRoute = {
  path: '/category',
  component: Category,
  name: 'category'
}

// 添加顶层路由对象
router.addRoute(categoryRoute)

// 添加二级路由对象
router.addRoute('home', {
  path: 'moment',
  component: () => import('../views/HomeMoment.vue')
})

// 2.删除路由的三种方式
// 2.1.name属性代表唯一的路由对象，添加一个一样的Name属性的路由对象，会替换原来的路由对象
const cancelRoute = router.addRoute({
  path: '/list',
  component: () => import('../views/List.vue'),
  name: 'category'
})

// 2.2removeRoute方法
// 传入代表路由的惟一的name属性
// router.removeRoute('category')
// 不能传入路径,否则没用
// router.removeRoute('/list')

// 2.3.动态添加路由会返回一个函数，调用该函数会删除路由对象
// cancelRoute()

// 3该方法返回一个路由映射表，数组形式，相当于routes
// console.log(router.getRoutes())

// 4.hasRoute传入一个唯一路由的name属性，判断是否有该路由对象的存在boolean
// console.log(router.hasRoute('category'))

// 路由的导航守卫
// 全局前置导航
// to:要进入的路由的Route对象
// from:要离开的路由的当前Route对象
// 返回值:
/*
  1.return false :不进行导航，跳转
  2.return undefined:正常导航跳转
  3.return sting:string是个路径字符串，跳转到相应的路由
  4.return {}:{path:'/home'.....}
*/
// router.beforeEach((to, from) => {
//   // console.log(to)
//   // console.log(from)
//   if (to.path !== '/login') {
//     const token = window.localStorage.getItem('token')
//     if (!token) {
//       return '/login'
//     }
//   }
// })


export default router