<design-context>
---
version: 1
platform: iOS
name: Vkusno-I-tochka-design-analysis
description: "A fast-food loyalty and ordering interface built from dark forest-green branding, vivid orange actions, bold black headings, white commerce surfaces, real food photography, and friendly flat service illustrations. It feels energetic, practical, and promotional."

colors:
  primary: "#F58200"
  on-primary: "#FFFFFF"
  primary-pressed: "#D76C00"
  brand-green: "#174F35"
  ink: "#171816"
  ink-muted: "#6E716D"
  ink-subtle: "#A5A8A3"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F4F5F2"
  hairline: "#E1E3DF"
  semantic-success: "#2F9C5C"
  semantic-warning: "#F2A536"
  semantic-danger: "#D94A56"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 750, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 }
  loyalty-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.brand-green}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Vkusno I Tochka combines a forest-green brand frame, orange conversion actions, real food photography, and cheerful flat service art. Loyalty and ordering remain clearly separated but visually connected.

# Non-negotiable visual invariants

- The reference consistently shows food photography accurate.
- The reference consistently shows make offer conditions visible.
- The reference consistently shows reserve orange for conversion.
- Imagery consistently uses reuse the flat brand illustration family.
- The reference consistently shows a fast-food loyalty and ordering interface built from dark forest-green branding.
- The reference consistently shows vivid orange actions.
- The reference consistently shows bold black headings.
- The reference consistently shows white commerce surfaces.

# Color and surfaces

### Brand & Accent

Orange owns add, redeem, price badge, and campaign emphasis. Forest green anchors headers, logos, and loyalty identity.

### Surface

Use white for menus and promotions, pale gray for grouped utilities, and green for persistent brand bars.

### Text

Near-black carries product and promotion titles; gray carries conditions and location. White appears on green and orange.

### Semantic

Green confirms success, amber warns, and red marks errors. Orange remains conversion and reward, not failure.

# Typography

### Font Family

Use a bold friendly system sans with strong Cyrillic support.

### Hierarchy

Use 24–38 points onboarding and campaign titles, 16–20 points sections, 14–16 points products, and 10–12 points conditions.

### Principles

Make price, product name, benefit, and expiration scannable. Keep legal promotion copy subordinate but readable.

### Note on Font Substitutes

Use Inter or SF Pro with 700–800 headings and tabular price figures.

# Screen composition

### Spacing System

Use a 4 points base, 16 points gutters, 10–12 points card gaps, and 24 points between home sections.

### Grid & Container

Home stacks loyalty, promo rails, and order entry. Menu uses a two-column product grid below fulfillment and category controls.

### Whitespace Philosophy

Keep food cards bright and open. Use stronger density only in promotion lists and cart rows.

Surface hierarchy observed in the source:

Use light card shadow, white sheets, and sticky bottom actions. Food photography provides most depth.

### Decorative Depth

Flat green-orange illustrations and real food imagery may share a campaign card, but avoid glossy or glass-heavy effects.

# Navigation appearance

Use five bottom destinations for Home, Promotions, Menu, Map, and More. Keep fulfillment controls inside Menu.

# Components

### Buttons

Add, redeem, and order actions are orange rectangles or compact plus buttons. Native controls must inherit orange focus and brand typography.

### Cards & Containers

Promo cards keep offer, short value, expiry, and media together. Product cards pair cutout food, name, price, and add action.

### Inputs & Forms

Phone, promo code, location, and checkout fields use simple underlined or pale filled styling with clear errors.

# Imagery and icons

Flat green-orange illustrations and real food imagery may share a campaign card, but avoid glossy or glass-heavy effects.

Product photography uses clean cutouts on white. Illustrations use centered rounded shapes and generous safe space.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Bonus balance, QR readiness, location eligibility, stock, cart quantity, order state, and promotion expiry appear in context.

# iOS adaptation

### Touch Targets

Promo cards, product add controls, tabs, QR actions, navigation, and checkout require at least 44 points targets.

### Collapsing Strategy

Keep fulfillment, restaurant, product, price, and cart visible. Collapse long promotion terms into details.

### Image Behavior

Use `contain` for food cutouts and illustrations; use `cover` for lifestyle campaign photography.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not replace product photos with drawings.
- Do not crowd loyalty and order actions together.
- Do not hide location eligibility.
- Do not use unstyled native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
