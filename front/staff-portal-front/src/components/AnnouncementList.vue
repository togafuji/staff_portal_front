<template>
  <div class="flex flex-col items-start"> <!-- 左上にコンテンツを配置するためのクラスを追加 -->
    <h1 class="text-xl font-bold margin-left: 0">お知らせ</h1>
    <div>
      <announcement-item 
        v-for="announcement in announcements" 
        :key="announcement.id" 
        :announcement="announcement" />
    </div>
  </div>
</template>

<script>
import AnnouncementItem from './AnnouncementItem.vue';

export default {
  components: {
    AnnouncementItem
  },
  props: {
    announcements: Array
  }
};
</script>