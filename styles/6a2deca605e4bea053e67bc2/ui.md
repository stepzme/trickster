<design-context>
---
version: 1
platform: iOS
name: DailyFin-design-analysis
description: "A light iOS banking system with vivid blue controls, product-colored financial cards, bold amounts, flat white operational surfaces, compact four-item navigation, and rich but bounded banking imagery."
colors:
  canvas: "#F4F6F9"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAF2FB"
  accent-primary: "#2589EF"
  accent-secondary: "#FFAD16"
  text-primary: "#17181B"
  text-secondary: "#737984"
  divider: "#E0E4E9"
  destructive: "#D94A5B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 26
  pill: 999
components:
  financial-product-card: {}
  quick-action-strip: {}
  blue-primary-action: {}
  grouped-transaction-row: {}
  four-item-tab-bar: {}
---

# Overview

DailyFin is a bright, information-dense banking interface that balances strong product imagery with restrained operational surfaces. White and pale blue-gray dominate most screens, vivid blue identifies interactive controls, and financial products introduce localized purple, gold, black, or blue color masses. Large amounts and left-aligned page titles establish hierarchy; card art, service imagery, maps, and banners remain bounded within their modules instead of becoming a decorative application background.

# Non-negotiable visual invariants

- White or very pale blue-gray occupies most operational screens; saturated color is concentrated in actions, product cards, and selected states.
- Large left-aligned page titles and bold financial values clearly outrank section labels and gray metadata.
- Product cards retain realistic card proportions and their own purple, gold, black, or blue visual identity.
- Primary actions and active navigation use vivid blue; the small circular add action uses amber as a separate utility cue.
- Quick actions form compact, evenly divided strips or tiles directly associated with the current financial product.
- Transaction and settings content remains flat and row-based with subtle dividers rather than becoming a stack of floating cards.
- Top-level navigation is a compact white four-item bar with blue active and gray inactive states.
- Bottom sheets use a dark scrim, broad white surface, pronounced top corners, and a visible close affordance.

# Color and surfaces

The default canvas is cool pale gray, while primary operational surfaces, lists, and sheets are white. A pale blue secondary surface groups selections, service launchers, and quiet empty areas. `accent-primary` is a bright banking blue for buttons, active tabs, icons, toggles, links, and segmented selections. `accent-secondary` is amber and should remain limited to the circular add action and attention-worthy utility moments. Primary text is nearly black; secondary information is neutral gray; separators are light and thin. Green communicates incoming money or success, while red carries debit, failure, or destructive meaning with an explicit sign or label.

First-launch screens may use a full cyan-to-deep-blue gradient with a white lotus mark. Product cards introduce their own saturated atmosphere, but that color does not spread through transaction rows or forms. The observed dark appearance uses deep navy surfaces, white text, and blue controls rather than simple color inversion. Default system blue applied indiscriminately, persistent card-color gradients, or heavy gray grouped panels would weaken the reference.

# Typography

Use SF Pro Display for hero amounts and large page titles, and SF Pro Text for controls, lists, and metadata. Main page titles are bold, left aligned, and visually around 28–32 points. Centered detail titles are smaller and medium weight. Financial amounts use bold tabular numerals, with currency kept visually attached. Section headings are semibold around 18 points. Card suffixes, dates, addresses, timestamps, and descriptions are smaller gray text.

Dynamic Type must preserve the gap between amount/title, section heading, body, and caption. Let metadata wrap and rows grow vertically; keep trailing monetary values aligned where space permits and use a controlled minimum scale only for long critical amounts. Do not compress legal text into unreadable captions or add promotional prose to sparse screens.

# Screen composition

Typical screens use 16-point horizontal gutters and a full-height vertical scroll view. Top-level dashboards start with a custom identity header, a broad product card or account summary, an adjacent add control, and compact quick actions before secondary services and activity. Detail screens use a back control, centered title, optional trailing actions, then full-width content. Forms and settings use a simpler white vertical stack. The bottom tab bar and bottom fixed actions respect the home-indicator safe area.

Observed archetypes:

- **Financial dashboard:** compact identity header, horizontally pageable product card, quick-action strip, service tiles, recent activity, and fixed four-item navigation.
- **Product collection:** centered navigation title, segmented account type or carousel, large realistic card panel, and product-specific details below.
- **Transfer or payment form:** grouped white fields, explicit source/destination and amount hierarchy, with blue enabled or pale disabled action.
- **History:** large left-aligned title, compact filters, transactions grouped by date, and aligned trailing values.
- **Profile or settings:** avatar or centered title followed by flat list rows, toggles, selectors, and light separators.
- **Location:** large title, segmented map/list/metro control, then full-width map or address rows.
- **Result:** centered receipt/check panel with concise financial details and a single clear action.

