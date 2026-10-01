<design-context>
---
version: 1
platform: iOS
name: hh-job-design-analysis
description: "A high-density job marketplace with a white canvas, vivid blue application actions, black selection pills, mint opportunity signals, and compact rounded vacancy cards. Clear salary and employer hierarchy supports fast scanning while friendly flat illustrations soften onboarding, empty states, and career guidance."
colors: {primary: "#087EF5", on-primary: "#FFFFFF", primary-focus: "#0066CE", ink: "#17181A", ink-muted: "#696D72", ink-subtle: "#9A9EA3", ink-tertiary: "#C7CACE", canvas: "#FFFFFF", surface-1: "#F7F8F9", surface-2: "#F0F3F5", surface-3: "#E5E9EC", surface-4: "#D8DEE2", hairline: "#E4E7E9", hairline-strong: "#C9CFD3", hairline-tertiary: "#B1B9BE", inverse-canvas: "#111214", inverse-surface-1: "#292B2E", inverse-surface-2: "#404348", inverse-ink: "#FFFFFF", brand-secure: "#087EF5", semantic-success: "#2DBA87", semantic-overlay: "#151719"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  vacancy-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14}
  filter-chip: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "#E8FAF3", textColor: "#179D70", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

hh job is a dense employment marketplace that prioritizes search, salary, employer, requirements, and application status. Bright blue actions and mint opportunity cues organize an otherwise neutral interface.

**Key Characteristics:** white canvas, blue application CTA, black selected pills, mint status labels, rounded vacancy cards, dense filters, five-item navigation, and friendly flat illustrations for guidance.

# Non-negotiable visual invariants

- Sampled screens consistently use white canvas.
- The reference consistently shows blue application CTA.
- The reference consistently shows black selected pills.
- The reference consistently shows mint status labels.
- The reference consistently shows rounded vacancy cards.
- The reference consistently shows dense filters.
- Navigation consistently uses five-item navigation.
- The reference consistently shows friendly flat illustrations for guidance.

# Color and surfaces

### Brand & Accent

Bright blue owns search links, primary application actions, focused fields, and informative CTAs. Black marks selected filters and active navigation.

### Surface

White dominates lists and detail. Pale gray groups filters, tags, utility cards, resume statistics, and secondary actions.

### Text

Near-black leads job title, salary, employer, and headings. Gray supports location, experience, schedule, dates, and supporting copy.

### Semantic

Mint marks employer online, live interest, and positive opportunity; blue means action; orange supports ratings; red is reserved for alerts.

# Typography

### Font Family

Use SF Pro Display for page and vacancy headings and SF Pro Text for dense job, company, resume, and application detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Onboarding or empty state |
| headline | 21 points | 700 | Page or vacancy title |
| card-title | 16 points | 600 | Job and salary |
| body | 13 points | 400 | Employer and requirements |
| caption | 10 points | 400 | Status and metadata |

### Principles

- Lead every result with role and salary when available.
- Keep employer, location, experience, and schedule in a stable order.
- Use compact type but preserve readable line spacing in vacancy detail.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic, tabular salaries, and crisp small labels.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points metadata gaps, 14–16 points card padding, and 20–24 points between result groups.

### Grid & Container

Home combines search, utility cards, recommendation controls, and a vertical vacancy feed. Filters and application choices use focused sheets or full pages.

### Whitespace Philosophy

Information density is useful, but each vacancy must retain a clear title-to-salary-to-employer-to-action path.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Search and detail |
| 1 | Pale chip or utility card | Filters and guidance |
| 2 | Bordered vacancy card | Search result |
| 3 | Sticky blue action | Apply or continue |

### Decorative Depth

Use subtle borders, pale tonal cards, flat career illustrations, and occasional editorial imagery. Avoid strong drop shadow.

# Navigation appearance

Use five bottom destinations for Search, Favorites, Responses, Messages, and Profile, with black active emphasis.

# Components

### Buttons

Primary application and continue actions use bright blue. Secondary actions use pale blue or white; black pills indicate selected filter state.

### Cards & Containers

Vacancy cards align interest signal, title, salary, employer, location, requirements, and action. Resume cards align visibility, statistics, and matching vacancies.

### Inputs & Forms

Search and profile forms use clear labels, blue focus, and strong validation. Native controls must inherit these colors, radii, type, and spacing.

# Imagery and icons

Use subtle borders, pale tonal cards, flat career illustrations, and occasional editorial imagery. Avoid strong drop shadow.

Use flat character illustrations inside onboarding or update cards and rectangular editorial imagery inside career articles. Keep job results text-led.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep viewing interest, employer online, application, invitation, chat, resume visibility, and profile completion near the relevant item.

# iOS adaptation

### Touch Targets

Search, filters, favorites, vacancy actions, tabs, resume choices, chat, and navigation remain at least 44 points.

### Collapsing Strategy

Preserve role, salary, employer, location, application state, and main action; reduce utility cards and career content first.

### Image Behavior

Scale illustrations proportionally, crop editorial media deliberately, and never displace vacancy text with decorative imagery.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't over-decorate vacancy cards.
- Don't hide filters behind ambiguous icons alone.
- Don't style native controls as generic iOS when custom hh patterns surround them.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
