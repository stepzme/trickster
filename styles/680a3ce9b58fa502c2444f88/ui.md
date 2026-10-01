<design-context>
---
version: 1
platform: iOS
name: lamoda-design-analysis
description: "A dense, photography-led fashion commerce language built on a white canvas, compact black typography, pale utility fields, nearly square controls, and decisive black purchase actions."
colors:
  canvas: "#FFFFFF"
  surface-subtle: "#F5F5F5"
  surface-muted: "#EEEEEE"
  ink: "#111111"
  ink-secondary: "#6F6F6F"
  ink-tertiary: "#A7A7A7"
  divider: "#E6E6E6"
  action: "#050505"
  on-action: "#FFFFFF"
  sale: "#E86736"
  success: "#35A64A"
  overlay: "#000000"
typography:
  page-title: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 500, lineHeight: 26, letterSpacing: -0.2}
  section-title: {fontFamily: "SF Pro Display", fontSize: 18, fontWeight: 500, lineHeight: 23, letterSpacing: -0.1}
  product-title: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17, letterSpacing: 0}
  price: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 500, lineHeight: 18, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0}
  action-label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 500, lineHeight: 17, letterSpacing: 0}
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  section: 32
rounded:
  control: 4
  field: 6
  sheet: 16
  pill: 999
components:
  primary-action: {height: 48, fill: "{colors.action}", foreground: "{colors.on-action}", radius: "{rounded.control}", typography: "{typography.action-label}"}
  search-field: {height: 36, fill: "{colors.surface-subtle}", foreground: "{colors.ink-secondary}", radius: "{rounded.field}", typography: "{typography.body}"}
  filter-chip: {fill: "{colors.surface-subtle}", foreground: "{colors.ink}", radius: "{rounded.pill}", padding: [7, 12], typography: "{typography.label}"}
  product-tile: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: 0, padding: 0, typography: "{typography.product-title}"}
  bottom-sheet: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: "{rounded.sheet}", padding: 16, typography: "{typography.body}"}
---

# Overview

Lamoda's reusable visual language is a flat monochrome retail frame that gives most of the screen to fashion photography and keeps commerce information compact. White, near-black, and pale gray do the structural work; orange is confined to discounts and sale taxonomy, while green appears only as progress or completion feedback. The source's audience switcher, catalog taxonomy, five shopping destinations, and checkout sequence are product architecture, not visual rules to copy into an unrelated product.

# Non-negotiable visual invariants

- Product discovery is image-dominant, with two dense columns and very little decorative container chrome.
- Primary purchase and continuation actions are solid near-black with white labels.
- Search, filters, selectors, and supporting controls use pale neutral fills or thin separators instead of elevation.
- Product information stays compact: price, brand, name, available sizes, rating, and stock cues remain close to the image they describe.
- Fashion and product photography supplies the color and visual depth; the interface itself remains predominantly monochrome.
- Orange is reserved for markdowns and sale cues, while green is reserved for progress or successful completion.

# Color and surfaces

Use white as the continuous page canvas. Pale gray fields separate search, chips, informational rows, and disabled states; hairline gray rules organize long forms and specification lists. Near-black anchors text, selection, icons, and consequential actions. Avoid turning orange or green into general-purpose brand tints: they are local commercial and state signals in the observed system.

Sheets rise over a darkened scrim but remain visually flat. Product tiles do not need card fills, borders, or shadows. Where imagery has a pale studio background, let that photographic field define the tile rather than wrapping it in another surface.

# Typography

Use a neutral iOS sans serif with compact metrics and clear numerals. Page and section titles are medium-weight rather than oversized display headlines. Product names and supporting details use regular weight; current price gains modest weight, while former price is de-emphasized and struck through. Labels stay sentence case.

The portable hierarchy is 21/26 for a focused page title, 18/23 for a section heading, 14/18 for price, 13/17–18 for product and body content, and 10/13 for compact metadata. Preserve wrapping under Dynamic Type instead of shrinking delivery, size, or stock information.

