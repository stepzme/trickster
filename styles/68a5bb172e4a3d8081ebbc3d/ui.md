<design-context>
---
version: 1
platform: iOS
name: Radio-Arzamas-design-analysis
description: "A warm-charcoal editorial audio interface dominated by cultural cover imagery, tightly wrapped heavy white headlines, a single vivid yellow accent, icon-only five-item navigation, and restrained dark sheets and playback controls."
colors:
  canvas: "#211F22"
  surface-primary: "#333136"
  surface-secondary: "#3B383D"
  accent-primary: "#FFD91A"
  accent-secondary: "#36C86A"
  text-primary: "#F6F4F2"
  text-secondary: "#AAA4A8"
  divider: "#5E5960"
  destructive: "#E46B72"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 800, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 750, lineHeight: 31}
  section: {fontFamily: "SF Pro Display", fontSize: 23, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 10
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "yellow", text: "warm charcoal semibold", height: 50, shape: "rounded pill"}
  secondary-action: {fill: "transparent charcoal", text: "white", border: "thin white", shape: "rounded pill"}
  primary-card: {fill: "cultural artwork with dark lower fade", radius: 10, padding: 0, text: "white"}
  navigation: {fill: "warm charcoal", selected: "yellow icon", inactive: "white or muted icon", labels: "none"}
---

# Overview

Radio Arzamas is an image-led cultural listening environment set almost entirely on warm near-black. Paintings, engravings, portraits, archival photographs, and authored cover compositions provide most of the color and identity. Large tightly wrapped white headlines sit directly on hero imagery or uninterrupted charcoal, while yellow is reserved for unmistakable interaction and selection.

The interface remains editorial rather than dashboard-like. Wide visual heroes and horizontal shelves alternate with compact metadata, outlined circular playback controls, dark modal sheets, and a persistent audio strip. Tonal layering replaces white cards and heavy shadows; the charcoal canvas stays visible enough to unify imagery from many historical periods.

# Non-negotiable visual invariants

- Warm charcoal fills the entire viewport, navigation, and most structural surfaces; pure black and light card canvases do not replace it.
- Yellow is the single dominant UI accent and appears selectively in active navigation, selected filters, progress, subscription choices, and primary actions.
- Cultural imagery is compositionally essential: heroes and cover cards occupy large areas and cannot be reduced to incidental thumbnails.
- Editorial titles are heavy, white, tightly led, and allowed to wrap into forceful short lines rather than shrink into uniform body hierarchy.
- Content discovery uses horizontal image shelves with partial neighboring cards visible against an uninterrupted dark canvas.
- Playback controls are simple circles or thin white outlines; a compact dark mini-player may sit immediately above the bottom navigation.
- Bottom navigation uses five icon-only items, with yellow for the selected icon and white or muted gray for inactive icons.
- Sheets, search fields, subscription choices, and forms use lighter charcoal layers with deliberate rounded geometry, never default white system surfaces.

# Color and surfaces

The base is warm charcoal around `#211F22`, not neutral black. Primary and secondary layers rise only slightly to `#333136` and `#3B383D`, providing enough separation for search, mini-player, settings, paywall choices, and sheets without fragmenting the screen into cards. Dividers are muted gray-brown and used sparingly.

Primary text is warm off-white `#F6F4F2`; supporting authors, durations, descriptions, and quiet actions use `#AAA4A8`. Vivid yellow around `#FFD91A` is the brand and interaction accent. Green appears only as a compact download or completion signal; destructive red is equally restrained. Content artwork is allowed to introduce additional hues, but those colors do not migrate into general controls. Default iOS blue would visibly break the reference.

Hero photographs and cover artwork often fade into the canvas with a dark gradient rather than sit inside a raised panel. Modal focus is created with a dark scrim and a lighter charcoal rounded sheet, not with a bright background.

# Typography

Use SF Pro Display as the iOS-safe substitute for the observed heavy rounded grotesk and SF Pro Text for metadata and controls. Hero titles are about 32–36 points in heavy or black weight with compact line height. Page and detail titles are 24–28 points bold; card titles are commonly 15–17 points medium or semibold. Body and metadata occupy the 12–16-point range, with secondary information lower in contrast.

The scale contrast between image-led headlines and metadata is pronounced. Preserve that contrast instead of making every text level 16–20 points. Most text is sentence case; compact uppercase may appear in small shelf labels but should not spread to descriptions. The serif identity belongs to the wordmark or supplied artwork, not the general UI.

At larger Dynamic Type sizes, let editorial headlines add lines and let descriptions expand vertically. Keep author, duration, download, and playback labels grouped with their related content; do not reduce the title below a recognisable editorial scale merely to preserve one-line cards.

# Screen composition

Most screens begin beneath the status safe area with either a full-width image hero fading into charcoal or a plain dark header with a large left-aligned title. Compact circular identity or utility controls may occupy the top edge. The middle alternates horizontal cover shelves, author portrait rows, detail metadata, searchable lists, forms, or playback content. The lower region contains continued scroll content, a mini-player strip when active, and the icon-only tab bar at the safe-area edge.

