<design-context>
---
version: 1
platform: iOS
name: Files-design-analysis
description: "A native white iOS document browser with oversized black titles, pale search, blue actions and folder marks, sparse list-or-grid content, preview-led imagery, translucent system menus, and a stable compact bottom bar."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F7"
  accent-primary: "#0A84FF"
  accent-secondary: "#30D158"
  text-primary: "#000000"
  text-secondary: "#6C6C70"
  divider: "#D1D1D6"
  destructive: "#FF3B30"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  file-row: {fill: "#FFFFFF", text: "#000000", height: 60, divider: "#D1D1D6"}
  folder-tile: {fill: "#FFFFFF", icon: "#0A84FF", radius: 10}
  search-field: {fill: "#F2F2F7", text: "#000000", radius: 10}
  context-menu: {fill: "translucent system material", radius: 14}
  navigation: {fill: "#FFFFFF", active: "#0A84FF", inactive: "#8E8E93"}
---

# Overview

Files is a sparse native document utility whose character comes from large-title hierarchy, familiar blue actions, content thumbnails, and layered iOS menus rather than branded decoration. White space stays open and lists or grids carry only the information needed to identify files and locations.

# Non-negotiable visual invariants

- White is the main canvas with large black section titles and pale-gray search directly beneath.
- Blue marks navigation, active tabs, folders, selected controls, and primary actions.
- Content switches between sparse full-width rows and evenly spaced thumbnail grids without card-heavy page sections.
- File and folder identity comes from thumbnails, previews, names, and metadata rather than decorative artwork.
- Translucent native menus and sheets layer over dimmed content with checkmarked choices.
- Destructive delete treatment is isolated in red.
- The compact bottom bar keeps blue selected and gray inactive items.
- Empty file-browser space remains empty rather than receiving promotional modules or explanatory prose.

# Color and surfaces

The canvas and primary content are white. Pale grouped gray fills search, pressed states, and select sheets; thin gray dividers structure lists. System blue is the sole general interaction accent, while red remains destructive and tag dots provide small local color. Menus use light translucent material rather than opaque decorative cards. Heavy shadows, gradients, or a colored page background would break the native document-browser character.

# Typography

Large black system titles anchor main surfaces. File and folder names use regular or medium 17-point text; timestamps, sizes, locations, and technical metadata are smaller gray text. Menus use standard iOS row type. Long filenames truncate or wrap predictably while preserving extensions when relevant. Dynamic Type increases row height and grid-label space without shrinking thumbnails below recognition.

# Screen composition

Main browser archetypes place a large title, pale rounded search field, compact view/sort controls, and a full-height row list or thumbnail grid above the bottom bar. Empty regions remain white. Preview uses a full-screen neutral document canvas with sparse top and bottom controls. Rename introduces an inline field and keyboard. Browse/edit surfaces use grouped location and tag rows. Scanner screens switch to a full-bleed camera/crop composition. Server connection, tagging, metadata, menus, and file actions use sheets or popovers over the current location.

# Navigation appearance

The bottom bar is white with three compact icon-label items, blue selected and gray inactive. Top bars use large black titles plus blue or dark ellipsis, view, selection, and back controls. Context menus are rounded translucent materials; sheets have rounded top corners and light fill. Preview chrome is minimal and content-led. These properties describe appearance without importing the source app's route structure.

# Components

File rows align a content thumbnail or document glyph, filename, gray metadata, and optional trailing status. Folder grids use familiar blue folder marks with names below. Search is a pale rounded field. Sorting and grouping menus use checkmarks, thin separators, and compact rows. Context menus include blue standard actions and isolated red destructive actions. Tag selectors use small colored dots; switches and server fields remain native. Scanner crop handles contrast over the camera image. Disabled and loading states reduce contrast without changing layout.

# Imagery and icons

Document previews, user images, scans, file thumbnails, and blue folder marks provide all visual texture and must preserve aspect ratio and legibility. They are content or functional representations, not an authored illustration system. Use consistent thin toolbar/menu glyphs and do not introduce decorative illustration, stock imagery, emoji, or unrelated symbol tiles.

# States

Observed states include recent items in list and grid, sorting/view/grouping menus, swipe delete, document preview, inline rename with keyboard, shared-menu state, scanner crop confirmation, tag modal, server connection/loading, editable locations and tags, folder grid, contextual actions, metadata sheet, and folder rename. White canvas, blue actions, large titles, pale search, and native layered menus remain stable.

# iOS adaptation

Respect all safe areas and keep the bottom bar above the home indicator. Lists and grids scroll beneath fixed navigation; keyboard avoidance keeps rename and server fields visible. Preview uses aspect-fit, while scanning uses full-bleed camera with safe controls and accessible crop affordances. Maintain 44-point targets for compact glyphs, rows, tags, and menu actions. VoiceOver reads filename, type/status, metadata, then available actions. Dynamic Type can reduce grid columns before compromising names or touch targets. Light appearance is canonical; dark mode needs designed surface and preview contrast.

# Anti-generic checklist

- No decorative cards or marketing content in empty folders.
- No custom brand tint replacing system blue.
- No cropped or omitted document previews and thumbnails.
- No arbitrary symbol tiles replacing file/folder identity.
- No non-native opaque dropdowns replacing translucent menus and sheets.
- No unstyled `TabView` or `Form` that loses large-title, search, list/grid, and menu hierarchy.
- No illustration file inferred from folder glyphs, scans, tags, or previews.

</design-context>
