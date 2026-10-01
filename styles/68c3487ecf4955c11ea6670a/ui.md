<design-context>
---
version: 1
platform: iOS
name: Tips-design-analysis
description: "A calm Apple-native editorial interface with white and pale grouped-gray reading surfaces, bold black system titles, blue navigation actions, saturated gradient category bands, and centered real-device screenshots as the primary instructional imagery."
colors:
  canvas: "#F2F2F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9E9EE"
  accent-primary: "#007AFF"
  accent-secondary: "#AF52DE"
  text-primary: "#111113"
  text-secondary: "#6E6E73"
  divider: "#D1D1D6"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 20
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#007AFF", foreground: "#FFFFFF", shape: "pill"}
  secondary-action: {fill: "transparent", foreground: "#007AFF", shape: "text-or-symbol"}
  primary-card: {fill: "multicolor-gradient", foreground: "#FFFFFF", shape: "large-rounded-rectangle"}
  navigation: {fill: "#FFFFFF", foreground: "#111113", actionColor: "#007AFF"}
---

# Overview

Tips combines restrained native iOS chrome with concentrated moments of color and evidence-led instructional imagery. Browsing surfaces are pale gray or white, with large black titles, inset lists, and blue actions. Category screens are recognizable by a broad rounded gradient band with one simple white glyph, while reading screens become almost entirely white and center a large, crisp iPhone screenshot above concise copy. The screenshots, not decorative cards or prose, carry most of the visual weight.

# Non-negotiable visual invariants

- Functional browsing and reading surfaces are white or very pale grouped gray, with system blue reserved for navigation, actions, and selected bookmarks.
- Top-level titles are large, bold, black, and left aligned with generous safe-area breathing room.
- Category identity is expressed by one saturated multicolor gradient band occupying roughly the upper third, paired with a single high-contrast white glyph.
- Instructional pages center a real iPhone UI screenshot or device mockup as the dominant middle content; this imagery cannot be omitted.
- List rows combine a small rounded screenshot thumbnail, semibold title, gray preview copy, and trailing disclosure mark.
- Search retains native iOS geometry, cancel treatment, keyboard, and empty/result states rather than becoming a custom filter panel.
- Detail navigation is compact and white, with blue back/action controls and a bookmark state that changes fill or color without moving.
- Surfaces remain flat and quiet; depth comes from grouping, crop, and device framing rather than shadows or glass.

# Color and surfaces

White is the primary reading surface, while cool grouped gray separates the main collection canvas, search controls, and inset lists. System blue is the consistent interaction color. Saturated purple, mint, blue-green, orange-yellow, and pink gradients are confined to large category headers and occasional feature imagery; they do not tint the entire application. Black and near-black carry titles and instructional text, medium gray carries summaries and placeholders, and pale separators structure dense lists. Green, orange, or red may appear when the adapting product needs semantic success, warning, or destructive meaning, but the observed category gradients must not be reused as status colors. Beige dashboards, pervasive gradients, dark chrome, or elevated white cards would break the reference.

# Typography

The hierarchy follows SF Pro: large bold display titles, 20-point-class section headings, semibold 17-point row titles, regular body copy, and smaller gray summaries. Large titles align to the leading content edge; article titles and copy may center beneath a device screenshot. Row descriptions use compact multiline or truncated treatment without approaching the title weight. Blue pill labels and navigation actions remain compact and semibold. With Dynamic Type, body copy and rows should expand vertically, descriptions may wrap, and screenshots should move rather than compress the type hierarchy; the large title must remain visibly distinct from section and row text.

# Screen composition

Collection-style screens begin below the status area with a large title and rounded search field, followed by a wide feature or category surface and then vertically stacked grouped content. Horizontal insets are typically 16–20 points. Category archetypes use a gradient header across most of the width and approximately the upper third, followed by white rows that continue into a scroll view. Reading archetypes use a compact navigation bar, a large centered device screenshot in the upper-middle, a short title and body block below, then a blue pill action and small page indicators near the lower content edge. The art and text form one vertical reading column rather than side-by-side cards.

Search screens preserve the same pale canvas but let the native search bar and keyboard define the upper and lower bounds; results remain list rows, while no-results states leave a large empty center. Document-like modal screens use a white full-height surface with a compact toolbar and continuous text or table rows. Loading is represented by a small centered spinner rather than a skeleton card stack.

# Navigation appearance

Browsing surfaces use a large-title treatment on pale or white backgrounds. Detail surfaces switch to a compact white bar with a blue back affordance, centered title, and a trailing bookmark or action symbol. The selected bookmark changes fill/color while retaining its size and position. List rows use restrained gray chevrons. A document-like modal may use a compact toolbar with blue text actions and native back/forward symbols. No persistent bottom tab bar is visible, and navigation should not be replaced with a custom floating pill.

# Components

The category hero is a large rounded rectangle with a smooth saturated gradient, generous internal clear space, and one simple white glyph; it is not a text-heavy marketing card. The characteristic list row uses a white surface, a small rounded screenshot thumbnail, a leading text stack, and a trailing disclosure mark, separated by subtle hairlines or grouped spacing. Search uses a pale-gray rounded field with magnifier, placeholder, clear control, and blue Cancel action when active. Primary actions are compact blue pills with white semibold labels. Page indicators are small neutral dots with a clearly darker selected dot. Bookmark controls use familiar line/fill states in a stable touch target. Native keyboards, spinners, and toolbar controls retain their standard geometry.

# Imagery and icons

Real iPhone screenshots and device mockups are compositionally essential: they are large enough to inspect, centered, shown with contained crop, and paired directly with the instruction they demonstrate. Row thumbnails repeat the same screenshot language at smaller scale. Category headers use simple white system-like glyphs over gradients, not complex scenes. Device frames remain crisp and proportional; important UI must not be cropped away or obscured by overlays. The reference does not establish a reusable authored illustration system across states, so do not invent characters, editorial drawings, or stock imagery as a substitute for the observed screenshots.

# States

Observed states include an unscrolled and scrolled collection surface, focused search with keyboard, populated results, empty search, category headers, paged instructional content, saved and unsaved bookmark controls, centered loading, and document-like modal content. White/pale canvases, SF typography, blue actions, and native spacing remain stable. Search and bookmark state changes are localized to the relevant control. Empty results use quiet space and restrained text rather than a large illustration or promotional action.

# iOS adaptation

Respect safe areas for large titles and compact navigation bars, and place long collections, articles, and document content in vertical scroll containers. Use native search and keyboard transitions where they reproduce the observed geometry. Scale device screenshots with `aspectFit`, preserving the full relevant UI and leaving enough width for recognition; never crop them merely to keep text above the fold. At compact widths, retain the single-column sequence of image, title, body, action, and page indicator. Keep rows and icon controls at least 44 points, order VoiceOver from title through primary image description to instruction and action, and provide meaningful accessibility labels for screenshots and bookmark state. Dynamic Type may extend the page vertically. The sampled screens show light appearance only; do not infer a dark palette.

# Anti-generic checklist

- Do not replace the large gradient category band with a small icon tile or generic white card.
- Do not omit, blur, or aggressively crop the instructional device screenshots.
- Do not apply gradients to every panel, action, or list row.
- Do not turn the reading experience into a dashboard of equal cards.
- Do not replace the observed compact navigation with an unstyled `TabView` or floating custom bar.
- Do not scatter arbitrary SF Symbols where screenshot thumbnails or the single category glyph carry the hierarchy.
- Do not fill empty search states with decorative illustration, mood copy, or secondary calls to action.
- Do not add glass materials, heavy shadows, or uniform oversized radii to native rows and controls.

</design-context>
