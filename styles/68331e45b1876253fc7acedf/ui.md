<design-context>
---
version: 1
platform: iOS
name: MTS-Music-design-analysis
description: "A near-black streaming interface where album art, personalized cover tiles, white controls, and MTS red accents shape an immersive but highly scannable listening experience."
colors: {primary: "#FF0032", on-primary: "#FFFFFF", primary-focus: "#D8002A", ink: "#F7F7F8", ink-muted: "#A2A2A8", ink-subtle: "#73737A", ink-tertiary: "#505057", canvas: "#000000", surface-1: "#17171A", surface-2: "#242428", surface-3: "#313136", surface-4: "#3E3E44", hairline: "#29292D", hairline-strong: "#404047", hairline-tertiary: "#55555E", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F2F2F4", inverse-surface-2: "#E4E4E8", inverse-ink: "#111114", brand-secure: "#7B46F4", semantic-success: "#3CCD76", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

MTS Music is a black, content-first system where vivid cover art, curated rails, track lists, and persistent playback controls carry the experience.

**Key Characteristics:** black canvas, white type, bright cover art, MTS red emphasis, soft dark panels, and artwork-derived player atmosphere.

# Non-negotiable visual invariants

- Sampled screens consistently use black canvas.
- Typography consistently uses white type.
- Imagery consistently uses bright cover art.
- The reference consistently shows mTS red emphasis.
- The reference consistently shows soft dark panels.
- The reference consistently shows artwork-derived player atmosphere.

# Color and surfaces

### Brand & Accent

MTS red belongs to identity, subscription, and decisive promotional actions; vivid playlist colors live inside artwork tiles.

### Surface

Use pure black for browsing, charcoal for panels and the mini player, and artwork-derived blur only on the full player.

### Text

White carries titles and controls; cool gray separates artist, source, and secondary playback facts.

### Semantic

Green marks active subscription or success; red remains brand-led and should not imply error without context.

# Typography

### Font Family

Use SF Pro Display for listening and collection headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 22 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with the playable item and its creator.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans; preserve clear Cyrillic and compact track-list metrics.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

Discovery uses horizontally scrolling square cover rails and vertical track lists; the player uses one centered artwork column.

### Whitespace Philosophy

Let artwork breathe, but keep track lists and profile rows compact for fast scanning.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Artwork blur may fill the player background; browsing surfaces stay flat and dark with minimal separators.

# Navigation appearance

Use four bottom destinations on a dark translucent bar, with the active icon and label bright white.

# Components

### Buttons

Playback uses high-contrast circular controls; branded or subscription actions use red, while secondary actions stay dark.

### Cards & Containers

Mix cards are image-led with title and short context below; settings use borderless full-width rows.

### Inputs & Forms

Search and account fields use dark filled surfaces, clear white labels, and the red focus language rather than native chrome.

# Imagery and icons

Artwork blur may fill the player background; browsing surfaces stay flat and dark with minimal separators.

Use consistent rounded-square artwork, circular artist portraits, and uncropped album covers in the player.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep download, favorite, subscription, playback, and queue status beside the affected media.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve artwork, title, and playback controls first; reduce editorial copy and rail previews before core actions.

### Image Behavior

Keep cover ratios intact, crop artist imagery consistently, and derive player blur from the active art.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't fill the browsing chrome with red or unrelated gradients.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
