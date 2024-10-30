import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import Announcements from '@/views/Announcements.vue'

// ルーターの設定
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true }
  }
  // {
  //   path: '/chat',
  //   name: 'Chat',
  //   component: Chatview,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/schedule',
  //   name: 'Suchedule',
  //   component: Scheduleview,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/schedule',
  //   name: 'Suchedule',
  //   component: Scheduleview,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/attendance',
  //   name: 'Attendance',
  //   component: Attendanceview,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/share',
  //   name: 'Share',
  //   component: Shareview,
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: '/setting',
  //   name: 'Setting',
  //   // component: Settingview,
  //   meta: { requiresAuth: true }
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 認証されていない場合、homeへのアクセスを拒否
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('token')

  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // 未ログインで認証が必要なページにアクセスしようとした場合、ログインページにリダイレクト
    next('/login')
  } else {
    next()
  }
})

export default router
