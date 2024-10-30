<template>
  <div id="app" class="min-h-screen w-full">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Headers.vue'
import Footer from '@/components/Footers.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

Footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  min-height: 80px; /* フッターの高さを増やす */
  text-align: center;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #78c2f683; /* フッターの背景色 */
}
</style>
