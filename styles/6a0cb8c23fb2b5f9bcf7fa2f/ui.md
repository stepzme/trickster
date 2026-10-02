<design-context>
---
version: 1
platform: iOS
name: Lemana-PRO-design-analysis
description: "A white, brand-forward home-improvement marketplace with construction-yellow actions, heavy black type, outlined selections, floating rounded navigation, and photo-led product utility."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F1"
  accent-primary: "#FFD400"
  accent-secondary: "#202020"
  text-primary: "#171717"
  text-secondary: "#6F6F72"
  divider: "#E3E3DF"
  destructive: "#D73535"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 750, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 650, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 12
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FFD400", textColor: "#171717", cornerRadius: 12, minHeight: 48}
  secondary-action: {fill: "#202020", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 48}
  primary-card: {fill: "#FFFFFF", borderColor: "#E3E3DF", cornerRadius: 16, padding: 12}
  navigation: {fill: "#FFFFFF", selectedColor: "#171717", indicatorColor: "#FFD400", cornerRadius: 999}
---

# Overview

Lemana PRO presents retail utility through a forceful yellow-and-black identity. Large yellow actions, bold near-black headings, real project photography, isolated product cutouts, and a floating rounded navigation cluster stand out against a mostly white canvas. The result is practical and dense, but more branded than a generic marketplace.

# Non-negotiable visual invariants

- Construction yellow is the dominant action and brand accent, always paired with near-black content.
- White remains the main canvas, while pale warm gray groups categories, controls, and checkout sections.
- Heavy black headings and prices create stronger contrast than compact supporting metadata.
- Real room photography and clean product cutouts occupy meaningful card area and are never replaced by generic symbols.
- Selected filters or options use a visible black outline or dark fill rather than default blue tint.
- Navigation appears as a rounded floating white cluster separated from the edges and bottom safe area.
- Product/catalog density remains high, with thin separators and little decorative shadow.

# Color and surfaces

White carries most screens. Bright yellow appears in large commitment controls, selected brand moments, and promotional emphasis; charcoal provides the complementary filter and secondary-action color. Warm pale gray creates category tiles, grouped fields, and quantity controls. Black outlines are an active visual state, not merely separators. Near-black text dominates, gray supports specifications and availability, and red is reserved for discounts or destructive conditions. Default system blue and cool gray card stacks would weaken the observed identity.

# Typography

Use SF Pro Display and SF Pro Text as safe substitutes. Titles, prices, and section labels are unusually bold for a utility marketplace, while specifications and delivery data remain compact. Title and price visibly lead, body explains, and captions carry units and fulfillment details. Keep measurements and currency numerals aligned and unambiguous. Dynamic Type may increase vertical height, but must preserve the strong heading and adjacency of price, availability, and action.

# Screen composition

The top safe area usually stays white and leads into a compact branded header, location/search controls, or a direct page title. Home and catalog screens stack a full-width search control, photo or promotion modules, horizontal rails, and dense two-column product/category grids. Product detail uses a large image field above price, availability, variants, and a nearby yellow purchase action. Cart and checkout become a single vertical column of product rows, fulfillment blocks, totals, and fixed or near-bottom controls. Insets are about 16 points; imagery often claims half or more of a card.

Visible archetypes include sparse centered onboarding/login; merchandising home with yellow identity and photo-led modules; catalog/search grids; product detail with isolated packshot; cart and checkout with grouped utility blocks; and profile pages with plain rows rather than ornamental cards.

# Navigation appearance

The characteristic bottom navigation is a floating, broadly rounded white dock rather than an edge-to-edge native tab bar. Icons and labels are dark, selected emphasis is reinforced by yellow or a stronger dark treatment, and the dock uses only restrained soft separation. Navigation bars remain white with bold black titles. Back and close controls are ordinary in scale and placement, styled in black. Sheets use large rounded top corners and white surfaces over a dim scrim.

# Components

Primary actions are wide yellow rounded rectangles with bold black labels. Secondary commitment actions may invert to charcoal with white labels. The search control is a large white or pale pill with a compact icon and optional scan affordance. Product cards use minimal framing: photo/cutout, title, rating, current and former price, unit information, availability, and cart action. Category tiles use pale fills and image-led composition. Filters use dark pills or black-outlined selections; quantity controls are compact light-gray groups. Inputs are explicit bordered or lightly filled fields, not default `Form` rows. Disabled actions retain shape while losing contrast.

# Imagery and icons

Interior/project photography and clean isolated product cutouts are compositionally required. Use aspect-fill for rooms and inspiration banners, preserving the key fixture; use contain for tools, materials, and packaged goods. Promotional graphics may combine product renders, bold color blocks, and short labels, but the inspected screens do not establish a broad independent authored illustration language. Icons are sturdy, simple, and high-contrast, with line weight compatible with the bold typography.

# States

Selected filters and choices use black outline, dark fill, or yellow emphasis. Availability is displayed close to price and may use a restrained tinted badge. Cart quantities, totals, and checkout selections preserve the white/yellow/black system. Modal selectors remain white with rounded top corners. Error and destructive states use red only at the affected field or action; confirmed states retain the primary yellow/black emphasis.

# iOS adaptation

Respect the top safe area with white or the active branded field, and keep the floating dock clear of the home indicator. Use vertical scrolling for catalog and checkout, horizontal scrolling for chips and merchandising rails, and keyboard-aware sheets for address or contact input. Maintain 44-point targets for search, scanning, filters, quantity, and navigation. VoiceOver order should follow title → product/specification → price/availability → action. On narrow phones, preserve two-column cards only where text remains legible; otherwise use one-column rows. Dynamic Type expands card height and stacks metadata rather than clipping. Preserve the observed light appearance and style app-owned surfaces explicitly.

# Anti-generic checklist

- Do not replace yellow/black with default iOS blue.
- Do not use an edge-to-edge unstyled `TabView` in place of the floating rounded dock.
- Do not turn product/category grids into identical shadowed white cards.
- Do not omit project photos or product cutouts while assets are pending.
- Do not soften the bold heading and price hierarchy into uniform body text.
- Do not use default `Form` sections or system selection tint.
- Do not use the same corner radius for dock, sheet, card, and compact control.

</design-context>
