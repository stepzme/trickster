<design-context>
---
version: alpha
name: Safari-design-analysis
description: "A restrained native iOS browser interface built from translucent toolbars, white content sheets, system typography, blue actions, and context-sensitive material effects. Web content remains primary while tabs, bookmarks, privacy, sharing, and customization appear as compact sheets or controls with familiar platform geometry."

colors:
  primary: "#0A72D8"
  on-primary: "#FFFFFF"
  primary-hover: "#2A86E0"
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
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4px
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3px
  display-md:
    fontFamily: SF Pro Display
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.2px
  headline:
    fontFamily: SF Pro Text
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  card-title:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: SF Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 22px
  xxl: 28px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-text:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 8px
  address-field:
    backgroundColor: "{colors.material-light}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  sheet:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 16px
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
    padding: 2px
  toolbar:
    backgroundColor: "{colors.material-light}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    height: 50px
---

## Overview

Safari is a content-first browser shell built from native iOS materials. White and translucent chrome, system type, blue text actions, and familiar sheets stay subordinate to the current webpage. Tabs, bookmarks, privacy, sharing, and start-page customization reuse a small set of platform patterns.

**Key Characteristics:**
- Web content remains visually dominant.
- Toolbars and address fields use translucent or pale material surfaces.
- Blue marks links, selected controls, and completion actions.
- Tabs are shown as rounded page previews over blurred context.
- Share, bookmarks, privacy, and customization use sheets and grouped rows.

## Colors

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

## Typography

### Font Family

Use SF Pro Display and SF Pro Text, with SF Mono only for technical strings when needed. The interface should feel platform-native and neutral.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 34px | 700 | Start-page title |
| `{typography.display-lg}` | 28px | 700 | Large section heading |
| `{typography.display-md}` | 22px | 700 | Sheet title |
| `{typography.headline}` | 20px | 600 | Start-page section |
| `{typography.card-title}` | 17px | 600 | Group or privacy title |
| `{typography.body}` | 15px | 400 | Default rows and descriptions |
| `{typography.caption}` | 11px | 400 | Tab and site metadata |

### Principles

- Keep browser controls concise and familiar.
- Use bold type for start-page structure, not toolbar actions.
- Let websites retain their own typography inside the content viewport.
- Preserve readable system metrics in sheets and privacy explanations.

### Note on Font Substitutes

Use the platform system font. On non-Apple targets, Inter is acceptable, but preserve iOS-like weight, spacing, and numeral proportions.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 8–12px gaps inside grouped sheets, and 24px between start-page sections. Toolbar spacing is tighter but must preserve tap targets.

### Grid & Container

The webpage fills the main viewport. Browser chrome anchors to the lower edge. Tab overview uses a two-column preview grid, while bookmarks, privacy, and customization use one-column sheets.

### Whitespace Philosophy

Chrome remains compact so content can breathe. Sheets use open white space and clear grouping, while the start page allows large gaps between favorites, privacy, and reading list sections.

## Elevation & Depth

Blur, translucency, and layered sheets create depth. Tab cards float above a defocused background; share and privacy sheets stack above the current page without replacing it.

### Decorative Depth

Use material blur, shallow card shadows, and page preview scaling. Avoid decorative gradients except user-selected start-page imagery or the soft system background behind tab overview.

## Shapes

### Border Radius Scale

- Address fields and compact cards use 8–12px corners.
- Tab previews and sheets use 16–22px corners.
- Segmented controls use 8px corners with a softly lifted selected segment.
- Toolbar icons remain unboxed unless context requires a control background.

### Photography & Illustration Geometry

Web content keeps its source geometry. Optional start-page backgrounds fill the viewport behind translucent sections; thumbnails remain evenly rounded and selected with a blue outline.

## Components

### Buttons

Most actions are blue text or toolbar icons, not filled buttons. Filled blue is reserved for clear sign-in or confirmation moments. Native controls are appropriate, but their visible styling must follow the selected material, type, tint, and geometry.

### Pricing Tabs

Bookmarks, reading list, and history use a compact segmented control. Tab groups use a title and dropdown treatment in the bottom toolbar. Selected segments remain white or blue-accented rather than heavily filled.

### Cards & Containers

Tab cards show a live page preview, site identity, and close control. Start-page information uses soft white cards. Share actions and settings are grouped into rounded rows with familiar icons.

### Inputs & Forms

The address and search field is the primary input and stays near the bottom toolbar. Search within tabs or bookmarks uses the same pale rounded field. Use system keyboard, focus, and clear behavior while preserving the chosen material tint.

### Status & Build Page

No-internet states keep the failed page context visible and place the explanation centrally. Privacy reports summarize key metrics before detailed educational copy. Loading remains inside the page or address-field context.

### Navigation

The bottom toolbar provides back, forward, share, bookmarks, and tabs around the address field. Sheets use Cancel, Done, or a simple back title. Private mode changes the material to dark charcoal while preserving the same structure.

### Footer

There is no footer. The browser viewport ends at the adaptive bottom toolbar and safe area.

## Do's and Don'ts

### Do

- Keep website content dominant.
- Use platform materials and blue actions consistently.
- Reuse sheets, grouped rows, and segmented controls.
- Preserve context when opening tabs, sharing, or privacy details.
- Adapt toolbar contrast to light and dark pages.

### Don't

- Do not wrap every browser control in a filled button.
- Do not add ornamental branding to neutral chrome.
- Do not replace blur and layering with heavy shadows.
- Do not let start-page imagery reduce text readability.
- Do not mix unrelated custom control styles with the system grammar.

## Responsive Behavior

### Breakpoints

On phones, keep the address field and toolbar at the bottom and use a two-column tab grid. Wider layouts may increase tab columns or move controls while preserving the same materials and hierarchy.

### Touch Targets

Toolbar icons, tab close controls, segmented options, rows, and switches require at least 44px touch targets.

### Collapsing Strategy

Collapse the address field as the page scrolls and restore it on interaction. Present detailed actions in sheets rather than crowding the toolbar.

### Image Behavior

Tab previews use scaled page captures with proportional cropping. User-selected start-page backgrounds use `cover` and maintain sufficient contrast behind translucent sections.

## Iteration Guide

Begin with the content viewport, adaptive address field, and compact bottom toolbar. Add tab overview, share sheet, bookmarks, and privacy in that order, reusing native material and row patterns. Custom backgrounds come last.

## Known Gaps

The reviewed scenarios cover opening sites, offline behavior, sharing, bookmarks, tabs, private mode, privacy report, and start-page customization. iPad layouts, landscape behavior, accessibility text expansion, downloads, and all system-version variants were not visible.
