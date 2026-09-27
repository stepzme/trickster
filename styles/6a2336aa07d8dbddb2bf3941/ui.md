<design-context>
---
version: alpha
name: VTB-design-analysis
description: "A feature-rich banking interface built from vivid blue account headers, white rounded sheets, bold black monetary typography, pastel payment icons, multicolor gradients, and polished 3D product metaphors. It is broad, energetic, and conversion-oriented."

colors:
  primary: "#1677FF"
  on-primary: "#FFFFFF"
  primary-pressed: "#0E5FD6"
  ink: "#181A1E"
  ink-muted: "#6E727A"
  ink-subtle: "#A5A9B0"
  canvas: "#F4F6FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF3FB"
  accent-violet: "#B14CEB"
  accent-cyan: "#35CDE8"
  hairline: "#E0E4EA"
  semantic-success: "#22A768"
  semantic-warning: "#F0A43A"
  semantic-danger: "#E24E5B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  product-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xl}", height: 60px }
---

## Overview

VTB layers white financial sheets over a vivid blue account header and uses polished 3D product art for discovery. Pastel category icons and clear monetary hierarchy tame a very broad feature set.

## Colors

### Brand & Accent

Bright blue owns primary action, balance context, links, and navigation. Violet, cyan, magenta, and yellow distinguish promotions and product categories.

### Surface

Use pale blue-gray canvas, white cards and sheets, and saturated blue for the main account header or navigation dock.

### Text

Near-black carries balances and titles; gray carries product labels and terms. White appears on blue and dark gradients.

### Semantic

Green and red show financial result, amber warns, and blue remains brand action.

## Typography

### Font Family

Use a modern system sans with tabular figures for balances, rates, and payments.

### Hierarchy

Use 32–40px balances, 20–25px page and product headings, 14–17px rows, and 10–12px metadata.

### Principles

Keep amount, product, rate, and action distinct. Align numeric values and avoid bolding every service row.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures and strong 700–750 display weights.

## Layout

### Spacing System

Use a 4px base, 16px gutters, 10–12px card gaps, and 24px between major product groups.

### Grid & Container

Home stacks account header, quick-action grid, promotions, payments sheet, and product groups. Details use one wide account card and lists.

### Whitespace Philosophy

Give totals and primary actions open space. Dense payment categories should stay aligned in grids or lists.

## Elevation & Depth

Use rounded sheet overlap, soft card shadow, and layered gradient headers. Keep operation rows flat.

### Decorative Depth

Use glossy 3D product metaphors, spectral gradients, and subtle particles inside promotions. Avoid such decoration in transfers or confirmations.

## Shapes

### Border Radius Scale

Use 8px fields, 12px action tiles, 18px account cards, 24px sheets, and round category icons.

### Photography & Illustration Geometry

Center 3D product objects on pastel gradient tiles with safe text space. Keep partner logos inside clean circles.

## Components

### Buttons

Primary open, transfer, and support actions are blue rectangles or pills. Native controls must inherit blue focus and the rounded banking system.

### Pricing Tabs

Product types, payment modes, and rate options use compact segments, chips, or cards with blue selected state.

### Cards & Containers

Account cards foreground balance and actions. Product tiles pair one 3D metaphor with a short category title.

### Inputs & Forms

Transfer and application fields use white or pale fills with clear source, recipient, amount, fee, and validation.

### Status & Build Page

Privilege, card state, transfer status, savings goal, rate conditions, application, unread chat, and history appear in context.

### Navigation

Use five bottom destinations for Home, Payments, Products, History, and Chat. Keep product-specific settings local.

### Footer

There is no footer. Documents, legal, and support links live inside product or profile details.

## Do's and Don'ts

### Do

- Lead with balance and next actions.
- Keep fees and reversibility visible.
- Use product art only for discovery.
- Align financial values.

### Don't

- Do not decorate transactional confirmation.
- Do not use blue for profit or loss.
- Do not crowd the home header.
- Do not expose default native accents.

## Responsive Behavior

### Breakpoints

Phones use one financial flow at a time. Wider screens may place account list, product detail, and history in adjacent panes.

### Touch Targets

Accounts, quick actions, payment categories, product tiles, navigation, and confirmation controls require at least 44px targets.

### Collapsing Strategy

Keep balance, source, recipient, amount, fee, and next action visible. Collapse terms and secondary benefits into detail sections.

### Image Behavior

Use `contain` for 3D product metaphors, cards, and logos; use `cover` only for editorial campaign photography.

## Iteration Guide

Start with login, Home balance, cards, Payments, transfer confirmation, Products, History, and Chat. Add deposits, credit, investments, rewards, and personalized discovery afterward.

## Known Gaps

The catalog contains 245 flows across core banking and product management. Representative complete scenarios were inspected; rare product branches and some video-only transition states are less visually verified.

</design-context>

Use the design system above for all UI you generate.
