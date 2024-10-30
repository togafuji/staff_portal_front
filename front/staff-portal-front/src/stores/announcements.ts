import { defineStore } from 'pinia';
// import apiClient from '@/services/api';

export const useAnnouncementsStore = defineStore('announcements', {
  state: () => ({
    announcements: []
  }),
  actions: {
    async fetchAnnouncements() {
      try {
        const response = await apiClient.get('/announcements');
        this.announcements = response.data;
      } catch (error) {
        console.error('Failed to fetch announcements:', error);
        throw new Error('お知らせの取得に失敗しました。');
      }
    }
  }
});
