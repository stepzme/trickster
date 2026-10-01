<design-context>
---
version: 1
platform: iOS
name: T-Bank-design-analysis
description: "A dense white-and-mist financial interface where soft modular account surfaces, compact blue utilities, selective yellow commitment actions, dark product headers, and polished branded objects support fast scanning across money and adjacent services."
colors:
  brand-yellow: "#FFDD2D"
  brand-yellow-pressed: "#F1CA00"
  action-blue: "#4C9EEB"
  action-blue-soft: "#EAF4FF"
  accent-cyan: "#3CC6D9"
  accent-purple: "#9B35E8"
  text-primary: "#202124"
  text-secondary: "#777B82"
  text-tertiary: "#A8ABB0"
  canvas: "#F3F4F6"
  surface-primary: "#FFFFFF"
  surface-soft: "#F7F8FA"
  surface-dark: "#3A393C"
  divider: "#E8EAED"
  success: "#28C76F"
  danger: "#EE4654"
  overlay: "#000000"
typography:
  display: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 36}
  amount-large: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 32}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 600, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 500, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 19}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-gap: 12
  card-padding: 16
  control-gap: 8
rounded:
  compact: 10
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {height: 54, fill: "#FFDD2D", foreground: "#202124", radius: 14}
  utility-action: {minHeight: 52, fill: "#F7F8FA", foreground: "#4C9EEB", radius: 14}
  finance-module: {minHeight: 108, fill: "#FFFFFF", foreground: "#202124", radius: 20, padding: 16}
  amount-source: {minHeight: 84, fill: "#3A393C", foreground: "#FFFFFF", radius: 18, padding: 16}
  input-field: {minHeight: 48, fill: "#F3F4F6", foreground: "#202124", radius: 12, padding: 12}
  bottom-navigation: {height: 58, fill: "#FFFFFF", selected: "#4C9EEB", unselected: "#A8ABB0"}
---

# Overview

T-Bank's routine screens are compact operational dashboards rather than oversized marketing cards. A cool mist canvas sits behind white account modules, shortcut rows, and horizontal shelves. Near-black text carries amounts and decisions; blue identifies reversible utilities; yellow appears at the moment of commitment. Dark graphite product headers and occasional saturated campaign imagery create contrast without taking over the ordinary banking frame.

# Non-negotiable visual invariants

- Routine money screens use a cool pale-gray canvas with softly separated white modules, not outlined cards on pure white.
- Yellow is concentrated in the brand capsule and full-width commitment controls; it is not the general selection color.
- Blue belongs to utility icons, text actions, scan controls, and selected navigation while primary financial text remains near-black.
- The main dashboard is intentionally dense: identity, search, stories, two summary modules, a shortcut row, and accounts appear in quick succession.
- Amount-source controls are broad dark rounded fields that remain visually stronger than surrounding form rows.
- Product and campaign imagery occupies authored, reserved areas; it is not replaced by a grid of arbitrary system symbols.
- Success and failure update the affected task explicitly while preserving the account or payment context.

# Color and surfaces

The ordinary canvas is a very light cool gray. White modules carry account summaries, cashback, details, documents, and settings; their separation comes from spacing and a faint diffuse shadow rather than a visible stroke. Search fields and inactive controls use slightly darker neutral fills. Graphite is reserved for a selected funding source, account hero, camera chrome, or another locally dominant product surface.

Brand yellow forms a small high-contrast mass at the top and a larger one only for consequential actions such as transfer, payment, continue, or done. Blue is the operational accent. Cyan and pink may appear together in progress summaries; purple is a concentrated reward or gift accent. Green confirms a completed action or positive amount, and red is local to errors, debt, or notification badges.

# Typography

Use SF Pro as the iOS substitute, with tabular numerals for balances, prices, and signed results. Page or campaign headings sit around 24–32 points; operational amounts around 24–28 points; module headings 17 points; normal text 15 points; compact labels 13 points; navigation and metadata 11 points. Amounts use semibold or bold weight, while supporting account names, dates, and conditions stay regular.

The hierarchy is compact and numeric. Do not enlarge every module title. A transfer screen may center its task title while dashboard sections and account details remain left aligned. Dynamic Type may wrap secondary copy and labels, but the value, source, fee, and final action must remain easy to associate.

# Screen composition

Use approximately 12-point horizontal screen insets, 8–12 points between adjacent controls, and 16–20 points between major groups. The dashboard starts with identity and search, then a horizontally scrolling story rail, two equal summary modules, a four-item utility row, and vertically stacked account modules. This density is deliberate: one viewport should expose both overview and next actions.

