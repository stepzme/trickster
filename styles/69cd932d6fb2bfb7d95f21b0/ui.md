<design-context>
---
version: alpha
name: WB-Taxi-design-analysis
description: "A map-first ride interface built from a bright violet-to-magenta action gradient, translucent white route sheets, soft lavender canvas, black active-trip panels, compact vehicle cards, and minimal list-based account screens. Map context remains visible while each next decision rises from the bottom."

colors:
  primary: "#A91DFF"
  on-primary: "#FFFFFF"
  primary-start: "#7F25FF"
  primary-end: "#E410F2"
  primary-pressed: "#8A17D6"
  ink: "#151518"
  ink-muted: "#73737A"
  ink-subtle: "#A7A7AE"
  canvas: "#F4F2F8"
  surface-1: "#FFFFFF"
  surface-2: "#F7F6FA"
  active-surface: "#08080A"
  active-panel: "#222225"
  hairline: "#E7E4EB"
  semantic-success: "#27956A"
  semantic-warning: "#E2A23B"
  semantic-danger: "#E05259"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 19px, fontWeight: 650, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  route-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  ride-class-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 12px }
  trip-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  active-trip-sheet: { backgroundColor: "{colors.active-surface}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
---

## Overview

WB Taxi keeps map context primary and turns each ride decision into a compact bottom sheet. Violet gradient action, translucent white layers, and a black driver-search state form the core rhythm.

## Colors

### Brand & Accent

Use a violet-to-magenta gradient for Order, Continue, and active pickup labels. Keep secondary controls black, white, or neutral gray.

### Surface

Use the map as the base, translucent white route fields and sheets above it, pale lavender for profile screens, and black for active driver search.

### Text

Use near-black for addresses and ride details, medium gray for hints, and white on gradient or black active-trip surfaces.

### Semantic

Use green for successful payment or location confirmation, amber for delayed matching, red for cancellation or route failure, and violet for neutral progress.

## Typography

### Font Family

Use a modern system sans with clear Cyrillic address forms and tabular prices.

### Hierarchy

Use 24–30px onboarding headings, 19px sheet headings, 14–16px addresses and actions, and 10–12px class or route metadata.

### Principles

Prioritize pickup, destination, class, price, and next action. Keep map labels and secondary explanations lighter.

### Note on Font Substitutes

Use SF Pro or Inter with 600–700 headings and regular body weights.

## Layout

### Spacing System

Use a 4px base, 12–16px sheet padding, 8px gaps between route rows, and 12px between ride-class cards.

### Grid & Container

The map fills the screen. Route fields sit at top or bottom; class selection uses two columns; Profile becomes a one-column service sheet.

### Whitespace Philosophy

Let the map provide visual space. Sheets should contain only the current decision and avoid carrying unrelated account content.

## Elevation & Depth

Use translucent white sheets, soft blur, rounded map overlays, and a dark scrim during driver search. Avoid stacked decorative cards.

### Decorative Depth

Use a single glossy matching bubble or light bloom around the pickup pin during driver search. Keep all other depth functional.

## Shapes

### Border Radius Scale

Use 9px compact fields, 13px class cards, 18px profile groups, 24px bottom sheets, and pills for map labels and primary actions.

### Photography & Illustration Geometry

Vehicle images are isolated side views inside white cards. Maps remain uncropped beneath sheets; onboarding graphics stay in a single wide banner.

## Components

### Buttons

The primary action is a full-width violet gradient rectangle with rounded corners. Secondary close or cancel controls are white, gray, or charcoal. Native controls must inherit the gradient, radius, and type hierarchy.

### Pricing Tabs

Economy and Comfort appear as side-by-side cards with vehicle image, label, and price; selected state gains stronger contrast rather than a heavy border.

### Cards & Containers

Route details use one white rounded sheet. Profile uses grouped full-width rows with light dividers and no promotional card grid.

### Inputs & Forms

Pickup and destination are large rounded rows over the map. Payment and driver note open focused sheets with one clear completion action.

### Status & Build Page

Use map pins, pickup label, route-building feedback, driver-search bubble, cancellation state, payment selection, and support status in direct context.

### Navigation

There is no persistent tab bar. A profile shortcut on the map opens history, payment, settings, support, and app information.

### Footer

There is no footer. Legal, version, deletion, and support actions live in Profile or About.

## Do's and Don'ts

### Do

- Keep the map visible through the ordering flow.
- Show only the current ride decision in each sheet.
- Use gradient for the single next action.
- Make active search visibly distinct in black.

### Don't

- Do not cover the map with a full dashboard before booking.
- Do not use multiple competing gradient buttons.
- Do not overdecorate route and payment forms.
- Do not retain default native blue accents.

## Responsive Behavior

### Breakpoints

Phones use full map plus bottom sheet. Wider screens may use a fixed side panel for route and ride controls while preserving a large map.

### Touch Targets

Map pins, location fields, ride-class cards, profile shortcut, payment, note, order, and cancellation controls require at least 44px targets.

### Collapsing Strategy

Keep pickup, destination, selected class, price, and order action visible. Collapse payment, note, support, and settings into dedicated sheets.

### Image Behavior

Maps fill with native zoom and pan. Use `contain` for vehicle cutouts and `cover` only for a rare onboarding or regional banner.

## Iteration Guide

Start with first launch, map Home, pickup and destination, class choice, order, driver search, trip cancellation, Profile, payments, and history. Add support and account deletion afterward.

## Known Gaps

Nineteen catalog flows were reviewed by structure with complete representative scenarios across launch, Home, ride request, active trip, and Profile. One active-trip preview is video-only, so detailed ride motion remains less verified.

</design-context>

Use the design system above for all UI you generate.
