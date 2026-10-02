<design-context>
---
version: 1
platform: iOS
name: Asia-Online-design-analysis
description: "A campaign-led grocery loyalty interface with large forest-green fields, bright yellow commitment actions, layered white utility panels, prominent QR/reward cards, and saturated promotional food imagery."
colors:
  canvas: "#F5F6F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEFEC"
  accent-primary: "#08753C"
  accent-secondary: "#FFE000"
  text-primary: "#151817"
  text-secondary: "#747A76"
  divider: "#E0E3E1"
  destructive: "#D94B4B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 750, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FFE000", textColor: "#151817", cornerRadius: 12, minHeight: 50}
  secondary-action: {fill: "#08753C", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 48}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#08753C", unselectedColor: "#747A76"}
---

# Overview

Asia Online combines practical loyalty/payment/profile surfaces with large branded campaign scenes. Dark forest green and brighter green gradients dominate entry, hero, subscription, and profile banners; yellow owns high-priority commitment actions. Rounded white panels carrying QR codes, balances, benefit lists, and forms overlap or follow the saturated imagery.

# Non-negotiable visual invariants

- Forest green or green gradients form large top-level color masses, not merely small accents.
- Bright yellow is reserved for decisive subscription, confirmation, or card actions and uses dark text.
- White rounded panels visibly layer over or directly follow saturated branded hero imagery.
- Loyalty identity is anchored by a large QR/card/balance module rather than a generic metric tile.
- Campaign imagery remains large, saturated, and food/retail specific.
- Hero/promo typography is large and white on green; utility forms return to compact dark text on white.
- Bottom navigation is a five-item white bar with a strong green selected state.

# Color and surfaces

Forest green is the dominant brand field; brighter leaf greens and gradients create campaign depth. Yellow is the contrasting action color. White surfaces hold QR, benefit, payment, store, language, and profile information, while pale gray separates rows and disabled controls. Near-black text is used on white/yellow, white text on green, and muted gray for helper information. Red remains local to destructive/error states. Replacing the green/yellow relationship with default blue or flattening the hero into white cards would break the reference.

# Typography

Use SF Pro. Campaign and subscription scenes use heavy, large white headlines; utility screens use bold section titles, medium labels, and regular body text. QR/balance or benefit numbers receive local emphasis. Keep the contrast between expressive hero display and straightforward forms; avoid decorative copy beyond the product message. At Dynamic Type sizes, allow hero copy and benefit rows to wrap, preserve the QR/card module, and keep the yellow primary action visually dominant.

# Screen composition

The top safe area often continues a green photographic or gradient hero. Entry/home/profile screens use a full-width campaign area followed by rounded white panels, sometimes visually overlapping the lower edge of the hero. Home modules include a prominent loyalty/QR card, promotional tiles, and compact utility sections. Subscription screens combine green imagery, benefit lists, tariff/payment rows, and a large yellow action. Profile screens use branded banners above plain white list cells. Typical content insets are about 16 points, with campaign art occupying the upper third or more.

Visible archetypes include branded first launch/login; campaign-led home; subscription/paywall and payment sheet; loyalty/profile with QR and banners; language/settings rows; and modal partner/payment information.

# Navigation appearance

Bottom navigation is a white five-item bar with compact icons/labels and green selected emphasis. Top bars either merge into the green hero or become simple white utility bars with ordinary-scale back/close controls. Payment and partner details use white bottom sheets with broad rounded top corners and a dim scrim. Native permission alerts may remain system-native, while app-owned navigation keeps the green/yellow identity.

# Components

Primary actions are wide yellow rounded rectangles with dark semibold labels; secondary actions use green fill with white content. Loyalty cards combine QR, identity, and reward/balance information inside a large white rounded panel. Promotional cards use saturated green or photographic fields with short copy. Subscription benefits use clean icon/text rows; tariff and payment options use white list rows, radios, and light dividers. Warning/info banners use restrained tints. Profile/settings rows are plain and spacious rather than shadowed cards. Disabled states keep geometry and reduce contrast.

# Imagery and icons

Sunflower/grocery scenes, food promotions, partner logos, and campaign composites are compositionally important and cannot be omitted. They are campaign/content assets: the inspected screens show consistent art direction but not an independently reusable illustration grammar separate from each promotion. QR and loyalty graphics are functional visual content. Navigation icons remain simple and green/gray; literal product imagery must not be replaced with abstract symbols.

# States

Observed states include first-launch/permission, populated loyalty/QR, subscription offers, selected tariffs/payment methods, warning/info banners, profile lists, language radio selection, and modal partner information. Yellow remains the commitment color, green remains brand/status, and white remains the utility surface across states. Errors/destructive feedback use local red without recoloring the campaign system.

# iOS adaptation

Extend the green hero beneath the top safe area and keep the white tab bar above the home indicator. Use vertical scrolling for hero-plus-panel compositions and keyboard-aware bottom sheets for payment/login. Maintain 44-point targets for tabs, QR actions, radios, tariff rows, and close controls. VoiceOver order should read hero title only when informative, then QR/card identity, balance/benefits, and actions; decorative campaign imagery can be hidden. At compact widths, stack promotional cards and keep the QR readable. Dynamic Type grows white panels and benefit rows. Preserve light utility surfaces while allowing dark-green full-bleed brand regions.

# Anti-generic checklist

- Do not reduce forest green to a small accent on an all-white app.
- Do not replace yellow commitment actions with default blue.
- Do not omit or miniaturize the QR/loyalty card module.
- Do not turn the hero and campaign scenes into generic gradient placeholders.
- Do not use an unstyled `TabView`, `Form`, or default radio list.
- Do not claim campaign composites as a reusable standalone illustration system.
- Do not add mood copy where the loyalty, offer, or action is already clear.

</design-context>
