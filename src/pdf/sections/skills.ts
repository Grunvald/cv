import type { Content } from 'pdfmake/interfaces'
import type { Resume } from '../../types/resume'
import { COLORS, SIZES } from '../styles'
import { sectionTitle } from './sectionTitle'

function skillLine(line: string): Content {
  const separatorIndex = line.indexOf(':')

  if (separatorIndex === -1) {
    return {
      text: line,
      fontSize: SIZES.bodyFontSize,
      color: COLORS.bodyText,
      lineHeight: 1.45,
    }
  }

  return {
    text: [
      { text: line.slice(0, separatorIndex + 1), bold: true },
      line.slice(separatorIndex + 1),
    ],
    fontSize: SIZES.bodyFontSize,
    color: COLORS.bodyText,
    lineHeight: 1.45,
  }
}

export function skillsSection(resume: Resume): Content {
  return {
    stack: [
      sectionTitle('Skills'),
      ...resume.skills.split('\n').map((line) => skillLine(line)),
    ],
    margin: [0, 0, 0, SIZES.blockSpacing * 2],
  }
}
