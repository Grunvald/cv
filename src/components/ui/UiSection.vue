<template>
  <section class="resume__section" :class="sectionClass">
    <h2 class="resume__section-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: "",
  },
});

const sectionClass = computed(() =>
  props.variant ? `resume__section--${props.variant}` : null
);
</script>

<style scoped>
.resume__section {
  padding: 44px 52px 0;
}

.resume__section:last-of-type {
  padding-bottom: 52px;
}

.resume__section + .resume__section {
  padding-top: 36px;
}

.resume__section--languages {
  border-top: 1px solid #e2e6ef;
  padding-top: 36px;
  margin-top: 44px;
}

.resume__section-title {
  margin: 0 0 18px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2.6px;
  color: #1c2535;
}

@media (max-width: 860px) {
  .resume__section {
    padding: 36px 28px;
  }
}

@media print {
  .resume__section {
    padding-left: 18mm;
    padding-right: 18mm;
    padding-top: 12mm;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .resume__section:last-of-type {
    padding-bottom: 18mm;
  }

  .resume__section + .resume__section {
    padding-top: 10mm;
  }

  .resume__section-title {
    page-break-after: avoid;
  }
}
</style>
