<design-context>
---
version: 1
platform: iOS
name: Yandex-Eats-design-analysis
description: "A photo-led white food-commerce interface with saturated yellow actions, heavy compact headings, green delivery accents, dense rounded controls, and map-backed order surfaces."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F5"
  accent-primary: "#FFE000"
  accent-secondary: "#079B63"
  text-primary: "#171717"
  text-secondary: "#696A70"
  divider: "#E5E5E7"
  destructive: "#DE3F4E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 800, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  yellow-order-action: {fill: "#FFE000", text: "#171717", shape: "wide rounded rectangle"}
  photo-commerce-card: {fill: "#FFFFFF", image: "dominant", metadata: "compact below"}
  delivery-badge: {fill: "#079B63", text: "#FFFFFF", shape: "small rounded capsule"}
  filter-chip: {fill: "#F4F4F5", text: "#171717", shape: "capsule"}
  sticky-cart-bar: {fill: "#FFFFFF", action: "yellow", position: "bottom safe area"}
---

# Overview

Yandex Eats is a dense, photography-first commerce interface. White leaves food and venue imagery visually dominant, while saturated yellow marks ordering decisions and green labels summarize favorable delivery conditions. Heavy compact headings bring energy to discovery screens; smaller neutral metadata keeps menus, prices, times, and ratings highly scannable. Maps and sticky order surfaces preserve the same bold, rounded grammar.

# Non-negotiable visual invariants

- Food and venue photography occupies the largest area of discovery and catalog cards; text-only or symbol-only substitutes are unacceptable.
- Primary ordering actions use saturated yellow with dark text rather than system-blue tint.
- The canvas stays predominantly white, with pale gray reserved for search, chips, grouped rows, and quiet secondary controls.
- Major headings are distinctly heavier and larger than menu labels, prices, and metadata.
- Restaurant and product cards are compact, image-led, and information-dense rather than elevated generic panels.
- Delivery and promotional facts use small high-contrast green badges or tinted pills.
- A sticky bottom action can keep the current cart, total, or confirmation visible above the safe area.
- Map screens use the map as a full visual field with rounded white controls or sheets layered above it.

# Color and surfaces

White is the continuous commerce canvas and the base for sheets and lists. Pale gray creates rounded search fields, inactive chips, form rows, and secondary groupings. Saturated yellow is the unmistakable action color and occasionally a large launch field. Near-black carries headings, prices, and icons; medium gray handles cuisines, timing, weights, dates, and hints. Green expresses delivery benefits and positive conditions. Red appears in warnings, removal, or promotional accents. Advertising banners may introduce local brand colors without recoloring the core shell.

Modal dimming is dark but temporary. The sampled screens do not establish an app-wide dark appearance. Default iOS blue, gray-on-gray action hierarchy, or decorative gradients around ordinary content would break the observed visual language.

# Typography

Large Russian headings are short, heavy, and tightly set, while transactional information uses a calmer sans-serif. Restaurant or item titles are semibold; price and delivery time outrank description and metadata. Captions remain compact and factual. Buttons use centered semibold labels. Long descriptions wrap below the primary title instead of competing with it.

Use SF Pro Display with a heavy weight as an iOS-safe display substitute and SF Pro Text for content and controls. Under Dynamic Type, preserve the large contrast between heading, item title, and metadata; let cards and rows grow, keep prices visible, and allow filters to scroll horizontally rather than compressing labels.

# Screen composition

Discovery screens typically begin below the safe area with address or context, search, and compact utility controls. The middle is a vertical feed made from wide photo cards, horizontal carousels, grid categories, filter strips, and promotional banners. Sixteen-point side insets are common, with tight internal gaps. A bottom tab bar or sticky order action occupies the lower safe area.

Marketplace archetype: a search/header zone leads into category shortcuts, promotional modules, filters, and image-heavy venue cards in a continuous vertical scroll.

