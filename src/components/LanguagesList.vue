<template>
  <ul class="languages">
    <li v-for="language in languages" :key="language.name">
      <span>{{ language.name }}</span>
      <span>{{ language.level }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  languages: {
    type: Array,
    required: true,
  },
});
</script>
