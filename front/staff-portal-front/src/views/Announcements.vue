<template>
  <div class="announcements-container">
    <h1>{{ $t('Home.title') }}</h1>
    <ul class="list-none">
      <li v-for="announcement in announcements" :key="announcement.id" class="mb-4">
        <h3 class="text-md font-medium">{{ announcement.title }}</h3>
        <p>{{ announcement.summary }}</p>
        <small class="text-sm text-gray-600">{{ announcement.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { useAnnouncementsStore } from '../stores/announcements'

export default {
  setup() {
    const announcementsStore = useAnnouncementsStore()
    announcementsStore.fetchAnnouncements()

    return {
      announcements: announcementsStore.announcements
    }
  }
}
</script>
