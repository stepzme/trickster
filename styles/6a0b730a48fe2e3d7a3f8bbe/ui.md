<design-context>
---
version: 1
platform: iOS
name: iHerb-design-analysis
description: "A dense white health-commerce interface anchored by saturated green headers, orange purchase actions, compact product evidence, persistent navigation, and photography-led merchandising."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F6EF"
  accent-primary: "#458500"
  accent-secondary: "#F28C00"
  text-primary: "#262626"
  text-secondary: "#686868"
  divider: "#E2E2DE"
  destructive: "#C83C32"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 12
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#F28C00", textColor: "#FFFFFF", cornerRadius: 10, minHeight: 44}
  secondary-action: {fill: "#458500", textColor: "#FFFFFF", cornerRadius: 10, minHeight: 44}
  primary-card: {fill: "#FFFFFF", borderColor: "#E2E2DE", cornerRadius: 12, padding: 12}
  navigation: {fill: "#FFFFFF", selectedColor: "#458500", unselectedColor: "#686868"}
---

# Overview

iHerb is a compact, evidence-heavy retail system rather than a decorative card interface. Saturated green owns the upper navigation area, white keeps catalog information legible, and orange isolates immediate purchase actions. Product packshots, ratings, prices, discounts, availability, and delivery details form the dominant visual texture.

# Non-negotiable visual invariants

- A saturated green top region visually contains page identity and the rounded white search field.
- White is the dominant content canvas; pale green is a selective grouping or selected-state tint.
- Orange is reserved for the immediate add/order action, while green carries navigation, trust, and broader confirmation.
- Product photography remains large enough to identify packaging and occupies a substantial share of every product tile or row.
- Product title, rating, price, discount, availability, and action remain visually adjacent.
- Catalog and checkout density is compact, using thin dividers and whitespace more often than shadows.
- Persistent bottom navigation is white with a clearly green selected state.

# Color and surfaces

The main field is white. Green appears as a large header mass and as active or confirmed states; orange is a smaller but high-contrast commitment accent. Pale green groups selected options and health-oriented modules. Thin warm-gray dividers separate dense rows without turning each item into a floating panel. Near-black carries names and prices, medium gray carries brand, unit, delivery, and helper metadata, and red is limited to destructive or urgent price/status information. Default iOS blue would visibly break the green/orange hierarchy.

# Typography

Use SF Pro as the iOS-safe family. Page titles and section headings are bold but not oversized; hierarchy comes from weight and adjacency because many facts share the viewport. Product titles use medium-to-semibold text, prices use the strongest local weight, and metadata steps down to compact captions. Numeric prices and ratings should align cleanly. At larger Dynamic Type sizes, preserve title → price → action as the first reading sequence and let secondary evidence wrap below.

# Screen composition

The top safe area merges into the green header. A compact title/action row and a full-width rounded search field sit above the scroll content. The middle is a dense vertical feed of promotional modules, horizontal product rails, or one-column search rows, generally inset about 16 points. Product details use a large contained packshot followed by compact evidence blocks and a purchase area close to price. Cart and checkout switch to one-column rows and grouped form sections, with totals and the primary action near the bottom safe area.

Visible archetypes include merchandising home screens with stacked rails and banners; search/results screens with compact filters and product rows; product detail screens led by packshot and price evidence; cart screens with quantity controls and totals; and checkout screens with plain bordered inputs and sticky commitment controls.

# Navigation appearance

The bottom bar is a flat white strip separated by a subtle hairline. Icons and short labels are compact; the selected item is green and the rest are gray. Top bars favor the green brand field on browsing surfaces and simpler white bars on transactional screens. Back controls and sheet dismissals retain familiar iOS placement but inherit dark/green coloring. Sheets use white surfaces, a dark scrim, and a clearly rounded top edge.

# Components

The characteristic search field is a white pill nested inside green, with a leading search icon and compact trailing utility action. Product cards and rows combine a contained packshot, compact text stack, rating evidence, price cluster, status badges, and an orange rounded-rectangle action. Filter chips are low-profile pills with pale or outlined states; selected filters use green emphasis. Quantity controls are compact grouped steppers. Primary purchase buttons are orange with white semibold labels; green buttons are used for broader confirmation. Disabled actions mute fill and text without changing geometry. Form fields are white with thin gray outlines and visible labels rather than default `Form` chrome.

# Imagery and icons

Packshots and real product photography are the principal imagery layer and cannot be omitted while final assets are pending. Packshots use contain scaling on white so labels and package silhouettes remain readable; lifestyle and health imagery may use aspect-fill within promotional crops. Icons are simple, compact, and subordinate to commerce evidence. Promotional tiles may add badges or light illustration, but the isolated drawing observed does not establish a separate illustration system.

# States

Populated states use ratings, discount labels, stock or delivery notes, selected filters, quantities, and cart totals without changing the white/green/orange hierarchy. Selected options receive pale green fill or green marks. Modals retain white surfaces over a dark scrim. Errors or urgent availability use restrained red near the affected control; successful states return to green. Empty space should not be filled with decorative cards when product evidence is absent.

# iOS adaptation

Extend the green header behind the top safe area and keep the bottom bar above the home indicator. Use vertical scrolling for commerce content, horizontal scrolling only for rails and chips, and a keyboard-aware inset for forms and search. Maintain 44-point hit targets even when controls look compact. VoiceOver should read image identity, product title, rating, price/status, and action in that order. At compact widths, keep results one column and allow metadata to wrap; do not shrink packshots below recognition. Support light appearance as the observed default and style app-owned sheets explicitly.

# Anti-generic checklist

- Do not replace the green header and orange purchase accent with default blue.
- Do not convert the dense catalog into a stack of large shadowed white cards.
- Do not omit packshots or substitute arbitrary SF Symbols for product imagery.
- Do not flatten price, rating, availability, and title into one typographic level.
- Do not use an unstyled `TabView`, `Form`, or system search field.
- Do not apply one oversized corner radius to every row, field, and button.
- Do not use lifestyle photography where a legible contained packshot is required.

</design-context>
