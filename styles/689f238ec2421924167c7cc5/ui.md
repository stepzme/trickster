<design-context>
---
version: 1
platform: iOS
name: Anytime-design-analysis
description: "A map-first car-sharing interface with pale colorful cartography, vivid aqua actions, white circular floating controls, deep rounded vehicle sheets, sparse registration surfaces, and realistic vehicle and document imagery."
colors:
  canvas: "#E8E5E2"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F4F3"
  accent-primary: "#36DEBC"
  accent-secondary: "#83D5E8"
  text-primary: "#111111"
  text-secondary: "#737A78"
  divider: "#DFE4E2"
  destructive: "#E65D56"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 34}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 21}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "accent-primary", height: 52, radius: 12, text: "text-primary semibold"}
  secondary-action: {fill: "surface-primary", border: "accent-primary", height: 50, radius: 12}
  vehicle-sheet: {fill: "surface-primary", radiusTop: 28, imageRole: "overlapping vehicle cutout"}
  map-control: {fill: "surface-primary", size: 44, radius: 999, shadow: "soft"}
  confirmation-modal: {fill: "surface-primary", radius: 16, backdrop: "dimmed", actions: "stacked"}
---

# Overview

Anytime is visually governed by full-bleed pale cartography rather than by conventional app chrome. White circular controls and large white bottom sheets float over cyan water, mint land, and light-gray roads, while vivid aqua identifies primary actions and status. Registration and support surfaces become much sparser, using white or lightly textured fields, compact system-like type, conversational cards, and bottom-pinned actions. Real vehicle, document, and camera imagery carries the visual evidence; illustration is incidental.

# Non-negotiable visual invariants

- Operational screens preserve a full-viewport map as the dominant color field, with controls layered above rather than placed in a heavy navigation bar.
- Aqua around `#36DEBC` remains the repeated action and active-status color across buttons, top chrome, icons, and progress.
- Map controls are independent white circles approximately 40-44 points across with dark glyphs and soft shadow.
- Dense vehicle information sits in a white bottom sheet with large top corners and clear home-indicator padding.
- Primary actions are nearly full-width, bottom-biased aqua rectangles approximately 48-56 points high with moderate corners.
- Vehicle imagery is realistic and prominent, often overlapping the upper edge of a sheet rather than sitting inside a small thumbnail.
- Confirmation uses a centered white rounded modal over a clearly dimmed underlying screen, with two vertically stacked choices.
- Registration remains sparse and conversational, using white assistant cards, pale-green reply bubbles, wide margins, and restrained supporting copy.

# Color and surfaces

The operational canvas is the map itself: pale cyan water around `#83D5E8`, mint-green land around `#98E8B4`, and light gray-beige roads around `#E8E5E2`. White creates high-contrast floating controls, sheets, drawers, and centered modals. Vivid aqua from approximately `#31DDBB` to `#43E6C4` is the single brand action color; pale gray indicates disabled controls or nested fields.

Primary text is near-black, with muted gray for range, instructions, and secondary data. Dividers are light and sparse. Dark translucent scrims separate centered modals or drawers from the map. Map colors remain geographic context and must not be reused arbitrarily as action colors. Default iOS blue would visibly conflict with the aqua action system.

# Typography

Use SF Pro as the iOS-safe approximation. The hierarchy is modest: 20-22 point semibold or bold titles, 18 point section headings, 15-17 point medium or semibold button labels, 13-15 point regular body copy, and 11-13 point map-card metadata. Some drawer or support labels appear uppercase or nearly all caps at approximately 14-16 points. The heavy rounded wordmark remains artwork rather than live UI text.

Most content is left-aligned, with centered treatment reserved for focused prompts and modal titles. Keep technical identifiers compact and visually grouped with nearby vehicle metadata. Dynamic Type should grow registration cards, drawer rows, and sheet height while maintaining a clear step down from title to body and caption.

# Screen composition

Map archetypes extend beneath most of the viewport while respecting readable controls inside the status and home-indicator safe areas. Circular controls form a vertical edge stack with roughly 12 point gaps. A white sheet rises from the bottom, uses about 16 point internal padding, and can place a realistic vehicle cutout across its top boundary. Compact metadata, horizontal option cards, and one or more wide actions stack below.

