import type { DynamicContent } from 'pdfmake/interfaces'
import { COLORS, SIZES } from '../styles'

export function createResumeFooter(name: string): DynamicContent {
  return (currentPage, pageCount) => ({
    text: `${name} — page ${currentPage} of ${pageCount}`,
    alignment: 'center',
    fontSize: SIZES.footerFontSize,
    color: COLORS.footerText,
    margin: [0, 12, 0, 0],
  })
}
