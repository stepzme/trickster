<design-context>
---
version: 1
platform: iOS
name: Rocketbank-design-analysis
description: "An expressive banking interface built on an airy blue-to-pink wash, ink-black floating controls, oversized experimental typography, and soft irregular white cards. Banking actions coexist with conversational prompts, lifestyle photography, mascot-led assistance, and deep personalization. The system feels more like an animated culture product than a conventional financial dashboard."

colors:
  primary: "#0A080C"
  on-primary: "#FFFFFF"
  primary-soft: "#EDE8F2"
  ink: "#0A080C"
  ink-muted: "#68636C"
  ink-subtle: "#AAA5AF"
  canvas-top: "#DFF2FF"
  canvas-bottom: "#F5D5E8"
  surface-1: "#FFFFFF"
  surface-2: "#F5F0F7"
  surface-3: "#E9E3EF"
  dark-canvas: "#1E1B20"
  accent-pink: "#E8BFD8"
  accent-blue: "#CFEAFF"
  accent-green: "#2FB878"
  hairline: "#DED8E2"
  semantic-success: "#2FB878"
  semantic-danger: "#E45867"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Extended Display Sans
    fontSize: 42
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: -1.3
  display-lg:
    fontFamily: Extended Display Sans
    fontSize: 34
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: -0.9
  display-md:
    fontFamily: Extended Display Sans
    fontSize: 28
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: -0.5
  headline:
    fontFamily: Extended Display Sans
    fontSize: 23
    fontWeight: 750
    lineHeight: 1.08
    letterSpacing: -0.3
  card-title:
    fontFamily: Extended Display Sans
    fontSize: 18
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.1
  subhead:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.32
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.28
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.4
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 8
  sm: 12
  md: 18
  lg: 26
  xl: 34
  xxl: 44
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
    rounded: "{rounded.pill}"
    padding: [14, 20]
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  balance-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 20
  shortcut-pill:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: [12, 16]
  floating-dock:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [10, 18]
  assistant-field:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: [14, 18]
  media-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xl}"
    padding: 0
  settings-sheet:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xxl}"
    padding: 24
---

# Overview

Rocketbank uses a continuously shifting pastel atmosphere rather than a neutral banking shell. Large black type, floating black controls, and soft white shapes remain stable while balances, assistant messages, media, and lifestyle content change around them. The result is expressive and unconventional, but core actions still use simple high-contrast affordances.

**Key Characteristics:**
- Pale blue-to-pink page wash with no visible hard container boundary.
- Black floating pills and circles as the primary interaction anchors.
- Wide experimental display type with tight line height.
- White cards with soft, slightly irregular silhouettes and layered offsets.
- Conversational prompts integrated into Home.
- Full-bleed avatars, venue photography, and mascot imagery as product surfaces.

# Non-negotiable visual invariants

- The reference consistently shows pale blue-to-pink page wash with no visible hard container boundary.
- The reference consistently shows black floating pills and circles as the primary interaction anchors.
- Typography consistently uses wide experimental display type with tight line height.
- The reference consistently shows white cards with soft, slightly irregular silhouettes and layered offsets.
- The reference consistently shows conversational prompts integrated into Home.
- Imagery consistently uses full-bleed avatars, venue photography, and mascot imagery as product surfaces.

# Color and surfaces

### Brand & Accent

- **Ink Black** ({colors.primary}) is the actual action color for docks, assistant entry, circular buttons, and important toggles.
- The blue-to-pink canvas gradient supplies atmosphere rather than status.
- Pink and blue accents stay pale so imagery and black controls keep priority.

### Surface

- **Surface 1** ({colors.surface-1}) carries balance cards, shortcut pills, and sheets.
- **Surface 2** ({colors.surface-2}) supports quieter personalization cards.
- **Dark Canvas** ({colors.dark-canvas}) belongs to the cinematic onboarding sequence.
- Use layered white offsets behind cards instead of conventional gray borders.

### Text

- Near-black ink carries most interface content.
- Muted gray supports descriptions and inactive catalog items.
- White appears on black controls and over photography.

### Semantic

Keep green and red limited to completion and failure. Do not confuse the ambient pink-blue gradient with semantic state.

# Typography

### Font Family

