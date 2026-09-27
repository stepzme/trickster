<design-context>
---
version: alpha
name: Litres-design-analysis
description: "A content-first reading and listening system on bright white, led by vivid orange branding, violet purchase actions, dark navy text, and richly colored book covers. Discovery is compact and commercial; reading and playback become quiet, focused workspaces."
colors:
  primary: "#F25A24"
  on-primary: "#FFFFFF"
  primary-hover: "#FF6B36"
  primary-focus: "#D94715"
  ink: "#171727"
  ink-muted: "#737386"
  ink-subtle: "#A5A5B2"
  ink-tertiary: "#C9C9D1"
  canvas: "#FFFFFF"
  surface-1: "#F7F6FA"
  surface-2: "#F0EEF5"
  surface-3: "#E7E4ED"
  surface-4: "#DBD7E3"
  hairline: "#E8E6EC"
  hairline-strong: "#D2CFD9"
  hairline-tertiary: "#B9B5C1"
  inverse-canvas: "#181725"
  inverse-surface-1: "#262436"
  inverse-surface-2: "#37344A"
  inverse-ink: "#FFFFFF"
  brand-secure: "#4D48D8"
  semantic-success: "#35A66F"
  semantic-overlay: "#171727"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 26px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.brand-secure}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  book-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  reader-toolbar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
  audio-player: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px}
  subscription-action: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

Litres is a cover-led bookstore and library where orange identifies the service, violet drives acquisition, and reading or listening tools recede around the content.

**Key Characteristics:**
- Dense horizontal shelves of book covers.
- Orange brand and active navigation.
- Violet purchase and subscription actions.
- Separate focused reader and audio-player modes.
- Compact ratings, formats, and price metadata.

## Colors

### Brand & Accent

Orange carries brand recognition and active library navigation. Violet is the stronger commercial action for buying, subscribing, or continuing access.

### Surface

White is the bookstore and library canvas. Pale lavender-gray separates search, format choices, playback controls, and secondary panels.

### Text

Dark navy carries titles and reading copy. Muted gray supports author, duration, format, and legal or subscription conditions.

### Semantic

Green is limited to availability or completed states. Ratings may use warm yellow; orange and violet must not compete within one action group.

## Typography

### Font Family

Use SF Pro Display for storefront headings and SF Pro Text for metadata, controls, and interface copy. Reader body text may use a restrained serif chosen for long-form comfort.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Reader or library state title |
| headline | 20px | 700 | Shelf and book-detail heading |
| card-title | 15px | 600 | Book title and price |
| body-lg | 14px | 400 | Description and reading copy |
| caption | 9px | 400 | Author, rating, duration, format |

### Principles

- Let book titles lead cards and details.
- Keep author and format quieter than title and price.
- Increase line height and reduce chrome inside the reader.

### Note on Font Substitutes

Inter is suitable for the interface. Use a highly legible serif only for book content, not for store controls.

## Layout

### Spacing System

Use a 4px base, 8–12px cover gaps, and 16px screen gutters.

### Grid & Container

Discovery uses horizontal cover rails and compact vertical lists. Book detail, reader, and playback use one focused column.

### Whitespace Philosophy

Storefronts stay information-dense; reading and playback reserve more uninterrupted space around content and transport controls.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Shelves, library, and reader |
| 1 | Pale group fill | Search and format options |
| 2 | Sticky white action bar | Buy, read, or listen action |
| 3 | Dark or light overlay | Reader and player controls |

### Decorative Depth

Book-cover artwork supplies nearly all visual depth. Keep containers flat and shadows subtle.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges and tiny labels |
| rounded-sm | 8px | Buttons, covers, and search |
| rounded-md | 12px | Format and offer cards |
| rounded-lg | 16px | Player and subscription panels |
| rounded-full | full | Transport and utility controls |

### Photography & Illustration Geometry

Preserve portrait book-cover ratios without cropping. Author portraits are circular; no additional illustration language should compete with publishing artwork.

## Components

### Buttons

Use violet filled buttons for purchase, subscription, and access. Orange identifies brand or current destination; secondary controls are pale or outlined.

### Pricing Tabs

Formats, purchase options, and subscription choices use compact segmented rows or cards with one clearly selected state.

### Cards & Containers

Book cards pair a portrait cover with title, author, rating, and price. Detail sections stay flat and use dividers instead of elevated panels.

### Inputs & Forms

Search is a wide pale field. Reader settings use compact rows, sliders, and segmented choices styled with the same radius and accent system.

### Status & Build Page

Downloads, samples, and access states use short labels near the related book. Progress is visible but visually subordinate to content.

### Navigation

Keep the bottom library navigation stable. Reader and player modes use reduced contextual controls that hide when content needs focus.

### Footer

No footer; bottom navigation, reader controls, or the player queue owns the safe area.

## Do's and Don'ts

### Do

- Preserve authentic cover artwork and ratios.
- Keep title, author, format, and access state clear.
- Separate browsing density from reading calm.
- Make player progress and speed easy to reach.
- Style native reader controls to inherit the system.

### Don't

- Don't recolor book artwork to fit the brand.
- Don't make orange and violet equal primary actions.
- Don't add heavy shadows behind every cover.
- Don't crowd reading text with permanent chrome.
- Don't hide whether content is a sample, purchase, or subscription.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce shelf card width and metadata |
| Standard | 375–430px | Default cover rails and detail layout |
| Wide | 431px+ | Increase reader measure and side gutters |

### Touch Targets

Search, cover cards, purchase actions, reader tools, transport controls, and navigation remain at least 44px.

### Collapsing Strategy

Keep horizontal shelves scrollable, stack purchase options, and reduce secondary metadata before shrinking covers excessively.

### Image Behavior

Contain portrait covers, preserve their full artwork, and use a neutral fallback when an image is unavailable.

## Iteration Guide

Tune cover discovery and access clarity first, then reader comfort, playback controls, and library progress.

## Known Gaps

- Completed purchase confirmation was not visually sampled.
- Offline-download failure states were not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
