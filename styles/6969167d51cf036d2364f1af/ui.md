<design-context>
---
version: alpha
name: Airbnb-design-analysis
description: "A photography-led travel marketplace on a bright white canvas, organized by a compact black typographic hierarchy and the signature coral-pink accent. Rounded image cards, floating search surfaces, light-gray sheets, map price pins, and a persistent five-tab bar keep discovery approachable while fixed bottom reservation actions make conversion explicit. Traveler and host modes share the same restrained surfaces but use distinct navigation."

colors:
  primary: "#E82161"
  on-primary: "#FFFFFF"
  primary-hover: "#D91558"
  primary-soft: "#FFF0F5"
  ink: "#222222"
  ink-muted: "#6A6A6A"
  ink-subtle: "#A0A0A0"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F7"
  surface-2: "#EFEFEF"
  surface-warm: "#F8F5ED"
  hairline: "#DDDDDD"
  hairline-strong: "#B0B0B0"
  inverse-canvas: "#222222"
  inverse-ink: "#FFFFFF"
  semantic-success: "#0B8F55"
  semantic-info: "#4A8DFF"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Marketplace Sans
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.0px
  display-lg:
    fontFamily: Marketplace Sans
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.6px
  display-md:
    fontFamily: Marketplace Sans
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.3px
  headline:
    fontFamily: Marketplace Sans
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.2px
  card-title:
    fontFamily: Marketplace Sans
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: Marketplace Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: Marketplace Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  body:
    fontFamily: Marketplace Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: Marketplace Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: Marketplace Sans
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  button:
    fontFamily: Marketplace Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Marketplace Sans
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
  search-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 14px 20px
  listing-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 0
  search-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20px
  price-pin:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: 6px 10px
  status-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 24px 16px
---

## Overview

Airbnb keeps interface color restrained so accommodation, experience, and service photography can lead. The coral-pink accent marks search, reservation, saved state, and selected navigation. Rounded cards and floating white surfaces create a soft marketplace rhythm across list, map, trip, message, profile, and host screens.

**Key Characteristics:**
- Full-color photography as the primary discovery medium.
- White canvas with pale-gray functional layers.
- Coral-pink reserved for high-value actions and selected state.
- Floating pill search and persistent five-tab navigation.
- Rounded cards, sheets, and image corners with minimal shadow.
- Separate traveler and host navigation modes.

## Colors

### Brand & Accent
- **Coral Pink** ({colors.primary}): Search, Reserve, saved heart, and selected navigation.
- **Coral Hover** ({colors.primary-hover}): Pressed primary action.
- **Soft Coral** ({colors.primary-soft}): Quiet selected and informational background.

### Surface
- **Canvas** ({colors.canvas}): Default page, cards, and fixed navigation.
- **Surface 1** ({colors.surface-1}): Search backdrop, secondary actions, and grouped regions.
- **Surface 2** ({colors.surface-2}): Skeletons, disabled controls, and quiet chips.
- **Warm Surface** ({colors.surface-warm}): Host education and editorial recommendation cards.
- **Inverse Canvas** ({colors.inverse-canvas}): Selected dark filters and emphasis.

### Text
- **Ink** ({colors.ink}): Titles, prices, destinations, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Dates, host type, explanations, and message preview.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and low-priority labels.
- **Inverse Ink** ({colors.inverse-ink}): Text on dark selections.

### Semantic
- **Success** ({colors.semantic-success}): Confirmed reservation and online status.
- **Info** ({colors.semantic-info}): Identity and reservation notices.
- **Overlay** ({colors.semantic-overlay}): Scrim below sheets and host-mode dialogs.

## Typography

### Font Family

- **Marketplace Sans** — one friendly neutral sans for headings, cards, body, prices, and navigation.
- **System Mono** — only for reservation or payment identifiers where needed.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | Major host setup statement |
| `{typography.display-lg}` | 32px | 700 | Empty state or mode heading |
| `{typography.display-md}` | 26px | 700 | Page title |
| `{typography.headline}` | 22px | 600 | Listing section heading |
| `{typography.card-title}` | 16px | 600 | Property, trip, and message title |
| `{typography.body}` | 14px | 400 | Default details |
| `{typography.caption}` | 11px | 400 | Tab and badge labels |
| `{typography.button}` | 15px | 600 | Search and Reserve |

### Principles

- Let photographs establish mood; keep type functional and compact.
- Keep destination and price slightly stronger than host and date metadata.
- Use sentence case throughout.
- Separate long descriptions with section headings and rules.

### Note on Font Substitutes

