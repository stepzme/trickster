<design-context>
---
version: 1
platform: iOS
name: Cian-design-analysis
description: "A bright real-estate marketplace combining white utility surfaces, saturated blue actions, map overlays, dense black property data, large photo evidence, a five-item tab bar, and selective glossy blue-purple 3D service imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F5F8"
  accent-primary: "#087BEE"
  accent-secondary: "#35B8F3"
  text-primary: "#17191C"
  text-secondary: "#6F7479"
  divider: "#DFE4E8"
  destructive: "#D83A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "Cian blue", text: "white semibold", height: 52, radius: 14}
  listing-card: {fill: "white", image: "large property crop", padding: 12, radius: 18, content: "price, attributes, location, status"}
  map-pin: {fill: "blue or white", text: "compact dark or white value", radius: 999}
  navigation: {fill: "white", selected: "blue icon and label", unselected: "muted gray"}
---

# Overview

Cian is a bright, utilitarian real-estate interface where maps and property photography provide spatial evidence while dense black text supports comparison. White fills most list, detail, creation, message, and account surfaces; pale gray separates inputs and grouped tools. Saturated Cian blue marks primary actions, selected tabs, pins, and links. A selective authored layer of glossy blue-purple-cyan 3D pictograms appears in service tiles, onboarding, empty states, and wallet contexts without replacing real property imagery.

# Non-negotiable visual invariants

- White remains the dominant utility canvas; pale gray groups fields and secondary tools without creating a decorative card stack.
- Real property, room, building, and neighborhood photography is the primary evidence on listing and detail surfaces and cannot be omitted.
- Saturated blue owns primary actions, selected navigation, links, map pins, and active filters.
- Prices and core property attributes use bold tabular hierarchy and stay visually adjacent to location and status context.
- Map screens preserve visible geographic context beneath compact filters, controls, price pins, and a raised white result sheet.
- The primary bottom bar contains five compact items, with a blue selected state and muted inactive items.
- Glossy blue-purple-cyan 3D pictograms are reserved for service, onboarding, wallet, and empty-state surfaces rather than inserted into listing evidence.
- Rounded bottom sheets use visibly larger top corners than ordinary cards, chips, and fields.

# Color and surfaces

The canvas and primary surfaces are white. Cool pale gray fills inputs, grouped settings, secondary controls, and disabled states. Thin gray dividers organize dense rows. Real map tiles retain their native pale geographic palette, while dimmed modal overlays use translucent black.

Cian blue is the decisive accent and may fill a wide action, selected tab, chip, icon, or map pin. Lighter cyan supports service emphasis and authored imagery. Near-black carries price, titles, and core facts; medium gray carries address, transport, terms, dates, and inactive state. Green marks trust or positive verification, while red marks destructive actions, unread count, or error. Default iOS blue used inconsistently, bright gradients on ordinary fields, and many competing accent colors would break the reference.

# Typography

Use SF Pro Display for prices, major titles, and section headings and SF Pro Text for listing facts, filters, forms, messages, and metadata. Hero statements sit around 30–34 points, page titles around 26–28, section headings around 20–22, listing titles and prices around 15–18, body text around 14–16, and metadata around 11–13.

Content is mostly left-aligned, while compact navigation titles and the centered Cian mark may sit in the top bar. Prices, areas, counts, and dates use tabular figures. Dense attributes are grouped with spacing and weight rather than decorative color. With Dynamic Type, metadata stacks below titles and prices, chips wrap or scroll, and listing cards grow vertically before property facts are truncated.

# Screen composition

Most utility surfaces use 16-point screen insets, 10–12 point control gaps, 12–16 points inside cards, and 20–28 points between major groups. White or map content extends through the safe areas according to context. Long result, detail, form, message, and office surfaces scroll vertically; the five-item tab bar or a lower blue action reserves the bottom safe area.

Observed archetypes include:

