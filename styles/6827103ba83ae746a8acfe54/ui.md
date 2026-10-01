<design-context>
---
version: 1
platform: iOS
name: gold-apple-design-analysis
description: "A high-contrast beauty storefront built from white space, near-black type, fluorescent chartreuse promotion bars, squared commerce controls, pale product stages, and full-bleed campaign photography."
colors:
  canvas: "#FFFFFF"
  surface-product: "#F4F4F4"
  surface-muted: "#E9E9E9"
  ink: "#0A0A0A"
  ink-secondary: "#626262"
  ink-disabled: "#A7A7A7"
  divider: "#B8B8B8"
  accent-chartreuse: "#D7FF00"
  accent-pink: "#F50087"
  positive: "#2B8A57"
typography:
  display: {fontFamily: "Helvetica Neue", fontSize: 34, fontWeight: 700, lineHeight: 36, letterSpacing: -0.8}
  page-title: {fontFamily: "Helvetica Neue", fontSize: 28, fontWeight: 700, lineHeight: 30, letterSpacing: -0.5}
  section-title: {fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: -0.2}
  product-title: {fontFamily: "Helvetica Neue", fontSize: 18, fontWeight: 500, lineHeight: 21, letterSpacing: -0.2}
  body: {fontFamily: "Helvetica Neue", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0}
  label: {fontFamily: "Helvetica Neue", fontSize: 13, fontWeight: 500, lineHeight: 16, letterSpacing: 0}
  caption: {fontFamily: "Helvetica Neue", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0}
  overline: {fontFamily: "Helvetica Neue", fontSize: 10, fontWeight: 600, lineHeight: 12, letterSpacing: 1.1}
  action: {fontFamily: "Helvetica Neue", fontSize: 12, fontWeight: 600, lineHeight: 15, letterSpacing: 1.0}
spacing: {micro: 4, compact: 8, control: 12, gutter: 16, section: 24, editorial: 40}
rounded: {none: 0, micro: 2, small: 4, circular: 999}
components:
  primary-action: {height: 52, fill: "{colors.ink}", foreground: "{colors.canvas}", radius: "{rounded.none}", typography: "{typography.action}"}
  secondary-action: {height: 48, fill: "{colors.canvas}", foreground: "{colors.ink}", border: "{colors.ink}", radius: "{rounded.none}"}
  promotion-strip: {minHeight: 24, fill: "{colors.accent-chartreuse}", foreground: "{colors.ink}", radius: "{rounded.none}"}
  product-stage: {fill: "{colors.surface-product}", radius: "{rounded.none}"}
  bottom-navigation: {height: 58, fill: "{colors.canvas}", selected: "{colors.ink}", unselected: "{colors.ink-secondary}"}
---

# Overview

The reference combines editorial beauty imagery with an intentionally severe commerce shell. Product information sits on white, merchandise is isolated on very pale gray, and almost every decision is expressed through black type, thin rules, or a solid black action. Fluorescent chartreuse is the recognisable promotional interruption: it appears as narrow offer strips, small badges, branded labels, and campaign objects rather than as a general interface tint.

The transferable language is the contrast system, typographic scale, image treatment, square control geometry, and sparse separation. The source's exact catalog destinations, loyalty offers, promotional wording, and checkout fields belong to its retail architecture and should not be copied into an unrelated product.

# Non-negotiable visual invariants

- Primary reading surfaces are white and almost-black; medium gray is reserved for supporting information and disabled content.
- Fluorescent chartreuse appears in concentrated promotional bands, labels, and campaign objects, never as the default screen background.
- Product cutouts sit on broad pale-gray image stages without elevated card shadows or decorative frames.
- Headlines use large, tightly set grotesk type; compact labels and actions often use uppercase text with visible tracking.
- Purchase actions are solid black rectangles with white labels and little or no corner rounding.
- Sections separate through whitespace, hairlines, or image boundaries rather than repeated floating cards.
- Campaign photography may fill a large region, while routine product browsing returns to a flat, restrained grid.

# Color and surfaces

White is the storefront canvas. Pale neutral gray creates product-image stages, loading fields, and quiet secondary regions. Near-black owns headings, prices, navigation symbols, selection, and commitment actions. Supporting copy steps down to medium gray; unavailable actions use a lighter neutral.

The signature chartreuse is extremely bright and slightly yellow. Keep it to promotions, short attention strips, small status labels, and branded artifacts. Pink can mark a discount percentage, but it is a local retail accent rather than a second theme color. Avoid soft pastel gradients, tinted card stacks, and broad chartreuse panels in ordinary task screens.

# Typography

Use a neutral neo-grotesk with a high x-height and reliable Cyrillic. Large page and campaign titles are bold, tightly spaced, and allowed to wrap into short blocks. Product names use a calmer medium weight. Prices are prominent through weight and proximity, not a separate decorative face. Supporting retail metadata is compact but still legible.

