<template>
  <div class="announcements-container pl-1"> <!-- 左側にパディングを追加して少しインデント -->
    <h1>お知らせ</h1> <!-- タイトルのスタイル -->
    <ul class="list-none"> <!-- リストのデフォルトのスタイルを削除 -->
      <li v-for="announcement in announcements" :key="announcement.id" class="mb-4">
        <h3 class="text-md font-medium">{{ announcement.title }}</h3>
        <p>{{ announcement.summary }}</p>
        <small class="text-sm text-gray-600">{{ announcement.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { useAnnouncementsStore } from '../stores/announcements';

export default {
  setup() {
    const announcementsStore = useAnnouncementsStore();
    announcementsStore.fetchAnnouncements();

    return {
      announcements: announcementsStore.announcements
    };
  }
};
</script>

<style scoped>
.announcements-container {
  margin: 20px auto;
  padding: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
