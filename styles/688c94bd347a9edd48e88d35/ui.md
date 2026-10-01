<design-context>
---
version: 1
platform: iOS
name: Litres-design-analysis
description: "A content-first reading and listening system on bright white, led by vivid orange branding, violet purchase actions, dark navy text, and richly colored book covers. Discovery is compact and commercial; reading and playback become quiet, focused workspaces."
colors:
  primary: "#F25A24"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  xxl: 26
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.brand-secure}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  book-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0}
  search-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  reader-toolbar: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
  audio-player: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  subscription-action: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

Litres is a cover-led bookstore and library where orange identifies the service, violet drives acquisition, and reading or listening tools recede around the content.

**Key Characteristics:**
- Dense horizontal shelves of book covers.
- Orange brand and active navigation.
- Violet purchase and subscription actions.
- Separate focused reader and audio-player modes.
- Compact ratings, formats, and price metadata.

# Non-negotiable visual invariants

- The reference consistently shows dense horizontal shelves of book covers.
- Navigation consistently uses orange brand and active navigation.
- The reference consistently shows violet purchase and subscription actions.
- The reference consistently shows separate focused reader and audio-player modes.
- The reference consistently shows compact ratings, formats, and price metadata.

# Color and surfaces

### Brand & Accent

Orange carries brand recognition and active library navigation. Violet is the stronger commercial action for buying, subscribing, or continuing access.

### Surface

White is the bookstore and library canvas. Pale lavender-gray separates search, format choices, playback controls, and secondary panels.

### Text

Dark navy carries titles and reading copy. Muted gray supports author, duration, format, and legal or subscription conditions.

### Semantic

Green is limited to availability or completed states. Ratings may use warm yellow; orange and violet must not compete within one action group.

# Typography

### Font Family

Use SF Pro Display for storefront headings and SF Pro Text for metadata, controls, and interface copy. Reader body text may use a restrained serif chosen for long-form comfort.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Reader or library state title |
| headline | 20 points | 700 | Shelf and book-detail heading |
| card-title | 15 points | 600 | Book title and price |
| body-lg | 14 points | 400 | Description and reading copy |
| caption | 9 points | 400 | Author, rating, duration, format |

### Principles

- Let book titles lead cards and details.
- Keep author and format quieter than title and price.
- Increase line height and reduce chrome inside the reader.

### Note on Font Substitutes

Inter is suitable for the interface. Use a highly legible serif only for book content, not for store controls.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points cover gaps, and 16 points screen gutters.

### Grid & Container

Discovery uses horizontal cover rails and compact vertical lists. Book detail, reader, and playback use one focused column.

### Whitespace Philosophy

Storefronts stay information-dense; reading and playback reserve more uninterrupted space around content and transport controls.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Shelves, library, and reader |
| 1 | Pale group fill | Search and format options |
| 2 | Sticky white action bar | Buy, read, or listen action |
| 3 | Dark or light overlay | Reader and player controls |

### Decorative Depth

Book-cover artwork supplies nearly all visual depth. Keep containers flat and shadows subtle.

# Navigation appearance

Keep the bottom library navigation stable. Reader and player modes use reduced contextual controls that hide when content needs focus.

# Components

### Buttons

Use violet filled buttons for purchase, subscription, and access. Orange identifies brand or current destination; secondary controls are pale or outlined.

### Cards & Containers

Book cards pair a portrait cover with title, author, rating, and price. Detail sections stay flat and use dividers instead of elevated panels.

### Inputs & Forms

Search is a wide pale field. Reader settings use compact rows, sliders, and segmented choices styled with the same radius and accent system.

# Imagery and icons

Book-cover artwork supplies nearly all visual depth. Keep containers flat and shadows subtle.

Preserve portrait book-cover ratios without cropping. Author portraits are circular; no additional illustration language should compete with publishing artwork.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Downloads, samples, and access states use short labels near the related book. Progress is visible but visually subordinate to content.

# iOS adaptation

### Touch Targets

Search, cover cards, purchase actions, reader tools, transport controls, and navigation remain at least 44 points.

### Collapsing Strategy

Keep horizontal shelves scrollable, stack purchase options, and reduce secondary metadata before shrinking covers excessively.

### Image Behavior

Contain portrait covers, preserve their full artwork, and use a neutral fallback when an image is unavailable.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't recolor book artwork to fit the brand.
- Don't make orange and violet equal primary actions.
- Don't add heavy shadows behind every cover.
- Don't crowd reading text with permanent chrome.
- Don't hide whether content is a sample, purchase, or subscription.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
