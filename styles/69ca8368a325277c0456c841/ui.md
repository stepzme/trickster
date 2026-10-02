<design-context>
---
version: 1
platform: iOS
name: Shop-design-analysis
description: "An image-led commerce interface where large product photography and softly tinted merchant canvases sit above a neutral off-white system, with saturated violet actions, dense rounded controls, and a frosted floating navigation pill."
colors:
  canvas: "#FAF9FB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EDF2"
  accent-primary: "#5A2DF4"
  accent-secondary: "#D8CAFF"
  text-primary: "#111111"
  text-secondary: "#8F8F98"
  divider: "#E2DEE5"
  destructive: "#E14850"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {background: "#5A2DF4", foreground: "#FFFFFF", radius: 999, minHeight: 52}
  secondary-action: {background: "#151015", foreground: "#FFFFFF", radius: 999, minHeight: 52}
  primary-card: {background: "#FFFFFF", radius: 24, padding: 12}
  navigation: {background: "translucent off-white material", radius: 999, height: 56}
---

# Overview

Shop is led by merchandise rather than interface chrome. Large product and campaign imagery supplies much of the changing color, while the shared layer stays off-white, black, and violet. Broad rounded image canvases, compact two-column product grids, pill controls, and a detached frosted navigation capsule distinguish it from a generic white SwiftUI card stack.

# Non-negotiable visual invariants

- Product or campaign imagery is the dominant visual mass on browsing and detail screens; it is never replaced by decorative symbols or text-only cards.
- Saturated violet is reserved for shared purchase, saved, selected, and progress emphasis, regardless of the merchant imagery around it.
- Browsing alternates broad rounded photographic canvases with compact product rows or two-column grids rather than a uniform vertical list.
- The persistent navigation appears as a floating translucent pill with clear edge clearance, not an edge-to-edge stock tab bar.
- Cards use visibly varied geometry: broad merchant canvases are around 24 points, fields around 12 points, and actions are full pills.
- Transaction-focused screens reduce atmospheric imagery and use clean white rows, while the cart may invert into a near-black sheet.
- Dense metadata remains subordinate to product name, image, and price through small gray type and tight spacing.

# Color and surfaces

The base canvas is a warm off-white, with true white for checkout, forms, and product tiles. Secondary neutral surfaces are faint gray-lilac rather than the default grouped-system gray. `#5A2DF4` is the unmistakable active accent; pale lavender supports disabled or low-emphasis actions without looking selected. Near-black is used for primary text and the focused cart surface. Merchant photography may cast a local tint across a large collection canvas, but must not redefine action color or text semantics.

Dividers are quiet and limited to dense transactional groups. Destructive and delivery-error feedback uses red on a pale red support surface. Default iOS blue, indiscriminate gray cards, and a page-wide purple gradient would visibly break the reference.

# Typography

Use SF Pro Display for the few large collection or screen titles and SF Pro Text elsewhere. The hierarchy is compact: bold 28-point titles, 20-point section headings, medium 15-point product labels, and 13-point metadata. Price numerals may become oversized at checkout, but normal product-grid prices stay close to label scale. Headings are sentence case, left aligned, and use weight and whitespace rather than letter spacing or all caps.

Dynamic Type should allow product names and supporting metadata to wrap while preserving the image area, price, and primary action as the first scan targets. Avoid letting every text tier drift to a similar 16–18-point size.

# Screen composition

Typical screens use 12–16-point edge insets, 8–12-point gaps inside grids, and 20–24 points between major collections. Content scrolls behind or above a floating lower navigation capsule with reserved safe-area clearance.

Observed archetypes include:

