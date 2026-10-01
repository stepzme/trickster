<design-context>
---
version: 1
platform: iOS
name: Kupibilet-design-analysis
description: "A travel-booking system that pairs a deep navy search canvas with vivid mint-green actions, then shifts into white and ice-gray comparison screens. Rounded form cards, compact itinerary diagrams, green selection outlines, and playful travel illustrations balance a long, data-heavy booking journey."
colors:
  primary: "#22E986"
  on-primary: "#10241A"
  primary-focus: "#18B968"
  ink: "#191A1E"
  ink-muted: "#70737A"
  ink-subtle: "#A0A3AA"
  ink-tertiary: "#C2C5CA"
  canvas: "#F4F5F8"
  surface-1: "#FFFFFF"
  surface-2: "#ECEEF3"
  surface-3: "#E1E4EA"
  surface-4: "#D4D8E0"
  hairline: "#E3E5EA"
  hairline-strong: "#CED2D9"
  hairline-tertiary: "#B5BAC3"
  inverse-canvas: "#303D63"
  inverse-surface-1: "#3A486F"
  inverse-surface-2: "#47557B"
  inverse-ink: "#FFFFFF"
  brand-secure: "#1FAF67"
  semantic-success: "#23AF65"
  semantic-overlay: "#161923"
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.0}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Rounded, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded:
  xs: 5
  sm: 9
  md: 13
  lg: 18
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  button-inverse: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 18}
  search-form: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12}
  flight-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  form-section: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  status-panel: {backgroundColor: "#FFF8EC", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10}
  navigation-bar: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 50}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Kupibilet combines a dark navy search stage with bright green commitment actions and calm white comparison, form, and payment screens.

# Non-negotiable visual invariants

- Primary screens use Deep navy home with stacked white search fields.
- Keep price comparisons close to dates.
- Use green consistently for selection and progress.
- Group long forms into clear sections.
- Show transfer and baggage consequences before purchase.
- Preserve the navy-to-light journey transition.
- Search is one stacked form.
- Results are a single vertical list with horizontal price/date chips; insurance options use a horizontal card rail.

# Color and surfaces

Electric mint-green marks forward progress, selected states, the brand mark, and favorable prices. Deep navy anchors search and branded navigation.

Home uses navy; the rest of the journey uses pale gray with white cards, sheets, and form groups.

Near-black carries flight facts and totals. Gray handles labels and timing metadata; green highlights selection and advantageous price.

Warm orange marks waiting; red marks failed payment or problematic route facts. Keep these states inside softly tinted panels.

# Typography

Use a rounded display sans for branded headings and SF Pro Text for itineraries, forms, and payment.

- display-lg — 30 points — 700 — Onboarding claim
- headline — 20 points — 700 — Booking and route heading
- card-title — 16 points — 600 — Price, passenger, or section title
- body — 13 points — 400 — Flight details and forms
- caption — 10 points — 400 — Duration, airport, and navigation

- Prices, dates, and route endpoints receive priority.
- Keep itinerary detail compact but never cryptic.
- Use rounded bold headings sparingly above functional content.

SF Pro Rounded or Nunito Sans matches the brand tone; Inter works for dense travel data.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points card gaps, and 12–16 points screen padding.

Search is one stacked form. Results are a single vertical list with horizontal price/date chips; insurance options use a horizontal card rail.

Keep comparison screens dense, but isolate each booking decision in its own white rounded group.

Use bold flat illustration shadows and occasional map depth. Functional cards rely on surface contrast, not heavy shadow.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Keep five bottom destinations fixed on discovery. Results and booking use a simple back header with the small navy brand capsule centered above.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are full-width green rectangles with modest rounding. Navy secondary actions appear on dark search surfaces; pale gray supports low-priority choices.

Flight cards stack timings, transfers, baggage, duration, and price. Booking forms and order summaries use white rounded groups on pale gray.

Search fields are large white rows on navy. Passenger and card fields use thin gray borders; focus shifts to a green outline without changing geometry.

Order status groups waiting and failure messages above the route. Use warm tints, a clear icon, and a direct recovery explanation.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Destination photography stays in rounded portrait cards. Illustration uses one large object on a saturated field or a small line drawing aligned to a helper card corner.

Destination photos use aspect-fill with labels outside the image. Illustrations scale proportionally and retain clear space around form copy.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Order status groups waiting and failure messages above the route. Use warm tints, a clear icon, and a direct recovery explanation.

Warm orange marks waiting; red marks failed payment or problematic route facts. Keep these states inside softly tinted panels.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Route fields, calendar dates, filters, result cards, payment choices, and bottom navigation remain at least 44 points.
- Keep the journey single-column; allow date, destination, and insurance rails to scroll horizontally rather than shrinking content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not decorate flight-result cards with illustration.
- Do not use red for ordinary price emphasis.
- Do not hide fees or route complexity.
- Do not over-round dense form fields.
- Do not leave native inputs visually disconnected from the green focus system.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
