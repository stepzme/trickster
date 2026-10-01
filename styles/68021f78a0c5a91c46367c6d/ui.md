<design-context>
---
version: 1
platform: iOS
name: T-Bank-design-analysis
description: "A modular finance-and-lifestyle super-app built from white rounded cards, pale gray canvas, bright yellow commitment actions, light blue utility accents, and friendly graphite-yellow 3D product objects. A five-tab structure supports dense banking, shopping, travel, and support without losing clarity."

colors:
  primary: "#FFDD2D"
  on-primary: "#171717"
  primary-pressed: "#EBC600"
  accent-blue: "#56A8F7"
  accent-violet: "#8D54E8"
  ink: "#1A1A1C"
  ink-muted: "#74767B"
  ink-subtle: "#A8ABB0"
  canvas: "#F3F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#EAF4FF"
  hairline: "#E1E4E8"
  semantic-success: "#29B36B"
  semantic-warning: "#E7A91D"
  semantic-danger: "#E94F58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  product-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12 }
  input-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

T-Bank is a broad but controlled super-app. White modular cards, yellow actions, blue utilities, and a consistent 3D product language let banking and lifestyle content coexist.

# Non-negotiable visual invariants

- The reference consistently shows reserve yellow for brand and commitment.
- The reference consistently shows account data explicit.
- The reference consistently shows one 3D object family.
- The reference consistently shows separate lifestyle promotion from finance state.
- The reference consistently shows a modular finance-and-lifestyle super-app built from white rounded cards.
- Sampled screens consistently use pale gray canvas.
- The reference consistently shows bright yellow commitment actions.
- The reference consistently shows light blue utility accents.

# Color and surfaces

### Brand & Accent

Yellow marks brand and commitment. Blue supports selected navigation, links, scanners, and utility actions; violet appears in rewards.

### Surface

Pale gray canvas separates white cards and sheets. Occasional dark hero panels introduce premium products.

### Text

Near-black carries balances and titles; gray carries dates, terms, and secondary details.

### Semantic

Green confirms incoming value and success, red marks errors or debt, and amber warns. Yellow must not replace explicit status labels.

# Typography

### Font Family

Use a neutral system sans with clear numerals and strong Cyrillic.

### Hierarchy

Use 22–28 points page headings, 16–17 points card titles, 14 points body, and 10–12 points transaction metadata.

### Principles

Keep amounts prominent, terms explicit, and promotional claims separate from account data.

### Note on Font Substitutes

SF Pro or Inter are suitable. Use tabular numerals for money and percentages.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–12 points card gaps, and 20–24 points between product groups.

### Grid & Container

Home stacks account modules and shortcut rows. City and Showcase use mixed tile grids; payments and transactions remain single-column.

### Whitespace Philosophy

Keep account and payment content calm; lifestyle shelves may be denser and more image-led.

Surface hierarchy observed in the source:

White cards lift softly from gray. Bottom sheets and dark promotional heroes create stronger, task-specific elevation.

### Decorative Depth

Use graphite-yellow 3D objects, soft platforms, and restrained gradients. Avoid decorative treatment inside financial forms.

# Navigation appearance

Five bottom tabs persist across Home, Payments, City, Chat, and Showcase. Blue identifies the active destination.

# Components

### Buttons

Primary actions are yellow with dark text. Blue pills support utilities; native controls must inherit the same hierarchy and geometry.

### Cards & Containers

Finance cards foreground amount and action. City and Showcase tiles pair short labels with photography or a single 3D object.

### Inputs & Forms

Search and transfer fields are white rounded bars. Multi-step financial forms keep amount, source, fee, and confirmation linear.

# Imagery and icons

Use graphite-yellow 3D objects, soft platforms, and restrained gradients. Avoid decorative treatment inside financial forms.

Travel and shopping use rounded photographic crops; products use clean cutouts; service illustrations center on pale platforms.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Payment, trip, order, cashback, card, and support states remain adjacent to the relevant item and use explicit text.

# iOS adaptation

### Touch Targets

Shortcuts, cards, tabs, chat rows, and financial actions require at least 44 points targets.

### Collapsing Strategy

Allow story and offer rails to scroll horizontally. Keep totals and confirmation actions visible through long tasks.

### Image Behavior

Use `cover` for travel and campaigns and `contain` for product cutouts and 3D objects.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not make every card yellow.
- Do not hide fees or terms behind friendly art.
- Do not mix unrelated illustration styles.
- Do not expose default platform-blue controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
