<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 650, lineHeight: 1.28, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.3, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.4, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.3, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 3px, sm: 6px, md: 10px, lg: 14px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  post-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px }
  community-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

vc.ru uses strong editorial type and content imagery on near-black surfaces. Graphite controls recede while blue links and a muted rose navigation accent guide interaction.

## Colors

### Brand & Accent

Cool blue marks links, follows, shares, and form actions. Muted rose marks the current bottom destination and occasional reaction emphasis.

### Surface

Use black for the feed, near-black for post groups, and graphite for fields, menus, and modal sheets.

### Text

Off-white carries headlines and body; gray carries author metadata, timestamps, counters, and helper copy.

### Semantic

Green confirms successful publishing, amber warns, and red marks report or destructive actions. Accent colors never replace status labels.

## Typography

### Font Family

Use a neutral editorial sans with comfortable Cyrillic reading metrics.

### Hierarchy

Use 24–38px page titles, 17–21px post headlines, 14–17px body, and 10–12px metadata.

### Principles

Make headlines dominant, keep body line height generous, and let metadata remain compact but legible.

### Note on Font Substitutes

Use Inter, SF Pro, or Arial with strong Cyrillic support and 650–750 headline weights.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–12px within post controls, and 20–24px between feed groups.

### Grid & Container

Feeds are single-column. Post cards stack author row, headline, excerpt or media, and a compact engagement toolbar.

### Whitespace Philosophy

Use whitespace around headlines and media, not around every control. Dense feeds still require clear post boundaries.

## Elevation & Depth

Use tonal blocks and hairlines instead of shadow. Sheets and overflow menus lift with a lighter graphite surface.

### Decorative Depth

Content photography and video provide visual richness. UI backgrounds stay flat and unornamented.

## Shapes

### Border Radius Scale

Use 6px buttons and fields, 10–14px sheets, and fully round avatars or compose controls.

### Photography & Illustration Geometry

Post media uses wide editorial crops; avatars remain circular. There is no standalone illustration language.

## Components

### Buttons

Primary publishing actions use blue; social actions are icons or text. Native controls must inherit the dark surfaces and compact geometry.

### Pricing Tabs

Feed modes and post sections use underlined or text tabs with blue active state; avoid bulky segments.

### Cards & Containers

Post cards keep media edge-aligned with content. Community and author rows use avatar, title, follower count, and one follow action.

### Inputs & Forms

Search and account fields use graphite fills. Publishing forms prioritize title, body, media, and explicit visibility.

### Status & Build Page

Follow state, draft, publication, moderation, saved state, notification, and message status appear beside the related content.

### Navigation

Use five bottom destinations for Feed, Search, Chats, Notifications, and Profile. Keep compose as a small floating action.

### Footer

There is no footer. Community rules, account links, and legal information live in contextual screens.

## Do's and Don'ts

### Do

- Lead with headlines and media.
- Keep metadata aligned and subdued.
- Use blue consistently for action.
- Preserve clear post boundaries.

### Don't

- Do not turn every post into a rounded tile.
- Do not decorate reading surfaces.
- Do not hide recommendation controls.
- Do not expose light native styling.

## Responsive Behavior

### Breakpoints

Keep a centered feed column on phones. Wider screens may add topic navigation and community context beside the feed.

### Touch Targets

Tabs, post actions, avatars, overflow menus, follow buttons, and navigation require at least 44px hit regions.

### Collapsing Strategy

Keep author, headline, media, and engagement visible. Move advanced feed tuning and community actions into menus.

### Image Behavior

Use `cover` for post and community media with editorial focal cropping; use `contain` for logos or document previews.

## Iteration Guide

Start with feed tabs, post card, article reading, search, follow, comments, and five-item navigation. Add publishing, communities, messaging, and moderation afterward.

## Known Gaps

The inspected catalog documents 28 flows across registration, feed, communities, search, chats, notifications, profile, and account content. Some long-form article and publisher analytics states are less represented.

</design-context>

Use the design system above for all UI you generate.
