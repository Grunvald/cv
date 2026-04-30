import type { Content } from 'pdfmake/interfaces'
import type { Experience, Project, Resume, Section } from '../../types/resume'
import { COLORS, LETTER_SPACING, SIZES } from '../styles'
import { sectionTitle } from './sectionTitle'

export const COMPANY_HEADER_HEADLINE_LEVEL = 10
export const PROJECT_HEADER_HEADLINE_LEVEL = 11

function companyHeader(experience: Experience): Content {
  const stack: Content[] = [
    {
      columns: [
        {
          stack: [
            {
              text: experience.company.toUpperCase(),
              fontSize: 14,
              bold: true,
              color: COLORS.nameDark,
              characterSpacing: LETTER_SPACING.company,
            },
            {
              text: experience.period,
              fontSize: SIZES.smallFontSize,
              color: COLORS.mutedText,
              margin: [0, 4, 0, 0],
            },
          ],
          width: '*',
        },
        {
          text: experience.role,
          fontSize: SIZES.bodyFontSize,
          bold: true,
          color: COLORS.nameDark,
          alignment: 'right',
          width: 'auto',
          margin: [12, 2, 0, 0],
        },
      ],
      columnGap: 12,
    },
  ]

  if (experience.description) {
    stack.push({
      text: experience.description,
      fontSize: SIZES.bodyFontSize,
      color: COLORS.bodyText,
      lineHeight: 1.4,
      margin: [0, 8, 0, 0],
    })
  }

  return {
    stack,
    headlineLevel: COMPANY_HEADER_HEADLINE_LEVEL,
    unbreakable: true,
    margin: [0, 0, 0, 12],
  }
}

function projectSection(section: Section): Content {
  return {
    stack: [
      {
        text: `${section.title}:`,
        fontSize: SIZES.bodyFontSize,
        bold: true,
        color: COLORS.nameDark,
        margin: [0, 0, 0, 4],
      },
      {
        ul: section.items.map((item) => ({
          text: item,
          fontSize: SIZES.bulletFontSize,
          color: COLORS.bodyText,
          lineHeight: 1.4,
        })),
      },
    ],
    unbreakable: true,
    margin: [0, 0, 0, 10],
  }
}

function projectBlock(project: Project): Content {
  const headerStack: Content[] = [
    {
      text: project.name,
      fontSize: SIZES.bodyFontSize,
      bold: true,
      color: COLORS.iconBadge,
    },
  ]
  if (project.description) {
    headerStack.push({
      text: project.description,
      fontSize: SIZES.bodyFontSize,
      color: COLORS.bodyText,
      lineHeight: 1.4,
      margin: [0, 6, 0, 0],
    })
  }

  const [firstSection, ...restSections] = project.sections

  // Glue project header to its first section: if they don't fit on the current
  // page together, pdfmake will move both to the next page.
  const headerWithFirstSection: Content = {
    stack: [
      { stack: headerStack, margin: [0, 0, 0, 8] },
      ...(firstSection ? [projectSection(firstSection)] : []),
    ],
    headlineLevel: PROJECT_HEADER_HEADLINE_LEVEL,
    unbreakable: true,
  }

  return {
    stack: [
      headerWithFirstSection,
      ...restSections.map(projectSection),
    ],
    margin: [0, 6, 0, 14],
  }
}

function experienceBlock(experience: Experience): Content {
  return {
    stack: [
      companyHeader(experience),
      ...experience.projects.map(projectBlock),
    ],
    margin: [0, 0, 0, 16],
  }
}

export function experienceSection(resume: Resume): Content {
  return {
    stack: [
      sectionTitle('Professional Experience'),
      ...resume.experiences.map(experienceBlock),
    ],
    margin: [0, 0, 0, SIZES.blockSpacing],
  }
}
