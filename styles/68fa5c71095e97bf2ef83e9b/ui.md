<design-context>
---
version: alpha
name: Wink-design-analysis
description: "A cinematic near-black entertainment system with heavy extended display type, vivid orange-red action gradients, poster-led shelves, and rounded media cards. Content imagery provides most color while the interface stays dark, bold, and immersive."

colors:
  primary: "#FF5A2E"
  on-primary: "#FFFFFF"
  primary-pressed: "#E94725"
  ink: "#FFFFFF"
  ink-muted: "#B7ADB6"
  ink-subtle: "#777078"
  canvas: "#080006"
  surface-1: "#19161A"
  surface-2: "#242126"
  surface-3: "#302B31"
  hairline: "#3B353D"
  semantic-success: "#62C97A"
  semantic-warning: "#FFB547"
  semantic-danger: "#FF4D6A"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Wink Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0px }
  display-lg: { fontFamily: Wink Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: Wink Sans, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: Wink Sans, fontSize: 22px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: Wink Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wink Sans, fontSize: 16px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wink Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wink Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wink Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wink Sans, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wink Sans, fontSize: 14px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wink Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
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

Wink is a dark entertainment canvas where large expressive headings, cinematic imagery, and one warm action color organize films, series, television, music, books, and sport.

## Colors

Keep chrome almost monochrome so posters, stills, and album art carry the catalog's color.

### Brand & Accent

Use orange-to-coral for watch, confirm, purchase, and the Wink mark. Hot pink may label originals or editorial badges, but never compete with the primary action.

### Surface

Use an ink-black canvas, charcoal navigation, and softly differentiated dark cards. Light surfaces are exceptional overlays only.

### Text

Use white for titles, pale gray for synopsis and metadata, and dim gray for inactive navigation.

### Semantic

Use green for available or complete, amber for time-sensitive access, and coral-red for destructive or unavailable states.

## Typography

Typography is part of the entertainment identity: broad, heavy headlines contrast with compact readable metadata.

### Font Family

Use a wide geometric display sans for titles and a neutral sans for body copy.

### Hierarchy

Use 26–40px heavy section and hero titles, 16–18px card titles, 13–15px body text, and 11–12px metadata.

### Principles

Keep headings short, allow intentional line breaks, and avoid dense paragraphs over imagery.

### Note on Font Substitutes

Use Druk Wide or a widened heavy grotesk for display; use SF Pro or Inter for body text.

## Layout

Use full-bleed hero media followed by horizontally scrolling shelves and a persistent bottom bar.

### Spacing System

Use a 4px base, 18px gutters, 12px card gaps, and 28–36px between shelves.

### Grid & Container

Heroes span edge to edge; poster shelves show partial next items; title pages use one continuous vertical column.

### Whitespace Philosophy

Preserve black breathing room around section titles and actions, but let visual catalogs remain dense.

## Elevation & Depth

Rely on image gradients, surface contrast, and overlays more than shadows.

### Decorative Depth

Use dark-to-transparent scrims over hero imagery, warm action gradients, and occasional luminous music artwork.

## Shapes

Combine moderately rounded landscape cards with taller poster shapes and pill actions.

### Border Radius Scale

Use 10px for compact controls, 14–18px for thumbnails and panels, 24px for large profile surfaces, and pills for primary actions.

### Photography & Illustration Geometry

Crop stills in wide editorial frames and posters in tall ratios. Keep faces and title artwork visible beneath scrims.

## Components

Components should feel authored for Wink even when implemented with native primitives.

### Buttons

Use full-width orange gradient pills for watch and confirm; style native buttons with the same fill, radius, weight, and pressed state.

### Pricing Tabs

Use dark segmented pills for subscription periods, media filters, or modes; active state is white or warm-accented.

### Cards & Containers

Media cards prioritize artwork, then concise title, year, rating, or progress. Account cards use charcoal surfaces with one clear action.

### Inputs & Forms

Use dark filled fields with pale text, minimal hairlines, and warm focus/action treatment.

### Status & Build Page

Represent rating, age, original, downloaded, reminder, and subscription status as compact badges or labeled rows.

### Navigation

Use a five-item dark bottom bar with white active icon and muted inactive items; keep search, trends, and profile visible above discovery.

### Footer

There is no footer. Legal, devices, payments, logout, and app settings live under More or Profile.

## Do's and Don'ts

Protect the cinematic hierarchy and resist generic platform styling.

### Do

- Let one hero or title lead each screen.
- Keep the warm action unmistakable.
- Preserve partial shelves as browse cues.
- Style native controls to inherit Wink's visual language.

### Don't

- Do not use default iOS blue.
- Do not brighten the canvas to generic gray.
- Do not place long text directly on busy imagery.
- Do not give every card a border or shadow.

## Responsive Behavior

Adapt shelf density without changing the image-first hierarchy.

### Breakpoints

Phones show one hero and partial shelves; larger widths may show more columns or a master-detail title view.

### Touch Targets

Watch, play, save, share, download, episode, and navigation targets require at least 44px.

### Collapsing Strategy

Keep title, watch action, progress, and current media mode visible; collapse cast, extras, and secondary metadata.

### Image Behavior

Use cover for heroes and stills, preserve poster ratios, and apply bottom scrims where text overlaps.

## Iteration Guide

Start with launch/profile choice, home shelves, search, title detail, playback entry, favorites, and Continue watching. Add TV, music, downloads, and subscriptions next.

## Known Gaps

Forty flow structures and representative screens across onboarding, discovery, title detail, music, and account settings were reviewed. Motion and playback chrome were not exhaustively captured.

</design-context>

Use the design system above for all UI you generate.
