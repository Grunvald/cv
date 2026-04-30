import { ref, type Ref } from 'vue'
import type * as PdfMake from 'pdfmake/build/pdfmake'
import type { Resume } from '../types/resume'
import { buildResumeDoc } from '../pdf/buildResumeDoc'
import { loadPhotoDataUrl } from '../pdf/assets'

type PdfMakeModule = typeof PdfMake

interface UsePdfPreview {
  blobUrl: Ref<string | null>
  isBuilding: Ref<boolean>
  error: Ref<string | null>
  rebuild: (resume: Resume) => Promise<void>
  download: (filename: string) => void
  dispose: () => void
}

export function usePdfPreview(): UsePdfPreview {
  const blobUrl = ref<string | null>(null)
  const isBuilding = ref(false)
  const error = ref<string | null>(null)

  let pdfMake: PdfMakeModule | null = null
  let vfsRegistered = false
  let buildToken = 0

  async function ensurePdfmake(): Promise<PdfMakeModule> {
    if (pdfMake && vfsRegistered) return pdfMake

    const [pdfmakeMod, vfsMod] = await Promise.all([
      import('pdfmake/build/pdfmake'),
      import('pdfmake/build/vfs_fonts'),
    ])
    const resolved = ((pdfmakeMod as unknown as { default?: PdfMakeModule }).default
      ?? (pdfmakeMod as unknown as PdfMakeModule))
    const vfs = ((vfsMod as unknown as { default?: Record<string, string> }).default
      ?? (vfsMod as unknown as Record<string, string>))

    if (typeof resolved.addVirtualFileSystem === 'function') {
      resolved.addVirtualFileSystem(vfs)
    } else {
      const legacy = resolved as unknown as { vfs?: Record<string, string> }
      legacy.vfs = vfs
    }

    pdfMake = resolved
    vfsRegistered = true
    return resolved
  }

  function revokeCurrent(): void {
    if (blobUrl.value) {
      URL.revokeObjectURL(blobUrl.value)
      blobUrl.value = null
    }
  }

  async function rebuild(resume: Resume): Promise<void> {
    const token = ++buildToken
    isBuilding.value = true
    error.value = null
    try {
      const [pdfmake, photoDataUrl] = await Promise.all([
        ensurePdfmake(),
        loadPhotoDataUrl(resume.header.photo),
      ])
      if (token !== buildToken) return

      const doc = buildResumeDoc(resume, { photoDataUrl })
      const blob = await pdfmake.createPdf(doc).getBlob()
      if (token !== buildToken) return

      const nextUrl = URL.createObjectURL(blob)
      revokeCurrent()
      blobUrl.value = nextUrl
    } catch (err) {
      if (token !== buildToken) return
      console.error('PDF generation failed', err)
      error.value = 'Failed to generate PDF, see console for details'
    } finally {
      if (token === buildToken) {
        isBuilding.value = false
      }
    }
  }

  function download(filename: string): void {
    if (!blobUrl.value) return
    const anchor = document.createElement('a')
    anchor.href = blobUrl.value
    anchor.download = filename
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
  }

  function dispose(): void {
    buildToken++
    revokeCurrent()
  }

  return { blobUrl, isBuilding, error, rebuild, download, dispose }
}