Home-like screens use one vertical feed of editorial sections separated by roughly 24 points. Each section pairs a compact heading with a horizontally scrolling row; at least part of the next card remains visible. Detail screens devote the upper third or more to artwork and title, then use a single readable text column with playback and save controls. Full-player screens center cover art and primary transport controls, with progress and secondary actions kept visually subordinate. Search and library screens use broad dark fields and compact list or card results. Profile, FAQ, settings, registration, and support screens are quieter vertical columns rather than a different light theme.

Bottom sheets for timer, filters, downloads, paid access, and subscription rise from a dimmed charcoal context with 18–24-point top corners. Outer gutters are normally about 16 points; imagery shelves may approach the edge while preserving the same leading alignment. Avoid placing a dark card behind every text group—the continuous canvas and vertical breathing space are part of the hierarchy.

# Navigation appearance

The bottom bar remains on the warm-charcoal field and uses five evenly spaced icons without persistent text labels. The selected icon is vivid yellow; inactive icons are white or muted gray. When present, the mini-player forms a distinct lighter-charcoal strip directly above it, with a thumbnail, compact title, and playback actions.

Top navigation uses a small white back chevron and lightweight line icons for saving, downloading, sharing, settings, or more actions. A circular avatar/profile control may sit at the upper trailing edge. Sheets show a clear rounded top and may use a compact close affordance. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

The primary action is a high-visibility yellow rounded pill about 50 points high with warm-charcoal semibold text. Secondary actions remain dark with a thin white outline and white label. Selected topic or filter chips use yellow border and yellow text; unselected variants recede into charcoal with muted content. Subscription choice cards are thickly rounded: selected is filled yellow with dark text, while unselected remains charcoal with a fine light outline.

Editorial cards use paintings, photography, or designed cover art with roughly 6–10-point corners. A lower dark fade may carry a title and metadata; save or play affordances sit in controlled corners. Playback buttons are circular with thin white strokes or yellow emphasis. Author rows use circular portrait crops. Search and form fields are wide dark rounded rectangles with white entry text and muted placeholders.

The mini-player is a compact lighter-charcoal strip, visually flatter than a sheet and denser than a content card. Timer, queue, filtering, and download actions live in rounded dark sheets with clear selection marks. Settings toggles may retain native behavior, but their tint and surrounding rows must follow the charcoal/yellow hierarchy.

# Imagery and icons

Curated cultural imagery is the primary visual material: paintings, historical photographs, engravings, portraits, manuscripts, and illustrated podcast or course covers. Images use deliberate cover crops focused on the human subject, artwork focal point, or central object. Rectangular and softly rounded formats dominate; circles are reserved for author or identity portraits.

Dark lower fades connect bright or detailed imagery to white text and the charcoal canvas. Some covers use authored collage or humorous graphic intervention, such as a pixel accessory layered onto a historical portrait. Such treatment is intentional cover art, not a license to scatter decorative symbols across the UI. Line icons remain simple white or yellow and must not compete with the artwork. If final imagery is pending, preserve its area, crop, and tonal balance with a faithful placeholder rather than removing the shelf or hero.

# States

Observed listening states include no player, a compact mini-player, and a full player with artwork, progress, transport, timer, queue, download, and sharing controls. Downloads use green sparingly while the rest of the state remains charcoal, white, and yellow. Saved, downloaded, filtered, and history screens maintain the same dark canvas and image-forward card treatment.

Paid-content and subscription states appear in rounded dark sheets or cards; selected plans become yellow and processing can add a dim overlay and centered progress. Search shows both keyboard-active entry and populated/filtered results. Settings include toggle states; help includes an offline state; registration and support show keyboard-visible forms. Native payment confirmation can appear above the dark app while the underlying composition remains visible.

# iOS adaptation

Use safe-area-aware dark containers so the canvas continues beneath status and home-indicator regions. Horizontal shelves should preserve stable artwork aspect ratios and expose a partial following card rather than compressing all cards onto one screen. Long detail, search, profile, FAQ, and form screens scroll vertically; mini-player and tab bar require explicit bottom content inset.

All icon-only tabs, playback circles, bookmark/download actions, chips, and compact header controls need at least 44-point hit regions even when their visible glyphs are smaller. VoiceOver order should announce section title, artwork title, author/duration, and then actions. Provide labels for icon-only navigation and playback controls. Keyboard-visible forms must keep the active field and primary action above the keyboard.

Dynamic Type may increase card height and move metadata below an image, but hero imagery, headline scale, and shelf rhythm should remain recognisable. On compact widths, reduce shelf card width enough to preserve the partial-next-card cue and stack subscription options before shrinking text. The observed product is deliberately dark; preserve its warm tonal hierarchy instead of applying generic light/dark inversion.

# Anti-generic checklist

- Do not replace the continuous warm-charcoal field with white `List`, `Form`, or generic black backgrounds.
- Do not introduce default blue tint; selection and action belong to the restrained yellow system.
- Do not reduce cultural artwork to small leading icons or remove imagery while waiting for final assets.
- Do not use an unstyled labeled `TabView`; the observed bar is icon-only with yellow selection.
- Do not put every section inside an identical raised charcoal card; much of the hierarchy depends on open dark space.
- Do not substitute arbitrary SF Symbols for authored cover art or historical imagery.
- Do not use uniform capsule corners for editorial cards, sheets, fields, and playback controls.
- Do not let the mini-player, metadata, or secondary actions overpower the current artwork and headline.

</design-context>
