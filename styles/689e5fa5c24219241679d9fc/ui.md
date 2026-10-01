<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: YS Text, fontSize: 40, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0 }
  display-lg: { fontFamily: YS Text, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: YS Text, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: YS Text, fontSize: 22, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999 }
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

Yandex Afisha balances editorial entertainment discovery with precise ticket commerce. Photography leads, yellow converts, and black-and-white illustration explains.

# Non-negotiable visual invariants

- Imagery consistently uses lead discovery with authentic event imagery.
- The reference consistently shows price CTAs yellow.
- The reference consistently shows make seat colors legible with labels.
- The reference consistently shows style native controls in the Afisha visual system.
- The reference consistently shows a sharp culture-discovery system combining stark white and black.
- The reference consistently shows electric yellow purchase actions.
- The reference consistently shows full-bleed event photography.
- Expressive hand-drawn onboarding art. The interface is editorial at discovery and precise at seat selection and ticket management.

# Color and surfaces

Build the shell from white and black; use electric yellow for price and purchase, while event photography supplies the rest.

### Brand & Accent

Use vivid yellow for CTA pills, highlights, and onboarding stages. Use black text on yellow.

### Surface

Use white canvases, pale gray filters and inactive actions, and black scrims over hero photography.

### Text

Use near-black for page text, white over dark imagery, medium gray for venue and date, and light gray for disabled purchase states.

### Semantic

Use colored seat dots for price zones, green for valid/complete, amber for limited availability, and red for problems or destructive actions.

# Typography

Strong sans-serif titles work with dense event information and expressive campaign art.

### Font Family

Use YS Text or a clean grotesk with confident bold weights and good Cyrillic.

### Hierarchy

Use 26–34 points campaign titles, 20–24 points event names, 16–18 points section titles, 13–15 points details, and 10–11 points navigation labels.

### Principles

Keep event, venue, date, and price distinct; avoid long copy over photography.

### Note on Font Substitutes

Use SF Pro or Inter, with 700–800 for hero and event titles.

# Screen composition

Use a full-width hero carousel above personalized shelves, then single-column event details and map-based seat selection.

### Spacing System

Use a 4 points base, 12 points compact gaps, 16 points gutters, and 24–32 points between event sections.

### Grid & Container

Heroes span the viewport; discovery shelves show two-up cards; seat maps occupy the canvas with a bottom order tray.

### Whitespace Philosophy

Keep editorial areas spacious around titles, while maps and ticket summaries may become deliberately dense.

Surface hierarchy observed in the source:

Use image scrims, modal sheets, and the floating seat-selection tray for depth; keep ordinary rows flat.

### Decorative Depth

Use electric yellow fields, stark black line art, and selective event lighting from photography.

# Navigation appearance

Use a five-item white bottom bar for Home, My tickets, Favorites, Search, and Gift; active state is black with clear label.

# Components

### Buttons

Primary purchase buttons are bright yellow pills with black labels. Secondary actions are black or pale gray depending on emphasis.

### Cards & Containers

Event cards feature image, title, venue/date, and price. Ticket cards expose status and actions without decorative imagery.

### Inputs & Forms

Use pale search and promo fields, compact selector rows, and bottom sheets for session, seat, and payment details.

# Imagery and icons

Use electric yellow fields, stark black line art, and selective event lighting from photography.

Use full-bleed landscape event photography with bottom-aligned copy; illustrations use centered black contours on yellow or white.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show favorite, available, selected seat, ticket, refund, promo, and subscription states with text plus icons or color.

# iOS adaptation

### Touch Targets

Filter, favorite, search, date, seat, zoom, checkout, ticket, and navigation targets require at least 44 points.

### Collapsing Strategy

Keep event name, date, venue, price, selected seats, and primary action visible; collapse reviews and editorial detail first.

### Image Behavior

Use cover for hero photos and posters, preserve focal faces, and apply a bottom scrim under white copy.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not use default blue actions.
- Do not decorate ticket data with unrelated art.
- Do not place yellow text on white.
- Do not hide date, venue, or final ticket count.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
