<design-context>
---
version: 1
platform: iOS
name: Yandex-Disk-design-analysis
description: "A dark dense cloud workspace with near-black storage surfaces, compact white file typography, charcoal sheets and rows, Yandex-yellow creation controls, a five-item bottom bar, and occasional light editor modules or full-screen media that retain the same compact native structure."
colors:
  canvas: "#0D0D0E"
  surface-primary: "#1B1B1D"
  surface-secondary: "#242426"
  accent-primary: "#FFD72E"
  accent-secondary: "#3878F3"
  text-primary: "#F6F6F7"
  text-secondary: "#B2B3B7"
  divider: "#343438"
  destructive: "#EA5454"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#FFD72E", foreground: "#171717", shape: "circle-or-rounded-rectangle"}
  secondary-action: {fill: "#242426", foreground: "#F6F6F7", shape: "row-or-pill"}
  primary-card: {fill: "#1B1B1D", foreground: "#F6F6F7", shape: "flat-file-or-activity-surface"}
  navigation: {fill: "#1B1B1D", inactive: "#77787D", selected: "#F6F6F7"}
---

# Overview

Yandex Disk is a dark, dense utility in which filenames, thumbnails, storage information, and creation controls fill the available space without decorative framing. Near-black and charcoal form a shallow hierarchy, compact white type keeps lists scannable, and saturated yellow makes the primary create or continue action unmistakable. Media, documents, calendar, chat, and meeting surfaces may switch to light work areas or full-screen photography, but their controls remain compact and iOS-native.

# Non-negotiable visual invariants

- Near-black is the default storage shell, with charcoal bars, cards, fields, and sheets separated tonally rather than by shadow.
- Yandex yellow is reserved for primary actions, floating creation, active checks or toggles, and high-priority CTAs.
- File and service lists use compact rows with small thumbnails or colored document icons, aligned metadata, and restrained separators.
- A dark five-item icon-and-label bottom bar is a stable anchor, with light selected and muted inactive states.
- Creation controls appear as a yellow floating circle or wide yellow rounded rectangle above the dark content.
- Bottom sheets use rounded charcoal tops, a centered grabber, and dense icon-and-text rows over dimmed content.
- Empty states center one icon or authored asset with short copy and a single clear action, leaving the surrounding field quiet.
- Light editors and service modules may change the canvas, but retain compact toolbars, native spacing, and the black bottom anchor where observed.

# Color and surfaces

The default canvas is nearly black. Charcoal steps distinguish navigation bars, account panels, activity cards, selection, search, sheets, and dialogs. White and off-white carry primary titles, filenames, values, and icons; gray carries dates, sizes, placeholders, and inactive navigation. Yellow is the strongest interaction mass and must remain rare enough to signal creation or commitment. Blue appears as operational feedback or inside specific service controls, green as available or completed state, and red for destructive confirmation. Photos, documents, video, and the scenic meeting background provide localized color. Brightening the whole workspace, using default blue as the main action, or applying gradients across routine storage screens would break the reference.

# Typography

The interface uses a compact grotesk with strong Cyrillic support: bold 28–34-point onboarding or empty-state titles, semibold 20-point navigation and sheet headings, 14–17-point filenames and controls, and small gray metadata. Use SF Pro as the iOS-safe substitute when the original face is unavailable. Density depends on restrained line height and clear weight contrast rather than tiny text. Dynamic Type should increase file-row, form, sheet, and service-list height while preserving title-filename-metadata hierarchy; filenames may truncate before important status or action controls disappear.

# Screen composition

Storage archetypes use a compact top bar, optional quota or filter strip, and a continuous vertical list of file rows or activity surfaces above the five-item bottom bar. Feed-like surfaces use one-column cards with media grids, dates, and small overflow controls, while file views stay flatter and denser. Photos and albums use tiled imagery or compact preview rows. A yellow create control floats above the lower navigation and remains visually isolated from passive content.

