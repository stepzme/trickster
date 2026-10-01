<design-context>
---
version: 1
platform: iOS
name: 4-lapy-design-analysis
description: "A pale blue-gray pet-commerce interface built from broad white rounded surfaces, compact black hierarchy, black pill actions, six-item navigation, and high-impact pet cutouts on orange, pink, violet, cyan, and yellow graphic fields."
colors:
  canvas: "#F3F8FB"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAF1F6"
  accent-primary: "#000000"
  accent-secondary: "#FF7108"
  text-primary: "#0A0A0A"
  text-secondary: "#707681"
  divider: "#DFE7ED"
  destructive: "#DC4D5B"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 16
  card: 20
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "black", text: "white semibold", height: 52, shape: "full-width pill"}
  secondary-action: {fill: "white or pale blue-gray", text: "near-black", border: "none", shape: "rounded rectangle"}
  primary-card: {fill: "white", radius: 20, padding: 16, shadow: "subtle or none"}
  navigation: {fill: "white", selected: "black icon and label", inactive: "gray-blue icon and label", badge: "small yellow disk"}
---

# Overview

4 lapy uses a cool, nearly white blue-gray canvas as a quiet base for broad white commerce surfaces and vivid pet-led artwork. The interface is recognisable through the contrast between dense retail information and playful cutout animals on saturated geometric backplates. Black is the primary action color rather than iOS blue: it appears in full-width pill buttons, selected controls, strong prices, and active navigation.

The real screens alternate among white card grids, single-column forms and lists, map canvases, and promotional compositions. This is not a generic white-card app: pet imagery, irregular color fields, large corner radii, compact gutters, and the black action language carry equal visual weight.

# Non-negotiable visual invariants

- The default screen is a pale blue-gray full-height field with large white groups; pure white is reserved for cards, sheets, and navigation rather than used as an undifferentiated canvas.
- Primary actions are high-contrast black pills with white semibold labels, normally spanning the usable content width or anchoring a bottom action area.
- Commerce screens use compact 12-point outer gutters and visibly larger 16-point internal card padding, creating dense but readable layouts.
- Product and category content is broken into rounded white cards or rows with roughly 16–24-point corners; it is not rendered as borderless system lists.
- Pet cutouts and black animal silhouettes on orange, pink, violet, cyan, or yellow fields remain a major visual mass in onboarding, promotions, categories, and empty or confirmation states.
- The bottom navigation is a white/translucent six-item bar with black selected content, gray-blue inactive content, and occasional small yellow badges.
- Prices, totals, and screen titles use heavy near-black type; secondary delivery, bonus, and product metadata stay smaller and cool gray.
- Search, chips, segment controls, fields, sheets, and steppers have deliberately rounded custom appearance rather than default SwiftUI styling.

# Color and surfaces

The cool canvas `#F3F8FB` or nearby `#EEF5F8` is visible between cards and behind long lists. White primary surfaces form large rounded groups for products, checkout sections, profile rows, and service content. Nested search fields, disabled controls, and secondary containers use `#EAF1F6`; dividers are quiet blue-gray and should never dominate a group.

Near-black `#0A0A0A` is both the strongest text and action color. Orange around `#FF7108` is the most persistent warm accent, joined by soft pink, violet, cyan, and yellow in artwork, category markers, bonuses, and badges. These colors appear as contained high-energy masses against the pale structure, not as arbitrary system tints on every control. Generic iOS blue for primary buttons or links would visibly weaken the reference.

Success and destructive colors appear sparingly beside explicit labels or actions. Overlay states use a dark translucent scrim while preserving a bright white rounded sheet above it.

# Typography

The typography is a compact iOS sans hierarchy. Use SF Pro Display for large titles and promotional statements and SF Pro Text for functional content. Screen titles are typically 20–24 points, bold, and centered or aligned to the content edge. Section headings sit around 17–18 points bold; product names and row labels are 14–16 points with medium or semibold weight. Prices are heavier than adjacent metadata. Captions, tab labels, bonus details, and delivery notes sit around 11–12 points in cool gray.

Scale contrast is controlled rather than theatrical: imagery supplies most of the expression. Reserve the 36-point hero style for the few full-screen brand or campaign moments. Avoid uppercase as a general hierarchy device. At larger Dynamic Type sizes, let titles and metadata wrap while retaining weight contrast; never reduce product prices, primary actions, and section headings to the same apparent size.

# Screen composition

The common upper zone contains the safe-area status region followed by one compact visual anchor: a centered title, location row, search field, or close/back control. The middle zone carries most information in edge-to-edge-with-gutters cards, grids, forms, or a map. The lower zone is either scroll content plus the six-item bar or a sticky black CTA separated from the content by white space or a white action surface.

Home-like screens mix a two-column utility grid with wide promotional artwork and horizontal or vertical product groups. Promotional imagery occupies a substantial fraction of its card instead of becoming a thumbnail. Catalog-like screens use a single column of broad category rows or a two-column product grid, with search and filtering visually grouped above. Product-detail screens begin with a large contained product image area, then transition into white information sections, price, controls, and recommendations. Checkout, profile, pet, and history screens are vertically stacked groups whose internal rows remain compact. Map screens allow the map to become the canvas while search, zoom controls, pins, and a rounded bottom sheet float above it. Modal states use a dimmed underlying screen and a white sheet with a visible top radius and drag handle.

