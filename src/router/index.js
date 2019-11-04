import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      },
      meta: { title: '首页' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/404.vue')
    }

  ]
})

export default router
