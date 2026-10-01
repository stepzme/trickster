<design-context>
---
version: 1
platform: iOS
name: Yandex-Books-design-analysis
description: "A white reading-first library where colorful uncropped book covers create the visual rhythm, compact grotesk headings and near-black pill actions frame discovery, a three-item outline tab bar anchors browsing, and the reader shifts to large serif text with almost all chrome removed."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F3"
  accent-primary: "#1F1F21"
  accent-secondary: "#FF6B52"
  text-primary: "#1F1F21"
  text-secondary: "#68686C"
  divider: "#DDDDDF"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#1F1F21", foreground: "#FFFFFF", shape: "pill"}
  secondary-action: {fill: "#F2F2F3", foreground: "#1F1F21", shape: "pill-or-row"}
  primary-card: {fill: "book-cover-art", foreground: "content-dependent", shape: "portrait-rectangle"}
  navigation: {fill: "#FFFFFF", inactive: "#A2A2A7", selected: "#1F1F21"}
---

# Overview

Yandex Books keeps its application shell almost monochrome so publication covers and long-form text carry the experience. White dominates discovery, profile, settings, and reading surfaces; near-black pills and compact bold headings establish action hierarchy; pale gray chips and rows provide quiet structure. Browsing screens are visually rhythmic because portrait covers repeat in horizontal rails, while reading screens strip the interface down to a large serif text page and minimal edge controls.

# Non-negotiable visual invariants

- White is the dominant canvas, with very light gray grouping and sparse dividers rather than elevated card stacks.
- Primary actions are near-black fully rounded pills with white labels; default platform blue is not the visual anchor.
- Book covers retain portrait proportions, complete typography, and high color fidelity, forming the main visual richness of browsing screens.
- Horizontal cover rails and centered featured covers use partial neighboring content or open space to signal continuation.
- Application headings use a compact bold grotesk, while long-form reader content switches to a clearly book-like serif with generous leading.
- A white three-item bottom bar uses thin outline icons and small labels with understated dark selection.
- Reader screens make text the dominant mass and reduce top and bottom chrome to narrow controls or transient sheets.
- Modal actions use white rounded bottom sheets, drag handles, and line-icon rows over a dimmed page.

# Color and surfaces

White fills the library, catalog, detail, profile, settings, and default reader surfaces. Very light gray separates chips, search fields, list groups, empty-state panels, and secondary actions. Near-black is used for titles, primary controls, selected navigation, and key values. Medium gray carries authors, metadata, progress labels, placeholders, and inactive icons. The publication covers supply most saturated colors. Coral-orange appears in the launch identity, while isolated dark navy and bright blue may occur inside a promotional card; these do not define the general canvas. Red remains destructive, green can mark completion or availability, and amber can mark achievements. Default blue actions, tinted page backgrounds, or cover-colored gradients across the shell would break the reference.

# Typography

The application shell uses a neutral grotesk with bold 28–36-point page titles, semibold 20-point section headings, compact 14–17-point labels and metadata, and small gray captions. An iOS-safe implementation should use SF Pro for shell typography when the original face is unavailable. The reader changes to a readable serif such as New York, Charter, Georgia, or Literata, with adjustable size and generous line height. Book titles may wrap to two lines while authors and metadata remain quieter. Dynamic Type should grow list rows, book detail copy, and settings vertically; reader type scaling must preserve comfortable measure and leading rather than compressing the page.

# Screen composition

Browsing archetypes begin with a large or compact title and optional chips, followed by vertically stacked sections containing horizontal portrait-cover rails. Covers are shown at consistent aspect ratios with title and author beneath or alongside them; featured content may center one larger cover with partial neighbors. Detail archetypes center a prominent cover in the upper portion, then use aligned title, author, metadata, and one or more black pill actions before recommendations continue in a scroll view. Profile and settings archetypes use continuous white list rows with sparse separators and trailing chevrons or values.

Reader archetypes devote nearly the whole viewport to a single serif text column inside comfortable side insets. Top and bottom controls remain narrow and may disappear, while selection overlays, highlight colors, and compact action menus attach directly to text. Audiobook archetypes center cover art with generous breathing room and place transport, progress, and speed controls below; a mini-player may stack immediately above the bottom bar. Bottom sheets and share panels rise over dimmed content without nesting multiple cards.

# Navigation appearance

The primary browsing shell uses a white three-item bottom tab bar with thin outline icons, small labels, gray inactive states, and a darker selected state. When audio is active, a compact mini-player strip may sit directly above it. Top bars use back chevrons, close icons, compact centered or leading titles, kebab menus, checkmarks, and share actions in near-black. Reader controls are deliberately quieter and may collapse to edge chrome. Sheets use white fill, large upper corners, a short grab handle, and vertically aligned icon-and-text rows.

# Components

The primary CTA is a near-black pill with a white medium or semibold label; secondary actions use pale-gray pills or text rows. Book-cover cards preserve the publication rectangle, use minimal or no surrounding border, and place compact text nearby. Filter chips are small rounded pills with restrained selected fill. Settings rows use white backgrounds, thin dividers, leading labels, and trailing chevrons, checks, switches, or values. Bottom action menus use consistent line icons, left-aligned labels, large row targets, and no ornamental cards. The audio player uses a large central play/pause control with smaller transport and speed controls around a clear progress track.

# Imagery and icons

Book covers are compositionally indispensable and must never be replaced by generic placeholders when evaluating this style. Use `aspectFit`, preserve all cover typography and edges, avoid stretching, and do not crop publication artwork into landscape marketing cards. Author avatars, when present, are circular; player artwork remains centered and proportional. Shell icons are simple monochrome line glyphs. The coral launch mark, gift/promo objects, kids symbol, achievement decoration, and empty-state graphic are isolated assets rather than a repeated authored illustration system across ordinary states. Do not extrapolate them into a new character or scene language.

# States

Observed states include launch and loading, authentication input, populated catalog rails, filters and search, centered book detail, reading and page loading, text selection with colored highlights, notes and action sheets, share panels, mini-player and full audiobook controls, empty support or kids surfaces, profile and settings lists, achievements, theme and icon selections, PIN keypad, and destructive confirmations. White canvas, near-black actions, compact headings, cover proportions, and rounded sheets remain stable. Progress is understated through small bars, checks, labels, and spinners rather than large status cards.

# iOS adaptation

Place catalogs, details, settings, and long lists in vertical scroll containers while keeping horizontal cover rails independently scrollable. Respect safe areas for top bars, mini-player, three-item tab bar, player controls, and bottom sheets. Preserve cover aspect ratios across compact widths; reduce the number of visible covers and reveal partial neighbors rather than shrinking titles below legibility. Keep rows, chips, covers, transport controls, and sheet actions at least 44 points. Reader width should stay narrow enough for comfortable line length, with user-selected type and Dynamic Type allowed to reflow vertically. VoiceOver order should announce section, cover title and author, progress, then action. The sampled product is light-first; optional reader themes do not justify applying dark appearance to the whole shell.

# Anti-generic checklist

- Do not crop, stretch, recolor, or obscure book-cover titles.
- Do not replace near-black pill actions with default blue controls.
- Do not surround every cover rail or section with an elevated white card.
- Do not use an unstyled `TabView`; preserve three compact outline items and understated dark selection.
- Do not use the shell grotesk for long-form reading or the reader serif for navigation and settings.
- Do not decorate the reader with gradients, large cards, persistent recommendations, or dense chrome.
- Do not apply one uniform radius to covers, pills, sheets, chips, and list rows.
- Do not invent a general illustration style from isolated launch, kids, achievement, promo, or empty-state assets.

</design-context>
