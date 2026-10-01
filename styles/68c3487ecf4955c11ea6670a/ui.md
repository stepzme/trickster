<design-context>
---
version: 1
platform: iOS
name: Tips-design-analysis
description: "A calm Apple-style reference interface built from white and pale-gray grouped surfaces, large black system headlines, blue actions, colorful category heroes, and crisp device screenshots. The visual language is native, instructional, and content-first."

colors:
  primary: "#007AFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#0062CC"
  ink: "#111113"
  ink-muted: "#6E6E73"
  ink-subtle: "#A1A1A6"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F7"
  hairline: "#D1D1D6"
  accent-orange: "#FF9F0A"
  accent-pink: "#FF375F"
  accent-purple: "#AF52DE"
  semantic-success: "#34C759"
  semantic-warning: "#FF9F0A"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  display-lg: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2 }
  display-md: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 600, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  collection-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16 }
  list-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [12, 16]}
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [10, 12]}
  category-hero: { backgroundColor: "{colors.accent-purple}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.xl}", padding: 24 }
---

# Overview

Tips uses restrained system chrome for browsing and reading, then gives each collection a bright gradient hero. Large typography, generous spacing, and exact screenshots keep instructions immediately legible.

# Non-negotiable visual invariants

- The reference consistently shows preserve calm system hierarchy.
- The reference consistently shows real screenshots as instruction evidence.
- The reference consistently shows actions unmistakably blue.
- The reference consistently shows make category heroes colorful but contained.
- The reference consistently shows a calm Apple-style reference interface built from white and pale-gray grouped surfaces.
- The reference consistently shows large black system headlines.
- The reference consistently shows blue actions.
- The reference consistently shows colorful category heroes.

# Color and surfaces

### Brand & Accent

System blue owns links, selection, search focus, and bookmark state. Orange, pink, purple, and yellow gradients are reserved for collection heroes.

### Surface

White is the reading canvas; pale grouped gray separates search, settings-like lists, and secondary panels.

### Text

Near-black carries titles and instructions. Medium gray carries summaries, labels, and supporting detail.

### Semantic

Green confirms completion, orange warns, and red marks destructive or failed states. Do not reuse category gradients as semantic status.

# Typography

### Font Family

Use a neutral system sans with Apple-like proportions and clear optical sizing.

### Hierarchy

Use 28–34 points top-level titles, 20–22 points article headings, 17 points rows and body, and 11–13 points metadata.

### Principles

Keep headings compact, instructions conversational, and step labels visually stronger than explanatory text.

### Note on Font Substitutes

Use SF Pro where available; Inter or Arial are acceptable substitutes with native weight and spacing.

# Screen composition

### Spacing System

Use a 4 points base, 16 points side gutters, 12–16 points row spacing, and 24–32 points between instructional sections.

### Grid & Container

Collections use a single-column grouped list. Articles use a centered reading column with full-width screenshots inside the gutter.

### Whitespace Philosophy

Leave clear breathing room around large titles and screenshots. Dense copy should be broken into short numbered steps.

Surface hierarchy observed in the source:

The interface is mostly flat. Grouping comes from background changes, hairlines, and overlapping device screenshots rather than prominent shadow.

### Decorative Depth

Use smooth category gradients and crisp screenshot framing. Avoid glass effects, heavy shadow, or ornamental texture.

# Navigation appearance

Use large-title navigation for collections and compact bars for articles, with back, share, and bookmark actions. Avoid unnecessary persistent tabs.

# Components

### Buttons

Use blue text actions or filled blue buttons with system typography. Native controls may be used, but their color, weight, and geometry must inherit this visual system.

### Cards & Containers

Collection cards use white surfaces, concise labels, and clear disclosure. Category heroes use saturated gradients with white type and simple symbolic imagery.

### Inputs & Forms

Search uses a pale-gray rounded field with a leading magnifier and clear action. Keep placeholder and focus states visibly distinct.

# Imagery and icons

Use smooth category gradients and crisp screenshot framing. Avoid glass effects, heavy shadow, or ornamental texture.

Center device and UI screenshots with `contain` so controls remain visible. Use edge-to-edge feature imagery only when the crop is intentional; there is no separate illustration language to imitate.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Bookmark, download, completion, and availability states appear beside the relevant article or action, never on a separate dashboard.

# iOS adaptation

### Touch Targets

Rows, navigation actions, bookmarks, search controls, and related-tip links require at least 44 points targets.

### Collapsing Strategy

Keep article steps linear. Collapse secondary collection controls into menus while preserving the title and search entry point.

### Image Behavior

Use `contain` for device screenshots and instructional UI; use `cover` only for decorative feature imagery and category backgrounds.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not expose unstyled default controls.
- Do not crop away important screenshot UI.
- Do not turn every panel into a gradient.
- Do not add an unrelated illustration style.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