Account detail shifts the upper region into a dark, edge-to-edge hero with the balance and card selector, then overlaps it with a white action panel. The remainder returns to modular pale content. Transfer and payment tasks become a single linear column: source, recipient or merchant, amount, optional message or details, then a bottom action. Long profile and account settings screens use mixed full-width and two-column modules rather than repeated identical list rows.

Travel, retail, and educational campaigns may use large photography or object-led cards, horizontal carousels, and stronger color masses. Keep this promotional composition separate from balance entry, recipient choice, fees, and confirmations.

# Navigation appearance

The observed app keeps a compact white bottom bar visible across its broad top-level areas. The selected item is blue; inactive icons and labels are light gray. Reproduce this treatment only for the adapted product's actual peer destinations—do not inherit T-Bank's labels or tab count as product architecture.

Drill-down screens use a plain back control, a short centered title, and at most one trailing action. Self-contained camera or payment tasks use Close. Sheets rise over a dimmed context with large top corners; the task's final action stays inside the sheet or at the bottom of the screen.

# Components

## Dashboard module

A white rounded container with a short heading, one dominant value or state, and only the actions required for that module. Two related summaries may share a row. Avoid equalizing every module's height when its content role differs.

## Shortcut action

A small blue pictogram sits above a compact two-line label. A short row can contain three or four equally spaced actions. Conventional operations may use optically matched system-style symbols; product-specific services require authored marks.

## Funding source

A graphite rounded field contains a subdued source label and a large white amount. When multiple sources are available, paging indicators sit directly beneath or within the control. It must read as the selected source, not as a generic promotional card.

## Primary action

A 54-point yellow rounded rectangle with centered dark text. Disabled actions use a pale neutral or muted yellow state; loading preserves the control footprint. Do not use yellow for cancel, back, or passive filters.

## Input and recipient rows

Search, phone, amount, and message fields use quiet neutral fills and minimal dividers. Recipient and bank choices show recognisable marks, names, and selection together. Numeric entry can hand off to the native keyboard while the surrounding task retains its authored hierarchy.

## Result state

A completed money action may use a centered check and amount over a broad soft green radial field, followed by a receipt or return action. Failure should keep the attempted amount and source available and offer retry or correction.

# Imagery and icons

The interface combines three image roles. Story and service tiles use glossy branded objects or compact scenes on dark or gradient backplates. Travel and shopping use photographic crops with readable text-safe areas. Financial products use isolated card or product renders within reserved regions. These roles are not interchangeable.

Use system symbols only for conventional controls such as back, close, share, disclosure, camera flash, and attachment. Do not substitute branded services, cashback categories, achievements, account products, or campaign concepts with arbitrary SF Symbols. Product art should preserve its observed object scale, crop, and color mass even while a final asset is being prepared.

# States

Observed states include populated and zero-spend summaries, unread reward and chat badges, hidden or changed balances, active keyboards, selected bank and recipient, editable amount, calculator sheet, loading, QR scanning, merchant review, successful payment, long account detail, and signed-out gates inside otherwise browsable content.

Selection uses blue outlines, tinted fields, or clearly selected marks. Loading replaces the relevant value or action without rearranging the task. Success shows the final signed amount and then returns to an updated source balance. Permission or authentication requests may use native system UI; cancellation must return to the pending app context.

# iOS adaptation

Build custom SwiftUI surfaces instead of relying on default `Form` styling. Keep the status area, compact navigation, and bottom commitment controls inside safe areas; allow camera content, dark account heroes, and campaign imagery to extend edge-to-edge where the composition requires it. Reserve enough bottom inset that the final scroll item is never hidden by persistent navigation.

All controls need at least a 44-point hit area. VoiceOver should read account name and amount as one meaningful item, then expose its actions; transfer tasks should read recipient, bank, amount, fee, and commitment in that order. With larger text, wrap shortcut labels, let story and campaign rails scroll, and stack paired modules only when two columns become unreadable. Preserve the large source field and the yellow final action instead of shrinking them.

# Anti-generic checklist

- Do not turn the dashboard into a spacious stack of uniform cards with one action per screen.
- Do not apply yellow to tabs, links, selected recipients, and every interactive control.
- Do not replace the dark amount-source field with a standard white text field or default picker.
- Do not copy the source's five destinations when the adapted product has a different information architecture.
- Do not mix promotional photography into recipient, amount, fee, or confirmation steps.
- Do not remove authored campaign or product art and approve a composition that has lost its intended image mass.

</design-context>
