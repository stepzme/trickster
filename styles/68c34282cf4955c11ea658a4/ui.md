<design-context>
---
version: 1
platform: iOS
name: Wallet-design-analysis
description: "A highly native iOS utility built from soft cool-gray canvas, stacked white sheets, large black titles, system-blue actions, grouped form rows, and restrained flat setup graphics. Depth comes from the visible stack of cards and modal dimming rather than ornamental shadow."

colors:
  primary: "#1677F2"
  on-primary: "#FFFFFF"
  primary-pressed: "#0C63CF"
  ink: "#000000"
  ink-muted: "#6C6C70"
  ink-subtle: "#9A9AA0"
  canvas: "#F2F2F7"
  surface-1: "#FFFFFF"
  surface-2: "#E9E9EE"
  field: "#EFEFF4"
  hairline: "#D6D6DB"
  accent-red: "#E87569"
  accent-yellow: "#F3BE3D"
  accent-green: "#67B961"
  semantic-success: "#2F9B62"
  semantic-danger: "#D94B4B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: SF Pro Text, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: SF Mono, fontSize: 13, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  setup-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16 }
  grouped-field: { backgroundColor: "{colors.field}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 12 }
  modal-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20 }
  alert: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
---

# Overview

Wallet follows the iOS system language closely: large titles, cool-gray grouped forms, blue actions, stacked modal sheets, and flat setup cards. The visual personality is quiet, secure, and familiar.

# Non-negotiable visual invariants

- The reference consistently shows preserve native familiarity for payment setup.
- Navigation consistently uses show navigation depth with sheet stacking.
- The reference consistently shows sensitive forms calm and sparse.
- Sampled screens consistently use blue consistently for safe action.
- Sampled screens consistently use a highly native iOS utility built from soft cool-gray canvas.
- The reference consistently shows stacked white sheets.
- The reference consistently shows large black titles.
- The reference consistently shows system-blue actions.

# Color and surfaces

### Brand & Accent

System blue is the sole operational accent for Add, Continue, Next, Back, search, and alert actions. Muted red, yellow, green, and blue appear only in setup illustrations.

### Surface

Use cool gray for the app canvas, white for modal sheets, and slightly darker grouped fields. Preserve visible sheet edges to communicate navigation depth.

### Text

Black carries large titles and field values; medium gray carries descriptions, placeholders, and privacy copy.

### Semantic

Use red only for destructive or unsupported outcomes, green for completed verification, and blue for all neutral action.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text with native iOS metrics.

### Hierarchy

Use 30–36 points navigation titles, 20–26 points setup and sheet headings, 15–17 points form content, and 11–13 points legal or helper text.

### Principles

Keep wording direct and functional. Center modal headings, left-align form labels, and avoid unnecessary type styles.

### Note on Font Substitutes

On non-Apple platforms, use Inter with iOS-like weight and line-height while retaining the same scale.

# Screen composition

### Spacing System

Use a 4 points base, 16 points screen gutters, 12 points row spacing, 20–24 points sheet padding, and broad vertical breathing room around forms.

### Grid & Container

The main screen shows horizontally paged setup cards. Add-card screens use one centered sheet with grouped fields and a bottom primary action.

### Whitespace Philosophy

Leave large calm areas around sensitive setup steps. Empty states should remain visually sparse and centered.

Surface hierarchy observed in the source:

Show two or three offset sheet tops behind the active surface and use a restrained dim overlay for alerts. Avoid ornamental card shadows.

### Decorative Depth

Depth is structural: stacked cards, modal rounding, dimming, and camera transition. Flat illustrations remain inside their own tinted panels.

# Navigation appearance

Use large-title navigation, blue Back/Next text, close controls, and stacked sheets. Keep Orders and Add as circular black shortcuts on the main screen.

# Components

### Buttons

Primary actions are system-blue rounded rectangles; text actions stay blue on white. Native controls may be used, but their color, radius, spacing, and hierarchy must explicitly match this Wallet system.

### Cards & Containers

Setup cards combine large white title, central flat object cluster, short caption, and a small white Add or Get pill.

### Inputs & Forms

Use grouped pale-gray rows for name, number, expiry date, and security code. Keyboard, camera scan, and validation remain native but visually integrated.

# Imagery and icons

Depth is structural: stacked cards, modal rounding, dimming, and camera transition. Flat illustrations remain inside their own tinted panels.

Use flat centered object clusters in rectangular intro cards. Real payment cards remain proportionally accurate and softly rounded.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use centered progress spinners, issuer-support alerts, verification prompts, no-results messages, and compact empty-state symbols.

# iOS adaptation

### Touch Targets

Add, Orders, Back, Next, close, alert actions, setup cards, and grouped rows require at least 44 points targets.

### Collapsing Strategy

Keep title, current field group, validation, and next action visible. Move explanatory copy below or into a secondary sheet.

### Image Behavior

Use `contain` for card and pass illustrations, real payment cards, and empty-state symbols. Camera capture fills its dedicated view.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not restyle the product as a colorful fintech dashboard.
- Do not introduce custom shadows or glass effects everywhere.
- Do not crowd empty states with secondary actions.
- Do not let default platform styling diverge from the specified radii and hierarchy.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
