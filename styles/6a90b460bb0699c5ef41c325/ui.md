<design-context>
---
version: 1
platform: iOS
name: Ozon-Job-design-analysis
description: "A bright operational mobile UI built from white rounded groups, pale gray page surfaces, and saturated Ozon blue actions. Dense workplace facts are broken into cards, chips, bottom sheets, and five persistent task tabs. Bold system-sans headings, concise monetary labels, documentary warehouse photography, and colorful 3D promotional scenes create a practical interface with energetic brand moments."

colors:
  primary: "#006EF5"
  on-primary: "#FFFFFF"
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
    fontSize: 34
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.8
  display-lg:
    fontFamily: System Sans
    fontSize: 30
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.6
  display-md:
    fontFamily: System Sans
    fontSize: 26
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.4
  headline:
    fontFamily: System Sans
    fontSize: 22
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
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
    padding: [14, 20]
  filter-chip:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [8, 12]
  warehouse-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12
  info-group:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12
  bottom-sheet:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
    padding: [20, 12]
  status-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [4, 8]
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 56
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [20, 12]
---

# Overview

Ozon Job presents a high volume of operational information without abandoning a clear action hierarchy. Pale gray canvas bands separate white rounded groups; bright blue marks the next action and current tab. Photos, 3D promos, and colored banners are concentrated at discovery moments, while money and account screens remain restrained.

**Key Characteristics:**
- Strong Ozon blue reserved for primary actions and selected navigation.
- White rounded groups stacked on a cool gray canvas.
- Bold system-sans headings with compact supporting text.
- Filter chips and bottom sheets for bounded choices.
- Real warehouse photography paired with high-saturation 3D promotional graphics.
- Full dark theme built from near-black canvas and charcoal groups.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Strong Ozon blue reserved for primary actions and selected navigation.
- The reviewed screens show this treatment: White rounded groups stacked on a cool gray canvas.
- The reviewed screens show this treatment: Bold system-sans headings with compact supporting text.
- The reviewed screens show this treatment: Filter chips and bottom sheets for bounded choices.
- The reviewed screens show this treatment: Real warehouse photography paired with high-saturation 3D promotional graphics.
- The reviewed screens show this treatment: Full dark theme built from near-black canvas and charcoal groups.

# Color and surfaces

### Brand & Accent
- **Ozon Blue** ({colors.primary}): Primary buttons, selected tabs, links, and active outlines.
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

# Typography

### Font Family

- **System Sans** — one family for headings, body, amounts, tabs, and controls.
- **System Mono** — optional for receipt or identifier strings only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34pt | 700 | Large payout or promo figure |
| `{typography.display-lg}` | 30pt | 700 | Major onboarding statement |
| `{typography.display-md}` | 26pt | 700 | Section opener |
| `{typography.headline}` | 22pt | 700 | Screen and major card heading |
| `{typography.card-title}` | 17pt | 600 | Warehouse, payment, course title |
| `{typography.body}` | 14pt | 400 | Default explanatory text |
| `{typography.caption}` | 11pt | 400 | Distance, hourly rate, dates |
| `{typography.button}` | 16pt | 600 | Primary action |

### Principles

- Make amounts, dates, and location names scannable before descriptions.
- Use weight and spacing before color to establish hierarchy.
- Keep secondary metadata compact but never ambiguous.
- Avoid decorative type; illustration and photography carry brand character.

### Note on Font Substitutes

Use **SF Pro Text** on iOS or **Inter** cross-platform. Preserve heavier 600–700 weights for headings and amounts, with regular 400 for explanations.

# Screen composition

### Grid & Container

The interface is a single mobile column. Horizontal carousels hold stories, promotions, and neighboring warehouse cards. Two-column tiles are used for balances, rating, and benefits; course cards may scroll horizontally.

### Whitespace Philosophy

Whitespace exists between functional groups rather than inside them. Keep cards information-dense, then use canvas bands and rounded corners to restore scan rhythm.

# Navigation appearance

Five tabs persist at the bottom: Home, Bookings, Warehouses, Payments, Courses. The selected icon receives blue emphasis. Deeper screens use a back button and centered title; chat stays a compact header action.

# Components

### Buttons

Primary actions are saturated blue rectangles with 14pt corners and white semibold text. Secondary actions use white or pale-blue fills with blue labels. Favorite is a separate compact heart control.

### Cards & Containers

Warehouse cards combine photo, badges, title, pay, duration, metadata, date chips, and actions. Payments use grouped amount tiles and charts. Profile and settings stack white row groups with leading icons and chevrons.

### Inputs & Forms

Search appears as a pale rounded field. Filters remain visible as chips above results. Structured choices move into bottom sheets with one full-width confirmation button.

### Status & Build Page

Use small pills for promotions, transport, meals, confirmation speed, and deadlines. Payout state and booking availability must remain textual; color only reinforces the label.

### Navigation

Five tabs persist at the bottom: Home, Bookings, Warehouses, Payments, Courses. The selected icon receives blue emphasis. Deeper screens use a back button and centered title; chat stays a compact header action.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Page background |
| 1 | White rounded group | Most cards and rows |
| 2 | White sheet plus scrim | Time, date, and filter decisions |
| 3 | Fixed white navigation with soft top shadow | Persistent tabs |

### Decorative Depth

Use minimal card shadow; separation comes from canvas contrast. Reserve stronger material depth for 3D promotional illustrations and photography.

# States

Use small pills for promotions, transport, meals, confirmation speed, and deadlines. Payout state and booking availability must remain textual; color only reinforces the label.

# iOS adaptation

| Wide | 768pt+ | Center a bounded mobile column |
| Small | <390pt | Wrap metadata, reduce carousel card width |

### Touch Targets

Keep buttons, rows, chips, and tab items at least 44pt high. Provide extra separation between booking and favorite controls and between destructive and confirm actions.

### Collapsing Strategy

Wrap chips across rows before truncating their labels. Stack balance tiles when amounts cannot fit. Bottom-sheet option groups can move from horizontal segments to vertical rows on very narrow screens.

### Image Behavior

Warehouse photos crop to a shallow landscape frame with subject-safe positioning. 3D banners may crop background color but not the primary object or text. Course thumbnails retain their landscape ratio.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

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

</design-context>
