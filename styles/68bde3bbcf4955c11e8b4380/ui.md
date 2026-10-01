<design-context>
---
version: 1
platform: iOS
name: Cofix-Club-design-analysis
description: "A black-and-orange loyalty and commerce interface with condensed uppercase typography, centered chrome, a dark three-zone bottom bar, oversized wallet numerals, barcode surfaces, saturated product tiles, and prominent product photography."
colors:
  canvas: "#141215"
  surface-primary: "#FFFFFF"
  surface-secondary: "#242124"
  accent-primary: "#FF7900"
  accent-secondary: "#6C45E8"
  text-primary: "#FFFFFF"
  text-secondary: "#A9A5AA"
  divider: "#4B474C"
  destructive: "#F05246"
typography:
  hero: {fontFamily: "Avenir Next Condensed", fontSize: 88, fontWeight: 400, lineHeight: 88}
  title: {fontFamily: "Avenir Next Condensed", fontSize: 30, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "Avenir Next Condensed", fontSize: 20, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "Avenir Next Condensed", fontSize: 18, fontWeight: 700, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  barcode-card: {fill: "surface-primary", radius: 16, code: "high-contrast black on white"}
  promo-banner: {fill: "campaign artwork", radius: 14, crop: "edge-to-edge"}
  product-tile: {fill: "saturated category color", radius: 16, image: "large cutout photography"}
  bottom-navigation: {fill: "canvas", zones: 3, center: "raised circular location control"}
  product-sheet: {fill: "surface-primary", radiusTop: 28, action: "sticky full-width"}
---

# Overview

Cofix Club uses a near-black shell, bright orange loyalty surfaces, compressed uppercase display type, and large product photography to create a dense but unmistakable retail interface. The strongest screens are built from full-width color fields rather than generic card stacks: a dark home shell, an orange wallet field, saturated product grids, and tall white product sheets. Centered brand chrome and a dark three-zone bottom bar keep the visual system consistent across otherwise varied content.

# Non-negotiable visual invariants

- Near-black remains the dominant shell color, while white and bright orange appear as decisive full-width surfaces rather than small decorative accents.
- Condensed uppercase typography carries navigation, section labels, product names, and major actions; neutral body copy stays secondary.
- Key numeric or transactional content uses extreme scale contrast, including wallet values that occupy a substantial portion of the upper viewport.
- The principal bottom navigation is a fixed dark bar divided into three visual zones with a raised circular control in the center.
- Product tiles use saturated flat-color backgrounds and large cutout product photography; a text-only grid is not an acceptable substitute.
- Overlays and detail views use tall white sheets with large rounded top corners over a dimmed dark background.
- Barcode, campaign artwork, product photography, and map content retain their real compositional area instead of becoming generic placeholders.
- Orange marks the main brand action and loyalty state; purple, blue, green, and red remain bounded to distinct secondary surfaces or semantic states.

# Color and surfaces

The authored shell is near-black around `#141215`, with slightly lighter charcoal panels around `#242124`. White is a second major surface, used for content-heavy screens, barcode cards, fields, and product-detail sheets. Bright orange around `#FF7900` can fill an entire wallet region or primary control rather than acting only as a tint. Red-orange around `#F64B32`, product blue around `#3D63B7`, purple around `#6C45E8`, and muted green appear as bounded campaign, category, or status fields.

On dark surfaces, primary text is white and supporting text is cool gray. On white surfaces, reverse the hierarchy to near-black and medium gray. Dividers are subtle charcoal on dark backgrounds or pale gray on white. Destructive messaging uses a restrained red. Default iOS blue, grouped gray, and automatic white cards would visibly break the reference if used as the main palette.

# Typography

Use an iOS-safe condensed family such as Avenir Next Condensed for the brand-facing hierarchy, with SF Pro Text for explanatory copy and metadata. Large wallet numerals may reach 78-96 points with tight leading. Prominent titles and drawer-style labels sit around 25-30 points; section headings around 18-22 points; product names and control labels around 11-18 points, usually uppercase; metadata around 9-12 points.

The visual hierarchy depends on large jumps in scale, condensed widths, and uppercase treatment rather than many nearby font sizes. Major labels are centered or aligned to the geometry of their surface; body copy remains left-aligned. With Dynamic Type, preserve the difference between display values, section labels, and metadata: allow labels to wrap or increase container height instead of enlarging every tier uniformly.

# Screen composition

Dark-shell screens extend behind the status area and reserve the lower safe area for persistent dark navigation. A compact centered wordmark or title anchors the top, while the middle region is occupied by one dominant object: a wallet value, barcode, campaign banner, product grid, map, or support surface. Horizontal insets are typically 14-18 points, with 20-28 points between major sections.

The loyalty archetype uses a large orange or black upper field, oversized centered numerals, and a high-contrast white barcode card. The promotional archetype stacks full-width raster banners with 12-16 point corners and compact section labels. The product-list archetype uses a two-column grid of saturated tiles, each dominated by a cutout drink photograph with concise uppercase naming. The product-detail archetype presents a tall white rounded-top sheet over a dimmed background, with a large product image, compact segmented choices, option rows, price metadata, and a bottom-pinned action.

White utility screens use centered top chrome, compact underlined fields or white cards, and sparse iconography rather than generic grouped forms. A side panel, when visually required by the adapted product, occupies roughly three quarters of the width and leaves a darkened strip of the underlying screen visible; its destinations must come from approved product artifacts, not from this reference.

# Navigation appearance

The recurring bottom navigation is an opaque near-black bar with three evenly spaced visual zones. The center zone is emphasized by a circular location-style control that rises above or separates from the flat icon row. Active states use white or orange emphasis; inactive symbols and labels recede to gray. It must be custom styled rather than an unmodified translucent `TabView`.

Top chrome is compact and centered, using a wordmark or short uppercase title with sparse edge controls. Back and close affordances are ordinary compact icon buttons, not oversized navigation objects. Tall modal content uses a white rounded-top sheet over a dimmed backdrop, with a visible drag affordance or compact close control when present.

# Components

The barcode card is a wide white rounded rectangle with generous internal whitespace, a crisp black code, and compact supporting labels. Its collapsed and expanded forms preserve the same black-white contrast. Promotional banners are edge-to-edge raster compositions inside 12-16 point rounded crops; text baked into campaign artwork must remain legible at device width.

Product tiles are approximately half-width, use saturated flat backgrounds, 14-18 point corners, a large cutout beverage image, concise uppercase naming, small metadata, and a compact add or unavailable affordance. Product sheets use a large image zone, pill-like segmented size controls, divider-led option rows with checkboxes, and a wide orange bottom action.

Profile-style fields are visually light, with labels and underlines rather than heavy rounded boxes. Notification badges are small orange pills. Support surfaces use white cards or chat bubbles against a black-to-white field. Disabled controls reduce contrast but keep their geometry; selected controls use orange fill, white type, or a clear checked state.

# Imagery and icons

Product photography is a primary compositional layer, not supporting decoration. Drink cutouts are large, cleanly masked, and often overlap the visual center of saturated tiles or white detail sheets. Promotional cards use authored raster campaigns, while barcode, map, avatar, and occasional campaign characters remain tied to their content. These image regions cannot be omitted while waiting for final assets; use approved generated or licensed stand-ins with the same crop and visual mass.

The sampled screens do not establish a reusable standalone illustration system. A single cartoon-like campaign image is campaign artwork, not evidence for recurring illustrated scenes or characters. Icons are sparse, mostly white or black line symbols with occasional filled active states. Keep stroke weight and size consistent, and do not replace photography with SwiftUI shapes or arbitrary SF Symbols.

# States

Observed states include dark splash or loading, disabled consent action, collapsed and expanded barcode, empty and populated wallet, selected bottom-navigation zone, open side panel, profile fields with avatar or selection controls, populated product grid, product detail with size and add-on selections, unavailable product, notifications content, a not-found modal sheet, and empty or bot-populated support. The near-black shell, condensed labels, centered chrome, and bounded orange emphasis remain stable across these states.

# iOS adaptation

Extend dark and orange background fields through the status-bar region while keeping controls inside safe areas. Use scroll containers for campaign stacks, grids, profile fields, and sheet content; keep any bottom action above the home indicator and keyboard. Present tall detail surfaces with current iOS sheet APIs or equivalent custom geometry while preserving the 28-point top radius and dimmed backdrop.

Give compact icons, barcode actions, tile controls, segmented choices, and bottom-navigation zones at least 44-point hit targets. VoiceOver should read the centered title, primary content, local controls, then persistent navigation in visual order. On narrow devices, preserve the two-column photographic grid only while labels and 44-point controls still fit; otherwise reduce imagery crop or move to one column without shrinking touch targets. Dynamic Type may increase cards and rows, but must not erase the condensed display hierarchy. Maintain the authored dark appearance instead of automatically converting the shell to a generic light theme.

# Anti-generic checklist

- Do not replace the black shell and full orange fields with a pale grouped background and white card stack.
- Do not use default SF Pro at one uniform scale for every title, product label, value, and action.
- Do not implement the bottom bar as an unstyled `TabView` with four or five equal items.
- Do not shrink the central circular control into an ordinary inline tab icon.
- Do not omit product photography, barcode, campaign art, or map content from compositions where they dominate the reference.
- Do not turn saturated product tiles into neutral list rows or generic ecommerce cards.
- Do not use default `Form`, blue tint, stock button styling, or one corner radius everywhere.
- Do not infer product routes, menu destinations, or interaction sequences from the sampled reference screens.

</design-context>
