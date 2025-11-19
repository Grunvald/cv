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
      <div class="break-page" />
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
import html2pdf from "html2pdf.js";
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

    const element = resumeRef.value;
    
    const opt = {
      margin: [15, 0, 15, 0], // equal top/bottom margins
      filename: `vasili-sholukh-resume-${lang.value}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'], avoid: '.no-break' }
    };

    await html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf) => {
      const totalPages = pdf.internal.getNumberOfPages();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(10);
        pdf.setTextColor(150);
        pdf.text(
          `Page ${i} of ${totalPages}`,
          pageWidth / 2,
          pageHeight - 10,
          { align: "center" }
        );
      }
    }).save();

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

