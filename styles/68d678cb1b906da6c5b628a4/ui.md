<design-context>
---
version: alpha
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
  display-xl: { fontFamily: YS Text, fontSize: 40px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0px }
  display-lg: { fontFamily: YS Text, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: YS Text, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: YS Text, fontSize: 22px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: YS Text, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: YS Text, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: YS Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: YS Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: YS Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: YS Text, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: YS Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: YS Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px 14px }
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 4px 8px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56px }
---

## Overview

Yandex Books is a calm reading and listening system where covers provide color and the shell stays monochrome. Progress, resume, notes, and format switching connect discovery with use.

## Colors

Use white, black, and soft gray for UI; allow cover art to be colorful and reserve the warm coral gradient for brand moments.

### Brand & Accent

Use charcoal for primary actions and the cat-book mark for identity. Coral-orange may appear in launch or small Plus accents.

### Surface

Use white pages, pale gray cards and chips, and dark reader themes only when selected by the user.

### Text

Use near-black for titles and reading, medium gray for author and supporting copy, and pale gray for inactive controls.

### Semantic

Use green for downloaded or complete, amber for achievements, and red for errors or destructive account actions.

## Typography

The shell uses a neutral grotesk while the reader may expose user-selectable serif and sans families.

### Font Family

Use YS Text for interface and a curated readable serif as the default long-form reading option.

### Hierarchy

Use 28–32px page titles, 20–24px book/section titles, 15–17px body, 13–14px metadata, and user-adjustable reading size.

### Principles

Keep interface text concise, preserve book-title casing, and maximize reading measure and line-height inside the reader.

### Note on Font Substitutes

Use SF Pro or Inter for interface; use Charter, Georgia, or Literata for long-form reading.

## Layout

Use horizontal cover carousels and category tabs in Library, single-column progress cards in My books, and a distraction-free reader/player.

### Spacing System

Use a 4px base, 12px card gaps, 16px gutters, and 24–32px between library sections.

### Grid & Container

Library shows a central featured cover with partial neighbors; My books stacks progress cards; reader content uses a comfortable narrow measure.

### Whitespace Philosophy

Keep large quiet areas around reading content and player art. Discovery can be denser but should never crowd book covers.

## Elevation & Depth

Use faint card shadows and bottom sheets; covers and progress establish most hierarchy.

### Decorative Depth

Use the warm tunnel-like brand gradient on launch and subtle glows around special Plus or achievement moments.

## Shapes

Use rectangular book covers, rounded progress cards, circular playback controls, and pill buttons.

### Border Radius Scale

Use 10px for chips, 14–18px for cards and sheets, 22px for large panels, and pills for actions.

### Photography & Illustration Geometry

Preserve book-cover aspect ratios and never crop cover typography. Author avatars are circular; all other art follows its publication format.

## Components

Reader and player controls may use native behavior but must inherit the monochrome Yandex Books style.

### Buttons

Primary actions are charcoal pills with white labels; secondary actions use pale gray fills. Remove default native blue.

### Pricing Tabs

Use text tabs for Main, Audio, Comics, and Kids; use outlined chips for genres and pale segmented controls for reading themes.

### Cards & Containers

Book cards combine cover, title, author, short recommendation, and save action. Progress cards add percentage and Read/Listen choices.

### Inputs & Forms

Use pale search fields, simple title/shelf inputs, and bottom sheets for filters, notes, book actions, and settings.

### Status & Build Page

Show saved, reading, listening, downloaded, followed, finished, achievement, and kids-mode states with explicit labels.

### Navigation

Use a three-item bottom bar for My books, Library, and Search, with an active-book mini player immediately above it.

### Footer

There is no footer. Profile contains kids mode, themes, offline settings, support, legal, deletion, and logout.

## Do's and Don'ts

Protect reading focus and publication integrity.

### Do

- Preserve covers and readable text measure.
- Keep resume progress visible.
- Make Read and Listen easy to switch.
- Style native controls in the Books system.

### Don't

- Do not use default platform blue.
- Do not crop cover titles.
- Do not decorate the reader unnecessarily.
- Do not hide active-book progress behind deep navigation.

## Responsive Behavior

Use extra width to improve browsing and reading measure, not to inflate controls.

### Breakpoints

Phones use horizontal cover rails and one reading column; larger screens may add a cover grid or a centered reader with side tools.

### Touch Targets

Cover, save, read, listen, play, seek, note, settings, and navigation targets require at least 44px.

### Collapsing Strategy

Keep current title, progress, resume control, and active reading/player tools visible; collapse recommendations and secondary metadata.

### Image Behavior

Use contain for covers, preserve aspect ratios, and avoid upscaling low-resolution art. Player art remains centered with breathing room.

## Iteration Guide

Start with authorization, Library, search, book detail, save, My books, reader, audio player, and progress sync. Add shelves, notes, follows, kids mode, and offline settings next.

## Known Gaps

Fifty-five flow structures and representative screens across authorization, Library, reading, listening, My books, Profile, and kids mode were reviewed. Video-only reading transitions and the full range of publication-specific content were not exhaustively captured.

</design-context>

Use the design system above for all UI you generate.
