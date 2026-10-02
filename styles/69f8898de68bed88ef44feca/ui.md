<design-context>
---
version: 1
platform: iOS
name: Poizon-design-analysis
description: "A dense white social-commerce interface dominated by product and user photography, compact black typography, tight two-column grids, a vivid turquoise purchase accent, and a persistent icon-and-label bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F6F7"
  accent-primary: "#12C8C8"
  accent-secondary: "#10AFAF"
  text-primary: "#111214"
  text-secondary: "#777B80"
  divider: "#E4E7E9"
  destructive: "#E64545"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-padding: 8
  control-gap: 8
rounded:
  control: 8
  card: 6
  sheet: 20
  pill: 999
components:
  primary-action: {background: "#12C8C8", foreground: "#FFFFFF", radius: 6, minHeight: 50}
  secondary-action: {background: "#111214", foreground: "#FFFFFF", radius: 6, minHeight: 50}
  primary-card: {background: "#FFFFFF", radius: 6, padding: 8}
  navigation: {background: "#FFFFFF", radius: 0, height: 56}
---

# Overview

Poizon is intentionally dense: product and user photography fill tightly packed feeds and grids, while white surfaces and compact black type keep the interface transactional. Turquoise provides a sharp purchase and trust signal without tinting the whole app. Small radii, thin dividers, and a persistent icon-and-label bottom bar distinguish it from spacious card-first commerce.

# Non-negotiable visual invariants

- Photography occupies most of feed tiles, product cards, and the upper product-detail viewport.
- Browsing uses tight two-column masonry or product grids with 6–8-point gaps.
- Turquoise is reserved for primary purchase, selected commerce, or trust emphasis against neutral surfaces.
- Product name, current price, and action hierarchy remain compact and visibly stronger than dense metadata.
- Most cards use small 4–8-point radii and flat separation rather than large floating white containers.
- The bottom navigation is an edge-to-edge white bar with icon-and-label items and a restrained active state.
- Search and category rails remain shallow, dense, and visually attached to the content grid.

# Color and surfaces

White is the continuous canvas and primary card surface. Very pale gray separates search fields, service rows, and secondary modules; thin gray dividers organize dense content. Near-black carries text, prices, navigation, and secondary purchase actions. Bright turquoise around `#12C8C8` marks the principal commerce action and selected or trusted states; a deeper teal supports pressed states and occasional profile color. Red is limited to notification badges or destructive attention. A deep near-black splash may invert the logo, but it does not establish a global dark theme. Default blue or broad pastel card backgrounds would break the reference.

# Typography

Use SF Pro with 20–24-point titles, 16–18-point section or tab labels, 12–14-point product names and prices, and 10–12-point metadata. Price numerals are compact, bold, and tabular. Multilingual text remains tightly set and left aligned. Hierarchy comes from weight and media scale rather than oversized headings. Dynamic Type should increase row height and wrap product names while keeping price and purchase actions visible; avoid making metadata as large as section titles.

# Screen composition

Screens use roughly 12-point outer gutters and 6–8-point grid gaps. The top usually contains a shallow search field or category rail; the middle is a vertically scrolling photo grid or media-first detail; the bottom reserves space for the persistent navigation or purchase bar.

Observed archetypes include a centered dark splash and white login sheet; a two-column social masonry feed; a dense two-column product catalog; a single-column detail with a large media hero followed by compact facts and a sticky paired action bar; a modular profile dashboard separated by pale dividers; and a right-side settings drawer with plain full-width rows. Media and product content, not decorative chrome, own most of the viewport.

# Navigation appearance

The persistent lower bar is white, edge to edge, and composed of four compact icon-and-label items. Active state uses stronger black or turquoise emphasis; notification badges remain small and red. Top categories appear as horizontally arranged text tabs with a thin underline. Focused panels may slide from the side with a white surface and simple close control. This section defines appearance only.

# Components

Search is a shallow pale-gray rounded field with compact leading or trailing utility icons. Category controls are text tabs with a thin selected underline. Product and feed cards are flat, small-radius photo containers followed by price, caption, author, or count metadata. The sticky purchase bar pairs a dark secondary action with a turquoise primary action; both are rectangular with modest rounding and equal height. Badges are tiny pills or dots. Profile modules use larger 16-point container corners sparingly. Drawer rows are full-width, separated by whitespace or hairlines, with a subdued disabled-looking action when observed.

# Imagery and icons

Product photography and user-generated media are the dominant imagery. Feed images use consistent portrait crops; product heroes are large and preserve the item's proportions; thumbnail strips remain compact. Functional icons are thin black outlines with turquoise reserved for active commerce. Recurring mascot-like marks are small brand identifiers, not evidence of a standalone illustration system. Imagery cannot be omitted while assets are pending; placeholders must preserve crop, density, and relative scale.

# States

Selected top tabs gain a thin underline. Active bottom items gain stronger contrast or turquoise. Purchase bars keep stable geometry across detail states. Notification state adds a small red badge without shifting navigation. Login uses one clear turquoise action on white. Disabled or unavailable actions reduce contrast rather than changing shape. Profile and drawer surfaces remain neutral and dense.

# iOS adaptation

Keep grid gutters and media proportions stable across compact iPhones, using adaptive two-column widths rather than scaling type with viewport width. Reserve safe-area space for the bottom bar or sticky purchase controls. Use vertical scrolling for feeds and details and horizontal scrolling for category or thumbnail rails. Every icon, tab, card action, and purchase control needs a 44-point hit target even when visually compact. Keyboard and permission transitions remain native. VoiceOver follows image description, product name, price, metadata, then actions. Dynamic Type expands rows and may reduce visible item count without removing media. Preserve the observed light appearance.

# Anti-generic checklist

- Do not replace the dense photo grid with large floating cards and generous empty space.
- Do not use default blue tint or an unstyled `TabView`.
- Do not expand turquoise across every label and surface.
- Do not omit product or user media and substitute decorative symbols.
- Do not apply large uniform radii to every tile, field, drawer, and action.
- Do not enlarge metadata until it competes with price or imagery.
- Do not invent a standalone mascot illustration system from small brand marks.

</design-context>
