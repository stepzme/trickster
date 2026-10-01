<design-context>
---
version: 1
platform: iOS
name: VK-Clips-design-analysis
description: "A black edge-to-edge video-first iOS system where moving media supplies the color, thin white overlay controls form a right action rail, dark sheets layer above playback, and a glowing gradient creation control punctuates restrained navigation."
colors:
  canvas: "#000000"
  surface-primary: "#17181A"
  surface-secondary: "#28292C"
  accent-primary: "#4C8FF0"
  accent-secondary: "#F05AC8"
  text-primary: "#F7F7F8"
  text-secondary: "#A4A5AA"
  divider: "#35363A"
  destructive: "#EF5A68"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 37}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 19, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#4C8FF0", text: "#FFFFFF", height: 50, radius: 12}
  secondary-action: {fill: "#28292C", text: "#F7F7F8", height: 48, radius: 12}
  primary-card: {fill: "#17181A", radius: 18}
  navigation: {fill: "#0B0B0C", active: "#FFFFFF", inactive: "#85868B"}
---

# Overview

Full-screen vertical video, not cards or page chrome, governs the reference. Media runs behind safe areas on black while compact white overlays keep actions readable. Dark sheets, sparse list surfaces, and a raised gradient creation control carry the identity into non-playback screens and the editor.

# Non-negotiable visual invariants

- Primary media is edge-to-edge and occupies nearly the whole viewport; black is its fallback field.
- A vertical action rail overlays the right edge while metadata and audio anchor low on the left.
- Text and icons sit directly on video in white with only local shadow or scrim support.
- Bottom navigation is dark and low-profile, with one raised blue-to-pink glowing creation control.
- Modal content rises in dark rounded sheets while leaving media context visible behind it.
- Secondary screens remain near-black with compact rows, thin separators, and restrained blue selection.
- Capture and editing keep a black canvas and narrow tool rails; the preview remains dominant.
- User media supplies most color; isolated campaign graphics do not redefine the persistent system.

# Color and surfaces

Black is both canvas and the neutral around video. Charcoal distinguishes sheets, menus, controls, and grouped rows without creating a light-card hierarchy. Primary content is white, supporting labels cool gray, and blue marks links, selection, and primary actions. Pink or violet concentrates in the creation control and occasional promotion; destructive actions use warm red. Over media, use subtle black gradients or shadows only for legibility. White page backgrounds or default grouped gray would break the reference.

# Typography

Type is compact and subordinate to media. User names and primary labels are semibold; descriptions, audio metadata, and counters are small and closely grouped. Utility screens use clear 24-point titles and 16-point rows rather than oversized editorial headlines. Preserve sentence case and concise labels. Dynamic Type expands sheets and rows vertically; overlay copy should expand on demand rather than obscure controls.

# Screen composition

Playback uses a vertically paging media surface behind status and home-indicator regions. The right action rail sits above lower navigation; identity, description, and audio occupy the lower-left. Comments, sharing, reports, and overflow appear as dark bottom sheets with large top corners and stacked rows. Profile, search, settings, privacy, and selection screens use black single columns, compact top bars, dark grouped rows, and media grids where needed. Capture and editing center a camera or video preview with slim tool rails. Publishing uses a dark form surface with a thumbnail, concise inputs, toggles, and one dominant action.

# Navigation appearance

The bottom bar is near-black with white selected content, gray inactive content, and a raised circular plus surrounded by a cool-blue to pink-violet glow. Top bars are transparent over media or black on utility screens, with thin white glyphs. Bottom sheets use charcoal fill, rounded top corners, and a quiet drag indicator. Appearance does not prescribe destinations or source-product information architecture.

# Components

The action rail stacks thin white icons, compact counters, and consistent gaps; profile media may appear as a small circle. Metadata uses a semibold identity, short body copy, and compact audio row. Dark sheets contain full-width rows with leading icons, white labels, gray support, and fine separators. Primary actions are blue filled rounded rectangles; secondary controls use charcoal or white outline/glyph treatment. Selection pills gain a blue border or fill. Editor tools are small monochrome glyphs with concise labels. Disabled controls lower opacity but keep geometry.

# Imagery and icons

Vertical user video is the primary image language and cannot be replaced by poster cards or symbols. Profiles and search use circular avatars and tightly packed media thumbnails. Overlay icons are thin, monochrome, and optically balanced; a local shadow is allowed. Promotional art appears only in occasional education or feature surfaces and does not form a stable illustration system. Do not generate decorative art to fill space.

# States

Observed states include splash, education promotion, tracking/camera/microphone/photo permissions, upload, copied confirmation, hidden-controls guidance, paused playback, action menus, comments and share sheets, report confirmation, search, profile and playlist content, quiet-mode/timer settings, loading masks, editor download and text modes, feature modal, empty tagging, posting-time selection, and selected interests. Black/charcoal surfaces, compact white typography, thin icons, and blue selection stay stable. Toasts and hints remain small dark overlays.

# iOS adaptation

Render media aspect-fill with safe-area-aware overlays and clearance for the status area, home indicator, and bottom bar. Keep overlay geometry stable across compact heights. Present comments and actions as native sheets with custom dark styling and keyboard-safe expansion. Capture and editor controls retain 44-point targets even when glyphs are small. VoiceOver announces media identity and description before the action rail, then navigation. Label every icon-only action and do not rely on color alone. Dynamic Type grows utility rows and sheets while secondary overlay copy reflows or collapses. Dark appearance is canonical; do not synthesize light mode automatically.

# Anti-generic checklist

- No video inside a rounded white card or light margins.
- No unstyled light `TabView`, `List`, or `Form`.
- No horizontal reaction toolbar detached from media.
- No plain system-blue plus replacing the raised gradient creation control.
- No thick mismatched symbols or colored icon tiles throughout.
- No light sheets that erase the layered media context.
- No decorative copy, slogans, or text repeating visible media and controls.
- No global illustration system inferred from isolated promotional graphics.

</design-context>
