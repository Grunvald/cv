<template>
  <main class="page">
    <div class="page__toolbar">
      <button
        v-for="(lang, key) in resumeMap"
        :key="key"
        class="download-button"
        type="button"
       
        v-text="key"
        @click="changeLanguage(key)"
      />
      <button
        class="download-button"
        type="button"
        :disabled="isGenerating"
        @click="downloadPdf"
      >
        <span v-if="!isGenerating">Download PDF</span>
        <span v-else>Preparing...</span>
      </button>
    </div>
    <section
      class="resume"
      :class="{ 'resume--exporting': isGenerating }"
      ref="resumeRef"
    >
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
import { ref, computed, nextTick } from "vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumeHeader from "./components/ResumeHeader.vue";
import UiSection from "./components/ui/UiSection.vue";
import ExperienceBlock from "./components/ExperienceBlock.vue";
import LanguagesList from "./components/LanguagesList.vue";
import { resume_spanish, resume_english, resume_russian } from "./data";

const resumeRef = ref(null);
const isGenerating = ref(false);

const lang = ref('english');

const resumeMap = {
  english: resume_english,
  russian: resume_russian,
  spanish: resume_spanish,
};

const changeLanguage = (newLang) => {
  if (resumeMap[newLang]) {
    lang.value = newLang;
  }
};

const resume = computed(() => resumeMap[lang.value]);

const downloadPdf = async () => {
  if (!resumeRef.value || isGenerating.value) return;

  isGenerating.value = true;

  try {
    await nextTick();

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    await new Promise((resolve) => {
      if (typeof window !== "undefined") {
        window.html2canvas = html2canvas;
      }

      pdf.html(resumeRef.value, {
        margin: [48, 36, 48, 36],
        autoPaging: "text",
        html2canvas: {
          scale: 2,
          useCORS: true,
          scrollX: 0,
          scrollY: 0,
          backgroundColor: "#ffffff",
        },
        pagebreak: {
          mode: ["css", "legacy"],
          avoid: [".resume__section", ".experience", ".project"],
        },
        callback: (doc) => resolve(doc),
        x: 0,
        y: 0,
      });
    });

    pdf.save(`vasili-sholukh-resume-${lang.value}.pdf`);
  } catch (error) {
    console.error("Failed to generate PDF", error);
  } finally {
    isGenerating.value = false;
  }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 48px 24px;
}

.page__toolbar {
  display: flex;
  gap: 12px;
}

.resume {
  width: 900px;
  max-width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 32px 80px rgba(16, 27, 50, 0.12);
  overflow: hidden;
}

.resume :deep(.resume__section),
.resume :deep(.experience),
.resume :deep(.project) {
  break-inside: avoid;
  page-break-inside: avoid;
}

.resume--exporting {
  width: 210mm;
  max-width: none;
  border-radius: 0;
  box-shadow: none;
  background: #ffffff;
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

