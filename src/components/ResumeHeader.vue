<template>
  <header class="resume__header">
    <div class="resume__photo">
      <img :src="header.photo" :alt="`Portrait of ${header.name}`" />
    </div>
    <div class="resume__headline">
      <h1 class="resume__name">{{ header.name }}</h1>
      <p class="resume__title">{{ header.title }}</p>
      <div class="resume__contacts">
        <ResumeContact
          v-for="contact in header.contacts"
          :key="contact.type"
          :contact="contact"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import ResumeContact from "./ResumeContact.vue";

defineProps({
  header: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.resume__header {
  display: flex;
  gap: 36px;
  padding: 44px 52px;
  background: linear-gradient(135deg, #e0e6ef 0%, #f0f4fa 100%);
  border-bottom: 1px solid #d9e0ec;
  break-inside: avoid-page;
  page-break-inside: avoid;
}

.resume__photo {
  width: 220px;
  min-height: 260px;
  background: #cfd6e2;
  border-radius: 16px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resume__photo img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.resume__headline {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.resume__name {
  margin: 0;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4.5px;
  color: #1a2538;
}

.resume__title {
  margin: 8px 0 32px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #4c576d;
}

.resume__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 32px;
}

@media (max-width: 860px) {
  .resume__header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 36px 28px;
  }

  .resume__headline {
    align-items: center;
  }

  .resume__contacts {
    justify-content: center;
  }

  .resume__photo {
    width: 200px;
  }
}

@media print {
  .resume__header {
    padding-left: 18mm;
    padding-right: 18mm;
    padding-top: 18mm;
    padding-bottom: 14mm;
  }
}
</style>
