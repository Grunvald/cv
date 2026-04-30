import type { Content } from 'pdfmake/interfaces'
import { COLORS, LETTER_SPACING, SIZES } from '../styles'

export function sectionTitle(label: string): Content {
  return {
    stack: [
      {
        text: label.toUpperCase(),
        fontSize: SIZES.sectionTitleFontSize,
        bold: true,
        color: COLORS.sectionTitle,
        characterSpacing: LETTER_SPACING.sectionTitle,
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 6,
            x2: 491,
            y2: 6,
            lineWidth: 0.6,
            lineColor: COLORS.divider,
          },
        ],
      },
    ],
    margin: [0, 0, 0, SIZES.sectionTitleSpacing],
  }
}
