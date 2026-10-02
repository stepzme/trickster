<design-context>
---
version: 1
platform: iOS
name: Buy-am-design-analysis
description: "A white, photo-led delivery marketplace with soft gray search and control fields, pill-shaped vertical selectors, burgundy-magenta commerce actions, compact product grids, real merchant imagery, and minimal list-style account surfaces. The visual system stays light and dense, letting food, retail products, logos, and order totals carry most of the screen weight."
colors:
  primary: "#D51B66"
  on-primary: "#FFFFFF"
  primary-focus: "#B91656"
  primary-soft: "#FCE6F0"
  ink: "#202124"
  ink-muted: "#6F7377"
  ink-subtle: "#A8ADB2"
  ink-tertiary: "#C7CBD0"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F5F5F6"
  surface-3: "#EEEEF0"
  surface-4: "#E3E5E8"
  hairline: "#ECEDEF"
  hairline-strong: "#D9DCE0"
  image-scrim: "#000000"
  rating: "#F5C542"
  semantic-success: "#2E9B63"
  semantic-danger: "#D63A45"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 36
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 16]}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  category-pill: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.subhead}", rounded: "{rounded.pill}", padding: [9, 14]}
  merchant-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  product-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10}
  price-pill: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.subhead}", rounded: "{rounded.pill}", padding: [8, 12]}
  grouped-list: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 16]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Buy.am is a light marketplace style driven by real product photography, partner logos, and a saturated magenta purchase accent. The interface is mostly white, low-shadow, and compact: search, address, pills, cards, basket totals, and account rows all sit close to the native iOS baseline while brand color marks commitment and selection.

# Non-negotiable visual invariants

- Keep the canvas white, with only pale gray fields, separators, and price backgrounds interrupting it.
- Use burgundy-magenta only for selected destinations, hearts, basket CTAs, quantity commitment, and primary completion actions.
- Lead discovery screens with real merchant, restaurant, food, retail product, and partner-logo imagery.
- Build top controls from rounded search fields and pill-shaped category selectors, not rectangular tabs.
- Product and merchant cards stay compact, two-column or feed-like, with very light borders and minimal shadows.
- Checkout and account surfaces are sparse lists with strong totals or row labels, not decorative dashboards.
- Bottom chrome is a thin white tab bar with small icons, short labels, and magenta badges or selected labels.

# Color and surfaces

White is the default background for browsing, detail, basket, account, and success screens. Use pale gray fills for search fields, price capsules, selected quantity wells, and quiet grouped controls; borders should read as hairlines rather than frames.

The magenta accent is a commerce signal. It appears in selected tabs, favorite hearts, discount emphasis, sticky basket buttons, order submission, and final continuation buttons. Do not spread it into page backgrounds or large panels.

Black and near-black carry headings, product names, prices, and totals. Muted gray carries merchant subtitles, addresses, descriptions, metadata, inactive icons, and placeholders. Yellow is limited to rating stars; blue can appear in small discount badges when matching source evidence, but it is not a global accent.

Image-backed restaurant headers may sit under translucent search fields and white content cards. Where text overlays a busy banner, use a soft black scrim or place the text in a white card instead of floating raw type over photography.

# Typography

Use SF Pro Display for section and screen headings, and SF Pro Text for cards, controls, account rows, totals, and captions.

- headline: 22 points, 700, for page titles and major content sections.
- card-title: 16 points, 600, for merchant names, product names, and list row labels.
- subhead: 15 points, 600, for pills, prices, basket totals, and compact action labels.
- body: 13 points, 400, for product metadata, descriptions, addresses, and supporting details.
- caption: 10 points, 500, for tab labels, badges, delivery metadata, and small partner labels.

Prices are compact but prominent. Keep product names to two lines before truncating, preserve original merchant casing and brand marks inside images, and do not add oversized marketing headlines that are absent from the reference.

At larger Dynamic Type sizes, preserve price, total, and primary action legibility first; secondary merchant metadata may wrap or truncate after the product identity remains clear.

# Screen composition

Use a 4 point base grid, 12 point gaps between compact controls, 16 point horizontal gutters, and 20 to 28 points between major sections. The visual rhythm should feel dense and transactional, not editorial.

Discovery composition stacks a rounded search field, address line, pill controls, a promotional image banner, circular or square partner logos, and photo-led cards. Restaurant and store detail screens use a large photographic header, a floating white merchant summary card, horizontal category labels, then two-column product grids.

