<template>
  <div>
    <div class="no-break">
      <div class="experience__project">{{ project.name }}</div>
      <p v-if="project.description" class="resume__text experience__description">
        {{ project.description }}
      </p>
    </div>
    <div v-for="section in project.sections" :key="section.title" class="experience__section no-break">
      <UiSubheading>{{ section.title }}:</UiSubheading>
      <UiList>
        <li
          v-for="(item, index) in section.items"
          :key="index"
          v-text="item"
        />
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

<style scoped>
.experience__project {
  font-weight: 600;
  color: #1f2a3d;
}

.resume__text {
  margin: 0;
  font-size: 15px;
  color: #3a4357;
}

.experience__description {
  margin-top: 16px;
}
</style>
