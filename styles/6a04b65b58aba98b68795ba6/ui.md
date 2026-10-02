<design-context>
---
version: 1
platform: iOS
name: BCC-design-analysis
description: "A dense universal-bank dashboard built from white and very light-grey surfaces, saturated emerald actions, compact account typography, rounded financial groups, promotional product renders, and a fixed five-item bottom bar."
colors:
  canvas: "#F4F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9EBEE"
  accent-primary: "#00AE73"
  accent-secondary: "#202328"
  text-primary: "#17191D"
  text-secondary: "#74787F"
  divider: "#DDE1E5"
  destructive: "#E34455"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 16}
spacing: {screen-horizontal: 16, section-gap: 24, card-padding: 14, control-gap: 10}
rounded: {control: 14, card: 18, sheet: 28, pill: 999}
components:
  primary-action: {fill: "emerald", shape: "rounded control", text: "white semibold"}
  secondary-action: {fill: "white or pale grey", shape: "rounded control", text: "near-black"}
  primary-card: {fill: "white", shape: "rounded financial group", density: "compact"}
  navigation: {fill: "white fixed bottom bar", active: "emerald icon and label", inactive: "grey"}
---

# Overview

BCC is a compact universal-bank interface where saturated emerald organizes actions and selection across white account groups, light-grey widgets, and dense financial directories. Promotional cards and bank-card renders add imagery, but balances, inputs, categories, and bottom navigation remain direct and utilitarian.

# Non-negotiable visual invariants

- White and very light grey dominate; emerald is the single primary action and selected-state color.
- Account, card, payment, and transfer content is compact and grouped into rounded surfaces.
- Balances and financial values outrank explanatory copy.
- Primary banking actions use filled emerald controls or circular green icons.
- Five icon-and-label bottom items persist with emerald active state.
- Promotional imagery stays bounded and never sits behind balances or form values.
- Forms and numeric entry remain focused, sparse, and high contrast.

# Color and surfaces

Use a pale grey canvas beneath white account groups, lists, and cards. Emerald marks CTAs, active tabs, links, positive state, and quick actions; charcoal is reserved for high-commitment contrast. Supporting surfaces and disabled states use cooler greys with fine dividers. Red is destructive/error only. Default blue or green applied as a broad background would break the reference.

# Typography

Use SF Pro Display for major headings and occasional campaign statements; SF Pro Text for balances, account names, categories, and forms. Balances use stronger weight and alignment than supporting terms. Compact secondary copy sits directly beneath its label. Dynamic Type expands rows and groups while preserving value-first order.

# Screen composition

The dashboard begins with compact profile/message controls, then horizontal promotions or quick actions, stacked account groups, and financial widgets above the fixed bottom bar. Transfer and payment screens use single-column category directories. Card detail pairs a card render with balance and action groups. Authorization uses centered fields, PIN dots, and numeric keypad. Use 16-point gutters and tight 10–14-point internal spacing.

# Navigation appearance

The fixed white bottom bar has five icon-and-label items with emerald selected state. Top controls are compact profile, message, search, or back affordances. Segments, accordions, and sheets use soft grey/white rounded surfaces. Appearance only; information architecture is not prescribed.

# Components

Primary actions are emerald filled rounded controls with white semibold labels. Financial groups are white cards with compact rows, values, icons, and optional expand chevrons. Quick actions use green circles. Inputs show clear focus, password visibility, PIN dots, and native numeric keypad. Payment/transfer categories use small line icons, labels, badges, and restrained dividers. Disabled or masked values remain structurally present.

# Imagery and icons

Promotional photos/renders, bank-card art, small 3D financial objects, flags, and currency icons appear in bounded cards. They do not form a stable independent authored illustration system across working screens; the former illustrations.md is therefore omitted. Preserve card aspect ratios and promo crops where imagery is structural. Utility icons are coherent outline symbols.

# States

Observed states include unauthorized home, login, password/PIN entry, populated dashboard, masked balances, card detail, transfer/payment categories, selected segments, badges, and focused fields. Emerald remains action/selection; errors use red; white group geometry and compact hierarchy remain constant.

# iOS adaptation

Extend pale canvas through safe areas, scroll dashboard and directories, and reserve the lower inset for navigation. Keep focused fields above the keyboard and use native permission transitions. All rows, quick actions, segments, and tabs need 44-point targets. VoiceOver reads account/card name, balance/state, then actions. Dynamic Type expands rows without obscuring values or fixed navigation.

# Anti-generic checklist

- Do not replace compact financial groups with oversized generic cards.
- Do not use default blue, unstyled `TabView`, or `Form`.
- Do not place glossy promo imagery behind balances or inputs.
- Do not remove emerald selected/action hierarchy.
- Do not use arbitrary SF Symbols or one radius everywhere.
- Do not add explanatory prose that repeats account, balance, payment, or login context.

</design-context>
