<design-context>
---
version: alpha
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
  display-xl: { fontFamily: Wolt Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0px }
  display-lg: { fontFamily: Wolt Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: Wolt Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: Wolt Sans, fontSize: 22px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: Wolt Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wolt Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wolt Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wolt Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wolt Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wolt Sans, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wolt Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wolt Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
---

## Overview

Wolt is a bright image-led marketplace where cyan actions, friendly rounded type, and structured commerce surfaces make discovery and checkout feel quick.

## Colors

Use white and pale cool gray for most UI, cyan for interaction, and food photography for richness.

### Brand & Accent

Use Wolt cyan for primary buttons, active navigation, links, delivery chips, and small badges.

### Surface

Use white cards on a near-white canvas, pale cyan utility surfaces, and translucent overlays over photography.

### Text

Use near-black for titles, slate gray for cuisine, fee, distance, and time, and faint gray for disabled states.

### Semantic

Use green for confirmed or available, amber for rewards and attention, and red for errors or destructive account actions.

## Typography

Rounded, sturdy headings support a friendly voice; working text stays compact and highly legible.

### Font Family

Use Wolt Sans or a rounded grotesk with broad counters.

### Hierarchy

Use 24–32px page and restaurant titles, 17–20px section headings, 14–16px item text, and 11–12px metadata.

### Principles

Lead with the restaurant or product name, keep fulfillment facts compact, and avoid verbose labels.

### Note on Font Substitutes

Use Arial Rounded or a softened grotesk for headings and Inter or SF Pro for body text.

## Layout

Use horizontal discovery shelves, two-up recommendation cards, full-width restaurant heroes, and single-column checkout rows.

### Spacing System

Use a 4px base, 12px card padding, 12px gaps, 16px gutters, and 24–32px section spacing.

### Grid & Container

Discovery mixes full-width banners with horizontal card rails; product sheets and checkout remain one focused column.

### Whitespace Philosophy

Keep control areas airy while allowing photography grids to feel abundant.

## Elevation & Depth

Use soft card shadows, sticky action bars, and modal dimming rather than heavy borders.

### Decorative Depth

Use mascot 3D, warm promotional gradients, reward coins, and subtle cyan tints only in marketing or reward modules.

## Shapes

Use rounded food cards, pill filters, circular icon controls, and softly clipped heroes.

### Border Radius Scale

Use 10px for chips, 14px for product cards, 18–22px for sheets and promotions, and pills for primary actions.

### Photography & Illustration Geometry

Food imagery uses generous cover crops; mascot art uses contained silhouettes. Avoid cropping essential dishes or logos.

## Components

Commerce components must preserve Wolt's cyan action hierarchy even when built from native primitives.

### Buttons

Primary buttons are cyan full-width rounded rectangles or pills with white text. Native controls must inherit fill, radius, and pressed darkening.

### Pricing Tabs

Use pale segmented chips for categories, filters, delivery modes, or times; selected state is cyan-tinted with darker text.

### Cards & Containers

Restaurant cards lead with photography then name, cuisine, fee, time, and rating. Product tiles keep price and add control close together.

### Inputs & Forms

Use clean white rows, pale filled search fields, and sheets for modifiers, address, notes, and payment.

### Status & Build Page

Show popular, sponsored, Wolt+, discount, scheduled, tracking, and reward states as compact labeled badges.

### Navigation

Use a five-item white bottom bar; active icons and labels are cyan while inactive items are gray.

### Footer

There is no footer. Order history, gift cards, support, settings, and account management live in Profile.

## Do's and Don'ts

Keep ordering fast and visual while separating promotion from fulfillment facts.

### Do

- Use authentic food photography.
- Keep add and checkout totals sticky.
- Show delivery fee and time early.
- Style native controls with Wolt cyan and rounded geometry.

### Don't

- Do not use default platform blue.
- Do not hide modifiers or fees.
- Do not replace products with illustration.
- Do not overuse mascot art in checkout.

## Responsive Behavior

Scale card density while preserving sticky commerce actions.

### Breakpoints

Phones use horizontal rails and one-column sheets; wider screens may pair menu categories with product content and cart summary.

### Touch Targets

Search, filters, add, quantity, cart, checkout, tracking, chat, and navigation targets require at least 44px.

### Collapsing Strategy

Keep restaurant identity, delivery facts, cart total, and primary action visible; collapse promotions and secondary recommendations first.

### Image Behavior

Use cover for food and store imagery, contain for products and mascot scenes, and stable aspect ratios to prevent list movement.

## Iteration Guide

Start with location, discovery, restaurant page, product modifiers, cart, checkout, and tracking. Add stores, Wolt+, rewards, gifts, and social ordering next.

## Known Gaps

Seventy-two flow structures and representative screens across onboarding, discovery, restaurant, product, checkout, tracking, and profile were reviewed. Video transitions and every support branch were not fully captured.

</design-context>

Use the design system above for all UI you generate.
