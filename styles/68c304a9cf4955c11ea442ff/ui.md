<design-context>
---
version: alpha
name: Idram-IDBank-design-analysis
description: "A light finance super-app built from warm gray canvas, white modular tiles, a vivid orange action system, promotional story cards, and a prominent central QR control. Dense banking and service functions remain approachable through grouped icons, compact pills, and soft shadows rather than heavy dashboard chrome."
colors:
  primary: "#FF8617"
  on-primary: "#FFFFFF"
  primary-hover: "#FF9A3D"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.1px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.7px}
  display-md: {fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.3px}
  card-title: {fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.1px}
  subhead: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 13px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 44px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 8px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 18px}
  service-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 14px 10px}
  story-card: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 0}
  account-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px 12px}
  text-input-focused: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px 12px}
  success-sheet: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xxl}", padding: 24px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px}
  top-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", height: 52px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 6px 8px}
---
## Overview

Idram & IDBank compresses banking and everyday payments into a modular light surface. Orange maintains orientation across primary buttons, group selectors, and the central QR action while white tiles and restrained shadows separate dense utilities.

**Key Characteristics:**
- Warm gray canvas with white floating modules.
- Orange primary actions and central QR button.
- Promotional story carousel above financial tools.
- Dense grids of small service tiles.
- Compact pills for modes and categories.
- Persistent five-item bottom navigation.

## Colors

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

## Typography

### Font Family

- SF Pro Display for screen headings and large amounts.
- SF Pro Text for utility labels and forms.
- SF Mono for verification codes and tightly aligned financial values.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 700 | Code or major amount |
| display-lg | 32px | 700 | Balance |
| display-md | 27px | 700 | Screen title |
| headline | 22px | 700 | Section heading |
| card-title | 17px | 600 | Service group |
| body | 14px | 400 | Labels and copy |
| caption | 10px | 400 | Bottom navigation |

### Principles

- Prioritize amount and destination over supporting text.
- Keep service labels short and left-aligned.
- Use compact type to preserve scan density without reducing touch areas.

### Note on Font Substitutes

Use the Apple system family; no decorative substitute is needed.

## Layout

### Spacing System

Use a 4px base, 10–14px inside utility tiles, and 20–24px between major groups.

### Grid & Container

Service actions use three or four columns. Stories and account modules scroll horizontally. Transaction forms remain one column.

### Whitespace Philosophy

Whitespace separates groups, not individual functions. Keep related payment tiles close and use larger gaps around headings.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Gray canvas | Page base |
| 1 | White tile with soft shadow | Services and balances |
| 2 | Orange active circle | Selected group and QR |
| 3 | Rounded white sheet | Success and confirmation |

### Decorative Depth

Use restrained soft shadows and story photography. Avoid glass effects or dramatic gradients.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Inputs |
| rounded-md | 12px | Service and story tiles |
| rounded-lg | 16px | Account groups |
| rounded-xl | 22px | Feature modules |
| rounded-pill | full | Mode chips |
| rounded-full | full | QR and group selectors |

### Photography & Illustration Geometry

Stories use tall rounded crops. Functional icons are simple monochrome line symbols inside open white tiles.

## Components

### Buttons

Primary buttons are solid orange rounded rectangles. Secondary actions use white or light-gray pills with dark labels.

### Pricing Tabs

Mode switching uses small pills such as Stories/Tickets or Pay/Receive. Selection gains border and higher contrast.

### Cards & Containers

Tiles remain compact with icon above label. Account cards emphasize amount and identifier. Empty states use one central icon and bottom action.

### Inputs & Forms

Forms use white fields with light borders. Large verification digits are centered. Card scanning may appear as a trailing icon.

### Status & Build Page

Verification status sits next to identity. Success uses a green circular check and a single green action in a bottom sheet.

### Navigation

Use five destinations with an oversized central QR circle. Active standard destinations turn orange; inactive items remain dark gray.

### Footer

No footer; continue the canvas to the safe area.

## Do's and Don'ts

### Do

- Keep orange tied to action and orientation.
- Group utilities into compact, labeled clusters.
- Preserve the dominant QR entry point.
- Make success confirmations explicit.
- Keep balances and amounts visually primary.

### Don't

- Don't turn every tile orange.
- Don't add oversized marketing banners below transactional content.
- Don't hide services behind deep navigation.
- Don't use heavy shadows.
- Don't mix multiple card radius systems.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Three-column service grid |
| Standard | 375–430px | Default three-to-four column grid |
| Wide | 431px+ | Wider tiles and stories |

### Touch Targets

Service tiles, QR, tabs, and bottom navigation remain at least 44px tappable.

### Collapsing Strategy

Story and mode rows scroll horizontally. Service grids reduce columns before labels shrink.

### Image Behavior

Use aspect-fill for stories and preserve faces or product focal points. Do not crop functional QR or account graphics.

## Iteration Guide

Tune service grouping and amount hierarchy first, then orange density and shadows.

## Known Gaps

- Dark theme was not present in reviewed flows.
- Card-management detail beyond ordering was not sampled.
- Tablet and landscape behavior were not shown.
</design-context>
