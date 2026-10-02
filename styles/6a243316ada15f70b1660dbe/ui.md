<design-context>
---
version: 1
platform: iOS
name: Stars-Coffee-design-analysis
description: "A warm coffee-loyalty interface combining deep roast-brown and teal brand fields, cream display type, turquoise actions, rounded white product surfaces, and playful authored star-and-wave illustrations."
colors:
  canvas: "#F6F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1EEF0"
  accent-primary: "#43D7C2"
  accent-secondary: "#5B321E"
  text-primary: "#1F1A18"
  text-secondary: "#746E6A"
  divider: "#E7E3E4"
  destructive: "#DE5057"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 31, fontWeight: 800, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 30
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#43D7C2", textColor: "#173A34", cornerRadius: 999, minHeight: 50}
  secondary-action: {fill: "#5B321E", textColor: "#FFF4C8", cornerRadius: 14, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#43D7C2", unselectedColor: "#746E6A"}
---

# Overview

Stars Coffee combines warm café branding with clear loyalty and ordering utility. Deep coffee-brown and dark teal/mint fields frame cream display type; turquoise actions carry progress and commitment; white rounded cards isolate drink/food photography. Onboarding and selected brand moments use a coherent authored family of teal waves, cream stars, hands, cups, and soft dimensional objects.

# Non-negotiable visual invariants

- Deep roast-brown or dark teal forms a large branded header/background mass.
- Turquoise is the stable primary action and loyalty-progress accent.
- Cream/white oversized display lettering appears on dark brand fields.
- Menu/product cards remain white, broadly rounded, and led by real product photography.
- Loyalty/card/gift states use clear large card geometry rather than generic metric tiles.
- Onboarding uses authored teal waves, cream stars, and soft dimensional hero objects.
- Map pins and selected states retain the coffee/teal identity rather than default blue.

# Color and surfaces

Coffee brown anchors profile/account and some brand surfaces; forest teal and mint shape onboarding and loyalty moments. Turquoise carries primary buttons and selection. Cream/white text sits on dark fields, while near-black and gray handle utility copy on white. White cards and pale neutral grouping keep catalog and forms calm. Red is reserved for validation/destructive states. Generic blue or cold all-white composition would erase the café warmth.

# Typography

Use SF Pro with heavy rounded-feeling display weights. Onboarding and promo headlines are large, chunky, and cream/white; product names and loyalty labels are semibold; metadata and history details are compact. Avoid filling space with atmospheric copy. At Dynamic Type sizes, allow hero text and card labels to wrap, expand product/detail cards, and keep turquoise primary actions and loyalty values prominent.

# Screen composition

Onboarding is full-screen dark teal/brown with large display copy and a hero illustration across roughly one third to one half of the viewport. Home combines a dark brand header, loyalty balance/card, promotional/news modules, and white menu/catalog cards. Product detail is sparse and white with a large contained drink/food image followed by options and action. Map screens use a light map with custom branded pins and bottom cards/sheets. Profile can use a full brown field with floating white input/history/gift-card surfaces. Insets are around 16 points.

Visible archetypes include illustrated onboarding; sign-up forms; loyalty-led home/catalog; product detail; promo/news; nearest-store map; loyalty card; brown profile/account; purchase history; and gift-card purchase/use.

# Navigation appearance

Navigation uses compact iOS back/close controls styled in brown, teal, or white depending on the field. Bottom navigation and segmented/tabs use clean white or dark brand surfaces with turquoise selected emphasis. Maps use custom logo pins and rounded bottom sheets. Gift/profile flows use large rounded modal surfaces. Native permission and keyboard states may remain native, while app-owned surfaces preserve the palette.

# Components

Primary actions are turquoise pills with dark high-contrast labels; secondary actions may use brown/cream. Product cards use white fill, broad rounding, large isolated photography, concise title/price, and compact options. Loyalty cards combine progress, QR/card identity, and rewards. Promo/news cards mix photography or campaign art with short copy. Gift cards use large decorative card backgrounds. Inputs are white rounded rectangles on brown or pale fields. Map/store cards use rounded sheets and custom markers. Disabled controls retain shape and reduce saturation.

# Imagery and icons

Product catalog imagery is real photography or clean cutouts and cannot be replaced by illustration. News banners and gift-card backgrounds are campaign content. Authored onboarding/brand art follows the separate illustration specification. Interface icons are simple and friendly; map markers use the coffee identity. Authored art cannot be substituted with SF Symbols, emoji, or SwiftUI shapes.

# States

Observed states include onboarding steps, sign-up and keyboard, populated home/catalog, product selection, promo/news, loyalty progress, map/nearest-store selection, purchase history, profile edit, and gift-card purchase/receive/use. Turquoise remains primary, brown/teal remain brand fields, and white remains the utility surface. System permissions may overlay the current brand field.

# iOS adaptation

Extend dark brand fields behind the top safe area and keep controls/home indicator clear. Use vertical scrolling for catalog/profile/history, keyboard-aware forms, and native maps with branded overlays. Maintain 44-point targets for tabs, product options, map pins/cards, and gift/loyalty actions. VoiceOver should read product identity before price/options/action and reward/card information before controls; decorative stars/waves may be hidden. Compact widths stack art and text rather than shrinking either. Dynamic Type expands cards. Preserve accessible contrast over brown/teal.

# Anti-generic checklist

- Do not replace turquoise/brown/teal with default blue.
- Do not remove product photography or authored onboarding art.
- Do not use a generic white-card dashboard without large brand color fields.
- Do not use an unstyled `TabView`, map pin, `Form`, or bottom sheet.
- Do not recreate stars, waves, hands, cups, or hero objects programmatically.
- Do not flatten chunky display type into ordinary body text.
- Do not add decorative prose where loyalty, product, or action context is already clear.

</design-context>
