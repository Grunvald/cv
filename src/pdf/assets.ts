import { COLORS, SIZES } from './styles'

const photoCache = new Map<string, Promise<string>>()

async function fetchAsDataUrl(src: string): Promise<string> {
  const response = await fetch(src)
  if (!response.ok) {
    throw new Error(`Failed to fetch photo (${response.status} ${response.statusText})`)
  }
  const blob = await response.blob()
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result === 'string') {
        resolve(result)
      } else {
        reject(new Error('FileReader returned non-string result'))
      }
    }
    reader.onerror = () => reject(reader.error ?? new Error('FileReader failed'))
    reader.readAsDataURL(blob)
  })
}

function loadImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Image decoding failed'))
    img.src = dataUrl
  })
}

function roundedJpegFromImage(img: HTMLImageElement): string {
  const targetWidth = SIZES.photoWidth * 2
  const targetHeight = SIZES.photoHeight * 2
  const radius = SIZES.photoCornerRadius * 2

  const canvas = document.createElement('canvas')
  canvas.width = targetWidth
  canvas.height = targetHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D context unavailable')

  // Match the header background so the (JPEG-opaque) corners outside the
  // rounded clip blend in instead of showing as white wedges.
  ctx.fillStyle = COLORS.headerBg
  ctx.fillRect(0, 0, targetWidth, targetHeight)

  ctx.beginPath()
  const r = Math.min(radius, targetWidth / 2, targetHeight / 2)
  ctx.moveTo(r, 0)
  ctx.lineTo(targetWidth - r, 0)
  ctx.quadraticCurveTo(targetWidth, 0, targetWidth, r)
  ctx.lineTo(targetWidth, targetHeight - r)
  ctx.quadraticCurveTo(targetWidth, targetHeight, targetWidth - r, targetHeight)
  ctx.lineTo(r, targetHeight)
  ctx.quadraticCurveTo(0, targetHeight, 0, targetHeight - r)
  ctx.lineTo(0, r)
  ctx.quadraticCurveTo(0, 0, r, 0)
  ctx.closePath()
  ctx.clip()

  // Cover-fit the source image onto the rounded clip.
  const srcRatio = img.width / img.height
  const dstRatio = targetWidth / targetHeight
  let drawW: number
  let drawH: number
  if (srcRatio > dstRatio) {
    drawH = targetHeight
    drawW = drawH * srcRatio
  } else {
    drawW = targetWidth
    drawH = drawW / srcRatio
  }
  const dx = (targetWidth - drawW) / 2
  const dy = (targetHeight - drawH) / 2
  ctx.drawImage(img, dx, dy, drawW, drawH)

  return canvas.toDataURL('image/jpeg', 0.92)
}

export function loadPhotoDataUrl(src: string): Promise<string> {
  const cached = photoCache.get(src)
  if (cached) return cached

  const promise = (async () => {
    const rawDataUrl = await fetchAsDataUrl(src)
    const img = await loadImage(rawDataUrl)
    return roundedJpegFromImage(img)
  })()

  photoCache.set(src, promise)
  promise.catch(() => photoCache.delete(src))
  return promise
}
