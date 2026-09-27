<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  search-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px }
  fare-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14px }
  promo-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 10px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 60px }
---

## Overview

Tutu combines a dark-indigo booking header with bright violet conversion actions and soft white comparison surfaces. Colorful discovery cards make a broad travel catalog feel friendly rather than infrastructural.

## Colors

### Brand & Accent

Violet is the primary action and selection color; deep indigo anchors the search header. Green belongs to cashback and wallet value.

### Surface

Use white for forms and detail cards, pale lavender-gray for page canvas and secondary containers, and indigo only for the high-priority search area.

### Text

Near-black carries prices and titles; gray carries schedules, policies, and secondary facts. White is used on indigo and violet.

### Semantic

Green confirms cashback or success, orange highlights urgency, and red marks errors. Violet remains action rather than semantic state.

## Typography

### Font Family

Use a friendly geometric system sans with tabular figures for fares and times.

### Hierarchy

Use 24–36px page and campaign titles, 16–20px product headings, 14–16px form content, and 10–12px metadata.

### Principles

Keep fare, route, date, and restriction easy to compare. Promotional copy may be lively but must not overpower the booking form.

### Note on Font Substitutes

Use Inter or SF Pro with tabular numerals for prices, dates, and schedules.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px dense comparison gaps, and 20–24px between sections.

### Grid & Container

The home screen stacks service rail, search form, filter chips, promos, and discovery. Checkout uses single-column cards with a sticky action.

### Whitespace Philosophy

Keep primary forms compact but separate booking decisions into distinct cards. Allow media-led discovery more breathing room.

## Elevation & Depth

Use rounded sheet overlap, pale grouped cards, and restrained shadow. Sticky actions may lift slightly above scrolling content.

### Decorative Depth

Use soft violet gradients, photography, and occasional glossy 3D promotional symbols. Keep comparison and checkout surfaces flat.

## Shapes

### Border Radius Scale

Use 8px fields and chips, 12–16px search and fare cards, 22px large sheets, and round service icons.

### Photography & Illustration Geometry

Travel photos use rounded portrait or landscape crops. Promotional symbols stay centered on soft gradient tiles and never obstruct prices or rules.

## Components

### Buttons

Primary search and purchase actions are filled violet rectangles with modest rounding. Native controls must inherit violet focus, friendly typography, and card geometry.

### Pricing Tabs

Service types, trip modes, fare choices, and content filters use chips or outlined cards with violet selected state.

### Cards & Containers

Fare cards prioritize price, baggage, exchange, and refund. Editorial cards pair a strong image with a short travel title.

### Inputs & Forms

Route, date, and traveler fields form one white compound panel. Passenger details use outlined fields and visible consent.

### Status & Build Page

Cashback, favorite state, sold-out inventory, booking progress, and order status appear beside the relevant option.

### Navigation

Use five bottom destinations for search, orders, Jarvel, favorites or information, and profile. Keep product switching in the horizontal service rail.

### Footer

There is no global footer. Legal terms, refund rules, and support links live inside the current checkout or profile context.

## Do's and Don'ts

### Do

- Keep price and conditions together.
- Reserve green for cashback and success.
- Use sticky purchase actions.
- Preserve the indigo-to-white hierarchy.

### Don't

- Do not mix promo styling into checkout fields.
- Do not hide baggage or refund rules.
- Do not make every card a gradient.
- Do not expose unstyled native controls.

## Responsive Behavior

### Breakpoints

Keep booking and checkout single-column on phones. Wider screens may show filters or trip summary alongside results.

### Touch Targets

Service icons, fields, filter chips, fare choices, favorites, and sticky actions require at least 44px targets.

### Collapsing Strategy

Keep route, date, travelers, price, and next action visible. Collapse secondary policies, reviews, and discovery into expandable sections.

### Image Behavior

Use `cover` for destination and editorial photography, and `contain` for service symbols or promotional 3D assets.

## Iteration Guide

Start with the service rail, adaptive search form, results, fare comparison, traveler details, and sticky checkout. Add discovery, rewards, Jarvel, and secondary transport modes afterward.

## Known Gaps

The inspected catalog documents 29 flows across onboarding, booking modes, profile, chats, promos, and Jarvel. Some purchase completion and payment states are not present in the representative scenarios.

</design-context>

Use the design system above for all UI you generate.
