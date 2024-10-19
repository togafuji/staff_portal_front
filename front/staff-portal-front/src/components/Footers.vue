<template>
  <footer>
    <div>
      <!-- 現在の年を表示 -->
      <p>togasaki.inc © {{ currentYear }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TimeFooters',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #33333361; /* フッターの背景色を指定 */
}
</style>