- Map composition: real map fills most of the viewport, with compact search, filter chips, location controls, price pins, and a white rounded result sheet raised from the bottom.
- Listing-feed composition: search and filter controls lead into a one-column stack of photo-led cards with bold price, compact attributes, address context, labels, and favorite state.
- Detail composition: large photo carousel dominates the upper region, followed by price and facts, dense white sections, trust or status labels, and clear blue contact actions.
- Creation composition: centered or leading title over a linear series of pale grouped fields, photo controls, selectors, and one wide blue continuation action.
- Utility-list composition: white grouped rows with compact leading icons, black labels, gray secondary values, badges, chevrons, or switches.
- Service or wallet composition: rounded pale or white cards use concise copy and a contained glossy 3D pictogram; empty variants open more white space around the art.
- Modal composition: large-radius white bottom sheet over a dimmed map, photo, or list context, with compact choices and one blue action.

# Navigation appearance

The primary bottom bar is white and contains five evenly spaced icon-and-label items. The selected item turns blue; inactive items remain gray. Red count badges may attach to a relevant item. Many top bars use a centered compact Cian mark, leading back chevron, and trailing share, ellipsis, favorite, or close controls. Sheets use white surfaces, large top corners, and a subtle drag indicator. Filters and segmented tabs use white or pale fills with blue selected state.

# Components

- Primary action: approximately 52 points tall, full or near-full width, Cian-blue fill, 14–16 point radius, and centered white semibold label. Disabled state becomes pale gray.
- Listing card: large property photograph, 16–20 point radius, compact white metadata region, bold price, short attribute row, gray location context, optional trust label, and separate favorite control.
- Map pin: blue or white compact pill with short price or count value, strong contrast, and a subtle selected elevation. It does not obscure surrounding geography.
- Filter chip: 34–40 points tall, white or pale-blue fill, pill radius, compact label, and blue selected state.
- Grouped field: pale-gray rounded rectangle with explicit label or placeholder, dark value, and optional trailing selector or disclosure.
- Service tile: pale or white rounded surface with short title, compact action, and one contained glossy 3D pictogram occupying meaningful but secondary space.
- Message or notification row: leading avatar or icon, dark title, gray preview or timestamp, optional unread dot or badge, and thin divider or spacing.

# Imagery and icons

Real property photography is essential and uses wide or portrait crops that preserve room geometry, building context, or neighborhood evidence. Photo carousels may fill the upper detail region; thumbnails and cards keep price, attributes, labels, and actions outside busy image areas. Maps remain functional imagery rather than decorative texture.

The authored secondary imagery uses glossy blue, purple, and cyan 3D pictograms with simple rounded forms and soft shadows. These objects appear in onboarding, services, messaging empty states, and wallet surfaces. Utility icons remain compact blue, black, or gray line and filled glyphs. Temporary media must preserve the observed crop, subject scale, palette density, and hierarchy.

# States

Observed states include selected filters and tabs, unread dots or badges, empty message or wallet surfaces, favorite heart selection, modal sheets over dimmed maps, scroll-position indicators, populated photo cards, and form or account states. These retain the white canvas, blue active color, rounded geometry, and dense black/gray hierarchy.

Trust or positive state uses green labels; unread, destructive, or error state uses red. Empty states may introduce the glossy authored pictogram while property evidence surfaces remain photo-led. Modal focus dims the underlying context without changing the sheet's blue action hierarchy.

# iOS adaptation

Extend white, map, or the active photo carousel through the appropriate safe areas and reserve the lower inset for the tab bar or blue action. Use vertical scroll containers for result lists, details, forms, messages, and account tools. Floating map controls and result sheets must avoid the status bar, home indicator, and each other.

All chips, pins, icon controls, favorite buttons, list rows, and tabs need at least 44-point targets. VoiceOver should announce price, property type or core attributes, location, status, and action in that order; decorative pictogram pieces should not become separate elements. Preserve native keyboard, camera/photo picker, map, payment, and sheet transitions. With Dynamic Type or compact widths, stack attributes and expand cards before shrinking type. Maintain the observed light-first system.

# Anti-generic checklist

- Do not replace real property photography or map evidence with generic illustrations.
- Do not use default blue inconsistently; preserve the saturated Cian-blue action and selected-state hierarchy.
- Do not hide price, location, or core property attributes behind disclosure or imagery.
- Do not turn every list group into an oversized floating card.
- Do not ship an unstyled `TabView`; preserve the five-item white bar and blue selected state.
- Do not replace the glossy service pictograms with arbitrary SF Symbols where the authored art is compositional.
- Do not give map pins, chips, listing cards, fields, and sheets one uniform radius.
- Do not cover map context with opaque controls or overlapping sheets.

</design-context>
