<design-context>
---
version: 1
platform: iOS
name: Kulikov-design-analysis
description: "A playful confectionery storefront with saturated purple-magenta branding, pastel canvases, glossy product photography, broad rounded cards, frosted pill navigation, and cheerful 3D promotional objects."
colors:
  canvas: "#F8F4FA"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F1E8F5"
  accent-primary: "#7A1FA2"
  accent-secondary: "#E54497"
  text-primary: "#26172C"
  text-secondary: "#786C7C"
  divider: "#E8DFEA"
  destructive: "#D84655"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 750, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 650, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 24
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "#7A1FA2", textColor: "#FFFFFF", cornerRadius: 14, minHeight: 50}
  secondary-action: {fill: "#F1E8F5", textColor: "#7A1FA2", cornerRadius: 14, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 24, padding: 16}
  navigation: {fill: "rgba(255,255,255,0.88)", selectedColor: "#7A1FA2", unselectedColor: "#786C7C", cornerRadius: 999}
---

# Overview

Kulikov combines a polished confectionery catalog with a playful loyalty world. Purple-magenta brand fields, pale pink and lilac canvases, glossy dessert photography, spacious rounded cards, and translucent pill navigation produce a soft but saturated identity. Promotional and engagement screens add a coherent family of glossy purple 3D objects rather than generic symbols.

# Non-negotiable visual invariants

- Saturated purple is the principal brand/action color, with magenta used as a warmer companion accent.
- Pale lilac, blush, or cream backgrounds form large color fields behind white rounded content surfaces.
- Product photography is glossy, appetizing, and large enough to dominate catalog cards.
- Cards and major sheets use generous rounding and open padding; compact controls use visibly smaller radii.
- Bottom navigation appears as a floating translucent or frosted pill, not a default edge-to-edge bar.
- Loyalty/engagement modules use authored glossy purple 3D objects with consistent material and lighting.
- Typography is bold and friendly at headline level, with short product copy and restrained metadata.

# Color and surfaces

Purple carries primary actions, active navigation, loyalty identity, and major brand fields. Magenta adds campaign or reward emphasis without competing with purple. The canvas shifts among very pale lilac, pink, and warm cream; white cards float through color contrast and only restrained shadow. Near-black plum text is softer than pure black, and secondary copy is muted mauve-gray. Thin lavender dividers are used sparingly. Red remains limited to destructive or validation states. Default blue, flat gray canvases, and cold white-only layouts would visibly break the reference.

# Typography

Use SF Pro with heavy rounded-feeling display weights as an iOS-safe substitute. Hero and section headings are bold and friendly, product names use semibold, and prices/actions receive clear local emphasis. Body copy stays short; captions handle weight, count, bonus, or delivery metadata. Do not fill space with mood copy. At larger Dynamic Type sizes, preserve the separation between playful display headings and compact product facts, allow cards to grow vertically, and keep prices and actions together.

# Screen composition

The top safe area merges into a pale or saturated branded header with concise title and utility controls. Home/shop screens stack broad promotional cards, loyalty/QR blocks, category chips, and horizontal or two-column product modules. Product detail is led by a large dessert image, followed by name, price, options, and a prominent purple action. Cart and checkout use one-column white groups over a pale canvas. Profile and tips screens alternate functional rows with larger illustrated engagement cards. Typical side insets are 16 points; promotional art may occupy one third to one half of a card.

Visible archetypes include image-led shop/home; product detail; cart and checkout; loyalty/profile with QR and bonus widgets; and app-tip or challenge cards that use large authored 3D art.

# Navigation appearance

The bottom navigation is a floating frosted-white pill separated from the screen edges and home indicator. Selected icons/labels are purple; inactive ones are dark or muted gray. Top navigation is visually light, with ordinary-scale back and close controls inside the current color field. Sheets have large rounded top corners and may continue the pale lilac canvas rather than default gray. Selected segments and chips use purple fill or purple text on a pale tint.

# Components

Primary actions are broad purple rounded rectangles with white semibold labels. Secondary actions use pale lilac fill with purple content. Product cards use white or very pale surfaces, large rounded corners, prominent food photography, short title, price, and compact add control. Loyalty cards combine QR/bonus information with strong purple identity. Promotional cards pair concise text with a large 3D object or campaign photo. Chips are soft pills with clear purple selected states. Inputs remain simple rounded rectangles with subtle lavender borders. Disabled controls keep geometry and reduce saturation/contrast.

# Imagery and icons

Dessert/product photography and authored 3D engagement art are both compositionally important. Food images use controlled studio lighting, rich color, and close crops while preserving the full product silhouette where identification matters. Promotional 3D objects use the separate illustration specification and cannot be replaced by SF Symbols, emoji, or SwiftUI shapes. Interface icons are simple and rounded, visually compatible with the friendly type, and subordinate to photography and authored art.

# States

Selected tabs, chips, and options use purple fill, purple labels, or pale-lilac selection fields. Populated catalog and cart states preserve photo dominance. Loyalty/tip modules retain their authored art across promotional and engagement variants. Checkout forms keep pale background and white groups. Validation/destructive states use red locally; successful or earned states may add brighter magenta/purple celebration without changing the material language.

# iOS adaptation

Extend the active pale or purple field behind the top safe area and keep the floating navigation above the home indicator. Use vertical scrolling for content, horizontal rails only for products/categories, and keyboard-aware insets for checkout. Maintain 44-point targets despite soft compact chips. VoiceOver should read card title and reward/product information before actions; decorative 3D art may be hidden unless it conveys state. At compact widths, preserve one large focal image or artwork per module and stack text/actions rather than shrinking them. Dynamic Type grows cards and sheets. Preserve translucent effects with an opaque accessible fallback when Reduce Transparency is enabled.

# Anti-generic checklist

- Do not replace purple/magenta with default blue.
- Do not use a standard edge-to-edge `TabView` instead of the floating frosted pill.
- Do not omit glossy product photography or the authored 3D art layer.
- Do not recreate promotional art with SwiftUI shapes, SF Symbols, or emoji.
- Do not flatten pale lilac/pink canvases into generic system gray.
- Do not use one corner radius for cards, controls, sheets, and navigation.
- Do not add decorative copy where product, reward, or action context is already visible.

</design-context>
