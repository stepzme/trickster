<design-context>
---
version: alpha
name: Alatau-City-Bank-design-analysis
description: "A high-density retail-banking interface combining bright Alatau blue, emphatic yellow actions, white rounded modules, and glossy 3D product objects. Five persistent tabs organize an unusually broad service catalogue, with light and dark themes sharing the same modular card hierarchy."
colors:
  primary: "#1679C8"
  on-primary: "#FFFFFF"
  primary-hover: "#0F65AC"
  primary-soft: "#EAF5FD"
  accent-yellow: "#FFD900"
  accent-green: "#15B861"
  accent-violet: "#8B55C8"
  ink: "#161819"
  ink-muted: "#74787A"
  ink-subtle: "#A9ADB0"
  canvas: "#F5F6F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECEFF1"
  hairline: "#E1E4E6"
  dark-canvas: "#101010"
  dark-surface: "#202020"
  semantic-success: "#22BA55"
  semantic-danger: "#E6534B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 13px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.accent-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 20px }
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  service-grid: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 16px }
  transfer-form: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  receipt-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 20px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 12px 16px }
---

## Overview

Alatau City Bank compresses a large financial catalogue into white rounded modules, icon grids, and five stable destinations. Blue carries brand and information; yellow owns high-priority conversion.

**Key Characteristics:**
- Blue promotional hero with white modular foreground.
- Yellow full-width primary actions.
- Rounded service grids and finance cards.
- Glossy 3D product and service objects.
- Stable five-tab navigation.
- Complete dark-theme counterpart.

## Colors

### Brand & Accent
- **Alatau Blue** ({colors.primary}): Brand, selected states, and informational icons.
- **Yellow** ({colors.accent-yellow}): Primary conversion and card identity.
- **Green** and **Violet**: Success, deposits, investments, and insurance.

### Surface
- **Canvas** ({colors.canvas}): Light gray app background.
- **Surface 1** ({colors.surface-1}): Cards, sheets, and navigation.
- **Surface 2** ({colors.surface-2}): Input and disabled group background.
- **Dark Canvas / Surface**: Full dark-theme hierarchy.

### Text
- **Ink** ({colors.ink}): Headings, balances, and actions.
- **Ink Muted** ({colors.ink-muted}): Product descriptions and transaction metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled labels.

### Semantic
- **Success** ({colors.semantic-success}): Completed payment and positive balance.
- **Danger** ({colors.semantic-danger}): Failed or destructive state.
- **Overlay** ({colors.semantic-overlay}): Sheet and identity-capture scrim.

## Typography

### Font Family

- **System Sans** — product, transaction, service, and navigation UI.
- **System Mono** — account fragments, codes, and aligned financial figures.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 800 | Promotional rate |
| `{typography.display-md}` | 26px | 700 | Balance or receipt amount |
| `{typography.headline}` | 21px | 700 | Screen heading |
| `{typography.card-title}` | 15px | 600 | Product title |
| `{typography.body}` | 14px | 400 | Default content |
| `{typography.caption}` | 10px | 400 | Tabs and service labels |
| `{typography.button}` | 15px | 600 | Actions |

### Principles

- Emphasize balance, rate, and receipt amount.
- Keep category labels concise under icons.
- Align transaction values to the trailing edge.
- Preserve hierarchy when switching theme.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with tabular numerals and Cyrillic support.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 12–16px; module gaps 8–12px; card interiors 14–20px.

### Grid & Container

Home layers a full-width hero, four-column service grid, and horizontal product cards. Forms and transaction lists use one column; service sheets use four-column icon groups.

### Whitespace Philosophy

Use gray canvas gaps to separate large white modules. Keep whitespace inside financial forms generous even when the catalogue is dense.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Gray canvas | Screen base |
| 1 | White rounded module | Lists and services |
| 2 | Floating bottom sheet | Product or menu choice |
| 3 | Saturated hero or card | Promotion and identity |

### Decorative Depth

Use soft shadows, bright gradients, and modeled 3D objects. Dark mode replaces shadows with surface contrast.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Chips and compact fields |
| `{rounded.sm}` | 10px | Buttons and rows |
| `{rounded.md}` | 14px | Product cards |
| `{rounded.lg}` | 20px | Sheets and large groups |
| `{rounded.pill}` | full | Tab bar and segmented controls |

### Photography & Illustration Geometry

Place 3D objects in square or softly rounded tiles. Card renders may tilt slightly but must keep product branding readable.

## Components

### Buttons

Primary actions use yellow with dark text. Blue text or outline supports secondary actions. Destructive actions use explicit red labels.

### Pricing Tabs

Segmented controls use white or light gray tracks with the selected option raised. History filters use compact pills.

### Cards & Containers

Product cards combine title, summary, and 3D object. Account cards group balance and quick actions. Receipt cards place status and amount above details.

### Inputs & Forms

Transfer forms stack source, recipient, amount, and message. Preset chips assist common amounts; keyboard-safe actions remain pinned low.

### Status & Build Page

Success uses a large green check and receipt metadata. Analytics uses colored bars plus numeric labels. Disabled actions fade without losing form structure.

### Navigation

Home, My bank, History, Transfers, and Payments live in a rounded bottom bar. Search and notifications remain at the top.

### Footer

The persistent tab bar is the footer. Forms may add a full-width yellow action immediately above the safe area.

## Do's and Don'ts

### Do

- Use yellow only for decisive actions or product identity.
- Keep the five destinations stable.
- Pair icons with readable labels.
- Show limits and commission before payment.
- Mirror the hierarchy in dark theme.

### Don't

- Don't hide services behind unlabeled icons.
- Don't mix success green with conversion yellow.
- Don't crop card identity or account fragments.
- Don't place dark cards on an isolated light canvas.
- Don't remove receipt actions.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center modules and widen service grid |
| Compact | 390–767px | Default four-column mobile grid |
| Small | <390px | Reduce service grid to three columns |

### Touch Targets

Maintain 44px for service icons, segmented controls, list rows, and bottom navigation.

### Collapsing Strategy

Reduce icon-grid columns before shrinking labels. Keep finance forms single-column and actions full width. Horizontal product cards may scroll.

### Image Behavior

Contain product objects and card renders. Campaign heroes may crop decorative background but must preserve the rate and primary object.

## Iteration Guide

1. Establish surface hierarchy and five-tab navigation.
2. Build service grid and product cards.
3. Implement transfer form and receipt.
4. Add history and analytics.
5. Mirror the system in dark theme, then add 3D accents.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- The 152-flow inventory was complete; representative leaf flows were inspected.
- Motion in promotional and identity flows was not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
