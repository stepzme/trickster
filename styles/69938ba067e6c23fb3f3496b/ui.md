<design-context>
---
version: 1
platform: iOS
name: Avito-design-analysis
description: "A white, search-first marketplace where dense two-column listing photography and bold prices dominate, cyan marks discovery and selected navigation, purple marks commerce actions, black advances utility forms, and playful multicolor illustrations punctuate empty and success states."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F6"
  accent-primary: "#08A8F5"
  accent-secondary: "#9657F4"
  text-primary: "#111111"
  text-secondary: "#8B8F96"
  divider: "#E2E4E7"
  destructive: "#F0445E"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 400, lineHeight: 19}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 8
rounded:
  control: 12
  card: 14
  sheet: 24
  pill: 999
components:
  search-field: {fill: "light gray", radius: 12, prominence: "primary discovery control"}
  listing-card: {fill: "white borderless", image: "large cover crop", radius: 12, gap: 8}
  commerce-action: {fill: "purple", text: "white semibold", radius: 12}
  utility-action: {fill: "black", text: "white semibold", radius: 12}
  marketplace-navigation: {fill: "white", inactive: "gray", selected: "cyan", center: "publish action"}
---

# Overview

Avito is a photo-led marketplace on an overwhelmingly white field. Search is a primary visual control, dense two-column listing grids put real photography above bold prices, and cyan marks discovery and selected navigation. Purple is reserved for purchase, cart, and delivery commitments; black advances form and filter tasks. Rounded multicolor illustrations appear in spacious empty, login, promotional, and success states without displacing listing evidence.

# Non-negotiable visual invariants

- Keep white as the continuous marketplace canvas and light gray for fields or grouped utility surfaces.
- Make search visually primary on discovery screens through width, placement, and pale rounded fill.
- Let real listing photography occupy the largest content mass in search and detail contexts.
- Preserve dense two-column grids with compact gaps, bold price-first hierarchy, and borderless cards.
- Use cyan for discovery links and selected navigation, purple for commerce commitments, and black for utility/form progression.
- Keep the persistent bottom bar white with gray inactive items, cyan selection, and a distinct central publish action.
- Use chips extensively for filters, tags, attributes, and segmentation while keeping them compact.
- Give empty and success states generous white space and a centered authored illustration or decisive action.

# Color and surfaces

White dominates pages, cards, and navigation. Pale neutral gray fills search, form fields, grouped checkout/profile panels, and selected utility areas. Listing cards are mostly borderless: separation comes from image crop, spacing, and type. Cyan is the platform/discovery accent and selected navigation color; purple owns purchase and delivery actions; black carries high-commitment utility CTAs on filters and creation forms.

Near-black is used for prices, titles, and decisions; medium gray for location, seller, delivery, and other metadata. Green indicates success or progress, pink-red discounts or destructive states, and yellow ratings or small promotional accents. Default iOS blue, uniformly applied to every CTA, would erase the observed distinction among discovery, commerce, and utility tasks.

# Typography

Typography is direct and scan-oriented. Major section headings use 22–26 point bold type; compact navigation titles use 17–18 point semibold; listing prices and key item titles use 14–18 point bold or semibold; metadata uses 12–13 point regular text. Price comes before descriptive metadata, and form headings remain stronger than helper copy.

Use SF Pro Display and SF Pro Text as the iOS-safe family. Preserve compact Cyrillic wrapping and clear numerals. Under Dynamic Type, allow item titles and metadata to wrap below images, grow listing cells vertically, and move trailing attributes onto a new line before reducing price prominence. Form pages should remain one column.

# Screen composition

Discovery screens begin below the top safe area with a full-width pale search field and compact filter, cart, or contextual icons. The main body is a vertically scrolling two-column grid with roughly 8–12 point gutters; images take most of each cell and text follows below. Detail screens lead with a large photo carousel, then price and object data, with sticky commerce actions near the bottom. Forms and filters become sparse, one-column white pages with fixed black actions.

Observed archetypes include a search-first home with horizontal category tiles; a photo-led two-column product grid; a detail page with large gallery and bottom purchase controls; a cart/checkout stack of light-gray summary cards; a long filter or listing-creation form with chips, selectors, keyboard, and fixed action; a profile dashboard with grouped metric cards; a message list; and centered empty or success compositions. Bottom navigation and sticky actions reserve the lower safe area rather than covering scroll content.

# Navigation appearance

The persistent bottom bar is white with simple gray icon-and-label items, cyan selected treatment, and a distinct center publish/action item. Search headers combine the wide gray search field with compact filter, cart, or back controls. Task-focused modal screens use small back or close buttons at the top and avoid a competing bottom tab bar. Sticky bottom CTAs remain visually separated from scrolling content by white space or a subtle divider.

# Components

The search field is broad, pale gray, and rounded, with compact iconography and dark query text. Listing cards are white and borderless: a rounded cover-crop image leads, followed by bold price, short title, and muted seller, location, rating, or delivery metadata. Favorite controls overlay the image without hiding the object.

Filter chips, attribute tags, radio rows, checkboxes, and segmented controls use compact 10–12 point radii and clear selected fills. Commerce buttons are purple with white semibold text; utility continuation buttons are black; cyan appears in links, selection, and neutral platform actions. Checkout and profile cards sit on pale-gray surfaces with about 14 points of padding. Disabled actions reduce contrast without changing geometry; pressed states deepen their existing semantic color.

# Imagery and icons

Real listing photography is essential evidence and must retain honest, readable cover crops in grids and larger contained galleries in detail views. Promotional banners are secondary and remain bounded. Functional icons are simple monochrome symbols or small colored badges. Separate authored illustrations use bright rounded forms, soft dimensional shading, and a controlled cyan-purple-green-pink-yellow palette in spacious empty, login, and success compositions. Neither photography nor illustration may be omitted when it carries the visible hierarchy.

# States

Observed selected cart items use clear checkboxes and maintain photo, price, and summary hierarchy. Empty cart and logged-out/profile states become spacious, centered compositions with illustration and concise action. Checkout uses stacked summaries, purple commitment controls, loading feedback, and a bright illustrated success state. Search suggestions retain the primary search field above keyboard results. Filters preserve selected chips, radios, and checkboxes. Populated message, profile, and product states maintain the same white canvas and compact type.

# iOS adaptation

Extend white through the safe areas and retain approximately 12-point outer gutters. Use vertical scrolling for grids, detail content, checkout, profile, messages, filters, and creation forms. Keep search visible near the top of discovery screens, and inset content for the persistent tab bar or sticky CTA. Keyboard avoidance must preserve the active form field and bottom action.

All favorite, filter, cart, chip, navigation, gallery, and CTA targets need at least 44 points. VoiceOver should announce each listing image description, price, title, then supporting metadata and actions. Dynamic Type should expand cells and move grid content vertically; on compact widths retain two columns only while text and targets remain usable, otherwise fall back to one column. Native permission transitions may remain native and should return to the same white context. Do not invent a dark appearance absent from the sampled style.

# Anti-generic checklist

- Do not replace the photo grid with a stack of generic white cards on gray.
- Do not make every action cyan; preserve cyan discovery, purple commerce, and black utility roles.
- Do not use an unstyled `TabView`; preserve gray inactive items, cyan selection, and the central publish action.
- Do not shrink, overcrop, blur, or substitute listing photography with decorative imagery.
- Do not put illustrations behind prices, filters, or form fields.
- Do not remove the dense price-first hierarchy or make all text the same size and weight.
- Do not replace compact chips and selectors with generic `Form` sections.
- Do not omit authored illustration from observed empty and success compositions.

</design-context>
