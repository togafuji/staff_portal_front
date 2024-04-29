<template>
  <div class="login-container">
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="ユーザー名" />
      <input type="password" v-model="password" placeholder="パスワード" />
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const userStore = useUserStore();

    const login = async () => {
      await userStore.login(username.value, password.value);
    };

    return {
      username,
      password,
      login
    };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

input {
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.375rem;
  background-color: #f8fafc;
  font-size: 1rem;
  line-height: 1.5;
}

button {
  width: 100%;
  padding: 0.75rem;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2563eb;
}
</style>
