<design-context>
---
version: alpha
name: Ucom-design-analysis
description: "A dark telecom dashboard built from charcoal panels, electric lime-green branding, allowance gauges, compact service lists, and photography-backed promotional tiles. The interface is high-contrast, functional, and unmistakably carrier-oriented."

colors:
  primary: "#65D400"
  on-primary: "#101210"
  primary-pressed: "#4FB500"
  ink: "#F5F6F3"
  ink-muted: "#A0A39E"
  ink-subtle: "#666A65"
  canvas: "#171817"
  surface-1: "#202120"
  surface-2: "#292A29"
  hairline: "#343634"
  semantic-success: "#65D400"
  semantic-warning: "#F0AD38"
  semantic-danger: "#EF5A62"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.5px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  allowance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  service-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.sm}", padding: 12px 14px }
  tariff-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

Ucom uses charcoal surfaces and vivid lime controls to turn plan management into a compact dashboard. Gauges and repeated service rows keep balance and allowances immediately scannable.

## Colors

### Brand & Accent

Electric lime owns primary actions, active navigation, allowance arcs, and current-plan emphasis.

### Surface

Use near-black canvas with layered charcoal cards. A full lime header may mark balance or a selected tariff detail.

### Text

Off-white carries primary values and labels; gray carries terms and inactive navigation. Dark ink is used on lime buttons.

### Semantic

Lime confirms active service and success, amber warns about limits, and red marks failure or destructive action.

## Typography

### Font Family

Use a clean system sans with tabular figures for balances, allowances, and prices.

### Hierarchy

Use 24–38px balance values, 16–20px section titles, 14–16px rows, and 10–12px metadata.

### Principles

Align units consistently, keep plan names distinct from allowance values, and make terms readable without competing with activation.

### Note on Font Substitutes

Use Inter or SF Pro with tabular numerals and medium weights on dark surfaces.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px within dense cards, and 20–24px between service groups.

### Grid & Container

Home stacks balance, one three-column allowance card, promo rail, and action rows. Tariff pages use vertical comparison cards.

### Whitespace Philosophy

Keep panels compact but distinct. Use open dark space around balance and page titles to prevent visual crowding.

## Elevation & Depth

Use tonal separation and minimal shadow. Bright lime headers and card overlap provide most depth.

### Decorative Depth

Promotional tiles may use photography and green overlays. Core account surfaces remain flat and data-focused.

## Shapes

### Border Radius Scale

Use 8px rows and tariff cards, 12–16px allowance panels, and fully round small account actions.

### Photography & Illustration Geometry

Crop promo photography into compact rounded tiles. Keep gauges as consistent semicircles with simple service icons.

## Components

### Buttons

Primary Login, Activate, and Pay actions are full-width lime rectangles. Native controls must inherit lime focus and charcoal surfaces.

### Pricing Tabs

Tariffs and Services use a two-part graphite segment with lime selected state.

### Cards & Containers

Allowance cards pair three gauges with values. Tariff cards group included data, minutes, SMS, and price before disclosure.

### Inputs & Forms

Login uses restrained underlined fields; payment forms use dark grouped inputs with explicit amount and account context.

### Status & Build Page

Remaining allowance, active tariff, balance, autopayment, roaming, and payment status appear beside the relevant service.

### Navigation

Use four bottom destinations for Home, Payments, Tariffs/Services, and More. Detail pages use back and a pinned action.

### Footer

There is no footer. Terms and conditions live in More or expand beneath the active tariff.

## Do's and Don'ts

### Do

- Reserve lime for action and active service.
- Keep allowances comparable.
- Use dark layered surfaces consistently.
- Pin activation when the decision is ready.

### Don't

- Do not use low-contrast gray values.
- Do not overload the home screen with promotions.
- Do not make every panel bright green.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Keep account actions single-column on phones. Wider screens may place allowance and shortcuts beside payment or tariff content.

### Touch Targets

Service rows, gauges, promo tiles, tabs, navigation, and primary actions require at least 44px targets.

### Collapsing Strategy

Keep balance, current plan, allowance, and top-up visible. Collapse terms and secondary service details below summaries.

### Image Behavior

Use `cover` for promo photography and `contain` for carrier logos, plan symbols, and allowance icons.

## Iteration Guide

Start with login, balance, allowance card, action list, tariff comparison, and payment entry. Add promos, roaming, autopayments, and support afterward.

## Known Gaps

The inspected catalog documents 37 flows across onboarding, re-entry, home, payments, tariffs, services, and settings. Some payment completion and service error states are less represented.

</design-context>

Use the design system above for all UI you generate.
