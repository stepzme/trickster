<design-context>
---
version: 1
platform: iOS
name: yandex-disk-design-analysis
description: "A dark, dense cloud-storage interface built from near-black canvas, charcoal panels, high-contrast white type, a yellow creation accent, and blue operational feedback. Media cards, file rows, storage meters, modal creation sheets, and a five-item bottom bar prioritize utility while onboarding adds neon space motifs."
colors:
  primary: "#FFD72E"
  on-primary: "#171717"
  feedback: "#3878F3"
  ink: "#F6F6F7"
  ink-muted: "#B2B3B7"
  ink-subtle: "#77787D"
  canvas: "#0D0D0E"
  surface-1: "#1B1B1D"
  surface-2: "#242426"
  surface-3: "#303034"
  hairline: "#343438"
  semantic-success: "#65C852"
  semantic-danger: "#EA5454"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: YS Text, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-lg: { fontFamily: YS Text, fontSize: 28, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  display-md: { fontFamily: YS Text, fontSize: 24, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2 }
  headline: { fontFamily: YS Text, fontSize: 20, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: YS Text, fontSize: 17, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 5, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  action-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  floating-create: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.headline}", rounded: "{rounded.full}", size: 52 }
  storage-meter: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [10, 12]}
  activity-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12 }
  file-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [6, 12]}
  creation-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 16 }
  toast: { backgroundColor: "{colors.feedback}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: [10, 14]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
  bottom navigation: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16 }
---

# Overview

Yandex Disk is a nearly black file workspace with bright media, yellow creation controls, and blue operational feedback. Feed cards add visual richness; Files remains a compact, high-density list. Creation and account actions rise in charcoal sheets.

**Key Characteristics:**
- Near-black canvas and charcoal hierarchy.
- Yellow floating create and purchase actions.
- Blue confirmation banners.
- Persistent storage meter.
- Five-section bottom navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use near-black canvas and charcoal hierarchy.
- The reference consistently shows yellow floating create and purchase actions.
- The reference consistently shows blue confirmation banners.
- The reference consistently shows persistent storage meter.
- Navigation consistently uses five-section bottom navigation.

# Color and surfaces

### Brand & Accent
- **Yellow** ({colors.primary}): Create, buy space, subscribe, and proceed.
- **Feedback Blue** ({colors.feedback}): Successful file operations and account guidance.

### Surface
- **Canvas** ({colors.canvas}): File lists and app base.
- **Surface 1** ({colors.surface-1}): Navigation, sheets, and top chrome.
- **Surface 2/3**: Activity cards, storage, selected rows, and dialogs.
- **Hairline** ({colors.hairline}): Quiet separators in lists and grouped controls.

### Text
- **Ink** ({colors.ink}): Titles, filenames, values, and actions.
- **Ink Muted** ({colors.ink-muted}): Dates, metadata, and inactive navigation.
- **Ink Subtle** ({colors.ink-subtle}): Secondary file information.

### Semantic
- **Success** ({colors.semantic-success}): Storage capacity and availability.
- **Danger** ({colors.semantic-danger}): Destructive file actions.
- **Overlay** ({colors.semantic-overlay}): Sheet and dialog dimming.

# Typography

### Font Family

- **YS Text** — all app chrome, file data, feed cards, and account controls.
- **System Mono** — optional technical identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34 points | 700 | Onboarding headline |
| `{typography.display-md}` | 24 points | 700 | Major empty or upgrade state |
| `{typography.headline}` | 20 points | 600 | Screen or sheet heading |
| `{typography.card-title}` | 17 points | 600 | Activity summary |
| `{typography.body}` | 14 points | 400 | Filename and control |
| `{typography.caption}` | 11 points | 400 | Metadata and tab labels |

### Principles

- Keep file rows compact and aligned.
- Use weight before color to establish hierarchy.
- Keep yellow text rare; yellow is primarily a fill.
- Preserve readable metadata at small sizes.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

# Screen composition

### Spacing System

Use a 4 points base. File rows use 6–8 points vertical rhythm; cards use 12–16 points; sheets use 16 points gutters.

### Grid & Container

Feed is a single card stream with media grids inside cards. Files is a single list. Creation choices form a three-column icon grid within a bottom sheet.

### Whitespace Philosophy

Density communicates utility. Keep generous space only in onboarding, upgrade, and focused modal states.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black canvas | File list |
| 1 | Charcoal bar or card | Navigation and activity |
| 2 | Raised dark sheet | Create and account |
| 3 | Blue overlay banner | Immediate feedback |

### Decorative Depth

Media thumbnails create most depth. Use restrained shadow and strong surface contrast rather than glossy effects.

# Navigation appearance

Feed, Files, Photos, Albums, and More form the bottom bar. Active state is white; inactive state is gray.

# Components

### Buttons

Primary purchase and creation buttons are yellow with dark text. Secondary actions are charcoal. The floating plus stays visible above navigation.

### Cards & Containers

Activity cards combine date, summary, preview grid, and overflow menu. Account cards group quota, profile, and utility shortcuts.

### Inputs & Forms

Folder creation uses a centered dark dialog with a single field and blue text actions. Search is an icon entry in the top bar.

# Imagery and icons

Media thumbnails create most depth. Use restrained shadow and strong surface contrast rather than glossy effects.

Uploaded media stays rectangular with small radii. Onboarding illustration is centered and compact on black.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Quota uses a green progress bar and explicit capacity copy. Upload state appears inline; completed operations use a blue toast.

# iOS adaptation

### Touch Targets

Keep tabs, row menus, floating create, and sheet options at least 44 points.

### Collapsing Strategy

Truncate filenames before removing metadata. Let feed media reduce columns; keep quota and create visible.

### Image Behavior

Use cover for photos and video previews, contain for documents and folders, and preserve media aspect where practical.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't brighten the dark canvas with decorative gradients.
- Don't enlarge file rows into cards.
- Don't hide destructive actions near creation.
- Don't use yellow for passive labels.
- Don't crop document thumbnails as photography.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
