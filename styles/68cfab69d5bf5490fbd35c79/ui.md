<design-context>
---
version: 1
platform: iOS
name: MyAmeria-design-analysis
description: "A light modular banking interface with a pale-gray canvas, softly elevated white financial cards, vivid lime actions and focus, compact account typography, dense service grids, a white tab bar, and a prominent elevated circular center control."
colors:
  canvas: "#F8F9F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F3F1"
  accent-primary: "#73D04B"
  accent-secondary: "#202126"
  text-primary: "#151719"
  text-secondary: "#696D6C"
  divider: "#E3E7E4"
  destructive: "#E24D4D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 28
  pill: 999
components:
  account-card: {fill: "surface-primary", radius: 18, value: "masked balance", trailing: "overflow"}
  primary-action: {fill: "accent-primary", text: "dark semibold", radius: 12, height: 52}
  financial-input: {fill: "surface-primary", radius: 12, focus: "lime outline", trailing: "context icon"}
  service-tile: {fill: "surface-secondary", radius: 16, icon: "thin outline", label: "compact"}
  bottom-navigation: {fill: "surface-primary", selected: "black and lime", center: "elevated lime circle"}
---

# Overview

MyAmeria is a light modular banking interface built from a pale-gray canvas, white rounded financial panels, vivid lime actions, compact account typography, and dense but orderly service grids. Product dashboards, transfer forms, history filters, and investment tables share the same quiet surface system. A white bottom navigation bar with an elevated lime center control gives the otherwise restrained layout a distinct visual anchor.

# Non-negotiable visual invariants

- Pale gray fills the application canvas while white rounded cards carry accounts, products, forms, and grouped financial information.
- Vivid lime is reserved for primary actions, focus outlines, selected states, progress, and the elevated center navigation control.
- Financial hierarchy is compact: bold product or amount labels sit above or beside muted account, fee, date, and status metadata.
- Inputs are large white rounded rectangles with light borders, inline labels, context-specific trailing icons, and lime focus.
- Main screens use a white icon-label tab bar with a prominent circular lime control raised at the center.
- Forms and dashboards use 12-16 point gutters, scrollable vertical stacks, horizontal chips, segmented tabs, and sticky bottom actions.
- Modal filters and selectors use white rounded-top sheets over a dimmed backdrop with a full-width lime bottom button.
- Bank cards, merchant media, charts, logos, and isolated line drawings remain functional or campaign assets rather than a decorative illustration system.

# Color and surfaces

The base canvas is an almost-white gray around `#F8F9F8`. Primary cards, inputs, top bars, and navigation are white; service tiles and grouped controls use pale cool gray around `#F0F3F1`. Subtle shadow or blur separates large panels, while thin gray dividers organize dense lists and tables without heavy borders.

Lime around `#73D04B` fills primary controls, selected indicators, focus outlines, badges, and the central navigation control. Labels on lime use very dark olive or charcoal for contrast. Near-black carries headings, balances, and active navigation; gray carries masked identifiers and metadata. Red and amber remain semantic. Default blue primary actions or green-filled product cards everywhere would visibly break the reference.

# Typography

Use SF Pro Display and SF Pro Text with tabular numerals for monetary values. Centered top titles are around 17-18 points semibold, screen and section headings 18-22 points bold, main labels and amounts 14-17 points semibold, body 13-15 points, and captions or statuses 11-13 points gray.

Hierarchy relies on weight, alignment, and spacing more than dramatic display scale. Amount, source, destination, and fee values align consistently in forms and tables. Dynamic Type should expand rows, cards, and filters, wrap secondary labels, and preserve alignment between monetary labels and trailing values.

# Screen composition

Logged-in screens use a white or pale top bar, a scrollable vertical dashboard, and persistent bottom navigation. Sixteen-point side gutters frame horizontal product carousels, account cards, service grids, rate tables, and history groups. Major sections are separated by roughly 20-28 points; internal card gaps are 8-12 points.

The dashboard archetype combines horizontally scrollable account or product cards, shortcut rows, and wide information modules. The service archetype uses a structured grid of pale rounded tiles with thin icons and short labels. The transfer archetype stacks large labeled inputs, source selectors, amount and fee rows, and a sticky lime action above the home indicator.

