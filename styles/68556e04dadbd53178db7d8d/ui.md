<design-context>
---
version: 1
platform: iOS
name: VkusVill-design-analysis
description: "A bright grocery and loyalty interface built from fresh green actions, bold black headings, white commerce cards, yellow price highlights, pastel product collages, and dense but friendly catalog grids. It feels wholesome, practical, and personal."

colors:
  primary: "#27B667"
  on-primary: "#FFFFFF"
  primary-pressed: "#1C9653"
  ink: "#171916"
  ink-muted: "#70746F"
  ink-subtle: "#A6AAA4"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F6F3"
  accent-yellow: "#FFD84A"
  accent-lavender: "#8A68F3"
  hairline: "#E0E4DE"
  semantic-success: "#27B667"
  semantic-warning: "#F0A637"
  semantic-danger: "#D94B58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 750, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  loyalty-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  category-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VkusVill uses bright white shopping surfaces, confident green actions, yellow price emphasis, and pastel product collages. Dense catalog content stays approachable through clear card hierarchy.

# Non-negotiable visual invariants

- Sampled screens consistently use product photography color-accurate.
- The reference consistently shows show unit and current price clearly.
- The reference consistently shows preserve fulfillment context.
- Imagery consistently uses reuse pastel collage art direction.
- The reference consistently shows a bright grocery and loyalty interface built from fresh green actions.
- The reference consistently shows bold black headings.
- The reference consistently shows white commerce cards.
- The reference consistently shows yellow price highlights.

# Color and surfaces

### Brand & Accent

Fresh green owns add, loyalty, delivery, and active navigation. Yellow highlights prices or savings; lavender marks in-store scanning.

### Surface

Use white for shopping and loyalty, pale gray for fields and grouped utilities, and pastel fields for category imagery.

### Text

Near-black carries product names and totals; gray carries unit price, availability, and supporting copy.

### Semantic

Green confirms availability and success, amber warns, and red marks removal or failure. Yellow price highlights are not warnings.

# Typography

### Font Family

Use a bold friendly system sans with tabular figures for prices and quantities.

### Hierarchy

Use 24–38 points campaign titles, 20 points sections, 14–16 points products and actions, and 10–12 points rating or unit detail.

### Principles

Keep product, quantity, current price, old price, and discount distinguishable. Avoid excessive weight inside dense grids.

### Note on Font Substitutes

Use Inter or SF Pro with tabular numerals and strong 700–800 page headings.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–10 points product gaps, and 20–24 points between catalog sections.

### Grid & Container

Catalog uses horizontal product rails and a two-column category grid. Cart and checkout use a full-width sheet with stacked rows.

### Whitespace Philosophy

Use compact product cards but generous section boundaries. Keep checkout calmer than discovery.

Surface hierarchy observed in the source:

Use soft card lift, large rounded sheets, and sticky delivery or checkout bars. Product cutouts provide subtle depth.

### Decorative Depth

Use pastel product collages, flat benefit symbols, and minimal soft shadow. Avoid glossy or cinematic effects.

# Navigation appearance

Use five bottom destinations for My Card, Catalog, Stores, Profile, and Support. Keep cart and fulfillment within shopping context.

# Components

### Buttons

Add-to-cart and checkout actions are green rectangles; scan uses lavender. Native controls must inherit brand accents and compact commerce geometry.

### Cards & Containers

Product cards pair image, rating, stock, name, price, discount, and add. Loyalty cards explain one benefit with one action.

### Inputs & Forms

Search, address, recipient, and payment fields use pale fills with strong focus and clear validation.

# Imagery and icons

Use pastel product collages, flat benefit symbols, and minimal soft shadow. Avoid glossy or cinematic effects.

Product images use clean `contain` cutouts. Category collages arrange real products on pastel tiles with safe text space.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Availability, favorite, cart quantity, discount, delivery window, substitution, preparation, and courier state appear in context.

# iOS adaptation

### Touch Targets

Product cards, add controls, quantities, filters, benefits, navigation, and checkout require at least 44 points targets.

### Collapsing Strategy

Keep product, price, quantity, fulfillment, and total visible. Collapse nutrition, long descriptions, and secondary benefits.

### Image Behavior

Use `contain` for product cutouts and category collages; use `cover` only for editorial lifestyle banners.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not crowd product cards with promotions.
- Do not hide substitutions or stock.
- Do not use yellow as an error.
- Do not expose default native styling.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

# Known gaps

The inspected catalog documents 41 flows across onboarding, home, favorites, catalog, checkout, tracking, and settings. Some substitution and failed-delivery branches are less represented.

</design-context>
