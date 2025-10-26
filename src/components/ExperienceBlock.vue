<template>
  <div class="experience">
    <div class="experience__header">
      <div>
        <h3 class="experience__company">{{ experience.company }}</h3>
        <p class="experience__period">{{ experience.period }}</p>
      </div>
      <p class="experience__role">{{ experience.role }}</p>
    </div>
    <p v-if="experience.description" class="resume__text">
      {{ experience.description }}
    </p>
    <ExperienceProject
      v-for="project in experience.projects"
      :key="project.name"
      :project="project"
    />
  </div>
</template>

<script setup>
import ExperienceProject from "./ExperienceProject.vue";

defineProps({
  experience: {
    type: Object,
    required: true,
  },
});
</script>
