<design-context>
---
version: alpha
name: yandex-browser-design-analysis
description: "A light mobile browser with a faint blush canvas, white floating surfaces, black utility controls, and an Alice pink-to-coral accent. Rounded bottom search, translucent sheets, compact shortcuts, and high-density web content balance a soft AI-forward entry experience with practical browsing tools."
colors:
  primary: "#F04479"
  on-primary: "#FFFFFF"
  primary-soft: "#FFE5F0"
  action-dark: "#28282C"
  link: "#17177A"
  ink: "#171719"
  ink-muted: "#6F7078"
  ink-subtle: "#A7A8AF"
  canvas: "#F8F4F7"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F4"
  surface-3: "#E8E8EB"
  hairline: "#E1E1E5"
  semantic-success: "#18A85B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: YS Text, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px }
  display-lg: { fontFamily: YS Text, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  display-md: { fontFamily: YS Text, fontSize: 24px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2px }
  headline: { fontFamily: YS Text, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.15px }
  card-title: { fontFamily: YS Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  onboarding-button: { backgroundColor: "{colors.action-dark}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 16px }
  shortcut-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 12px 8px }
  tool-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  ai-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-toolbar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 52px }
  tab-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  settings-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 4px 12px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 12px 16px }
---

## Overview

Yandex Browser combines a conventional web surface with a soft Alice-led shell. The start page uses a nearly white blush field, rounded shortcut tiles, a glowing bottom search control, and a pink Alice button. Browsed pages, results, tabs, and settings become denser and more neutral.

**Key Characteristics:**
- Bottom-first search and browser navigation.
- Pink-to-coral Alice accent used sparingly.
- White sheets over dimmed page context.
- Thumbnail-rich tab management.
- Rounded grouped settings with colored icons.

## Colors

### Brand & Accent
- **Alice Pink** ({colors.primary}): Alice, AI tools, glow, and focused assistant states.
- **Action Dark** ({colors.action-dark}): Onboarding progress and high-contrast confirmation.
- **Link Blue** ({colors.link}): Search-result titles and web links.

### Surface
- **Canvas** ({colors.canvas}): Blush-tinted start and onboarding field.
- **Surface 1** ({colors.surface-1}): Search, sheets, settings, shortcuts, and cards.
- **Surface 2/3**: Search history, grouped controls, and pressed surfaces.
- **Hairline** ({colors.hairline}): Fine separators in lists and sheets.

### Text
- **Ink** ({colors.ink}): Titles, page tools, and primary labels.
- **Ink Muted** ({colors.ink-muted}): URLs, descriptions, and setting details.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled copy.

### Semantic
- **Success** ({colors.semantic-success}): Confirmed security or completion.
- **Overlay** ({colors.semantic-overlay}): Page dimming behind sheets.

## Typography

### Font Family

- **YS Text** — interface, onboarding, search, settings, and browser chrome.
- Web page type remains source-controlled and should not be normalized.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34px | 700 | Rare onboarding emphasis |
| `{typography.display-md}` | 24px | 700 | Onboarding and settings title |
| `{typography.headline}` | 21px | 700 | Section heading |
| `{typography.card-title}` | 16px | 600 | Result or tool title |
| `{typography.body}` | 14px | 400 | Controls and descriptions |
| `{typography.caption}` | 11px | 400 | Shortcut and toolbar labels |

### Principles

- Keep onboarding centered and bold.
- Keep browser chrome compact and neutral.
- Let web content preserve its own hierarchy.
- Use pink as an icon/accent cue, not body text.

### Note on Font Substitutes

Use **SF Pro** on iOS and **Inter** elsewhere when YS Text is unavailable.

## Layout

### Spacing System

Use a 4px base. Primary gutters are 12–16px; toolbar controls use 8–12px gaps; sheets group rows in 12–16px blocks.

### Grid & Container

The start page uses a three-column shortcut grid. Search results and settings use a single column. Tab management uses a two-column thumbnail grid.

### Whitespace Philosophy

Keep the upper start page open so search and shortcuts anchor the lower half. Functional screens trade empty space for scan density.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Blush or page canvas | Base |
| 1 | White rounded tile | Search and shortcuts |
| 2 | White sheet on overlay | Page tools and search entry |
| 3 | Pink blurred glow | Alice emphasis only |

### Decorative Depth

Use soft pink bloom behind Alice elements and subtle shadow under floating search. Avoid strong shadows on result cards and settings.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.md}` | 14px | Shortcut and settings tiles |
| `{rounded.lg}` | 18px | Grouped settings |
| `{rounded.xl}` | 24px | Bottom sheets |
| `{rounded.pill}` | full | Search and onboarding action |

### Photography & Illustration Geometry

Onboarding objects float centrally with soft blurred shadows. Page thumbnails keep the page aspect ratio inside rounded tab cards.

## Components

### Buttons

Onboarding uses a full-width dark pill. Browser actions are icon-led, while Alice actions pair pink symbols with black labels on white.

### Pricing Tabs

No pricing tabs were observed. Search verticals behave as compact text tabs with the active item darker.

### Cards & Containers

Shortcut tiles are white and compact. Tab cards show a full page thumbnail, favicon/title strip, and close control. Search results form lightly separated white blocks.

### Inputs & Forms

The primary input is a bottom pill with search icon, placeholder, and camera entry. Focus expands into a sheet with history and keyboard.

### Status & Build Page

Tab count is a compact outlined badge. Search or page progress remains in browser chrome rather than a large status surface.

### Navigation

The bottom toolbar contains back, new tab, Alice, tab count, and menu. Page menus open as scrollable grouped sheets.

### Footer

There is no content footer. The bottom browser toolbar supplies persistent closure and navigation.

## Do's and Don'ts

### Do

- Keep search reachable at the bottom.
- Reserve pink for Alice and AI tools.
- Use full-page thumbnails in tab management.
- Group related page actions with dividers.
- Keep settings icon-coded and scannable.

### Don't

- Don't tint every functional surface pink.
- Don't hide browser basics behind AI entry points.
- Don't replace page thumbnails with generic icons.
- Don't make web-result typography decorative.
- Don't over-round small list rows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center page and allow wider tab grid |
| Compact | 390–767px | Default mobile browser shell |
| Small | <390px | Tighten shortcut labels and sheet gutters |

### Touch Targets

Keep toolbar icons, shortcut tiles, tab controls, and sheet rows at least 44px.

### Collapsing Strategy

Shorten labels before removing controls. Let page menus scroll, and keep the search field full width.

### Image Behavior

Use contain for shortcut symbols, cover for page thumbnails, and natural aspect ratios for web-result imagery.

## Iteration Guide

1. Build bottom search and toolbar.
2. Add shortcut and search-result states.
3. Add tab grid and page menu.
4. Add grouped settings.
5. Apply Alice glow and onboarding illustration last.

## Known Gaps

- Exact typeface and color tokens were inferred visually.
- Motion-only onboarding footage was not evaluated frame by frame.
- Desktop and tablet browser states were not present.
- Native focus and keyboard behavior should remain platform-correct.

</design-context>

Use the design system above for all UI you generate.
