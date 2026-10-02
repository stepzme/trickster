<design-context>
---
version: 1
platform: iOS
name: Lalafo-design-analysis
description: "A dense white classifieds marketplace with vivid green posting actions, hot-magenta contact emphasis, compact photo-first grids, restrained gray utility surfaces, and a tab bar organized around a central floating action."
colors:
  canvas: "#F6F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEEEF2"
  accent-primary: "#00C947"
  accent-secondary: "#F50069"
  text-primary: "#17171B"
  text-secondary: "#77777F"
  divider: "#E3E3E7"
  destructive: "#D9434E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 27, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 10
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#00C947", textColor: "#FFFFFF", cornerRadius: 999, minHeight: 48}
  secondary-action: {fill: "#F50069", textColor: "#FFFFFF", cornerRadius: 999, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 14, padding: 10}
  navigation: {fill: "#FFFFFF", selectedColor: "#00C947", unselectedColor: "#A0A0A8", floatingActionColor: "#00C947"}
---

# Overview

Lalafo is a fast, information-dense classifieds interface. White and pale-gray utility surfaces frame compact photo-led listings; vivid green identifies posting, selection, and confirmation, while hot magenta isolates paid/VIP, favorite, price, or direct-contact emphasis. The visual signature is a two-column marketplace grid and a bottom tab bar centered on a prominent green floating action.

# Non-negotiable visual invariants

- Listing photography is the largest element in each compact card and remains visible at browsing density.
- Green is reserved for primary posting, selection, confirmation, and the central floating action.
- Magenta is a distinct secondary emphasis for VIP/contact/favorite/price moments, not a replacement primary tint.
- White cards sit on white or faint-gray fields with minimal shadow and thin separation.
- Price and listing title are visually stronger than compact gray location/time metadata.
- Bottom navigation remains low-profile and is visually organized around a raised circular green action.
- Filters, selections, and forms use compact pills, rows, and sheets instead of oversized decorative tiles.

# Color and surfaces

The large canvas is white or very light gray. Primary cards, forms, and sheets are white; pale gray is used for search, grouped rows, and inactive controls. Bright green provides the clearest action/selected state, while magenta marks seller contact, promoted/VIP status, hearts, or exceptional emphasis. Near-black carries price and titles, medium gray carries supporting facts, and red is limited to errors/destructive states. Default iOS blue or a one-accent palette would erase the observed green/magenta distinction.

# Typography

Use SF Pro. Page and section titles are compact bold, listing prices use the strongest local weight, listing names use medium or semibold, and location/time/count metadata uses smaller gray text. The hierarchy should remain compressed enough for a marketplace grid without making all text the same size. At Dynamic Type sizes, expand card height, preserve price → title → metadata order, and move secondary controls below rather than shrinking text.

# Screen composition

The top safe area leads into a compact title/search region, category shortcuts, or segmented filters. The dominant browse composition is a two-column scroll grid of image-first listing cards, with occasional horizontal categories and small promotional inserts. Detail screens expand one listing image/gallery across most of the width, followed by price, facts, seller/contact controls, and related items. Search filters and publishing/account surfaces use full-height white sheets or one-column form/list screens. Typical side insets are about 16 points and card gaps are narrow.

Visible archetypes include login; home with search/categories/listing grid; filtered results; photo-led listing detail; quick-message/contact sheet; long placement forms; and profile/account rows.

# Navigation appearance

The bottom bar is white with compact icons and labels; the selected item is green and the center posting action is a raised green circle. Top bars use conventional-scale back, close, and utility controls with dark or green tint. Segmented tabs use a clear green selected state. Bottom sheets have large rounded top corners over a dim scrim, while full-screen filters remain white and information-dense.

# Components

Listing cards pair a rounded photo with price, concise title, metadata, favorite, and optional VIP/promotion badge. Primary actions are green pills or rounded rectangles with white semibold text; direct-contact emphasis may use magenta. Search uses a pale rounded field. Chips, radio rows, segmented controls, and filter pills use green text/fill or check marks when selected. Quick-message actions can appear as compact floating pills. Forms use explicit labels, white rows, light dividers, and full-width confirmation rather than default `Form` styling. Disabled states retain geometry and reduce saturation.

# Imagery and icons

Real listing photography is compositionally required and cannot be omitted while assets are pending. Use aspect-fill crops that keep the advertised object recognizable; category thumbnails may use literal object cutouts, but the inspected set does not establish a coherent independent illustration grammar. Icons are functional and compact. Promotional badges and placeholder graphics remain subordinate to listings and do not justify a separate illustration system.

# States

Observed states include selected tabs and filters, promoted/VIP listings, favorited items, quick-message overlays, confirmation toasts, modal sheets, populated account lists, and long placement forms. Selection stays green, contact/promotion may stay magenta, and destructive/error feedback remains local red. The dense photo-card composition and white/gray field remain constant across states.

# iOS adaptation

Respect the top safe area and keep the raised center action plus tab bar above the home indicator. Use vertical scrolling for listings/details/forms and horizontal scrolling only for categories/chips. Make filters and forms keyboard-aware. Maintain 44-point hit areas for compact hearts, chips, message, tabs, and floating action. VoiceOver should read listing image description → price → title → metadata → status/actions. At compact widths, preserve two columns only when price/title remain legible; otherwise switch to one-column rows. The observed light appearance is primary.

# Anti-generic checklist

- Do not replace the green/magenta hierarchy with default blue.
- Do not remove listing photography or substitute generic object symbols.
- Do not turn the dense feed into large shadowed cards with sparse text.
- Do not use an unstyled `TabView` without the raised green center action.
- Do not flatten price, title, and metadata into one typographic level.
- Do not invent a 3D illustration language from incidental category thumbnails.
- Do not use default `Form` and system filter styling.

</design-context>
