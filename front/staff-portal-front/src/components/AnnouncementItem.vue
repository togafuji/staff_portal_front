<template>
  <div class="announcement">
    <h3>{{ announcement.title }}</h3>
    <p>{{ announcement.summary }}</p>
    <small>{{ announcement.date }}</small>
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
.announcement {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
