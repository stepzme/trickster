<design-context>
---
version: alpha
name: Wallet-design-analysis
description: "A highly native iOS utility built from soft cool-gray canvas, stacked white sheets, large black titles, system-blue actions, grouped form rows, and restrained flat setup graphics. Depth comes from the visible stack of cards and modal dimming rather than ornamental shadow."

colors:
  primary: "#1677F2"
  on-primary: "#FFFFFF"
  primary-pressed: "#0C63CF"
  ink: "#000000"
  ink-muted: "#6C6C70"
  ink-subtle: "#9A9AA0"
  canvas: "#F2F2F7"
  surface-1: "#FFFFFF"
  surface-2: "#E9E9EE"
  field: "#EFEFF4"
  hairline: "#D6D6DB"
  accent-red: "#E87569"
  accent-yellow: "#F3BE3D"
  accent-green: "#67B961"
  semantic-success: "#2F9B62"
  semantic-danger: "#D94B4B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: SF Pro Text, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: SF Mono, fontSize: 13px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  setup-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 16px }
  grouped-field: { backgroundColor: "{colors.field}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 12px }
  modal-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 20px }
  alert: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
---

## Overview

Wallet follows the iOS system language closely: large titles, cool-gray grouped forms, blue actions, stacked modal sheets, and flat setup cards. The visual personality is quiet, secure, and familiar.

## Colors

### Brand & Accent

System blue is the sole operational accent for Add, Continue, Next, Back, search, and alert actions. Muted red, yellow, green, and blue appear only in setup illustrations.

### Surface

Use cool gray for the app canvas, white for modal sheets, and slightly darker grouped fields. Preserve visible sheet edges to communicate navigation depth.

### Text

Black carries large titles and field values; medium gray carries descriptions, placeholders, and privacy copy.

### Semantic

Use red only for destructive or unsupported outcomes, green for completed verification, and blue for all neutral action.

## Typography

### Font Family

Use SF Pro Display and SF Pro Text with native iOS metrics.

### Hierarchy

Use 30–36px navigation titles, 20–26px setup and sheet headings, 15–17px form content, and 11–13px legal or helper text.

### Principles

Keep wording direct and functional. Center modal headings, left-align form labels, and avoid unnecessary type styles.

### Note on Font Substitutes

On non-Apple platforms, use Inter with iOS-like weight and line-height while retaining the same scale.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 12px row spacing, 20–24px sheet padding, and broad vertical breathing room around forms.

### Grid & Container

The main screen shows horizontally paged setup cards. Add-card screens use one centered sheet with grouped fields and a bottom primary action.

### Whitespace Philosophy

Leave large calm areas around sensitive setup steps. Empty states should remain visually sparse and centered.

## Elevation & Depth

Show two or three offset sheet tops behind the active surface and use a restrained dim overlay for alerts. Avoid ornamental card shadows.

### Decorative Depth

Depth is structural: stacked cards, modal rounding, dimming, and camera transition. Flat illustrations remain inside their own tinted panels.

## Shapes

### Border Radius Scale

Use 8px for compact controls, 12px for grouped fields, 16px for setup cards, and 22–28px for modal sheets.

### Photography & Illustration Geometry

Use flat centered object clusters in rectangular intro cards. Real payment cards remain proportionally accurate and softly rounded.

## Components

### Buttons

Primary actions are system-blue rounded rectangles; text actions stay blue on white. Native controls may be used, but their color, radius, spacing, and hierarchy must explicitly match this Wallet system.

### Pricing Tabs

Use native segmented or page-dot selection for card types and onboarding pages; active state is black or blue without decorative capsules.

### Cards & Containers

Setup cards combine large white title, central flat object cluster, short caption, and a small white Add or Get pill.

### Inputs & Forms

Use grouped pale-gray rows for name, number, expiry date, and security code. Keyboard, camera scan, and validation remain native but visually integrated.

### Status & Build Page

Use centered progress spinners, issuer-support alerts, verification prompts, no-results messages, and compact empty-state symbols.

### Navigation

Use large-title navigation, blue Back/Next text, close controls, and stacked sheets. Keep Orders and Add as circular black shortcuts on the main screen.

### Footer

There is no footer. Privacy, issuer information, and Learn More actions appear inside the active setup sheet or alert.

## Do's and Don'ts

### Do

- Preserve native familiarity for payment setup.
- Show navigation depth with sheet stacking.
- Keep sensitive forms calm and sparse.
- Use blue consistently for safe action.

### Don't

- Do not restyle the product as a colorful fintech dashboard.
- Do not introduce custom shadows or glass effects everywhere.
- Do not crowd empty states with secondary actions.
- Do not let default platform styling diverge from the specified radii and hierarchy.

## Responsive Behavior

### Breakpoints

Phones use one centered sheet at a time. Wider screens should retain a narrow secure form column rather than stretching fields edge to edge.

### Touch Targets

Add, Orders, Back, Next, close, alert actions, setup cards, and grouped rows require at least 44px targets.

### Collapsing Strategy

Keep title, current field group, validation, and next action visible. Move explanatory copy below or into a secondary sheet.

### Image Behavior

Use `contain` for card and pass illustrations, real payment cards, and empty-state symbols. Camera capture fills its dedicated view.

## Iteration Guide

Start with Wallet home, setup cards, Orders empty/search states, add-card introduction, camera/manual entry, and verification. Add pass discovery and other stored item types afterward.

## Known Gaps

The catalog exposes 53 image screens and no flow records. The visual system and probable add-card progression were derived from the full screen set; exact branching and transition timing remain unverified.

</design-context>

Use the design system above for all UI you generate.
