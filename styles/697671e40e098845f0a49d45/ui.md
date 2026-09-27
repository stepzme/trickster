<design-context>
---
version: alpha
name: t2-design-analysis
description: "A bold telecom ecosystem built from black header fields, white rounded sheets, an electric-lime identity accent, condensed uppercase headings, and bright magenta, cyan, violet, and pastel 3D service objects. Dense account data stays modular and strongly labeled."

colors:
  primary: "#B7FF00"
  on-primary: "#101010"
  primary-pressed: "#9DE000"
  accent-magenta: "#F42C91"
  accent-cyan: "#18C9E8"
  accent-violet: "#5D29C7"
  ink: "#111113"
  ink-muted: "#73757A"
  ink-subtle: "#AAADB1"
  canvas: "#F3F3F5"
  surface-1: "#FFFFFF"
  surface-2: "#ECEDEF"
  dark: "#050505"
  hairline: "#E1E2E5"
  semantic-success: "#27B567"
  semantic-warning: "#EBAE25"
  semantic-danger: "#E64E59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 34px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 28px, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 22px, fontWeight: 800, lineHeight: 1.18, letterSpacing: -0.1px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 800, lineHeight: 1.25, letterSpacing: 0.4px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.dark}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  account-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12px }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60px }
---

## Overview

t2 pairs assertive black-and-lime branding with modular white account sheets. Bright service colors and 3D objects make a wide telecom ecosystem feel energetic without weakening data hierarchy.

## Colors

### Brand & Accent

Electric lime carries identity and small highlights. Magenta, cyan, and violet distinguish services; black anchors actions and headers.

### Surface

White rounded sheets sit on pale gray or black header fields. Light gray groups inputs and secondary modules.

### Text

Near-black carries data and headings; gray carries terms, dates, and inactive states. White is used on black chrome.

### Semantic

Green confirms service state, amber warns about balance, and red marks errors. Bright category colors never replace semantics.

## Typography

### Font Family

Use a bold condensed-feeling grotesk for headings and a neutral system sans for body and data.

### Hierarchy

Use 22–28px bold headings, 15–17px module titles, 14px body, and 10–12px allowance metadata.

### Principles

Keep tariff, balance, allowance, and price visually distinct. Uppercase is appropriate for short section labels only.

### Note on Font Substitutes

Use Inter or SF Pro, with an optional condensed sans for display headings. Preserve heavy weights and clear numerals.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px module gaps, and 20–24px between account groups.

### Grid & Container

The account screen stacks paired summary cards and full-width lists. More uses a colorful tile grid; finance uses long service cards.

### Whitespace Philosophy

Keep dense account data compact, but give service objects and offers generous card space.

## Elevation & Depth

White sheets overlap black header areas. Soft shadows and 3D platforms add depth without framing every row.

### Decorative Depth

Use metallic toy-like objects on pastel platforms and occasional magenta or cyan gradients. Keep transaction forms flat.

## Shapes

### Border Radius Scale

Sheets use 24px, service cards 18px, fields 12px, small chips 8px, and brand badges are pills.

### Photography & Illustration Geometry

Use centered 3D objects for services and rectangular photography for editorial offers. Avatars and assistants remain circular.

## Components

### Buttons

Primary actions are black or deep violet with white text; lime highlights selection. Native controls must inherit the package palette and weight.

### Pricing Tabs

Tariff, service, and subscription choices use bold segmented cards or compact pills with high-contrast selected states.

### Cards & Containers

Account sheets foreground number, balance, allowances, and direct actions. Service cards pair strong labels with one object.

### Inputs & Forms

Top-up, SIM, and service forms use pale rounded fields and explicit amount or number labels.

### Status & Build Page

Connected, remaining, transferred, blocked, subscribed, and payment states appear next to the relevant product with explicit text.

### Navigation

Five bottom destinations persist across Connectivity, MiXX, Home, Finance, and More. Active state uses black emphasis.

### Footer

There is no footer. Product pages end with navigation or a contextual confirmation action.

## Do's and Don'ts

### Do

- Keep black and lime as anchors.
- Use one bright hue per category.
- Preserve explicit telecom data.
- Reuse the same 3D object family.

### Don't

- Do not make whole screens lime.
- Do not hide tariff terms behind art.
- Do not mix several gradients in one card.
- Do not expose default blue controls.

## Responsive Behavior

### Breakpoints

Keep account and activation flows single-column. Wider service areas may expand to more tile columns.

### Touch Targets

Tabs, service rows, allowance controls, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Allow stories and offers to scroll horizontally. Keep top-up and activation actions visible through long forms.

### Image Behavior

Use `contain` for 3D service objects and `cover` for editorial offers. Preserve readable labels over media.

## Iteration Guide

Start with black header, white account sheet, lime identity, five-tab navigation, balance, allowances, and tariff. Add MiXX, Home, Finance, and More afterward.

## Known Gaps

All 144 flow records were surveyed; representative account, finance, More, Profile, MiXX, and Home screens were inspected. Tablet layouts and every service failure were not visible.

</design-context>

Use the design system above for all UI you generate.
