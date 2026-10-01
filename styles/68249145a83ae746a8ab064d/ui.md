<design-context>
---
version: 1
platform: iOS
name: dodo-pizza-design-analysis
description: "A food-first ordering language that pairs isolated product photography and warm campaign art with white menu space, vivid orange actions, compact category controls, and cool-gray transactional sheets."
colors:
  brand-orange: "#FF6900"
  brand-orange-deep: "#E85D00"
  brand-orange-soft: "#FFF0E6"
  promo-pink: "#F45AA5"
  reward-violet: "#7056E8"
  payment-indigo: "#241054"
  rating-yellow: "#FFD84D"
  ink: "#141414"
  ink-secondary: "#71747A"
  ink-tertiary: "#A8ACB3"
  canvas: "#FFFFFF"
  workspace: "#F1F2F5"
  surface: "#FFFFFF"
  divider: "#E8E9EC"
  destructive: "#E34C4C"
typography:
  campaign: {fontFamily: "SF Pro Rounded", fontSize: 32, fontWeight: 800, lineHeight: 36, letterSpacing: -0.5}
  page-title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33, letterSpacing: -0.3}
  section-title: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: -0.1}
  product-title: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 700, lineHeight: 21, letterSpacing: -0.1}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19, letterSpacing: 0}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17, letterSpacing: 0}
  metadata: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16, letterSpacing: 0}
  price: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 700, lineHeight: 18, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19, letterSpacing: 0}
spacing:
  unit: 4
  screen-horizontal: 12
  compact-gap: 8
  content-gap: 12
  section-gap: 24
  sheet-padding: 16
rounded:
  small: 8
  control: 12
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {height: 50, fill: "#FF6900", foreground: "#FFFFFF", radius: 999}
  secondary-action: {height: 44, fill: "#F1F2F5", foreground: "#141414", radius: 999}
  menu-feature: {fill: "#F1F2F5", foreground: "#141414", imageTreatment: "hero-contained", radius: 18}
  product-row: {fill: "#FFFFFF", foreground: "#141414", imageTreatment: "isolated-object", radius: 0}
  order-sheet: {fill: "#FFFFFF", foreground: "#141414", radius: 24, padding: 16}
  choice-chip: {height: 38, fill: "#FFFFFF", selectedStroke: "#FF6900", radius: 12}
---

# Overview

Dodo Pizza uses food as the primary interface material. Menu screens place isolated dishes and drinks on white or softly tinted fields, with short product names, ingredients, and prices. Orange is concentrated in purchase and progression actions; pink marks new or advantageous offers. Campaigns, rewards, order tracking, and missions introduce a playful authored 3D and character layer, while cart and payment steps deliberately become quieter and more utilitarian.

The transferable language is the contrast between appetizing media-led discovery and calm transactional decision-making. Dodo's menu taxonomy, mascot, loyalty currency, restaurant operations, delivery promises, and campaigns are literal product architecture and must not be introduced into an unrelated application.

# Non-negotiable visual invariants

- Food photography is isolated, large, and immediately identifiable before supporting description.
- White menu space and pale cool-gray transactional workspaces keep the product imagery visually dominant.
- Vivid orange is reserved for adding, assembling, advancing, applying, and confirming.
- Pink capsule labels mark novelty or value without becoming the general interaction color.
- Menu discovery alternates immersive feature cards with simpler product rows rather than one uniform card grid.
- Cart and checkout reduce decorative imagery and expose editable order, fulfillment, and payment choices directly.
- Playful authored graphics appear in campaigns, loyalty, missions, and tracking but not in every operational row.

# Color and surfaces

White is the default menu canvas. Large featured products use very light blue-gray, warm peach, or lavender atmospheres that echo the food or campaign palette without reducing food contrast. Orange supplies the stable brand and action signal. Pink promotional labels sit on top of images or beside offers; violet belongs to rewards and campaign tokens; yellow is used for ratings and warm highlights.

Cart and profile tasks often appear as white sheets over a cool-gray workspace. Address, delivery, payment, and rating surfaces use plain grouped sections with minimal dividers. A selected choice may gain an orange outline, while an external payment method can retain its own dark indigo action treatment. Do not repaint third-party payment identity orange or spread orange across every background.

# Typography

Product and section names are bold, dark, and compact. Ingredient copy uses a smaller regular style with comfortable line spacing; prices are short bold labels. Feature-card headings can become larger and heavier, while campaigns may use a rounded or expressive display substitute. Checkout returns to a direct system-sans hierarchy with clear section labels, amounts, and action text.

