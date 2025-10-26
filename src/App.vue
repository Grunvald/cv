<template>
  <main class="page">
    <section class="resume">
      <ResumeHeader :header="resume.header" />

      <UiSection title="SUMMARY">
        <p class="resume__text">
          {{ resume.summary }}
        </p>
      </UiSection>

      <UiSection title="SKILLS">
        <p class="resume__text">
          {{ resume.skills }}
        </p>
      </UiSection>

      <UiSection title="PROFESSIONAL EXPERIENCE">
        <ExperienceBlock
          v-for="experience in resume.experiences"
          :key="experience.company"
          :experience="experience"
        />
      </UiSection>

      <UiSection title="LANGUAGES" variant="languages">
        <LanguagesList :languages="resume.languages" />
      </UiSection>
    </section>
  </main>
</template>

<script setup>
import ResumeHeader from "./components/ResumeHeader.vue";
import UiSection from "./components/ui/UiSection.vue";
import ExperienceBlock from "./components/ExperienceBlock.vue";
import LanguagesList from "./components/LanguagesList.vue";
import { resume } from "./data/resume_spanish";
</script>

<style>
@media print {
  .page {
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
  }
}
</style>
