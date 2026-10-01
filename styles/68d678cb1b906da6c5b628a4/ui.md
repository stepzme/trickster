<design-context>
---
version: 1
platform: iOS
name: Yandex-Books-design-analysis
description: "A reading-first system with crisp white canvases, black pill actions, book-cover carousels, subtle gray cards, and a warm coral-orange brand gradient reserved for launch and identity. Controls stay quiet so typography, covers, and reading progress remain central."

colors:
  primary: "#2C2C2E"
  on-primary: "#FFFFFF"
  primary-pressed: "#151516"
  ink: "#1F1F21"
  ink-muted: "#68686C"
  ink-subtle: "#A2A2A7"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F2F3"
  surface-3: "#E7E7E9"
  hairline: "#DDDDDF"
  semantic-success: "#2DA66A"
  semantic-warning: "#E4A11B"
  semantic-danger: "#D84A4A"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: YS Text, fontSize: 40, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0 }
  display-lg: { fontFamily: YS Text, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: YS Text, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: YS Text, fontSize: 22, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: YS Text, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Yandex Books is a calm reading and listening system where covers provide color and the shell stays monochrome. Progress, resume, notes, and format switching connect discovery with use.

# Non-negotiable visual invariants

- Typography consistently uses preserve covers and readable text measure.
- The reference consistently shows resume progress visible.
- The reference consistently shows make Read and Listen easy to switch.
- The reference consistently shows style native controls in the Books system.
- The reference consistently shows a reading-first system with crisp white canvases.
- Sampled screens consistently use black pill actions.
- The reference consistently shows book-cover carousels.
- The reference consistently shows subtle gray cards.

# Color and surfaces

Use white, black, and soft gray for UI; allow cover art to be colorful and reserve the warm coral gradient for brand moments.

### Brand & Accent

Use charcoal for primary actions and the cat-book mark for identity. Coral-orange may appear in launch or small Plus accents.

### Surface

Use white pages, pale gray cards and chips, and dark reader themes only when selected by the user.

### Text

Use near-black for titles and reading, medium gray for author and supporting copy, and pale gray for inactive controls.

### Semantic

Use green for downloaded or complete, amber for achievements, and red for errors or destructive account actions.

# Typography

The shell uses a neutral grotesk while the reader may expose user-selectable serif and sans families.

### Font Family

Use YS Text for interface and a curated readable serif as the default long-form reading option.

### Hierarchy

Use 28–32 points page titles, 20–24 points book/section titles, 15–17 points body, 13–14 points metadata, and user-adjustable reading size.

### Principles

Keep interface text concise, preserve book-title casing, and maximize reading measure and line-height inside the reader.

### Note on Font Substitutes

Use SF Pro or Inter for interface; use Charter, Georgia, or Literata for long-form reading.

# Screen composition

Use horizontal cover carousels and category tabs in Library, single-column progress cards in My books, and a distraction-free reader/player.

### Spacing System

Use a 4 points base, 12 points card gaps, 16 points gutters, and 24–32 points between library sections.

### Grid & Container

Library shows a central featured cover with partial neighbors; My books stacks progress cards; reader content uses a comfortable narrow measure.

### Whitespace Philosophy

Keep large quiet areas around reading content and player art. Discovery can be denser but should never crowd book covers.

Surface hierarchy observed in the source:

Use faint card shadows and bottom sheets; covers and progress establish most hierarchy.

### Decorative Depth

Use the warm tunnel-like brand gradient on launch and subtle glows around special Plus or achievement moments.

# Navigation appearance

Use a three-item bottom bar for My books, Library, and Search, with an active-book mini player immediately above it.

# Components

### Buttons

Primary actions are charcoal pills with white labels; secondary actions use pale gray fills. Remove default native blue.

### Cards & Containers

Book cards combine cover, title, author, short recommendation, and save action. Progress cards add percentage and Read/Listen choices.

### Inputs & Forms

Use pale search fields, simple title/shelf inputs, and bottom sheets for filters, notes, book actions, and settings.

# Imagery and icons

Use the warm tunnel-like brand gradient on launch and subtle glows around special Plus or achievement moments.

Preserve book-cover aspect ratios and never crop cover typography. Author avatars are circular; all other art follows its publication format.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show saved, reading, listening, downloaded, followed, finished, achievement, and kids-mode states with explicit labels.

# iOS adaptation

### Touch Targets

Cover, save, read, listen, play, seek, note, settings, and navigation targets require at least 44 points.

### Collapsing Strategy

Keep current title, progress, resume control, and active reading/player tools visible; collapse recommendations and secondary metadata.

### Image Behavior

Use contain for covers, preserve aspect ratios, and avoid upscaling low-resolution art. Player art remains centered with breathing room.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not use default platform blue.
- Do not crop cover titles.
- Do not decorate the reader unnecessarily.
- Do not hide active-book progress behind deep navigation.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
