<template>
  <ul class="experience__list">
    <slot />
  </ul>
</template>

<style scoped>
.experience__list {
  margin: 16px 0 0;
  padding-left: 22px;
  font-size: 15px;
  color: #3a4357;
}

.experience__list li {
  margin-bottom: 10px;
}

.experience__list li::marker {
  color: #97a2b8;
}

@media print {
  .experience__list {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
