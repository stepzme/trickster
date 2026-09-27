<design-context>
---
version: alpha
name: Russian-Post-design-analysis
description: "A service-dense utility interface built on a cool light-gray canvas, white rounded groups, and clear postal blue actions. Compact lists coexist with bright promotional tiles and a consistent family of soft 3D parcel, vehicle, and courier illustrations."

colors:
  primary: "#1677E8"
  on-primary: "#FFFFFF"
  primary-hover: "#338CF0"
  primary-soft: "#E8F3FF"
  ink: "#17191C"
  ink-muted: "#656B73"
  ink-subtle: "#969CA4"
  canvas: "#F3F4F6"
  surface-1: "#FFFFFF"
  surface-2: "#E9EBEE"
  surface-blue: "#DCEEFF"
  hairline: "#E1E4E8"
  semantic-success: "#3BB86A"
  semantic-warning: "#F4A62A"
  semantic-danger: "#E04A4A"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.6px
  display-lg:
    fontFamily: System Sans
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4px
  display-md:
    fontFamily: System Sans
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.2px
  headline:
    fontFamily: System Sans
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.1px
  card-title:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.1px
  mono:
    fontFamily: System Mono
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
    padding: 14px 18px
  button-secondary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 13px 18px
  service-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 16px
  promo-card:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.card-title}"
    rounded: "{rounded.lg}"
    padding: 16px
  list-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 0 16px
  filter-chip:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  search-field:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  bottom-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    height: 64px
---

## Overview

Russian Post is a broad utility hub that makes dense shipping, tracking, pickup, office, help, and profile tasks approachable through white rounded groups and postal blue actions. Bright service banners and soft 3D objects keep a functional interface from feeling bureaucratic.

**Key Characteristics:**
- Cool light-gray page background with white grouped surfaces.
- Postal blue is the only persistent brand and action color.
- Dense service lists use clear hierarchy and generous row targets.
- Promotional areas combine saturated color blocks with friendly 3D objects.
- Tracking, pickup, and sending preserve the same card-and-row grammar.

## Colors

### Brand & Accent

- **Postal Blue** ({colors.primary}) marks primary actions, links, active navigation, and service banners.
- **Soft Blue** ({colors.primary-soft}) supports selected rows, courier cards, and low-priority emphasis.

### Surface

- **Canvas** ({colors.canvas}) separates grouped information.
- **Surface 1** ({colors.surface-1}) carries cards, list groups, fields, and bottom navigation.
- **Surface 2** ({colors.surface-2}) is for disabled or nested regions.
- **Surface Blue** ({colors.surface-blue}) supports helpful service callouts.

### Text

- **Ink** ({colors.ink}) is used for task names, parcel identity, and totals.
- **Muted** ({colors.ink-muted}) carries descriptions, dates, and secondary values.
- **Subtle** ({colors.ink-subtle}) is limited to placeholders and inactive labels.

### Semantic

Use green for successful delivery or positive confirmation, orange for attention, and red for errors. Do not reuse those hues as general navigation accents.

## Typography

### Font Family

Use a neutral system sans throughout. The visual identity comes from color, grouping, and illustrations rather than a decorative typeface.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| `{typography.display-xl}` | 34px | 700 | Major service or onboarding title |
| `{typography.display-lg}` | 28px | 700 | Screen title |
| `{typography.display-md}` | 24px | 700 | Sheet or campaign title |
| `{typography.headline}` | 21px | 700 | Section title |
| `{typography.card-title}` | 16px | 600 | Service and parcel title |
| `{typography.body}` | 14px | 400 | Default service information |
| `{typography.caption}` | 11px | 400 | Dates, states, and navigation label |

### Principles

- Use short service titles and plain-language descriptions.
- Keep status and tracking identifiers visually distinct.
- Prefer weight and spacing over all caps.
- Keep dense list metadata secondary to the action or parcel name.

### Note on Font Substitutes