# Navigation appearance

Top-level screens use a low white four-item tab bar with icon-and-label pairs; blue denotes the active item and gray the inactive items. Custom dashboard headers may show an avatar/name cluster on the left and small QR or notification controls on the right. Detail screens use a simple left back arrow, centered title, and only necessary trailing icons. Segmented controls use blue fill, blue text, or an underline according to local density. Sheets rise over a dimmed viewport with a broad white rounded top and close control. These rules define appearance only; destinations come from the product specification.

# Components

- **Financial product card:** realistic card aspect ratio, product-specific color or artwork, large balance, concise account metadata, 18-point rounding, and minimal external shadow.
- **Quick-action strip:** evenly divided white actions with blue flat icons, short labels, subtle separators, and at least 44-point tap areas.
- **Blue primary action:** full-width or near-full-width saturated blue control, white semibold label, 50–54 point height, and moderate rounding; disabled state becomes pale blue-gray without changing geometry.
- **Amber add control:** compact circular button with amber fill and dark or white plus, visually adjacent to product management rather than used as a general CTA.
- **Transaction row:** flat white row with leading merchant/category icon, dark label, gray metadata, and signed trailing amount; date headers separate groups.
- **Segmented control:** compact rounded container with unmistakable blue selection and quiet unselected labels.
- **Settings row:** leading blue or neutral icon, primary label, optional gray value, trailing chevron or toggle, and a thin divider.
- **Bottom sheet:** large white surface with dark scrim, close control, and stacked full-width options.

# Imagery and icons

DailyFin uses vivid imagery without a standalone illustration system. Realistic bank-card art, payment and service banners, fuel/ticket/insurance tiles, flags, map tiles, and the white lotus mark supply context. Keep bank-card artwork aspect-fit and contain merchant/service media within bounded tiles. Functional icons are simple blue line/filled hybrids with consistent optical weight. Small exchange-rate arrows may use green or red, but they do not form a chart language.

Compositionally important product-card art, maps, and banner imagery cannot be replaced by generic symbols or omitted while assets are pending. The lotus, logos, decorative gradients, photos, and card art are not evidence of a reusable authored illustration system, so no separate `illustrations.md` is warranted.

# States

Light and observed dark appearances preserve the same hierarchy, component geometry, and blue interactive signal. Empty or add-card states retain pale surfaces and a clear blue/amber action rather than introducing a generic empty card. Transfer forms show enabled and disabled actions through saturation and contrast. Completed transfers use a focused receipt/check panel plus explicit status copy; pending, incoming, outgoing, and rejected transactions combine sign, text, and semantic color. Selected history filters, map/list segments, product pages, toggles, and appearance choices remain visually explicit. Bottom sheets keep their white surface and dim scrim in all sampled contexts.

# iOS adaptation

Use safe-area-aware `ScrollView` layouts and `safeAreaInset(edge: .bottom)` for tabs and fixed actions. Preserve 16-point compact-width gutters and realistic product-card proportions; horizontal product carousels may page while lists scroll vertically. Keep map controls and floating actions clear of system gestures. Native sheets, keyboards, and permission transitions may provide behavior, but app-owned surfaces must retain the observed colors and geometry.

VoiceOver order follows header, financial summary, associated actions, secondary services, then history. Combine each transaction row and announce signed amount, currency, and state. All controls require at least 44-point targets. Dynamic Type may stack quick actions or increase row height rather than clipping labels. Implement the documented deep-navy dark appearance when required; do not automatically invert card art, banners, maps, or semantic colors.

# Anti-generic checklist

- Do not reduce the dashboard to uniform white cards on a gray background.
- Do not replace product-specific card art with a generic rounded rectangle or credit-card SF Symbol.
- Do not use an unstyled `TabView`, `Form`, segmented picker, or default grouped list.
- Do not spread product-card gradients through forms, history, or settings.
- Do not replace the amber add cue with another blue button.
- Do not use arbitrary multicolor symbols where the consistent blue icon family is expected.
- Do not flatten hero amounts, page titles, section headings, and metadata into one text scale.
- Do not add explanatory or mood copy that repeats visible balances, states, or actions.
</design-context>
