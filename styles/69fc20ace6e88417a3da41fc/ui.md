<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7 }
  display-lg: { fontFamily: YS Text, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  display-md: { fontFamily: YS Text, fontSize: 24, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2 }
  headline: { fontFamily: YS Text, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.15 }
  card-title: { fontFamily: YS Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  onboarding-button: { backgroundColor: "{colors.action-dark}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 16]}
  shortcut-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: [12, 8]}
  tool-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  ai-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-toolbar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 52 }
  tab-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0 }
  settings-group: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [4, 12]}
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [12, 16]}
---

# Overview

Yandex Browser combines a conventional web surface with a soft Alice-led shell. The start page uses a nearly white blush field, rounded shortcut tiles, a glowing bottom search control, and a pink Alice button. Browsed pages, results, tabs, and settings become denser and more neutral.

# Non-negotiable visual invariants

- Navigation or control chrome uses Bottom-first search and browser navigation.
- Keep search reachable at the bottom.
- Reserve pink for Alice and AI tools.
- Use full-page thumbnails in tab management.
- Group related page actions with dividers.
- Keep settings icon-coded and scannable.
- The start page uses a three-column shortcut grid.
- Search results and settings use a single column.

# Color and surfaces

- **Alice Pink** ({colors.primary}): Alice, AI tools, glow, and focused assistant states.
- **Action Dark** ({colors.action-dark}): Onboarding progress and high-contrast confirmation.
- **Link Blue** ({colors.link}): Search-result titles and web links.

- **Canvas** ({colors.canvas}): Blush-tinted start and onboarding field.
- **Surface 1** ({colors.surface-1}): Search, sheets, settings, shortcuts, and cards.
- **Surface 2/3**: Search history, grouped controls, and pressed surfaces.
- **Hairline** ({colors.hairline}): Fine separators in lists and sheets.

- **Ink** ({colors.ink}): Titles, page tools, and primary labels.
- **Ink Muted** ({colors.ink-muted}): URLs, descriptions, and setting details.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled copy.

- **Success** ({colors.semantic-success}): Confirmed security or completion.
- **Overlay** ({colors.semantic-overlay}): Page dimming behind sheets.

# Typography

- **YS Text** — interface, onboarding, search, settings, and browser chrome.
- Web page type remains source-controlled and should not be normalized.

- `{typography.display-xl}` — 34 points — 700 — Rare onboarding emphasis
- `{typography.display-md}` — 24 points — 700 — Onboarding and settings title
- `{typography.headline}` — 21 points — 700 — Section heading
- `{typography.card-title}` — 16 points — 600 — Result or tool title
- `{typography.body}` — 14 points — 400 — Controls and descriptions
- `{typography.caption}` — 11 points — 400 — Shortcut and toolbar labels

- Keep onboarding centered and bold.
- Keep browser chrome compact and neutral.
- Let web content preserve its own hierarchy.
- Use pink as an icon/accent cue, not body text.

Use **SF Pro** on iOS and **Inter** elsewhere when YS Text is unavailable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Primary gutters are 12–16 points; toolbar controls use 8–12 points gaps; sheets group rows in 12–16 points blocks.

The start page uses a three-column shortcut grid. Search results and settings use a single column. Tab management uses a two-column thumbnail grid.

Keep the upper start page open so search and shortcuts anchor the lower half. Functional screens trade empty space for scan density.

Use soft pink bloom behind Alice elements and subtle shadow under floating search. Avoid strong shadows on result cards and settings.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

The bottom toolbar contains back, new tab, Alice, tab count, and menu. Page menus open as scrollable grouped sheets.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Onboarding uses a full-width dark pill. Browser actions are icon-led, while Alice actions pair pink symbols with black labels on white.

Shortcut tiles are white and compact. Tab cards show a full page thumbnail, favicon/title strip, and close control. Search results form lightly separated white blocks.

The primary input is a bottom pill with search icon, placeholder, and camera entry. Focus expands into a sheet with history and keyboard.

Tab count is a compact outlined badge. Search or page progress remains in browser chrome rather than a large status surface.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Onboarding objects float centrally with soft blurred shadows. Page thumbnails keep the page aspect ratio inside rounded tab cards.

Use contain for shortcut symbols, cover for page thumbnails, and natural aspect ratios for web-result imagery.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Tab count is a compact outlined badge. Search or page progress remains in browser chrome rather than a large status surface.

- **Success** ({colors.semantic-success}): Confirmed security or completion.
- **Overlay** ({colors.semantic-overlay}): Page dimming behind sheets.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep toolbar icons, shortcut tiles, tab controls, and sheet rows at least 44 points.
- Shorten labels before removing controls. Let page menus scroll, and keep the search field full width.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not tint every functional surface pink.
- Do not hide browser basics behind AI entry points.
- Do not replace page thumbnails with generic icons.
- Do not make web-result typography decorative.
- Do not over-round small list rows.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact typeface and color tokens were inferred visually.
- Motion-only onboarding footage was not evaluated frame by frame.
- Desktop and tablet browser states were not present.
- Native focus and keyboard behavior should remain platform-correct.

</design-context>