- Use an extended, heavy display sans for major headings, catalog categories, and expressive labels.
- Use a neutral system sans for forms, transactions, helper text, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 42 points | 800 | Catalog category or countdown |
| `{typography.display-lg}` | 34 points | 800 | Major statement |
| `{typography.display-md}` | 28 points | 750 | Screen heading |
| `{typography.headline}` | 23 points | 750 | Section title |
| `{typography.card-title}` | 18 points | 700 | Balance or media card title |
| `{typography.body}` | 14 points | 400 | Default content |
| `{typography.caption}` | 11 points | 400 | Transaction and system metadata |

### Principles

- Let large display type behave as a navigational object, not only a heading.
- Keep transaction and form typography conventional and readable.
- Use short conversational phrases on Home.
- Avoid multiple display sizes competing on one card.

### Note on Font Substitutes

Use a wide geometric sans such as Arial Black or a carefully expanded SF Pro Display for the expressive family, with SF Pro Text for functional content. Preserve width and weight rather than choosing a rounded substitute.

# Screen composition

### Spacing System

Use a 4 points base, 15 points screen gutters, 10–14 points between shortcut pills, and 20–28 points between major zones. Cards use 20 points internal padding. Floating controls sit above the safe area with at least 12 points clearance.

### Grid & Container

Home is a single expressive column with one row of shortcut pills, a large balance card, and a compact transaction feed. Catalog uses a centered vertical selector. Lifestyle discovery uses edge-to-edge portrait cards and circular floating actions.

### Whitespace Philosophy

Large open pastel areas are intentional. Do not fill them with extra widgets. Use empty space to isolate the assistant, balance, or current catalog selection.

Surface hierarchy observed in the source:

Layer white cards with pale offset silhouettes and subtle blur rather than ordinary drop shadows. Black controls float through contrast. Media cards gain depth from imagery; sheets overlap the background with large top radii.

### Decorative Depth

Use offset white silhouettes, pastel blur, oversized media, and the floating black dock as the depth system. Avoid conventional card shadows and metallic finance effects.

# Navigation appearance

The floating three-zone dock is the primary shell. Profile and assistant use large circular or pill actions; back navigation can float as a separate black circle over content.

# Components

### Buttons

Primary actions are black pills or circles with white icons and labels. Secondary actions are white pills on the pastel wash. Native behavior is acceptable only when visible styling follows this system rather than default iOS blue or grouped gray controls.

### Cards & Containers

Use a black pill with three evenly spaced icon zones. The selected icon is white and the inactive icons are muted. Keep it detached from screen edges.
Use white pills for QR, Transfer, and Button. Place the Rocky assistant field above them and the large balance card below. Avoid colored shortcut icons.
Use an irregular white card with an optional pale offset layer. Keep account label, amount, and physical card thumbnail sparse and high contrast.

### Inputs & Forms

Use broad pills and large white sheets for name, transfer, and settings inputs. Labels stay conventional and readable even when the surrounding screen is expressive.

# Imagery and icons

Use offset white silhouettes, pastel blur, oversized media, and the floating black dock as the depth system. Avoid conventional card shadows and metallic finance effects.

Portraits and venue images use large rounded rectangles with the subject centered and controls kept clear. Character art can occupy a pill or full card, but financial thumbnails remain small and subordinate.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Use a large photo with white display title and a short descriptor. Float black circular navigation, map, save, and assistant actions along the bottom.
Completion appears in a black toast with a green circular status icon. Avoid celebratory modal chrome that conflicts with the persistent visual atmosphere.

# iOS adaptation

### Touch Targets

Black circles, pills, the floating dock, and shortcut controls remain at least 44 points. Oversized visual controls should not contain tiny isolated hit regions.

### Collapsing Strategy

Keep shortcut pills in one row only while targets remain usable; otherwise wrap intentionally. Let the product selector crop distant labels rather than shrinking the active category.

### Image Behavior

Fill media cards with centered or top-weighted subjects and protect text zones with simple composition, not opaque overlays. Preserve the large rounded crop on all phone widths.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not convert the interface into a generic white banking dashboard.
- Do not add thin borders around every white shape.
- Do not fill open gradient areas with extra content.
- Do not use colorful icon sets for shortcuts.
- Do not place essential text over visually busy photography.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
