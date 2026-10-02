<design-context>
---
version: 1
platform: iOS
name: CDEK-design-analysis
description: "A bright logistics visual system built from CDEK green, pale-gray canvases, white rounded cards, dense shipping forms, map sheets, black totals, clay-like logistics renders, package diagrams, and retail photo cards. The style is modular and operational: each visual block keeps shipment data, price, address, status, and action areas easy to scan."
colors:
  primary: "#35E65B"
  primary-strong: "#19C94A"
  primary-soft: "#B8FFC7"
  on-primary: "#101214"
  ink: "#151719"
  ink-muted: "#6F7478"
  ink-subtle: "#A2A7AB"
  canvas: "#F4F4F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECECF1"
  surface-3: "#F7F7F9"
  hairline: "#DFE1E5"
  warning: "#FFF6DC"
  warning-accent: "#F0BE39"
  map-green: "#26CA45"
  black-action: "#24262A"
  overlay: "#000000"
typography:
  display-lg: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  title: { fontFamily: SF Pro Text, fontSize: 18, fontWeight: 700, lineHeight: 1.22, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  numeric: { fontFamily: SF Pro Text, fontSize: 20, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, pill: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 28, xxl: 40 }
components:
  primary-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [15, 18] }
  dark-button: { backgroundColor: "{colors.black-action}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: [15, 18] }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", rounded: "{rounded.lg}", padding: 16 }
  field-row: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", rounded: "{rounded.md}", padding: [13, 14] }
  chip: { backgroundColor: "{colors.surface-2}", selectedBackgroundColor: "{colors.ink}", textColor: "{colors.ink}", selectedTextColor: "#FFFFFF", rounded: "{rounded.pill}", padding: [8, 12] }
  warning-card: { backgroundColor: "{colors.warning}", accentColor: "{colors.warning-accent}", textColor: "{colors.ink}", rounded: "{rounded.sm}", padding: 14 }
---

# Overview

CDEK uses a light operational shell: pale-gray page backgrounds, white rounded task cards, vivid green calls to action, black price emphasis, soft 3D logistics objects, functional maps, and retail photography only inside shopping surfaces.

Fresh Screen Gallery evidence covered auth, home, map/pickup sheets, shipment setup, package-size selection, order confirmation, order detail/status, shopping/product cards, and profile.

# Non-negotiable visual invariants

- Use CDEK green as the dominant action and selected-state color; do not replace it with system blue.
- Keep the app canvas pale gray, with white rounded cards and sheets carrying the content.
- Use black or near-black for totals, headings, and secondary high-emphasis actions.
- Keep logistics imagery as isolated clay-like 3D renders or package diagrams, not flat generic icons.
- Keep maps visually utilitarian: pale map tiles, dense green numbered markers, white bottom sheets.
- Keep warning information in pale yellow blocks with a narrow yellow accent and a triangular warning mark.
- Keep product shopping surfaces visually separate through real product photography and two-column retail cards.

# Color and surfaces

The style is compact, rounded, and high-contrast against a quiet canvas. Cards are independent modules with 14-18 pt radii, 12-16 pt internal padding, and small vertical gaps. Primary controls are full-width green bars at the bottom of the current surface. Secondary utility icons sit in gray circular or rounded-square containers.

Avoid glossy gradients, decorative background patterns, oversized hero art, and marketing-style layouts. The app should feel like a working logistics tool with moments of friendly 3D illustration.

Use approximate sampled colors from the fresh screenshots:

- Primary green: `#35E65B` for continue, submit, selected pickup, active map markers, success chips, and important promotional strips.
- Primary soft green: `#B8FFC7` for CDEK ID prompts, business send strip, and low-pressure promotional cards.
- Black action: `#24262A` for strong secondary actions such as tracking or personal-data prompts.
- Canvas: `#F4F4F7` for home, profile, forms, and order detail backgrounds.
- White: `#FFFFFF` for all cards, sheets, forms, maps overlays, product panels, and auth panels.
- Field gray: `#ECECF1` for text fields, inactive buttons, segmented controls, and secondary row backgrounds.
- Warning yellow: `#FFF6DC` with `#F0BE39` accent for service limits and shipping cautions.

Cards should cast only a very soft shadow or none at all. Separation mostly comes from background contrast, rounded corners, and spacing.

# Typography

Use SF Pro Display for screen titles and SF Pro Text for all controls and data. Letter spacing stays at `0`.

- Screen title: 18-22 pt, bold, centered or left depending on the visible surface.
- Card title: 16 pt, bold, compact line height.
- Body/detail: 12-14 pt, regular, medium gray for supporting copy.
- Button: 15 pt, bold, centered.
- Totals and prices: 18-20 pt, bold, black.
- Barcodes, tracking numbers, addresses, dates, and dimensions use tabular numeral behavior where available.