Uppercase, tracked text is appropriate for product categories, compact offer labels, accordion headings, and commitment actions. Do not uppercase paragraphs or long navigation labels. Preserve the reference's abrupt scale contrast between a 28–34 point title and 10–13 point commerce metadata instead of normalising everything into one medium text size.

# Screen composition

Use 16-point horizontal gutters for task content. Discovery may break the gutter with a full-width campaign image, followed by circular shortcuts, unframed product columns, and strong section headings. Product detail begins with title and a large pale product stage, then price, offer, variant or availability information, and expandable details. A purchase action can remain available at the lower edge while the detail scrolls.

The composition is flat and linear. Dotted leaders can connect labels and values in totals; thin rules divide expandable information; generous blank regions create hierarchy around titles and decision blocks. Recommendations use the same product-grid grammar rather than a new generic card style.

# Navigation appearance

Primary navigation is a quiet white bar with thin black line icons and very small labels where labels are present. Selection changes through icon emphasis, not a colored capsule or filled navigation background. Secondary screens use a simple back control, a short title, and an optional share or close action.

Carry over the low-chrome treatment, not the source's exact destination count or retail information architecture. A new product should expose only its real top-level destinations and should not reproduce the bag, favorites, profile, or editorial sections unless those concepts exist.

# Components

## Primary and secondary actions

The main action is a full-width black rectangle about 52 points high with a white tracked label. A paired favorite action may use a separate outlined square. Secondary actions are white with a one-point black outline or appear as underlined text. Disabled actions change to a flat light-gray fill and low-contrast label.

## Product tile

The image area is a large square or portrait pale-gray field. Small discount or novelty badges attach directly to an image corner. Brand, item name, current price, and crossed-out previous price follow without a surrounding container. Favorite and add actions remain compact and visually independent from the product copy.

## Promotion strip and badge

A promotion strip is a thin, edge-to-edge chartreuse band with small black copy. A badge uses the same chartreuse or a local pink discount color and square geometry. Do not enlarge either into a generic announcement card.

## Forms and disclosure rows

Text fields are underline- or rule-led rather than soft filled capsules. Radio selections use simple outlined circles with a black selected center. Product details use uppercase disclosure labels, plus/minus indicators, and full-width hairlines. Checkout totals may use dotted leaders to preserve a ledger-like rhythm.

# Imagery and icons

Campaign imagery is photographic or campaign-specific product art with deliberate fashion styling, bold scale, and clear room for copy. Product imagery uses clean cutouts on pale neutral stages; packaging must remain fully legible and should not be over-cropped. Circular photographic crops are appropriate for shortcut topics, not for every product or action.

Use a coherent set of thin, black utility icons for conventional actions such as back, search, favorite, share, close, scan, and disclosure. Campaign objects, editorial photography, and merchandise photography are separate asset categories; they do not establish a reusable illustration system. If final photography is unavailable, preserve the intended crop, scale, and color mass with a faithful placeholder.

# States

Selection is expressed with a black center, border, or text emphasis. Disabled inputs and actions use flat neutral gray. Promotion, discount, and new-item states use compact chartreuse or pink markers. Expanded product information swaps a plus for a minus and reveals content without changing the surrounding hierarchy. The cart exposes quantity, savings, total, delivery choice, payment choice, promo-code result, and order confirmation as explicit task states.

Loading should reserve the real image and text footprints rather than replacing the page with a centered spinner. Errors belong beside the affected input or decision. Success uses a clear title and order facts; it should not introduce celebratory styling that is absent from the rest of the reference.

# iOS adaptation

Keep actionable regions at least 44 points even when icons and visible labels are compact. Respect safe areas while allowing campaign images and narrow offer strips to reach the screen edges. The lower action region must not cover the final scroll content, and keyboard presentation must keep the active field and its result visible.

Dynamic Type may wrap product names, addresses, and explanations, but preserve the contrast between bold section hierarchy and compact metadata. VoiceOver should read a product as one coherent item with price and availability, and totals as label-value pairs. Use native permission dialogs and keyboards; style only app-owned surfaces. Standard controls may keep native behavior while adopting the documented black, white, squared presentation.

# Anti-generic checklist

- Do not turn chartreuse into a global background, primary button fill, or tint for every interactive control.
- Do not wrap each product, checkout row, or disclosure section in a rounded elevated card.
- Do not replace the large product stages and campaign crops with small thumbnails beside text.
- Do not soften every action into a pill or apply one generous radius throughout the interface.
- Do not copy the source's catalog, promotional modules, or navigation destinations into a product with different tasks.
- Do not use default blue tint, thick multicolor icons, or arbitrary SF Symbols as brand decoration.

</design-context>
