<design-context>
---
version: 1
platform: iOS
name: Moy-Auchan-design-analysis
description: "A white and light-gray grocery interface combining green purchase controls, red loyalty and discount masses, compact bold headings, dense product imagery, fixed commerce actions, and simple line-icon navigation."
colors:
  canvas: "#F5F6F5"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1EF"
  accent-primary: "#2E9B45"
  accent-secondary: "#D7192D"
  text-primary: "#1A1C1A"
  text-secondary: "#727772"
  divider: "#DFE3DF"
  destructive: "#D7192D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 8
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle"}
  secondary-action: {fill: "surface-primary", text: "accent-primary", shape: "outlined rounded rectangle"}
  primary-card: {fill: "surface-primary", imagery: "product or category photography", shape: "rounded rectangle"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-secondary"}
---

# Overview

Мой АШАН uses a restrained white and light-gray grocery shell, with green controlling purchase and selection while red carries the loyalty identity, discounts, and large barcode card. Product photography provides most of the texture. Compact bold headings, fixed purchase regions, and simple line-icon lists make the interface commerce-led rather than decorative.

# Non-negotiable visual invariants

- Green is the primary app-owned action, checkbox, outline, and selected-state color.
- Red is reserved for brand, loyalty, barcode, badge, and discount emphasis rather than general confirmation.
- Product photography and category imagery occupy most browsing and detail surfaces.
- The large red loyalty-card or barcode block forms a distinct color mass on relevant home states.
- Product detail and cart use persistent bottom commerce controls.
- White cards and rows sit on a light-gray canvas with restrained borders and shadows.
- Typography remains compact and bold at headings, with dense smaller metadata beneath.

# Color and surfaces

The canvas is a cool near-white or light gray, while product cards, form groups, profile rows, and sheets are white. Green marks primary buttons, checkboxes, selections, and cart commitment. Red marks the brand, loyalty card, discounts, badges, and destructive feedback. A blue information banner may appear as a local semantic state but is not a general accent. Near-black carries names and totals, gray carries units and secondary conditions, and fine dividers structure lists. Default blue controls would conflict with the green commitment hierarchy.

# Typography

Use SF Pro Display for 28–34 point bold titles and SF Pro Text for shopping information. Section headings use about 20 point bold; product names, actions, and current prices use 14 point regular or semibold; unit, discount, old-price, tab, and helper text use 11–13 point captions. Keep headings compact and totals prominent without turning promotional copy into oversized display text. Dynamic Type should grow cards and rows and move grids to one column before product identity or price becomes truncated.

# Screen composition

Registration and address screens use a focused single column below the safe area. Home alternates the large red loyalty block, promotional cards, and product rails. Catalog uses square category tiles with photo or graphic assets, while search and product listings use dense product grids. Product detail gives the top region to photography, then price and product data, with a fixed green cart action at the bottom. Cart and checkout use stacked rows, green selection controls, an occasional blue information band, and a persistent checkout bar. Profile and settings are compact white lists on light gray.

# Navigation appearance

The bottom bar is white with small line icons and labels; green indicates the active destination and gray marks inactive items. Detail and form screens use a small black back control and compact title. Category and discount selections use green outlines, checks, or underlines. App-owned sheets use rounded top corners, while system keyboard and permission transitions remain native. A support conversation may use a small avatar, but navigation stays utility-first.

# Components

Primary buttons and sticky cart or checkout actions are green rounded rectangles with white semibold labels. Secondary actions use white fill with green outline or text. The loyalty card is a large red rounded block containing high-contrast barcode or membership data. Product cards combine photo, title, price, discount, favorite, and cart/stepper controls. Category tiles are square pale cards with photo or graphic content. Cart rows use green checkboxes and quantity steppers; form and profile rows use fine dividers, line icons, and chevrons. Disabled states recede to gray while retaining explicit labels.

# Imagery and icons

Product packshots, category photos, campaign cards, and food imagery are compositionally essential. Contain packaged products consistently; crop promotional food imagery within its card. The Auchan bird mark, tiny support avatar, and campaign graphics are isolated brand assets rather than evidence of a repeatable illustration language. Functional icons are restrained lines in dark gray, green, or red. Do not replace merchandise, loyalty media, or category assets with arbitrary SF Symbols.

# States

Observed states include first launch, registration and keyboard, address selection, loyalty barcode, selected discount categories, populated catalog and search, product detail, cart selection and quantity, checkout information, profile, personal details, notification settings, and support. Green commitment, red loyalty/discount, white surfaces, and image-led commerce remain constant. Informational and error messages stay close to the affected row and use semantic color without recoloring the whole screen.

# iOS adaptation

Respect top and bottom safe areas, keep sticky cart and checkout actions above the home indicator, and use scroll containers for home, catalog, detail, cart, profile, and support. Keep the focused registration or address field visible above the keyboard. Preserve native system transitions while styling app-owned sheets and lists. Back, category, favorite, checkbox, stepper, chat, and navigation controls require 44-point hit areas. VoiceOver should announce product identity, price and discount, then selection and action. At large Dynamic Type, stack metadata and reduce grid columns rather than clipping. The observed UI is light-first and should not be automatically inverted.

# Anti-generic checklist

- Do not merge the green action and red loyalty/discount roles into one accent.
- Do not replace product and category imagery with generic symbols or blank cards.
- Do not omit the large red loyalty barcode mass where membership is visually central.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default checkbox.
- Do not flatten title, product, price, discount, and unit metadata into equal type.
- Do not give cards, buttons, fields, and sheets one universal radius or shadow.
- Do not invent an illustration system from the bird mark, support avatar, or promo graphics.

</design-context>
