<design-context>
---
version: 1
platform: iOS
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

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
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

Yandex is a spacious utility shell centered on universal search. Services, camera results, identity, settings, and Alice change the content below without disturbing the core hierarchy.

# Non-negotiable visual invariants

- The reference consistently shows preserve one dominant search entry.
- The reference consistently shows task switches compact.
- The reference consistently shows charcoal for decisive actions.
- The reference consistently shows restyle native controls to match Yandex.
- The reference consistently shows a utility-first search and assistant system built on white space.
- The reference consistently shows soft gray functional surfaces.
- The reference consistently shows dark charcoal actions.
- A compact coral-red Yandex mark. One rounded universal search field anchors a broad set of services while Alice introduces restrained violet-blue gradients.

# Color and surfaces

Use white, soft gray, and charcoal as the base; coral-red identifies Yandex and violet-blue identifies Alice.

### Brand & Accent

Use the coral-red Yandex mark sparingly. Primary confirmation is charcoal; Alice actions may use a purple-to-blue accent.

### Surface

Use white canvases, pale gray rounded search and card surfaces, and minimal separators.

### Text

Use deep charcoal for primary text, neutral gray for explanations, and light gray for disabled content.

### Semantic

Use green for enabled or complete, yellow for notable Yandex services, and red for errors or destructive actions.

# Typography

Typography is neutral, compact, and optimized for mixed search results.

### Font Family

Use YS Text or a modern system grotesk with clear Cyrillic and tabular numerals.

### Hierarchy

Use 28–34 points task titles, 20–24 points section titles, 15–17 points controls, 13–15 points body, and 11–12 points metadata.

### Principles

Keep wording direct, avoid decorative capitalization, and let query/result content set the reading order.

### Note on Font Substitutes

Use SF Pro or Inter with standard widths and strong Cyrillic coverage.

# Screen composition

Center the universal search field on Home; switch to top-anchored search, tabs, and vertically scrolling results after a query.

### Spacing System

Use a 4 points base, 16–20 points gutters, 12 points gaps, and 24–32 points between task groups.

### Grid & Container

Home is a sparse single column with shortcut tiles; results use dense vertical lists or two-column product grids.

### Whitespace Philosophy

Whitespace is structural: leave broad empty zones around search, sign-in, assistant prompts, and security decisions.

Surface hierarchy observed in the source:

Use almost no shadow; modal sheets, floating search, and cards gain only a faint ambient lift.

### Decorative Depth

Use a soft coral glow around the brand mark and restrained violet-blue gradients for Alice capabilities.

# Navigation appearance

Use a minimal bottom bar for Home, Alice, and tabs; top shortcuts expose services, mail, weather, menu, and identity.

# Components

### Buttons

Use charcoal full-width rounded buttons with white labels; style native buttons to remove default blue and match the Yandex hierarchy.

### Cards & Containers

Shortcut cards combine a quiet illustration or thumbnail with a short label. Results cards prioritize source, content, and price or answer.

### Inputs & Forms

The universal search field combines brand mark, text entry, voice, and camera. Identity fields use strong outlines and clear single-step continuation.

# Imagery and icons

Use a soft coral glow around the brand mark and restrained violet-blue gradients for Alice capabilities.

Search media uses stable rectangular crops; service thumbnails sit inside pale rounded tiles. Do not impose one decorative art style across heterogeneous results.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Show sync, privacy, permissions, sign-in, assistant mode, and biometric states with explicit text and familiar icons.

# iOS adaptation

### Touch Targets

Search, mic, camera, assistant, service, filter, sign-in, and navigation controls require at least 44 points.

### Collapsing Strategy

Keep query, active result mode, primary answer, and key action visible; collapse secondary sources, filters, and metadata.

### Image Behavior

Use contain for products and service icons, cover for image results, and stable boxes to avoid reflow.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not use default iOS blue.
- Do not add decorative cards to every result.
- Do not overuse the coral brand color.
- Do not fill empty search states with noise.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

# Known gaps

Only one authored onboarding flow exists. All 290 available image screens were enumerated and representative screens across onboarding, Home, camera search, Alice, identity, and Settings were directly reviewed; full interaction sequences outside onboarding are therefore inferred.

</design-context>