- An immersive launch or onboarding composition with a saturated violet field or white field and floating product cutouts.
- A vertical commerce feed of wide rounded merchant or campaign canvases, each paired with horizontally arranged product content.
- A dense two-column product grid where photography occupies most of each cell and metadata sits below without a heavy outer card.
- A product detail screen with a large hero image, compact option chips, swatches, price, and a strong bottom purchase action.
- A focused near-black cart sheet that rises over browsing content and concentrates quantity and checkout actions.
- Clean one-column checkout, review, payment, and account forms built from grouped rows and restrained separators.

Primary imagery normally owns at least half of a product card and often the majority of the upper viewport. Supporting controls cluster close to the content they change rather than forming separate dashboard cards.

# Navigation appearance

The principal browsing navigation is a detached frosted off-white pill with icon-led destinations, a strong violet selected state, soft shadow or blur, and 12–16 points of side and bottom clearance. Local categories and filters appear as horizontally scrolling chips. Modal and focused transactional screens use simple close or back controls without creating another decorative header. This specifies appearance only; destinations and routing come from the approved product artifacts.

# Components

Primary actions are saturated violet, full-width where transactional, at least 52 points high, and either pill-shaped or strongly rounded. Disabled actions retain the same geometry in pale lavender. A black pill is an observed high-contrast secondary purchase treatment.

Product cells are image-led and light on chrome: large rounded media, a compact title and price block, small rating or discount metadata, and a circular heart control. Wide merchant canvases use a larger radius and allow photography to color the surrounding field. Filter and size controls are small pills; selected options use violet or a clear filled state. Color options are material swatches rather than text-only buttons. Quantity controls are compact steppers.

Form fields and checkout rows use white fills, roughly 12-point radii, quiet dividers, and no ornamental shadows. Review controls combine a simple star row with a large rounded text area. Pressed states deepen violet or reduce opacity; loading preserves the underlying geometry instead of changing the page structure.

# Imagery and icons

Real product photography, isolated product renders, and merchant campaign images provide the visual identity. Isolated products use contain-style framing with breathing room; campaign art can cover a broad rounded canvas. Decorative floating product cutouts are appropriate only where the source uses them, such as onboarding. Brand marks remain supplied assets.

Functional icons are compact, consistent, and subordinate to merchandise. Do not substitute arbitrary SF Symbols for product imagery. The observed screens do not establish a reusable authored illustration system, so no separate illustration language should be invented.

# States

Populated browsing preserves image dominance and the floating navigation capsule. Loading uses restrained violet progress without a new decorative screen. An empty cart keeps the same neutral surfaces and clear hierarchy rather than adding unrelated artwork. A non-deliverable state uses a pale red surface and red semantic emphasis while retaining the product context. Selected sizes, swatches, saved hearts, and payment rows use the same violet accent. Review and card-entry forms preserve the white transaction surface and rounded control system.

# iOS adaptation

Extend the off-white or locally tinted canvas through the safe areas, while keeping grid content inside 12–16-point insets. Use vertical `ScrollView` containers for feeds and details and horizontal scrolling for filter chips and product strips. Reserve the lower safe area for the floating navigation or purchase action so neither covers product metadata.

Maintain at least 44-point hit targets for hearts, chips, swatches, steppers, close controls, and navigation icons even when their visible shapes are smaller. Keyboard presentation should move focused checkout fields and preserve the active action. VoiceOver order follows image description, product name, price, metadata, then actions. Dynamic Type may expand rows and wrap labels rather than shrinking type. Only introduce a dark appearance where the source explicitly uses the dark cart surface; do not invert the complete app speculatively.

# Anti-generic checklist

- Do not replace the merchant canvases and image-heavy grids with uniform white cards.
- Do not use default blue tint or an unstyled `TabView`.
- Do not make every surface, field, and action share one corner radius.
- Do not omit product imagery while waiting for final assets.
- Do not turn checkout into a frosted or image-tinted promotional composition.
- Do not use arbitrary SF Symbols as merchandise, brand marks, or decorative content.
- Do not inflate metadata until it competes with product image, name, or price.
- Do not apply the violet accent as a full-app monochrome wash.

</design-context>