Use SF Pro on iOS or Inter elsewhere. Preserve normal-width letterforms and the calm utility tone; avoid rounded display fonts.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 8–12px gaps between cards, and 24px between major service groups. Rows generally keep 14–16px vertical padding.

### Grid & Container

Home mixes full-width search and tracking modules with two-column service or promotional cards. Operational flows switch to one column of grouped rows and sticky bottom actions.

### Whitespace Philosophy

Whitespace separates tasks rather than creating dramatic emptiness. Keep enough canvas visible between white groups to clarify boundaries without fragmenting a long workflow.

## Elevation & Depth

Cards lift mainly through white-on-gray contrast. Shadows stay soft and minimal; sheets, QR cards, and modal confirmations may use a shallow elevation.

### Decorative Depth

Use 3D object illustrations and overlapping promotional content for depth. Functional cards should remain flat and legible.

## Shapes

### Border Radius Scale

- Fields and list groups use 12px corners.
- Service and promotional cards use 16px corners.
- Chips and compact filters use pill geometry.
- Icon containers can be circular or softly rounded.

### Photography & Illustration Geometry

Place 3D parcel, courier, vehicle, and service objects inside uncluttered cards with clear breathing room. Avoid arbitrary photographic crops inside operational lists.

## Components

### Buttons

Primary actions use blue fill with white text; secondary actions use soft blue or white with blue labels. Native controls may remain under the hood, but must inherit the package colors, radii, type, and row spacing.

### Pricing Tabs

Use filter pills or simple segmented controls for mail type, status, and history ranges. The selected state is blue or soft blue; avoid adding a separate ornamental tab style.

### Cards & Containers

Service cards combine a short title, optional supporting line, and one 3D object. Parcel cards show identity, route or status, date, and the next available action. Grouped settings rows use thin internal dividers.

### Inputs & Forms

Sending forms progress from recipient and address to parcel size, rate, extra services, and payment. Use single-column grouped fields, clear defaults, and contextual summaries rather than a dense table.

### Status & Build Page

Tracking surfaces the current parcel state first, followed by events and actions. Pickup flows use a dedicated QR card; office and queue states pair practical details with the next action.

### Navigation

Use a five-item bottom bar for the main product areas. Keep blue for the active destination. Deep sending, pickup, and profile tasks use a back action and retain their current progress.

### Footer

There is no marketing footer. Finish with the persistent bottom navigation or a safe-area-aware action area on the gray canvas.

## Do's and Don'ts

### Do

- Keep white groups clearly separated by the gray canvas.
- Use blue consistently for action and selection.
- Let 3D illustrations humanize service promotion.
- Preserve operational status above decorative content.
- Make long forms progressive and reviewable.

### Don't

- Do not flatten the product into one uninterrupted white page.
- Do not use promotional color in place of semantic status.
- Do not overfill functional rows with illustration.
- Do not introduce multiple competing card radii.
- Do not expose unstyled platform controls.

## Responsive Behavior

### Breakpoints

Keep the operational flows one column across phone widths. Home can retain two compact columns when titles remain readable; otherwise promotional tiles stack.

### Touch Targets

Rows, switches, QR actions, filters, and bottom navigation items require at least 44px targets.

### Collapsing Strategy

Allow filter rows to scroll horizontally. Keep the primary sending or pickup action pinned while the grouped form or tracking history scrolls.

### Image Behavior

Scale 3D objects proportionally and keep them within their card bounds. Never crop away the object that explains a service; use extra negative space before enlarging it.

## Iteration Guide

Start with the gray canvas, white grouped cards, blue action system, and main navigation. Add sending and tracking states next, then the promotional 3D illustration layer. New features should reuse an existing card, row, or sheet pattern.

## Known Gaps

The reviewed scenarios cover onboarding, home, sending, tracking, pickup, offices, help, jobs, and profile. Tablet layouts, large accessibility sizes, and rare operational failures were not visible.
