<design-context>
---
version: 1
platform: iOS
name: vkusno-i-tochka-design-analysis
description: "A high-energy food ordering language that combines a persistent deep-green brand frame, orange conversion controls, bold compact hierarchy, clean food cutouts, and a restrained family of flat service illustrations."
colors:
  brand-green: "#205235"
  brand-green-deep: "#153D29"
  action-orange: "#F47A00"
  action-orange-pressed: "#D96800"
  canvas: "#FFFFFF"
  surface-subtle: "#F5F5F3"
  surface-muted: "#ECEDEA"
  ink: "#181A18"
  ink-secondary: "#696D69"
  ink-tertiary: "#A9ACA8"
  divider: "#E3E5E1"
  on-brand: "#FFFFFF"
  positive: "#2E7A4D"
  unavailable: "#D7D9D5"
  overlay: "#000000"
typography:
  display: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 800, lineHeight: 32, letterSpacing: -0.4}
  page-title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27, letterSpacing: -0.2}
  section-title: {fontFamily: "SF Pro Display", fontSize: 19, fontWeight: 700, lineHeight: 24, letterSpacing: -0.1}
  product-title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0}
  price: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 700, lineHeight: 19, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13, letterSpacing: 0}
  action-label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18, letterSpacing: 0}
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  section: 32
rounded:
  control: 4
  card: 6
  sheet: 16
  modal: 12
  pill: 999
components:
  primary-action: {height: 48, fill: "{colors.action-orange}", foreground: "{colors.ink}", radius: "{rounded.control}", typography: "{typography.action-label}"}
  brand-header: {height: 74, fill: "{colors.brand-green}", foreground: "{colors.on-brand}", radius: 0}
  product-tile: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: "{rounded.card}", padding: 8, typography: "{typography.product-title}"}
  promotion-card: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: "{rounded.card}", padding: 12, typography: "{typography.body}"}
  bottom-sheet: {fill: "{colors.canvas}", foreground: "{colors.ink}", radius: "{rounded.sheet}", padding: 16, typography: "{typography.body}"}
---

# Overview

Vkusno I tochka uses a stable deep-green brand frame around fast-moving white commerce content. Orange marks conversion, selection, and promotional value; bold black headings organize dense home, promotion, menu, and order information. Clean food cutouts and a small authored illustration family provide identity without turning every surface into campaign art. The source's loyalty program, restaurant modes, menu taxonomy, and five destinations are product architecture and should be adapted rather than copied.

# Non-negotiable visual invariants

- A deep-green brand region remains visible across the main browsing and ordering surfaces.
- Orange is concentrated in add, select, confirm, reward, and promotional-value cues.
- Menu discovery uses clean food cutouts with product names, prices, and immediate add actions.
- Section headings are bold and compact, creating a strong hierarchy within information-dense screens.
- Commerce content sits on white or very pale surfaces with limited shadow and modest corner rounding.
- Photography, campaign creative, and flat service illustration keep distinct roles instead of being blended into one generic image style.

# Color and surfaces

Deep forest green carries the brand header and selected identity moments. White is the primary reading and commerce canvas. Pale warm gray separates fulfillment context, utility controls, grouped choices, disabled states, and temporary notices. Orange is the action and promotional accent; use it for add controls, confirmation, selected values, reward counts, and offer emphasis, not as a page-wide background by default.

Cards use modest rounding and very light separation. Some promotional modules use a thin orange leading accent, while product tiles remain mostly white. Sheets and dialogs appear over a scrim and preserve the same white, green, and orange hierarchy. Avoid glossy gradients, glass effects, and heavy elevation.

# Typography

Use a sturdy sans serif with strong Cyrillic support. Headings are bold, compact, and direct; product names use medium weight; prices and key order values are bold; instructions and terms remain regular. Labels stay sentence case, and numeric offers should scan quickly.

The portable hierarchy is 28/32 for rare campaign or onboarding display text, 22/27 for page titles, 19/24 for sections, 15/19 for product names and prices, 14/19 for body content, and 10/13 for secondary conditions. Under Dynamic Type, preserve product identity, price, availability, and action meaning before secondary campaign copy.

# Screen composition