Product grids use equal card widths, generous image area, a small heart in the upper corner, compact two-line copy, and a pale price pill aligned near the bottom. Merchant and restaurant rows use image first, then name, rating, ETA, fee, or availability metadata.

Basket and profile screens remove visual noise: one-column rows, thin dividers, a strong total or label, and a bottom primary button when there is a commitment action. Empty vertical space is acceptable in these utility states when the list is short.

# Navigation appearance

The bottom bar is white, thin, and fixed above the home indicator. Icons are small dark outlines by default, with the active item and notification badges in magenta. Labels remain visible and compact; avoid a floating pill tab bar or oversized destination buttons.

Top bars are understated: a back arrow, rounded search field, and occasional filter or favorite icon. On image headers, controls may be circular or translucent so they remain readable without adding heavy chrome.

# Components

Primary buttons are full-width or sticky magenta pills with white semibold text. Basket CTAs may split label and total inside the same pill; keep the amount aligned to the trailing side and visually stronger than secondary text.

Category controls are white pills with gray hairline borders and small pictorial icons. The selected product category can use soft magenta text or a pale magenta pill, but inactive category labels remain gray or black.

Quantity controls use small minus and plus buttons around a centered count. The active add-to-cart area combines a cart glyph, verb, and price in the magenta button; do not use default blue steppers.

Form and utility fields use pale gray or white rounded rectangles with subtle borders. Account rows use left icons in muted gray, black labels, and trailing chevrons, with separators kept faint.

Modal sheets are white, rounded at the top, and may dim the background. Keep sheet content clean: large product image, title, merchant, description, options, and sticky purchase controls.

# Imagery and icons

Use real photography for food, retail products, banners, and store identity. Product images sit on white or very light backgrounds, usually centered with clean object crops. Restaurant banners can be saturated and busy, but UI text should be shielded by white cards or translucent fields.

Partner logos appear as circular or square brand marks with short captions. Preserve their original color; do not redraw logos as monochrome SF Symbols.

Icons are simple outline or filled glyphs in black, gray, or magenta. Use source-like icons for cart, heart, search, location, profile, pharmacy, supermarket, restaurant, and delivery metadata. Avoid playful emoji, decorative symbol sets, or heavy custom icon containers.

The isolated purchase-complete rider artwork is an observed state illustration, but fresh evidence does not prove a stable repeated illustration system. Treat it as a specific raster success asset if needed, not as permission to invent broader programmatic illustrations.

# States

Selected navigation and favorite states use magenta. Notification and basket counts are small magenta circles with white numerals.

Pressed primary actions deepen toward primary-focus. Disabled primary actions should desaturate into surface-3 with muted text rather than switching to blue.

Ratings use yellow stars next to compact numbers. Discount badges may use blue with white text when attached to product photos. Error or destructive states use semantic-danger sparingly and should not compete with the magenta commerce accent.

System permission prompts remain native iOS overlays. App-owned dimmed states use a black overlay with the underlying white marketplace visible beneath.

# iOS adaptation

Respect top and bottom safe areas, keeping the tab bar and sticky purchase buttons clear of the home indicator. Scroll long grids and detail pages vertically; keep bottom-owned CTAs pinned only when they do not cover product content.

Maintain 44 point interactive targets for tab items, hearts, category pills, quantity buttons, filter buttons, and basket CTAs even when the visible icon is smaller.

Horizontal category rails scroll rather than wrapping into multiple rows. Two-column product grids stay two-column on standard iPhones; if width is constrained, keep image, title, and price hierarchy before showing tertiary metadata.

Use native system permission UI, keyboard behavior, and safe-area transitions. App surfaces returning from those states should keep the same white canvas, magenta accent, and compact marketplace density.

Support Dynamic Type by allowing descriptions and account rows to wrap while protecting price pills, totals, and primary actions from clipping.

# Anti-generic checklist

- Do not replace the magenta commerce accent with default iOS blue.
- Do not remove real merchant, food, product, and partner imagery from discovery or detail screens.
- Do not turn pill categories into rectangular segmented controls.
- Do not make every surface a raised card; most separation should be white space, hairlines, and pale gray fills.
- Do not invent dark mode, gradient backgrounds, or oversized hero typography from the sparse white reference.
- Do not use emoji, arbitrary SF Symbols, or hand-drawn placeholders for partner logos and product photos.
- Do not treat the single success illustration as evidence for a broad illustration system.

</design-context>
