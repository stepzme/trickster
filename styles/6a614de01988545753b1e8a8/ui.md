<design-context>
---
version: alpha
name: Arc-Search-design-analysis
description: "A soft spatial browser interface built from luminous lavender-pink backgrounds, frosted white page cards, cobalt AI headings, and a thumb-centered bottom dock. Search, tabs, and page tools appear as layered sheets while live web content remains recognizable behind them."
colors:
  primary: "#3438F2"
  on-primary: "#FFFFFF"
  primary-hover: "#2529D8"
  primary-soft: "#E8E8FF"
  accent-purple: "#8A45E6"
  accent-pink: "#F2D9EE"
  ink: "#17171B"
  ink-muted: "#74747B"
  ink-subtle: "#AAABB2"
  canvas: "#F0EFF8"
  surface-1: "#FFFFFF"
  surface-2: "#E6E6EA"
  hairline: "#DADAE0"
  semantic-success: "#31C46D"
  semantic-danger: "#F04457"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 30px, xxl: 38px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  search-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  tab-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px }
  source-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8px }
  page-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 12px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", height: 48px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 10px 14px }
---

## Overview

Arc Search treats browser pages as physical cards floating in a soft luminous field. Cobalt emphasizes generated answers, while source chips and web previews maintain traceability.

**Key Characteristics:**
- Lavender-pink atmospheric canvas.
- Frosted white cards and bottom sheets.
- Cobalt AI headings and primary actions.
- Central plus/search action.
- Layered spatial tab overview.
- Source-backed Browse for Me summaries.

## Colors

### Brand & Accent
- **Cobalt** ({colors.primary}): AI headings, primary action, and selected emphasis.
- **Purple** ({colors.accent-purple}): Assistant and brand support.
- **Pink** ({colors.accent-pink}): Atmospheric gradient support.

### Surface
- **Canvas** ({colors.canvas}): Browser spatial background.
- **Surface 1** ({colors.surface-1}): Page cards, search, menus, and settings.
- **Surface 2** ({colors.surface-2}): Disabled or nested controls.
- **Hairline** ({colors.hairline}): Card and settings separation.

### Text
- **Ink** ({colors.ink}): Browser content, settings, and actions.
- **Ink Muted** ({colors.ink-muted}): Source metadata and secondary copy.
- **Ink Subtle** ({colors.ink-subtle}): Skeleton and disabled content.

### Semantic
- **Success** ({colors.semantic-success}): Enabled settings and completion.
- **Danger** ({colors.semantic-danger}): Data clearing and destructive state.
- **Overlay** ({colors.semantic-overlay}): Page dimming behind sheets.

## Typography

### Font Family

- **System Sans** — browser, AI summary, menus, onboarding, and settings.
- **System Mono** — URLs or technical values when needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 750 | Onboarding statement |
| `{typography.display-md}` | 26px | 700 | Generated result heading |
| `{typography.headline}` | 22px | 700 | Settings or page heading |
| `{typography.card-title}` | 15px | 600 | Source or tab title |
| `{typography.body}` | 14px | 400 | Summary and page tools |
| `{typography.caption}` | 10px | 400 | Sources and settings metadata |
| `{typography.button}` | 15px | 600 | Primary actions |

### Principles

- Make generated headings clear but not larger than page identity.
- Keep long summaries readable with generous line height.
- Use source names and domains at compact sizes.
- Preserve native page typography inside web content.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Helvetica Neue**.

## Layout

### Spacing System

Use a 4px base. Page gutters are 12px, generated sections 16px apart, and bottom sheets use 16px padding.

### Grid & Container

Browser content is one column. Browse for Me adds horizontal source chips and full-width generated sections. Tab overview layers narrow page cards with spatial offsets.

### Whitespace Philosophy

Keep generous space around generated sections and dock controls. Let live web pages retain their own density inside the card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Luminous canvas | Browser environment |
| 1 | White page card | Active tab |
| 2 | Layered card stack | Tab overview |
| 3 | Frosted bottom sheet | Search and page menu |

### Decorative Depth

Use subtle blur, colored glow, and offset card stacks. Avoid heavy material shadows or decorative imagery.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Source chips and settings icons |
| `{rounded.sm}` | 12px | Search field and controls |
| `{rounded.md}` | 16px | Tab cards |
| `{rounded.xl}` | 30px | Bottom sheets and page silhouette |
| `{rounded.pill}` | full | Dock and URL field |

### Photography & Illustration Geometry

Web images follow page content. Onboarding uses framed browser mockups rather than a separate illustration system. App icons remain small and square-rounded.

## Components

### Buttons

Primary onboarding actions use cobalt. Browser dock actions use neutral translucent circles. Destructive settings remain text-led and explicit.

### Pricing Tabs

No pricing tabs were observed. Search mode and page display choices use compact segmented or grouped controls.

### Cards & Containers

Tab cards show recognizable page previews. Source chips combine favicon, title, and domain. Generated summaries use emoji-led text sections without heavy containers.

### Inputs & Forms

Search opens as a rounded bottom sheet with voice and mode controls. URL editing remains inside the page menu field.

### Status & Build Page

Skeleton layouts show source scanning and page structure before generation. Scanned-page count and source list remain visible after completion.

### Navigation

The bottom dock exposes tab overview, central new search, and page/menu control. Browser navigation moves into the page sheet.

### Footer

The thumb-centered dock is the footer. Search and page menu temporarily expand upward while preserving the active page behind them.

## Do's and Don'ts

### Do

- Keep search thumb-reachable.
- Show sources for generated summaries.
- Preserve page context behind sheets.
- Use spatial tabs for recognition.
- Group settings by browser scope.

### Don't

- Don't present AI output without source access.
- Don't cover the whole page for simple tools.
- Don't flatten tabs into indistinguishable rows.
- Don't overuse gradient inside web content.
- Don't hide native page access.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center page card and widen summary |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Stack source chips and reduce tab offsets |

### Touch Targets

Maintain 44px for dock actions, menu tiles, settings rows, tab cards, and search controls.

### Collapsing Strategy

Keep one-column browsing. Reduce tab stack offsets before shrinking previews; wrap source chips before truncating source identity.

### Image Behavior

Respect live-page media. Browser mockups and previews use contain; tab snapshots crop only at the viewport edge.

## Iteration Guide

1. Establish page card and bottom dock.
2. Build search sheet and normal browsing.
3. Add source-backed Browse for Me.
4. Implement spatial tabs and page menu.
5. Add settings and luminous atmosphere last.

## Known Gaps

- Exact tokens and font names were inferred visually.
- The 35-flow inventory was complete and all top-level flows were inspected.
- Many preview transitions were video-only; motion was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
