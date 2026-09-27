<design-context>
---
version: alpha
name: Ozon-Job-design-analysis
description: "A bright operational mobile UI built from white rounded groups, pale gray page surfaces, and saturated Ozon blue actions. Dense workplace facts are broken into cards, chips, bottom sheets, and five persistent task tabs. Bold system-sans headings, concise monetary labels, documentary warehouse photography, and colorful 3D promotional scenes create a practical interface with energetic brand moments."

colors:
  primary: "#006EF5"
  on-primary: "#FFFFFF"
  primary-hover: "#2185FF"
  primary-soft: "#E5F4FF"
  cyan: "#19B8F2"
  ink: "#111318"
  ink-muted: "#70747C"
  ink-subtle: "#9AA0A8"
  canvas: "#F3F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECEFF2"
  surface-dark: "#111214"
  hairline: "#E3E6E9"
  semantic-success: "#20B969"
  semantic-warning: "#F0A400"
  semantic-danger: "#E84A5F"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 34px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.8px
  display-lg:
    fontFamily: System Sans
    fontSize: 30px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.6px
  display-md:
    fontFamily: System Sans
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4px
  headline:
    fontFamily: System Sans
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.2px
  card-title:
    fontFamily: System Sans
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  mono:
    fontFamily: System Mono
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0

rounded:
  xs: 6px
  sm: 10px
  md: 14px
  lg: 18px
  xl: 24px
  xxl: 30px
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
    padding: 14px 20px
  filter-chip:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 8px 12px
  warehouse-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12px
  info-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12px
  bottom-sheet:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
    padding: 20px 12px
  status-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 20px 12px
---

## Overview

Ozon Job presents a high volume of operational information without abandoning a clear action hierarchy. Pale gray canvas bands separate white rounded groups; bright blue marks the next action and current tab. Photos, 3D promos, and colored banners are concentrated at discovery moments, while money and account screens remain restrained.

**Key Characteristics:**
- Strong Ozon blue reserved for primary actions and selected navigation.
- White rounded groups stacked on a cool gray canvas.
- Bold system-sans headings with compact supporting text.
- Filter chips and bottom sheets for bounded choices.
- Real warehouse photography paired with high-saturation 3D promotional graphics.
- Full dark theme built from near-black canvas and charcoal groups.

## Colors

### Brand & Accent
- **Ozon Blue** ({colors.primary}): Primary buttons, selected tabs, links, and active outlines.
- **Blue Hover** ({colors.primary-hover}): Pressed or emphasized action state.
- **Soft Blue** ({colors.primary-soft}): Selected icon backgrounds and quiet information.
- **Cyan** ({colors.cyan}): Secondary banners and supporting brand energy.

### Surface
- **Canvas** ({colors.canvas}): Gaps between groups and page background.
- **Surface 1** ({colors.surface-1}): Cards, headers, sheets, and navigation.
- **Surface 2** ({colors.surface-2}): Skeleton, disabled, and nested neutral surfaces.
- **Dark Surface** ({colors.surface-dark}): Dark theme base; groups lift with slightly lighter charcoal.
- **Hairline** ({colors.hairline}): Dividers and chart axes.

### Text
- **Ink** ({colors.ink}): Headings, amounts, warehouse names, action labels.
- **Ink Muted** ({colors.ink-muted}): Explanations, locations, hourly equivalents.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority metadata.

### Semantic
- **Success** ({colors.semantic-success}): Confirmed instantly, available dates, positive status.
- **Warning** ({colors.semantic-warning}): Deadlines and limited-time promotions.
- **Danger** ({colors.semantic-danger}): Cancellation, errors, debts, and violations.
- **Overlay** ({colors.semantic-overlay}): Scrim below bottom sheets.

## Typography

### Font Family

- **System Sans** — one family for headings, body, amounts, tabs, and controls.
- **System Mono** — optional for receipt or identifier strings only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34px | 700 | Large payout or promo figure |
| `{typography.display-lg}` | 30px | 700 | Major onboarding statement |
| `{typography.display-md}` | 26px | 700 | Section opener |
| `{typography.headline}` | 22px | 700 | Screen and major card heading |
| `{typography.card-title}` | 17px | 600 | Warehouse, payment, course title |
| `{typography.body}` | 14px | 400 | Default explanatory text |
| `{typography.caption}` | 11px | 400 | Distance, hourly rate, dates |
| `{typography.button}` | 16px | 600 | Primary action |

### Principles

- Make amounts, dates, and location names scannable before descriptions.
- Use weight and spacing before color to establish hierarchy.
- Keep secondary metadata compact but never ambiguous.
- Avoid decorative type; illustration and photography carry brand character.

### Note on Font Substitutes

