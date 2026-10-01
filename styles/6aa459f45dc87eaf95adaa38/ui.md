<design-context>
---
version: 1
platform: iOS
name: Wabi-design-analysis
description: "A playful AI-creator network alternating clean pearl-white workspaces with immersive black mini-app feeds. The interface is restrained and object-led: black pill controls, large rounded canvases, glassy 3D bubbles, sparse typography, and a five-item dock make generated experiences feel like collectible social objects."

colors:
  primary: "#151515"
  on-primary: "#FFFFFF"
  primary-pressed: "#303030"
  ink: "#111111"
  ink-muted: "#6D6D6D"
  ink-subtle: "#A5A5A5"
  canvas: "#F8F8F6"
  surface-1: "#FFFFFF"
  surface-2: "#F0F0EE"
  inverse-canvas: "#050505"
  inverse-surface: "#121212"
  inverse-ink: "#FFFFFF"
  accent-cyan: "#32B8D8"
  accent-violet: "#7A63FF"
  hairline: "#DEDEDA"
  semantic-success: "#2FA56F"
  semantic-danger: "#E45B64"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.1 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.15 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 16, lg: 22, xl: 30, xxl: 40, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  mini-app-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 0 }
  board-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 14 }
  prompt-composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.lg}", padding: [14, 16]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 52 }
---

# Overview

Wabi pairs a monochrome social shell with expressive generated objects. White creation and profile spaces feel airy and tactile, while the feed becomes a black stage around one large interactive canvas.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A playful AI-creator network alternating clean pearl-white workspaces with immersive black mini-app feeds.
- The dominant canvas token is #F8F8F6 and the primary accent token is #151515.
- The recorded display style is 40 points while the body style is 14 points.
- Navigation uses a floating five-item dock for Home, Search, Create, Messages, and Profile.
- The reviewed screens use this hierarchy: The interface is restrained and object-led: black pill controls, large rounded canvases, glassy 3D bubbles, sparse typography.

# Color and surfaces

### Brand & Accent

Black and white are the product identity. Cyan, violet, yellow, and iridescent highlights come from generated 3D objects rather than persistent chrome.

### Surface

Use warm off-white for workspaces, pure white for tiles and composers, and near-black for the immersive feed. Keep nested cards only slightly separated.

### Text

Use near-black on light surfaces and white on the feed. Medium gray carries counts, timestamps, and supporting copy.

### Semantic

Use green for successful connection or publish state and soft red for report or delete. Do not repurpose object colors as status.

# Typography

### Font Family

Use a neutral modern system sans with compact metrics and clear lowercase forms.

### Principles

Keep labels short and conversational. Let mini-app titles and prompts lead without competing display decoration.

### Note on Font Substitutes

Use SF Pro or Inter with 600–700 headings and regular body weights.

# Screen composition

### Grid & Container

The feed uses one full-width rounded canvas. Home and Profile use two-column mini-app tiles; creation uses one conversational column.

### Whitespace Philosophy

Preserve broad empty fields around the agent, profile, and object tiles. The feed may be dense only around engagement controls.

# Navigation appearance

Use a floating five-item dock for Home, Search, Create, Messages, and Profile. Create is emphasized with a dark circular button and optional unread badge.

# Components

### Buttons

Primary actions are black full-width pills on light screens. Feed actions are outlined dark pills with white icons. Native controls must inherit these fills, radii, and restrained contrast.

Boards, content modes, and creation options use underlined text tabs or compact chips; selected state is black and unselected state is gray.

### Cards & Containers

Mini-app cards feature one large object preview, a short title, and minimal status. Draft labels sit as tiny frosted chips over the object.

### Inputs & Forms

The creation composer is a rounded white conversational card with prompt text, attachment or Max option, and a black circular send action.

### Status & Build Page

Use compact Draft, credit, unread, count, save, and publish indicators. Generation progress remains inside the agent conversation or preview.

### Navigation

Use a floating five-item dock for Home, Search, Create, Messages, and Profile. Create is emphasized with a dark circular button and optional unread badge.

# Imagery and icons

Use soft ambient shadow under white tiles and docks. Contrast between black stage and light canvas does most of the layering.

### Decorative Depth

Use refractive bubbles, frosted controls, iridescent highlights, and small contact shadows. Keep them tied to content objects, not generic backgrounds.

# States

Use compact Draft, credit, unread, count, save, and publish indicators. Generation progress remains inside the agent conversation or preview.

# iOS adaptation

Phones show one feed canvas or one creation flow at a time. Wider screens may pair boards or conversation with live preview while preserving the single-object focus.

### Touch Targets

Navigation, engagement, remix, save, send, board, and mini-app controls require at least 44pt targets.

### Collapsing Strategy

Keep canvas, title, primary interaction, and remix/save actions visible. Collapse comments, counts, details, and configuration into secondary panels.

### Image Behavior

Use `contain` for 3D objects and `cover` for user photos. Interactive canvases retain their authored aspect ratio inside rounded clipping.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Alternate quiet light workspaces with an immersive black feed.
- Give one generated object or canvas visual priority.
- Keep social actions close to the mini app.
- Use black pills consistently for decisive actions.

### Don't

- Do not tint every system surface with rainbow color.
- Do not shrink interactive mini apps into ordinary feed thumbnails.
- Do not add heavy shadows to every tile.
- Do not leave default native blue on controls.

</design-context>
