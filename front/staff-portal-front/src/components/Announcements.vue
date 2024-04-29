<template>
  <div>
    <h1>お知らせ</h1>
    <ul>
      <li v-for="announcement in announcements" :key="announcement.id">
        <h3>{{ announcement.title }}</h3>
        <p>{{ announcement.summary }}</p>
        <small>{{ announcement.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { useAnnouncementsStore } from '@/stores/announcements';
import { onMounted } from 'vue';

export default {
  setup() {
    const announcementsStore = useAnnouncementsStore();
    onMounted(() => {
      announcementsStore.fetchAnnouncements();
    });

    return {
      announcements: announcementsStore.announcements
    };
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f8fafc;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
}

h3 {
  margin-top: 0;
  color: #1f2937;
}

p {
  color: #4b5563;
}

small {
  color: #6b7280;
}
</style>
