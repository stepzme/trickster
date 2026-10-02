<design-context>
---
version: 1
platform: iOS
name: SOKOLOV-design-analysis
description: "A bright jewelry-commerce UI with white and light-grey surfaces, saturated blue actions, bold black headings, polished product and model photography, rounded grids and banners, sticky purchase bars, and a dense icon-led bottom bar."
colors:
  canvas: "#F7F7F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF0F3"
  accent-primary: "#1675E8"
  accent-secondary: "#F05A91"
  text-primary: "#15171A"
  text-secondary: "#74777D"
  divider: "#E1E4E8"
  destructive: "#D94755"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 16}
spacing: {screen-horizontal: 16, section-gap: 24, card-padding: 12, control-gap: 10}
rounded: {control: 14, card: 18, sheet: 28, pill: 999}
components:
  primary-action: {fill: "saturated blue", shape: "wide pill", text: "white semibold"}
  secondary-action: {fill: "white or pale grey", shape: "pill", text: "near-black"}
  primary-card: {fill: "white", shape: "rounded product card", imagery: "dominant"}
  navigation: {fill: "white bottom bar", active: "blue", inactive: "grey outline"}
---

# Overview

SOKOLOV uses a clean white commerce shell so polished jewelry and model photography carry the viewport. Saturated blue provides decisive action and selection, while occasional pink, red, or blue promotional masses stay bounded to campaigns and loyalty content. Dense product metadata remains subordinate to imagery and price.

# Non-negotiable visual invariants

- White/light-grey is the dominant commerce field; saturated blue is the primary action and selected-state color.
- Jewelry or model photography is the largest mass in product and campaign cards.
- Product browsing uses compact two-column grids with dense metadata.
- Detail screens lead with a large product photo and retain a sticky purchase bar.
- Bold black headings sit above smaller neutral product copy and prices.
- Rounded search, chips, cards, banners, and sheets use distinct radii.
- Bottom navigation remains icon-led with a clear blue active state.

# Color and surfaces

Use light grey behind pure white cards and panels. Blue marks primary CTAs, links, active navigation, selected filters, and map pins. Pink gradients belong to splash/brand moments; stronger red or blue fields are bounded promo cards. Text is near black with grey metadata and fine dividers. Default iOS blue styling without the documented photography and geometry is not sufficient.

# Typography

Use bold SF Pro Display for page and campaign headings and compact SF Pro Text for products, prices, badges, and controls. Product name and current price outrank auxiliary metadata. Blue text is contextual emphasis, not body copy. Dynamic Type grows cards and rows vertically before reducing photo or action prominence.

# Screen composition

Onboarding uses a full-screen gradient or hero card. Home stacks story circles, promo banners, categories, and product rails. Catalog and search use two-column product grids with filter/sort controls. Detail dedicates the upper viewport to photography and keeps purchase controls at bottom. Cart is a single-column list with fixed checkout; stores combine a map with a rounded bottom sheet; profile uses grouped panels. Use 16-point gutters and tight grid gaps.

# Navigation appearance

The white bottom bar contains compact outline icons with blue selected state. Top surfaces often include a rounded search pill; detail uses back, search/share, and heart controls. Map and form content uses large rounded sheets. Appearance only; no routes are prescribed.

# Components

Primary actions are wide blue pills with white semibold text. Product cards combine large imagery, badges, compact description, price, heart, and cart affordance. Filters are pills; sort/filter controls form a compact row. Cart rows include checkbox and removal/undo states. Profile may include QR/loyalty cards, toggles, and white grouped rows.

# Imagery and icons

High-key jewelry photography and model/editorial photos dominate. Promo art uses product/package renders rather than a recurring illustration family. Preserve jewelry silhouette, stones, and crop; compositionally important images cannot be omitted. Utility icons are coherent line symbols. No stable independent authored illustration system was observed.

# States

Observed states include onboarding, phone entry with keyboard, loading, selected filters, favorite/cart, deletion undo, checkboxes, toggles, QR/loyalty, map markers, and populated product detail. Blue selection and white photography-led surfaces remain constant.

# iOS adaptation

Extend the light canvas through safe areas. Scroll commerce feeds, grids, detail, cart, and profile; reserve lower inset for navigation or purchase actions. Keep product grids readable on compact widths and expand cards vertically for Dynamic Type. Targets are at least 44 points. VoiceOver reads product, price/status, then favorite/cart action.

# Anti-generic checklist

- Do not replace jewelry/model photography with symbols or generated decorative shapes.
- Do not use unstyled `TabView`, `Form`, or default controls.
- Do not flatten promo, product, loyalty, and sheet surfaces to one card style.
- Do not crop away jewelry detail or make metadata compete with the image.
- Do not remove sticky purchase and checkout hierarchy.
- Do not add lifestyle copy that repeats visible product or offer information.

</design-context>
