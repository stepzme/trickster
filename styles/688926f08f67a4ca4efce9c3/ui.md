<design-context>
---
version: alpha
name: Mamba-design-analysis
description: "A dark, portrait-first dating system with coral-to-pink brand gradients, cyan utilities, rounded full-screen discovery cards, compact profile grids, and playful flat promotion symbols."
colors:
  primary: "#FF5A2A"
  on-primary: "#FFFFFF"
  primary-hover: "#FF7248"
  primary-focus: "#DF3F13"
  ink: "#F7F5F8"
  ink-muted: "#AAA5AF"
  ink-subtle: "#77717E"
  ink-tertiary: "#4E4953"
  canvas: "#0D0B0F"
  surface-1: "#1C191F"
  surface-2: "#29252D"
  surface-3: "#37323C"
  surface-4: "#47414D"
  hairline: "#2C2831"
  hairline-strong: "#443E49"
  hairline-tertiary: "#5C5563"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F4F2F5"
  inverse-surface-2: "#EAE7EC"
  inverse-ink: "#171419"
  brand-secure: "#29BBD0"
  semantic-success: "#35D47B"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 10px, md: 16px, lg: 20px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 11px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  profile-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  swipe-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 0}
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Mamba is a dark dating interface where portrait photography dominates and coral gradients signal attraction, visibility, and paid emphasis.

**Key Characteristics:**
- Black immersive canvas.
- Rounded portrait grids and swipe cards.
- Coral, pink, and orange brand emphasis.
- Cyan utility actions and green online status.
- Flat playful promotion symbols.

## Colors

### Brand & Accent

Coral-orange is primary; pink gradients support brand moments. Cyan is utility, green presence, and white commitment.

### Surface

Use near-black canvas with charcoal cards, sheets, and navigation.

### Text

White carries names and actions; cool gray carries metadata and inactive navigation.

### Semantic

Green means online, blue verification, coral attraction or purchase, and red destructive actions.

## Typography

### Font Family

Use SF Pro Display for profile statements and SF Pro Text for chat, filters, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding claim |
| headline | 20px | 700 | Profile and purchase title |
| card-title | 15px | 600 | Name and age |
| body | 12px | 400 | Bio and message preview |
| caption | 9px | 400 | Presence and navigation |

### Principles

- Keep names legible over imagery.
- Put age and verification beside identity.
- Keep purchase explanations brief.

### Note on Font Substitutes

Inter is suitable; retain strong contrast on dark surfaces.

## Layout

### Spacing System

Use a 4px base, 10px grid gaps, and 12px screen gutters.

### Grid & Container

Search uses two portrait columns; swipes use one large card; chat and profile use vertical lists.

### Whitespace Philosophy

Discovery is image-dense while purchases and profile editing receive more separation.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Discovery and chat |
| 1 | Charcoal card | Profile and promotion |
| 2 | Dark dock | Persistent navigation |
| 3 | Sheet over scrim | Filters and purchase |

### Decorative Depth

Portrait photography and gradients supply depth; controls remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 10px | Buttons and fields |
| rounded-md | 16px | Promo tiles |
| rounded-xl | 24px | Portrait and swipe cards |
| rounded-full | full | Likes and avatars |

### Photography & Illustration Geometry

Use portrait aspect-fill with safe facial crops. Keep flat symbols isolated from member photography.

## Components

### Buttons

Primary purchase uses coral; key discovery actions use circular white, coral, or cyan controls.

### Pricing Tabs

Filters and subscription options use dark segmented controls with coral selection.

### Cards & Containers

Profile cards prioritize portrait, name, age, status, and verification; promotion cards add one symbol and one action.

### Inputs & Forms

Dark inputs use light text and cyan or coral focus; sheets must inherit the same geometry.

### Status & Build Page

Online, verification, VIP, and unread states use compact colored markers close to identity.

### Navigation

Keep five dark destinations fixed; brighten only the active icon and essential badges.

### Footer

No footer; bottom navigation or swipe actions own the safe area.

## Do's and Don'ts

### Do

- Keep portraits dominant.
- Preserve dark immersion.
- Explain paid visibility clearly.
- Restyle native sheets and forms.

### Don't

- Don't put long copy over faces.
- Don't use coral for neutral metadata.
- Don't overdecorate chat rows.
- Don't mix light marketplace cards into discovery.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten names and grid gaps |
| Standard | 375–430px | Default two-column search |
| Wide | 431px+ | Expand swipe card gutters |

### Touch Targets

Profiles, likes, passes, filters, chat, edit, and navigation remain at least 44px.

### Collapsing Strategy

Keep two columns until labels fail; stack purchase and edit controls.

### Image Behavior

Aspect-fill portraits with face-aware crop; never stretch or tint member media.

## Iteration Guide

Tune portrait legibility first, then discovery actions, chat scanning, profile completeness, and purchase clarity.

## Known Gaps

- Match confirmation was not visually sampled.
- Safety reporting was not opened in detail.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