# Screen composition

The core rhythm uses 12–16 points at screen edges, 4–8 points between closely related values, and 24–32 points between content sections. Image-led discovery may run closer to the edges than forms and checkout content. A two-column product grid is appropriate when comparison photography is primary; detail, profile, and transactional tasks use a single reading column.

On product detail, the image region leads, followed immediately by rating, product identity, price, size selection, and the purchase action. Long descriptions and specifications continue below without raised cards. Cart and checkout prioritize item summary, delivery choice, recipient data, payment, and total in a linear sequence. These content roles are transferable; the exact category names, audience segments, and order steps are not.

Depth comes from photography, modal scrims, and the occasional bottom sheet. Do not introduce a global shadow system or a stack of floating cards.

# Navigation appearance

Persistent navigation, when the adapted product needs it, is quiet and flat: line icons, short labels, dark active content, and subdued inactive content on white. The observed five destinations belong to Lamoda's commerce architecture and must not be copied merely to match the reference.

Focused screens use a simple back action with a centered short title or product identity. Filters can take over the screen; delivery conditions and compact selectors can use a sheet. Navigation chrome should remain secondary to product imagery and task content.

# Components

Primary actions are wide black controls with minimal rounding. Secondary choices are plain text, thin-outline controls, or pale chips rather than competing filled buttons. Disabled actions become pale neutral surfaces with quiet labels.

Search is a shallow pale field with a leading search affordance and an optional trailing product-search action. Filter chips are compact and removable; filter pages use grouped values, toggles, and range selection, ending in a persistent apply action. Product tiles are borderless and image-first, with the favorite action over the image and text below it.

Size choices use compact neutral cells with a clear dark selected state. Quantity uses inline decrement and increment actions. Cart rows expose selection, quantity, item actions, stock messaging, and total without turning each datum into a separate card. Forms rely on labeled underline fields and inline completion marks.

# Imagery and icons

Use tall model photography, isolated product cutouts, editorial collages, and campaign photography as distinct image roles. Model and editorial images use aspect-fill crops that preserve the garment and pose; isolated products use aspect-fit on their studio field. Product grids should maintain consistent image heights even when subjects differ.

Photography is content, not decoration, and should not be replaced with generic illustrations. If final assets are unavailable, reserve the same crop, area, and tonal mass with a temporary image asset. Interface icons are thin, conventional, and visually quiet; use custom marks only where the product supplies a real identity asset.

# States

Selection uses dark fills, checkmarks, or an underline according to context. Favoriting updates the item locally and can request sign-in without discarding browsing context. Search progresses from popular suggestions to query completions and then results. Filters retain chosen values until applied or cleared.

Low stock and markdown states stay attached to the affected product. Checkout exposes progress with a thin green indicator, validates fields in place, and ends with a sparse completion state and a clear next action. Disabled and loading states preserve layout so the surrounding commerce context does not jump.

# iOS adaptation

Keep all interactive targets at least 44 points even when their visible icon or label is compact. Use custom scrolling grids and rows where default `List` styling would add unwanted insets, separators, or backgrounds. Respect safe areas for navigation and purchase actions, and ensure the last item remains reachable above persistent controls.

VoiceOver should read a product tile as a coherent sequence of price, brand, product name, availability, and favorite state. Announce applied filter counts, selected sizes, cart quantity, validation errors, and checkout progress. Dynamic Type may increase row height, wrap labels, or turn paired choices into a vertical sequence; it must not remove delivery, stock, or price information.

# Anti-generic checklist

- Do not wrap every product, specification group, or checkout section in a rounded elevated card.
- Do not replace fashion photography and product cutouts with generic illustration or SF Symbols.
- Do not use orange as the default action color or green as a broad decorative accent.
- Do not inflate headings until product data and comparison imagery become secondary.
- Do not copy Lamoda's five destinations, audience segments, or catalog taxonomy into a product with different information architecture.
- Do not hide size, availability, delivery, or total information behind decorative interactions.

</design-context>
