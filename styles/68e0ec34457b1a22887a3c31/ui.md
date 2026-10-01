<design-context>
---
version: 1
platform: iOS
name: List.am-design-analysis
description: "A bright, photo-led marketplace interface with white and pale-gray fields, compact black type, saturated blue controls, dense two-column browsing, restrained rounded geometry, and occasional promotional or service imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F3F3F6"
  accent-primary: "#168AF1"
  accent-secondary: "#00C968"
  text-primary: "#17171B"
  text-secondary: "#74747C"
  divider: "#E3E3E7"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}", minHeight: 48}
  contact-action: {backgroundColor: "{colors.accent-secondary}", textColor: "{colors.surface-primary}", cornerRadius: "{rounded.control}", minHeight: 48}
  listing-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.card}", padding: 0}
  filter-chip: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", cornerRadius: "{rounded.pill}", minHeight: 36}
  choice-sheet: {backgroundColor: "{colors.surface-primary}", cornerRadius: "{rounded.sheet}", padding: 20}
  navigation: {backgroundColor: "{colors.surface-primary}", selectedColor: "{colors.accent-primary}", unselectedColor: "{colors.text-secondary}"}
---

# Overview

List.am is visually led by dense marketplace photography on a clean white canvas. Compact price-and-title clusters, pale-gray controls, saturated blue actions, and restrained rounded containers keep a large amount of content legible without making the interface feel like a generic stack of cards. Promotional art appears as a secondary interruption rather than the main visual field.

# Non-negotiable visual invariants

- Browsing surfaces remain predominantly white, with pale gray reserved for fields, grouped rows, and selected control backgrounds.
- Product photography is the primary visual mass and listing results commonly form a tight two-column grid.
- Price is the strongest text inside each listing cluster, followed by a compact title and subdued metadata.
- Saturated blue consistently marks selection, progress, primary actions, and active navigation; green is limited to direct positive contact actions.
- Search, filters, badges, and sheets use compact rounded geometry, while ordinary content stays flat and lightly separated.
- Detail compositions begin with a large edge-to-edge or near-edge photo region and end with persistent contact actions above the safe area.
- Modal choices appear in a rounded bottom sheet over a dimmed background, with a visible grab handle and generous row height.

# Color and surfaces

The canvas and most content surfaces are white. Very light neutral gray distinguishes search fields, form groups, filter controls, and grouped settings without introducing heavy borders. Thin cool-gray dividers separate dense rows. Saturated blue is the unmistakable interaction color and occupies full button fills as well as small selected symbols and badges. Green is a narrower secondary accent for positive contact actions. Near-black text carries price and titles; medium gray carries location, time, attributes, and helper text. Red is reserved for destructive or removal affordances. A generic iOS blue combined with default grouped-form gray would weaken the specific bright-blue/near-white contrast and compact marketplace density.

# Typography

Use SF Pro Display and SF Pro Text. Page titles are approximately 22–24 points in bold or semibold; section headings sit around 17–18 points; listing price, title, and form labels occupy the 13–16 point range; metadata is about 11–13 points in gray. The hierarchy relies on weight and proximity more than dramatic scale. Prices and major decisions use bold figures with stable tabular alignment where values compare. Text is predominantly left aligned and sentence case. Under Dynamic Type, allow listing titles and metadata to wrap, but preserve the visual order of photo, price, title, and secondary details rather than collapsing all text to equal size.

# Screen composition

The repeated structure is a compact top control region, a scrollable content field, and either a light bottom navigation bar or anchored action area. Horizontal insets are commonly around 12–16 points and gaps inside dense card grids are about 8–12 points.

Browsing archetypes combine a search or title bar, horizontal chips or compact category items, occasional promotional tiles, and a two-column photo grid. Result variants may exchange the grid for dense horizontal rows or a map with small price bubbles and a floating view switch. Detail archetypes devote the upper region to a large photo carousel, then stack title, price, location, attributes, seller information, and related photo cards; the contact bar remains visually anchored at the bottom. Form archetypes use a single vertical column of grouped fields, selectors, uploaded-photo thumbnails, and a full-width progress action. Account archetypes place icon-and-label rows inside pale grouped areas. Empty or gated compositions trade the dense grid for a centered service illustration, concise text, and one clear action.

