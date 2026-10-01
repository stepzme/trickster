<design-context>
---
version: 1
platform: iOS
name: Arc-Search-design-analysis
description: "A soft spatial browser interface built from luminous lavender-pink backgrounds, frosted white page cards, cobalt AI headings, and a thumb-centered bottom dock. Search, tabs, and page tools appear as layered sheets while live web content remains recognizable behind them."
colors:
  primary: "#3438F2"
  on-primary: "#FFFFFF"
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
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.50, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 22, xl: 30, xxl: 38, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  search-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  tab-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10 }
  source-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8 }
  page-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 12 }
---

# Overview

Arc Search treats browser pages as physical cards floating in a soft luminous field. Cobalt emphasizes generated answers, while source chips and web previews maintain traceability.

**Key Characteristics:**
- Lavender-pink atmospheric canvas.
- Frosted white cards and bottom sheets.
- Cobalt AI headings and primary actions.
- Central plus/search action.
- Layered spatial tab overview.
- Source-backed Browse for Me summaries.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Lavender-pink atmospheric canvas.
- The reviewed screens show this treatment: Frosted white cards and bottom sheets.
- The reviewed screens show this treatment: Cobalt AI headings and primary actions.
- The reviewed screens show this treatment: Central plus/search action.
- The reviewed screens show this treatment: Layered spatial tab overview.
- The reviewed screens show this treatment: Source-backed Browse for Me summaries.

# Color and surfaces

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

# Typography

### Font Family

- **System Sans** — browser, AI summary, menus, onboarding, and settings.
- **System Mono** — URLs or technical values when needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40pt | 750 | Onboarding statement |
| `{typography.display-md}` | 26pt | 700 | Generated result heading |
| `{typography.headline}` | 22pt | 700 | Settings or page heading |
| `{typography.card-title}` | 15pt | 600 | Source or tab title |
| `{typography.body}` | 14pt | 400 | Summary and page tools |
| `{typography.caption}` | 10pt | 400 | Sources and settings metadata |
| `{typography.button}` | 15pt | 600 | Primary actions |

### Principles

- Make generated headings clear but not larger than page identity.
- Keep long summaries readable with generous line height.
- Use source names and domains at compact sizes.
- Preserve native page typography inside web content.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Helvetica Neue**.

# Screen composition

### Spacing System

Use a 4pt base. Page gutters are 12pt, generated sections 16pt apart, and bottom sheets use 16pt padding.

### Grid & Container

Browser content is one column. Browse for Me adds horizontal source chips and full-width generated sections. Tab overview layers narrow page cards with spatial offsets.

### Whitespace Philosophy

Keep generous space around generated sections and dock controls. Let live web pages retain their own density inside the card.

# Navigation appearance

The bottom dock exposes tab overview, central new search, and page/menu control. Browser navigation moves into the page sheet.

# Components

### Buttons

Primary onboarding actions use cobalt. Browser dock actions use neutral translucent circles. Destructive settings remain text-led and explicit.

### Cards & Containers

Tab cards show recognizable page previews. Source chips combine favicon, title, and domain. Generated summaries use emoji-led text sections without heavy containers.

### Inputs & Forms

Search opens as a rounded bottom sheet with voice and mode controls. URL editing remains inside the page menu field.

### Status & Build Page

Skeleton layouts show source scanning and page structure before generation. Scanned-page count and source list remain visible after completion.

### Navigation

The bottom dock exposes tab overview, central new search, and page/menu control. Browser navigation moves into the page sheet.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Luminous canvas | Browser environment |
| 1 | White page card | Active tab |
| 2 | Layered card stack | Tab overview |
| 3 | Frosted bottom sheet | Search and page menu |

### Decorative Depth

Use subtle blur, colored glow, and offset card stacks. Avoid heavy material shadows or decorative imagery.

# States

Skeleton layouts show source scanning and page structure before generation. Scanned-page count and source list remain visible after completion.

# iOS adaptation

| Wide | 768pt+ | Center page card and widen summary |
| Small | <390pt | Stack source chips and reduce tab offsets |

### Touch Targets

Maintain 44pt for dock actions, menu tiles, settings rows, tab cards, and search controls.

### Collapsing Strategy

Keep one-column browsing. Reduce tab stack offsets before shrinking previews; wrap source chips before truncating source identity.

### Image Behavior

Respect live-page media. Browser mockups and previews use contain; tab snapshots crop only at the viewport edge.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
