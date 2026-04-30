import { COLORS } from './styles'

const badge = (path: string): string => `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
  <rect x="0" y="0" width="42" height="42" rx="8" fill="${COLORS.iconBadge}"/>
  ${path}
</svg>`

export const phoneIconSvg = badge(
  `<path transform="translate(11 10)" fill="${COLORS.iconFill}" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.42-1.42c.27-.27.68-.35 1.03-.23 1.12.37 2.33.57 3.36.57.55 0 1 .45 1 1v3.01c0 .55-.45 1-1 1C10.62 22.31 1.69 13.38 1.69 2c0-.55.45-1 1-1H5.7c.55 0 1 .45 1 1 0 1.03.2 2.24.57 3.36.12.35.04.76-.23 1.03l-1.42 1.42z"/>`,
)

export const mailIconSvg = badge(
  `<path transform="translate(9 9)" fill="${COLORS.iconFill}" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>`,
)

export function contactIconSvg(type: 'phone' | 'email'): string {
  return type === 'phone' ? phoneIconSvg : mailIconSvg
}
