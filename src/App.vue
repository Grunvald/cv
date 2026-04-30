<template>
  <main class="page">
    <div class="toolbar">
      <div class="toolbar__group">
        <button
          v-for="(_, key) in resumeMap"
          :key="key"
          type="button"
          class="lang-button"
          :class="{ 'lang-button--active': key === lang }"
          @click="lang = key"
        >
          {{ langLabel[key] }}
        </button>
      </div>
      <div class="toolbar__group toolbar__group--right">
        <span v-if="preview.isBuilding.value" class="spinner" aria-label="Building PDF" />
        <button
          v-else
          type="button"
          class="download-button"
          :disabled="!preview.blobUrl.value || preview.error.value !== null"
          @click="onDownload"
        >
          Download
        </button>
      </div>
    </div>
    <p v-if="preview.error.value" class="error-banner">{{ preview.error.value }}</p>
    <iframe
      v-if="preview.blobUrl.value"
      class="preview"
      :src="preview.blobUrl.value"
      title="Resume preview"
    />
    <div v-else class="preview preview--placeholder" />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Resume, ResumeLang } from './types/resume'
import { resume_english, resume_russian, resume_spanish } from './data'
import { usePdfPreview } from './composables/usePdfPreview'

const resumeMap: Record<ResumeLang, Resume> = {
  english: resume_english,
  russian: resume_russian,
  spanish: resume_spanish,
}

const langLabel: Record<ResumeLang, string> = {
  english: 'English',
  russian: 'Russian',
  spanish: 'Spanish',
}

const lang = ref<ResumeLang>('english')
const resume = computed<Resume>(() => resumeMap[lang.value])

const preview = usePdfPreview()

watch(lang, () => {
  void preview.rebuild(resume.value)
})

onMounted(() => {
  void preview.rebuild(resume.value)
})

onUnmounted(() => {
  preview.dispose()
})

const onDownload = (): void => {
  preview.download(`vasili-sholukh-resume-${lang.value}.pdf`)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #eef2f7;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: #ffffff;
  border-bottom: 1px solid #e2e6ef;
  box-shadow: 0 4px 12px rgba(16, 27, 50, 0.04);
  position: sticky;
  top: 0;
  z-index: 1;
}

.toolbar__group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar__group--right {
  min-width: 152px;
  justify-content: flex-end;
}

.lang-button {
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid #d6dde9;
  background: #ffffff;
  color: #1f2a3d;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.lang-button:hover:not(:disabled) {
  border-color: #1f2a3d;
}

.lang-button--active {
  background: #1f2a3d;
  border-color: #1f2a3d;
  color: #ffffff;
}

.lang-button:disabled {
  opacity: 0.7;
  cursor: default;
}

.spinner {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2.5px solid #d6dde9;
  border-top-color: #1f2a3d;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-banner {
  margin: 0;
  padding: 10px 24px;
  background: #fdecea;
  color: #8a2a1f;
  font-size: 13px;
  border-bottom: 1px solid #f3c1bb;
}

.preview {
  flex: 1;
  width: 100%;
  border: 0;
  background: #ffffff;
  min-height: calc(100vh - 80px);
}

.preview--placeholder {
  background: #f6f8fc;
}
</style>
