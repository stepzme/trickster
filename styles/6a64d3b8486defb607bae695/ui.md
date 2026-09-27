<design-context>
---
version: alpha
name: WB-Bank-design-analysis
description: "A dense ecosystem bank mixing Wildberries hot magenta, dark green wallet panels, pale lilac canvas, white service tiles, bold black financial typography, and glossy 3D product art. The home screen behaves like a modular marketplace dashboard, while transfers and applications simplify into bright linear forms with one charcoal confirmation action."

colors:
  primary: "#E500C8"
  on-primary: "#FFFFFF"
  primary-pressed: "#BF00A9"
  secondary: "#25302D"
  secondary-pressed: "#151A19"
  ink: "#171719"
  ink-muted: "#6E6E75"
  ink-subtle: "#A3A3AA"
  canvas: "#F2EFF8"
  surface-1: "#FFFFFF"
  surface-2: "#F7F7F9"
  wallet-green: "#078552"
  mint: "#DFF5EC"
  lavender: "#F1DFFF"
  hairline: "#E6E3EA"
  semantic-success: "#159266"
  semantic-warning: "#E7A73A"
  semantic-danger: "#D94F59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.secondary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  wallet-card: { backgroundColor: "{colors.wallet-green}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  promo-banner: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 54px }
---

## Overview

WB Bank is a colorful but structured financial dashboard. Hot magenta establishes ecosystem identity, dark green anchors money, and white modular tiles organize a very broad product catalog.

## Colors

### Brand & Accent

Use hot magenta for brand, selected Bank navigation, discount progress, and promotional highlights. Dark charcoal owns decisive financial actions; green owns wallet value.

### Surface

Use pale lilac-gray canvas, white service tiles, green wallet cards, and soft pink or blue campaign panels.

### Text

Use near-black for amounts and titles, gray for terms and product detail, and white on green, magenta, or charcoal.

### Semantic

Use green for successful transfer and available value, red for debt or failure, amber for attention, and magenta only for brand or selection.

## Typography

### Font Family

Use a modern system sans with tabular figures for balances, rates, and payment amounts.

### Hierarchy

Use 32–40px amounts, 20–26px page headings, 14–17px actions and rows, and 10–12px terms or tile metadata.

### Principles

Keep discount, wallet balance, product rate, and next action visually distinct. Do not bold every service name equally.

### Note on Font Substitutes

Use SF Pro or Inter with 650–700 headings and tabular numeric figures.

## Layout

### Spacing System

Use a 4px base, 10–12px tile gaps, 12–16px phone gutters, and 24px between dashboard modules.

### Grid & Container

Home uses a discount/action grid, one wide wallet card, horizontal promotion rail, and two-column product tiles. Transaction screens reduce to one vertical form.

### Whitespace Philosophy

Home is intentionally dense but each tile contains one idea. Amount entry and confirmation screens should regain broad open space.

## Elevation & Depth

Use soft shadow and color separation for modular tiles. Forms and receipts stay mostly flat against white.

### Decorative Depth

Use glossy 3D product objects, magenta-violet gradients, and occasional spectral glow inside promotions. Keep money-entry controls undecorated.

## Shapes

### Border Radius Scale

Use 9px for compact controls, 13px for service tiles, 18px for wallet cards, 24px for sheets, and pills for discount and status labels.

### Photography & Illustration Geometry

Place angled 3D banking objects at tile edges with clear copy space. Show physical and virtual cards front-facing and proportionally accurate.

## Components

### Buttons

Primary transaction buttons are wide charcoal rounded rectangles. Promotional links may be magenta or green. Native controls must inherit this hierarchy and the WB radius system.

### Pricing Tabs

Card formats, plans, product modes, and rate choices use compact tabs or segmented labels with magenta or dark selected state.

### Cards & Containers

Wallet cards lead with balance and top-up. Service tiles contain one product name, one value or benefit, and at most one small icon or 3D object.

### Inputs & Forms

Transfer forms show amount first, then source, recipient, fee, comment, and quick amounts. Use pale filled rows and a persistent charcoal next action.

### Status & Build Page

Use clear discount level, wallet tier, card state, transfer result, savings rate, statement progress, unread count, and cashback status.

### Navigation

Retain the five-item marketplace dock with Bank highlighted in a magenta capsule. Keep bank-product settings local to their detail page.

### Footer

There is no footer. Certificates, documents, security, support, and terms live in product or settings screens.

## Do's and Don'ts

### Do

- Anchor Home with discount and wallet value.
- Separate discovery tiles from transaction forms.
- Keep amount and fee hierarchy explicit.
- Use one product object per promotion.

### Don't

- Do not use magenta as success or error.
- Do not crowd a tile with multiple financial offers.
- Do not carry 3D art into receipts.
- Do not leave native blue controls in the interface.

## Responsive Behavior

### Breakpoints

Phones show the modular dashboard and one financial task at a time. Wider screens may pair product list with detail while keeping forms narrow.

### Touch Targets

Tiles, quick actions, product cards, navigation, amount presets, selectors, and confirmation controls require at least 44px targets.

### Collapsing Strategy

Keep amount, source, recipient, rate or fee, and next action visible. Collapse documents, explanations, and secondary benefits into details.

### Image Behavior

Use `contain` for product renders, cards, icons, and partner marks. Use `cover` only for editorial campaign photography.

## Iteration Guide

Start with sign-in, Bank Home, wallet top-up, payments hub, phone transfer, receipt, card opening, savings, and settings. Add credit, insurance, wishlists, certificates, and advanced support afterward.

## Known Gaps

Eighty-two catalog flows were reviewed by structure with complete representative scenarios across launch, Home, transfer, card, and savings. Some promotional previews are video-only, so motion and rare secondary product branches are less visually verified.

</design-context>

Use the design system above for all UI you generate.
