<design-context>
---
version: 1
platform: iOS
name: Telcell-Wallet-design-analysis
description: "A light financial dashboard of white and pale-gray cards, coral selection and actions, cyan brand support, compact service grids, right-aligned transaction amounts, persistent four-item navigation, and heterogeneous card and promotional imagery."
colors:
  canvas: "#FAFAFC"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F4F6"
  accent-primary: "#FF6656"
  accent-secondary: "#25C7D9"
  text-primary: "#25272B"
  text-secondary: "#777B81"
  divider: "#E5E6E9"
  destructive: "#E95A61"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 28}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FF6656", text: "#FFFFFF", radius: 999, height: 50}
  balance-card: {fill: "#FFFFFF", radius: 18, value: "large dark numeral"}
  transaction-row: {fill: "#FFFFFF", amount: "right aligned", status: "small green label"}
  navigation: {fill: "#FFFFFF", selected: "#FF6656", unselected: "#777B81"}
---

# Overview

Telcell Wallet is a light, modular finance utility rather than a single-purpose banking screen. White and near-white occupy most of the viewport; pale-gray grouping, rounded cards, compact service icons, and thin dividers structure dense financial content. Coral consistently marks primary actions and selection, while cyan appears mainly in branding and selected card artwork. The home surface combines balances, promo tiles, service grids, and transaction snippets; emptier states collapse to a centered icon or spinner with generous whitespace.

# Non-negotiable visual invariants

- Ordinary surfaces remain white or near-white with pale-gray grouping and low-shadow rounded cards.
- Coral is the primary action, active-tab, underline, and selected-control color.
- Cyan supports branding and card imagery but does not replace coral as the main interaction signal.
- Major sections use a persistent four-item bottom bar with coral selected and gray inactive states.
- Dashboard sections pair a left-aligned title with a small right-aligned secondary action when present.
- Transaction rows place the amount or value on the right and keep status smaller, often green, beneath or nearby.
- Forms finish with a wide coral pill, while dense dashboards rely on cards, grids, rails, and lists.
- Empty and loading states are sparse and centered, with a compact coral icon or spinner rather than decorative scenes.

# Color and surfaces

The canvas is an almost-white cool neutral, with pure white used for balance modules, lists, banking cards, QR surfaces, forms, and navigation. Pale gray separates service groups, input rows, and inactive cards. Coral-orange is the dominant interactive color for buttons, active navigation, selected tabs, underlines, favorites, and progress emphasis. Cyan belongs to the brand mark, some balance actions, and financial card artwork. Green communicates successful or completed status; yellow, violet, and blue are confined to product or promotional content.

Primary text is dark gray rather than pure black, supporting labels are medium gray, and dividers are fine and pale. Destructive actions use a red distinct enough from the warmer coral brand color. Default iOS blue, dark grouped backgrounds, heavy shadows, or expanding multicolor gradients beyond their local promo cards would break the observed hierarchy.

# Typography

Typography is a neutral system sans with moderate scale contrast and comparatively regular weights. Page titles sit around 20–22 points; balance values and key financial amounts may be larger; section labels and card titles use 14–18-point medium or semibold text; captions, limits, dates, and status labels use 11–12-point gray text. Forms and lists are left aligned, while amount columns align to the trailing edge. Promotional artwork may contain its own lettering, but operational copy stays restrained.

Use SF Pro with an Armenian-capable fallback where required. Use tabular numerals for balances, transaction amounts, fees, dates, and reward values. Under Dynamic Type, keep amount and currency together, move secondary metadata to another line, and expand rows vertically before reducing the contrast between title, value, label, and caption.

# Screen composition

Main surfaces start with a compact safe-area row containing identity, notification, search, or a back-title-action combination. The middle is a vertical scroll of balance cards, horizontal promo or financial-card rails, compact service grids, section headers, and transaction lists. A white four-item tab bar anchors the bottom. Forms replace the dashboard with one vertical column of pale input rows and place a wide coral action above the home indicator. Typical horizontal insets are 12–16 points, with 10–14 points inside cards and 20–24 points between major modules.