Typical outer insets are about 12 points, with 10–12-point gaps between adjacent controls and 20–24 points between major sections. Scrolling content must clear both sticky actions and the bottom safe area. A card should normally occupy the full available width within the gutter; arbitrary narrow centered cards are foreign to the system.

# Navigation appearance

The bottom bar is a broad white or lightly translucent surface with six evenly spaced icon-and-label items. The selected item is black without an oversized filled selection capsule; inactive items are cool gray-blue. A badge may appear as a small yellow disk attached to an icon. The bar respects the home-indicator safe area and remains visually separate from the pale canvas.

Inner-screen bars use a compact back chevron at leading edge and a centered bold title; sheets may substitute a simple close mark. Search or utility controls may occupy the same top zone but should not compete with the title. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary buttons are about 52 points high, black, pill-shaped, and labeled in white semibold type. Disabled primary actions keep the same geometry but move to a pale gray fill with muted text. Secondary actions use white or pale surfaces and near-black labels without default blue outlines.

Primary cards are white with roughly 20-point corners and 16-point padding. Product cards combine contained pack photography, a compact name, muted metadata, a heavy price, and a small favorite control. Category rows pair a high-contrast animal mark or image field with a bold label. Search bars and text fields sit on pale blue-gray rounded rectangles. Filter chips and segmented controls are compact capsules; selection is conveyed with black or clearly saturated fill and strong label contrast.

Quantity controls use discrete circular or rounded minus and plus buttons with the count between them. Favorite actions use a consistent heart treatment. Checkout sections, pet-service accordions, and profile groups retain the white-card geometry. Sheets use a centered drag handle and generous top corners. Map zoom controls are small white rounded buttons with simple high-contrast symbols.

# Imagery and icons

Imagery is structurally important. Commerce uses clean product photography on uncluttered light fields; pet content uses real animal photography as cutouts, rounded crops, or avatars. Promotional and state artwork combines those cutouts with flat saturated blobs, circles, hearts, stickers, black speech bubbles, and occasional black animal silhouettes. Category marks are bold and simplified rather than a random collection of SF Symbols.

On promotional cards, a pet cutout or silhouette may occupy a third to half of the card and can overlap its geometric backplate. Product imagery uses `contain` so packaging is not cropped; campaign photography uses deliberate cover or cutout crops. If final imagery is pending, retain its observed footprint and focal balance with a faithful placeholder—do not collapse the card into text.

# States

Observed loading grids preserve product-card geometry with pale skeleton blocks. Search can show a keyboard-active field or a no-results state with large pet-led artwork. Favorites appear both populated and empty while preserving the same pale canvas and navigation. Checkout and order history distinguish active, completed, and paid states through explicit text, compact semantic accents, and state imagery rather than color alone.

Forms show enabled black actions and pale disabled actions with identical geometry. Error feedback can appear as a compact toast near the active form. Modal payment, sorting, filtering, photo-source, address, and bonus states use the same white-sheet treatment over a dimmed context. Logged-in and logged-out profile states retain the shared type, row, and card system.

# iOS adaptation

Use a vertical `ScrollView` or collection layout for card and grid screens, allowing content to extend beneath a custom safe-area-aware bottom bar only when sufficient inset is applied. Sticky CTAs should use safe-area insets rather than fixed device coordinates. Map controls and sheets must remain clear of the status and home-indicator regions. Present modal content with native sheet behavior while styling its visible surface, handle, radius, and controls to match the reference.

Keep every tab, chip, stepper control, map button, and compact icon action inside at least a 44-point hit target. VoiceOver order should follow the visible top-to-bottom hierarchy, with product image and metadata grouped before purchase controls. Dynamic Type may increase card height and turn one-line metadata into multiple lines; do not shrink imagery until it loses its compositional role. On compact widths, stack utility tiles and action rows before compressing labels. Keyboard-visible forms must scroll the focused field and CTA above the keyboard.

The sampled appearance is light. If a product requires dark mode without a demonstrated reference state, preserve the relative pale-surface hierarchy and contrast deliberately rather than applying automatic inversion.

# Anti-generic checklist

- Do not replace the pale blue-gray canvas and grouped white surfaces with a plain white `List` or `Form`.
- Do not use default iOS blue for primary actions; the dominant action language is black and pill-shaped.
- Do not ship an unstyled `TabView` with arbitrary SF Symbols or omit the six-item bar's selected, inactive, and badge treatments.
- Do not reduce pet artwork, product imagery, or promotional collage to small leading thumbnails.
- Do not use one universal corner radius for cards, sheets, fields, chips, and pills.
- Do not crop product packs with `fill`, or stretch cutout pets into rectangular photographs.
- Do not turn every accent into a gradient; the characteristic accents are mostly flat, saturated shapes.
- Do not flatten dense product, checkout, pet, and profile content into identical generic cards with equal type hierarchy.

</design-context>
