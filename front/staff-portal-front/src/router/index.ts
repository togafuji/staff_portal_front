import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/Login.vue';
import Announcements from '@/views/Announcements.vue';

// ルーターの設定
const router = createRouter({
  history: createWebHistory(),  // ブラウザの履歴APIを使用してページをナビゲート
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/announcements',
      name: 'Announcements',
      component: Announcements
    }
  ]
});

export default router;