History uses date or status chips, grouped transaction cards, compact approved-state metadata, and filter sheets. Investment screens use a prominent portfolio balance, segmented product tabs, instrument rows or tables, story/campaign media, and compact performance data. Authentication and registration use more open vertical stacks and system permission or Face ID overlays.

# Navigation appearance

Bottom navigation is a white bar with small outline icons and labels. Inactive items are light gray; active items use black and lime emphasis. The center position is a larger circular lime control elevated above the bar, making it visually dominant without increasing the height of every item. Destination names and order must come from approved Research and Planning.

Internal screens use white top bars, compact centered titles, and minimal back chevrons or action icons. Bottom sheets have large rounded top corners, centered titles, close, cancel, or clear controls, a dimmed backdrop, and a full-width lime bottom action. Native permission, Face ID, and confirmation dialogs retain platform geometry.

# Components

Account and card panels use white fill, 16-20 point corners, soft elevation, masked balance or account data, compact product label, and three-dot overflow. Service tiles use pale-gray fill, 14-18 point corners, thin outline icons, and short labels. Transaction rows use compact status, date, counterparty, and amount hierarchy with subtle separators.

Primary actions are approximately 50-54 points high, lime-filled, dark-labeled, and rounded about 12 points. Inputs are large white rounded rectangles with light border, inline label, dark value, and trailing scan, clear, dropdown, edit, or currency affordance; focused state uses a lime outline. Filter chips and segmented tabs use lime or black selected emphasis.

Sheets group selectable rows, date controls, amount or currency filters, and a sticky lime action. Selected source accounts use checks or stronger outlines. Success receipts use concise action rows; disabled states recede to pale gray. Face ID appears as a centered dark system overlay on a dimmed form.

# Imagery and icons

Bank logos, card art, account tiles, merchant or stock imagery, campaign stories, avatars, and investment logos are content-specific and stay inside bounded rounded frames. Charts, exchange-rate tables, portfolio rows, and performance indicators are functional data visualization rather than decoration. Compositionally required card or campaign media cannot be omitted; placeholders must preserve its crop, scale, and position.

Icons use a consistent thin outline style across services and navigation. A small person/door drawing and a success doodle are isolated state graphics, not evidence for a reusable illustration system. Do not introduce recurring characters, large scenes, or decorative background art.

# States

Observed states include onboarding and registration, permission alert, populated account dashboard, hidden and visible balance, product carousel, selected tab, transfer inputs, card scan overlay, numeric keyboard, selected source account, fee summary, Face ID confirmation, success receipt, transaction history with approved status, filter chips, date-picker sheet, amount and currency filters, empty transaction state, investment balance, stock or bond selection, portfolio table, top-up form, language selection, and logout confirmation. Pale surfaces, lime action, compact hierarchy, and safe-area-aware navigation remain stable.

# iOS adaptation

Respect the status bar, keyboard, bottom navigation, home indicator, sheet, and system-dialog safe areas. Dashboards, forms, history, and investment tables scroll vertically; product shelves may scroll horizontally. Sticky actions remain above the keyboard and home indicator, while sheets scroll internally when filters or Dynamic Type exceed available height.

Tabs, elevated center control, account cards, fields, chips, service tiles, table rows, and sheet actions require at least 44-point hit regions. VoiceOver should follow title, primary balance or form context, content rows, sticky action, then navigation. On compact widths, stack paired fields or reduce grid columns before shrinking targets or financial text. Dynamic Type should preserve amount/label alignment and never let the center navigation control cover content. Keep the authored light appearance unless another variant is explicitly approved.

# Anti-generic checklist

- Do not replace lime with default iOS blue or fill every product surface green.
- Do not flatten white financial panels into one generic `Form` or identical card stack.
- Do not remove the elevated circular center control or turn all navigation items into equal default tabs.
- Do not use heavy shadow around every service tile, row, and field.
- Do not hide amount, fee, source, destination, or status hierarchy inside decorative media.
- Do not omit card, merchant, investment, or campaign assets where they identify content.
- Do not invent an illustration package from isolated Face ID and success drawings.
- Do not copy source account structure, service destinations, or transaction flow into the adapted product.

</design-context>
