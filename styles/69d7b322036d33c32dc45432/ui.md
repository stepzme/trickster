<design-context>
---
version: 1
platform: iOS
name: Yandex-Realty-design-analysis
description: "A white, photo-led real-estate marketplace style with Yandex yellow action bands, black price hierarchy, soft gray search and filter controls, rounded media cards, map overlays, compact property facts, and occasional pastel authored objects used as supporting accents."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F5F7"
  surface-tertiary: "#ECEEF2"
  accent-primary: "#FFD400"
  accent-primary-pressed: "#E7BE00"
  accent-blue: "#168EEC"
  accent-red: "#E8344E"
  accent-green: "#24945A"
  accent-purple: "#8F37FF"
  text-primary: "#171719"
  text-secondary: "#686B70"
  text-tertiary: "#A5A8AE"
  divider: "#E1E3E7"
  overlay: "#171719"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 31}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  price: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
  micro: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 14}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 12
  control-gap: 8
  row-gap: 10
rounded:
  control: 12
  card: 14
  media: 10
  sheet: 24
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.control}", height: 56}
  secondary-action: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.control}", height: 48}
  dark-action: {backgroundColor: "{colors.overlay}", textColor: "{colors.canvas}", typography: "{typography.label}", rounded: "{rounded.control}", height: 52}
  search-field: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.caption}", rounded: "{rounded.control}", height: 44}
  filter-chip: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.caption}", rounded: "{rounded.control}", height: 36}
  listing-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.card}", padding: 0}
  bottom-navigation: {backgroundColor: "{colors.surface-primary}", activeColor: "{colors.accent-primary}", inactiveColor: "{colors.text-tertiary}", height: 58}
---

# Overview

Yandex Realty is defined by a clean white marketplace shell, strong black pricing, compact property metadata, and large real-estate photography. The app does not look like a generic grouped SwiftUI form: it feels like a dense listings product with lightweight Yandex character supplied by yellow actions, rounded gray controls, small colored badges, and occasional soft 3D service objects.

# Non-negotiable visual invariants

- Keep real property photography, floor plans, and maps as the dominant imagery on marketplace and detail screens.
- Use Yandex yellow only for primary actions, active bottom navigation, and a few brand moments; do not flood the page with yellow panels.
- Preserve bold black price and room/area facts above secondary gray location metadata.
- Keep search and filter controls as compact gray rounded controls attached to the top of listing feeds.
- Use a white canvas with pale gray modules; avoid heavy borders, dark page backgrounds, or card stacks that obscure the feed.
- Keep bottom call/contact actions large, sticky-looking, and clear of the home indicator.
- Use compact badges over images for status such as new build, 3D tour, rent service, discount, demand, and saved/search context.
- Use pastel authored objects only as supporting service/promotional accents, never as substitutes for listing media.

# Color and surfaces

The base canvas is pure white. Search fields, neutral buttons, chips, disabled fields, and grouped form inputs use very light gray fills from `#F4F5F7` to `#ECEEF2`; dividers are thin and low contrast.

Yandex yellow `#FFD400` is the primary action color for call, rent, save-search, show-results, and active tab treatments. Text on yellow remains near-black. Pressed yellow should darken slightly instead of becoming orange.

Near-black `#171719` carries prices, section headings, selected chips, and dark confirmation buttons. Secondary metadata uses medium gray, while unavailable placeholders and inactive navigation use lighter gray. Blue is reserved for selected input chips, map-current controls, and small utility links. Red appears in favorites, notification dots, and negative/status markers. Green is used for favorable changes and transit/location signals when visible.

Surfaces are mostly flush with the page. Use soft shadows sparingly on large choice tiles and onboarding/posting selection cards; listing cards rely more on media mass and spacing than on shadow. Bottom sheets and floating map/action controls remain white with subtle elevation.

# Typography

Use SF Pro as the implementation baseline, with a compact Yandex-like grotesk only when it is already available in the app. Do not depend on an unavailable brand font.

Hierarchy is weight-driven and numeric. Prices and primary facts use 20-22 pt semibold/bold text with tabular numerals. Page titles and section titles sit at 21-26 pt bold. Body copy is compact, usually 14-15 pt, with captions at 11-12 pt for metro, address, footnotes, and labels.

Russian and numeric strings must remain tightly aligned. Preserve unit notation, ruble signs, room counts, area values, mortgage percentages, and "per month" qualifiers. Let supporting address lines wrap before reducing the prominence of price, primary facts, or the main action.

Buttons use semibold 14-15 pt labels. Filter chips use smaller 12-13 pt labels with compact horizontal padding. Avoid exaggerated display type except on sparse onboarding/posting screens.

# Screen composition

Use 16 pt horizontal gutters on standard content screens. Listing feeds place a compact search bar at the top, a horizontal filter-chip row directly below it, then a vertical photo-led feed. The first visual mass in a listing row is a large media crop, followed by price, micro facts, address/transit metadata, and actions.

