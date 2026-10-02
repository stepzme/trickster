<design-context>
---
version: 1
platform: iOS
name: Trainline-design-analysis
description: "A rail-travel interface style that combines deep teal and deep indigo fields, bright mint actions, white rounded search panels, dense timetable-like rows, large photographic discovery cards, and flat service illustrations. Expressive surfaces are image-led and colorful; transactional surfaces are compact, white, gridded, and text-forward."
colors:
  primary: "#25008B"
  on-primary: "#FFFFFF"
  primary-focus: "#180064"
  ink: "#11131A"
  ink-muted: "#5F626B"
  ink-subtle: "#92969E"
  ink-tertiary: "#C4C7CC"
  canvas: "#F4F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F3"
  surface-3: "#E5E7EA"
  surface-4: "#D8DBDF"
  hairline: "#E0E2E5"
  hairline-strong: "#C8CCD1"
  inverse-canvas: "#003B39"
  inverse-canvas-2: "#00563F"
  inverse-surface-1: "#79D477"
  inverse-surface-2: "#A8F79B"
  inverse-ink: "#FFFFFF"
  brand-mint: "#91FF83"
  brand-teal: "#08AD94"
  accent-cyan: "#B8F4FF"
  accent-lime: "#A8F79B"
  accent-purple: "#25008B"
  semantic-success: "#08AD94"
  semantic-overlay: "#11131A"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44 }
components:
  button-primary: { backgroundColor: "{colors.brand-mint}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 18] }
  button-secondary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18] }
  search-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 14 }
  result-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12 }
  option-card: { backgroundColor: "#F4F2FF", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14 }
  ticket-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12] }
---

# Overview

Trainline's observed style alternates between expressive travel discovery and compact transactional surfaces. Dark teal and indigo fields establish brand weight, bright mint actions create momentum, and white rounded panels keep route, time, price, and account details legible.

# Non-negotiable visual invariants

- Deep teal or indigo fields must carry the strongest brand areas; white panels sit on top as rounded functional surfaces.
- Mint is the dominant positive action color and should stay bright, rounded, and high-contrast.
- Discovery images are real cropped travel photography inside large rounded rectangles, not abstract gradients.
- Service illustrations are flat, colorful, tile-based raster assets with dark outlines and simple object silhouettes.
- Transactional rows are compact and gridded, with route/time/price facts aligned for comparison.
- Bottom shell controls use small labels and glyphs on a white rounded bar, with purple or teal selected emphasis.
- Native web or permission overlays may appear, but app-owned surfaces around them keep the Trainline palette.

# Color and surfaces

### Brand & Accent

Use deep indigo for selected shell emphasis, headers, and focused controls. Use dark teal for inverse brand fields and onboarding-like brand surfaces. Use mint for the most important visible action surfaces.

### Surface

Use white cards and panels on pale gray canvases for dense information. Use dark teal with mint or white text for expressive brand surfaces. Use very pale lavender only for selected or highlighted option regions.

### Text

Use near-black for route facts, titles, prices, and actions on light surfaces. Use white on dark brand fields. Use cool gray for helper text, metadata, disabled content, and legal copy.

### Semantic

Use teal for success and reassurance, indigo for selection, mint for forward action, and neutral gray for unavailable or secondary states. Keep semantic color tied to text or controls rather than decorative backgrounds.

# Typography

### Font Family

Use SF Pro Display for large brand statements and section headings. Use SF Pro Text for fields, rows, cards, legal copy, and tab labels.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 38pt | 700 | Oversized brand statement |
| display-lg | 30pt | 700 | Large travel/discovery heading |
| headline | 21pt | 700 | Section and panel heading |
| card-title | 16pt | 600 | Card title or row emphasis |
| body | 13pt | 400 | Dense facts, labels, and conditions |
| caption | 10pt | 400 | Navigation labels and metadata |

### Principles

Make numbers, route names, prices, and compact labels easy to scan. Use bold only for primary facts or section identity. Keep longer explanatory text sentence-case and tightly line-spaced.

### Note on Font Substitutes

Use a system sans with tabular numerals and strong bold weights. Avoid decorative travel fonts or condensed display faces.

# Screen composition

### Grid & Container

Brand/discovery surfaces use a full-width colored header, rounded white search capsule, large image cards, and horizontally clipped tiles. Dense surfaces use one stacked column of white panels with aligned facts, small dividers, and sticky-looking action regions.

### Whitespace Philosophy

