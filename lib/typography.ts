/**
 * Typography System
 * Professional font architecture with Saans, Inter, SFMono, and Honk Sans
 * 
 * @architecture
 * - Saans SemiBold/Medium: Headings and primary CTAs
 * - Inter Variable: Body text and secondary buttons
 * - SFMono: Code and technical elements
 * - Honk Sans: Decorative accents (use sparingly)
 */

export const Fonts = {
  // Saans font family (for titles and headings)
  Saans: {
    medium: 'var(--font-heading)',
    semiBold: 'var(--font-heading)',
  },
  // Inter font family (for body text and buttons)
  Inter: {
    regular: 'var(--font-body)',
    medium: 'var(--font-body)',
    semiBold: 'var(--font-body)',
  },
  // SFMono font family (for code)
  Mono: {
    regular: 'var(--font-mono)',
  },
  // Honk Sans font family (decorative - use sparingly!)
  Decorative: {
    medium: 'var(--font-decorative)',
  },
} as const;

export type FontFamily =
  | typeof Fonts.Saans[keyof typeof Fonts.Saans]
  | typeof Fonts.Inter[keyof typeof Fonts.Inter]
  | typeof Fonts.Mono[keyof typeof Fonts.Mono]
  | typeof Fonts.Decorative[keyof typeof Fonts.Decorative];

// Typography system constants - Using CSS variables for flexibility
export const Typography = {
  // H1 - Main Title (Saans SemiBold)
  h1: {
    fontFamily: Fonts.Saans.semiBold,
    fontSize: 'var(--fs-h1)',
    lineHeight: 'var(--lh-h1)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-tight)',
  },

  // H2 - Section Title (Saans SemiBold)
  h2: {
    fontFamily: Fonts.Saans.semiBold,
    fontSize: 'var(--fs-h2)',
    lineHeight: 'var(--lh-h2)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-tight)',
  },

  // H3 - Subsection Title (Saans Medium)
  h3: {
    fontFamily: Fonts.Saans.medium,
    fontSize: 'var(--fs-h3)',
    lineHeight: 'var(--lh-h3)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-normal)',
  },

  // H4 - Card Title (Saans Medium)
  h4: {
    fontFamily: Fonts.Saans.medium,
    fontSize: 'var(--fs-h4)',
    lineHeight: 'var(--lh-h4)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-normal)',
  },

  // H5 - Small Title (Saans Medium)
  h5: {
    fontFamily: Fonts.Saans.medium,
    fontSize: 'var(--fs-h5)',
    lineHeight: 'var(--lh-h5)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-normal)',
  },

  // H6 - Tiny Title (Saans Medium)
  h6: {
    fontFamily: Fonts.Saans.medium,
    fontSize: 'var(--fs-h6)',
    lineHeight: 'var(--lh-h6)',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-normal)',
  },

  // Body text styles (Inter Variable)
  body: {
    fontFamily: Fonts.Inter.regular,
    fontSize: 'var(--fs-body)',
    lineHeight: 'var(--lh-body)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-normal)',
  },
  bodyLarge: {
    fontFamily: Fonts.Inter.regular,
    fontSize: 'var(--fs-body-lg)',
    lineHeight: 'var(--lh-body)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-normal)',
  },
  bodySmall: {
    fontFamily: Fonts.Inter.regular,
    fontSize: 'var(--fs-body-sm)',
    lineHeight: 'var(--lh-body)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-normal)',
  },

  // Caption (Inter Variable)
  caption: {
    fontFamily: Fonts.Inter.regular,
    fontSize: 'var(--fs-caption)',
    lineHeight: 'var(--lh-tight)',
    fontWeight: 'var(--fw-regular)',
    letterSpacing: 'var(--ls-wide)',
  },

  // Button styles
  buttonPrimary: {
    fontFamily: Fonts.Saans.medium,
    fontSize: 'var(--fs-body)',
    lineHeight: '1',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-wide)',
  },
  buttonSecondary: {
    fontFamily: Fonts.Inter.medium,
    fontSize: 'var(--fs-body)',
    lineHeight: '1',
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-normal)',
  },

  // Code (SFMono)
  code: {
    fontFamily: Fonts.Mono.regular,
    fontSize: '0.9em',
    fontWeight: 'var(--fw-regular)',
  },

  // Decorative (Honk Sans - use sparingly!)
  decorative: {
    fontFamily: Fonts.Decorative.medium,
    fontWeight: 'var(--fw-medium)',
    letterSpacing: 'var(--ls-wide)',
  },
} as const;

// Tailwind CSS utility classes for typography
export const TypographyClasses = {
  // Headings (Saans)
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',

  // Body text (Inter)
  body: 'text-body',
  bodyLarge: 'text-body-lg',
  bodySmall: 'text-body-sm',
  caption: 'text-caption',

  // Buttons
  buttonPrimary: 'btn-primary',
  buttonSecondary: 'btn-secondary',
  buttonLarge: 'btn-large',
  buttonSmall: 'btn-small',

  // Font families
  fontHeading: 'font-heading',
  fontBody: 'font-body',
  fontMono: 'font-mono',
  fontDecorative: 'font-decorative',

  // Font weights
  weightRegular: 'fw-regular',
  weightMedium: 'fw-medium',
  weightSemibold: 'fw-semibold',
  weightBold: 'fw-bold',

  // Letter spacing
  trackingTight: 'tracking-tight',
  trackingNormal: 'tracking-normal',
  trackingWide: 'tracking-wide',
  trackingWider: 'tracking-wider',

  // Line heights
  leadingTight: 'leading-tight',
  leadingNormal: 'leading-normal',
  leadingRelaxed: 'leading-relaxed',

  // Decorative (use sparingly!)
  decorative: 'text-decorative',
  accent: 'text-accent',
} as const;

