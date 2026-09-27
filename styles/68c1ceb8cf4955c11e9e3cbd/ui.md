<design-context>
---
version: alpha
name: Apple-Music-design-analysis
description: "A content-led music interface built from white iOS surfaces, heavy black titles, Apple Music coral, and richly varied album artwork. A translucent mini-player and five-tab navigation remain persistent, while the full player derives its atmospheric color from the current cover."
colors:
  primary: "#FA2D48"
  on-primary: "#FFFFFF"
  primary-hover: "#E92740"
  primary-soft: "#FDE8EB"
  ink: "#111111"
  ink-muted: "#77777C"
  ink-subtle: "#A9A9AE"
  canvas: "#FFFFFF"
  surface-1: "#F2F2F7"
  surface-2: "#E5E5EA"
  hairline: "#D9D9DE"
  semantic-success: "#34C759"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 40px, fontWeight: 700, lineHeight: 1.00, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6px }
  display-md: { fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  media-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0 }
  mini-player: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px 16px }
  context-menu: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 6px }
  plan-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Apple Music keeps system chrome quiet so album covers, editorial art, and radio portraits dominate. Coral indicates active music actions; playback surfaces inherit color from the current artwork.

**Key Characteristics:**
- White iOS canvas with bold titles.
- Coral active tabs, links, and subscription actions.
- Artwork-led horizontal rails and grids.
- Persistent mini-player above navigation.
- Full player with blurred cover-derived backdrop.
- Native sheets, context menus, and purchase confirmation.

## Colors

### Brand & Accent
- **Apple Music Coral** ({colors.primary}): Active destination, links, subscription, and library icons.
- **Soft Coral** ({colors.primary-soft}): Selected or promotional support.
- Dynamic cover-derived color belongs only to Now Playing.

### Surface
- **Canvas** ({colors.canvas}): Discovery, library, search, and account.
- **Surface 1** ({colors.surface-1}): Mini-player, sheets, search, and menus.
- **Surface 2** ({colors.surface-2}): Disabled and nested controls.
- **Hairline** ({colors.hairline}): Lists and grouped settings.

### Text
- **Ink** ({colors.ink}): Titles, track names, and actions.
- **Ink Muted** ({colors.ink-muted}): Artist, schedule, and metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled transport and empty guidance.

### Semantic
- **Success** ({colors.semantic-success}): Enabled contact and discovery toggles.
- **Danger** ({colors.semantic-danger}): Destructive account state.
- **Overlay** ({colors.semantic-overlay}): Menu and player blur scrim.

## Typography

### Font Family

- **SF Pro Display** — page and section headings.
- **SF Pro Text** — track, artist, navigation, menus, and settings.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40px | 700 | Destination heading |
| `{typography.display-md}` | 28px | 700 | Player or plan heading |
| `{typography.headline}` | 22px | 700 | Section heading |
| `{typography.card-title}` | 16px | 600 | Track, station, or collection |
| `{typography.body}` | 15px | 400 | Default metadata |
| `{typography.caption}` | 11px | 400 | Tab and schedule metadata |
| `{typography.button}` | 15px | 600 | Actions |

### Principles

- Use large bold destination titles.
- Keep track and artist hierarchy consistent.
- Let cover typography remain inside artwork.
- Use coral text sparingly for action and selection.

### Note on Font Substitutes

Use **Inter** or a native system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base. Screen gutters are 16px, artwork gaps 8–12px, and list rows 12–16px.

### Grid & Container

Listen Now and Browse use horizontal media rails and two-column grids. Library and Search use single-column lists or two-column categories. Now Playing is a centered vertical stack.

### Whitespace Philosophy

Use open white space around media rails and lists. Never add decorative panels behind artwork unless it is an editorial card.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and library |
| 1 | Translucent bar | Mini-player and tabs |
| 2 | Blurred background plus menu | Context action |
| 3 | Cover-derived atmosphere | Full player |

### Decorative Depth

Use blurred artwork and translucency around playback. Avoid drop shadows on ordinary lists.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 6px | Artwork and compact controls |
| `{rounded.sm}` | 10px | Trial and plan cards |
| `{rounded.md}` | 14px | Context menus and sheets |
| `{rounded.lg}` | 18px | Editorial cards |
| `{rounded.full}` | full | Profile and circular controls |

### Photography & Illustration Geometry

Album and playlist art remains square and uncropped. Radio portraits may fill wide cards. Profile imagery is circular.

## Components

### Buttons

Primary subscription and redemption actions use coral. Playback controls are black or white depending on backdrop. Secondary actions use text or native list rows.

### Pricing Tabs

Plans use large bordered cards with a checkmark selection. Search switches between Apple Music and Your Library with a compact segmented control.

### Cards & Containers

Media cards pair square art with title and artist. Radio cards add schedule and play. Trial cards use bounded promotional art and one coral action.

### Inputs & Forms

Search uses a soft gray field with Cancel while active. Playlist search and manual redemption use native inputs and clear keyboard-safe actions.

### Status & Build Page

Playback state stays in the mini-player. Live radio and schedule are explicit. Downloaded and selected library states use icon plus label.

### Navigation

Listen Now, Browse, Radio, Library, and Search form the bottom bar. Non-subscribers may see a reduced set. Mini-player remains above it.

### Footer

Tab bar and mini-player form a stacked footer. Full player replaces both with transport, volume, lyrics, output, and queue.

## Do's and Don'ts

### Do

- Keep current playback persistent.
- Preserve square artwork.
- Derive player atmosphere from the active cover.
- Distinguish catalog and library search.
- Use native sheets for account and menus.

### Don't

- Don't recolor discovery chrome per album.
- Don't crop cover typography.
- Don't hide player access during navigation.
- Don't interrupt browsing with full-screen upsells.
- Don't merge playback and subscription actions.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Expand media rails and center player |
| Compact | 390–767px | Default mobile layout |
| Small | <390px | Reduce grid columns and shorten metadata |

### Touch Targets

Maintain 44px for tabs, transport, overflow, search segments, and plan selection.

### Collapsing Strategy

Reduce media-grid columns before artwork size. Keep the mini-player full width and truncate track metadata before controls.

### Image Behavior

Contain square art and preserve aspect ratio. Cover only wide editorial cards; use a blurred duplicate for player atmosphere.

## Iteration Guide

1. Establish tabs and mini-player.
2. Build artwork-led media card and list row.
3. Add full player and context menu.
4. Add library, search, and account sheets.
5. Add subscription states last.

## Known Gaps

- Exact Apple Music tokens were inferred visually.
- The 38-flow inventory was complete and all top-level flows were inspected.
- Audio behavior and animated transitions were not assessed.
- No tablet or desktop screens were present.

</design-context>

Use the design system above for all UI you generate.
