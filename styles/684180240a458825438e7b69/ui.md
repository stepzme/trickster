<design-context>
---
version: 1
platform: iOS
name: Okko-design-analysis
description: "A cinematic black streaming system built from oversized key art, vivid posters, heavy white headings, quiet outline navigation, and violet gradient subscription actions."
colors: {primary: "#7A18F5", on-primary: "#FFFFFF", primary-focus: "#5D0EC6", ink: "#F7F7F8", ink-muted: "#ABABB0", ink-subtle: "#74747A", ink-tertiary: "#4F5056", canvas: "#000000", surface-1: "#171719", surface-2: "#252529", surface-3: "#333338", surface-4: "#414147", hairline: "#29292D", hairline-strong: "#414147", hairline-tertiary: "#57575E", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#121316", brand-secure: "#26C46A", semantic-success: "#2BC66F", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Okko lets film, series, channels, and sport artwork dominate a pure black interface while white editorial type and violet subscription actions maintain a clear viewing hierarchy.

**Key Characteristics:** pure black canvas, oversized key art, poster rails, heavy white headings, violet purchase gradient, dark utility circles, and live sports cards.

# Non-negotiable visual invariants

- Sampled screens consistently use pure black canvas.
- Imagery consistently uses oversized key art.
- The reference consistently shows poster rails.
- The reference consistently shows heavy white headings.
- Sampled screens consistently use violet purchase gradient.
- The reference consistently shows dark utility circles.
- The reference consistently shows live sports cards.

# Color and surfaces

### Brand & Accent

Violet identifies subscription and major commerce actions; title artwork supplies nearly all other color.

### Surface

Use black for the canvas, deep charcoal for filters and schedules, and transparent overlays on key art.

### Text

White leads titles and section headings; gray supports genre, duration, season, age, and schedule status.

### Semantic

Green indicates rating or availability, red marks live state, and violet remains commercial rather than semantic.

# Typography

### Font Family

Use SF Pro Display for content and editorial headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with the title, live event, or playback decision.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use a heavy neutral system sans; preserve compact poster metadata and large Cyrillic headings.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

Home and Sport use horizontal poster rails; Catalog uses a two-column category grid and vertical genre list.

### Whitespace Philosophy

Let hero art breathe, but keep poster rails and event schedules visually dense.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use full-bleed art, gradients for text protection, and dark raised utility circles rather than card shadows.

# Navigation appearance

Use five outline destinations on black, with solid white icon and label for the active destination.

# Components

### Buttons

Major subscription or purchase actions use a full-width violet gradient; media utilities use dark circular controls.

### Cards & Containers

Posters carry title imagery; match and schedule cards align time, teams, state, and reminder without excess decoration.

### Inputs & Forms

Search uses a high-contrast light field on black, styled to the system rather than default platform chrome.

# Imagery and icons

Use full-bleed art, gradients for text protection, and dark raised utility circles rather than card shadows.

Posters remain portrait, sport banners stay wide, and full detail art may crop edge-to-edge.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep live, upcoming, rating, age, price, subscription, and season status adjacent to content art.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve hero, title, and watch or subscribe action; reduce secondary metadata and rail previews first.

### Image Behavior

Maintain poster and banner ratios, protect faces, and use dark gradients only where typography needs contrast.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't place unrelated gradients behind every list or poster rail.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
