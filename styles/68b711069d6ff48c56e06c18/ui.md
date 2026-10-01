<design-context>
---
version: 1
platform: iOS
name: Safari-design-analysis
description: "A restrained native iOS browser interface built from translucent toolbars, white content sheets, system typography, blue actions, and context-sensitive material effects. Web content remains primary while tabs, bookmarks, privacy, sharing, and customization appear as compact sheets or controls with familiar platform geometry."

colors:
  primary: "#0A72D8"
  on-primary: "#FFFFFF"
  primary-soft: "#E7F2FD"
  ink: "#111214"
  ink-muted: "#6C6C70"
  ink-subtle: "#9A9AA0"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F7"
  surface-2: "#E5E5EA"
  material-light: "#F7F7F9"
  material-dark: "#3A3A3C"
  hairline: "#D1D1D6"
  semantic-success: "#34C759"
  semantic-warning: "#FF9F0A"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: SF Pro Display
    fontSize: 34
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 28
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3
  display-md:
    fontFamily: SF Pro Display
    fontSize: 22
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.2
  headline:
    fontFamily: SF Pro Text
    fontSize: 20
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: SF Pro Text
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: SF Pro Text
    fontSize: 16
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: SF Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: [12, 16]
  button-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8
  address-field:
    backgroundColor: "{colors.material-light}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: [10, 12]
  sheet:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 16
  tab-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 0
  segmented-control:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: 2
  toolbar:
    backgroundColor: "{colors.material-light}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    height: 50
---

# Overview

Safari is a content-first browser shell built from native iOS materials. White and translucent chrome, system type, blue text actions, and familiar sheets stay subordinate to the current webpage. Tabs, bookmarks, privacy, sharing, and start-page customization reuse a small set of platform patterns.

**Key Characteristics:**
- Web content remains visually dominant.
- Toolbars and address fields use translucent or pale material surfaces.
- Blue marks links, selected controls, and completion actions.
- Tabs are shown as rounded page previews over blurred context.
- Share, bookmarks, privacy, and customization use sheets and grouped rows.

# Non-negotiable visual invariants

- Web content remains visually dominant.
- Toolbars and address fields use translucent or pale material surfaces.
- Blue marks links, selected controls, and completion actions.
- Tabs are shown as rounded page previews over blurred context.
- Share, bookmarks, privacy, and customization use sheets and grouped rows.

# Color and surfaces

### Brand & Accent

- **System Blue** ({colors.primary}) marks actionable text, active icons, selection outlines, and confirmation.
- **Soft Blue** ({colors.primary-soft}) supports subtle selected or informational states.

### Surface

- **Canvas** ({colors.canvas}) is the default start-page and sheet content surface.
- **Surface 1** ({colors.surface-1}) supports grouped settings, sheets, and browser chrome.
- **Surface 2** ({colors.surface-2}) carries segmented controls and inactive material.
- **Materials** ({colors.material-light}, {colors.material-dark}) adapt toolbars to page context.

### Text

- **Ink** ({colors.ink}) carries titles and primary values.
- **Muted** ({colors.ink-muted}) is used for explanatory copy and inactive toolbar icons.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and disabled information.

### Semantic

Use standard system green, orange, and red for switches, warnings, and destructive actions. These colors are semantic, not part of the browser's decorative identity.

# Typography

### Font Family

Use SF Pro Display and SF Pro Text, with SF Mono only for technical strings when needed. The interface should feel platform-native and neutral.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 34 points | 700 | Start-page title |
| `{typography.display-lg}` | 28 points | 700 | Large section heading |
| `{typography.display-md}` | 22 points | 700 | Sheet title |
| `{typography.headline}` | 20 points | 600 | Start-page section |
| `{typography.card-title}` | 17 points | 600 | Group or privacy title |
| `{typography.body}` | 15 points | 400 | Default rows and descriptions |
| `{typography.caption}` | 11 points | 400 | Tab and site metadata |

### Principles

- Keep browser controls concise and familiar.
- Use bold type for start-page structure, not toolbar actions.
- Let websites retain their own typography inside the content viewport.
- Preserve readable system metrics in sheets and privacy explanations.

### Note on Font Substitutes

Use the platform system font. On non-Apple targets, Inter is acceptable, but preserve iOS-like weight, spacing, and numeral proportions.

# Screen composition

### Spacing System

Use a 4 points base, 16 points screen gutters, 8–12 points gaps inside grouped sheets, and 24 points between start-page sections. Toolbar spacing is tighter but must preserve tap targets.

### Grid & Container

The webpage fills the main viewport. Browser chrome anchors to the lower edge. Tab overview uses a two-column preview grid, while bookmarks, privacy, and customization use one-column sheets.

### Whitespace Philosophy

Chrome remains compact so content can breathe. Sheets use open white space and clear grouping, while the start page allows large gaps between favorites, privacy, and reading list sections.

Surface hierarchy observed in the source:

Blur, translucency, and layered sheets create depth. Tab cards float above a defocused background; share and privacy sheets stack above the current page without replacing it.

### Decorative Depth

Use material blur, shallow card shadows, and page preview scaling. Avoid decorative gradients except user-selected start-page imagery or the soft system background behind tab overview.

# Navigation appearance

The bottom toolbar provides back, forward, share, bookmarks, and tabs around the address field. Sheets use Cancel, Done, or a simple back title. Private mode changes the material to dark charcoal while preserving the same structure.

# Components

### Buttons

Most actions are blue text or toolbar icons, not filled buttons. Filled blue is reserved for clear sign-in or confirmation moments. Native controls are appropriate, but their visible styling must follow the selected material, type, tint, and geometry.

### Cards & Containers

Tab cards show a live page preview, site identity, and close control. Start-page information uses soft white cards. Share actions and settings are grouped into rounded rows with familiar icons.

### Inputs & Forms

The address and search field is the primary input and stays near the bottom toolbar. Search within tabs or bookmarks uses the same pale rounded field. Use system keyboard, focus, and clear behavior while preserving the chosen material tint.

# Imagery and icons

Use material blur, shallow card shadows, and page preview scaling. Avoid decorative gradients except user-selected start-page imagery or the soft system background behind tab overview.

Web content keeps its source geometry. Optional start-page backgrounds fill the viewport behind translucent sections; thumbnails remain evenly rounded and selected with a blue outline.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

No-internet states keep the failed page context visible and place the explanation centrally. Privacy reports summarize key metrics before detailed educational copy. Loading remains inside the page or address-field context.

# iOS adaptation

### Touch Targets

Toolbar icons, tab close controls, segmented options, rows, and switches require at least 44 points touch targets.

### Collapsing Strategy

Collapse the address field as the page scrolls and restore it on interaction. Present detailed actions in sheets rather than crowding the toolbar.

### Image Behavior

Tab previews use scaled page captures with proportional cropping. User-selected start-page backgrounds use `cover` and maintain sufficient contrast behind translucent sections.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not wrap every browser control in a filled button.
- Do not add ornamental branding to neutral chrome.
- Do not replace blur and layering with heavy shadows.
- Do not let start-page imagery reduce text readability.
- Do not mix unrelated custom control styles with the system grammar.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
