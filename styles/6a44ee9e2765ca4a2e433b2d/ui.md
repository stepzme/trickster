<design-context>
---
version: 1
platform: iOS
name: Whoosh-design-analysis
description: "A dark mobility visual system with charcoal maps, smoky rounded sheets, coral-orange decisive actions, brushed-metal secondary controls, compact white telemetry, and authored industrial campaign imagery."
colors:
  primary: "#FF634A"
  on-primary: "#FFFFFF"
  primary-pressed: "#E94E38"
  ink: "#FFFFFF"
  ink-muted: "#BDBABE"
  ink-subtle: "#858187"
  canvas: "#19181B"
  map: "#111417"
  surface-1: "#302E32"
  surface-2: "#3C393E"
  surface-3: "#4B474C"
  metallic-light: "#A8A5A6"
  metallic-dark: "#626064"
  accent-blue: "#2E93FF"
  campaign-green: "#60D182"
  hairline: "#FFFFFF1F"
  semantic-success: "#2FC173"
  semantic-warning: "#F1B64D"
  semantic-danger: "#FF5B51"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 800, lineHeight: 1.05, letterSpacing: 0 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 750, lineHeight: 1.08, letterSpacing: 0 }
  display-md: { fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0 }
  telemetry: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 700, lineHeight: 1.16, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.22, letterSpacing: 0 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18] }
  button-secondary-metal: { backgroundColor: "{colors.metallic-dark}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18] }
  vehicle-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 14 }
  tariff-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10 }
  map-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.full}", padding: 10 }
  dark-input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [13, 14] }
---

# Overview

Whoosh is a dark, operational mobility interface. The map and bottom sheets are the core visual material: charcoal cartography, smoky graphite panels, compact white telemetry, orange decisive actions, brushed-gray secondary controls, and occasional authored campaign artwork with industrial texture.

# Non-negotiable visual invariants

- Use dark mode as the default visual shell. White screens are not part of the inspected product language.
- Keep the map full-screen where map content is present. App-owned sheets and controls float over it; they do not replace the map with a generic page.
- Use coral-orange for one decisive action at a time: start, finish, top up, continue, confirm, or selected campaign switch.
- Use brushed-metal gray for secondary large actions and inactive action bars. These controls have texture and highlight, not flat system gray.
- Render ride facts as compact telemetry: vehicle ID, charge, minutes, price, balance, distance, and status remain legible in small white text.
- Use authored raster/campaign imagery only where the evidence supports it; do not decorate ordinary payment, legal, or support rows with unrelated art.

# Color and surfaces

### Brand and action

The primary action color is a warm coral-orange with subtle texture or uneven light. Pressed state deepens toward red-orange. Use blue only for location or system map position. Green marks favorable tariff/success states and selected safe options. Red warns about problems or urgent validation.

### Dark materials

`canvas` is a near-black graphite. `map` is darker and more detailed. `surface-1` is a smoked bottom-sheet gray; `surface-2` and `surface-3` build tariff cards, menu tiles, and control stacks. Sheets often show translucent scrim behavior over the map, but their text contrast must remain high.

### Metal controls

Large secondary controls use a steel/stone look: gray gradient, worn texture, inner highlight, and rounded-pill shape. Keep the effect restrained and functional; it should feel like a tactile control, not a skeuomorphic ornament.

# Typography

### Font family

Use SF Pro Text and SF Pro Display for the product UI. Campaign title moments may use a squared, futuristic display face only when paired with approved raster artwork. Do not apply campaign lettering to forms, balances, tariffs, or legal text.

### Hierarchy

Vehicle IDs, price/time facts, and primary action labels are strongest. Helper text, legal copy, insurance notes, and secondary captions are smaller, muted, and left aligned. Centered headings appear in forms and simple setup screens; map sheets use denser left-aligned facts.

### Numeric treatment

Use tabular numbers for balances, kilometers, prices, minutes, phone codes, vehicle numbers, and card suffixes. Keep units close to values, using smaller captions only when it does not break readability.

# Screen composition

### Map composition

The map fills the viewport with dark roads, white parking polygons, small vehicle pins, orange parking markers, blue current-location dot, and clustered right-side controls. Search and wallet/balance chips sit near the top. Scan and location controls sit low enough to stay reachable but above the home indicator and bottom chrome.