Observed archetypes include a populated wallet dashboard; service-category grid; transfer or purchase form with validation; transport or product list; map-backed utility card; favorites and filter bottom sheets; populated or loading history; notification list and empty state; reward or market product rails; QR display and input surfaces; banking dashboard with card carousel and accounts; digital-card design selection; and long profile or settings lists. Rich imagery stays within cards and rails, while QR, forms, transaction lists, and empty states remain visually flat.

# Navigation appearance

The bottom bar is a persistent white band with four evenly spaced icon-and-label items; coral marks the active item and gray marks the rest. Secondary categories use compact horizontal tabs with a coral underline, segmented pills, or short filter chips. Full-page utility screens use a restrained back control, centered or left-aligned title, and occasional compact trailing action. Bottom sheets rise as white rounded surfaces over a dim scrim and may include selectable rows, filters, or confirmation actions.

# Components

Balance cards are white rounded modules with a large dark numeric value, smaller unit or account label, and compact coral or cyan actions. Service tiles are small icon-led cells arranged in a regular grid with short labels and limited decoration. Promo, partner, product, ticket, and bank-card tiles may use their own contained artwork, but share rounded framing and clear margins.

Transaction rows use a small leading service mark, a primary label and date or status detail, and a right-aligned amount. Selected or completed status is concise and often green. Forms use pale rounded fields, direct labels, dropdown or chevron rows, validation messaging near the affected field, and a wide coral pill action. QR cards preserve a square code and ample white quiet zone. Selected tabs, favorites, cards, or payment methods use coral fill, underline, outline, or check rather than a generic blue state.

# Imagery and icons

Imagery is heterogeneous and tied to specific financial products: bank-card designs, promotional tiles, partner or product thumbnails, ticket visuals, service pictograms, QR artifacts, and occasional map content. Preserve each asset's contained card placement and legible crop, but do not extrapolate them into a single authored illustration style. Card designs should remain wide and inspectable; QR codes require clear square boundaries and quiet space; maps must retain relevant location context.

Interface icons are compact and mostly simple, with coral indicating selection and cyan appearing selectively in branded assets. Small vector-like empty-state or feature images are isolated treatments, not evidence of a reusable character or scene family. Do not replace important card, product, QR, or map content with arbitrary SF Symbols.

# States

Observed states include language and login onboarding, populated home dashboard, promo carousel, service selection, transfer validation error, centered request loader, transport-ticket options, active power-bank state with map, favorites sheet, populated and loading history, populated and empty notifications, selected favorite products, empty market favorites, QR display or input, banking cards and accounts, filter sheet, digital-card design selection, questionnaire, empty transactions, and profile or logout rows. Coral remains the stable selected/action cue; green remains the stable successful-status cue.

# iOS adaptation

Keep the top utility row and four-item navigation within current iPhone safe areas. Use vertical scrolling for dashboards, lists, profile, and forms; horizontal scrolling is appropriate for observed card and promo rails. Keep the primary form action above the keyboard and home indicator. Native keyboards, sheets, alerts, map views, and QR or camera permission transitions should retain platform behavior while surrounding controls use the documented coral, radii, and spacing.

Maintain 44-point targets for service tiles, tabs, QR controls, list rows, favorites, filters, fields, and navigation. VoiceOver should read section title, balance or product label, value and currency, status, then action in visual order. On compact widths, reduce service-grid columns or wrap labels before shrinking tap targets; stack transaction metadata while preserving right-aligned amount priority. Dynamic Type should grow cards and lists vertically. If dark appearance is required without sampled evidence, preserve coral selection, cyan brand distinction, semantic green, and QR contrast instead of mechanically inverting every product asset.

# Anti-generic checklist

- Do not replace the modular dashboard with one undifferentiated `Form` or generic white-card stack.
- Do not use default blue tint instead of coral for selected tabs, buttons, and active controls.
- Do not style every financial product with the same gradient or imagery treatment.
- Do not hide currency, unit, fee, limit, status, or right-aligned transaction amount hierarchy.
- Do not use an unstyled `TabView`; the coral selected state and four-item white bar are visual invariants.
- Do not decorate QR and transaction surfaces with unrelated promotional imagery.
- Do not claim a shared illustration family from payment cards, partner thumbnails, service icons, maps, and one-off empty-state assets.
- Do not replace required card, QR, product, or map imagery with emoji or arbitrary SF Symbols.

</design-context>
