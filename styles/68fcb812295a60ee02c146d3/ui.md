<design-context>
---
version: 1
platform: iOS
name: Otello-design-analysis
description: "A white accommodation interface framed by neon-green actions and deep teal brand moments, with large photographic search heroes, softly raised rounded cards, dense hotel imagery, compact dark type, map price pills, a lightweight five-item tab bar, and isolated glossy 3D state objects."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F2"
  accent-primary: "#67E82F"
  accent-secondary: "#173C43"
  text-primary: "#17191B"
  text-secondary: "#696C71"
  divider: "#E3E6E1"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 26
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#67E82F", text: "#142112", height: 52, radius: 14}
  property-card: {fill: "#FFFFFF", radius: 18, imageRatio: "4:3"}
  search-panel: {fill: "#FFFFFF", radius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", selected: "#173C43", unselected: "#989C9F"}
---

# Overview

Otello combines a predominantly white accommodation interface with a high-contrast neon-green action system and deep teal brand moments. A large destination photograph and overlapping white search panel dominate the opening composition; hotel listings and detail screens remain photography-led. Rounded white cards, soft shadows, black rating and toggle treatments, and compact gray metadata keep dense travel information legible. Small glossy 3D objects appear only in launch, loading, empty, and loyalty-like states, while the persistent five-item tab bar stays visually light.

# Non-negotiable visual invariants

- Reserve neon green for primary actions, search submission, selected utility controls, favorable values, and concentrated brand moments.
- Keep functional screens mostly white or warm off-white, with broad rounded cards and only subtle shadow or divider contrast.
- Make real accommodation and destination photography the dominant imagery in search, listing, and detail compositions.
- Preserve the large white rounded search panel that overlaps or follows a photographic upper region and ends in a green action.
- Use a lightweight fixed five-item bottom bar with simple glyphs, tiny labels, and a dark or brand-accented selected state.
- Present filters and secondary choices in large-radius white bottom sheets with pill chips and a sticky primary action.
- Use isolated glossy 3D objects in generous whitespace for loading, empty, utility, and loyalty-like states rather than inside inventory cards.
- Keep map mode readable through compact price pills, floating round controls, and a high-contrast green/dark map-list switch.

# Color and surfaces

White is the continuous functional canvas and primary card surface. Warm light gray (`#F4F5F2`) groups inactive fields, chips, empty panels, and secondary sections. Neon green (`#67E82F`) is the only dominant action accent; it carries search, booking, selected utilities, and strong savings signals. Deep teal (`#173C43`) anchors the wordmark, full-screen brand states, dark toggles, and occasional selected controls. Primary text is near-black, metadata is medium gray, and dividers remain faint.

Launch alternates between a full deep-teal field with a green key mark and a full neon-green field with a dark wordmark. Elsewhere, large color comes from travel photography, maps, or a focused green action rather than green page backgrounds. Destructive feedback uses explicit red; warning can use a restrained amber. Default iOS blue, heavy gray grouped backgrounds, and multiple competing bright accents would break the system.

# Typography

Large page and destination titles use bold SF Pro Display at roughly 28–34 points. Section headings are about 20–22 points; hotel names, booking labels, and prices use 14–17 point semibold text; metadata, dates, locations, review counts, and tab labels sit between 10 and 13 points. Price and rating numerals should use tabular figures where alignment matters. Text is mostly left aligned, with centered type reserved for empty, loading, and focused confirmation states.

Use SF Pro Display and SF Pro Text as the iOS-safe families. Dynamic Type should expand card height, wrap location and booking details, and preserve price/action hierarchy. Reduce rail density or image width before clipping names or totals. Copy should identify place, date, price, condition, state, or action; do not add travel slogans or mood text that repeats what the photograph and search context already communicate.

# Screen composition

Horizontal gutters are typically 16 points. On the primary discovery composition, a photographic banner occupies roughly the upper third, a wide white search panel overlaps its lower edge, horizontal destination chips follow, and promotional or property blocks fill the scrollable middle above the five-item bottom bar. Listing and booking screens use a denser one-column stack. Cards are nearly full width with 10–14 point internal gaps and 20–28 point separation between major sections.

Observed visual archetypes include:

- **Photo-led discovery:** large destination image, overlapping white search panel, horizontal chips, promotional blocks, and property rails above the fixed tab bar.
- **Search or listing:** compact top query context and filter chips, then vertically stacked photo-first property cards with rating, review, price, and condition data aligned beneath or beside the image.
- **Map results:** map fills most of the viewport; white or dark price pills, small image clusters, round zoom/location controls, and a green/dark floating map-list switch layer above it.
- **Property detail:** photo gallery dominates the upper region, followed by title, rating and location, compact facility or condition rows, room cards, and a lower booking action.
- **Booking and payment form:** plain white vertical groups, clear section titles, broad rounded inputs or choice rows, price summary, and a sticky neon-green action above the safe area.
- **Filter or selection sheet:** dimmed underlying screen with a tall white large-radius sheet, chips, segments, slider or choice rows, and a lower green action.
- **Empty, loading, or sign-in state:** large white field, one centered glossy 3D object or concise brand mark, short necessary copy, and one clear action.
- **Profile or settings:** sparse white grouped rows, subtle separators, small utility icons, and straightforward state/value alignment.

Use vertical scrolling for long lists and forms; keep map and fixed bottom regions safe-area aware rather than covering content.

# Navigation appearance

The bottom bar is white, full width, and visually light, with five evenly spaced simple glyphs and very small labels. Inactive items are gray; the selected item becomes dark or gains a concentrated brand accent. It is not a floating glass pill and does not require a heavy top border. Its appearance is reusable, but its original destinations are not.

Top bars use a simple bold title with compact back, close, or utility controls. Filters, date/guest selection, and other focused choices use white bottom sheets with about 28-point top corners and a dimmed backdrop. Segments and pill chips use gray or white fills, with dark or green selected states. Avoid default blue back buttons, oversized circular navigation controls, and unstyled system tab icons.

# Components

- **Primary action:** approximately 52 points high, neon-green fill, dark semibold label, 14-point radius, and a slightly deeper green pressed state. Disabled state becomes a muted neutral rather than another bright color.
- **Search panel:** wide white surface with 20-point radius, 16-point padding, compact labeled rows or input areas, and a clearly separated green submit control. It may overlap a hero image and uses restrained shadow.
- **Property card:** wide white 18-point-radius card led by a 4:3 accommodation photo, followed by dark title, black rating badge, gray review/location data, and aligned price or savings information.
- **Filter chip:** compact capsule with light neutral fill or border, short dark label, and a dark/green selected treatment. Maintain a 44-point tap target even if the visible chip is smaller.
- **Map price pin:** small white or dark pill with bold compact price, high map contrast, and a selected state that uses green or stronger dark fill.
- **Floating map control:** circular white control with subtle shadow and a simple dark glyph; primary map/list switch combines dark and neon-green for stronger emphasis.
- **Choice row:** full-width white or pale-neutral row with concise labels, supporting value, and trailing chevron, radio, or check.
- **Bottom sheet:** white surface with large top corners, compact header, vertically grouped controls, and a sticky green action clear of the home indicator.

# Imagery and icons

Accommodation and destination photography is essential. Use bright, clean landscape crops that preserve interiors, facades, beds, pools, or location cues; do not replace them with illustration or generic travel symbols. Map imagery remains functional and must retain label and pin legibility. Temporary photography must preserve the documented scale, aspect, crop, density, and visual weight so composition can be approved before final assets arrive.

Glossy 3D state objects are a separate, smaller image system: green keys, hearts, luggage, and soft abstract forms appear centered in white or brand-colored space. Follow `illustrations.md` when that role is required. Operational icons remain simple and mostly monochrome; green is applied selectively to actionable or selected states rather than every symbol.

# States

Observed states include alternating brand splash screens, photo-led home, search with keyboard, loading with a 3D key, map and list results, filter sheet, no-results state, saved-items empty state, sign-in prompt, populated property detail, booking and payment entry, processing, reservation detail, profile, settings, and support/cancellation content. White surfaces, compact dark typography, neon-green primary actions, rounded geometry, and photography remain stable throughout.

Loading and empty states use one isolated object and concise text instead of a stack of explanatory cards. Focused forms keep native keyboard behavior within custom rounded fields. Processing uses restrained progress rather than a new palette. Do not claim an observed dark appearance or invent system permission, error, and success art beyond the captured roles.

# iOS adaptation

Extend white or the active brand splash color through the safe areas. Use vertical scroll containers for discovery, listings, detail, and forms; horizontal lazy stacks for genuine destination or property rails; and a dedicated map container for map states. Keep the bottom bar and sticky green actions above the home indicator. When the keyboard appears, scroll the active field and its validation into view without hiding the price summary or final action.

All chips, icon buttons, pins, and navigation items need at least 44-point hit targets. VoiceOver should announce property name, rating, location, price, cancellation condition, and action in a useful order; group visual metadata without merging distinct actions. Dynamic Type should expand rows and sheets, wrap supporting labels, and reduce rail density before truncating essential facts. Compact widths retain 16-point gutters and image aspect ratios. The observed application is light outside brand splash screens; do not claim a separate dark theme.

# Anti-generic checklist

- Do not replace neon green with default blue or spread green across every card and page background.
- Do not omit the large photo/search composition or reduce accommodation photography to tiny icons.
- Do not ship an unstyled `TabView`, generic `Form`, default grouped lists, or blue selection controls.
- Do not add heavy shadows, thick borders, or identical corner radii to every surface.
- Do not replace map price pills and floating controls with generic annotation pins.
- Do not use glossy 3D objects inside hotel inventory cards or as a substitute for real property photography.
- Do not recreate branded state objects with SwiftUI shapes, SF Symbols, emoji, or code-drawn gradients.
- Do not add decorative travel copy that duplicates place, search, price, or booking context.

</design-context>
