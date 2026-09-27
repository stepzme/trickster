<design-context>
---
version: alpha
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
  display-xl: { fontFamily: YS Text, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-lg: { fontFamily: YS Text, fontSize: 28px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  display-md: { fontFamily: YS Text, fontSize: 24px, fontWeight: 700, lineHeight: 1.16, letterSpacing: -0.2px }
  headline: { fontFamily: YS Text, fontSize: 20px, fontWeight: 600, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: YS Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 5px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  action-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 13px 18px }
  floating-create: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.headline}", rounded: "{rounded.full}", size: 52px }
  storage-meter: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px 12px }
  activity-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px }
  file-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 6px 12px }
  creation-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xl}", padding: 16px }
  toast: { backgroundColor: "{colors.feedback}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 10px 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 16px }
---

## Overview

Yandex Disk is a nearly black file workspace with bright media, yellow creation controls, and blue operational feedback. Feed cards add visual richness; Files remains a compact, high-density list. Creation and account actions rise in charcoal sheets.

**Key Characteristics:**
- Near-black canvas and charcoal hierarchy.
- Yellow floating create and purchase actions.
- Blue confirmation banners.
- Persistent storage meter.
- Five-section bottom navigation.

## Colors

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

## Typography

### Font Family

- **YS Text** — all app chrome, file data, feed cards, and account controls.
- **System Mono** — optional technical identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 34px | 700 | Onboarding headline |
| `{typography.display-md}` | 24px | 700 | Major empty or upgrade state |
| `{typography.headline}` | 20px | 600 | Screen or sheet heading |
| `{typography.card-title}` | 17px | 600 | Activity summary |
| `{typography.body}` | 14px | 400 | Filename and control |
| `{typography.caption}` | 11px | 400 | Metadata and tab labels |

### Principles

- Keep file rows compact and aligned.
- Use weight before color to establish hierarchy.
- Keep yellow text rare; yellow is primarily a fill.
- Preserve readable metadata at small sizes.

### Note on Font Substitutes

Use **SF Pro** on iOS or **Inter** when YS Text is unavailable.

## Layout

### Spacing System

Use a 4px base. File rows use 6–8px vertical rhythm; cards use 12–16px; sheets use 16px gutters.

### Grid & Container

Feed is a single card stream with media grids inside cards. Files is a single list. Creation choices form a three-column icon grid within a bottom sheet.

### Whitespace Philosophy

Density communicates utility. Keep generous space only in onboarding, upgrade, and focused modal states.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Near-black canvas | File list |
| 1 | Charcoal bar or card | Navigation and activity |
| 2 | Raised dark sheet | Create and account |
| 3 | Blue overlay banner | Immediate feedback |

### Decorative Depth

Media thumbnails create most depth. Use restrained shadow and strong surface contrast rather than glossy effects.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.sm}` | 8px | Small thumbnails and chips |
| `{rounded.md}` | 12px | Buttons and meters |
| `{rounded.lg}` | 16px | Feed cards |
| `{rounded.xl}` | 22px | Bottom sheets |
| `{rounded.full}` | full | Floating create |

### Photography & Illustration Geometry

Uploaded media stays rectangular with small radii. Onboarding illustration is centered and compact on black.

## Components

### Buttons

Primary purchase and creation buttons are yellow with dark text. Secondary actions are charcoal. The floating plus stays visible above navigation.

### Pricing Tabs

No pricing-plan tabs were observed. Storage upgrade is a compact inline control next to the quota meter.

### Cards & Containers

Activity cards combine date, summary, preview grid, and overflow menu. Account cards group quota, profile, and utility shortcuts.

### Inputs & Forms

Folder creation uses a centered dark dialog with a single field and blue text actions. Search is an icon entry in the top bar.

### Status & Build Page

Quota uses a green progress bar and explicit capacity copy. Upload state appears inline; completed operations use a blue toast.

### Navigation

Feed, Files, Photos, Albums, and More form the bottom bar. Active state is white; inactive state is gray.

### Footer

There is no content footer. Bottom navigation and account utilities close the primary experience.

## Do's and Don'ts

### Do

- Keep yellow reserved for creation and purchase.
- Show storage capacity persistently.
- Keep filenames and metadata aligned.
- Use sheets for multi-option creation.
- Confirm operations visibly.

### Don't

- Don't brighten the dark canvas with decorative gradients.
- Don't enlarge file rows into cards.
- Don't hide destructive actions near creation.
- Don't use yellow for passive labels.
- Don't crop document thumbnails as photography.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add columns for media, retain file list density |
| Compact | 390–767px | Default single-column app |
| Small | <390px | Shorten metadata and sheet labels |

### Touch Targets

Keep tabs, row menus, floating create, and sheet options at least 44px.

### Collapsing Strategy

Truncate filenames before removing metadata. Let feed media reduce columns; keep quota and create visible.

### Image Behavior

Use cover for photos and video previews, contain for documents and folders, and preserve media aspect where practical.

## Iteration Guide

1. Establish dark surfaces and bottom navigation.
2. Build storage meter and file rows.
3. Add feed media cards.
4. Add create sheet and confirmation toast.
5. Apply onboarding illustration last.

## Known Gaps

- Exact tokens and typeface metrics were inferred visually.
- Photos and Settings flows had no member screens in the selected catalog snapshot.
- Audio and video playback motion was not evaluated.
- Tablet layouts were not present.

</design-context>

Use the design system above for all UI you generate.