### Sheet composition

Bottom sheets have large rounded top corners and a dense vertical stack: object thumbnail, telemetry row, tariff cards, toggles, payment/promo/support rows, then an action bar. Keep sheet backgrounds smoky and slightly lighter than the map. Use hairline dividers sparingly; spacing and card boundaries do most separation.

### Forms and account pages

Setup, phone, email, card, payment, and menu surfaces use the same dark shell. Inputs are rectangular rounded fields with thin light borders in focused state. Menu content uses rounded dark tiles, compact toggle rows, payment rows, promo cards, and horizontally scrolling offer cards.

# Navigation appearance

When bottom chrome is present, keep it black or nearly black with small white/gray line icons and a restrained active state. Do not use a bright tab bar, a white navigation bar, or oversized labels. Top bars use minimal back controls and centered compact titles.

# Components

### Buttons

Primary buttons are orange textured pills with white semibold text. Secondary wide buttons are brushed gray pills. Disabled states use low-contrast gray and should look physically inactive. Avoid multiple orange buttons in the same panel unless one is clearly inactive or loading.

### Tariff cards

Tariff cards are compact dark rounded rectangles arranged horizontally. They show a short title, price, time, and small favorable-state marks. Selected or recommended cards use green/orange accent chips, not a full bright background.

### Map controls

Layer, zoom, location, compass, scan, and wallet controls are circular or pill-shaped dark translucent controls. Icons are white or muted gray. The current-location dot is saturated blue with a soft halo.

### Toggles and selection

Toggles use orange when on and gray when off. Radio selection in payment lists uses a small orange dot or ring. Checkmarks can be green for successful ride/safety outcomes.

### Inputs

Phone, SMS code, email, card, and top-up inputs sit on the dark canvas. Focused fields use a light outline. Native keyboards may appear, but the app-owned input fields above them must retain charcoal surfaces and white text.

### Campaign cards

Campaign cards use approved raster art, soft glow, and compact labels. Keep them inside rounded dark cards or full-bleed campaign frames. Do not let campaign palettes redefine standard payment, menu, or map controls.

# Imagery and icons

Use dark map tiles, photographed/3D campaign objects, mechanical emblems, and approved raster vehicle/campaign assets. The inspected system includes orange-red industrial imagery, metallic objects, chrome characters, small themed map markers, and thin outline illustrations on subscription/empty-state screens.

Do not substitute SF Symbols, emoji, SwiftUI shapes, generic vector blobs, or unapproved AI sketches for these assets. Icons inside controls should be simple white line glyphs; authored imagery belongs in campaign cards, empty states, launch moments, and themed map markers.

# States

Loading states can appear as an orange action pill with a spinner. Disabled buttons use brushed gray with muted white text. Active toggles turn orange. Safe/beneficial selections can use green chips. Modal confirmation sheets dim the map heavily while keeping the dark material and orange/gray action split. Camera/parking validation screens may use full-screen camera imagery with white instruction text and a plain circular shutter.

# iOS adaptation

Respect safe areas while preserving the full-screen map impression. Controls near the bottom must stay above the home indicator and any bottom chrome. Touch targets for scan, map pins, zoom, toggles, tariff cards, payment rows, and action buttons must be at least 44pt.

At larger Dynamic Type sizes, keep the key telemetry and current action visible first. Let helper copy wrap or collapse before vehicle ID, price, time, charge, balance, or action labels. Use native permission and keyboard behavior, but style the app-owned surfaces to match the dark visual system.

# Anti-generic checklist

- Do not convert Whoosh into a standard light map app.
- Do not use default iOS blue for primary actions; blue is reserved for location/system map position.
- Do not flatten orange and gray action buttons into plain solid rectangles.
- Do not hide charge, price, time, balance, or active ride status inside secondary copy.
- Do not put campaign art on payment/legal/support surfaces unless fresh approved screens show it there.
- Do not replace authored raster imagery with programmatic symbols, emoji, or simple decorative shapes.
- Do not invent UX flows, navigation destinations, or product scenarios from these style notes. This file defines visual treatment only.

</design-context>