# Navigation appearance

Top bars are visually minimal: white background, compact back control, a short title or rounded search field, and small outline actions on the right. The bottom bar is white or lightly translucent with evenly spaced outline symbols; the selected item is blue and inactive items are muted gray. A central creation control may receive stronger blue emphasis, but it remains aligned to the bar rather than becoming an unrelated floating ornament. Sheets rise from the bottom with a dim overlay, large top corners, a short grab handle, and flat list rows.

# Components

Listing cards are flat image-first clusters: a rounded near-square crop, overlaid favorite control, bold price, compact title, and one or two gray metadata lines. Promotional tiles pair a pastel rounded field with one large contained visual and very little copy. Search fields are pale-gray rounded rectangles with a leading symbol and compact placeholder. Filter chips are short pills, filled pale gray by default and blue-tinted when selected. Primary buttons are full-width blue fills with white semibold labels; direct contact can use a green fill beside a blue action. Form selectors are white or pale grouped rows with trailing disclosure marks. Photo-upload grids use real thumbnails with small destructive badges. Disabled actions lose saturation but retain their geometry. Choice sheets use a white panel, large title, separated rows, and blue selection or action marks.

# Imagery and icons

Real listing photography dominates browsing and detail screens. Grid images are close to square and aspect-fill; detail galleries use a wider, larger crop and must preserve a clear focal subject. Merchant marks and category symbols remain small supporting identifiers. Promotional imagery is contained within pastel rounded tiles and should not be confused with seller photography. A limited service-illustration language appears in verification and empty/gated states; its scale and negative space are compositionally important and cannot be omitted while assets are pending. Functional icons are compact, mostly outline-based, and visually consistent in stroke weight; avoid mixing arbitrary filled SF Symbols into the same control row.

# States

Populated grids preserve the photo-price-title hierarchy. Promoted, urgent, or verified content adds small colored badges without recoloring the whole card. Selected filters use a stronger blue or blue-tinted fill while unselected controls remain neutral. Form progress moves from desaturated disabled actions to saturated blue and shows uploaded images as real thumbnails. Empty and account-gated states retain the white canvas but replace dense content with centered illustration, short text, and one action. Modal choice, confirmation, loading, and destructive states preserve the rounded sheet geometry and dim overlay. A supported dark appearance may invert grouped surfaces and text, but must retain the same density, blue selection logic, and content hierarchy.

# iOS adaptation

Place scrolling grids, forms, and details inside safe-area-aware containers; allow only large image regions or dim overlays to extend beneath bars. Keep sticky contact and progress actions above the home indicator. Use lazy grids for two-column results and switch to a compact single-column row only when Dynamic Type makes price/title clusters unreadable. Present selectors as native-behaving sheets with the documented custom surface and radius. Keyboard presentation must keep the active form field and anchored action reachable. Maintain at least 44-point hit regions around favorites, chips, back controls, tab items, and small overlay buttons. VoiceOver order should follow image description, price, title, metadata, then actions. Do not force two columns when accessibility sizes require a row layout.

# Anti-generic checklist

- Do not replace the photo-dense two-column result field with uniform full-width white cards.
- Do not use `Form` as the visible styling for posting or settings groups.
- Do not apply default system blue indiscriminately; preserve the brighter reference blue and the separate green contact role.
- Do not give every section the same corner radius, fill, and shadow.
- Do not use an unstyled `TabView` with arbitrary mixed-weight SF Symbols.
- Do not remove the large gallery, promotional visual, or service illustration and leave text-only empty space.
- Do not add heavy shadows or borders around ordinary listing clusters.
- Do not enlarge metadata until it competes with price and title.

</design-context>
