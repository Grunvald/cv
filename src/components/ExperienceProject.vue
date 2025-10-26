<template>
  <div>
    <div class="experience__project">{{ project.name }}</div>
    <p v-if="project.description" class="resume__text experience__description">
      {{ project.description }}
    </p>
    <div v-for="section in project.sections" :key="section.title">
      <UiSubheading>{{ section.title }}:</UiSubheading>
      <UiList>
        <li v-for="(item, index) in section.items" :key="index">
          {{ item }}
        </li>
      </UiList>
    </div>
  </div>
</template>

<script setup>
import UiList from "./ui/UiList.vue";
import UiSubheading from "./ui/UiSubheading.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
