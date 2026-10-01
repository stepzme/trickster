<design-context>
---
version: 1
platform: iOS
name: Vivid-design-analysis
description: "A bright premium-finance interface with expansive white space, heavy black hierarchy, saturated violet actions, pale-lilac cards and icon wells, bold balances, persistent purple-selected tab navigation, and glossy 3D product objects as bounded promotional imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F6F4F7"
  accent-primary: "#8A32F4"
  accent-secondary: "#E7D9FA"
  text-primary: "#242426"
  text-secondary: "#747478"
  divider: "#E6E4E8"
  destructive: "#E05762"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 750, lineHeight: 35}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 650, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  balance-block: {fill: "canvas", value: "oversized bold tabular", metadata: "gray compact"}
  product-tile: {fill: "pale lilac or gradient", radius: 18, image: "centered glossy object"}
  transaction-row: {fill: "surface-primary", leading: "circular category icon", trailing: "signed amount"}
  primary-action: {fill: "accent-primary", text: "white semibold", radius: 12, height: 52}
  bottom-navigation: {fill: "surface-primary", selected: "violet", badge: "red optional"}
---

# Overview

Vivid combines expansive white finance surfaces with heavy black headings, oversized balances, saturated violet actions, pale-lilac grouped cards, and dense but orderly transaction data. Glossy 3D objects and gradient campaign media give selected product tiles visual ownership, while everyday rows remain flat and restrained. Persistent bottom navigation uses violet selection and keeps the broader interface recognizably product-oriented rather than generic banking gray.

# Non-negotiable visual invariants

- White remains the dominant canvas, with generous vertical space around page titles, balances, and major product blocks.
- Saturated violet marks primary actions, selected navigation, focus, progress, and active controls; green and red remain financial or semantic.
- Page titles and monetary values use heavy black type with strong scale contrast over compact gray metadata.
- Product discovery uses pale-lilac or gradient tiles with one centered glossy 3D object and ample clear space.
- Transactional content stays in flat, compact rows with circular category icons and aligned signed amounts rather than decorative cards.
- Persistent bottom navigation uses a white surface, gray inactive icons and labels, and violet selected state.
- Modal selections use white rounded-top sheets over a dimmed backdrop with a small centered handle.
- Product imagery is bounded to tiles, onboarding, and campaigns; it does not appear in every data row or become a character illustration system.

# Color and surfaces

The base canvas and most list surfaces are white. Pale gray around `#F6F4F7` groups rows, fields, and secondary controls, while light lilac around `#E7D9FA` supports icon wells and product tiles. Important promotional blocks may use violet-to-magenta, pink, or occasional orange gradients, but transactional areas remain flat and quiet.

Saturated violet around `#8A32F4` owns primary buttons, selected navigation, active chips, progress, links, and focus. Charcoal carries primary text; gray carries helper copy and timestamps. Green and red communicate signed performance, transaction direction, or success/failure; amber is reserved for warnings. Default iOS blue as the main tint would visibly break the reference.

# Typography

Use SF Pro Display and SF Pro Text with heavy weights and tabular figures for money. Page and hero titles sit around 28-36 points at 700-800 weight, section titles around 20-24 points bold, item titles 14-17 points semibold, and captions 11-13 points gray. Balances and key monetary values are oversized, bold, and aligned for rapid comparison.

Titles and data are predominantly left-aligned; onboarding or status messages may center. Hierarchy depends on strong scale jumps, not many near-identical text sizes. Dynamic Type should increase card and row height, wrap supporting copy, and preserve alignment between labels and trailing values without reducing the prominence of the primary balance.

# Screen composition

Main product screens begin below the status area with a large title or balance block, then stack full-width sections, two-column square product tiles, compact rows, or horizontal promotional media above a persistent bottom bar. Side insets are roughly 16 points, card gaps about 12 points, and major section gaps 24-32 points.

The dashboard archetype combines a prominent balance with account or product cards and compact quick actions. The product-grid archetype uses two-column square tiles with a centered glossy object, concise label, and short value or benefit. The timeline archetype uses search or filter chrome, summary metrics, date-grouped transaction rows, and aligned signed amounts. Investment and rewards archetypes mix compact logo rows with promotional tiles or performance indicators.

