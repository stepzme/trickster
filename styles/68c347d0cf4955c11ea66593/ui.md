<design-context>
---
version: alpha
name: Files-design-analysis
description: "A native iOS file utility with a white canvas, oversized black section titles, system blue actions, pale-gray search, familiar blue folder glyphs, sparse file rows, native menus and sheets, and a stable three-tab structure for Recents, Shared, and Browse."
colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-hover: "#0070DB"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 10px, lg: 14px, xl: 18px, xxl: 24px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 12px 16px }
  file-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 10px 16px }
  context-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 6px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 8px 10px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 44px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Files is a sparse native document browser where hierarchy comes from large titles, system blue actions, file glyphs, and familiar menus rather than branded decoration.

**Key Characteristics:**
- White native canvas.
- Large black navigation titles.
- System-blue actions and folders.
- Pale search and native menus.
- Stable Recents, Shared, and Browse tabs.

## Colors

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

## Typography

### Font Family
- **SF Pro Display** — large section titles.
- **SF Pro Text** — files, menus, fields, and actions.
- **SF Mono** — technical paths or identifiers when needed.

### Hierarchy
Use 34–40px bold for sections, 17px for rows and actions, 15px body, 13px metadata, and 10px tab labels.

### Principles
- Preserve file names before metadata.
- Use native truncation for long paths.
- Keep destructive text explicit.
- Support Dynamic Type.

### Note on Font Substitutes
Use the platform system sans. **Inter** is acceptable outside Apple platforms.

## Layout

### Spacing System
Use a 4px base, 16px gutters, 10px row rhythm, and native safe-area spacing.

### Grid & Container
Each tab is a full-height list or icon grid with search and display controls. Preview becomes a full-screen document canvas.

### Whitespace Philosophy
Leave unused file-browser space empty; do not fill it with promotional modules.

## Elevation & Depth
Use native menus, sheets, preview stacks, and blur. The base file list remains flat.

### Decorative Depth
File thumbnails, folder glyphs, and document previews provide the only visual texture.

## Shapes

### Border Radius Scale
Use 8px for search, 10px for menus, 14px for sheets, and native folder or file silhouettes.

### Photography & Illustration Geometry
Treat images and scans as file content. Preserve aspect ratio and never add decorative illustration.

## Components

### Buttons
Use blue text actions for Done, Next, share, and navigation; destructive actions use red in menus.

### Pricing Tabs
Not a commerce pattern. Use native segmented or menu selection for view and sort options.

### Cards & Containers
Use file rows, folder tiles, preview canvas, context menus, scan frame, tag sheet, and server form.

### Inputs & Forms
Search, rename, tag, and server connection follow native field, keyboard, and validation patterns.

### Status & Build Page
Show local, shared, cloud-only, downloading, favorite, tagged, duplicate, and deleted states with icon and label.

### Navigation
Recents, Shared, and Browse stay in the tab bar; hierarchy uses back navigation and clear location titles.

### Footer
The tab bar remains white; document preview replaces it with contextual share or markup actions.

## Do's and Don'ts

### Do
- Preserve native file-management conventions.
- Keep location and selection state clear.
- Confirm destructive actions.
- Expose download and sharing status.

### Don't
- Don't add decorative cards to empty folders.
- Don't hide file extensions when relevant.
- Don't invent nonstandard gestures for core actions.
- Don't crop document previews.

## Responsive Behavior

### Breakpoints
Use the phone list up to 767px, sidebar plus file browser on tablet, and multicolumn browser or preview above 1024px.

### Touch Targets
Keep rows, folders, tabs, menus, scan controls, tags, and context actions at least 44px.

### Collapsing Strategy
Preserve location, search, file list, selection, and navigation. Move sort and view options into overflow.

### Image Behavior
Contain documents and images with aspect-fit; scans use a clear crop frame and preserve legibility.

## Iteration Guide
1. Build tabs, search, and file browsing.
2. Add preview, share, rename, move, and delete.
3. Add tags, favorites, duplicate, and compress.
4. Add scan and server connection.
5. Add shared and cloud status.

## Known Gaps
- Tokens were inferred visually from 58 image screens.
- The catalog exposed no formal flows, so review used the screen fallback across Recents, Shared, Browse, preview, scan, tags, server, and context menus.
- Large-file progress and provider-specific behavior were not deeply sampled.
- No tablet captures were present.

</design-context>

Use the design system above for all UI you generate.
