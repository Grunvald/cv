import type { Content } from 'pdfmake/interfaces'
import type { Resume } from '../../types/resume'
import { COLORS, SIZES } from '../styles'
import { sectionTitle } from './sectionTitle'

export function skillsSection(resume: Resume): Content {
  return {
    stack: [
      sectionTitle('Skills'),
      {
        text: resume.skills,
        fontSize: SIZES.bodyFontSize,
        color: COLORS.bodyText,
        lineHeight: 1.45,
      },
    ],
    margin: [0, 0, 0, SIZES.blockSpacing * 2],
  }
}
