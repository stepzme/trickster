<design-context>
---
version: 1
platform: iOS
name: Alatau-City-Bank-design-analysis
description: "A modular Kazakhstan banking visual system with blue promotional headers, bright yellow decisive actions, pill-shaped bottom navigation, rounded white finance modules, glossy 3D product objects, compact service icon grids, and a fully observed dark-theme counterpart."
colors:
  primary: "#147DC9"
  primary-deep: "#005FA8"
  on-primary: "#FFFFFF"
  primary-soft: "#E8F5FD"
  accent-yellow: "#FFE000"
  accent-yellow-soft: "#FFF7A8"
  deposit-green: "#20BD55"
  investment-violet: "#7C5BD6"
  success: "#22B95A"
  danger: "#E44843"
  ink: "#151719"
  ink-muted: "#73777B"
  ink-subtle: "#A8ADB2"
  canvas: "#F4F5F6"
  surface-1: "#FFFFFF"
  surface-2: "#EEF0F2"
  field: "#F1F2F3"
  hairline: "#E0E3E6"
  dark-canvas: "#101010"
  dark-surface: "#202020"
  dark-surface-2: "#2A2A2A"
  dark-ink: "#F5F5F5"
  dark-muted: "#A2A2A2"
  overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: 0 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.06, letterSpacing: 0 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0 }
  headline: { fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.26, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.34, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.18, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0 }
  mono: { fontFamily: SF Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.28, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 22, xl: 30, xxl: 44, section: 60 }
components:
  primary-yellow-button: { backgroundColor: "{colors.accent-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 20] }
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  service-grid: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 16 }
  segmented-control: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 4 }
  input-field: { backgroundColor: "{colors.field}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 12] }
  bottom-tab-bar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 10] }
---

# Overview

Alatau City Bank uses a soft modular banking style: blue campaign headers, white rounded modules, bright yellow primary actions, glossy product objects, and compact icon grids. The same component skeleton appears in light and dark captures; dark mode swaps surfaces and text values while preserving spacing, card shapes, icon scale, and the yellow action language.

**Key Characteristics:**
- Blue promotional hero with layered 3D product imagery.
- Bright yellow full-width action buttons and product identity accents.
- Rounded white modules on light gray canvas.
- Compact service icons in four-column groups.
- Finance cards with balances, product art, and row-based controls.
- Pill-shaped five-item bottom bar with blue selected state.
- Dark theme using near-black canvas and charcoal modules.

# Non-negotiable visual invariants

- Primary conversion buttons are bright yellow with dark text and rounded rectangular shape.
- Home-style promotional areas use saturated blue gradients behind glossy 3D finance objects or large rate numerals.
- Product, history, transfer, and profile content sits in rounded white modules on a pale gray canvas.
- Service choices are compact icon-and-label cells, usually arranged in a four-column grid or rounded list rows.
- Finance product screens show balances first, then paired quick actions, then history or info modules.
- Bottom navigation is a floating pill with five compact items and a blue selected icon or background.
- Dark theme preserves the same layout but uses black canvas, charcoal cards, light text, and the same yellow primary action.

# Color and surfaces

### Brand & Accent
- **Alatau blue** ({colors.primary}) appears in the hero, selected tab states, service icons, information links, and search/notification accents.
- **Yellow** ({colors.accent-yellow}) is the decisive action color: Open product, Pay, Transfer, and selected product identity. It should be scarce and high priority.
- **Green** ({colors.deposit-green}) supports deposit visuals, positive amounts, success, and selected toggles.
- **Violet** ({colors.investment-violet}) appears only in product taxonomy or investment-related object color, not as a global brand replacement.

### Surface
- **Canvas** ({colors.canvas}) is a pale gray base visible between cards.
- **Surface 1** ({colors.surface-1}) is the main module color for service grids, finance cards, forms, sheets, and bottom navigation.
- **Surface 2** ({colors.surface-2}) is used for segmented-control tracks, disabled input blocks, and soft field backgrounds.
- **Dark Canvas / Surfaces** ({colors.dark-canvas}, {colors.dark-surface}, {colors.dark-surface-2}) mirror the light hierarchy without adding new colors.

