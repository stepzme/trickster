<design-context>
---
version: 1
platform: iOS
name: Wolt-design-analysis
description: "A bright image-led marketplace with white and pale-cool surfaces, decisive cyan actions, heavy rounded headings, dense photographic discovery shelves, compact metadata, outlined bottom navigation, and occasional high-saturation mascot illustration."
colors:
  canvas: "#F7F8F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF4F5"
  accent-primary: "#00C2E8"
  accent-secondary: "#F5A623"
  text-primary: "#202125"
  text-secondary: "#6A6D70"
  divider: "#D9E0E2"
  destructive: "#E74C58"
typography:
  hero: {fontFamily: "Avenir Next", fontSize: 36, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "Avenir Next", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "Avenir Next", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  photo-card: {fill: "surface-primary", radius: 18, image: "wide cover crop", metadata: "compact stacked"}
  primary-action: {fill: "accent-primary", radius: 14, text: "white semibold", height: 52}
  filter-chip: {fill: "surface-secondary", radius: 999, state: "cyan selected"}
  bottom-navigation: {fill: "surface-primary", icons: "thin outline", selected: "cyan"}
  bottom-sheet: {fill: "surface-primary", radiusTop: 28, backdrop: "dimmed"}
---

# Overview

Wolt is a bright, commerce-focused interface in which food and product photography supplies most of the visual mass. Crisp white and pale-cool surfaces keep dense catalogs legible, while cyan actions, heavy rounded headings, pill controls, and compact metadata provide a friendly recognizable frame. The interface alternates between abundant photographic discovery, focused single-column forms, full-screen maps, and occasional authored mascot scenes.

# Non-negotiable visual invariants

- White or very pale cool gray remains the dominant canvas, with cyan reserved for decisive actions, active states, badges, and selected outlines.
- Real food, product, venue, or category photography occupies the leading area of discovery cards and cannot be replaced by text-only rows.
- Page and entity titles use heavy rounded display type with clear scale contrast over compact regular metadata.
- Discovery compositions combine horizontal shelves, wide promotional media, and vertical lists rather than a uniform stack of identical cards.
- Primary actions are broad cyan rounded rectangles or pills with white semibold labels and remain visually anchored near the relevant content.
- Bottom navigation uses a white surface, thin outlined icons, short labels, and a cyan active state.
- Sheets have large rounded top corners and dimmed backdrops; map screens use floating circular controls over full-screen map imagery.
- Authored mascot illustration stays bounded to onboarding, reward, address, or promotional moments and does not replace transactional photography.

# Color and surfaces

The base canvas is white to very pale cool gray around `#F7F8F8`. Cards are usually white with subtle separation from the canvas; utility fields and chips use a pale cyan-gray around `#EEF4F5`. Thin cool-gray dividers and restrained shadows separate dense content without turning every block into a floating panel.

Wolt cyan around `#00C2E8` is the primary action and selection color. It fills full-screen splash moments, broad call-to-action controls, active navigation, selected borders, delivery labels, and map actions. Orange is bounded to rewards or attention, green to confirmations and toggles, and red to destructive controls. Black may appear in payment-specific actions. Default iOS blue would weaken the reference because cyan is a structural brand signal, not a replaceable system tint.

# Typography

Use a rounded, sturdy iOS-safe sans such as Avenir Next for hero, title, and section roles, with SF Pro Text for compact body and metadata. Page or entity titles typically sit around 28-36 points heavy, section headings around 20-22 points bold, item labels around 15-17 points semibold, and fulfillment or price metadata around 11-14 points regular.

Hierarchy comes from large weight and scale jumps rather than decorative casing. Titles are usually left-aligned; metadata is concise and clustered close to the image or item it describes. Dynamic Type should expand rows and allow secondary lines to wrap while preserving the dominance of the page title, item name, price, and primary action.

# Screen composition

Discovery screens begin with a compact safe-area-aware location or action row, then alternate horizontal category tiles, wide media banners, photographic card rails, and vertical lists above a persistent bottom navigation bar. Screen gutters are roughly 16 points, gaps within rails 8-12 points, and major section gaps 24-32 points. Content scrolls vertically while individual shelves may scroll horizontally.

The catalog archetype uses image-first cards with a wide cover crop, followed by a bold name and two or three compact metadata lines. The entity-detail archetype opens with a full-bleed photographic header and floating circular controls, then transitions into a white information and product region. The transaction archetype becomes a focused single-column list or form with thin separators and a sticky bottom action. The map archetype lets map imagery fill the viewport and floats circular controls, a toast or sheet, and a bottom action above it.

Promotional and reward archetypes may center a high-saturation mascot or object scene in the upper half, followed by a short text block and action. These remain visually distinct from the everyday photographic catalog.

# Navigation appearance

The persistent bottom navigation is a white bar aligned to the lower safe area, using evenly spaced thin outlined symbols and short labels. The selected item changes to cyan; inactive items remain dark gray. It should be custom tinted and spaced rather than left as an unstyled `TabView`.

Top controls are compact and often circular, with pale fills or translucent white over photography and maps. Back, close, search, favorite, and overflow symbols use simple line treatment. Modal choices appear in white rounded-top sheets over dimmed content, while focused screens keep a broad primary action visually attached to the bottom safe area.

# Components

Photo cards use 16-18 point corners, edge-to-edge wide imagery, a white text region, a bold title, and tightly stacked gray metadata with small line icons or compact badges. Product rows keep image, name, price, and add or quantity affordance visually close. Promotional banners use wider image crops and may carry a small pill label.

Primary actions are approximately 50-54 points high, cyan-filled, white-labeled, and rounded 14 points or fully pill-shaped. Secondary actions and search fields use pale filled surfaces. Filter chips are compact pills, with selected state communicated by cyan fill, stroke, text, or checkmark. Selection rows use cyan outlines and checks; toggles use system-like green when observed.

Bottom sheets use a 28-point top radius, clear grouped rows, and dimmed context. Floating map and photographic-header buttons are circular with pale or translucent fills. Disabled rows reduce contrast but preserve geometry; destructive actions use red; payment-specific actions may use an opaque black button.

# Imagery and icons

Food, grocery, merchant, and category photography is central to the composition. Use generous cover crops for dishes and venues, cleaner contained crops for packaged products, and preserve the readable focal object rather than centering mechanically. Maps, store logos, and campaign banners are content-specific imagery, not parts of the reusable illustration system. These media regions cannot be omitted while final assets are pending; any temporary image must preserve their size, crop, and density.

Mascot and onboarding artwork uses a separate cheerful authored language documented in `illustrations.md`. It is secondary to photography and must not spread into dense product rows, forms, or checkout surfaces. Interface icons use simple thin outlines, compact filled state markers, and consistent circular containers where controls overlay imagery.

# States

Observed states include a cyan splash, blank white loading with a spinner, selected and unselected plan, payment, or address rows, active cyan tab, favorite heart, green toggle, red removal action, black payment action, delivery or pickup segment selection, compact promotional and availability badges, dimmed modal sheets, and muted disabled rows. Photographic hierarchy, white surfaces, rounded type, and cyan selection remain consistent across states.

# iOS adaptation

Respect the status bar, bottom safe area, keyboard, and home indicator on all screen archetypes. Use vertical scroll containers for discovery and forms, horizontal scroll containers for shelves, sticky safe-area insets for transaction actions, and sheet detents or equivalent geometry for modal choices. Full-screen maps and photo headers may extend behind chrome while all controls retain safe-area clearance.

Give chips, add controls, floating icons, tabs, and sheet rows at least 44-point hit regions even when their visible shapes are smaller. VoiceOver should follow the visible reading order from title through cards or rows to sticky action and navigation. On compact widths, reduce the number of partially visible cards before shrinking text or touch targets. Dynamic Type should grow rows and allow metadata wrapping; imagery keeps stable aspect ratios to prevent layout movement. Preserve the light authored appearance unless the approved product explicitly defines a dark variant.

# Anti-generic checklist

- Do not replace Wolt cyan with default iOS blue or distribute it decoratively across every surface.
- Do not turn discovery into a uniform vertical stack of generic white SwiftUI cards.
- Do not omit food, product, venue, map, or promotional imagery where it is the dominant content layer.
- Do not substitute illustrations for real catalog photography or use mascot art inside dense transactional rows.
- Do not use one type size and weight for titles, item names, prices, and metadata.
- Do not leave `TabView`, buttons, search fields, chips, or sheets at their default appearance.
- Do not apply the same radius and elevation to photo cards, pills, sheets, fields, and floating controls.
- Do not copy the reference product's destinations or transaction sequence into the adapted product.

</design-context>
