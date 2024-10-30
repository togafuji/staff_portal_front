<template>
  <!-- ヘッダー部分 -->
  <header class="bg-[#78c2f683] h-20 flex items-center justify-between px-10">
    <div>
      <h1 class="text-red-700 text-4xl">{{ $t('Header.title') }}</h1>
    </div>
    <!-- 右端にユーザー情報とログアウトボタン -->
    <div v-if="isLoggedIn" class="flex items-center space-x-4">
      <img :src="userIcon" alt="User Icon" class="w-10 h-10 rounded-full mr-4" />
      <span class="text-lg font-semibold">{{ userName }}</span>
      <button
        @click="logout"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {{ $t('Login.out') }}
      </button>
    </div>
  </header>
  <!-- ナビゲーションバー -->
  <nav v-if="isLoggedIn" class="min-h-[45px] text-2xl border-b border-black">
    <ul class="flex justify-between items-center w-full px-10">
      <li>
        <router-link
          to="/home"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
          {{ $t('Header.nav.home') }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/chat"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'comments']" class="mr-2" />
          {{ $t('Header.nav.chat') }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/schedule"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
          {{ $t('Header.nav.schedule') }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/attendance"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'user-check']" class="mr-2" />
          {{ $t('Header.nav.attendance') }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/share"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'share-alt']" class="mr-2" />
          {{ $t('Header.nav.share') }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/config"
          class="text-gray-300 flex items-center"
          exact-active-class="font-bold text-black"
        >
          <font-awesome-icon :icon="['fas', 'cog']" class="mr-2" />
          {{ $t('Header.nav.config') }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { LoginRepository } from '@/repositories/login.repository'

export default defineComponent({
  setup() {
    const router = useRouter()
    const userName = ref(localStorage.getItem('userName') || 'ゲスト')
    const userIcon = ref(localStorage.getItem('userIcon') || '/noimage.png')
    const isLoggedIn = ref(!!localStorage.getItem('token'))

    // ログイン処理後にトークンを保存し、isLoggedIn を更新
    const login = async () => {
      try {
        const response = await LoginRepository.login()
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userName', response.data.userName)
        localStorage.setItem('userIcon', response.data.userIcon)
        userName.value = response.data.userName
        userIcon.value = response.data.userIcon
        isLoggedIn.value = true
        router.push('/home')
      } catch (err) {
        console.error('ログインに失敗しました')
      }
    }

    // ログアウト処理
    const logout = async () => {
      try {
        await LoginRepository.logout()
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userIcon')
        userName.value = 'ゲスト'
        userIcon.value = '/noimage.png'
        isLoggedIn.value = false // ログアウト状態に更新
        router.push('/login')
      } catch (err) {
        console.error('ログアウトに失敗しました')
      }
    }

    return {
      userName,
      userIcon,
      isLoggedIn,
      login,
      logout
    }
  }
})
</script>
