<template>
  <div class="relative min-h-screen bg-gray-100">
    <header class="bg-gray-800 p-4 text-white">
      <h1 class="text-xl">ホームページ</h1>
      <button
        @click="logout"
        class="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        ログアウト
      </button>
    </header>
    <main class="p-8">
      <h2 class="text-2xl font-bold">ようこそ！</h2>
      <p>このページはログイン後に表示されます。</p>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { LoginRepository } from '@/repositories/login.repository'

export default defineComponent({
  setup() {
    const router = useRouter()
    const logout = async () => {
      try {
        await LoginRepository.logout()
        router.push('/login')
      } catch (err) {
        console.error('ログアウトに失敗しました')
      }
    }

    return {
      logout
    }
  }
})
</script>