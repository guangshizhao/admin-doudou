import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
/* 1.模拟登录状态   true 代表已经登录 false 代表未登录 */
router.beforeEach((to, from, next) => {
  const user = Boolean(sessionStorage.getItem('user'))
  console.log(11, user)
  if (user) {
    // '用户已登录'
    if (to.path === '/login') {
      console.log(`用户已登录跳转的是登录页,从${from.path}来回${from.path}页面`)
      next({ path: from.path })
    } else {
      console.log('用户已登录跳转的不是登录页,接着走')
      next()
    }
  } else {
    // 用户没登录
    if (to.path !== '/login') {
      console.log('用户没登录,跳转的不是登录页,强制去登录页')
      next({ path: '/login' })
    } else {
      console.log('用户没登录,跳转的是登录页,就跳转到登录页')
      next()
    }
  }
})

export default router