Use SF Pro Text and Display for implementation, with SF Pro Rounded limited to campaign-scale headings where needed. Do not use monospaced text for ordinary order numbers or verification content unless the adapted product has a functional alignment need. Dynamic Type should expand descriptions and choices without separating an item from its price or action.

# Screen composition

The menu starts with delivery context and compact discovery rails, then moves through featured products and ordinary items. Feature cards dedicate most of their area to a single product or campaign scene, with copy and price in a protected lower region. Ordinary items are arranged as image-and-copy rows or sparse two-column groupings, maintaining generous white space around each food silhouette.

Product configuration becomes a focused full-screen or sheet task. A large preview leads, followed by size or option choices, modifiers, and a persistent action that reflects the current price. Cart and profile open as sheets over a dimmed or cool-gray workspace. Cart stacks item editing, recommendations, promotions, totals, and the next action; delivery and payment simplify further into grouped choices and a final summary.

Order tracking may combine the existing menu with a current-status module or open a map-and-status detail. This is a source-specific operational pattern; an adapted product should preserve the idea of progressive status detail without copying restaurant maps, kitchen video, or courier metaphors when they do not apply.

# Navigation appearance

Menu navigation is contextual rather than a conventional persistent tab bar: delivery context, stories, product families, and menu categories provide the main discovery paths. Profile and current-order tasks open as self-contained sheets or focused details with close or back actions. The active product family and category use stronger content and accent treatment while unavailable or inactive items recede.

For adaptation, retain the separation between discovery controls, focused configuration, and account/order tasks. Do not reproduce the source category count, food icons, or sheet entry points unless the destination model genuinely matches.

# Components

Feature cards combine contained food photography or authored campaign art, a short status label, product title, description, and price. Product rows use isolated food media with title, ingredients, and price, avoiding visible card chrome. Category and product-family controls are compact, horizontally scrollable, and stateful.

Configuration uses a large product stage, segmented choices, option tiles, and a persistent orange action whose label and amount update with selections. Cart rows combine image, title, selected options, price, edit, quantity, and removal. Add-on recommendations remain visually lighter than the current order.

Checkout uses grouped selection controls for address, time, and payment, followed by delivery cost, total, and one final action. Profile uses a horizontal summary of loyalty, orders, and addresses, then separate promotion and mission modules. Status controls use a concise label with an activity indicator or stage mark rather than a generic progress bar.

# Imagery and icons

Food is photographed or rendered as a clean isolated object, usually seen from above or a slightly elevated angle. Ingredient texture and portion boundary must remain visible. Feature media may sit on a soft circular or vertical gradient, but ordinary product rows keep transparent or white backgrounds. Campaign imagery can combine product packs, branded tokens, and characters; it must remain an authored asset rather than a SwiftUI reconstruction.

Conventional interface actions may use a coherent native icon family. Product-family icons, loyalty tokens, mascot faces, mission art, and map markers are custom assets and retain their distinct roles. Placeholders must preserve the original media footprint and crop so approval is not performed against a text-only substitute.

# States

Menu availability depends on delivery context and can disable or change product choices. Configuration updates the preview, selected options, and price as the user makes choices. Cart exposes minimum-order, promotion, quantity, and delivery-cost changes immediately. Checkout distinguishes incomplete address, selected time, selected payment, payable total, and payment result.

An active order progresses through accepted, cooking, and delivery states and may surface order-specific actions, kitchen video, notifications, tips, or rating when available. Rating remains incomplete until a score is selected and submitted. Loyalty, mission, and promotion modules reflect earned, eligible, applied, or expired conditions without obscuring core ordering.

# iOS adaptation

Use custom scroll views, sheets, and lazy stacks so the menu does not inherit generic `List` chrome. Respect safe areas while allowing image fields and campaign backgrounds to extend toward screen edges. Keep bottom actions above the home indicator and keyboard, and ensure sheet dismissal does not discard configuration without an appropriate cancel decision.

All interactive rows and chips need at least a 44-point hit region. VoiceOver should group each item as name, key ingredients, selected options, price, and action; decorative food and campaign layers should not repeat visible copy. With larger text, feature cards grow vertically, configuration choices wrap, and dense two-column content becomes one column before essential labels truncate.

# Anti-generic checklist

- Do not place every dish inside the same bordered or shadowed card.
- Do not crop food so tightly that size, ingredients, or portion boundary becomes ambiguous.
- Do not use orange as a full-screen default when white space and food color should lead.
- Do not copy Dodo's categories, loyalty currency, mascot, campaigns, restaurant video, or tracking metaphors into another product.
- Do not replace authored campaign, loyalty, mission, or tracking graphics with arbitrary SF Symbols.
- Do not approve media-led screens while their defining image regions are empty or reduced to generic placeholders.

</design-context>
