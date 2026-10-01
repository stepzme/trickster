<design-context>
---
version: 1
platform: iOS
name: Tutu-design-analysis
description: "A lively travel marketplace built from a deep-indigo search header, bright violet actions, white booking sheets, pale-lavender cards, green cashback cues, and colorful photo-led discovery content. It balances dense comparison with a playful consumer tone."

colors:
  primary: "#6D55F5"
  on-primary: "#FFFFFF"
  primary-pressed: "#5740D9"
  brand-dark: "#140A73"
  ink: "#17171C"
  ink-muted: "#676870"
  ink-subtle: "#A3A4AB"
  canvas: "#F3F2F8"
  surface-1: "#FFFFFF"
  surface-2: "#EEECF8"
  hairline: "#DEDEE5"
  semantic-success: "#36A52D"
  semantic-warning: "#F4A62A"
  semantic-danger: "#DA4758"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  search-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14 }
  fare-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  promo-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 10 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 60 }
---

# Overview

Tutu combines a dark-indigo booking header with bright violet conversion actions and soft white comparison surfaces. Colorful discovery cards make a broad travel catalog feel friendly rather than infrastructural.

# Non-negotiable visual invariants

- Keep price and conditions together.
- Reserve green for cashback and success.
- Use sticky purchase actions.
- Preserve the indigo-to-white hierarchy.
- The home screen stacks service rail, search form, filter chips, promos, and discovery.
- Checkout uses single-column cards with a sticky action.
- Keep primary forms compact but separate booking decisions into distinct cards.
- Allow media-led discovery more breathing room.

# Color and surfaces

Violet is the primary action and selection color; deep indigo anchors the search header. Green belongs to cashback and wallet value.

Use white for forms and detail cards, pale lavender-gray for page canvas and secondary containers, and indigo only for the high-priority search area.

Near-black carries prices and titles; gray carries schedules, policies, and secondary facts. White is used on indigo and violet.

Green confirms cashback or success, orange highlights urgency, and red marks errors. Violet remains action rather than semantic state.

# Typography

Use a friendly geometric system sans with tabular figures for fares and times.

Use 24–36 points page and campaign titles, 16–20 points product headings, 14–16 points form content, and 10–12 points metadata.

Keep fare, route, date, and restriction easy to compare. Promotional copy may be lively but must not overpower the booking form.

Use Inter or SF Pro with tabular numerals for prices, dates, and schedules.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8–12 points dense comparison gaps, and 20–24 points between sections.

The home screen stacks service rail, search form, filter chips, promos, and discovery. Checkout uses single-column cards with a sticky action.

Keep primary forms compact but separate booking decisions into distinct cards. Allow media-led discovery more breathing room.

Use soft violet gradients, photography, and occasional glossy 3D promotional symbols. Keep comparison and checkout surfaces flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five bottom destinations for search, orders, Jarvel, favorites or information, and profile. Keep product switching in the horizontal service rail.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary search and purchase actions are filled violet rectangles with modest rounding. Native controls must inherit violet focus, friendly typography, and card geometry.

Fare cards prioritize price, baggage, exchange, and refund. Editorial cards pair a strong image with a short travel title.

Route, date, and traveler fields form one white compound panel. Passenger details use outlined fields and visible consent.

Cashback, favorite state, sold-out inventory, booking progress, and order status appear beside the relevant option.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Travel photos use rounded portrait or landscape crops. Promotional symbols stay centered on soft gradient tiles and never obstruct prices or rules.

Use `cover` for destination and editorial photography, and `contain` for service symbols or promotional 3D assets.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Cashback, favorite state, sold-out inventory, booking progress, and order status appear beside the relevant option.

Green confirms cashback or success, orange highlights urgency, and red marks errors. Violet remains action rather than semantic state.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Service icons, fields, filter chips, fare choices, favorites, and sticky actions require at least 44 points targets.
- Keep route, date, travelers, price, and next action visible. Collapse secondary policies, reviews, and discovery into expandable sections.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not mix promo styling into checkout fields.
- Do not hide baggage or refund rules.
- Do not make every card a gradient.
- Do not expose unstyled native controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The inspected catalog documents 29 flows across onboarding, booking modes, profile, chats, promos, and Jarvel. Some purchase completion and payment states are not present in the representative scenarios.

</design-context>