Registration archetypes use white or subtly textured backgrounds, wide side margins, a centered wordmark or compact top bar, generous empty space, and a bottom-pinned action above the home indicator. Conversational variants stack small white assistant cards and pale-green reply bubbles rather than forming a conventional form. Drawer archetypes cover most of the left side with white while leaving a narrow strip of the map visible. Confirmation archetypes place a moderate-width white modal in the center of a darkened map or sheet. Camera archetypes are black full-screen capture surfaces with low shutter, accept, and cancel controls.

The map should remain visibly open; do not permanently cover most of it with dense panels. Supporting content scrolls inside sheets, drawers, or registration surfaces rather than moving the map canvas itself.

# Navigation appearance

Navigation chrome is light and context-specific. Map screens use a floating white circular menu control near the upper edge plus a vertical group of circular map controls. A left-side white drawer overlays most of the map but leaves the opposite edge visible. Registration and support may use a solid aqua top bar with a compact title and simple back glyph.

Bottom sheets communicate depth through large rounded top corners and soft shadow rather than a standard tab bar. Centered modals use a dark scrim and stacked actions. The adapted product must derive destinations and screen structure from approved Research and Planning rather than copying the reference application's drawer contents.

# Components

Primary actions are nearly full-width aqua rounded rectangles 48-56 points high with dark medium or semibold text. Secondary actions use a white fill, aqua outline, and matching label. Disabled actions become solid light gray with subdued text while preserving size.

Map controls are 40-44 point white circles with dark glyphs and shallow shadow. Vehicle sheets are white with approximately 28-point top corners; a realistic vehicle image can overlap the top edge, followed by compact metadata rows, horizontally arranged option cards, and stacked actions. Status banners are compact white rounded rectangles floating above the map.

Confirmation modals are centered white rectangles with roughly 16 point corners, a strong title, concise body, and two full-width stacked choices. Registration/support messages are small white cards with subtle shadow and restrained corner radius, paired with pale-green response bubbles. Camera controls remain high-contrast and circular against a black capture field.

# Imagery and icons

Realistic or photographic vehicles are the principal object imagery. They appear as cutouts over maps or sheets and must preserve recognizable silhouette, color, and branding-like detail without being reduced to generic symbols. Onboarding may combine real mobility photography with a thin aqua route-line doodle and small transport/location icons. Document upload uses real example document imagery, camera previews, and evidence-like photographs.

Functional icons are simple dark glyphs inside white circles or aqua chrome. A single grayscale instructional figure was observed, but it does not define a reusable illustration system. Compositionally important vehicle, document, and camera imagery cannot be omitted while assets are pending; placeholders must retain their size, crop, and realistic visual weight.

# States

Observed states include gray disabled and aqua enabled actions, keyboard-open registration, outlined secondary controls, centered confirmation modal with dim scrim, expanded bottom sheet, active-rental status banner, loading support chat, empty/help chat, camera capture and retake confirmation, and completed-trip rating with yellow stars. Across these states, aqua action emphasis, white floating surfaces, black type, and safe-area spacing remain stable.

# iOS adaptation

Keep maps full-bleed while placing controls within current top and bottom safe areas. Circular buttons require at least 44-point hit regions and must avoid the Dynamic Island, status bar, sheet edge, and each other. Use scrollable sheet content and detents that retain visible map context; low actions require home-indicator padding. Camera and keyboard transitions should use native system behavior.

On compact widths, stack horizontal sheet actions and option cards before shrinking type or touch regions. Vehicle cutouts may scale down but must remain the visual anchor at the sheet boundary. Dynamic Type may increase modal, message, row, and sheet heights; allow scrolling rather than clipping. VoiceOver order should move from floating/top controls through map summary and sheet content to low actions. Preserve the observed light/map appearance unless the approved product defines an alternate dark state.

# Anti-generic checklist

- Do not replace the map-first composition with a generic white dashboard or stack of cards.
- Do not use default blue tint for primary actions, progress, icons, or top chrome.
- Do not place map controls inside a conventional navigation toolbar; preserve their independent circular form.
- Do not cover the map permanently with an oversized sheet when spatial context is compositionally important.
- Do not turn sparse conversational registration into default `Form` sections.
- Do not replace realistic vehicle, document, or camera imagery with arbitrary SF Symbols or SwiftUI shape drawings.
- Do not use one uniform corner radius for circular controls, message cards, bottom sheets, actions, and centered modals.
- Do not reuse cyan water or mint map colors as competing primary action fills.

</design-context>