Home uses a high-density service grid: a centered region selector, a wide search/assistant card, two-column shortcut tiles with authored objects, a full-width post listing action, then horizontal property carousels. Keep tiles around 150-170 pt wide on compact iPhones with rounded pale backgrounds and small labels under or beside the object.

Detail pages use a large image or media carousel at the top, transparent overlaid controls, then a white information sheet with price, compact fact columns, map preview, address, property facts, amenities, and a sticky yellow contact action at the bottom. New-build detail keeps chip rows, promo panels, mortgage modules, master-plan media, and 3D tour cards in the same white scrolling rhythm.

Posting and filter screens are sparse compared with listing feeds. They use a top close/back control, a bold title, large rounded selection tiles or plain form rows, and one strong bottom action. Map-based address selection uses a full-screen map with a bottom input/control slab.

Maintain an 8 pt internal rhythm, 12 pt between related controls, 16 pt section insets, and 24 pt between major sections. Avoid nested card-in-card layouts.

# Navigation appearance

Navigation is visually iOS-native but styled: white bars, black glyphs/text, compact back or close controls, and thin bottom dividers when needed. Bottom navigation is white, five-icon, and low-chrome; the active item is yellow while inactive items are gray. Notification dots use red.

Search/feed screens keep top controls visually pinned to the content edge. Detail screens can place controls over imagery using white or translucent icons. Map screens use floating white rounded controls over the map. This section specifies only appearance, not product navigation or task flow.

# Components

Primary action buttons are full-width or half-width yellow rounded rectangles, 48-56 pt high, with centered near-black semibold labels. Paired action rows use yellow for the most important action and light gray for the secondary action. Dark confirmation buttons appear on map/address and modal-like decisions.

Filter chips are compact rounded rectangles in pale gray. Selected chips can invert to dark fill or use blue accent depending on the local screen, but must remain compact and horizontally scannable.

Listing cards combine large rounded media, overlaid badges, favorite and overflow icons, bold price, fact line, address/transit metadata, and optional contact buttons. Do not wrap every listing in a heavy bordered card.

Forms use pale gray rounded fields, segmented chips, and simple rows with right-aligned muted values. Toggle rows are thin, white, and list-like. Long forms keep a sticky yellow bottom "show results" or continuation action.

Promotional and service tiles use pale surfaces, soft shadows, authored objects, and concise bold labels. Keep the illustration small-to-medium and never larger than the content purpose.

Maps use muted cartographic colors, red location pins, blue current-location markers, and floating white controls. Full-screen immersive media such as 3D tours should be image/video-first with minimal overlay chrome.

# Imagery and icons

Real listing photos must retain room/building context and should not be darkened, blurred, or replaced by generic stock imagery. Use cover crops for apartment/building photos with stable rounded rectangles; use contain behavior for floor plans and master-plan content.

On-image badges are small rounded white or colored capsules. Favorite hearts and overflow controls float at image edges without large containers unless contrast requires a light circular backing.

Authored service art appears as soft 3D or flat pastel objects on white or pale tiles. It is supporting imagery, not the primary content system. When final raster assets are pending, keep the same placement, scale, approximate palette, and whitespace.

Use simple outline icons for list rows and controls. If SF Symbols are used for implementation, customize weight, size, fill, and color so they match the observed compact icon style.

# States

Observed states include onboarding splash/permission prompt, saved-search prompt, selected filters, disabled/unfilled posting fields, active tabs, map selection, favorite/unread markers, empty or promotional service cards, sticky contact actions, and system permission overlays.

Disabled fields use low-contrast gray text and pale gray fill, not opacity on the whole screen. Selected segmented chips use saturated blue or dark fill. Modal/system permission dimming keeps the underlying Yandex screen visible but subdued.

# iOS adaptation

Use vertical `ScrollView`/`List` only when the visual styling remains custom; default grouped `Form` styling is too generic. Reserve the bottom safe area for sticky actions or bottom navigation. Controls must preserve at least 44 pt touch targets even when their visual pill is smaller.

Respect Dynamic Type by wrapping secondary metadata and promotion copy before shrinking price, primary facts, or action labels. Keep VoiceOver order aligned with the visual hierarchy: media context, price/title, key facts, location, actions.

Keyboard and iOS permission alerts may be native, but the return state must keep the same Yandex surfaces and action styling. Support compact iPhone heights by reducing secondary promo content first, not by removing media, price, or contact actions.

# Anti-generic checklist

- Do not replace Yandex yellow with default iOS blue for primary actions.
- Do not turn listing feeds into uniform white cards with heavy borders.
- Do not crop out meaningful room, facade, map, or floor-plan context.
- Do not omit real listing imagery while waiting for final assets.
- Do not use default `Form`, unstyled `TabView`, or system list rows for filters/posting screens.
- Do not make every radius identical; controls, media, sheets, and service tiles have distinct curvature.
- Do not replace authored objects with emoji, arbitrary SF Symbols, or flat placeholder shapes.
- Do not introduce marketing-page heroes, web nav, hover states, or desktop breakpoints.

</design-context>
