<design-context>
---
version: alpha
name: hh-job-design-analysis
description: "A high-density job marketplace with a white canvas, vivid blue application actions, black selection pills, mint opportunity signals, and compact rounded vacancy cards. Clear salary and employer hierarchy supports fast scanning while friendly flat illustrations soften onboarding, empty states, and career guidance."
colors: {primary: "#087EF5", on-primary: "#FFFFFF", primary-hover: "#2690F7", primary-focus: "#0066CE", ink: "#17181A", ink-muted: "#696D72", ink-subtle: "#9A9EA3", ink-tertiary: "#C7CACE", canvas: "#FFFFFF", surface-1: "#F7F8F9", surface-2: "#F0F3F5", surface-3: "#E5E9EC", surface-4: "#D8DEE2", hairline: "#E4E7E9", hairline-strong: "#C9CFD3", hairline-tertiary: "#B1B9BE", inverse-canvas: "#111214", inverse-surface-1: "#292B2E", inverse-surface-2: "#404348", inverse-ink: "#FFFFFF", brand-secure: "#087EF5", semantic-success: "#2DBA87", semantic-overlay: "#151719"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  vacancy-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px}
  filter-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "#E8FAF3", textColor: "#179D70", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

hh job is a dense employment marketplace that prioritizes search, salary, employer, requirements, and application status. Bright blue actions and mint opportunity cues organize an otherwise neutral interface.

**Key Characteristics:** white canvas, blue application CTA, black selected pills, mint status labels, rounded vacancy cards, dense filters, five-item navigation, and friendly flat illustrations for guidance.

## Colors

### Brand & Accent

Bright blue owns search links, primary application actions, focused fields, and informative CTAs. Black marks selected filters and active navigation.

### Surface

White dominates lists and detail. Pale gray groups filters, tags, utility cards, resume statistics, and secondary actions.

### Text

Near-black leads job title, salary, employer, and headings. Gray supports location, experience, schedule, dates, and supporting copy.

### Semantic

Mint marks employer online, live interest, and positive opportunity; blue means action; orange supports ratings; red is reserved for alerts.

## Typography

### Font Family

Use SF Pro Display for page and vacancy headings and SF Pro Text for dense job, company, resume, and application detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding or empty state |
| headline | 21px | 700 | Page or vacancy title |
| card-title | 16px | 600 | Job and salary |
| body | 13px | 400 | Employer and requirements |
| caption | 10px | 400 | Status and metadata |

### Principles

- Lead every result with role and salary when available.
- Keep employer, location, experience, and schedule in a stable order.
- Use compact type but preserve readable line spacing in vacancy detail.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic, tabular salaries, and crisp small labels.

## Layout

### Spacing System

Use a 4px base, 8–12px metadata gaps, 14–16px card padding, and 20–24px between result groups.

### Grid & Container

Home combines search, utility cards, recommendation controls, and a vertical vacancy feed. Filters and application choices use focused sheets or full pages.

### Whitespace Philosophy

Information density is useful, but each vacancy must retain a clear title-to-salary-to-employer-to-action path.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Search and detail |
| 1 | Pale chip or utility card | Filters and guidance |
| 2 | Bordered vacancy card | Search result |
| 3 | Sticky blue action | Apply or continue |

### Decorative Depth

Use subtle borders, pale tonal cards, flat career illustrations, and occasional editorial imagery. Avoid strong drop shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Small status |
| rounded-sm | 8px | Input and button |
| rounded-md | 12px | Utility card |
| rounded-lg | 16px | Vacancy card and sheet |
| rounded-full | full | Filter chip and icon state |

### Photography & Illustration Geometry

Use flat character illustrations inside onboarding or update cards and rectangular editorial imagery inside career articles. Keep job results text-led.

## Components

### Buttons

Primary application and continue actions use bright blue. Secondary actions use pale blue or white; black pills indicate selected filter state.

### Pricing Tabs

Currency, schedule, experience, response status, resume, and metro choices use rounded chips, segmented tabs, or list rows with unmistakable selection.

### Cards & Containers

Vacancy cards align interest signal, title, salary, employer, location, requirements, and action. Resume cards align visibility, statistics, and matching vacancies.

### Inputs & Forms

Search and profile forms use clear labels, blue focus, and strong validation. Native controls must inherit these colors, radii, type, and spacing.

### Status & Build Page

Keep viewing interest, employer online, application, invitation, chat, resume visibility, and profile completion near the relevant item.

### Navigation

Use five bottom destinations for Search, Favorites, Responses, Messages, and Profile, with black active emphasis.

### Footer

No footer; bottom navigation or the current application action owns the safe area.

## Do's and Don'ts

### Do

- Keep role, salary, employer, location, and action scannable.
- Use blue for meaningful application progress.
- Use illustration only for guidance, education, and empty states.

### Don't

- Don't over-decorate vacancy cards.
- Don't hide filters behind ambiguous icons alone.
- Don't style native controls as generic iOS when custom hh patterns surround them.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten vacancy metadata |
| Standard | 375–430px | Default job-search layout |
| Wide | 431px+ | Expand cards and filter sheets |

### Touch Targets

Search, filters, favorites, vacancy actions, tabs, resume choices, chat, and navigation remain at least 44px.

### Collapsing Strategy

Preserve role, salary, employer, location, application state, and main action; reduce utility cards and career content first.

### Image Behavior

Scale illustrations proportionally, crop editorial media deliberately, and never displace vacancy text with decorative imagery.

## Iteration Guide

Tune Home and Search first, then filters, vacancy detail, apply, responses, employer chat, favorites, resumes, and profile.

## Known Gaps

- Interview scheduling and rejected-application recovery were not fully sampled.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
