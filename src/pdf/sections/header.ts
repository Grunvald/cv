import type { Content, ContentTable } from 'pdfmake/interfaces'
import type { Contact, ResumeHeader } from '../../types/resume'
import { COLORS, LETTER_SPACING, SIZES } from '../styles'
import { contactIconSvg } from '../icons'

function contactRow(contact: Contact): Content {
  return {
    columns: [
      {
        svg: contactIconSvg(contact.type),
        width: SIZES.iconSize,
        height: SIZES.iconSize,
      },
      {
        text: contact.label,
        link: contact.href,
        color: COLORS.contactText,
        fontSize: SIZES.bodyFontSize,
        margin: [10, (SIZES.iconSize - SIZES.bodyFontSize) / 2 - 1, 0, 0],
      },
    ],
    columnGap: 0,
    margin: [0, SIZES.contactRowSpacing, 0, 0],
  }
}

export function headerSection(header: ResumeHeader, photoDataUrl: string): Content {
  const headline: Content = {
    stack: [
      {
        text: header.name,
        fontSize: SIZES.nameFontSize,
        bold: true,
        color: COLORS.nameDark,
        characterSpacing: LETTER_SPACING.name,
      },
      {
        text: header.title.toUpperCase(),
        fontSize: SIZES.titleFontSize,
        color: COLORS.titleMuted,
        characterSpacing: LETTER_SPACING.title,
        margin: [0, 6, 0, 16],
      },
      ...header.contacts.map(contactRow),
    ],
    margin: [SIZES.headerColumnGap, 0, 0, 0],
  }

  const innerColumns: Content = {
    columns: [
      {
        image: photoDataUrl,
        width: SIZES.photoWidth,
        height: SIZES.photoHeight,
      },
      headline,
    ],
    columnGap: 0,
  }

  const table: ContentTable = {
    table: {
      widths: ['*'],
      body: [
        [
          {
            stack: [innerColumns],
            margin: [
              SIZES.headerSidePadding,
              SIZES.headerVerticalPadding,
              SIZES.headerSidePadding,
              SIZES.headerVerticalPadding,
            ],
            border: [false, false, false, false],
            fillColor: COLORS.headerBg,
          },
        ],
      ],
    },
    layout: 'noBorders',
    // Cancel the page top margin so the banner sits flush with the page edge on page 1.
    margin: [0, -SIZES.pageMargins[1], 0, 0],
  }

  return table
}
