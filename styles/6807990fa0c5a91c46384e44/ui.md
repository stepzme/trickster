<design-context>
---
version: 1
platform: iOS
name: Pyaterochka-design-analysis
description: "A lively grocery-retail interface with a white canvas, strong brand red actions, bright green promotional fields, colorful category tiles, playful 3D mascots, dense product photography, and compact loyalty and checkout modules."
colors: {primary: "#EF2838", on-primary: "#FFFFFF", primary-focus: "#C91D2B", ink: "#17191B", ink-muted: "#696D72", ink-subtle: "#9CA0A5", ink-tertiary: "#C7CACE", canvas: "#FFFFFF", surface-1: "#F6F7F7", surface-2: "#EEF1EF", surface-3: "#E2E6E3", surface-4: "#D7DCD8", hairline: "#E5E8E5", hairline-strong: "#CCD2CD", hairline-tertiary: "#B6BDB7", inverse-canvas: "#198B3A", inverse-surface-1: "#25A849", inverse-surface-2: "#45BE63", inverse-ink: "#FFFFFF", brand-secure: "#22A541", semantic-success: "#62C64D", semantic-overlay: "#151816"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10}
  promo-card: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "#FFD91A", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Pyaterochka is a high-energy grocery app. White keeps product comparison clear, red owns the transaction and active navigation, green carries brand campaigns, and playful mascots and colorful category art make loyalty feel approachable.

**Key Characteristics:** white commerce canvas, red purchase actions, green campaigns, 3D mascots, colorful category tiles, dense product lists, loyalty and games, inline cart editing, and four destinations.

# Non-negotiable visual invariants

- Sampled screens consistently use white commerce canvas.
- The reference consistently shows red purchase actions.
- The reference consistently shows green campaigns.
- The reference consistently shows 3D mascots.
- The reference consistently shows colorful category tiles.
- The reference consistently shows dense product lists.
- The reference consistently shows loyalty and games.
- The reference consistently shows inline cart editing.

# Color and surfaces

### Brand & Accent

Red owns cart, primary CTA, active navigation, and important promotion labels. Green anchors branding, games, loyalty, and large campaign surfaces.

### Surface

White is the base; pale gray groups search, cart address, and recommendation modules; colorful tiles remain local to categories and campaigns.

### Text

Near-black leads products, prices, and headings; gray supports quantity, old price, delivery, and conditions; white is used over red or green.

### Semantic

Green confirms orders, yellow marks combo or discount, red drives purchase and urgency, and gray communicates inactive or secondary information.

# Typography

### Font Family

Use SF Pro Display for promotion and section emphasis and SF Pro Text for catalog, loyalty, and checkout detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Campaign or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Product or action |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Price and delivery meta |

### Principles

- Lead with product, current price, discount, or delivery state.
- Keep promotional headings short and bold.
- Align repeated cart facts for fast scanning.

### Note on Font Substitutes

Use the platform sans with strong Cyrillic, clear small labels, and tabular prices.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points catalog gaps, 16 points module padding, and compact bottom navigation.

### Grid & Container

Home mixes wide campaigns, horizontal rails, and colored category tiles; product detail and cart use one structured column.

### Whitespace Philosophy

Discovery is intentionally dense and colorful; product detail, cart, and order state simplify around price, quantity, and commitment.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Catalog and checkout |
| 1 | Pale grouped panel | Search and address |
| 2 | Color campaign card | Loyalty and promotion |
| 3 | Sticky red action | Purchase commitment |

### Decorative Depth

Use product photography, soft 3D category objects, mascots, and saturated campaign fields; avoid heavy shadow around every item.

# Navigation appearance

Use four bottom destinations for Home, Catalog, Contact us, and Profile, with red active state and gray inactive icons.

# Components

### Buttons

Primary cart and checkout actions use red rounded pills; campaign actions may use white pills over green; secondary controls stay pale.

### Cards & Containers

Product rows align image, promotion, price, quantity, and removal; campaign cards combine short offer, mascot or product art, and one action.

### Inputs & Forms

Search is a pale prominent field with barcode entry; checkout rows use grouped surfaces and native controls styled with red focus and clear labels.

# Imagery and icons

Use product photography, soft 3D category objects, mascots, and saturated campaign fields; avoid heavy shadow around every item.

Contain products in clean square or portrait crops; use mascots and dimensional icons as isolated objects inside clear promotional panels.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep discount, combo, stock, item count, total, payment, confirmation, delivery time, and add-to-order cutoff near the relevant action.

# iOS adaptation

### Touch Targets

Navigation, delivery mode, search tools, quantity controls, campaign actions, and checkout remain at least 44 points.

### Collapsing Strategy

Preserve product, price, quantity, delivery, total, and checkout action; reduce campaigns, games, and recommendations first.

### Image Behavior

Contain product photography without distortion and preserve text-safe areas around mascots and promotional art.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't make every category tile red or green.
- Don't let games and mascots obscure grocery decisions.
- Don't add heavy borders or shadows to every product row.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
