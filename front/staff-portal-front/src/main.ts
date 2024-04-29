import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'


// Vue 3のアプリケーションインスタンスを作成
const app = createApp(App)

// PiniaとRouterのプラグインを使用
app.use(createPinia())
app.use(router)

// アプリケーションをマウント
app.mount('#app');
