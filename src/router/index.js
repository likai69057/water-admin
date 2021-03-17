import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/others/pageOne')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/others/pageTwo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