### Text
- **Ink** ({colors.ink}) carries balances, screen titles, product names, and primary row labels.
- **Ink Muted** ({colors.ink-muted}) carries descriptions, product subtitles, transaction metadata, and explanatory text.
- **Ink Subtle** ({colors.ink-subtle}) carries placeholders and disabled actions.
- In dark mode, use **Dark Ink** and **Dark Muted** while retaining colored icons and yellow actions.

### Semantic
- Positive balances and completed state use green.
- Failed or destructive actions use red and should not reuse yellow.
- Disabled actions keep their normal shape but fade the fill and label.
- Verification and camera states may use a black or dimmed full-screen surface with a white sheet or white instruction text.

# Typography

### Font Family

- **SF Pro Display** for campaign rates, balances, and major screen titles.
- **SF Pro Text** for rows, forms, service labels, filters, and tab labels.
- **SF Mono** only for account fragments, card suffixes, codes, and aligned money snippets when needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40 | 800 | Campaign rate or large product number |
| `{typography.display-lg}` | 32 | 700 | Major balance or success amount |
| `{typography.display-md}` | 26 | 700 | Product balance, receipt total |
| `{typography.headline}` | 21 | 700 | Module or screen heading |
| `{typography.card-title}` | 15 | 600 | Product title, list row title |
| `{typography.body}` | 14 | 400 | Form labels, descriptions, transaction rows |
| `{typography.caption}` | 10 | 400 | Service labels and bottom tabs |
| `{typography.button}` | 15 | 600 | Yellow primary actions |

### Principles

- Financial amounts use stronger weight and trailing alignment when inside lists.
- Service labels are short and centered under icons.
- Form labels sit above fields or as subdued placeholders inside pale fields.
- Keep Cyrillic text legible and avoid condensed fonts.
- Dark mode must keep the same relative hierarchy, not simply invert all colors.

### Note on Font Substitutes

Use Inter, Roboto, or the platform system font if SF Pro is unavailable. Enable tabular numerals for money and account fragments.

# Screen composition

### Grid & Container

Use a vertical stack of rounded modules. Home-style compositions place a blue hero at the top, then a large white service module with two rows of four icons, then horizontal product cards and a yellow product-opening action. Profile and product lists use separate rounded modules with headers, rows, and trailing chevrons.

Finance product screens use a balance-first composition: top product identity, large balance, quick-action pair or trio, then white modules for history, info, and settings. Transfer and payment screens use one-column forms with segmented controls, pale input fields, preset chips, and a pinned yellow action low on the viewport.

Bottom sheets are white with large rounded top corners, a visible close control, and stacked product rows with thumbnail 3D objects. Keep the sheet visually attached to the lower half of the screen with a dimmed background when used.

### Whitespace Philosophy

The app is dense but soft. Use clear gray gaps between modules, generous rounded-card padding, and compact icon cells. Avoid large empty hero space except where Screen Gallery evidence shows an intentionally empty state card.

# Navigation appearance

The bottom bar is a floating rounded pill with five equal items. Selected state uses blue on the icon and a pale blue or gray active capsule behind the item. In dark mode the pill becomes dark charcoal, inactive icons are light, and the selected state remains blue.

Top controls are circular or pill-like: profile, search, notification, back, edit, and close. Search fields are pale, rounded, and horizontally compact. Segmented controls use a gray rounded track with one raised selected segment.

# Components

### Buttons

- **Primary**: bright yellow, full width, dark label, medium corner radius, pinned near the bottom for forms.
- **Secondary**: blue text or pale surface row; do not compete with yellow.
- **Quick action**: rounded soft tiles with icon above label for Transfer, Top up, Withdraw, and similar finance controls.
- **Disabled**: same footprint as enabled, lower opacity, pale yellow or pale gray fill.
- **Close**: small circular gray control in sheets or verification overlays.

