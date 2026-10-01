<design-context>
---
version: 1
platform: iOS
name: Mamba-design-analysis
description: "A dark, portrait-first dating system with coral-to-pink brand gradients, cyan utilities, rounded full-screen discovery cards, compact profile grids, and playful flat promotion symbols."
colors:
  primary: "#FF5A2A"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 10, md: 16, lg: 20, xl: 24, xxl: 30, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [11, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  profile-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0}
  swipe-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 0}
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Mamba is a dark dating interface where portrait photography dominates and coral gradients signal attraction, visibility, and paid emphasis.

**Key Characteristics:**
- Black immersive canvas.
- Rounded portrait grids and swipe cards.
- Coral, pink, and orange brand emphasis.
- Cyan utility actions and green online status.
- Flat playful promotion symbols.

# Non-negotiable visual invariants

- Sampled screens consistently use black immersive canvas.
- The reference consistently shows rounded portrait grids and swipe cards.
- The reference consistently shows coral, pink, and orange brand emphasis.
- The reference consistently shows cyan utility actions and green online status.
- The reference consistently shows flat playful promotion symbols.

# Color and surfaces

### Brand & Accent

Coral-orange is primary; pink gradients support brand moments. Cyan is utility, green presence, and white commitment.

### Surface

Use near-black canvas with charcoal cards, sheets, and navigation.

### Text

White carries names and actions; cool gray carries metadata and inactive navigation.

### Semantic

Green means online, blue verification, coral attraction or purchase, and red destructive actions.

# Typography

### Font Family

Use SF Pro Display for profile statements and SF Pro Text for chat, filters, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Onboarding claim |
| headline | 20 points | 700 | Profile and purchase title |
| card-title | 15 points | 600 | Name and age |
| body | 12 points | 400 | Bio and message preview |
| caption | 9 points | 400 | Presence and navigation |

### Principles

- Keep names legible over imagery.
- Put age and verification beside identity.
- Keep purchase explanations brief.

### Note on Font Substitutes

Inter is suitable; retain strong contrast on dark surfaces.

# Screen composition

### Spacing System

Use a 4 points base, 10 points grid gaps, and 12 points screen gutters.

### Grid & Container

Search uses two portrait columns; swipes use one large card; chat and profile use vertical lists.

### Whitespace Philosophy

Discovery is image-dense while purchases and profile editing receive more separation.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Black canvas | Discovery and chat |
| 1 | Charcoal card | Profile and promotion |
| 2 | Dark dock | Persistent navigation |
| 3 | Sheet over scrim | Filters and purchase |

### Decorative Depth

Portrait photography and gradients supply depth; controls remain flat.

# Navigation appearance

Keep five dark destinations fixed; brighten only the active icon and essential badges.

# Components

### Buttons

Primary purchase uses coral; key discovery actions use circular white, coral, or cyan controls.

### Cards & Containers

Profile cards prioritize portrait, name, age, status, and verification; promotion cards add one symbol and one action.

### Inputs & Forms

Dark inputs use light text and cyan or coral focus; sheets must inherit the same geometry.

# Imagery and icons

Portrait photography and gradients supply depth; controls remain flat.

Use portrait aspect-fill with safe facial crops. Keep flat symbols isolated from member photography.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Online, verification, VIP, and unread states use compact colored markers close to identity.

# iOS adaptation

### Touch Targets

Profiles, likes, passes, filters, chat, edit, and navigation remain at least 44 points.

### Collapsing Strategy

Keep two columns until labels fail; stack purchase and edit controls.

### Image Behavior

Aspect-fill portraits with face-aware crop; never stretch or tint member media.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't put long copy over faces.
- Don't use coral for neutral metadata.
- Don't overdecorate chat rows.
- Don't mix light marketplace cards into discovery.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
