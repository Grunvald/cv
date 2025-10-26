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

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
}

.resume {
  width: 900px;
  max-width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 32px 80px rgba(16, 27, 50, 0.12);
  overflow: hidden;
}

.resume__text {
  margin: 0;
  font-size: 15px;
  color: #3a4357;
}

.resume__text + .resume__text {
  margin-top: 18px;
}

@media print {
  .page {
    margin: 0;
    padding: 0;
    display: block;
    width: 100%;
    min-height: auto;
    align-items: stretch;
  }

  .resume {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>
