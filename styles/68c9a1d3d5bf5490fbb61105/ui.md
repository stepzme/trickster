<design-context>
---
version: 1
platform: iOS
name: Badoo-design-analysis
description: "A bright photo-led social interface with white high-whitespace canvases, bold black system typography, violet-to-purple gradient actions, immersive rounded portrait cards, a five-item icon tab bar, and restrained gray sheets and lists around the imagery."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F6"
  accent-primary: "#6C36F4"
  accent-secondary: "#A44CFF"
  text-primary: "#202124"
  text-secondary: "#777980"
  divider: "#DEDFE3"
  destructive: "#E74A5A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "violet-gradient", foreground: "#FFFFFF", shape: "pill"}
  secondary-action: {fill: "#F4F4F6", foreground: "#202124", shape: "circle-or-pill"}
  primary-card: {fill: "edge-to-edge-photo", foreground: "#FFFFFF", shape: "large-rounded-rectangle"}
  navigation: {fill: "#FFFFFF", inactive: "#A9ABB1", selected: "#6C36F4"}
---

# Overview

Badoo places photography and direct actions ahead of decorative chrome. Most interface surfaces are bright white with generous space, bold black titles, gray supporting text, and saturated violet or purple-gradient emphasis. Large face-centered photos dominate discovery and profile compositions, while lists, chat, settings, and forms stay quiet and system-like. The style is recognizable through the contrast between immersive human imagery, fully rounded actions, and a stable five-item icon tab bar.

# Non-negotiable visual invariants

- White occupies most application chrome, with high whitespace and dark bold titles rather than tinted page backgrounds.
- Violet-to-purple gradient is the recurring primary action and premium emphasis; system blue must not replace it.
- People photography is a dominant visual mass, presented as large rounded cards, immersive crops, circular portraits, or dense photo grids.
- Primary actions are wide pills or large circular controls with clear high-contrast labels or glyphs.
- The bottom bar contains five evenly spaced icon-and-label items with gray inactive states and a dark or violet selected state.
- Sheets and modal panels are white, strongly rounded at the top, and shown over dimmed or blurred underlying content.
- Secondary structure relies on pale gray fills and fine separators rather than shadows or heavy borders.
- Online, verification, selection, and destructive meaning pair color with a symbol or text, not color alone.

# Color and surfaces

White is the continuous base for browsing chrome, forms, chat, lists, and profile content. Pale cool gray separates fields, disabled controls, grouped rows, and secondary cards. The primary brand mass is a saturated violet-to-purple gradient used on calls to action, progress, premium areas, selected emphasis, and badges. Pink may appear in coaching or matching emphasis, green in activity or success, and red in destructive and warning actions. Black or near-black carries titles and names; medium gray carries descriptions, timestamps, placeholders, and inactive navigation. Dim black overlays and blurred photos establish modal focus. Generic iOS blue, beige backgrounds, multicolor dashboard palettes, or glass materials would visibly dilute this system.

# Typography

Typography is a conventional SF Pro hierarchy with strong weight contrast: large bold screen or state titles, semibold names and section labels, regular body and message text, and compact gray metadata. Text over photography remains minimal and high contrast, usually supported by a scrim rather than decorative display styling. Buttons use medium or semibold labels centered in pills. Numeric progress and counts remain compact. Dynamic Type should expand form rows, list items, and messages vertically while preserving the clear title-name-body-caption sequence; text over photos may move below the image before becoming unreadably small.

# Screen composition

Photo-led archetypes devote most of the viewport to one large rounded portrait card or a grid of circular and rounded portraits. Sparse top icon controls sit inside the safe area, decision controls cluster near the lower edge of the image, and the five-item tab bar anchors the bottom. Profile archetypes use a large photo region followed by vertically scrolling white content, chips, prompts, and actions. List and chat archetypes use compact navigation above a continuous single-column surface, with circular avatars leading rows and pale separators or message bubbles providing rhythm.

