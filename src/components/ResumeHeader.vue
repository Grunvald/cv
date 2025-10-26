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
