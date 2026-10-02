<design-context>
---
version: 1
platform: iOS
name: BakAi-design-analysis
description: "A bright mobile bank on a soft gray-white canvas, built from large rounded white modules, electric-blue actions, navy photographic card anchors, spacious financial forms, a five-item tab bar with a floating blue center action, and restrained promotional photography."
colors:
  canvas: "#F6F5F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF1F5"
  accent-primary: "#0A8CFF"
  accent-secondary: "#07172B"
  text-primary: "#07172B"
  text-secondary: "#8B9099"
  divider: "#DFE4EA"
  destructive: "#E54557"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  bank-card-anchor: {surface: "dark navy or photographic gradient", ratio: "landscape", radius: 18}
  primary-action: {fill: "electric blue", text: "white semibold", radius: 14, minHeight: 52}
  finance-module: {fill: "white", radius: 20, padding: 16, separation: "soft tonal elevation"}
  floating-action-navigation: {bar: "white five-item", selection: "blue", center: "raised blue circle"}
---

# Overview

BakAi is a light, spacious financial interface. A soft gray-white canvas surrounds large rounded white modules, while electric blue defines actions, selected controls, and active navigation. Product cards and occasional photographic or dark-blue gradient headers provide the strongest visual anchors. Forms become deliberately sparse, and monetary result screens center oversized amounts in receipt-like white compositions.

# Non-negotiable visual invariants

- Keep a soft near-white canvas visible around distinct white rounded modules.
- Use saturated electric blue for the dominant action, selection, and active navigation state.
- Preserve the persistent white five-item bottom bar with a raised circular blue center action overlapping it.
- Give bank or product cards strong landscape imagery or dark-blue gradient treatment; they remain the largest product anchor.
- Keep financial forms sparse, single-column, and generous in vertical whitespace, with one dominant action near the bottom.
- Present selectors and secondary decisions in large-radius white bottom sheets over a muted backdrop.
- Center monetary confirmation and result states around an oversized amount and receipt-like status card.
- Keep functional icons compact and blue-forward; confine photography to authentication, promotions, and product-card contexts.

# Color and surfaces

The authenticated canvas is a very light gray with white cards and sheets layered above it through tonal contrast and soft elevation. Pale blue or neutral gray identifies disabled controls and secondary fields. Electric blue is the principal accent and may occupy wide buttons, selected tabs, small icon containers, and the floating center action. Dark navy appears in product-card art, key text, and occasional hero headers; gold remains a small card or premium accent.

Deep navy carries titles and amounts, medium gray carries dates, conditions, and supporting labels, and green confirms successful states. Destructive actions use a distinct muted red. Default iOS blue is close in hue but still needs the observed saturation, geometry, and placement; generic grouped gray surfaces or a navy-heavy form would visibly break the reference.

# Typography

Large page titles use roughly 26–30 point bold display type. Section titles sit around 16–18 points semibold, body and field values around 14–15 points, and captions around 12–13 points in gray. Monetary amounts expand beyond the ordinary hierarchy and are centered prominently on confirmation or receipt screens. Product names and balances lead, with dates, rates, and conditions subordinate.

Use SF Pro Display and SF Pro Text. Preserve stable numeric alignment for amounts and card data. Under Dynamic Type, let secondary metadata wrap and expand modules vertically before reducing the amount or product title. Long field labels should stack above values rather than compress beside them.

# Screen composition

Screens usually begin below the top safe area with a bold title and one or two circular utility controls. The middle scrolls through white modules, a horizontal product-card carousel, service grids, transaction rows, or a focused form. Sixteen-point screen gutters and generous 20–28 point section spacing keep the layout open. Bottom navigation or a fixed primary action reserves the lower safe area.

Observed archetypes include a photographic authentication landing; a sparse credential form; a dashboard feed with product tabs, card carousel, promotional banner, and white modules; a product detail with a dark or photographic card hero above a transaction list; a two-column service grid with compact blue glyphs; a full-screen payment form; a large-radius bottom selector; and confirmation, processing, and completed receipt screens with centered amount hierarchy.

# Navigation appearance

The persistent bottom bar is white and contains five evenly distributed labeled destinations. Inactive items are gray, the selected item is blue, and a raised circular blue scan/action control overlaps the bar at its center. Top navigation uses compact circular back, settings, or utility buttons. Sheets rise as rounded white panels with large top corners over a dimmed or softened version of the current screen.

# Components

Primary buttons are full-width electric blue controls with white semibold text, a roughly 14-point radius, and at least 52-point height. Disabled buttons retain the shape but use a pale blue fill and subdued label. Financial modules are white, around 20-point radius, and use soft tonal separation rather than strong borders.

Landscape product cards use dark-blue gradients or photographic artwork, masked card data, and clear balance hierarchy. Segmented product tabs use compact pill geometry and blue selection. Form fields use white or pale neutral fill, visible labels, and prefix selectors when needed. Service tiles pair compact blue glyphs with short labels. Transaction rows align descriptions and amounts; selected rows and inputs deepen the existing blue rather than introducing a new color.

# Imagery and icons

Photography appears in the authentication landing and bounded promotional banners. Product-card artwork and dark-blue photographic gradients are compositionally important and should not be omitted while final assets are pending. Payment marks and logos remain small, functional assets. Interface icons are compact blue glyphs inside rounded squares or circles. The inspected screens do not confirm a stable independent authored illustration system, so isolated product or promotional art must not be generalized into one.

# States

Observed empty frequent-payment content stays sparse within a white module. Populated transaction lists preserve the same card and type hierarchy. Form entry shows native keyboard context, prefix selectors, and pale-blue disabled versus saturated-blue enabled action. Bottom-sheet selection keeps the surrounding screen muted. Confirmation, processing, and completed states use centered amounts, receipt-like cards, and green confirmation without replacing the white-blue system.

# iOS adaptation

Extend the near-white canvas through safe areas, while authentication photography may extend edge-to-edge where observed. Put dashboards, product details, payments grids, and histories in vertical scroll containers; allow product tabs and card carousels to scroll horizontally. Inset the last content for the persistent bottom bar or fixed action. Keyboard avoidance must keep the active field and primary CTA reachable.

All tab items, circular toolbar controls, card actions, service tiles, selectors, and form controls need at least 44-point targets. VoiceOver should announce title, product or amount, supporting status, then available actions. Dynamic Type should grow modules and receipt cards vertically. On compact widths, reduce service-grid columns or promotional content before shrinking balances and actions. Preserve the sampled light appearance rather than inventing an unrelated dark mode.

# Anti-generic checklist

- Do not replace the soft canvas and distinct white modules with a default grouped `Form`.
- Do not use an unstyled `TabView`; preserve the raised blue center action and labeled blue selected state.
- Do not flatten product cards into generic white rows or remove their landscape visual anchor.
- Do not fill sparse forms with explanatory copy, extra cards, or promotional art.
- Do not use arbitrary multicolor SF Symbols; keep functional glyphs compact and blue-forward.
- Do not use hard borders or strong shadows around every white module.
- Do not signal transaction direction or status by color alone.
- Do not infer a reusable illustration system from isolated photographs, logos, or product-card artwork.

</design-context>
