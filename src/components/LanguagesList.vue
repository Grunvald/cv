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

<style scoped>
.languages {
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 32px;
  font-weight: 600;
  color: #1f2a3d;
}

.languages li {
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.4px;
}

@media (max-width: 860px) {
  .languages {
    grid-template-columns: 1fr;
  }
}

@media print {
  .languages li {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
