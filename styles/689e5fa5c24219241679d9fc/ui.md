<design-context>
---
version: alpha
name: Yandex-Afisha-design-analysis
description: "A sharp culture-discovery system combining stark white and black, electric yellow purchase actions, full-bleed event photography, and expressive hand-drawn onboarding art. The interface is editorial at discovery and precise at seat selection and ticket management."

colors:
  primary: "#FFF200"
  on-primary: "#111111"
  primary-pressed: "#E6DA00"
  ink: "#151515"
  ink-muted: "#6C6C6C"
  ink-subtle: "#A6A6A6"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F3F3F3"
  surface-3: "#E8E8E8"
  hairline: "#DDDDDD"
  semantic-success: "#2AAA67"
  semantic-warning: "#F3A712"
  semantic-danger: "#D94A4A"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 40px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0px }
  display-lg: { fontFamily: YS Text, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: YS Text, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: YS Text, fontSize: 22px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px }
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

Yandex Afisha balances editorial entertainment discovery with precise ticket commerce. Photography leads, yellow converts, and black-and-white illustration explains.

## Colors

Build the shell from white and black; use electric yellow for price and purchase, while event photography supplies the rest.

### Brand & Accent

Use vivid yellow for CTA pills, highlights, and onboarding stages. Use black text on yellow.

### Surface

Use white canvases, pale gray filters and inactive actions, and black scrims over hero photography.

### Text

Use near-black for page text, white over dark imagery, medium gray for venue and date, and light gray for disabled purchase states.

### Semantic

Use colored seat dots for price zones, green for valid/complete, amber for limited availability, and red for problems or destructive actions.

## Typography

Strong sans-serif titles work with dense event information and expressive campaign art.

### Font Family

Use YS Text or a clean grotesk with confident bold weights and good Cyrillic.

### Hierarchy

Use 26–34px campaign titles, 20–24px event names, 16–18px section titles, 13–15px details, and 10–11px navigation labels.

### Principles

Keep event, venue, date, and price distinct; avoid long copy over photography.

### Note on Font Substitutes

Use SF Pro or Inter, with 700–800 for hero and event titles.

## Layout

Use a full-width hero carousel above personalized shelves, then single-column event details and map-based seat selection.

### Spacing System

Use a 4px base, 12px compact gaps, 16px gutters, and 24–32px between event sections.

### Grid & Container

Heroes span the viewport; discovery shelves show two-up cards; seat maps occupy the canvas with a bottom order tray.

### Whitespace Philosophy

Keep editorial areas spacious around titles, while maps and ticket summaries may become deliberately dense.

## Elevation & Depth

Use image scrims, modal sheets, and the floating seat-selection tray for depth; keep ordinary rows flat.

### Decorative Depth

Use electric yellow fields, stark black line art, and selective event lighting from photography.

## Shapes

Use rounded hero corners sparingly, pill CTAs, circular seat markers, and compact rectangular filters.

### Border Radius Scale

Use 8px for filters, 12–16px for cards and sheets, 20px for large action surfaces, and pills for prices.

### Photography & Illustration Geometry

Use full-bleed landscape event photography with bottom-aligned copy; illustrations use centered black contours on yellow or white.

## Components

Native controls must adopt Afisha's black/yellow styling and never retain generic platform blue.

### Buttons

Primary purchase buttons are bright yellow pills with black labels. Secondary actions are black or pale gray depending on emphasis.

### Pricing Tabs

Use pale chips for date and event type; on seat maps, color-coded price legends act as the selection tabs.

### Cards & Containers

Event cards feature image, title, venue/date, and price. Ticket cards expose status and actions without decorative imagery.

### Inputs & Forms

Use pale search and promo fields, compact selector rows, and bottom sheets for session, seat, and payment details.

### Status & Build Page

Show favorite, available, selected seat, ticket, refund, promo, and subscription states with text plus icons or color.

### Navigation

Use a five-item white bottom bar for Home, My tickets, Favorites, Search, and Gift; active state is black with clear label.

### Footer

There is no footer. Settings, support, subscription, and app information live in Profile.

## Do's and Don'ts

Preserve the distinction between emotional discovery and exact ticketing.

### Do

- Lead discovery with authentic event imagery.
- Keep price CTAs yellow.
- Make seat colors legible with labels.
- Style native controls in the Afisha visual system.

### Don't

- Do not use default blue actions.
- Do not decorate ticket data with unrelated art.
- Do not place yellow text on white.
- Do not hide date, venue, or final ticket count.

## Responsive Behavior

Give maps and media more room without changing decision order.

### Breakpoints

Phones use edge-to-edge heroes and full-screen maps; larger widths may pair event detail with booking or map with summary.

### Touch Targets

Filter, favorite, search, date, seat, zoom, checkout, ticket, and navigation targets require at least 44px.

### Collapsing Strategy

Keep event name, date, venue, price, selected seats, and primary action visible; collapse reviews and editorial detail first.

### Image Behavior

Use cover for hero photos and posters, preserve focal faces, and apply a bottom scrim under white copy.

## Iteration Guide

Start with onboarding, Home, filters, event detail, session/seat selection, purchase, My tickets, and Favorites. Add gifting, refund, reviews, and profile next.

## Known Gaps

Twenty-five flow structures and representative screens across onboarding, Home, event detail, ticket purchase, My tickets, and Profile were reviewed. Seat-map gestures and payment motion were not exhaustively captured.

</design-context>

Use the design system above for all UI you generate.