The main browsing frame places brand identity first, then task context, then dense content. Home stacks greeting, campaign rail, loyalty summary, promotion groups, referral content, and mobile-order entry points. Menu adds fulfillment and location context before shortcuts, categories, and a two-column product grid. These roles are transferable; the literal loyalty modules, restaurant options, and menu groups are not.

Use 16-point screen insets for reading content, 8–12 points between related modules, and 24–32 points between sections. Food photography can occupy most of a product tile. Promotion lists use a repeated text-and-image rhythm, while product customization and checkout switch to a single-column task flow.

Persistent chrome can remain visually anchored while content scrolls. Bottom sheets handle product detail and customization; dialogs confirm restaurant context or explain a new choice. Large empty areas are appropriate during onboarding, verification, and loading, but not as filler in menu or order surfaces.

# Navigation appearance

The observed product uses five persistent destinations for Home, Promotions, Menu, Map, and More. Treat those destinations as Vkusno I tochka's information architecture, not as a required five-item template. The adapted product should retain only its real top-level destinations.

Primary browsing keeps the brand header present. Focused tasks use back or close actions and a concise task title. Product details and order details can open as dismissible sheets; checkout and payment can become focused pages. Active destination and selected context are distinct from orange conversion actions.

# Components

Primary actions are saturated orange controls with dark labels. Compact orange add controls sit with product prices; quantity replaces the add action after selection. Disabled actions use a pale fill and low-contrast label while preserving their footprint.

Product tiles pair a generous food cutout with the name, price, optional value badge, and add action. Promotion cards combine title, short benefit, validity information, and one bounded image region; their vertical accent helps repeated offers scan as a list. Campaign banners may use photography and larger typography, but they do not redefine ordinary card structure.

Fulfillment selectors, location summaries, category tabs, and reward shortcuts stay compact and secondary to food content. Customization uses selectable rows with ingredient or option imagery, a clear current choice, and a persistent confirmation action. Cart rows expose the selected configuration, quantity, fees, recommendations, and minimum-order feedback.

# Imagery and icons

Food imagery uses clean cutouts or assembled meal compositions on white, with consistent lighting and enough margin to keep labels readable. Campaign banners may use real people, branded packaging, offer graphics, and photography. Those one-off creatives are content assets, not the illustration system.

Authored flat illustrations are reserved for onboarding benefits, service entry points, and order-status explanation. They use the separate rules in `illustrations.md`. Interface icons are simple line or fill symbols for ordinary controls and destinations; do not use the illustration style to redraw every utility icon.

When final food or campaign assets are unavailable, preserve the observed crop, size, and color mass with temporary image assets. Do not approve an image-led menu or promotion screen with blank product regions.

# States

Selected mode, category, option, and destination states remain explicit. A product can be available, selected, customized, added, quantity-adjusted, or unavailable; unavailable actions remain visible but inactive. Restaurant and address eligibility are resolved before order commitment, and explanatory feedback stays attached to that context.

Cart and checkout expose minimum-order requirements, fulfillment choice, payment loading, and confirmation. Active orders appear in browsing context and open into a status detail with an acknowledgement action. Verification supports code entry, resend availability, and retry without discarding the entered phone number.

# iOS adaptation

Keep tap targets at least 44 points even when visible add, tab, or close controls are smaller. Use custom containers where default SwiftUI lists or forms would introduce mismatched insets, tint, or rounded grouping. Respect safe areas for brand chrome, navigation, and persistent actions; make the final content reachable above them.

VoiceOver should combine product name, configuration, price, availability, quantity, and add state into coherent phrases. Announce fulfillment mode, selected restaurant or address, minimum-order shortfall, active order status, and verification errors. Dynamic Type may stack paired product or shortcut modules when necessary, while preserving food imagery and the action associated with each item.

# Anti-generic checklist

- Do not replace the green brand frame with a generic white navigation bar or an all-orange interface.
- Do not turn every product, promotion, and utility into the same large rounded card.
- Do not replace food cutouts with drawings or replace service illustrations with unrelated SF Symbols.
- Do not merge campaign photography, food photography, and authored service illustration into one visual treatment.
- Do not copy the source's five destinations, loyalty modules, or restaurant modes into a product that does not need them.
- Do not hide availability, fulfillment context, minimum order, configuration, or order status.

</design-context>
