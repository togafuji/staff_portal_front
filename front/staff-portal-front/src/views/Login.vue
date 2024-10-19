<template>
  <div class="login-container">
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <input-field label="ユーザー名" v-model="username" type="text" />
      <input-field label="パスワード" v-model="password" type="password" />
      <submit-button label="ログイン" />
    </form>
  </div>
</template>

<script>
import InputField from '@/components/form/ImputField.vue';
import SubmitButton from '@/components/button/SubmitButton.vue';
import { useUserStore } from '@/stores/users.ts';

export default {
  components: {
    InputField,
    SubmitButton
  },
  setup() {
    const userStore = useUserStore();
    const username = ref('');
    const password = ref('');

    const login = async () => {
      await userStore.login(username.value, password.value);
    };

    return { username, password, login };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 360px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
