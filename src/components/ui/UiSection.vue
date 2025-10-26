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
