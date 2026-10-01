<design-context>
---
version: 1
platform: iOS
name: Dodo-Pizza-design-analysis
description: "A photo-led food ordering interface with a white canvas, vivid orange purchase actions, black editorial product names, soft pink and orange food backdrops, oversized dish photography, horizontal category strips, stacked checkout sheets, and playful map markers for live order tracking."
colors:
  primary: "#FF6900"
  on-primary: "#FFFFFF"
  primary-soft: "#FFF0E7"
  accent: "#F05BA6"
  ink: "#171717"
  ink-muted: "#747474"
  ink-subtle: "#B0B0B0"
  canvas: "#FFFFFF"
  surface-1: "#F5F6F8"
  surface-2: "#FFF5F0"
  hairline: "#E7E7E8"
  semantic-success: "#1FAD59"
  semantic-danger: "#E44D4D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 750, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 18, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
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
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  story-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8 }
  order-sheet: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Dodo Pizza makes food photography the interface. Large dishes sit on clean white or softly colored fields, while orange consistently marks add, order, and configuration actions.

**Key Characteristics:**
- White photo-led ordering canvas.
- Orange purchase and configuration actions.
- Large isolated dish photography.
- Horizontal story and category navigation.
- Layered white sheets for cart and delivery.

# Non-negotiable visual invariants

- Imagery consistently uses white photo-led ordering canvas.
- The reference consistently shows orange purchase and configuration actions.
- The reference consistently shows large isolated dish photography.
- Navigation consistently uses horizontal story and category navigation.
- The reference consistently shows layered white sheets for cart and delivery.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Add, order, customize, and active state.
- **Primary Soft** ({colors.primary-soft}): Selected or supporting food surfaces.
- **Pink Accent** ({colors.accent}): New items and dessert atmospheres.

### Surface
- **Canvas** ({colors.canvas}): Menu, cart, and order screens.
- **Surface 1** ({colors.surface-1}): Product cards and neutral selection.
- **Surface 2** ({colors.surface-2}): Warm food and promotion background.
- **Hairline** ({colors.hairline}): Checkout and settings boundaries.

### Text
- **Ink** ({colors.ink}): Dish names, prices, and totals.
- **Ink Muted** ({colors.ink-muted}): Ingredients and delivery metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled categories and notes.

### Semantic
- **Success** ({colors.semantic-success}): Accepted, completed, or available state.
- **Danger** ({colors.semantic-danger}): Removal, error, and cancel state.
- **Overlay** ({colors.semantic-overlay}): Product and checkout sheets.

# Typography

### Font Family
- **SF Pro Display** — campaign and product headings.
- **SF Pro Text** — descriptions, checkout, and order status.
- **SF Mono** — order number and verification code.

### Hierarchy
Use 32–38 points heavy for campaign statements, 22 points for sheet titles, 18 points for product names, 14 points body, and 10–12 points metadata.

### Principles
- Let dish name and price follow the image.
- Keep ingredient copy readable but secondary.
- Make add and total actions unmistakable.
- Avoid dense typography over food photography.

### Note on Font Substitutes
Use the platform system sans or **Inter** with strong display weights and tabular prices.

# Screen composition

### Spacing System
Use a 4 points base, 16 points gutters, 12 points product gaps, 16 points sheet padding, and 24 points between menu categories.

### Grid & Container
Home stacks address, stories, category rails, and large product cards. Product detail becomes immersive media; checkout stacks sliding sheets.

### Whitespace Philosophy
Give each dish enough open space to feel appetizing; use denser grouping only in cart, add-ons, and checkout.

Surface hierarchy observed in the source:

Use large photography and layered sheets rather than card shadows. Tracking gains depth through map markers and a white status panel.

### Decorative Depth
Food photography, colored studio backdrops, and occasional map miniatures carry the visual depth.

# Navigation appearance

Menu category navigation stays near the top; profile and order status remain reachable without obscuring the menu.

# Components

### Buttons

Use orange filled pills for adding, ordering, and configuring; white or neutral controls handle close, address, and secondary choice.

### Cards & Containers

Use story tiles, hero product cards, immersive product detail, cart rows, add-on rails, and layered checkout sheets.

### Inputs & Forms

Address, delivery time, payment, promo code, and recipient settings live in separate readable rows or sheets.

# Imagery and icons

Food photography, colored studio backdrops, and occasional map miniatures carry the visual depth.

Shoot or render food as an isolated hero on soft colored fields. Preserve natural proportions, texture, and generous negative space.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show minimum order, accepted, cooking, courier, delivered, bonus, promo, and verification state with explicit labels.

# iOS adaptation

### Touch Targets

Keep address, stories, categories, products, modifiers, quantity, checkout, and tracking actions at least 44 points.

### Collapsing Strategy

Preserve address, active category, current product, cart total, and primary order action. Move stories and promotions below the menu task.

### Image Behavior

Use cover only for designed full-bleed product scenes; otherwise contain dishes and preserve plate or packaging boundaries.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't crop dishes so aggressively that portions are unclear.
- Don't cover food with long text.
- Don't hide minimum order or final total.
- Don't turn every food background orange.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
