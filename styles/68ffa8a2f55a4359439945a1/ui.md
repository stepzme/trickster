<design-context>
---
version: alpha
name: Teremok-design-analysis
description: "A warm restaurant loyalty app built from white canvas, burgundy-red actions, peach loyalty cards, real food photography, and a charming hand-drawn pancake mascot universe. The interface is simple and airy, with friendly promotional art separated from practical ordering."

colors:
  primary: "#B3132F"
  on-primary: "#FFFFFF"
  primary-pressed: "#941026"
  wheat: "#E8B66E"
  peach: "#F6C79F"
  ink: "#171719"
  ink-muted: "#747579"
  ink-subtle: "#AAA9AC"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F6"
  hairline: "#E5E3E4"
  semantic-success: "#2CAE69"
  semantic-warning: "#E7A62A"
  semantic-danger: "#D83C49"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 33px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  loyalty-card: { backgroundColor: "{colors.peach}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  menu-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 8px }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60px }
---

## Overview

Teremok separates playful loyalty from practical ordering. Pancake characters and peach cards make the brand friendly, while red actions, white lists, and food photography keep purchase tasks direct.

## Colors

### Brand & Accent

Burgundy red carries active navigation, links, outlines, and cart actions. Wheat and peach support loyalty and mascot scenes.

### Surface

White is the primary surface; light gray separates fields and inactive controls. Loyalty uses warm peach panels.

### Text

Near-black carries headings and prices; gray supports location, time, and secondary labels.

### Semantic

Green confirms order progress, amber supports rewards, and red marks both brand and error, so destructive copy must be explicit.

## Typography

### Font Family

Use a neutral system sans for UI. Hand-drawn lettering belongs only inside campaign artwork.

### Hierarchy

Use 22–27px page headings, 16–17px section titles, 14px body, and 10–12px loyalty or order metadata.

### Principles

Keep level, cashback, coins, price, and restaurant context explicit. Avoid handwritten UI labels.

### Note on Font Substitutes

SF Pro or Inter are suitable. Preserve strong Cyrillic and clear price numerals.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 12px card gaps, and 20–24px between loyalty, coupon, campaign, and menu groups.

### Grid & Container

Home stacks loyalty and horizontal campaign rails. Menu uses horizontal categories and a two-column product grid; map fills the viewport.

### Whitespace Philosophy

Keep loyalty modules airy. Ordering may be denser, but food cards need clean separation.

## Elevation & Depth

Depth comes from white sheets, peach loyalty panels, photography, and a sticky red cart action rather than heavy shadow.

### Decorative Depth

Use hand-drawn characters, flat pastel banners, and warm restaurant scenes. Keep forms and map chrome flat.

## Shapes

### Border Radius Scale

Loyalty and campaign cards use 16px, fields and menu photos 12px, buttons 12px, and avatars or achievement marks are circular.

### Photography & Illustration Geometry

Use centered character scenes in banners and real food photography in rounded rectangles. Maps remain full bleed.

## Components

### Buttons

Primary order actions are burgundy-red with white text. Secondary controls use white with red outlines; native controls inherit this styling.

### Pricing Tabs

Delivery versus pickup and menu categories use compact segments with red selection.

### Cards & Containers

Loyalty cards show level and progress; promo cards use illustration; menu cards foreground photo, name, and price.

### Inputs & Forms

Restaurant search, coupon, and order fields use pale rounded inputs with direct labels.

### Status & Build Page

Order status, achievement progress, loyalty level, coupon validity, and restaurant availability appear near their related item.

### Navigation

Five bottom destinations persist across Home, Promotions, Order, Teremki, and Help. Red marks the active section.

### Footer

There is no footer. Ordering ends with a sticky cart or checkout action above navigation.

## Do's and Don'ts

### Do

- Keep mascot art warm and handmade.
- Use real food photography for menu items.
- Reserve red for action and identity.
- Preserve loyalty progress.

### Don't

- Do not put mascots inside checkout forms.
- Do not use handwritten fonts for UI data.
- Do not mix unrelated illustration styles.
- Do not hide restaurant context.

## Responsive Behavior

### Breakpoints

Keep ordering single-column on phones. Wider menus may add product columns while maintaining card proportions.

### Touch Targets

Navigation, coupons, menu cards, map controls, and order actions require at least 44px targets.

### Collapsing Strategy

Allow promotions and categories to scroll horizontally. Keep cart total and action pinned.

### Image Behavior

Use `cover` for food photography and `contain` for mascot artwork. Preserve map labels and pins.

## Iteration Guide

Start with Home loyalty card, red action system, five-tab navigation, restaurant selection, menu, and cart. Add achievements, campaigns, map, and support afterward.

## Known Gaps

The reviewed scenarios cover login, onboarding, Home, loyalty, QR, promotions, restaurants, menu, ordering, status, achievements, profile, and support. Tablet layouts and every payment failure were not visible.

</design-context>

Use the design system above for all UI you generate.
