<design-context>
---
version: 1
platform: iOS
name: For-Profi-design-analysis
description: "A compact professional marketplace built on a very pale lavender-gray canvas, dense white information cards, black pill actions, text-first hierarchy, a five-item tab bar, restrained status color, and secondary maps, portfolio photos, and story artwork."
colors:
  canvas: "#F8F7FF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EFF7"
  accent-primary: "#17171B"
  accent-secondary: "#25B993"
  text-primary: "#18191D"
  text-secondary: "#777B83"
  divider: "#E4E3EA"
  destructive: "#D85762"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "near-black", text: "white semibold", height: 50, radius: 999}
  information-card: {fill: "white", padding: 14, radius: 16, content: "dense title, value, metadata, status"}
  search-filter: {fill: "white or pale lavender", height: 44, radius: 12, icon: "compact monochrome"}
  navigation: {fill: "white", selected: "black icon and label", unselected: "muted gray"}
---

# Overview

For Profi is a light, text-first professional marketplace. A very pale lavender-gray field supports dense white information cards, compact filters, list rows, and forms. Black headings and near-black pill actions carry the strongest hierarchy, while teal, yellow, red, and green appear only in small status or financial accents. Maps, profile photography, portfolio thumbnails, and illustrated story tiles add context but remain secondary to structured text and values.

# Non-negotiable visual invariants

- A very pale lavender-gray canvas fills the viewport; white cards and rows provide the main content surface with little shadow.
- Dense information cards prioritize title, key value, scope, timing, location, or state through type and spacing rather than decorative imagery.
- Near-black is both the primary text color and the fill of high-priority pill actions.
- The bottom bar contains five compact icon-and-label items on white, with a dark selected state and muted inactive items.
- Search, filters, segmented controls, and map/list selectors stay compact and visually close to the content they affect.
- Teal, yellow, green, and red remain small semantic marks; none becomes a competing page-level color field.
- Real maps, profile photos, and portfolio thumbnails preserve their content role and are not replaced with generic illustrations.
- Sheets and modal panels use large top corners over a dimmed current context, while ordinary cards keep a smaller radius.

# Color and surfaces

The canvas is a cool, almost white lavender-gray. Primary white surfaces form information cards, grouped rows, fields, and tab navigation. A slightly deeper lavender-gray separates controls, empty areas, and secondary groupings. Thin gray dividers organize dense content without boxing every row.

Near-black carries titles, values, selected navigation, and decisive actions. Medium gray carries metadata, helper text, placeholders, and inactive icons. Teal or green marks positive, online, discounted, or selected financial state; yellow draws limited attention to rating, balance, or status; red is reserved for complaints, destructive actions, and critical badges. Default iOS blue, saturated gradient backgrounds, and colorful cards for every state would break the reference.

# Typography

Use SF Pro Display for page and section headings and SF Pro Text for dense cards, forms, rows, and metadata. Page titles sit around 26–34 points, section headings around 20–22, card titles and values around 15–17, body text around 14–16, and metadata around 11–13. Bold weight identifies the card subject and key value; secondary facts remain regular and gray.

Content is primarily left-aligned, while navigation titles and some empty states are centered. Currency and count values use tabular figures. Dense cards may contain several facts, but each is separated by spacing and weight rather than multiple typefaces. With Dynamic Type, metadata groups stack, card heights expand, and trailing values move below their labels before text is truncated.

# Screen composition

Screens generally use 16-point edge insets, 8–12 point gaps between compact controls, 14 points inside cards, and about 20–24 points between major groups. The lavender-gray canvas extends through the top safe area. Long lists, profiles, forms, and portfolios scroll vertically; the five-item tab bar or a single lower action reserves the bottom safe area.

Observed archetypes include:

- Dense feed composition: compact selector, story or promo rail, search and filter controls, then a one-column stack of white information cards with limited vertical gaps.
- Map composition: map tiles dominate the viewport, with compact floating search, filter, zoom, location, and segmented controls layered above or below.
- Detail composition: centered or leading navigation title, dense black text blocks and values, grouped white sections, contextual status, and one prominent black action.
- Chat and list composition: compact rows use avatar or icon, title, preview or metadata, badge, and timestamp; empty states open more vertical space around a simple glyph.
- Profile composition: profile photo and primary identity lead, followed by white grouped cards, statistics, settings rows, and optional portfolio thumbnails.
- Form composition: pale rectangular fields with explicit labels, segmented or selection controls, native keyboard, and a wide black lower action.
- Modal composition: rounded white bottom sheet or centered panel over a dimmed version of the current list, map, or profile context.

