<design-context>
---
version: alpha
name: Telcell-Wallet-design-analysis
description: "A light multifunction wallet built from white surfaces, pale gray grouping, coral navigation accents, cyan balance actions, compact service grids, and glossy multicolor 3D promotional cards. The visual tone is airy and modern while finance, rewards, QR, and banking remain explicit."

colors:
  primary: "#F37A68"
  on-primary: "#FFFFFF"
  accent-cyan: "#54D4EA"
  accent-violet: "#7462DB"
  ink: "#25272B"
  ink-muted: "#777B81"
  ink-subtle: "#ADB0B5"
  canvas: "#F7F7F9"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F4"
  hairline: "#E5E6E9"
  semantic-success: "#34B87A"
  semantic-warning: "#F1B43A"
  semantic-danger: "#E95A61"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  wallet-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  promo-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 0 }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60px }
---

## Overview

Telcell Wallet is an airy finance utility with a colorful promotional layer. Coral and cyan guide action while white cards keep services, rewards, QR, and banking legible.

## Colors

### Brand & Accent

Coral marks active navigation, icons, and primary actions. Cyan supports add-money and status; violet and blue live mainly in promos.

### Surface

White cards sit on very pale gray. Modals use white over a neutral dimmed scrim.

### Text

Dark gray carries titles and values; medium gray carries instructions, terms, and inactive navigation.

### Semantic

Green confirms success, amber warns, and red marks failure. Coral remains a brand accent and needs explicit destructive labels.

## Typography

### Font Family

Use a neutral system sans with clear Latin, Armenian, and numerals.

### Hierarchy

Use 21–27px page headings, 15–17px module titles, 14px body, and 10–12px balance or service metadata.

### Principles

Keep balance, currency, limits, and reward cost explicit. Labels should remain short in the service grid.

### Note on Font Substitutes

Use SF Pro or Inter with an Armenian-capable fallback such as Noto Sans Armenian.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 10–12px card gaps, and 20–24px between wallet sections.

### Grid & Container

Home stacks paired balance cards, promo rails, service grid, and favorites. Banking and Profile use single-column lists.

### Whitespace Philosophy

Keep finance lists airy and simple; promo cards may be visually rich but remain contained.

## Elevation & Depth

White cards lift softly from gray. Promo objects add visual depth through material and lighting rather than shadowed chrome.

### Decorative Depth

Use glossy 3D objects and soft gradients inside promo cards only. Keep QR and transaction surfaces flat.

## Shapes

### Border Radius Scale

Promo and wallet cards use 16px, service tiles and buttons 12px, modals 12px, and status badges are pills.

### Photography & Illustration Geometry

Center 3D objects in rounded cards; use clean card artwork for banking. QR codes remain square with ample quiet zone.

## Components

### Buttons

Primary actions are coral with white text; add-money controls may be cyan circles. Native controls must inherit the same palette and geometry.

### Pricing Tabs

BON, QR, and service modes use compact text tabs with coral underline or active icon.

### Cards & Containers

Balance, pay-later, banking, reward, and profile cards each contain one clear domain. Service tiles stay icon-led and compact.

### Inputs & Forms

Payment and profile forms use pale fields with direct labels. Keep currency and limits adjacent to entered values.

### Status & Build Page

BON progress, account status, card attachment, payment, and ticket availability appear inline with the affected item.

### Navigation

Four bottom destinations persist across Home, BON, QR, and Banking. Coral identifies the current section.

### Footer

There is no footer. End tasks with bottom navigation or a contextual primary action.

## Do's and Don'ts

### Do

- Keep white finance surfaces calm.
- Use coral consistently for selection.
- Contain 3D art inside promotions.
- Preserve currency and reward units.

### Don't

- Do not decorate QR screens.
- Do not mix multiple gradients outside promos.
- Do not hide financial limits.
- Do not expose default blue controls.

## Responsive Behavior

### Breakpoints

Keep payments and banking single-column. Wider home screens may expand service and promo grids.

### Touch Targets

Service tiles, reward tabs, QR controls, banking rows, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Allow promo rails to scroll horizontally. Keep confirmation actions visible through long forms.

### Image Behavior

Use `contain` for 3D objects and bank cards; use `cover` only for promotional photography. Preserve QR quiet zones.

## Iteration Guide

Start with Home, balance cards, coral actions, four-tab navigation, services, QR, and Banking. Add BON, stories, partners, and profile utilities afterward.

## Known Gaps

The reviewed scenarios cover Home, services, transfers, tickets, BON, QR, Banking, Profile, and settings. Tablet layouts and every payment failure were not visible.

</design-context>

Use the design system above for all UI you generate.
