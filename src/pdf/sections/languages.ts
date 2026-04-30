import type { Content } from 'pdfmake/interfaces'
import type { Resume } from '../../types/resume'
import { COLORS, SIZES } from '../styles'
import { sectionTitle } from './sectionTitle'

export function languagesSection(resume: Resume): Content {
  const rows = resume.languages.map((language) => [
    {
      text: language.name,
      fontSize: SIZES.bodyFontSize,
      bold: true,
      color: COLORS.iconBadge,
    },
    {
      text: language.level,
      fontSize: SIZES.bodyFontSize,
      color: COLORS.bodyText,
      alignment: 'right' as const,
    },
  ])

  return {
    stack: [
      sectionTitle('Languages'),
      {
        table: {
          widths: ['*', 'auto'],
          body: rows,
        },
        layout: 'noBorders',
      },
    ],
    margin: [0, 0, 0, SIZES.blockSpacing],
  }
}