Onboarding and form archetypes use one bold prompt in the upper portion, one focused field or option group in the middle, and a wide violet pill near the lower safe area. Premium and progress archetypes concentrate stronger purple fields, circular feature marks, or comparison rows inside the otherwise white frame. Empty states leave a large centered gap for one simple symbol and short copy. Bottom sheets rise over dimmed content and retain generous internal spacing rather than filling the viewport with nested cards.

# Navigation appearance

The primary navigation is a white five-item bottom tab bar with simple line icons, small labels, gray inactive states, and a dark or violet selected state; small violet dots may mark attention. Top bars are minimal, usually white, with compact black or gray icons, a simple back chevron or close control, and restrained titles. Full-screen overlays may suppress the tab bar and use a close affordance. Bottom sheets have a white surface, large top corners, and optional drag handle. Selected segmented controls, filters, or radios use violet emphasis while preserving native compact geometry.

# Components

The primary CTA is a wide violet or violet-gradient pill with white semibold text and no shadow. Secondary choices use outlined or pale pills with dark labels; selected variants gain violet border, fill, or mark. Photo cards use large corner radii, full-bleed `cover` crops, face-safe framing, and restrained dark scrims for overlaid labels. Decision controls are large circular buttons with crisp glyphs and ample separation. Chat bubbles are compact rounded shapes, while the composer is a fixed pale field with small media and send controls. Filters and settings use sliders, radios, switches, checkbox rows, and grouped list geometry. Premium surfaces use stronger purple blocks, circular feature icons, and aligned checkmark rows.

# Imagery and icons

Member photography is compositionally essential and cannot be omitted while awaiting final assets. Use `cover` crops with faces protected, circular crops for avatars, and blur only where privacy, obscured access, or background atmosphere is visibly required. Icons are simple, mostly outlined, and visually lighter than the photos. Empty, permission, coaching, premium, and safety screens contain occasional branded glyphs or spot art, but the inspected examples do not establish one reusable authored illustration system. Do not substitute generated character scenes for the photo-led hierarchy or treat the isolated spot assets as a general illustration mandate.

# States

Observed states include sparse onboarding questions, empty and populated photo discovery, selected filters, dimmed sheets, match overlay, chat list and messages with keyboard, copied or edited message menus, profile progress, verification guidance, photo placeholders and errors, premium comparison, activity markers, settings selections, and safety or support content. White canvas, violet primary emphasis, rounded controls, bold type, and photo prominence remain stable. Disabled controls shift toward pale gray, selected states gain violet, activity gains green, and destructive states use red with explicit wording or symbols.

# iOS adaptation

Respect top and bottom safe areas while allowing large photography to approach screen edges. Use vertical scrolling for profiles, settings, forms, chat, and comparison content; keep the five-item tab bar fixed above the home indicator when present. On compact widths, retain one dominant portrait card and reduce surrounding gaps before shrinking action targets; grids may reduce columns to preserve recognizable faces. Keep all pill, circular, tab, list, and composer targets at least 44 points. VoiceOver should announce person imagery meaningfully, then visible name/status, then actions; never encode online, verified, matched, or destructive status by color alone. Allow Dynamic Type to grow sheets and rows. The sampled system is light-first; dark overlays and photo scrims do not establish a full dark appearance.

# Anti-generic checklist

- Do not replace the violet gradient with default blue buttons or a generic accent color.
- Do not reduce people photography to small decorative thumbnails inside uniform white cards.
- Do not use an unstyled `TabView`; preserve five equal items, muted inactive states, and violet/dark selection.
- Do not apply one radius to photo cards, pills, circles, sheets, and message bubbles.
- Do not fill high-whitespace screens with mood copy, decorative cards, or unrelated illustrations.
- Do not add heavy shadows, glass panels, or gradients to ordinary lists and forms.
- Do not blur portraits unless the state visibly requires privacy or obscured access.
- Do not let premium styling overwhelm ordinary photo, chat, or safety surfaces.

</design-context>
