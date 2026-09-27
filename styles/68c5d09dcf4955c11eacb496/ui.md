<design-context>
---
version: alpha
name: Drivee-design-analysis
description: "A map-first ride and courier interface with pale cartography, vivid lime primary actions, blue pickup markers, green destinations, white rounded bottom sheets, compact vehicle selectors, negotiated price controls, and direct live-status panels that preserve route context."
colors:
  primary: "#8EF12A"
  on-primary: "#17320C"
  primary-hover: "#7BDD20"
  primary-soft: "#E9FFD3"
  accent: "#32A9EE"
  accent-destination: "#21A93D"
  ink: "#202126"
  ink-muted: "#777C84"
  ink-subtle: "#B0B4BA"
  canvas: "#F6F7F8"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  hairline: "#E2E4E7"
  semantic-success: "#21A93D"
  semantic-warning: "#FFD327"
  semantic-danger: "#C94E59"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 15px 18px }
  ride-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  route-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  vehicle-tab: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "transparent", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Drivee keeps the map visible while a sequence of white bottom sheets handles pickup, destination, ride type, user price, driver search, safety, and completion. Lime means proceed; blue and green distinguish route endpoints.

**Key Characteristics:**
- Pale, low-contrast map as the persistent canvas.
- Vivid lime primary actions and price adjustments.
- Blue pickup and green destination markers.
- White rounded bottom sheets with large drag handles.
- Vehicle category rail with small car silhouettes.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Order, confirm, price increment, call, and accept.
- **Primary Soft** ({colors.primary-soft}): Suggested routes and low-emphasis selection.
- **Blue Accent** ({colors.accent}): Pickup and location identity.
- **Destination Accent** ({colors.accent-destination}): Destination and completion.

### Surface
- **Canvas** ({colors.canvas}): Map and neutral loading areas.
- **Surface 1** ({colors.surface-1}): Sheets, fields, cards, and controls.
- **Surface 2** ({colors.surface-2}): Secondary rows and disabled fields.
- **Hairline** ({colors.hairline}): Sheet and form boundaries.

### Text
- **Ink** ({colors.ink}): Fare, status, route, and titles.
- **Ink Muted** ({colors.ink-muted}): Driver detail and helper copy.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and unavailable state.

### Semantic
- **Success** ({colors.semantic-success}): Destination and completed state.
- **Warning** ({colors.semantic-warning}): Demand and rating emphasis.
- **Danger** ({colors.semantic-danger}): Cancel and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Safety and confirmation focus.

## Typography

### Font Family
- **SF Pro Display** — price, ETA, and major status.
- **SF Pro Text** — route fields, vehicle labels, and sheets.
- **SF Mono** — order, vehicle, or payment identifiers.

### Hierarchy
Use 30–36px bold for fare and major status, 22px for sheet titles, 16px semibold for actions, 14px body, and 10–12px map metadata.

### Principles
- Keep ETA, fare, and status scannable over the map.
- Pair endpoint color with clear labels.
- Keep route fields concise.
- Use muted text for advisory content only.

### Note on Font Substitutes
Use the platform system sans or **Inter**, with tabular numerals for fare and time.

## Layout

### Spacing System
Use a 4px base, 12px sheet rhythm, 16px gutters, 16px sheet padding, and 8px between vehicle options.

### Grid & Container
The map fills the viewport. A bottom sheet moves from compact route entry to search, driver detail, live trip, and completion states.

### Whitespace Philosophy
Keep sheets compact enough to preserve spatial context; expand only for detailed forms, safety, or courier data.

## Elevation & Depth
Use map-to-sheet separation, rounded top corners, and limited shadow. Floating menu, share, locate, and safety controls sit above the map.

### Decorative Depth
Vehicle silhouettes and map markers are functional. Avoid decorative backgrounds that compete with live route data.

## Shapes

### Border Radius Scale
Use 10px for fields, 14px for vehicle and offer cards, 24px top corners for sheets, and full circles for floating map controls.

### Photography & Illustration Geometry
Use real driver avatars and simple vehicle silhouettes. Keep map markers geometric and high-contrast; do not add decorative illustration.

## Components

### Buttons
Use large lime rectangles for the next irreversible step; secondary, cancel, and support actions remain neutral or red text.

### Pricing Tabs
Vehicle types form a horizontal illustrated rail; selected category gains a stronger label or border. Price negotiation uses clear plus and minus controls.

### Cards & Containers
Use route sheet, vehicle tabs, search-status panel, driver card, courier offer, safety sheet, and completion panel.

### Inputs & Forms
Pickup and destination fields use blue and green markers. Courier forms group sender, recipient, phone, comment, and door-to-door toggle.

### Status & Build Page
Show searching, demand warning, driver found, arriving, in trip, courier offer, accepted, completed, and canceled states explicitly.

### Navigation
Menu and share float over the map; ride and courier modes switch within the lower sheet while active status remains visible.

### Footer
The active bottom sheet is the footer and keeps the primary action above the safe area.

## Do's and Don'ts

### Do
- Preserve map context through every ride state.
- Keep pickup and destination visually distinct.
- Show fare and ETA before commitment.
- Keep safety reachable during a live ride.

### Don't
- Don't let the sheet cover the entire route unnecessarily.
- Don't use lime for cancel or warning.
- Don't rely on map pins without address labels.
- Don't hide price negotiation consequences.

## Responsive Behavior

### Breakpoints
Use the full map and bottom sheet on phones, a side sheet on tablet, and a persistent left task panel beside the map above 1024px.

### Touch Targets
Keep map controls, route fields, vehicle tabs, price controls, order, safety, call, and courier actions at least 44px.

### Collapsing Strategy
Preserve map, route, fare, ETA, status, and primary action. Move secondary details into expandable rows or a follow-up sheet.

### Image Behavior
Keep the map live and uncropped to relevant bounds; crop avatars to circles and contain vehicle silhouettes without distortion.

## Iteration Guide
1. Build map, route entry, and vehicle selection.
2. Add price proposal and driver search.
3. Add live ride, driver contact, and completion.
4. Add safety, chat, and payment.
5. Add courier and driver-account branches.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 18 flows were inventoried; Booking a ride, Safety, and Order a courier were image-reviewed.
- Driver verification, account funding, and difficult route edge cases were not deeply sampled.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
