<design-context>
---
version: 1
platform: iOS
name: Wolt-design-analysis
description: "A bright delivery marketplace using cyan-blue as its decisive accent, crisp white canvases, bold rounded headings, photo-rich restaurant cards, and compact metadata. Friendly polished 3D mascot scenes appear in onboarding and rewards while commerce stays clean and fast."

colors:
  primary: "#00C2E8"
  on-primary: "#FFFFFF"
  primary-pressed: "#00A8CC"
  ink: "#202125"
  ink-muted: "#6A6D70"
  ink-subtle: "#A0A4A7"
  canvas: "#F7F8F8"
  surface-1: "#FFFFFF"
  surface-2: "#EEF4F5"
  surface-3: "#E1EAEC"
  hairline: "#D9E0E2"
  semantic-success: "#1FAF63"
  semantic-warning: "#F5A623"
  semantic-danger: "#E74C58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Wolt Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0 }
  display-lg: { fontFamily: Wolt Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: Wolt Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: Wolt Sans, fontSize: 22, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: Wolt Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wolt Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wolt Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wolt Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wolt Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wolt Sans, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wolt Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wolt Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Wolt is a bright image-led marketplace where cyan actions, friendly rounded type, and structured commerce surfaces make discovery and checkout feel quick.

# Non-negotiable visual invariants

- The reference consistently shows authentic food photography.
- The reference consistently shows add and checkout totals sticky.
- The reference consistently shows show delivery fee and time early.
- The reference consistently shows style native controls with Wolt cyan and rounded geometry.
- The reference consistently shows a bright delivery marketplace using cyan-blue as its decisive accent.
- The reference consistently shows crisp white canvases.
- The reference consistently shows bold rounded headings.
- Imagery consistently uses photo-rich restaurant cards.

# Color and surfaces

Use white and pale cool gray for most UI, cyan for interaction, and food photography for richness.

### Brand & Accent

Use Wolt cyan for primary buttons, active navigation, links, delivery chips, and small badges.

### Surface

Use white cards on a near-white canvas, pale cyan utility surfaces, and translucent overlays over photography.

### Text

Use near-black for titles, slate gray for cuisine, fee, distance, and time, and faint gray for disabled states.

### Semantic

Use green for confirmed or available, amber for rewards and attention, and red for errors or destructive account actions.

# Typography

Rounded, sturdy headings support a friendly voice; working text stays compact and highly legible.

### Font Family

Use Wolt Sans or a rounded grotesk with broad counters.

### Hierarchy

Use 24–32 points page and restaurant titles, 17–20 points section headings, 14–16 points item text, and 11–12 points metadata.

### Principles

Lead with the restaurant or product name, keep fulfillment facts compact, and avoid verbose labels.

### Note on Font Substitutes

Use Arial Rounded or a softened grotesk for headings and Inter or SF Pro for body text.

# Screen composition

Use horizontal discovery shelves, two-up recommendation cards, full-width restaurant heroes, and single-column checkout rows.

### Spacing System

Use a 4 points base, 12 points card padding, 12 points gaps, 16 points gutters, and 24–32 points section spacing.

### Grid & Container

Discovery mixes full-width banners with horizontal card rails; product sheets and checkout remain one focused column.

### Whitespace Philosophy

Keep control areas airy while allowing photography grids to feel abundant.

Surface hierarchy observed in the source:

Use soft card shadows, sticky action bars, and modal dimming rather than heavy borders.

### Decorative Depth

Use mascot 3D, warm promotional gradients, reward coins, and subtle cyan tints only in marketing or reward modules.

# Navigation appearance

Use a five-item white bottom bar; active icons and labels are cyan while inactive items are gray.

# Components

### Buttons

Primary buttons are cyan full-width rounded rectangles or pills with white text. Native controls must inherit fill, radius, and pressed darkening.

### Cards & Containers

Restaurant cards lead with photography then name, cuisine, fee, time, and rating. Product tiles keep price and add control close together.

### Inputs & Forms

Use clean white rows, pale filled search fields, and sheets for modifiers, address, notes, and payment.

# Imagery and icons

Use mascot 3D, warm promotional gradients, reward coins, and subtle cyan tints only in marketing or reward modules.

Food imagery uses generous cover crops; mascot art uses contained silhouettes. Avoid cropping essential dishes or logos.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show popular, sponsored, Wolt+, discount, scheduled, tracking, and reward states as compact labeled badges.

# iOS adaptation

### Touch Targets

Search, filters, add, quantity, cart, checkout, tracking, chat, and navigation targets require at least 44 points.

### Collapsing Strategy

Keep restaurant identity, delivery facts, cart total, and primary action visible; collapse promotions and secondary recommendations first.

### Image Behavior

Use cover for food and store imagery, contain for products and mascot scenes, and stable aspect ratios to prevent list movement.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not use default platform blue.
- Do not hide modifiers or fees.
- Do not replace products with illustration.
- Do not overuse mascot art in checkout.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

Seventy-two flow structures and representative screens across onboarding, discovery, restaurant, product, checkout, tracking, and profile were reviewed. Video transitions and every support branch were not fully captured.

</design-context>
