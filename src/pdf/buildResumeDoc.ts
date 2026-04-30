import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces'
import type { Resume } from '../types/resume'
import { SIZES } from './styles'
import { headerSection } from './sections/header'
import { summarySection } from './sections/summary'
import { skillsSection } from './sections/skills'
import {
  COMPANY_HEADER_HEADLINE_LEVEL,
  PROJECT_HEADER_HEADLINE_LEVEL,
  experienceSection,
} from './sections/experience'
import { languagesSection } from './sections/languages'
import { resumeFooter } from './sections/footer'

export interface ResumeDocAssets {
  photoDataUrl: string
}

export function buildResumeDoc(resume: Resume, assets: ResumeDocAssets): TDocumentDefinitions {
  const body: Content = {
    stack: [
      summarySection(resume),
      skillsSection(resume),
      experienceSection(resume),
      languagesSection(resume),
    ],
    margin: [
      SIZES.contentSidePadding,
      SIZES.contentTopPadding,
      SIZES.contentSidePadding,
      SIZES.contentBottomPadding,
    ],
  }

  return {
    pageSize: 'A4',
    pageMargins: SIZES.pageMargins,
    defaultStyle: { font: 'Roboto' },
    content: [
      headerSection(resume.header, assets.photoDataUrl),
      body,
    ],
    footer: resumeFooter,
    pageBreakBefore: (currentNode, nodeQueries) => {
      const level = currentNode.headlineLevel
      if (level !== COMPANY_HEADER_HEADLINE_LEVEL && level !== PROJECT_HEADER_HEADLINE_LEVEL) {
        return false
      }
      return nodeQueries.getFollowingNodesOnPage().length === 0
    },
  }
}
