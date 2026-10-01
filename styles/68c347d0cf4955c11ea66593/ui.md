<design-context>
---
version: 1
platform: iOS
name: Files-design-analysis
description: "A native iOS file utility with a white canvas, oversized black section titles, system blue actions, pale-gray search, familiar blue folder glyphs, sparse file rows, native menus and sheets, and a stable three-tab structure for Recents, Shared, and Browse."
colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-soft: "#E7F2FF"
  ink: "#000000"
  ink-muted: "#6C6C70"
  ink-subtle: "#AEAEB2"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F7"
  surface-2: "#E5E5EA"
  hairline: "#D1D1D6"
  semantic-success: "#30D158"
  semantic-warning: "#FF9F0A"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 10, lg: 14, xl: 18, xxl: 24, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [12, 16]}
  file-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: [10, 16]}
  context-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 6 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [8, 10]}
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Files is a sparse native document browser where hierarchy comes from large titles, system blue actions, file glyphs, and familiar menus rather than branded decoration.

**Key Characteristics:**
- White native canvas.
- Large black navigation titles.
- System-blue actions and folders.
- Pale search and native menus.
- Stable Recents, Shared, and Browse tabs.

# Non-negotiable visual invariants

- Sampled screens consistently use white native canvas.
- Navigation consistently uses large black navigation titles.
- The reference consistently shows system-blue actions and folders.
- The reference consistently shows pale search and native menus.
- The reference consistently shows stable Recents, Shared, and Browse tabs.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Navigation, selection, folders, share, and confirmation.
- **Primary Soft** ({colors.primary-soft}): Selected and informational state.

### Surface
- **Canvas** ({colors.canvas}): File lists and previews.
- **Surface 1** ({colors.surface-1}): Search, sheets, and menus.
- **Surface 2** ({colors.surface-2}): Disabled and pressed state.
- **Hairline** ({colors.hairline}): List and preview separation.

### Text
- **Ink** ({colors.ink}): Titles, file names, and actions.
- **Ink Muted** ({colors.ink-muted}): Metadata and inactive tabs.
- **Ink Subtle** ({colors.ink-subtle}): Empty or disabled state.

### Semantic
- **Success** ({colors.semantic-success}): Completed transfer or availability.
- **Warning** ({colors.semantic-warning}): Attention.
- **Danger** ({colors.semantic-danger}): Delete.
- **Overlay** ({colors.semantic-overlay}): Preview and sheet focus.

# Typography

### Font Family
- **SF Pro Display** — large section titles.
- **SF Pro Text** — files, menus, fields, and actions.
- **SF Mono** — technical paths or identifiers when needed.

### Hierarchy
Use 34–40 points bold for sections, 17 points for rows and actions, 15 points body, 13 points metadata, and 10 points tab labels.

### Principles
- Preserve file names before metadata.
- Use native truncation for long paths.
- Keep destructive text explicit.
- Support Dynamic Type.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable outside Apple platforms.

# Screen composition

### Spacing System
Use a 4 points base, 16 points gutters, 10 points row rhythm, and native safe-area spacing.

### Grid & Container
Each tab is a full-height list or icon grid with search and display controls. Preview becomes a full-screen document canvas.

### Whitespace Philosophy
Leave unused file-browser space empty; do not fill it with promotional modules.

Surface hierarchy observed in the source:

Use native menus, sheets, preview stacks, and blur. The base file list remains flat.

### Decorative Depth
File thumbnails, folder glyphs, and document previews provide the only visual texture.

# Navigation appearance

Recents, Shared, and Browse stay in the tab bar; hierarchy uses back navigation and clear location titles.

# Components

### Buttons

Use blue text actions for Done, Next, share, and navigation; destructive actions use red in menus.

### Cards & Containers

Use file rows, folder tiles, preview canvas, context menus, scan frame, tag sheet, and server form.

### Inputs & Forms

Search, rename, tag, and server connection follow native field, keyboard, and validation patterns.

# Imagery and icons

File thumbnails, folder glyphs, and document previews provide the only visual texture.

Treat images and scans as file content. Preserve aspect ratio and never add decorative illustration.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show local, shared, cloud-only, downloading, favorite, tagged, duplicate, and deleted states with icon and label.

# iOS adaptation

### Touch Targets

Keep rows, folders, tabs, menus, scan controls, tags, and context actions at least 44 points.

### Collapsing Strategy

Preserve location, search, file list, selection, and navigation. Move sort and view options into overflow.

### Image Behavior

Contain documents and images with aspect-fit; scans use a clear crop frame and preserve legibility.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't add decorative cards to empty folders.
- Don't hide file extensions when relevant.
- Don't invent nonstandard gestures for core actions.
- Don't crop document previews.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from 58 image screens.
- The catalog exposed no formal flows, so review used the screen fallback across Recents, Shared, Browse, preview, scan, tags, server, and context menus.
- Large-file progress and provider-specific behavior were not deeply sampled.
- No tablet captures were present.

</design-context>
