import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LoginRepository } from '@/repositories/login.repository'
import type { LoginRequest } from '@/entity/login.entity'

export function useAuth() {
  const router = useRouter()
  const email = ref<string>('')
  const password = ref<string>('')
  const error = ref<string | null>(null)

  const login = async () => {
    try {
      const requestData: LoginRequest = {
        email: email.value,
        password: password.value
      }
      const response = await LoginRepository.login(requestData)
      const { token, username } = response.data
      if (token) {
        localStorage.setItem('token', token)
        localStorage.setItem('userName', username)
        // localStorage.setItem('userIcon', userIcon)
      } else {
        throw new Error('トークンが含まれていません')
      }
      router.push('/')
    } catch (err) {
      error.value = 'ログインに失敗しました'
    }
  }

  const logout = async () => {
    try {
      await LoginRepository.logout()
      router.push('/login')
    } catch (err) {
      error.value = 'ログアウトに失敗しました'
    }
  }

  return {
    email,
    password,
    error,
    login,
    logout
  }
}
