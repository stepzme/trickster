<design-context>
---
version: 1
platform: iOS
name: Drivee-design-analysis
description: "A map-first ride and courier interface with pale cartography, vivid lime primary actions, blue pickup markers, green destinations, white rounded bottom sheets, compact vehicle selectors, negotiated price controls, and direct live-status panels that preserve route context."
colors:
  primary: "#8EF12A"
  on-primary: "#17320C"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [15, 18]}
  ride-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  route-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  vehicle-tab: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 8 }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Drivee keeps the map visible while a sequence of white bottom sheets handles pickup, destination, ride type, user price, driver search, safety, and completion. Lime means proceed; blue and green distinguish route endpoints.

**Key Characteristics:**
- Pale, low-contrast map as the persistent canvas.
- Vivid lime primary actions and price adjustments.
- Blue pickup and green destination markers.
- White rounded bottom sheets with large drag handles.
- Vehicle category rail with small car silhouettes.

# Non-negotiable visual invariants

- Sampled screens consistently use pale, low-contrast map as the persistent canvas.
- The reference consistently shows vivid lime primary actions and price adjustments.
- The reference consistently shows blue pickup and green destination markers.
- The reference consistently shows white rounded bottom sheets with large drag handles.
- The reference consistently shows vehicle category rail with small car silhouettes.

# Color and surfaces

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

# Typography

### Font Family
- **SF Pro Display** — price, ETA, and major status.
- **SF Pro Text** — route fields, vehicle labels, and sheets.
- **SF Mono** — order, vehicle, or payment identifiers.

### Hierarchy
Use 30–36 points bold for fare and major status, 22 points for sheet titles, 16 points semibold for actions, 14 points body, and 10–12 points map metadata.

### Principles
- Keep ETA, fare, and status scannable over the map.
- Pair endpoint color with clear labels.
- Keep route fields concise.
- Use muted text for advisory content only.

### Note on Font Substitutes
Use the platform system sans or **Inter**, with tabular numerals for fare and time.

# Screen composition

### Spacing System
Use a 4 points base, 12 points sheet rhythm, 16 points gutters, 16 points sheet padding, and 8 points between vehicle options.

### Grid & Container
The map fills the viewport. A bottom sheet moves from compact route entry to search, driver detail, live trip, and completion states.

### Whitespace Philosophy
Keep sheets compact enough to preserve spatial context; expand only for detailed forms, safety, or courier data.

Surface hierarchy observed in the source:

Use map-to-sheet separation, rounded top corners, and limited shadow. Floating menu, share, locate, and safety controls sit above the map.

### Decorative Depth
Vehicle silhouettes and map markers are functional. Avoid decorative backgrounds that compete with live route data.

# Navigation appearance

Menu and share float over the map; ride and courier modes switch within the lower sheet while active status remains visible.

# Components

### Buttons

Use large lime rectangles for the next irreversible step; secondary, cancel, and support actions remain neutral or red text.

### Cards & Containers

Use route sheet, vehicle tabs, search-status panel, driver card, courier offer, safety sheet, and completion panel.

### Inputs & Forms

Pickup and destination fields use blue and green markers. Courier forms group sender, recipient, phone, comment, and door-to-door toggle.

# Imagery and icons

Vehicle silhouettes and map markers are functional. Avoid decorative backgrounds that compete with live route data.

Use real driver avatars and simple vehicle silhouettes. Keep map markers geometric and high-contrast; do not add decorative illustration.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show searching, demand warning, driver found, arriving, in trip, courier offer, accepted, completed, and canceled states explicitly.

# iOS adaptation

### Touch Targets

Keep map controls, route fields, vehicle tabs, price controls, order, safety, call, and courier actions at least 44 points.

### Collapsing Strategy

Preserve map, route, fare, ETA, status, and primary action. Move secondary details into expandable rows or a follow-up sheet.

### Image Behavior

Keep the map live and uncropped to relevant bounds; crop avatars to circles and contain vehicle silhouettes without distortion.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't let the sheet cover the entire route unnecessarily.
- Don't use lime for cancel or warning.
- Don't rely on map pins without address labels.
- Don't hide price negotiation consequences.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 18 flows were inventoried; Booking a ride, Safety, and Order a courier were image-reviewed.
- Driver verification, account funding, and difficult route edge cases were not deeply sampled.
- No tablet or desktop captures were present.

</design-context>
