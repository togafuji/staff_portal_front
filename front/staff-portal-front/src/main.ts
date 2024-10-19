import '@/assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './shared/i18n.util' // `i18n` をインポート
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faComments, faCalendar, faUserCheck, faShareAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faComments, faCalendar, faUserCheck, faShareAlt, faCog)

// Vue 3のアプリケーションインスタンスを作成
const app = createApp(App)

// PiniaとRouterのプラグインを使用
app.use(createPinia())
app.use(router)
// `i18n` をアプリケーションに適用
app.use(i18n)

app.component('font-awesome-icon', FontAwesomeIcon)
// アプリケーションをマウント
app.mount('#app')
