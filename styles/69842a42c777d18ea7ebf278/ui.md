<design-context>
---
version: 1
platform: iOS
name: Love-Republic-design-analysis
description: "A restrained fashion-commerce interface where white space, sharp black controls, thin rules, compact uppercase sans-serif type, minimal corner rounding, and full-bleed editorial or product photography keep attention on silhouette, material, and price."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F7F7"
  accent-primary: "#141414"
  accent-secondary: "#A72E3A"
  text-primary: "#141414"
  text-secondary: "#707070"
  divider: "#E6E6E6"
  destructive: "#C43F4B"
typography:
  hero: {fontFamily: "Helvetica Neue", fontSize: 34, fontWeight: 500, lineHeight: 39}
  title: {fontFamily: "Helvetica Neue", fontSize: 28, fontWeight: 500, lineHeight: 34}
  section: {fontFamily: "Helvetica Neue", fontSize: 20, fontWeight: 500, lineHeight: 25}
  body: {fontFamily: "Helvetica Neue", fontSize: 14, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "Helvetica Neue", fontSize: 13, fontWeight: 500, lineHeight: 18}
  caption: {fontFamily: "Helvetica Neue", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 12
  control-gap: 10
rounded:
  control: 2
  card: 4
  sheet: 20
  pill: 999
components:
  primary-action: {fill: "black", text: "white medium", height: 50, radius: 0}
  product-card: {fill: "white", image: "dominant portrait crop", radius: 0, metadata: "compact black and gray"}
  filter-control: {fill: "white", border: "thin gray or black", height: 44, radius: 0}
  navigation: {fill: "white or transparent over imagery", selected: "solid black icon", unselected: "thin gray line icon"}
---

# Overview

Love Republic is a quiet, photography-led fashion interface. White and light gray dominate commerce surfaces, while full-bleed campaign images, model photography, and consistent garment crops provide nearly all visual depth and color. Black text, sharp rectangular actions, thin rules, minimal rounding, and small uppercase labels keep the chrome precise. The visual hierarchy depends on silhouette, fabric, image scale, and deliberate white space rather than decorative cards or expressive UI color.

# Non-negotiable visual invariants

- Editorial and product photography is the primary visual mass and cannot be omitted from campaign, catalog, or detail compositions.
- White is the dominant commerce canvas; black provides primary text, icon, rule, and action contrast.
- Controls, fields, and cards remain sharp or only minimally rounded; pill-heavy marketplace styling is absent.
- Catalog imagery uses a dense two-column portrait grid with consistent garment and model crops.
- Product, basket, checkout, and account surfaces use a single structured column with thin dividers and generous vertical white space.
- Typography stays neutral and restrained, using medium rather than heavy weights and compact uppercase labels where observed.
- Sale or promotional red and availability green remain small semantic accents and never become navigation colors.
- Bottom navigation and top bars use thin monochrome line icons; selected state becomes solid black without a colored capsule.

# Color and surfaces

The canvas and primary surfaces are clean white. Very light gray separates filters, disabled controls, checkout groups, and secondary information. Thin cool-gray rules provide most grouping. Dark inverse fields appear only where black controls or campaign contrast requires them; shadows and gradients are largely absent from interface chrome.

Black is the primary action, icon, and text color. White text appears on black controls or over suitably dark photography. Medium gray carries color names, former prices, delivery notes, and secondary account data. Muted burgundy or red marks sale pricing, promotion, validation, or destructive actions; muted green may indicate availability. Default iOS blue, colorful marketplace cards, broad gradients, and heavy surface tint would break the reference.

# Typography

Use Helvetica Neue as observed, with SF Pro or another neutral grotesk as an iOS-safe fallback. Hero and campaign text sits around 28–34 points, page titles around 24–28, section headings around 18–21, product names and prices around 13–16, body copy around 13–15, and metadata around 10–12. Weight stays regular to medium rather than heavily bold.

Campaign labels and selected controls may use uppercase with controlled tracking. Page titles often center; product names, prices, forms, and fulfillment details are left-aligned. Price and former-price values remain visually adjacent. With Dynamic Type, catalog metadata wraps under the image, two-column grids become one column when needed, and checkout rows grow before type is reduced.

# Screen composition

Commerce surfaces usually use 16-point screen insets, 8–12 point internal gaps, fine dividers, and 24–32 points between larger groups. Campaign imagery may extend edge to edge through the top safe area; catalog and utility screens remain white. Long catalog, detail, basket, checkout, and account surfaces scroll vertically. Bottom navigation or a primary commerce action reserves the lower safe area.

Observed archetypes include:

- Editorial composition: full-width or full-bleed model photography dominates the viewport, with short high-contrast copy and sparse monochrome controls placed in safe image areas.
- Catalog composition: compact title, search or filter row, then a dense two-column grid of portrait product photographs with short name, color, current price, and optional sale price below.
- Product-detail composition: large vertical image gallery leads, followed by compact product identity and price, sharp selectors, delivery or availability rows, and one black lower action.
- Basket composition: one-column product rows preserve thumbnail, name, color or size, quantity, price, and delete control with thin separators and open white space.
- Checkout composition: centered title over rectangular fields, segmented or selection rows, maps or pickup context where visible, explicit price or status groups, and a black full-width action.
- Account-list composition: white screen with centered title, tall monochrome rows, gray secondary values, toggles, chevrons, and restrained status text.
- Modal composition: white rounded-top sheet or simple confirmation panel over a dimmed product, map, or account context.

# Navigation appearance

The primary bottom bar is white with thin monochrome icons and compact labels. Selected items become solid black; inactive items remain light gray or outlined. Campaign overlays may invert icons to white while preserving their geometry. Detail screens use centered black titles, leading chevrons, and compact trailing actions. Bottom sheets have white surfaces and modest top rounding rather than oversized floating cards. Segmented tabs and filter controls rely on thin rules, underlines, or black selected text.

# Components

- Primary action: approximately 50 points tall, full or near-full width, black rectangular fill, square or nearly square corners, and centered white medium-weight label. Disabled state becomes pale gray.
- Secondary action: white fill, black one-pixel border, sharp corners, and compact black label; image-overlay versions may invert to white.
- Product card: dominant portrait image with minimal or no radius, followed by compact black product name and price plus gray color or collection metadata. Sale price uses restrained red.
- Filter or segment: at least 44 points tall, white or light-gray fill, thin border or divider, small uppercase or medium label, and clear black selected state.
- Size or option row: sharp white cells or list rows with thin rules, black label, gray availability state, and no decorative fill.
- Checkout field: rectangular white or pale-gray field, thin divider or border, black entered text, gray placeholder, and monochrome focus treatment.
- Status badge: compact text or minimal outlined mark near the relevant product or fulfillment detail; it does not become a colorful floating pill.

# Imagery and icons

Photography is essential. Campaign images are full-bleed, editorial, and model-led, with lighting, pose, silhouette, and fabric texture carrying the brand. Catalog and product imagery use consistent vertical crops on neutral backgrounds and keep the full garment or key silhouette visible. Product-on-model views and editorial recommendations remain large enough to judge fit and styling.

The sample does not establish a coherent standalone illustration system. Isolated certificate, customization, or campaign graphics remain part of the broader retail art direction. Utility icons are thin monochrome lines for navigation, favorites, barcode, search, filters, sharing, and disclosure. Temporary photography must preserve the documented aspect ratio, focal model or garment, neutral background, and visual weight.

# States

Observed states include selected and inactive navigation, favorite and cart selection, available or unavailable options, muted disabled controls, active and expired order status, empty lists, toggles, segmented tabs, modal sheets, QR or barcode surfaces, and form editing. These preserve the white canvas, thin rules, monochrome hierarchy, and photography-led composition.

Sale or promotion uses muted red close to the price; availability may use green text; destructive confirmation uses red sparingly. Disabled controls become pale gray. Empty states remain typographic or use a restrained icon rather than introducing decorative illustration.

# iOS adaptation

Extend campaign photography or white canvas through the appropriate safe area and reserve the lower inset for the tab bar or purchase action. Use vertical scroll containers for editorial panels, catalog, image galleries, basket, checkout, and account lists. Keep pinned actions from covering the last row or keyboard-focused field.

All navigation icons, favorite controls, filters, size selectors, checkout rows, and purchase actions need at least 44-point targets despite their visually thin treatment. VoiceOver should announce product name, color, size or availability, price, sale state, and action in that order. Preserve native keyboard, camera/barcode, map, payment, and sheet transitions. On compact widths or large Dynamic Type, move the product grid to one column before shrinking text or cropping silhouettes. Maintain the observed light-first monochrome system.

# Anti-generic checklist

- Do not replace editorial and product photography with colorful generic cards or illustrations.
- Do not add large corner radii, pills, gradients, or heavy shadows to ordinary commerce controls.
- Do not use default blue tint where the reference requires black-and-white interaction.
- Do not crop away garment silhouettes, model faces, or material detail.
- Do not make sale red the primary navigation or action color.
- Do not ship an unstyled `TabView`; preserve thin monochrome icons and solid-black selected state.
- Do not give images, fields, buttons, sheets, and badges one uniform radius.
- Do not overlay long copy or dense controls on busy campaign photography.

</design-context>
