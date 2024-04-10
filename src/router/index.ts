import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    //路由初始指向
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    redirect: '/home/message'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue'),
    children: [
      {
        path:'/home/message',
        name:'message',
        component: () => import('../views/home/message/message.vue'),
      },
      {
        path:'/home/personal',
        name:'personal',
        component: () => import('../views/home/personal/personal.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
