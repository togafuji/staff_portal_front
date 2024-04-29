import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../components/Login.vue';
import Announcements from '../components/Announcements.vue';

// ルーターの設定
const router = createRouter({
  history: createWebHistory(),  // ブラウザの履歴APIを使用してページをナビゲート
  routes: [
    {
      path: '/',
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