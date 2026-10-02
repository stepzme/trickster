<design-context>
---
version: 1
platform: iOS
name: VTB-design-analysis
description: "A broad mobile-banking interface with luminous blue-cyan financial fields, stacked white rounded sheets, bold monetary hierarchy, compact utility rows, and a dark-blue floating navigation pill."
colors:
  canvas: "#F4F6FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF3FB"
  accent-primary: "#1677FF"
  accent-secondary: "#163E9A"
  text-primary: "#181A1E"
  text-secondary: "#6E727A"
  divider: "#E0E4EA"
  destructive: "#E24E5B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 750, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#1677FF", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 50}
  secondary-action: {fill: "#EEF3FB", textColor: "#1677FF", cornerRadius: 12, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 16}
  navigation: {fill: "#163E9A", selectedColor: "#FFFFFF", unselectedColor: "#AFC9FF", cornerRadius: 999}
---

# Overview

VTB balances a very broad financial dashboard with large luminous blue fields and layered white sheets. Blurred cyan/blue light, strong balance numerals, rounded account modules, and a dark-blue floating navigation pill distinguish the home surface; transfers and product forms become sparse white transactional screens.

# Non-negotiable visual invariants

- Blue/cyan gradient or blurred light forms a large background mass on major product and account surfaces.
- White financial modules layer over the blue field with generous rounding and little visible border.
- Balances and primary amounts use the largest, strongest numeric hierarchy.
- Bright blue remains the primary action, link, and selected-control color.
- The home navigation appears as a dark-blue rounded floating pill, not a default white tab bar.
- Product/action lists use compact black line icons, short labels, and pale grouping surfaces.
- Transactional forms remain sparse and white, with one dominant blue commitment action.

# Color and surfaces

Pale cool gray is the utility canvas. Blue and cyan gradients create major account/product backdrops; white cards and sheets carry balances, products, actions, and forms. Bright blue identifies primary action and selection, while dark navy anchors the floating navigation. Near-black carries monetary values and titles, gray supports labels and conditions, green confirms success, and red remains destructive/error. Random violet/magenta accents or default grouped-gray forms would weaken the blue financial hierarchy.

# Typography

Use SF Pro. Monetary totals are large and bold with clear grouping; page titles are bold but subordinate to the key amount; card labels, rates, and transaction metadata are compact. Keep amount, account/product name, rate/status, and action visibly distinct. At Dynamic Type sizes, allow white modules and list rows to grow, preserve tabular numeric clarity, and stack secondary facts beneath the amount instead of shrinking them.

# Screen composition

The home top safe area merges into a luminous blue header holding identity, balances, and contextual controls. Large white account/product sheets overlap or follow the field, then stack cards, action tiles, and offer modules vertically. Product/card details retain a colored hero above grouped white sections. Transfers, top-up, savings opening, and branch/map screens use full-height white forms/lists or maps with floating controls. Typical side insets are about 16 points; the bottom navigation floats above the home indicator.

Visible archetypes include login; financial home; all-products/account list; card detail; top-up/transfer forms; cashback/deals; branch/ATM map; savings product opening; and educational/product promotion.

# Navigation appearance

Home uses a broad dark-blue rounded pill with compact icons/labels and bright selected emphasis. Other screens use clean white navigation bars with ordinary-scale back, close, search, or utility controls tinted blue/dark. Sheets use white surfaces and large top corners over a dark scrim. Maps use circular floating buttons. Native behavior is acceptable, but default white `TabView` and blue-only ungrouped forms are not.

# Components

Primary actions are full-width bright-blue rounded rectangles with white semibold labels. Secondary controls use pale-blue fills or blue text. Account cards combine product identity, balance, status/rate, and concise actions. Action tiles are small rounded white/pale modules with black line icons. Transaction rows pair icon, merchant/label, amount, and muted metadata. Forms use sparse labeled fields, selectors, and a clear bottom action. Segments, radios, and toggles use blue selection. Disabled states retain geometry and lower contrast.

# Imagery and icons

Cards, vaults, coins, percent symbols, gifts, and money/product renders appear as campaign or financial-product assets alongside functional cards and maps. They are compositionally important in specific promo modules, but the inspected set does not establish one independently repeatable app-wide illustration grammar. Use approved product imagery for those modules; do not infer a general illustration language. Functional icons are compact black/blue line symbols.

# States

Observed states include login, populated dashboard, selected cards/accounts, transfer/top-up input, product opening, cashback/deal cards, map, and product education. Selection remains blue, successful confirmation green, and errors/destructive actions red. White sheet geometry and monetary hierarchy persist across states. System permission or security prompts may remain native during transition.

# iOS adaptation

Extend blue account fields through the top safe area and keep the floating navigation clear of the home indicator. Use vertical scrolling for dashboards/product detail, keyboard-aware forms, and native maps with styled app controls. Maintain 44-point targets for small financial actions, tabs, map controls, and selectors. VoiceOver should read product/account name → amount → status/rate → action. At compact widths, stack action tiles and secondary facts before reducing the key amount. Dynamic Type expands cards/rows. Preserve accessible contrast over gradients and provide opaque fallbacks for blur.

# Anti-generic checklist

- Do not replace the luminous blue field with a plain white card stack.
- Do not use a default white `TabView` instead of the dark-blue floating pill.
- Do not flatten monetary values, labels, rates, and actions into one text level.
- Do not use default `Form` sections or arbitrary SF Symbols.
- Do not invent a generalized 3D illustration system from product-specific promo assets.
- Do not place promotional color behind transaction amounts without clear contrast.
- Do not apply one radius to cards, controls, sheets, and navigation.

</design-context>
