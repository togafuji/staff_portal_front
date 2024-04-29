<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
    <div class="bg-white p-6 rounded-lg max-w-xl w-full space-y-4">
      <h3 class="text-2xl font-bold">{{ announcement.title }}</h3>
      <p class="text-gray-800">{{ announcement.summary }}</p>
      <button @click="$emit('close')" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    announcement: Object
  }
};
</script>

<style scoped>
</style>
