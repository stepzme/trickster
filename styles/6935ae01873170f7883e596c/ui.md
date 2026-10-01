<design-context>
---
version: 1
platform: iOS
name: Joom-design-analysis
description: "A dense white marketplace interface where near-square product photography, bold black prices, coral-red commerce accents, pale search and filter controls, compact five-item navigation, and campaign-specific promotional art drive the visual hierarchy."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F6"
  accent-primary: "#FF3F4E"
  accent-secondary: "#F28B30"
  text-primary: "#17171A"
  text-secondary: "#73737B"
  divider: "#E8E8ED"
  destructive: "#DB2F3D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 12
  sheet: 26
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}", minHeight: 50}
  product-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-secondary}", cornerRadius: "{rounded.control}", minHeight: 42}
  filter-chip: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 36}
  order-row: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", minHeight: 56}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.text-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

Joom is visually led by product photography packed into dense two-column browsing fields. White and very light gray provide a quiet shell for bold black prices, coral-red purchase and favorite signals, compact metadata, and bright campaign-specific promotional tiles. The interface stays flat and image-first; checkout and profile screens introduce more spacing without abandoning the same concise commerce hierarchy.

# Non-negotiable visual invariants

- White dominates the viewport, with pale gray used for search, filters, grouped forms, and quiet section separation.
- Product grids use two equal columns with narrow gutters and near-square image crops.
- Price is the strongest text within each product cluster; title, rating, order count, and delivery details remain smaller and gray.
- Coral-red marks purchase intent, favorites, discounts, selected commerce states, and key prices.
- Product cards are largely borderless and flat; photography supplies depth and variety.
- Long product and checkout screens keep a prominent coral action anchored above the bottom safe area.
- Promotional art remains bounded to its campaign tile and never replaces real catalog photography.

# Color and surfaces

The canvas and ordinary content surfaces are white. A cool, very light gray distinguishes search fields, filters, checkout groups, and inactive controls; thin gray separators appear in dense lists. Coral-red is the primary commerce accent across prices, hearts, badges, progress, and purchase CTAs. Orange appears more narrowly in balance, cashback, or promotional pills. Near-black carries price, titles, and primary actions, while medium gray carries shipping, rating context, counts, and helper text. Green may indicate favorable delivery or value; destructive states use a deeper red. Bright campaign colors stay inside promotional artwork. Default system blue, heavy gray grouped backgrounds, or multicolored ordinary controls would break the reference.

# Typography

Use SF Pro Display and SF Pro Text. Page and campaign titles are approximately 20–24 points bold; section titles sit around 17–18 points; product prices are around 16–20 points bold; product titles and form labels are around 13–15 points; metadata and captions are around 11–13 points in gray. The hierarchy depends on weight and proximity more than dramatic scale. Prices should use tabular figures when values align. Text is predominantly left aligned and sentence case. Dynamic Type should wrap product titles and delivery details while preserving the photo-price-title sequence and keeping sticky actions legible.

# Screen composition

Browsing archetypes use a compact top search region, occasional category or campaign rails, a dense two-column image grid, and a fixed white bottom bar. Side insets are typically 12–16 points, with narrow 8–12 point grid gaps. Category and search archetypes may use icon or thumbnail grids before product results. Detail archetypes begin with a large gallery, then stack title, price, rating, variants, delivery, seller or recommendation content, and a sticky purchase area. Filter and variant decisions appear in rounded bottom sheets. Cart and checkout archetypes use one-column grouped rows with larger 20–28 point section gaps, explicit quantity or selection controls, concise totals, and a bottom action. Profile, settings, notifications, favorites, and order archetypes use full-width list sections or sparse centered states while retaining white surfaces and compact iconography.

# Navigation appearance

The bottom bar is white with five evenly spaced icon-and-label items; inactive icons are simple gray outlines and the selected item becomes dark or filled. Top bars use a pale rounded search field on browsing screens and a plain back chevron with compact centered title on focused tasks. Small right-side actions remain outline icons. Bottom sheets use a dimmed scrim, a white panel with large top corners, a short grab handle, and clear close or selection controls. Sticky coral actions sit above the home indicator with full-width emphasis and modest side margins.

# Components

Product cards are flat image-first clusters with a near-square crop, overlaid heart, bold price, compact title, rating or order metadata, and small discount, cashback, or delivery labels. Search is a pale rounded field with leading symbol and optional media-search action. Filters are compact neutral pills that gain coral or dark emphasis when selected. Variant controls use color or size swatches with a visible outline or check. Primary buttons are full-width coral fills with white semibold text; disabled states lose saturation without changing geometry. Cart rows pair a thumbnail and text stack with a quantity stepper. Delivery and payment options use radio rows inside pale or white groups. Toggles remain compact and use the commerce accent when active. Summary and confirmation sheets use concise totals, separators, and one dominant action.

# Imagery and icons

Real product photography is the dominant visual material. Grid crops are usually near-square; detail galleries enlarge the product and may use aspect-fit when packaging or full shape matters. Lifestyle imagery can use aspect-fill. Campaign tiles introduce saturated graphic layouts, 3D objects, or occasional characters, but these vary by promotion and do not form a reusable illustration system. Empty and success states may use a simple heart, target, or gift figure, again without a stable shared grammar. Functional icons are small utilitarian outline or filled symbols. Product imagery is compositionally essential and cannot be omitted while final assets are pending.

# States

Selected hearts, filters, swatches, radio rows, and toggles gain coral or dark emphasis while preserving their geometry. Discounts, cashback, ratings, and countdowns stay attached to the relevant product rather than becoming global banners. Cart quantity changes remain inline. Empty-ish favorites, recently viewed, order access, and profile states use more white space and concise centered content. Confirmation uses a restrained thank-you or success visual with direct actions. Modal filter and variant states keep the product context dimly visible behind a white sheet. No clear custom error composition was observed; unobserved errors should remain local to the affected row, field, or order state.

# iOS adaptation

Extend white through the safe areas and keep the bottom bar or sticky CTA above the home indicator. Use lazy two-column grids for catalog browsing and switch to compact rows when accessibility text makes price and title unreadable. Put product details, cart, checkout, and lists in vertical scroll containers. Present filters and variants as native-behaving sheets with the documented scrim, radius, and handle. Move checkout fields and actions with the keyboard while keeping the active input visible. Maintain at least 44-point targets around hearts, swatches, steppers, tabs, filters, chevrons, and small media controls. VoiceOver order should follow image description, price, title, metadata, options, then purchase action. A separate dark appearance was not established and should not be invented from default components.

# Anti-generic checklist

- Do not replace the two-column product field with a stack of identical full-width cards.
- Do not wrap every product in a bordered or shadowed container.
- Do not use default system blue for selection or purchase actions.
- Do not replace product photography with generic illustration placeholders.
- Do not spread campaign colors across navigation, forms, or ordinary metadata.
- Do not use an unstyled `TabView`, visible default `Form`, or arbitrary SF Symbols.
- Do not flatten price, title, rating, and delivery information to the same scale.
- Do not remove the large gallery or sticky purchase action from detail compositions.

</design-context>
