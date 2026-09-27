<design-context>
---
version: alpha
name: Rostics-design-analysis
description: "A high-energy food-ordering interface built around bright red calls to action, clean white commerce surfaces, condensed black display type, and large appetite-led photography. Product cards stay visually light, while maps and checkout details arrive in white rounded sheets above muted gray context."

colors:
  primary: "#E52B21"
  on-primary: "#FFFFFF"
  primary-hover: "#F04439"
  primary-soft: "#FDE9E7"
  ink: "#171717"
  ink-muted: "#696969"
  ink-subtle: "#9A9A9A"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F3"
  surface-2: "#ECECEA"
  surface-warm: "#F6EEE5"
  hairline: "#E3E3E0"
  semantic-success: "#4FAF62"
  semantic-warning: "#F0A52B"
  semantic-danger: "#D92E25"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Condensed Sans
    fontSize: 42px
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -0.6px
  display-lg:
    fontFamily: Condensed Sans
    fontSize: 34px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.4px
  display-md:
    fontFamily: Condensed Sans
    fontSize: 28px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.2px
  headline:
    fontFamily: Condensed Sans
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.10
    letterSpacing: 0
  card-title:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Condensed Sans
    fontSize: 13px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0.2px
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 32px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 15px 20px
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 18px
  mode-toggle:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 4px
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px
  price-control:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  checkout-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 64px
---

## Overview

Rostic's pairs a clean white ordering shell with loud red actions, heavy condensed headings, and large food photography. The interface stays sparse around products so the photography supplies most of the color and texture. Checkout, restaurant selection, and customization use rounded sheets and anchored actions.

**Key Characteristics:**
- Bright red is reserved for primary actions, active navigation, and location markers.
- Condensed black display type gives campaigns and category headings a poster-like voice.
- Food photography is large, tightly cropped, and shown without ornamental frames.
- Product grids use quiet price pills and circular add controls.
- Maps and dense order details are covered by clean white sheets.

## Colors

### Brand & Accent

- **Red** ({colors.primary}) marks the main CTA, selected navigation, quantity action, and map pin.
- **Soft Red** ({colors.primary-soft}) supports selected or promotional emphasis without competing with the CTA.

### Surface

- **Canvas** ({colors.canvas}) is the default catalog and form background.
- **Surface 1** ({colors.surface-1}) holds price pills, inactive controls, and quiet grouping.
- **Surface 2** ({colors.surface-2}) separates dense supporting details.
- **Warm Surface** ({colors.surface-warm}) supports food-led promotional panels.

### Text

- **Ink** ({colors.ink}) carries headings, product names, and totals.
- **Muted** ({colors.ink-muted}) is for descriptions and supporting order information.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and inactive navigation.

### Semantic

Success, warning, and danger colors appear only in order or validation states. The ordering shell should otherwise remain red, neutral, and photography-led.

## Typography

### Font Family

Use a bold condensed sans for campaign and category display copy, with a neutral system sans for product information, controls, and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 42px | 800 | Full-bleed campaign headline |
| `{typography.display-lg}` | 34px | 800 | Catalog section heading |
| `{typography.display-md}` | 28px | 800 | Product or promotion title |
| `{typography.headline}` | 24px | 800 | Sheet and checkout title |
| `{typography.card-title}` | 16px | 600 | Product name |
| `{typography.body}` | 14px | 400 | Description and order detail |
| `{typography.caption}` | 11px | 400 | Metadata and navigation label |

### Principles

- Keep display lines short and decisive.
- Do not use condensed type for long descriptions or form values.
- Pair bold titles with compact neutral metadata.
- Keep price and total numerals clear rather than decorative.

### Note on Font Substitutes

Use a compact condensed grotesk such as Roboto Condensed for display and SF Pro or Inter for UI copy. Preserve the contrast between the two families.

## Layout

### Spacing System

Use a 4px base with 16px screen gutters, 12px gaps inside grids, and 24px between catalog sections. Bottom actions keep 12–16px edge clearance above the safe area.

### Grid & Container

Catalog screens use a two-column product grid. Promotions and stories use horizontal cards or full-width panels. Product and checkout screens collapse into a single vertical column with a sticky action.

### Whitespace Philosophy

Leave generous white space around product photography and condensed headings. Dense order data belongs in grouped rows rather than filling the catalog canvas.

## Elevation & Depth

Use tonal separation and sheet overlap instead of heavy shadows. A faint shadow may separate the sticky CTA or sheet from scrolling content.

### Decorative Depth

Create depth with food photography, soft promotional backgrounds, and white sheets over maps. Avoid gradients, glossy controls, and ornamental shadows.

## Shapes

### Border Radius Scale

- Primary actions and price controls are pill-shaped.
- Product cards use restrained 8–12px rounding.
- Bottom sheets and promotional panels use 18–24px corners.
- Quantity add controls may be circular.

### Photography & Illustration Geometry

Use high-key food photography with close crops and minimal framing. Photography may bleed to the edge of a campaign card; product thumbnails should remain isolated against white or warm neutral backgrounds.

## Components

### Buttons

Primary actions are full-width red pills with white bold labels. Secondary actions use light-gray pills with dark text. Native controls may be used, but their styling must inherit the red accent, radii, and typography rather than exposing default platform styling.

### Pricing Tabs

Delivery and restaurant modes use a compact pill container with a clearly filled active segment. Category switching can use text tabs, but selection remains red and the number of parallel styles stays low.

### Cards & Containers

Product cards prioritize photography, name, price, and a compact add control. Promotional cards use food photography over pastel or warm neutral fields. Order groups use white rounded containers with thin dividers.

### Inputs & Forms

Address, recipient, and order notes use simple single-column fields with large tap areas. Keep labels and validation close to the value; avoid boxed fields when a grouped row is enough.

### Status & Build Page

Order tracking presents the current stage before supporting details and keeps the active state red. Empty cart and history states should keep one clear recovery action without adding decorative chrome.

### Navigation

Use a four-item bottom bar with red active state and gray inactive labels. Product and checkout pages rely on simple back and close controls while preserving the sticky purchase action.

### Footer

There is no marketing footer in the mobile product. End screens with the bottom navigation or a safe-area-aware sticky CTA on the white canvas.

## Do's and Don'ts

### Do

- Let food photography carry appetite and variety.
- Keep the ordering path white, direct, and action-led.
- Use red for decisions and active states.
- Preserve the condensed display voice in promotional moments.
- Keep checkout totals and next actions anchored.

### Don't

- Do not scatter red across decorative surfaces.
- Do not use condensed type for body copy.
- Do not turn every product into a heavily bordered card.
- Do not mix multiple unrelated chip and button geometries.
- Do not expose default blue iOS controls.

## Responsive Behavior

### Breakpoints

Preserve the two-column product grid on standard phone widths; move to one column only when product imagery and labels no longer remain readable. Detail and checkout flows remain single-column.

### Touch Targets

Keep add, quantity, navigation, close, and address controls at least 44px in both dimensions.

### Collapsing Strategy

Allow horizontal story and category rows to scroll. Keep the primary order CTA pinned while long product options and checkout sections scroll below the title.

### Image Behavior

Crop campaign photography with `cover`; keep isolated product photography proportional and centered. Never stretch food imagery or place text over a busy crop without contrast.

## Iteration Guide

Begin with the white canvas, red action system, condensed heading family, and product grid. Add promotional photography next, then sheets and order states. Judge every new component by whether it makes choosing and ordering food faster.

## Known Gaps

The reviewed scenarios show iPhone ordering, promotions, account, and tracking states. Tablet behavior, accessibility text scaling, dark mode, and rare payment failures were not visible.
