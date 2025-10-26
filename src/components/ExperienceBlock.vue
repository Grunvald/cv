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

<style scoped>
.experience {
  border-top: 1px solid #e2e6ef;
  padding-top: 28px;
}

.experience + .experience {
  margin-top: 40px;
}

.experience__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 36px;
  margin-bottom: 22px;
}

.experience__company {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.6px;
  color: #1d2737;
  text-transform: uppercase;
}

.experience__period {
  margin: 6px 0 0;
  font-size: 15px;
  color: #60708a;
}

.experience__role {
  margin: 4px 0 0;
  font-weight: 600;
  color: #1d2737;
}

.resume__text {
  margin: 0;
  font-size: 15px;
  color: #3a4357;
}

.resume__text + .resume__text {
  margin-top: 18px;
}

@media (max-width: 860px) {
  .experience__header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media print {
  .experience {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