Menu archetype: a venue image or identity header leads into sticky category/filter controls and a dense product grid or list with photos, titles, price, and compact add controls.

Product-sheet archetype: a large food image fills the upper part of a rounded sheet, followed by title, options, price, and a strong yellow action.

Checkout archetype: stacked white and pale-gray form rows are grouped by restrained spacing, while order total and confirmation remain anchored low.

Map archetype: a full-bleed map holds pins and compact controls, with a rounded bottom panel or sheet supplying status and actions.

# Navigation appearance

The bottom navigation is light and compact, using icon-label pairs with strong selected contrast and muted inactive items. Top bars use ordinary compact back, search, favorite, or utility controls; the content title or image remains dominant. Horizontal segmented or category tabs are low and scrollable. Sheets use a dimmed backdrop, large top corners, and an optional centered grabber. Sticky cart and confirmation bars are visually separate from navigation and respect the bottom safe area.

# Components

Primary actions are wide yellow rounded rectangles with dark semibold labels. Add controls are small circles or rounded rectangles placed near product imagery; quantity state expands into a compact stepper without changing the surrounding card. Search fields and address controls are pale rounded bars with simple leading icons. Filter and sort chips are tight neutral capsules whose selected state gains fill or text contrast.

Venue cards use a large rounded photo followed by name, rating, delivery time, cuisine, and compact badges. Product cards use a photo-first layout with short title, weight or description, price, and add control. Delivery badges are small green rounded labels with white or dark green text. Form rows, payment cards, toggles, modal pickers, chat composers, map pins, and validation toasts retain the same compact spacing and soft geometry. Disabled controls reduce contrast without changing size.

# Imagery and icons

Natural food photography and venue imagery are compositionally essential. Crops are bold and appetizing, with the subject filling a wide rounded frame; product images remain clear enough to identify the dish before reading. Restaurant interiors and promotional photos can create larger horizontal color masses. Maps function as primary content on location and tracking surfaces. Partner logos and advertising art remain local to their modules.

Icons are concise and visually subordinate to imagery and labels. Do not omit photos while waiting for final assets or replace categories with arbitrary SF Symbols. The sampled screens do not establish a stable standalone authored illustration language, so character scenes or decorative 3D objects are not required style traits.

# States

Observed states include launch and permission prompts, populated marketplace feeds, venue lists, restaurant detail, product sheet, cart, checkout, active order tracking, map browsing, booking forms, profile, settings, support chat, address selection, notifications, selected filters, steppers, keyboards, modal pickers, validation toasts, and disabled actions. Selection increases contrast or fill while geometry remains stable. Loading and modal overlays preserve the white-yellow-green shell behind them.

# iOS adaptation

Use safe-area-aware scroll containers for feeds and menus, horizontal scrolling for filters and categories, and independent bottom insets for tab or cart bars. Photo cards should preserve useful aspect ratios and subject crops on compact widths. Product grids may reflow when Dynamic Type makes two columns illegible. Keep visible controls compact while expanding hit regions to at least 44 points.

Use native keyboard avoidance for checkout and chat, and native sheet mechanics with custom reference-matched content, radii, and dimming. VoiceOver order should follow context/title, search and filters, visual items with meaningful image descriptions, then sticky cart or confirmation. Native system permissions can interrupt the flow, but the underlying styled screen should remain intact. Do not invent a dark theme from local dim overlays.

# Anti-generic checklist

- Do not replace food photography with generic illustrations, symbols, or empty color blocks.
- Do not use default blue tint for order, cart, or confirmation actions.
- Do not turn the feed into a stack of identical elevated white cards.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default sheet content.
- Do not flatten headings, prices, titles, and metadata into one text scale.
- Do not hide the sticky cart or purchase hierarchy inside ordinary navigation.
- Do not use arbitrary mixed-weight SF Symbols for venue, category, or product imagery.
- Do not add mood-setting copy that duplicates visible prices, timing, status, or actions.

</design-context>
