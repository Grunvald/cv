import type { Content } from 'pdfmake/interfaces'
import type { Resume } from '../../types/resume'
import { COLORS, SIZES } from '../styles'
import { sectionTitle } from './sectionTitle'

export function summarySection(resume: Resume): Content {
  return {
    stack: [
      sectionTitle('Summary'),
      {
        text: resume.summary,
        fontSize: SIZES.bodyFontSize,
        color: COLORS.bodyText,
        lineHeight: 1.45,
      },
    ],
    margin: [0, 0, 0, SIZES.blockSpacing * 2],
  }
}
