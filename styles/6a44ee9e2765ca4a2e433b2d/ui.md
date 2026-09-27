<design-context>
---
version: alpha
name: Whoosh-design-analysis
description: "A cinematic dark mobility interface built from charcoal maps, smoked translucent sheets, brushed-metal controls, ember-orange primary actions, compact white telemetry, and an industrial sci-fi campaign layer. Vehicle discovery and active rides stay on the map while pricing, insurance, parking, and subscription details rise in dense rounded panels."

colors:
  primary: "#FF6548"
  on-primary: "#FFFFFF"
  primary-pressed: "#E44D34"
  ink: "#FFFFFF"
  ink-muted: "#B7B5B8"
  ink-subtle: "#807E82"
  canvas: "#171719"
  surface-1: "#302E31"
  surface-2: "#403D40"
  metallic-light: "#A8A6A5"
  metallic-dark: "#5D5A5B"
  map: "#16181A"
  accent-blue: "#2B91FF"
  hairline: "#FFFFFF1F"
  semantic-success: "#31B97D"
  semantic-warning: "#F3B34D"
  semantic-danger: "#FF5E55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 18px }
  vehicle-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 14px }
  tariff-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  map-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Whoosh uses a dark map and smoked metal interface so vehicle state and ride action remain visible at night. Ember-orange decisions and industrial campaign objects provide the only strong warmth.

## Colors

### Brand & Accent

Use ember orange or coral-red for Start, Finish, verify parking, and active promotion. Electric blue marks current location; white marks the selected vehicle.

### Surface

Use near-black map and canvas, translucent graphite sheets, mid-gray tariff tiles, and brushed-silver secondary controls.

### Text

Use white for titles and ride data, cool gray for terms and helper text, and black only on the lightest metal surfaces.

### Semantic

Use green for completed steps and safe parking, amber for low charge or caution, red for problems, and blue strictly for location.

## Typography

### Font Family

Use a compact modern system sans; campaign moments may use a squared display face without changing form text.

### Hierarchy

Use 32–42px campaign statements, 20–26px sheet headings, 14–17px actions and ride values, and 10–12px telemetry.

### Principles

Prioritize vehicle ID, charge, time, price, parking, and the current ride action. Keep conditions and insurance visually secondary.

### Note on Font Substitutes

Use Inter or SF Pro for the product UI and a restrained squared sans only for campaign headlines.

## Layout

### Spacing System

Use a 4px base, 12–16px sheet padding, 8px between tariff tiles, and 12px between ride controls.

### Grid & Container

The map fills the screen. Vehicle data and active ride controls occupy a bottom sheet; three tariff options form a horizontal row.

### Whitespace Philosophy

Keep map controls compact and clustered. Inside sheets, allow each ride fact and safety action its own row.

## Elevation & Depth

Use smoked translucency, metallic gradients, inner highlights, and dark scrims. Sheets should feel physical without obscuring the map.

### Decorative Depth

Use original mechanical emblems, ember glow, weathered steel, and focused campaign light around scan, parking, and special-mode moments.

## Shapes

### Border Radius Scale

Use 9px for compact fields, 13px tariff tiles, 18px menu cards, 24px ride sheets, and pills for major actions.

### Photography & Illustration Geometry

Keep campaign characters full-height and mechanical emblems circular or radial. Vehicle imagery remains a clean thumbnail or map marker.

## Components

### Buttons

Primary ride actions are orange-red textured pills; secondary reserve, pause, or finish variants are brushed gray. Native controls must inherit this material, radius, and contrast.

### Pricing Tabs

Tariffs and subscription offers use compact dark cards with time, included value, and price. Selected state uses green or orange emphasis.

### Cards & Containers

Vehicle sheets combine circular thumbnail, charge, ID, tariff row, insurance, payment, promo, support, and action bar.

### Inputs & Forms

Phone and code entry use dark native-style fields with white type. Promo, payment, and profile forms remain simple charcoal rows.

### Status & Build Page

Show charge, lock state, reservation, ride time, price, parking validation, trip completion, balance, and subscription status directly.

### Navigation

Use bottom destinations for Menu, Map, and traffic rules. Map actions include search, wallet, layers, zoom, location, and scan.

### Footer

There is no footer. FAQ, terms, about, logout, and support live in Menu.

## Do's and Don'ts

### Do

- Keep the map visible across the ride lifecycle.
- Use orange for the current decisive action.
- Distinguish ride state through the bottom sheet.
- Keep safety and parking explicit.

### Don't

- Do not apply campaign art to payment or legal text.
- Do not use multiple bright actions at once.
- Do not hide vehicle charge or price.
- Do not leave mismatched native blue controls.

## Responsive Behavior

### Breakpoints

Phones use full map plus bottom sheet. Wider screens may place the ride sheet at the side while preserving a large interactive map.

### Touch Targets

Markers, scan, map controls, tariffs, insurance, payment, start, pause, finish, parking, and navigation require at least 44px targets.

### Collapsing Strategy

Keep vehicle ID, charge, time, price, safety state, and current action visible. Collapse tariff detail, support, and terms.

### Image Behavior

Maps fill the viewport. Use `contain` for mechanical emblems and vehicle art, and `cover` only for campaign character backgrounds.

## Iteration Guide

Start with login, dark map, vehicle detail, tariff and insurance, scan/start, active ride, finish and parking proof, Menu, balance, history, payment, and support. Add subscriptions and themed tasks afterward.

## Known Gaps

Forty-two catalog flows were reviewed by structure with complete representative scenarios across launch, map, vehicle detail, start, finish, Menu, and subscriptions. Several preview entries are video-only, so campaign and ride motion are less fully verified.

</design-context>

Use the design system above for all UI you generate.
