<design-context>
---
version: 1
platform: iOS
name: vc-ru-design-analysis
description: "A dark editorial-social interface built from near-black reading surfaces, large white headlines, graphite cards, cool-blue links, muted rose navigation accents, and content-led photography. It is dense, sober, and optimized for feed scanning."

colors:
  primary: "#5A82C6"
  on-primary: "#FFFFFF"
  primary-pressed: "#4269AA"
  accent-rose: "#B86A85"
  ink: "#F4F4F5"
  ink-muted: "#97999E"
  ink-subtle: "#606268"
  canvas: "#090909"
  surface-1: "#151515"
  surface-2: "#222224"
  hairline: "#303033"
  semantic-success: "#4DAA75"
  semantic-warning: "#DDA13B"
  semantic-danger: "#D85764"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 650, lineHeight: 1.28, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.3, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.4, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.3, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  post-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12 }
  community-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

vc.ru uses strong editorial type and content imagery on near-black surfaces. Graphite controls recede while blue links and a muted rose navigation accent guide interaction.

# Non-negotiable visual invariants

- The reference consistently shows lead with headlines and media.
- The reference consistently shows metadata aligned and subdued.
- Sampled screens consistently use blue consistently for action.
- The reference consistently shows preserve clear post boundaries.
- The reference consistently shows a dark editorial-social interface built from near-black reading surfaces.
- The reference consistently shows large white headlines.
- The reference consistently shows graphite cards.
- The reference consistently shows cool-blue links.

# Color and surfaces

### Brand & Accent

Cool blue marks links, follows, shares, and form actions. Muted rose marks the current bottom destination and occasional reaction emphasis.

### Surface

Use black for the feed, near-black for post groups, and graphite for fields, menus, and modal sheets.

### Text

Off-white carries headlines and body; gray carries author metadata, timestamps, counters, and helper copy.

### Semantic

Green confirms successful publishing, amber warns, and red marks report or destructive actions. Accent colors never replace status labels.

# Typography

### Font Family

Use a neutral editorial sans with comfortable Cyrillic reading metrics.

### Hierarchy

Use 24–38 points page titles, 17–21 points post headlines, 14–17 points body, and 10–12 points metadata.

### Principles

Make headlines dominant, keep body line height generous, and let metadata remain compact but legible.

### Note on Font Substitutes

Use Inter, SF Pro, or Arial with strong Cyrillic support and 650–750 headline weights.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–12 points within post controls, and 20–24 points between feed groups.

### Grid & Container

Feeds are single-column. Post cards stack author row, headline, excerpt or media, and a compact engagement toolbar.

### Whitespace Philosophy

Use whitespace around headlines and media, not around every control. Dense feeds still require clear post boundaries.

Surface hierarchy observed in the source:

Use tonal blocks and hairlines instead of shadow. Sheets and overflow menus lift with a lighter graphite surface.

### Decorative Depth

Content photography and video provide visual richness. UI backgrounds stay flat and unornamented.

# Navigation appearance

Use five bottom destinations for Feed, Search, Chats, Notifications, and Profile. Keep compose as a small floating action.

# Components

### Buttons

Primary publishing actions use blue; social actions are icons or text. Native controls must inherit the dark surfaces and compact geometry.

### Cards & Containers

Post cards keep media edge-aligned with content. Community and author rows use avatar, title, follower count, and one follow action.

### Inputs & Forms

Search and account fields use graphite fills. Publishing forms prioritize title, body, media, and explicit visibility.

# Imagery and icons

Content photography and video provide visual richness. UI backgrounds stay flat and unornamented.

Post media uses wide editorial crops; avatars remain circular. There is no standalone illustration language.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Follow state, draft, publication, moderation, saved state, notification, and message status appear beside the related content.

# iOS adaptation

### Touch Targets

Tabs, post actions, avatars, overflow menus, follow buttons, and navigation require at least 44 points hit regions.

### Collapsing Strategy

Keep author, headline, media, and engagement visible. Move advanced feed tuning and community actions into menus.

### Image Behavior

Use `cover` for post and community media with editorial focal cropping; use `contain` for logos or document previews.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not turn every post into a rounded tile.
- Do not decorate reading surfaces.
- Do not hide recommendation controls.
- Do not expose light native styling.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