Onboarding uses a large image hero or product object in the upper half, a compact segment control, and fixed bottom actions. Status or restriction screens use one centered icon/object, large title, concise copy, and one dominant action. Selection flows appear in white rounded-top sheets over dimmed context.

# Navigation appearance

The persistent bottom navigation is white with evenly spaced icon-label items, gray inactive states, violet selected state, and occasional small red notification badges. It remains visually light and distinct from scrolling content. Destination labels and order belong to approved Research and Planning, not this style package.

Internal screens use centered compact titles, purple back or close affordances, and occasional concise right-side actions. Bottom sheets have large rounded top corners and a centered grabber. Full-screen status pages and onboarding preserve clear safe-area spacing without introducing oversized custom navigation chrome.

# Components

Balance blocks use a large bold tabular value, short gray account label, and minimal surrounding chrome. Product tiles are square or near-square, rounded 16-20 points, filled pale lilac or a controlled gradient, and give one glossy object most of the visual area. Copy remains brief and aligned away from the object focal point.

Primary buttons are approximately 50-54 points high, violet, white-labeled, and rounded about 12 points. Secondary actions use white or pale surfaces. Transaction rows pair a circular category or merchant icon with two text lines and a right-aligned signed amount in charcoal, green, or red. Category and filter controls use pills, toggles, or compact selection rows with violet active state.

Account, card, reward, and investment rows may include mini card art, logos, small badges, or red/green performance indicators. Warning banners use bounded semantic color. Bottom sheets group selectable rows with checks; disabled or loading states reduce contrast while keeping the same geometry.

# Imagery and icons

Glossy 3D objects—rings, stars, cards, gifts, coins, luggage, hourglasses, and similar product metaphors—appear as centered contained imagery inside pale-lilac or gradient wells. They use soft highlights, smooth materials, and clear silhouettes with ample empty space. Merchant photographs, campaign banners, payment-card art, and logos remain content-specific. These image regions cannot be omitted while final assets are pending; placeholders must preserve their scale, crop, material weight, and clear space.

Despite recurring 3D objects, the sampled screens do not establish a broad standalone illustration system with repeated scene composition or character variants. Treat them as product and campaign imagery, not permission to invent scenes or populate every row with 3D art. UI icons are simple filled or outlined glyphs, often violet inside pale-lilac circles or squares.

# States

Observed states include splash, onboarding hero, selected segment, populated balances and product tiles, date-grouped transaction timeline, active filters, empty state, restriction warning, verification or loading, selected category toggles, planned payment, transfer sheet, avatar selection, search, green/red performance, red notification badge, and dimmed bottom-sheet selection. White space, heavy black hierarchy, violet action, and bounded product art remain stable.

# iOS adaptation

Respect status, keyboard, bottom navigation, home indicator, and sheet safe areas. Use vertical scrolling for dashboards, product lists, settings, and data histories; keep fixed bottom actions above the keyboard and home indicator. Grids may reduce from two columns to one on narrow layouts only when labels, artwork, and 44-point targets no longer fit.

Tabs, tiles, transaction rows, filter chips, toggles, and sheet actions need at least 44-point hit regions. VoiceOver order should follow title and balance, local actions, product or transaction content, then bottom navigation. Read signed amounts with their direction and context rather than color alone. Dynamic Type should expand rows and tiles without allowing glossy imagery to crowd text. Preserve the authored light appearance unless the approved product explicitly defines a dark variant.

# Anti-generic checklist

- Do not replace violet with default blue or use gains and losses as brand-purple values.
- Do not turn every financial row into a large rounded card or fill every surface with gradients.
- Do not omit glossy product objects from tiles where they provide most of the visual identity.
- Do not add 3D objects to every transaction, setting, or support row.
- Do not use an unstyled `TabView`, default `Form`, or generic system button as the finished appearance.
- Do not flatten balances, section titles, row labels, and captions into similar sizes or weights.
- Do not infer a standalone illustration package or character system from bounded product and campaign assets.
- Do not copy the reference product's tabs, account architecture, or financial flows.

</design-context>