Creation, account, filter, media-quality, and action menus rise as charcoal bottom sheets with a grabber and dense choices. Preview archetypes devote most of the screen to the selected document, image, video, or audio while retaining narrow control bars. Editor and service archetypes can switch to white document pages, spreadsheet grids, calendar forms, or chat surfaces; meetings may use full-screen scenic photography with translucent controls. These modules use the full viewport rather than being embedded in decorative cards.

# Navigation appearance

The storage shell uses a dark five-item bottom bar with simple icons and compact labels, muted inactive states, and off-white selection. Top bars use centered or leading titles with small search, overflow, selection, or close icons. Detail pages use iOS back chevrons. Sheets use charcoal fill, large upper corners, and a centered grabber. Destructive choices appear in native alerts or action sheets with red text. Light service modules retain compact black or dark controls and may keep the dark bottom bar, producing deliberate contrast rather than an entirely separate visual system.

# Components

The primary action is a saturated yellow circle or rounded rectangle with dark icon or semibold label. File rows combine a small thumbnail or colored type icon, filename, gray metadata, and compact trailing action or selection mark. Storage indicators use a short progress strip with explicit capacity text. Activity surfaces use charcoal fill, small radii, a concise heading, and contained media previews. Search, inputs, and filters use dark graphite fills, compact pills, toggles, and checks. Creation and action sheets use vertically aligned line icons and labels. Editors use compact native toolbars; chat uses a low dark or pale composer; media playback uses familiar centered transport controls.

# Imagery and icons

Uploaded photos, video frames, document previews, album thumbnails, scan captures, and scenic meeting photography are functional content and must preserve their appropriate crop. Photos may use `cover`; document pages, spreadsheets, and presentations require contained framing; file-type marks remain small colored squares or line icons. Onboarding, offline, photo, to-do, help, and empty states contain authored assets, but their construction varies among glossy 3D, flat branded, gray symbolic, and character-based treatments. A single stable illustration system is therefore not independently evidenced; do not generalize one of those isolated styles across the product.

# States

Observed states include splash and onboarding, account selection, populated feed and file lists, selected rows, nonempty and empty trash or offline views, upload progress, search results and emptiness, scan crop and save, document preview and editing, media-quality sheets, audio playback, albums and favorites, calendar forms and events, task lists, documents and spreadsheets, meeting and chat surfaces, permission dialogs, settings toggles, theme and password panels, feedback success, and destructive confirmation. Dark shell, yellow action, compact type, dense rows, rounded sheets, and native control geometry remain stable where the storage shell is present.

# iOS adaptation

Use safe-area-aware top and bottom bars, place the floating create control above the tab bar and home indicator, and use vertical scrolling for files, feeds, settings, forms, chat, and sheet content. Preserve compact row density while keeping thumbnails, menus, checks, tabs, and controls at least 44 points. On compact widths, truncate filenames before removing size/date metadata wholesale, reduce media-grid columns, and keep quota and primary creation visible. VoiceOver order should announce file name, type and metadata, state, then action; selected, offline, uploaded, and destructive states cannot rely on color alone. Native keyboard, picker, permission, alert, and share transitions should remain system-owned. Light editor modules must not accidentally recolor the dark storage shell.

# Anti-generic checklist

- Do not replace the near-black utility shell with a white cloud dashboard or colorful gradient background.
- Do not use default blue for primary creation; preserve the isolated yellow action mass.
- Do not enlarge every file row into a rounded card or hide metadata for extra whitespace.
- Do not use an unstyled `TabView`; retain five compact items, dark fill, and light selected state.
- Do not apply one radius to rows, sheets, dialogs, floating circles, media, and fields.
- Do not crop document pages like photos or force photo crops onto spreadsheets and presentations.
- Do not fill empty states with multiple CTAs, marketing copy, or an invented unified illustration style.
- Do not allow light editor defaults to leak into ordinary storage lists, sheets, and navigation.

</design-context>