# Navigation appearance

The primary bottom bar is white and contains five evenly spaced icon-and-label items. The selected destination uses near-black icon and text; inactive items are muted gray. Detail screens use centered black titles, a simple leading back chevron, and compact trailing close, menu, or text controls. Segmented list/map and content tabs use restrained white or pale fills with a clearly dark selected label. Bottom sheets have large top corners and a subtle drag indicator when present.

# Components

- Primary action: approximately 50–52 points tall, full or near-full width, near-black fill, pill or high-radius geometry, and centered white semibold label. Disabled state becomes gray.
- Information card: white fill, 14–16 point radius, 14-point padding, black title or value, compact gray metadata, and optional small semantic badge. Cards use little or no shadow.
- Search field: at least 44 points tall, white or pale-lavender fill, 12–14 point radius, leading search icon, gray placeholder, and optional trailing clear or filter control.
- Filter or segment: compact rectangular or pill control with white/pale fill, thin border or tonal separation, and stronger black selected label.
- Dense row: compact leading icon or avatar, black label, gray secondary information, and trailing chevron, value, switch, badge, or checkmark. Dividers align with the text column.
- Portfolio tile: real user image or screenshot in a rounded crop, arranged in a compact grid or collection surface with clear selection state.
- Map control: small white circular or rounded-square button with monochrome icon and enough shadow or border to remain visible over map tiles.

# Imagery and icons

Imagery is functional and mixed. Profile photography identifies a person; portfolio tiles show uploaded work or screenshots; real map tiles fill location-oriented surfaces; story and promotional tiles use small one-off artworks. Empty states may use a simple gray image glyph or black line drawing. This evidence does not establish one reusable authored illustration system.

Keep photographs and portfolio work recognizable, use circular crops for avatars, and preserve map legibility under floating controls. Utility icons are simple monochrome line or filled glyphs, with small semantic color only when needed. Do not replace real content imagery with decorative drawings. If final photos or thumbnails are unavailable, placeholders must preserve the documented scale, crop, and compositional weight.

# States

Observed states include selected and inactive bottom tabs, list/map selection, empty chat, location permission sheet, selected portfolio image, disabled gray text or action, notification badges, dimmed modal backgrounds, bottom sheets, toast feedback, selected payment rows, and keyboard-open forms. These states preserve the pale canvas, white surfaces, black hierarchy, and compact component geometry.

Positive state uses teal or green, attention uses yellow, and destructive state uses red. Empty states reduce density but do not change the design language. Selected photos gain a clear checkmark or overlay. Modal focus dims the underlying screen while leaving its structure visible.

# iOS adaptation

Extend the lavender-gray canvas or real map through the safe areas and reserve the lower inset for the five-item tab bar or documented action. Use vertical scroll containers for feeds, profiles, forms, and portfolios. Floating map controls must avoid the status bar, bottom bar, and home indicator.

All filters, tabs, icon buttons, rows, portfolio selections, and map controls need at least 44-point targets. VoiceOver should announce a card's title, primary value, status, metadata, and action in that order. Preserve native keyboard, photo picker, location permission, map, and sheet presentations. With Dynamic Type or compact widths, stack metadata and multi-column thumbnails before shrinking type. The sampled source is light-first; do not invent a dark theme without a consuming-product requirement.

# Anti-generic checklist

- Do not replace the pale lavender canvas with a standard grouped gray background.
- Do not turn every dense row into an oversized airy card.
- Do not use default blue tint for primary actions; decisive controls are near-black.
- Do not let story art or promotional tiles dominate the text-first hierarchy.
- Do not ship an unstyled `TabView`; preserve the five-item white bar and dark selected state.
- Do not replace maps, profile photos, or portfolio content with arbitrary SF Symbols.
- Do not give information cards, fields, pills, sheets, and map controls one uniform radius.
- Do not hide key values and states inside secondary disclosure text.

</design-context>
