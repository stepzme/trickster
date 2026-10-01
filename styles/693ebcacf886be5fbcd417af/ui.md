<design-context>
---
version: 1
platform: iOS
name: Magnit-design-analysis
description: "A brand-forward grocery interface that moves from full-screen red-orange-pink onboarding art into dense white shopping feeds with rounded product photography, bold Russian sans-serif headings, red sticky actions, and a five-item bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#F6F6F7"
  surface-secondary: "#ECECEF"
  accent-primary: "#F20D2A"
  accent-secondary: "#FF8A34"
  text-primary: "#202025"
  text-secondary: "#77777E"
  divider: "#E5E5E8"
  destructive: "#C90018"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  product-tile: {fill: "white", geometry: "rounded photo-led card with compact price data"}
  red-sticky-action: {fill: "brand red", geometry: "wide bottom control with embedded total"}
  promotional-panel: {fill: "warm gradient or photography", geometry: "rounded wide campaign card"}
  contextual-pill: {fill: "pale gray or red selected", geometry: "compact capsule"}
  bottom-navigation: {fill: "white", geometry: "five labeled icon items"}
---

# Overview

Magnit combines expressive brand onboarding with dense everyday commerce. Introductory screens use full-viewport red, orange, and pink gradients with seasonal art or photography; shopping surfaces switch to a white field packed with rounded product tiles, campaign rails, prices, discount labels, and red actions. Bold headings and persistent five-item navigation keep the crowded feed legible.

# Non-negotiable visual invariants

- Brand red or pink marks primary actions, active tabs, price emphasis, and selected bottom navigation.
- Onboarding may use full-screen warm gradients and artwork, while transactional forms return to sparse white surfaces.
- Shopping feeds remain photo-heavy and dense, using rounded product and promotional tiles in rails or grids.
- The bottom navigation contains five compact icon-and-label items with a red active state.
- Cart and checkout use a large sticky red action with the relevant price or total aligned inside it.
- Explanations, delivery conditions, and date or time choices appear in broad rounded bottom sheets.
- Empty or address-required states center friendly authored spot art within generous white space.

# Color and surfaces

White is the dominant commerce canvas, separated into groups by pale-gray fields and subtle dividers. Brand red is the strongest functional color for action, selection, cart, and price emphasis. Orange and pink extend the brand into onboarding gradients and campaign panels. Near-black carries headings, current prices, and totals; gray carries units, previous prices, conditions, and metadata. Green may confirm success and yellow may signal ratings. Heavy dark chrome or default blue selection would conflict with the observed system.

# Typography

Use SF Pro Display and SF Pro Text for compact Cyrillic clarity. Page and campaign headings are bold and direct; product titles remain medium-sized; price and total values use stronger weight than unit or old-price text. Captions for discount, rating, and delivery stay small but legible. Use tabular figures for prices, quantities, and totals. Dynamic Type may increase tile and row heights or reduce grid columns, but must preserve price, unit, discount, and action labels as a clear group.

# Screen composition

Onboarding archetype: extend red-orange-pink artwork through the safe areas, keep a single centered focal subject or seasonal scene, and place concise copy and one action in a protected lower region. Login or form screens then use white space, direct fields, and a red action.

Shopping archetype: use 12-point side gutters, begin with compact location/search or contextual pills, then stack promotional carousels, product rails, and two-column product grids. Photography occupies most of each tile; price and action remain immediately below it.

Cart or checkout archetype: use a white single-column list with summaries and conditions, then anchor a large red action above the home indicator. Modal decisions rise in a white sheet with large top corners. Long content scrolls behind persistent bottom navigation or sticky action without overlap.

# Navigation appearance

The bottom bar is white with five labeled icon positions; inactive items are gray and the selected item becomes red. Top chrome stays light and uses compact dark back or utility icons. Contextual category tabs appear as pale pills with red selected treatment. Sheets are white, tall, and broadly rounded at the top. This section defines appearance only; product routes and information architecture come from the consuming product.

# Components

Product tiles use contained package or food photography, bold current price, muted old price or unit, small discount and rating details, a short title, and a compact red quantity or cart control. Promotional cards use rounded photography or warm brand gradients. Primary buttons are solid red with white semibold labels; sticky cart and checkout actions may include a total aligned at the trailing edge. Pills use pale-gray fills and turn red or gain red text when selected. Bottom-sheet rows are spacious enough for 44-point targets, use subtle dividers, and preserve clear selected states. Disabled controls reduce saturation without introducing a new neutral style.

# Imagery and icons

Product photography is compositionally important and cannot be omitted while final assets are pending. Pack shots should be contained and fully identifiable; campaign food and lifestyle photography may use cover crops while preserving the focal item. Onboarding and selected empty/address states use friendly brand-authored illustration with warm red/yellow energy, but the broader app mixes this with photography and functional icons. The evidence does not confirm one independent illustration system governing all roles, so these spot artworks remain localized rather than defining a separate package.

# States

Active tabs, cart controls, and primary actions retain red emphasis. Populated tiles preserve image, price, discount, rating, and quantity together. Empty or address-required states use centered spot art and ample white space. Cart and checkout states keep their sticky red total action. Delivery explanations and date or time choices appear in white bottom sheets. Success may add green, while closed or unavailable states reduce contrast and expose the condition near the affected control.

# iOS adaptation

Extend onboarding art or the white commerce canvas through safe areas as appropriate. Keep top controls below status-bar interference and reserve the lower safe area for the five-item bar or sticky red action. Use vertical scrolling for feeds, lists, and checkout and horizontal scrolling for promotional rails. Maintain two product columns only while price and title remain legible; collapse when localization or Dynamic Type causes collisions. Search, pills, quantity controls, sheet rows, actions, and navigation require at least 44-point targets. Native keyboard and permission transitions may remain native, then return to the same visual context. VoiceOver order follows context, heading, product image and facts, actions, summaries, then navigation. No unrelated dark appearance was observed.

# Anti-generic checklist

- Do not replace Magnit red selection and actions with default iOS blue.
- Do not make product browsing sparse or remove price, unit, discount, and rating density.
- Do not crop package photography so the product becomes ambiguous.
- Do not use heavy shadows or thick borders around every white tile.
- Do not replace the five-item bar with an unstyled `TabView`.
- Do not hide cart totals outside the sticky red action.
- Do not generalize localized onboarding or empty-state art into illustration on every commerce screen.
- Do not add decorative copy to fill the white space of empty states.

</design-context>
