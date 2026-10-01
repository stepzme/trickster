<design-context>
---
version: 1
platform: iOS
name: Idram-IDBank-design-analysis
description: "A light finance super-app built from warm gray canvas, white modular tiles, a vivid orange action system, promotional story cards, and a prominent central QR control. Dense banking and service functions remain approachable through grouped icons, compact pills, and soft shadows rather than heavy dashboard chrome."
colors:
  primary: "#FF8617"
  on-primary: "#FFFFFF"
  primary-focus: "#E56F05"
  ink: "#222225"
  ink-muted: "#59595E"
  ink-subtle: "#89898F"
  ink-tertiary: "#B0B0B5"
  canvas: "#F4F4F4"
  surface-1: "#FFFFFF"
  surface-2: "#ECECEF"
  surface-3: "#E3E3E6"
  surface-4: "#D7D7DB"
  hairline: "#E3E3E5"
  hairline-strong: "#C9C9CD"
  hairline-tertiary: "#ADADB3"
  inverse-canvas: "#27272B"
  inverse-surface-1: "#37373C"
  inverse-surface-2: "#48484E"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F6A6C8"
  semantic-success: "#32C992"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.1}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7}
  display-md: {fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1}
  subhead: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 44
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [8, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 18]}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [14, 10]}
  story-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0}
  account-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [14, 12]}
  text-input-focused: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [14, 12]}
  success-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [6, 8]}
---

# Overview

Idram & IDBank compresses banking and everyday payments into a modular light surface. Orange maintains orientation across primary buttons, group selectors, and the central QR action while white tiles and restrained shadows separate dense utilities.

**Key Characteristics:**
- Warm gray canvas with white floating modules.
- Orange primary actions and central QR button.
- Promotional story carousel above financial tools.
- Dense grids of small service tiles.
- Compact pills for modes and categories.
- Persistent five-item bottom navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use warm gray canvas with white floating modules.
- Sampled screens consistently use orange primary actions and central QR button.
- The reference consistently shows promotional story carousel above financial tools.
- The reference consistently shows dense grids of small service tiles.
- The reference consistently shows compact pills for modes and categories.
- Navigation consistently uses persistent five-item bottom navigation.

# Color and surfaces

### Brand & Accent
- Orange carries primary actions, QR access, and selected modes.
- Pink appears only in the idcoin sub-brand.

### Surface
- Warm light gray is the page canvas.
- White cards group balances, services, forms, and account data.
- Dark gray supports secondary icons and inactive navigation.

### Text
- Dark charcoal carries amounts and titles.
- Mid-gray supports explanations and labels.
- Orange text signals verification or action.

### Semantic
- Mint green confirms successful transfers.
- Dimmed overlays focus success and choice sheets.

# Typography

### Font Family

- SF Pro Display for screen headings and large amounts.
- SF Pro Text for utility labels and forms.
- SF Mono for verification codes and tightly aligned financial values.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40 points | 700 | Code or major amount |
| display-lg | 32 points | 700 | Balance |
| display-md | 27 points | 700 | Screen title |
| headline | 22 points | 700 | Section heading |
| card-title | 17 points | 600 | Service group |
| body | 14 points | 400 | Labels and copy |
| caption | 10 points | 400 | Bottom navigation |

### Principles

- Prioritize amount and destination over supporting text.
- Keep service labels short and left-aligned.
- Use compact type to preserve scan density without reducing touch areas.

### Note on Font Substitutes

Use the Apple system family; no decorative substitute is needed.

# Screen composition

### Spacing System

Use a 4 points base, 10–14 points inside utility tiles, and 20–24 points between major groups.

### Grid & Container

Service actions use three or four columns. Stories and account modules scroll horizontally. Transaction forms remain one column.

### Whitespace Philosophy

Whitespace separates groups, not individual functions. Keep related payment tiles close and use larger gaps around headings.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Gray canvas | Page base |
| 1 | White tile with soft shadow | Services and balances |
| 2 | Orange active circle | Selected group and QR |
| 3 | Rounded white sheet | Success and confirmation |

### Decorative Depth

Use restrained soft shadows and story photography. Avoid glass effects or dramatic gradients.

# Navigation appearance

Use five destinations with an oversized central QR circle. Active standard destinations turn orange; inactive items remain dark gray.

# Components

### Buttons

Primary buttons are solid orange rounded rectangles. Secondary actions use white or light-gray pills with dark labels.

### Cards & Containers

Tiles remain compact with icon above label. Account cards emphasize amount and identifier. Empty states use one central icon and bottom action.

### Inputs & Forms

Forms use white fields with light borders. Large verification digits are centered. Card scanning may appear as a trailing icon.

# Imagery and icons

Use restrained soft shadows and story photography. Avoid glass effects or dramatic gradients.

Stories use tall rounded crops. Functional icons are simple monochrome line symbols inside open white tiles.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Verification status sits next to identity. Success uses a green circular check and a single green action in a bottom sheet.

# iOS adaptation

### Touch Targets

Service tiles, QR, tabs, and bottom navigation remain at least 44 points tappable.

### Collapsing Strategy

Story and mode rows scroll horizontally. Service grids reduce columns before labels shrink.

### Image Behavior

Use aspect-fill for stories and preserve faces or product focal points. Do not crop functional QR or account graphics.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't turn every tile orange.
- Don't add oversized marketing banners below transactional content.
- Don't hide services behind deep navigation.
- Don't use heavy shadows.
- Don't mix multiple card radius systems.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
