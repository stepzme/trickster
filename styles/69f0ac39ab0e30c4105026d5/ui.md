<design-context>
---
version: alpha
name: Freedom-design-analysis
description: "A bright financial super-app built from white modular surfaces, emerald-to-teal gradients, compact banking data, rounded service tiles, and promotional 3D artwork. Dense dashboards remain approachable through generous grouping and a persistent five-tab shell."
colors: { primary: "#21B76C", on-primary: "#FFFFFF", primary-hover: "#16A960", primary-soft: "#EAF9F1", accent: "#00A69C", ink: "#14171A", ink-muted: "#6F7479", ink-subtle: "#A8ADB2", canvas: "#F5F6F7", surface-1: "#FFFFFF", surface-2: "#EDF1F2", hairline: "#E1E5E7", semantic-success: "#28B56D", semantic-warning: "#F2B849", semantic-danger: "#DC5656", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  service-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Freedom balances a dense financial super-app with white cards, green accents, clear account hierarchy, and promotional 3D scenes.

## Colors

### Brand & Accent
Use emerald for primary actions and teal gradients for branded account or campaign areas.

### Surface
Keep the app canvas pale gray and group financial modules on white cards.

### Text
Use near-black for money and titles, gray for metadata, and pale gray for disabled controls.

### Semantic
Reserve green for successful or available state, amber for attention, and red for destructive outcomes.

## Typography

### Font Family
Use SF Pro Display for balances and titles and SF Pro Text for services, details, and forms.

### Hierarchy
Use 27–32px for key amounts, 22px for page titles, 16px for card titles, 14px body, and 10–12px metadata.

### Principles
Keep amount, account name, and action hierarchy legible inside dense dashboards.

### Note on Font Substitutes
Use the platform sans or Inter with tabular numerals.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 12px gaps, and 14px card padding.

### Grid & Container
Stack account, service, promotion, operation, and guidance modules above a five-tab footer.

### Whitespace Philosophy
Use compact internal spacing but clear gaps between unrelated financial tasks.

## Elevation & Depth
Use restrained shadows on white cards and sheets; branded account imagery may carry stronger depth.

### Decorative Depth
Use gradients, glassy highlights, and small 3D props only in promotional or explanatory modules.

## Shapes

### Border Radius Scale
Use 10px for fields and chips, 14px for cards, 18px for sheets, and pills for compact actions.

### Photography & Illustration Geometry
Crop promo artwork inside rounded banners while preserving the copy area.

## Components

### Buttons
Use green filled buttons for the next financial action and pale gray for secondary exits.

### Pricing Tabs
Use pills and segmented controls for account, payment, or filter choices.

### Cards & Containers
Use account cards, service grids, transaction groups, offer banners, and instructional sheets.

### Inputs & Forms
Group labeled banking fields in white cards with explicit editable and disabled states.

### Status & Build Page
Show balance, pending amount, reward, eligibility, completion, and failure near the affected object.

### Navigation
Home, Operations, Services, Messages, and More remain in the bottom bar.

### Footer
Keep the white footer stable and mark the active destination in emerald.

## Do's and Don'ts

### Do
- Keep account identity and money visible.
- Pair instructions with one primary action.
- Separate promotions from banking controls.

### Don't
- Don't hide fees or state inside decoration.
- Don't overuse gradients in forms.
- Don't crowd long explanations beside account actions.

## Responsive Behavior

### Breakpoints
Use one column on phones, two grouped columns on tablet, and a capped dashboard on wide screens.

### Touch Targets
Keep transfers, services, cards, switches, and tabs at least 44px.

### Collapsing Strategy
Preserve balance, primary actions, current task, and confirmation; move promotions lower.

### Image Behavior
Crop promotional art without obscuring copy and contain functional card artwork.

## Iteration Guide
1. Build account overview, services, and bottom navigation.
2. Add transactions, card settings, and guided applications.
3. Add campaigns, rewards, and edge states.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Operations, Bonuses, and Receive salary on card were image-reviewed.
- Identity and transfer edge cases were not deeply sampled.

</design-context>