Allow generous space around hero photography and onboarding copy. Compress related timetable, fare, ticket, and account facts so each row can be compared without excessive scrolling.

# Navigation appearance

Navigation visuals are small, labeled, and subordinate. The selected item uses purple or teal emphasis; inactive items use gray. Avoid oversized icon-only navigation and avoid default blue selected states.

# Components

### Buttons

Primary actions are mint rounded pills or rounded rectangles with dark text. Secondary commitment buttons may use indigo with white text. Inline choices use white, outlined, or pale-lavender selected cards.

Ticket type, class, flexibility, sorting, and time-like choices use compact rows, outlined cards, segmented controls, or small chips. Keep selected states explicit through border, tint, and text weight.

### Cards & Containers

Search panels are large white rounded capsules or stacked rounded panels. Discovery cards use rounded photography with overlaid white type where observed. Transactional cards use white surfaces, small radii, thin separators, and structured internal alignment.

### Inputs & Forms

Fields use clear labels, rounded white surfaces, gray helper text, and focused states with indigo or dark outline emphasis. Suggestion rows, date controls, passenger controls, and payment-like rows stay compact and text-led.

### Status & Build Page

Use concise text and small labels for direct, fastest, delayed, unavailable, selected, included, refundable, total, protected, or unprotected states. Place status near the related route, option, or price fact.

### Navigation

Use consistent line glyphs and small labels. Keep the selected mark color-matched to the current brand surface. Do not combine arbitrary SF Symbols with mismatched stroke weights.

# Imagery and icons

Photography and illustration are source-proven parts of this style. Photography shows travelers and journey environments in rounded crops. Service illustrations use simple object art, thick dark outlines, mint/cyan/lime/purple fills, and generous padding inside tiles.

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Dense transactional screens |
| 1 | White card or capsule | Search, ticket, account, and option surfaces |
| 2 | Sticky or bottom action region | Continue, total, confirmation controls |
| 3 | Sheet or browser overlay over scrim | Focused choice, sign-in, permission-like surfaces |

### Decorative Depth

Use soft shadows on image cards, ticket cards, and raised sheets. On dense surfaces, prefer contrast, borders, and sticky regions over heavy shadows. Do not add decorative blobs or gradients.

# States

Represent selected, inactive, focused, disabled, unavailable, fastest, direct, delayed, included, refundable, total, signed-in overlay, browser overlay, and bottom-sheet states with the color, typography, and container treatments above.

# iOS adaptation

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve visual reading order for VoiceOver. At larger Dynamic Type sizes, allow route, price, and status text to wrap without losing the alignment of primary facts. Restyle native sheets, controls, and browser-adjacent surfaces so app-owned UI remains visibly Trainline.

### Touch Targets

Search capsules, station rows, date cells, option cards, bottom bar items, result rows, and primary actions must retain at least 44pt hit areas.

### Collapsing Strategy

Preserve primary route facts, time facts, price facts, selected option, and primary action first. Collapse promotional tiles, secondary explanations, and repeated helper text before reducing row readability.

### Image Behavior

Use `cover` for travel photography and preserve the observed rounded crop. Use `contain` for service illustrations, keeping generous internal padding and preventing object silhouettes from touching tile edges.

# Anti-generic checklist

- Do not replace Trainline indigo, teal, and mint with default iOS blue.
- Do not use abstract gradients instead of source-observed photography or service art.
- Do not turn dense rows into oversized generic cards.
- Do not omit service illustrations where a tile or educational surface depends on their visual mass.
- Do not draw required illustrations with SwiftUI shapes, SF Symbols, emoji, programmatic paths, or icon-font substitutes.
- Do not integrate generated art before explicit user visual approval and raster asset integration.
- Do not flatten route, time, price, and status hierarchy into one body-text scale.

Source-specific guardrails retained from the review:

### Do

- Keep brand surfaces dark and actions mint.
- Keep route and price facts gridded and compact.
- Use real travel photography for discovery cards.
- Use approved raster service illustrations for illustrated tiles and education surfaces.
- Keep legal and helper copy readable without making it visually dominant.

### Don't

- Do not use promotional photography behind dense transactional text.
- Do not use teal or mint as a generic full-screen background for every surface.
- Do not substitute source-proven illustrations with arbitrary symbols.
- Do not mix unrelated illustration styles in the same tile system.
- Do not hide unavailable, selected, or included states behind color alone.

</design-context>
