<design-context>
---
version: 1
platform: iOS
name: Kaspi-design-analysis
description: "A dense white iOS service hub organized by compact red line-icon grids, pale-gray grouped lists, restrained system typography, persistent red-selected navigation, blue transactional actions, gold account headers, and product photography that becomes dominant only inside commerce surfaces."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F3"
  accent-primary: "#F14645"
  accent-secondary: "#1688D8"
  text-primary: "#222224"
  text-secondary: "#747479"
  divider: "#E6E6E8"
  destructive: "#D83C3C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 20
  card-padding: 14
  control-gap: 8
rounded:
  control: 10
  card: 14
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-secondary}", text: "#FFFFFF", cornerRadius: 10, minHeight: 48}
  service-tile: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 8, padding: 8}
  account-panel: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 14, padding: 16}
  navigation: {fill: "{colors.surface-primary}", selected: "{colors.accent-primary}", unselected: "#A5A5AA", minHeight: 58}
---

# Overview

Kaspi is a high-density utility interface whose identity comes from a red line-icon language and repeated compact grouping rather than expressive typography. Home and service surfaces are predominantly white, with dense icon grids, short labels, banners, and direct rows. Financial contexts introduce pale-gray grouping, blue commit actions, and occasional gold/tan account headers. Commerce contexts become image-led, but product photography and merchant campaigns remain contained within catalog, product, order, and promotional modules.

# Non-negotiable visual invariants

- White is the dominant full-screen mass; pale gray groups sections, search fields, lists, and forms without turning every item into a card.
- Compact red line icons repeat across service tiles, actions, and active navigation and carry more identity than typography.
- Dense service surfaces use regular multi-column icon grids with short labels and narrow gaps.
- Red marks brand, category, badge, toggle, and selected-navigation emphasis; blue is reserved for primary transactional or continuation actions.
- Financial screens transition from account summary or colored header into stacked white and pale-gray operational content.
- Commerce screens let product photography, price, installment labels, and sticky purchase actions dominate rather than forcing the service-grid composition.
- Bottom navigation stays visually light and persistent above the safe area, using gray inactive items and red active emphasis.

# Color and surfaces

Most screens are white edge to edge. Very light gray creates search fields, list backgrounds, segmented controls, inactive areas, and gutters between grouped sections. White cards and sheets sit above those gray fields with subtle dividers and little or no shadow. A warm gold/tan field appears behind account summary content, with white cards rising into it.

Kaspi red is the strongest recurring accent in line icons, selected tabs, badges, toggles, and small labels. Bright blue fills the main action in authentication, permissions, transfer, cart, and checkout contexts. Green is used for positive or issued state and commerce availability; yellow and green price labels belong to retail information. Destructive meaning uses darker red. Default iOS blue applied to navigation or service icons would erase the observed red/blue division.

# Typography

Typography is utilitarian SF-like sans throughout. Navigation titles are compact, centered, and semibold or bold. Section headings are left-aligned and heavier than the dense list and grid copy. Amounts, balances, prices, and transaction outcomes use the largest bold numeric treatment; metadata, seller details, subtitles, and tab labels are markedly smaller and gray.

Use SF Pro Display for large amounts and outcomes and SF Pro Text for the operational layer. Tabular figures should support price and balance comparison. Under Dynamic Type, let service labels wrap to two lines, list rows grow, and secondary commerce details move below; preserve the prominence and alignment of amount, total, price, account state, and primary action.

# Screen composition

Home and services begin with compact top-safe-area chrome, then a search or context row, dense three- or four-column service grids, banners, and grouped utility modules. Content uses approximately 12-16 point side insets and tight 8-12 point gaps. Large narrative whitespace is absent; hierarchy is created by grouping and recognition.

Financial screens often use a strong account header or balance summary high in the viewport, followed by segmented controls, compact action rows, fields, and vertically stacked lists on pale gray. Transfer and payment forms become one-column compositions with amount, account or recipient, optional details, and a wide blue action above the lower safe area.