Use **Airbnb Cereal** when licensed; otherwise **Circular**, **SF Pro**, or **Inter**. Preserve rounded counters, compact body proportions, and 600–700 heading weights.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 16–20px, card gaps 12–16px, section gaps 24px, and sheet interiors 20px. Fixed bottom actions respect the safe area with 12–16px padding.

### Grid & Container

Explore uses horizontal two-card carousels in one mobile column. Listing detail is a vertical editorial stack. Map search uses full-screen map plus one bottom preview card. Profile and host menus use a single grouped list.

### Whitespace Philosophy

White space separates destinations and tasks. Do not fill gaps with decorative color. Allow empty wishlists and message states to remain visibly sparse.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Lists and details |
| 1 | Light border and soft shadow | Search bar, listing cards |
| 2 | White rounded sheet on gray backdrop | Search and bounded choices |
| 3 | Fixed white bar with top rule | Reservation and navigation |

### Decorative Depth

Use photographic depth, soft ambient shadow, and restrained blur. Map pins and floating search controls may lift slightly; ordinary list rows remain flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Tiny badges |
| `{rounded.sm}` | 10px | Chips and thumbnails |
| `{rounded.md}` | 14px | Buttons and fields |
| `{rounded.lg}` | 18px | Listing photos and cards |
| `{rounded.xl}` | 24px | Search sheets |
| `{rounded.xxl}` | 30px | Mode-selection dialogs |
| `{rounded.pill}` | full | Search and price pins |

### Photography & Illustration Geometry

Listing and experience photos crop to rounded landscape or near-square cards with subject-safe cover behavior. Photo galleries vary scale but keep consistent corner treatment. Emoji-like mode icons are functional labels, not a reusable illustration language.

## Components

### Buttons

Primary Search and Reserve actions use coral fill, white semibold text, and 14px corners. Secondary buttons use pale gray or white with dark text. Favorite is a circular heart overlay on photography.

### Pricing Tabs

No pricing-plan tabs were observed. Search mode switching uses three icon-and-label tabs with an underline; filters use dark selected pills.

### Cards & Containers

Listing cards lead with photography, then compact title, metadata, price, and rating. Trip cards add reservation status and one quiet bottom action. Host education cards use a warm backdrop and photo collage.

### Inputs & Forms

Search separates Where, When, and Who into clear steps. Fields have visible borders and generous touch space. Host setup uses sequential large choices instead of one long form.

### Status & Build Page

Reservation status appears in a labeled pill and accompanying notice. Guest favourite, pending, identity review, confirmed, and cancellation remain readable without relying on color alone.

### Navigation

Traveler mode uses Explore, Wishlists, Trips, Messages, Profile. Hosting uses Today, Calendar, Listings, Messages, Menu. Selected icons and labels turn coral; the two modes switch explicitly.

### Footer

Fixed reservation bars show price context and one Reserve action. Profile and legal content ends with quiet link rows; discovery feeds do not add a separate footer.

## Do's and Don'ts

### Do

- Let real photography carry destination character.
- Reserve coral for search, booking, saved, and selected state.
- Keep search criteria resumable and visible.
- Use one fixed reservation action with price context.
- Treat traveler and host navigation as separate modes.

### Don't

- Don't use coral as a large section background.
- Don't hide price or reservation state behind unlabeled icons.
- Don't crowd listing photos with multiple badges.
- Don't add heavy shadows to every card.
- Don't replace real accommodation imagery with decorative illustration.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Center or expand to a two-column listing grid |
| Compact | 390–767px | Default mobile carousels and sheets |
| Small | <390px | Reduce card width and wrap metadata |

### Touch Targets

Maintain at least 44px for tabs, hearts, filter controls, map pins, and bottom actions. Keep close and back buttons detached from photo-gallery edges.

### Collapsing Strategy

Stack search fields when needed; preserve Where, When, Who order. Convert two-card rows to one wider card before shrinking photos below recognition. Fixed reservation bars keep price and action on one row where possible.

### Image Behavior

Use cover for property cards and contain only for small profile or functional imagery. Preserve important rooms, people, and landmarks within safe crop areas. Gallery images keep their original hierarchy rather than uniform cropping.

## Iteration Guide

1. Build the photo card and typography hierarchy first.
2. Establish search, result, and listing-detail continuity.
3. Add map pins and the fixed reservation action.
4. Implement traveler tabs before host-mode navigation.
5. Verify photo crops, prices, and status labels with real content.

## Known Gaps

- Exact proprietary font metrics were inferred visually.
- Motion in video-only Explore and onboarding screens could not be assessed.
- Many host-management flows were inventoried; representative screens were sampled visually.
- Large-screen layouts were not present in the inspected catalog scenarios.

</design-context>

Use the design system above for all UI you generate.
