import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/home/guide.vue'),
      meta: { title: '审判指引' }
    },
    {
      path: '/judicial',
      name: 'judicial',
      component: () => import('@/views/home/judicial.vue'),
      meta: { title: '司法观点' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      name: 'error',
      component: () => import('@/views/404.vue'),
      meta: { title: '错误页面' }
    }

  ]
})

export default router