Commerce catalog screens use dense image grids or horizontal rails. Product detail places a large product image across much of the upper viewport, followed by price/installment labels, seller or option controls, and persistent purchase actions. Orders and cart use compact thumbnail rows and totals. Maps make the map the dominant full-screen surface with a rounded category or result panel above the lower edge.

# Navigation appearance

Top bars use a centered bold title with a small back chevron at left and occasional language, city, share, close, or export action at right. Search states replace the title with a wide pale-gray rounded search field. Bars are white and visually merge with the canvas rather than becoming colored headers.

The persistent bottom bar is white with compact icon-label items. Inactive icons and labels are light gray; active state is red. Some commerce areas show their own visually similar five-item bar, but the appearance remains consistent. Segmented controls are shallow rounded containers with white or gray selection. Bottom sheets rise as white panels with large top corners over a dim layer; system alerts remain centered white cards.

# Components

Service tiles often sit directly on the white canvas rather than inside individual cards. Each uses a small red outline pictogram above or beside a short dark label; grids stay geometrically regular. List rows use a left red icon, one or two lines of text, optional value, and right chevron separated by hairlines.

Search fields are pale-gray rounded rectangles with a leading search glyph and compact text. Primary transaction and continuation actions are full-width blue rectangles about 48 points high with white semibold text and moderate rounding. Red controls are used for brand or local selection, not interchangeably with the blue commit action.

Account panels are compact white cards with balance, product identity, actions, and state. Commerce components include photo tiles, price and installment badges, seller rows, chips, option selectors, quantity steppers, and sticky bottom totals/actions. Sheets and dialogs retain native proportions but follow the white, gray, red, and blue hierarchy.

# Imagery and icons

Product photography supplies most of the visual mass in marketplace grids, product detail, orders, and cart. Use cover crops for catalog and campaign imagery and contain crops where a product cutout must remain complete. Merchant logos, campaign banners, map tiles, and POI marks are separate content families and should not be combined into an invented illustration style.

The stable icon system uses thin red line pictograms with simple recognizable metaphors. Bottom navigation and secondary utilities use related gray/red glyphs. The circular red brand mark may appear in splash, headers, or account decoration. When commerce imagery is part of a sampled composition, preserve its size, crop, and price-safe area with a temporary raster image rather than replacing it with arbitrary symbols.

# States

Search focus can expose a large empty pale-gray result field, while populated search uses grouped results and tabs without changing the surrounding chrome. Selected tabs, service choices, and active switches use red. Primary enabled transactional actions use blue; disabled forms reduce contrast while keeping geometry.

Observed permission explanation stays on a clean white field with direct CTA. Face ID and destructive cart confirmation use native centered alerts over a dimmed screen. Language and seller choices use rounded sheets. Order state appears locally in red for canceled and green for issued. No explicit network-error composition was observed, so do not invent an unrelated visual treatment.

# iOS adaptation

Extend white, pale gray, map, or account header fields through their relevant safe areas. Dense grids, lists, catalog, products, orders, and forms require vertical scrolling; reserve lower inset for the persistent bar or sticky action. Horizontal product rails remain horizontal, while compact widths reduce columns before compressing labels or imagery beyond readability.

Service tiles, rows, controls, chips, product options, and bottom items need 44-point targets even when their visible glyph is smaller. Keep the active input and blue action reachable above the keyboard. Preserve VoiceOver order from title through grouped services or financial values to actions. Dynamic Type should grow rows and grid tiles. The observed system is light; do not introduce a dark appearance without a separately designed variant.

# Anti-generic checklist

- Do not wrap every service or home item in an identical white card.
- Do not replace the repeated red line-icon system with arbitrary SF Symbols or multicolor glyphs.
- Do not use red and blue interchangeably; preserve red identity/selection and blue transaction commitment.
- Do not enlarge typography and spacing until the service grids lose their operational density.
- Do not implement financial forms as default grouped forms with system-blue focus and unrelated radii.
- Do not shrink commerce photography into decorative thumbnails on a generic utility screen.
- Do not render the persistent bottom bar as an unstyled tab view with default tint.
- Do not merge product photos, merchant logos, campaign banners, maps, and brand marks into a fictional illustration language.

</design-context>
