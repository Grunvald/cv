import type { DynamicContent } from 'pdfmake/interfaces'
import { COLORS, SIZES } from '../styles'

export const resumeFooter: DynamicContent = (currentPage, pageCount) => ({
  text: `Vasili Sholukh — page ${currentPage} of ${pageCount}`,
  alignment: 'center',
  fontSize: SIZES.footerFontSize,
  color: COLORS.footerText,
  margin: [0, 12, 0, 0],
})
