<design-context>
---
version: 1
platform: iOS
name: Rostics-design-analysis
description: "A photography-led food-ordering interface on clean white surfaces, with saturated red purchase controls, bold compact headings, rounded sheets, and a persistent red-selected bottom navigation."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F1"
  accent-primary: "#E32924"
  accent-secondary: "#F3C93F"
  text-primary: "#171717"
  text-secondary: "#767676"
  divider: "#E4E4E1"
  destructive: "#D92E25"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 800, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 33}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "full-width pill"}
  secondary-action: {fill: "surface-secondary", text: "text-primary", shape: "pill"}
  primary-card: {fill: "surface-primary", imagery: "large food crop", shape: "rounded rectangle"}
  navigation: {fill: "surface-primary", selected: "accent-primary", unselected: "text-secondary"}
---

# Overview

Rostic's is recognisable as an appetite-led ordering product rather than a generic card dashboard. White occupies most of the viewport, large food photographs provide texture and color, and saturated red concentrates attention on adding, changing quantity, confirming, and the selected destination. Bold compact headings sit directly on the canvas; rounded sheets appear when the interface becomes transactional.

# Non-negotiable visual invariants

- Food photography is a primary visual mass, commonly occupying about half of a promotional card or the upper portion of a product surface.
- Saturated red is reserved for committed actions, quantity controls, selected navigation, and location emphasis; it is not used as a general background wash.
- Browsing surfaces remain predominantly white with minimal borders and restrained shadows.
- Product browsing uses paired columns or wide photographic promotions rather than a uniform vertical stack of text cards.
- Transactional detail is grouped in white sheets with strongly rounded top corners and a persistent bottom action.
- Headings are visibly heavier and more compact than product descriptions and metadata.
- Bottom navigation remains visually light, with the selected item made unmistakable by red icon and label treatment.

# Color and surfaces

White is the dominant canvas and product surface. A pale neutral gray separates quiet controls, inactive selectors, and sheet context without competing with food imagery. Red is the primary action and selection color; a warm yellow may appear inside food or campaign imagery but does not replace red in the control hierarchy. Near-black carries titles and prices, muted gray carries descriptions and inactive navigation, and thin light-gray dividers structure dense order rows. Generic iOS blue would visibly break the reference when used for app-owned actions or selection.

# Typography

Use SF Pro Display as the iOS-safe substitute for the observed heavy, compact display voice and SF Pro Text for product information and controls. Short category and promotional headings use 30–38 point extra-bold type; sheet and section headings use 22–30 point bold type; product names, actions, prices, and descriptions remain in a tighter 12–15 point range. Prices should be clear, weighty numerals without decorative styling. Preserve the strong scale and weight contrast under Dynamic Type: let supporting copy wrap and cards grow before reducing the prominence of headings or totals.

# Screen composition

Browsing screens begin below the safe area with a compact location or mode control, then alternate wide photographic promotions, horizontal category selectors, and two-column product cards. Typical side insets are about 16 points, with tighter 8–12 point gaps inside grids. Product detail places a dominant image high in the scroll and moves configuration into a white rounded sheet or lower content region. Cart and checkout are single-column, row-based compositions ending in a persistent red action above the bottom safe area. Map-based selection keeps the map as full-viewport context while a white top-rounded sheet occupies the lower portion. Imagery carries more visual weight than explanatory copy.

# Navigation appearance

The bottom bar is white and visually attached to the screen edge, with compact icon-label pairs; selected icon and label are red while inactive items are gray. Detail surfaces use small, familiar back or close controls rather than a second branded header. Horizontal category tabs and the delivery-mode selector use compact pill or underline selection. Sheets retain a large top radius and clear separation from the dimmed or mapped context beneath them.

# Components

Primary actions are full-width red pills with white semibold labels and at least 44-point height. Secondary controls are pale neutral pills with dark labels. Product cards are visually light: a large photo or cutout, concise title and price, then a compact add or quantity control; avoid ornamental card borders. Quantity controls use red for the active add/change affordance. Promotional cards use substantial photography with short, heavy copy. List rows use dark primary text, gray metadata, restrained dividers, and small chevrons only when required. Native permission alerts remain native, while every app-owned control inherits the red accent and documented geometry.

# Imagery and icons

Food photography and product cutouts are indispensable. Use tight, appetising crops with clear subject scale; do not replace them with generic symbols or empty placeholders. Promotional photos may bleed to card edges, while individual products can sit on clean backgrounds. Icons are simple and functional, typically monochrome until selected; selected navigation and action icons turn red. The isolated onboarding/map graphic is not evidence of a reusable illustration system and should not be extrapolated into decorative character art.

# States

Observed states include native permission prompts, selected delivery or restaurant modes, empty versus populated cart content, add versus quantity-stepper product controls, and modal product/cart sheets. Across these states, the white canvas, red commitment color, heavy heading hierarchy, and photography-first browsing remain constant. Disabled controls recede toward neutral gray; destructive feedback uses a distinct deeper red close to the affected row or action.

# iOS adaptation

Keep status and home-indicator safe areas clear, place persistent actions above the bottom inset, and use vertical scroll containers for catalog, detail, and checkout content. A keyboard must not cover the focused field or the final action. Present app-owned transactional overlays as top-rounded sheets while allowing system permission prompts to stay native. Maintain 44-point hit areas for back, close, add, stepper, tabs, and navigation. VoiceOver order should follow heading, imagery description, product data, then action. At larger Dynamic Type sizes, preserve image ownership and let grids fall back to one column only when labels and prices can no longer remain legible. The observed package is light-first; do not invent a dark appearance without an approved adaptation.

# Anti-generic checklist

- Do not replace the photography-led catalog with a stack of generic white SwiftUI cards.
- Do not use default blue tint for app-owned actions or selected navigation.
- Do not ship an unstyled `TabView`, `Form`, `List`, or default button hierarchy.
- Do not omit the large food photography while waiting for final assets.
- Do not flatten headings, prices, product labels, and metadata into nearly equal type sizes.
- Do not apply one universal corner radius to product cards, pills, and sheets.
- Do not introduce decorative illustrations that are not supported by the observed screens.

</design-context>
