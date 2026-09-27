<design-context>
---
version: alpha
name: Yandex-design-analysis
description: "A utility-first search and assistant system built on white space, soft gray functional surfaces, dark charcoal actions, and a compact coral-red Yandex mark. One rounded universal search field anchors a broad set of services while Alice introduces restrained violet-blue gradients."

colors:
  primary: "#2C2D33"
  on-primary: "#FFFFFF"
  primary-pressed: "#17181C"
  ink: "#1F2024"
  ink-muted: "#6F7178"
  ink-subtle: "#A7A9AE"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F3"
  surface-3: "#E6E7E9"
  hairline: "#DADCE0"
  semantic-success: "#22A76A"
  semantic-warning: "#F0B400"
  semantic-danger: "#F04B4D"
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

Yandex is a spacious utility shell centered on universal search. Services, camera results, identity, settings, and Alice change the content below without disturbing the core hierarchy.

## Colors

Use white, soft gray, and charcoal as the base; coral-red identifies Yandex and violet-blue identifies Alice.

### Brand & Accent

Use the coral-red Yandex mark sparingly. Primary confirmation is charcoal; Alice actions may use a purple-to-blue accent.

### Surface

Use white canvases, pale gray rounded search and card surfaces, and minimal separators.

### Text

Use deep charcoal for primary text, neutral gray for explanations, and light gray for disabled content.

### Semantic

Use green for enabled or complete, yellow for notable Yandex services, and red for errors or destructive actions.

## Typography

Typography is neutral, compact, and optimized for mixed search results.

### Font Family

Use YS Text or a modern system grotesk with clear Cyrillic and tabular numerals.

### Hierarchy

Use 28–34px task titles, 20–24px section titles, 15–17px controls, 13–15px body, and 11–12px metadata.

### Principles

Keep wording direct, avoid decorative capitalization, and let query/result content set the reading order.

### Note on Font Substitutes

Use SF Pro or Inter with standard widths and strong Cyrillic coverage.

## Layout

Center the universal search field on Home; switch to top-anchored search, tabs, and vertically scrolling results after a query.

### Spacing System

Use a 4px base, 16–20px gutters, 12px gaps, and 24–32px between task groups.

### Grid & Container

Home is a sparse single column with shortcut tiles; results use dense vertical lists or two-column product grids.

### Whitespace Philosophy

Whitespace is structural: leave broad empty zones around search, sign-in, assistant prompts, and security decisions.

## Elevation & Depth

Use almost no shadow; modal sheets, floating search, and cards gain only a faint ambient lift.

### Decorative Depth

Use a soft coral glow around the brand mark and restrained violet-blue gradients for Alice capabilities.

## Shapes

Use rounded search fields, compact cards, circular identity controls, and pill filters.

### Border Radius Scale

Use 10px for rows, 14px for search and fields, 18–24px for assistant cards, and pills for filters and actions.

### Photography & Illustration Geometry

Search media uses stable rectangular crops; service thumbnails sit inside pale rounded tiles. Do not impose one decorative art style across heterogeneous results.

## Components

Controls may use native behavior but must visually inherit Yandex surfaces, charcoal actions, and restrained radii.

### Buttons

Use charcoal full-width rounded buttons with white labels; style native buttons to remove default blue and match the Yandex hierarchy.

### Pricing Tabs

Use compact chips or a segmented tab row for result verticals and assistant options; selected text is darker or violet-accented.

### Cards & Containers

Shortcut cards combine a quiet illustration or thumbnail with a short label. Results cards prioritize source, content, and price or answer.

### Inputs & Forms

The universal search field combines brand mark, text entry, voice, and camera. Identity fields use strong outlines and clear single-step continuation.

### Status & Build Page

Show sync, privacy, permissions, sign-in, assistant mode, and biometric states with explicit text and familiar icons.

### Navigation

Use a minimal bottom bar for Home, Alice, and tabs; top shortcuts expose services, mail, weather, menu, and identity.

### Footer

There is no footer. Privacy, data, notifications, feedback, and application details live in Settings.

## Do's and Don'ts

Keep the shell quiet enough to support many result types.

### Do

- Preserve one dominant search entry.
- Keep task switches compact.
- Use charcoal for decisive actions.
- Restyle native controls to match Yandex.

### Don't

- Do not use default iOS blue.
- Do not add decorative cards to every result.
- Do not overuse the coral brand color.
- Do not fill empty search states with noise.

## Responsive Behavior

Allow result density to change while search remains the anchor.

### Breakpoints

Phones use one primary column and occasional two-up products; larger widths may add side filters or a two-pane assistant/result view.

### Touch Targets

Search, mic, camera, assistant, service, filter, sign-in, and navigation controls require at least 44px.

### Collapsing Strategy

Keep query, active result mode, primary answer, and key action visible; collapse secondary sources, filters, and metadata.

### Image Behavior

Use contain for products and service icons, cover for image results, and stable boxes to avoid reflow.

## Iteration Guide

Start with Home search, text results, camera/product results, Alice entry, Yandex ID, and Settings. Add specialized services and advanced assistant modes next.

## Known Gaps

Only one authored onboarding flow exists. All 290 available image screens were enumerated and representative screens across onboarding, Home, camera search, Alice, identity, and Settings were directly reviewed; full interaction sequences outside onboarding are therefore inferred.

</design-context>

Use the design system above for all UI you generate.
