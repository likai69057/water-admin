import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 优化： 同一路由重复点击跳转的时候会报错 解决报错问题

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

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
