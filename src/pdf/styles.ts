export const COLORS = {
  headerBg: '#e6ebf3',
  nameDark: '#1a2538',
  titleMuted: '#4c576d',
  sectionTitle: '#1c2535',
  bodyText: '#3a4357',
  mutedText: '#60708a',
  divider: '#e2e6ef',
  iconBadge: '#1f2a3d',
  iconFill: '#ffffff',
  contactText: '#1f2a3d',
  pageBg: '#ffffff',
  footerText: '#8a94a8',
} as const

export const SIZES = {
  // Top margin is non-zero so pages 2+ get breathing room equal to side padding.
  // Page-1 banner cancels it via a negative top margin — see buildResumeDoc.ts.
  pageMargins: [0, 52, 0, 36] as [number, number, number, number],
  contentSidePadding: 52,
  contentTopPadding: 28,
  contentBottomPadding: 36,
  headerSidePadding: 52,
  headerVerticalPadding: 36,
  headerColumnGap: 28,
  nameFontSize: 26,
  titleFontSize: 12,
  sectionTitleFontSize: 12,
  bodyFontSize: 10.5,
  bulletFontSize: 10.5,
  smallFontSize: 9.5,
  footerFontSize: 8,
  photoWidth: 130,
  photoHeight: 155,
  photoCornerRadius: 12,
  iconSize: 20,
  contactRowSpacing: 6,
  sectionTitleSpacing: 10,
  blockSpacing: 14,
} as const

export const LETTER_SPACING = {
  name: 3,
  title: 1.6,
  sectionTitle: 2.4,
  company: 1.4,
} as const
