<design-context>
---
version: 1
platform: iOS
name: Cofix-Club-design-analysis
description: "A high-energy coffee loyalty and preorder app with a near-black shell, stark white wordmark, condensed display typography, saturated orange and purple campaign blocks, product photography on bold color fields, oversized numeric rewards, and a three-destination bottom bar."
colors:
  primary: "#FF6B00"
  on-primary: "#FFFFFF"
  primary-soft: "#FFE0CA"
  accent: "#7650E8"
  accent-green: "#83C93A"
  ink: "#FFFFFF"
  ink-dark: "#171518"
  ink-muted: "#A9A5AA"
  canvas: "#171518"
  surface-1: "#242124"
  surface-2: "#353236"
  hairline: "#4B474C"
  semantic-success: "#83C93A"
  semantic-danger: "#F05246"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Bebas Neue, fontSize: 52, fontWeight: 400, lineHeight: 0.95, letterSpacing: 0.2 }
  display-lg: { fontFamily: Bebas Neue, fontSize: 40, fontWeight: 400, lineHeight: 1.00, letterSpacing: 0.2 }
  display-md: { fontFamily: Bebas Neue, fontSize: 32, fontWeight: 400, lineHeight: 1.05, letterSpacing: 0.2 }
  headline: { fontFamily: Bebas Neue, fontSize: 26, fontWeight: 400, lineHeight: 1.05, letterSpacing: 0.2 }
  card-title: { fontFamily: Bebas Neue, fontSize: 22, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.2 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2 }
  button: { fontFamily: Bebas Neue, fontSize: 20, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.3 }
  eyebrow: { fontFamily: Bebas Neue, fontSize: 15, fontWeight: 400, lineHeight: 1.10, letterSpacing: 0.4 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 18]}
  campaign-card: { backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  menu-tile: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12 }
  wallet-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Cofix Club mixes a dark hospitality shell with loud retail campaigns, bright product grids, and a reward wallet. Condensed display type creates the distinct menu-board voice.

**Key Characteristics:**
- Near-black navigation shell and white wordmark.
- Saturated orange as loyalty and purchase anchor.
- Condensed all-caps display typography.
- Coffee photography isolated on flat color tiles.
- Oversized reward figures and coupon sections.

# Non-negotiable visual invariants

- Navigation consistently uses near-black navigation shell and white wordmark.
- The reference consistently shows saturated orange as loyalty and purchase anchor.
- The reference consistently shows condensed all-caps display typography.
- Sampled screens consistently use coffee photography isolated on flat color tiles.
- The reference consistently shows oversized reward figures and coupon sections.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Wallet, checkout, promotions, and dominant loyalty surfaces.
- **Purple Accent** ({colors.accent}): Partnership campaigns.
- **Green Accent** ({colors.accent-green}): Completed orders and positive progress.

### Surface
- **Canvas** ({colors.canvas}): Home and payment shell.
- **Surface 1** ({colors.surface-1}): Forms and dark content panels.
- **Surface 2** ({colors.surface-2}): Elevated field groups.
- **Hairline** ({colors.hairline}): Menu dividers and input rules.

### Text
- **Ink** ({colors.ink}): Headings and labels on dark or colored fields.
- **Ink Dark** ({colors.ink-dark}): Product copy on light surfaces.
- **Ink Muted** ({colors.ink-muted}): Payment hints and secondary metadata.

### Semantic
- **Success** ({colors.semantic-success}): Ready order and reward progress.
- **Danger** ({colors.semantic-danger}): Form error or destructive action.
- **Overlay** ({colors.semantic-overlay}): Checkout and modal focus.

# Typography

### Font Family
- **Bebas Neue** — close substitute for tall condensed menu-board headings and CTAs.
- **SF Pro Text** — forms, metadata, and explanatory copy.
- **SF Mono** — order identifiers and payment references.

### Hierarchy
Use 52 points condensed type for rewards and order numbers, 32 points for section links, 22–26 points for campaign cards, 14 points body, and 10–12 points metadata.

### Principles
- Let condensed headlines carry brand energy.
- Keep form copy in a conventional sans.
- Use strong size contrast, not many weights.
- Keep product names readable over bold color.

### Note on Font Substitutes
Use **Bebas Neue** or **Oswald** for the display voice and the platform sans for body.

# Screen composition

### Spacing System
Use a 4 points base, 8 points between campaign tiles, 16 points gutters, and 16 points inside loyalty or order cards.

### Grid & Container
Home stacks barcode, hero carousel, two-up campaigns, large menu links, and a fixed three-way bottom navigation. Menu uses a two-column product grid.

### Whitespace Philosophy
Favor bold filled blocks and tight retail rhythm; keep enough separation that campaigns, menu, and wallet remain distinct.

Surface hierarchy observed in the source:

Use color contrast and photography rather than shadow. Sheets and checkout forms lift through darker grouped panels.

### Decorative Depth
Campaigns use photographed products, branded partner images, and flat color fields; operational screens stay direct.

# Navigation appearance

Keep Wallet, Location, and Menu for points in the bottom bar; profile and notifications remain in the header.

# Components

### Buttons

Use full-width high-contrast purchase and order-state buttons. Close, back, search, and filter remain icon-led but familiar.

### Cards & Containers

Use campaign cards, product tiles, wallet panels, coupon tickets, order-status cards, and dark payment groups.

### Inputs & Forms

Payment fields sit in a dark rounded group with underline-like divisions and an unmistakable disabled or enabled pay state.

# Imagery and icons

Campaigns use photographed products, branded partner images, and flat color fields; operational screens stay direct.

Cut out food and drink photography onto saturated rectangles. Preserve product silhouette, cup branding, and generous padding around the object.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show order ready, order identifier, wallet points, cashback, coupon count, and campaign progress with oversized values and explicit labels.

# iOS adaptation

### Touch Targets

Keep campaign cards, category chips, products, purchase buttons, and bottom navigation destinations at least 44 points.

### Collapsing Strategy

Preserve loyalty identity, menu access, active order, and checkout. Move lower-priority campaigns below the task content.

### Image Behavior

Contain cut-out products and crop campaign photography to its designed banner frame; never stretch cups or embedded copy.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't turn body or form text into condensed display type.
- Don't layer photography directly on busy app chrome.
- Don't soften the palette into muted pastels.
- Don't hide wallet points behind generic account settings.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