Keep Cyrillic labels short and direct. Do not stretch text, use decorative fonts, or apply all-caps except where the source content itself is a compact label.

# Screen composition

Use a 16 pt horizontal page gutter on phone screens. Stack content vertically with 12-16 pt gaps between major cards. Large cards often combine a left-aligned title with a small 3D object or icon on the right. Dense order cards use horizontal action tiles in a carousel-like row.

Bottom sheets have a white background, 24 pt top corner radius, a centered grabber, and content that starts with a large bold title. Sticky bottom summaries sit above the safe area with a white surface, a small top grabber when expanded, left label, right price, and a full-width green action.

Map screens keep the map full-bleed behind controls. Floating controls are white rounded buttons on the right; pickup clusters are green circles with white numerals.

# Navigation appearance

Visual chrome only; this section does not define product structure. Bars, sheet headers, and top controls use black or muted gray icons on white or pale-gray surfaces. Active emphasis uses CDEK green only when the reference shows a selected or current visual state. Avoid default blue navigation tint.

# Components

- Primary buttons: full-width green rounded rectangles, about 52-56 pt tall.
- Disabled buttons: pale gray with muted text and no green border.
- Dark buttons: full-width near-black rounded rectangles with white text.
- Segmented controls: light-gray capsule track with white selected segment; use for pickup/courier switches.
- Chips: compact pills; selected chip is black with white text in package-category lists.
- Selectable cards: white rounded rectangles with green stroke and subtle green fill when selected.
- Toggles: native iOS proportions, gray off state, green on state.
- Icon actions: gray circular backgrounds with monochrome line icons and short labels below.
- Search fields: white or pale-gray rounded bars, search icon at left, muted placeholder.

Do not use generic blue links or default iOS button styling. Links inside legal/auth copy can be muted blue-gray only when they appear as small text links.

Form and data surfaces:

Fields sit inside white cards or pale-gray rows with clear labels. Address rows use a small monochrome place/building icon, primary address text, and a trailing chevron. Package fields pair text data with diagrams or dimensions. Totals remain visible at the bottom of long forms.

Use separate visual treatment for:

- Address rows: icon, label, value, chevron.
- Package cards: object render, package name, weight, dimensions, optional add-ons.
- Rate cards: delivery duration and price, green stroke when selected.
- Order status cards: primary instruction, place/time block, action tiles, advisory strip.
- Barcode/status blocks: large barcode area, then vertical timeline with green current state and gray future states.

# Imagery and icons

Use authored raster assets for CDEK logistics visuals: parcel boxes, pickup pins, delivery objects, business briefcase, shoes/bags for shopping entry points, package-size diagrams, success trophy, and small helper character. These assets are softly lit, clay-like, and object-centered on white or pale-gray backgrounds.

Use real product photography only in shopping cards and product detail surfaces. Product photos should be clipped inside rounded white product cards or placed on clean white detail pages; do not reuse them as logistics icons.

# States

Visual state treatment only:

- Focused input: green stroke, white fill, unchanged typography.
- Loading action: disabled gray button with small spinner and muted label.
- Selected package/rate: green border plus a green check badge.
- Warning: pale yellow panel with left accent and warning icon.
- Success/confirmation: centered celebratory 3D object, bold confirmation text, price below, then action stack.
- Current status: green circular timeline marker; later steps are gray.
- Empty order: white tile with a simple gray package mark and muted prompt.

# iOS adaptation

Respect safe areas and keep sticky actions above the home indicator. Minimum touch target is 44 pt; primary actions should be closer to 52 pt. Dynamic Type may wrap supporting text, but headings, prices, totals, and primary actions must remain visible without overlapping. Use native keyboard, sheet, map, and toggle behaviors while styling the app-owned surfaces to match this system.

When content is tight, preserve the current card title, critical value, price, and primary action first. Collapse promotional imagery before form data, map controls, warnings, or status values.

# Anti-generic checklist

- Do not turn the interface into a plain iOS `Form` stack.
- Do not use SF Symbols as replacements for CDEK package renders, map markers, service objects, or success imagery.
- Do not use default iOS blue for primary buttons, links, selected states, or navigation emphasis.
- Do not flatten all cards into the same radius; large sheets/cards need softer corners than fields and chips.
- Do not put 3D objects behind addresses, prices, barcodes, or legal warnings.
- Do not mix shopping cart/product visual language into shipment/order-status cards.
- Do not claim live shipment behavior, routing, or payment logic from these visual references; this file describes appearance only.

</design-context>
