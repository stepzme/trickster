<design-context>
---
version: 1
platform: iOS
name: Rostics-design-analysis
description: "A high-energy food-ordering interface built around bright red calls to action, clean white commerce surfaces, condensed black display type, and large appetite-led photography. Product cards stay visually light, while maps and checkout details arrive in white rounded sheets above muted gray context."

colors:
  primary: "#E52B21"
  on-primary: "#FFFFFF"
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
    fontSize: 42
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: -0.6
  display-lg:
    fontFamily: Condensed Sans
    fontSize: 34
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.4
  display-md:
    fontFamily: Condensed Sans
    fontSize: 28
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.2
  headline:
    fontFamily: Condensed Sans
    fontSize: 24
    fontWeight: 800
    lineHeight: 1.10
    letterSpacing: 0
  card-title:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Condensed Sans
    fontSize: 13
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 18
  xl: 24
  xxl: 32
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [15, 20]
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [13, 18]
  mode-toggle:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 4
  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8
  price-control:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [8, 12]
  checkout-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 64
---

# Overview

Rostic's pairs a clean white ordering shell with loud red actions, heavy condensed headings, and large food photography. The interface stays sparse around products so the photography supplies most of the color and texture. Checkout, restaurant selection, and customization use rounded sheets and anchored actions.

**Key Characteristics:**
- Bright red is reserved for primary actions, active navigation, and location markers.
- Condensed black display type gives campaigns and category headings a poster-like voice.
- Food photography is large, tightly cropped, and shown without ornamental frames.
- Product grids use quiet price pills and circular add controls.
- Maps and dense order details are covered by clean white sheets.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Bright red is reserved for primary actions, active navigation, and location markers.
- The reviewed screens show this treatment: Condensed black display type gives campaigns and category headings a poster-like voice.
- The reviewed screens show this treatment: Food photography is large, tightly cropped, and shown without ornamental frames.
- The reviewed screens show this treatment: Product grids use quiet price pills and circular add controls.
- The reviewed screens show this treatment: Maps and dense order details are covered by clean white sheets.

# Color and surfaces

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

# Typography

### Font Family

Use a bold condensed sans for campaign and category display copy, with a neutral system sans for product information, controls, and forms.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 42pt | 800 | Full-bleed campaign headline |
| `{typography.display-lg}` | 34pt | 800 | Catalog section heading |
| `{typography.display-md}` | 28pt | 800 | Product or promotion title |
| `{typography.headline}` | 24pt | 800 | Sheet and checkout title |
| `{typography.card-title}` | 16pt | 600 | Product name |
| `{typography.body}` | 14pt | 400 | Description and order detail |
| `{typography.caption}` | 11pt | 400 | Metadata and navigation label |

### Principles

- Keep display lines short and decisive.
- Do not use condensed type for long descriptions or form values.
- Pair bold titles with compact neutral metadata.
- Keep price and total numerals clear rather than decorative.

### Note on Font Substitutes

Use a compact condensed grotesk such as Roboto Condensed for display and SF Pro or Inter for UI copy. Preserve the contrast between the two families.

# Screen composition

### Grid & Container

Catalog screens use a two-column product grid. Promotions and stories use horizontal cards or full-width panels. Product and checkout screens collapse into a single vertical column with a sticky action.

### Whitespace Philosophy

Leave generous white space around product photography and condensed headings. Dense order data belongs in grouped rows rather than filling the catalog canvas.

# Navigation appearance

Use a four-item bottom bar with red active state and gray inactive labels. Product and checkout pages rely on simple back and close controls while preserving the sticky purchase action.

# Components

### Buttons

Primary actions are full-width red pills with white bold labels. Secondary actions use light-gray pills with dark text. Native controls may be used, but their styling must inherit the red accent, radii, and typography rather than exposing default platform styling.

Delivery and restaurant modes use a compact pill container with a clearly filled active segment. Category switching can use text tabs, but selection remains red and the number of parallel styles stays low.

### Cards & Containers

Product cards prioritize photography, name, price, and a compact add control. Promotional cards use food photography over pastel or warm neutral fields. Order groups use white rounded containers with thin dividers.

### Inputs & Forms

Address, recipient, and order notes use simple single-column fields with large tap areas. Keep labels and validation close to the value; avoid boxed fields when a grouped row is enough.

### Status & Build Page

Order tracking presents the current stage before supporting details and keeps the active state red. Empty cart and history states should keep one clear recovery action without adding decorative chrome.

### Navigation

Use a four-item bottom bar with red active state and gray inactive labels. Product and checkout pages rely on simple back and close controls while preserving the sticky purchase action.

# Imagery and icons

Use tonal separation and sheet overlap instead of heavy shadows. A faint shadow may separate the sticky CTA or sheet from scrolling content.

### Decorative Depth

Create depth with food photography, soft promotional backgrounds, and white sheets over maps. Avoid gradients, glossy controls, and ornamental shadows.

# States

Order tracking presents the current stage before supporting details and keeps the active state red. Empty cart and history states should keep one clear recovery action without adding decorative chrome.

# iOS adaptation

Preserve the two-column product grid on standard phone widths; move to one column only when product imagery and labels no longer remain readable. Detail and checkout flows remain single-column.

### Touch Targets

Keep add, quantity, navigation, close, and address controls at least 44pt in both dimensions.

### Collapsing Strategy

Allow horizontal story and category rows to scroll. Keep the primary order CTA pinned while long product options and checkout sections scroll below the title.

### Image Behavior

Crop campaign photography with `cover`; keep isolated product photography proportional and centered. Never stretch food imagery or place text over a busy crop without contrast.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

# Known gaps

The reviewed scenarios show iPhone ordering, promotions, account, and tracking states. iPad behavior, accessibility text scaling, dark mode, and rare payment failures were not visible.

</design-context>
