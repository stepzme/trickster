<design-context>
---
version: 1
platform: iOS
name: Flowwow-design-analysis
description: "A premium local-gifting marketplace with a white canvas, black primary actions, mint bonus labels, product-first floral photography, editorial store grids, compact price and delivery metadata, and layered checkout sheets for gifts, postcards, timing, tips, and live tracking."
colors: { primary: "#111111", on-primary: "#FFFFFF", primary-soft: "#F1F1F1", accent: "#45C58B", ink: "#171717", ink-muted: "#747474", ink-subtle: "#B0B0B0", canvas: "#FFFFFF", surface-1: "#F6F6F6", surface-2: "#EEF9F3", hairline: "#E4E4E4", semantic-success: "#36AD72", semantic-warning: "#F3B61F", semantic-danger: "#D94C55", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  product-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  store-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [11, 13]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Flowwow is a photo-led gifting marketplace where black actions and mint bonus labels stay secondary to flowers, desserts, and store quality.

# Non-negotiable visual invariants

- The reference consistently shows seller and delivery confidence visible.
- The reference consistently shows authentic product photography.
- The reference consistently shows preserve gifting notes and timing.
- Sampled screens consistently use a premium local-gifting marketplace with a white canvas.
- The reference consistently shows black primary actions.
- The reference consistently shows mint bonus labels.
- The reference consistently shows product-first floral photography.
- The reference consistently shows editorial store grids.

# Color and surfaces

### Brand & Accent
Use black for purchase and mint for bonuses, verified availability, and positive commerce cues.

### Surface
Keep browsing white, filters pale gray, and bonus panels very light mint.

### Text
Use black for product and price, gray for delivery and store metadata, and pale gray for inactive state.

### Semantic
Use green for confirmed, yellow for rating, and red for error or cancel.

# Typography

### Font Family
Use SF Pro Display for sections and SF Pro Text for products, stores, and checkout.

### Hierarchy
Use 26–36 points for major headings, 22 points for sections, 16 points for cards, 14 points body, and 10–12 points metadata.

### Principles
Keep product name, price, delivery time, rating, and store readable without competing with photography.

### Note on Font Substitutes
Use the platform sans or Inter with tabular prices.

# Screen composition

### Spacing System
Use a 4 points base, 8 points grid gaps, 16 points gutters, and 16 points checkout padding.

### Grid & Container
Home stacks search, categories, stores, and product rails; store and product views use two-column image grids.

### Whitespace Philosophy
Let photography breathe while keeping gifting configuration compact and sequential.

Surface hierarchy observed in the source:

Use image depth and layered white sheets; avoid heavy shadow.

### Decorative Depth
Flowers, desserts, packaging, and postcards provide all decorative richness.

# Navigation appearance

Home, Collections, Self-pickup, Inbox, and Cabinet remain in the bottom bar.

# Components

### Buttons

Use full-width black purchase controls and neutral outline actions for edit, cancel, or contact.

### Cards & Containers

Use product cards, store mosaics, bonus labels, price-history chart, cart rows, add-on rails, and tracking sheets.

### Inputs & Forms

Address, postcard, seller comment, delivery time, payment, tips, and recipient stay in separate steps.

# Imagery and icons

Flowers, desserts, packaging, and postcards provide all decorative richness.

Use authentic product photography with consistent crops, true color, and visible scale where useful.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show confirmed availability, delivery estimate, bonus accrual, scheduled, courier, delivered, and canceled states.

# iOS adaptation

### Touch Targets

Keep filters, products, favorite, quantity, add-ons, delivery, and contact at least 44 points.

### Collapsing Strategy

Preserve address, product, price, timing, total, and order action; move discovery below the active gift task.

### Image Behavior

Use consistent cover crops for product grids and aspect-fit for detail galleries when scale matters.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't over-process flower colors.
- Don't hide add-on or tip costs.
- Don't add decorative illustration to the shell.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