Use **SF Pro Text** on iOS or **Inter** cross-platform. Preserve heavier 600–700 weights for headings and amounts, with regular 400 for explanations.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 12px, card gaps 8–12px, grouped-section gaps 8px, and sheet interiors 20px. Dense rows keep at least 12px vertical breathing room.

### Grid & Container

The interface is a single mobile column. Horizontal carousels hold stories, promotions, and neighboring warehouse cards. Two-column tiles are used for balances, rating, and benefits; course cards may scroll horizontally.

### Whitespace Philosophy

Whitespace exists between functional groups rather than inside them. Keep cards information-dense, then use canvas bands and rounded corners to restore scan rhythm.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Page background |
| 1 | White rounded group | Most cards and rows |
| 2 | White sheet plus scrim | Time, date, and filter decisions |
| 3 | Fixed white navigation with soft top shadow | Persistent tabs |

### Decorative Depth

Use minimal card shadow; separation comes from canvas contrast. Reserve stronger material depth for 3D promotional illustrations and photography.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Badges and thumbnail details |
| `{rounded.sm}` | 10px | Chips and small tiles |
| `{rounded.md}` | 14px | Buttons and fields |
| `{rounded.lg}` | 18px | Cards and grouped rows |
| `{rounded.xl}` | 24px | Navigation container |
| `{rounded.xxl}` | 30px | Bottom sheets |
| `{rounded.pill}` | full | Status and date chips |

### Photography & Illustration Geometry

Warehouse photos fill wide card headers with 14–18px corners. 3D scenes sit within rounded banners and keep their main object fully visible. Training thumbnails use landscape cards with clear, uncropped subject matter.

## Components

### Buttons

Primary actions are saturated blue rectangles with 14px corners and white semibold text. Secondary actions use white or pale-blue fills with blue labels. Favorite is a separate compact heart control.

### Pricing Tabs

No pricing switch was observed. Comparable segmented choices use compact chips: selected options become dark or blue, while alternatives remain white or pale gray.

### Cards & Containers

Warehouse cards combine photo, badges, title, pay, duration, metadata, date chips, and actions. Payments use grouped amount tiles and charts. Profile and settings stack white row groups with leading icons and chevrons.

### Inputs & Forms

Search appears as a pale rounded field. Filters remain visible as chips above results. Structured choices move into bottom sheets with one full-width confirmation button.

### Status & Build Page

Use small pills for promotions, transport, meals, confirmation speed, and deadlines. Payout state and booking availability must remain textual; color only reinforces the label.

### Navigation

Five tabs persist at the bottom: Home, Bookings, Warehouses, Payments, Courses. The selected icon receives blue emphasis. Deeper screens use a back button and centered title; chat stays a compact header action.

### Footer

Account and profile screens end with app version or low-priority legal information. No separate content footer is required inside task flows.

## Do's and Don'ts

### Do

- Lead every decision with the operational fact that matters: pay, time, place, or status.
- Use blue for the one primary action and active navigation.
- Keep filters visible and compact.
- Separate dense groups with canvas bands and rounded surfaces.
- Pair photography with real-work discovery and 3D art with promotions or instruction.

### Don't

- Don't rely on color alone for booking or payment status.
- Don't hide pay context behind a detail tap.
- Don't stack multiple competing blue buttons in one group.
- Don't add heavy shadows to every white card.
- Don't use promotional illustration inside dense financial history rows.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center a bounded mobile column |
| Compact | 390–767px | Default card and carousel layout |
| Small | <390px | Wrap metadata, reduce carousel card width |

### Touch Targets

Keep buttons, rows, chips, and tab items at least 44px high. Provide extra separation between booking and favorite controls and between destructive and confirm actions.

### Collapsing Strategy

Wrap chips across rows before truncating their labels. Stack balance tiles when amounts cannot fit. Bottom-sheet option groups can move from horizontal segments to vertical rows on very narrow screens.

### Image Behavior

Warehouse photos crop to a shallow landscape frame with subject-safe positioning. 3D banners may crop background color but not the primary object or text. Course thumbnails retain their landscape ratio.

## Iteration Guide

1. Establish canvas bands and white grouped surfaces.
2. Implement one warehouse card with real metadata.
3. Add filters and booking sheet before promotional content.
4. Verify monetary hierarchy and status text.
5. Test the five-tab bar and dark theme on every dense screen.

## Known Gaps

- Exact brand tokens and font names were inferred visually.
- Video motion and transitions were not available in the still-image inspection.
- Desktop and tablet adaptations were not present in the catalog scenarios.
- Some long-tail profile flows were inventoried but only representative screens were visually sampled.

</design-context>

Use the design system above for all UI you generate.