### Cards & Containers

Finance modules use white cards with 14 to 24 point corner radii. Product cards may show a soft gradient or glossy object but keep text on the left and object on the right. Transaction rows include an icon or merchant mark, title, subtitle, and trailing amount; positive values use green.

### Inputs & Forms

Fields are pale gray rounded rectangles with light placeholder text. Amount presets are rounded chips in a two-row grid. Recipient forms use segmented options for phone, card, and account. Commission, limits, and helper text appear below fields in small muted text.

### Status & Build Page

Analytics use a compact module with totals and colored horizontal bars. Empty transfer history uses a white rounded card with a centered blue star and muted explanatory copy. Identity verification uses a dim camera-like backdrop plus a rounded white instruction sheet and yellow Start button.

### Navigation

Use the researched visual language for the five-item tab bar, top search, notifications, back controls, edit controls, and profile shortcuts. Avoid adding unobserved tabs or toolbar chrome in the style layer.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | App background in light mode |
| 1 | White rounded module | Services, products, forms, history |
| 2 | Blue or dark hero field | Campaign header and verification state |
| 3 | Glossy 3D object | Product promotions, deposits, service thumbnails |

### Decorative Depth

Use soft shadows and glossy 3D object renders, not flat vector decoration. Yellow card renders, metallic rate numerals, deposit safes, coins, percent signs, and compact service objects should be raster assets with consistent lighting. Dark mode relies more on surface contrast than shadow.

# States

- **Selected tab**: blue icon or blue active capsule inside the bottom pill.
- **Selected segmented option**: raised white or lighter segment on a pale gray track.
- **Disabled primary action**: pale yellow fill and muted label while preserving full-width placement.
- **Positive transaction**: green trailing amount and standard row structure.
- **Notification**: small red dot near the bell.
- **Dark theme**: black canvas, charcoal modules, light text, same yellow action.
- **Verification**: dark camera surface with white instruction sheet or white recognition text.
- **Empty history**: centered small blue object or star, bold title, muted explanatory copy.

# iOS adaptation

| Context | Width | Treatment |
|---|---|---|
| Narrow iPhone | less than 390 | Keep bottom pill visible, allow service labels to wrap, keep yellow actions full width |
| Standard iPhone | 390 to 430 | Preserve four-column service grid and horizontal product cards |
| Wide iPhone or iPad compact | 431 and above | Center the content column and keep finance forms single column |

### Touch Targets

Maintain at least 44 points for bottom tabs, service icons, quick actions, segmented controls, form rows, toggles, and yellow primary buttons.

### Collapsing Strategy

For small screens, reduce horizontal product-card count through scrolling before shrinking icons. Keep balances, source product, amount field, limits/commission, and primary button visible in financial forms. Let secondary history modules move below the fold.

### Image Behavior

Promotional objects should be contained, not cropped through their main product shape. Hero backgrounds may crop decorative gradient or glow, but preserve rate text and product object. Card renders should keep visible card identity and network marks when shown.

On iPhone, respect safe areas and the home indicator. At larger Dynamic Type sizes, keep financial amount and action order intact, wrap descriptions, and allow module height to grow. In dark mode, do not place dark cards on a light canvas or light cards on an isolated dark canvas.

# Anti-generic checklist

- Do not replace yellow primary actions with default iOS blue buttons.
- Do not flatten glossy 3D product imagery into SF Symbols, emoji, or simple vector pictograms.
- Do not remove rounded white modules or the floating pill bottom bar.
- Do not treat dark mode as a color inversion; preserve charcoal modules and the same selected states.
- Do not hide limits, commission, disabled state, or amount presets inside payment and transfer forms.
- Do not use generic card lists where the evidence shows service icon grids or product object cards.
- Do not mix success green with yellow conversion buttons.

</design-context>
