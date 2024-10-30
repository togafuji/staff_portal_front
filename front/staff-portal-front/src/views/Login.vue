<template>
  <div class="flex flex-col items-center justify-center min-h-full py-20">
    <div
      class="login-container bg-white-300 p-8 rounded-lg shadow-lg w-full max-w-md min-h-[400px] border-2 border-gray-400"
    >
      <h1
        class="text-black-700 text-2xl font-bold text-center mb-6 flex items-center justify-center"
        style="letter-spacing: 0.1em"
      >
        <!-- 鍵のアイコンを表示 -->
        <font-awesome-icon :icon="['fas', 'lock']" class="mr-2" />
        {{ $t('Login.title') }}
      </h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            {{ $t('Login.email') }}
          </label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="メールアドレス"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            {{ $t('Login.password') }}
          </label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="パスワード"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {{ $t('Login.button') }}
          </button>
        </div>
        <p v-if="error" class="text-red-500 text-xs italic mt-4">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuth } from '@/composition/login.composition'

export default {
  setup() {
    const { email, password, error, login } = useAuth()

    return {
      email,
      password,
      error,
      login
    }
  }
}
</script>
