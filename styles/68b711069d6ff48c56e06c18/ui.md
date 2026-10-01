<design-context>
---
version: 1
platform: iOS
name: Safari-design-analysis
description: "A content-first native iOS interface with white and grouped-gray surfaces, translucent bottom browser chrome, a compact address pill, system typography, blue text actions, rounded sheets, divider-led lists, and contextual website imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#007AFF"
  accent-secondary: "#34C759"
  text-primary: "#111214"
  text-secondary: "#6C6C70"
  divider: "#DADCE0"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 700, lineHeight: 26}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  address-pill: {fill: "translucent light material", height: 36, radius: 12, controls: "compact inline"}
  browser-toolbar: {fill: "translucent material", height: 50, icons: "system blue or gray"}
  modal-sheet: {fill: "surface-secondary", radiusTop: 24, backdrop: "dimmed or blurred"}
  compact-row: {fill: "surface-primary", height: 46, divider: "hairline", trailing: "chevron or control"}
  favorite-tile: {imageSize: 52, label: "small centered caption", fill: "transparent"}
---

# Overview

Safari is a restrained browser shell whose own interface remains subordinate to webpage content. White and grouped-light-gray surfaces, translucent bottom chrome, familiar system icons, and blue text actions form the authored UI. Sheets, lists, tabs, and customization panels reuse native iOS geometry and typography; contextual websites, favicons, and thumbnails supply imagery rather than an app-wide decorative layer.

# Non-negotiable visual invariants

- Web or primary content remains the largest visual field; browser chrome occupies compact top or bottom safe-area regions.
- Bottom controls use translucent material and a centered rounded address/search pill rather than an opaque heavy tab bar.
- White and grouped light gray dominate authored surfaces; blue is reserved for actions, selection, and completion.
- Modal interactions use rounded bottom sheets with a dimmed or blurred underlying page and safe-area padding.
- Lists remain compact, full-width, icon-led, and separated by thin dividers with chevrons or trailing controls.
- Typography is neutral SF Pro with hierarchy created by size and weight rather than decorative faces.
- Selected state appears through blue tint, checkmarks, segmented highlights, green switches, or red destructive labels.
- Contextual imagery may vary with content, but recurring authored characters or illustrative scenes must not be invented.

# Color and surfaces

The dominant authored fields are white and grouped gray around `#F2F2F7`, with slightly darker inactive materials and fine separators. Toolbars and the address pill use a translucent light material that allows page color or blur to remain perceptible. Some webpage content is black or highly colored, but it is not part of the browser shell palette.

System blue around `#007AFF` identifies text actions, active icons, checkmarks, and selected affordances. Green around `#34C759` belongs to enabled toggles; red marks destructive menu actions. Primary text is near-black, supporting copy medium gray. Do not spread semantic green or red decoratively, and do not replace material translucency with flat branded color blocks.

# Typography

Use SF Pro Display and SF Pro Text. Start-page section headings are approximately 20-21 points bold, sheet titles around 17 points semibold, body and row labels 15-17 points regular, explanations 13-15 points gray, and labels beneath favorite icons 11-12 points. Toolbar actions remain compact and regular rather than bold.

Text is generally left-aligned in content lists and centered in sheet navigation bars. Dynamic Type should increase row and sheet height, wrap descriptions, and keep blue actions distinct without allowing titles to collide with Cancel, Done, or Edit controls.

# Screen composition

Full-height screens preserve the top status bar and reserve the bottom safe area for a translucent toolbar and address pill. The webpage or start-page content scrolls behind or above this chrome. The address pill is approximately 34-38 points high, horizontally inset, and contains compact leading and trailing affordances.

The start-page archetype uses white or a soft pastel background, bold section headings, grids of 48-56 point favorite icons with small centered labels, and grouped customization content. The sheet archetype rises from the bottom with large top corners, a compact centered title, blue edge actions, and full-width rows. The tab-overview archetype places rounded page previews over a blurred pastel wash and uses a compact bottom control row. Share surfaces use rounded grouped panels, a horizontal row of 44-52 point app icons, and 44-48 point action rows.

Utility lists rely on dividers and grouped-gray containers rather than individually elevated cards. Underlying content remains visibly dimmed or blurred beneath overlays.

# Navigation appearance

The primary browser chrome is a bottom translucent toolbar with compact back, forward, share, bookmark, and tab symbols around a centered address/search pill. The pill may contain small leading text or privacy controls, a domain or placeholder, and compact microphone, reload, or close affordances.

Sheets use centered titles with blue Cancel, Done, Edit, or back labels at the edges. Tab overview uses a bottom bar with a plus action, centered tab-count/dropdown treatment, and Done. The adapted product takes screen structure from approved Research and Planning rather than copying browser destinations.

# Components

The address/search field is a 34-38 point translucent rounded rectangle with compact inline glyphs and gray placeholder or domain text. Toolbar icons use familiar system-weight line art with blue active and gray inactive states.

Favorite tiles pair a 48-56 point square icon with an 11-12 point centered label and no surrounding card. Share panels use rounded grouped containers, circular or rounded-square app icons, and divider-led rows with trailing line icons. Bookmark and privacy panels use compact segmented controls, full-width rows, and blue selection marks.

Customization groups are rounded light-gray blocks containing toggles, drag handles, and concise rows; selectable background thumbnails form a three-column square grid. Destructive context-menu actions use system red text while preserving otherwise neutral material styling.

# Imagery and icons

Imagery is contextual: website content, favicons, app icons, page previews, small background thumbnails, and occasional webpage artwork. It can occupy most of the viewport, but its style belongs to the current content rather than to a reusable Safari illustration system. Tab previews should preserve readable page silhouettes and rounded crops.

Icons are concise native line or filled symbols with familiar proportions. Do not insert branded illustrations between content and browser controls. When page thumbnails or favorite icons are compositionally required, retain their area and crop rather than substituting generic placeholders.

# States

Observed states include focused search with keyboard, suggestions prompt, loading page, loaded content with an overlay control, no-connection text, expanded share sheet, checked options, editable app list, bookmark hierarchy, tab grid with selected and close states, destructive context menu, segmented privacy selection, and customization toggles on and off. Neutral materials, blue actions, compact rows, and safe-area-aware bottom chrome remain stable.

# iOS adaptation

Use native safe-area insets for the status bar, keyboard, bottom toolbar, sheets, and home indicator. Web/content regions should scroll independently of persistent browser chrome. Sheets and grouped lists must scroll internally as Dynamic Type expands them. Preserve material effects using current iOS blur APIs while keeping contrast sufficient against unpredictable content.

All toolbar symbols, favorite tiles, sheet actions, segmented controls, and row affordances require at least 44-point hit areas even when glyphs are smaller. On compact widths, shorten nonessential labels before compressing the address pill or overlapping controls. VoiceOver order should follow visible content, address context, toolbar actions, then overlay or sheet content. Support system light/dark material adaptation only when the approved product requires it.

# Anti-generic checklist

- Do not replace translucent bottom chrome with a heavy opaque tab bar.
- Do not frame the main content inside a decorative card or shrink it behind oversized navigation.
- Do not replace compact divider-led lists with repeated floating cards or default `Form` spacing.
- Do not use a custom brand color where system blue, green, or red communicates state.
- Do not apply one radius to the address pill, sheets, tab previews, grouped panels, and thumbnails.
- Do not substitute arbitrary custom icons for familiar platform controls.
- Do not invent an illustration system from contextual webpage art or pastel background thumbnails.
- Do not ignore contrast changes caused by translucency over dark or colorful content.

</design-context>
