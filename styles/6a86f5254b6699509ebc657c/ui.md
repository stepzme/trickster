<design-context>
---
version: 1
platform: iOS
name: Tolan-design-analysis
description: "An immersive AI-companion interface built around a softly rendered alien world, deep indigo skies, expressive 3D character animation, cream utility surfaces, and compact pill controls. The UI feels intimate, playful, and gently game-like."

colors:
  primary: "#28243B"
  on-primary: "#FFFFFF"
  primary-pressed: "#171421"
  ink: "#252231"
  ink-muted: "#746F7D"
  ink-subtle: "#AAA5B0"
  canvas: "#171327"
  surface-1: "#FBF9F4"
  surface-2: "#F0EDE7"
  accent-teal: "#19A89C"
  accent-coral: "#FF6E82"
  accent-violet: "#6A46E8"
  accent-cyan: "#55D9E8"
  semantic-success: "#4DAA72"
  semantic-warning: "#F2B94B"
  semantic-danger: "#D95164"
  semantic-overlay: "#080612"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.2 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.8 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 5, sm: 10, md: 16, lg: 22, xl: 28, xxl: 36, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  activity-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 18 }
  chat-bubble: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [10, 14]}
  drawer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xl}", padding: 20 }
  shop-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8 }
---

# Overview

Tolan layers compact cream cards and dark pill actions over a continuously rendered alien planet. The companion and its world carry the emotional identity; utility UI stays quiet and rounded.

# Non-negotiable visual invariants

- The reviewed screens use this composition: An immersive AI-companion interface built around a softly rendered alien world, deep indigo skies, expressive 3D character animation, cream utility surfaces, and compact pill controls.
- The dominant canvas token is #171327 and the primary accent token is #28243B.
- The recorded display style is 38 points while the body style is 15 points.
- Navigation anchors camera, chat, and voice at the bottom of the planet.
- The reviewed screens use this hierarchy: The UI feels intimate, playful, and gently game-like.

# Color and surfaces

### Brand & Accent

Near-black indigo grounds controls. Teal and coral come from the character; violet, cyan, and warm yellow support magical events and rewards.

### Surface

Use warm cream for menus, chat bubbles, and shop sheets. The main canvas is a deep, softly colored 3D environment.

### Text

Use dark plum-black on light surfaces and white on the world. Muted gray carries helper copy and inventory state.

### Semantic

Green confirms progress, yellow marks rewards and tokens, and coral-red marks destructive actions. Do not confuse world lighting with status.

# Typography

### Font Family

Use a friendly rounded grotesk for UI and a restrained editorial serif only inside reflective prompt cards.

### Principles

Keep copy warm and direct. Let short prompts breathe and avoid placing long text directly on detailed scenery.

### Note on Font Substitutes

Use SF Pro Rounded or Nunito Sans for UI; Georgia may substitute for the occasional reflective serif prompt.

# Screen composition

### Spacing System

Use a 4pt base, 16pt screen gutters, 12pt compact gaps, and 24pt between major card groups.

### Grid & Container

The world fills the viewport. Cards occupy the upper middle, bottom actions form a three-point dock, and sheets use full-width mobile columns.

### Whitespace Philosophy

Treat open scenery as whitespace. Keep overlays small enough that the character remains visible and emotionally present.

# Navigation appearance

Anchor camera, chat, and voice at the bottom of the planet. Use the side drawer for the broader product map and modal close/back controls for focus.

# Components

### Buttons

Primary actions are dark rounded pills or white circular arrows. Native controls must inherit the rounded geometry, dark-plum ink, and playful scale.

Membership and shop categories use compact pills with a dark selected state and quiet cream track.

### Cards & Containers

Activity cards use cream or saturated gradient panels with one prompt and one clear action. Drawers use a clean icon-and-label list.

### Inputs & Forms

Onboarding fields are large white pills. Chat input is a low floating capsule with camera and voice actions attached.

### Status & Build Page

Daily streaks, token balance, locks, insight progress, and remaining chat appear beside the relevant world or item.

### Navigation

Anchor camera, chat, and voice at the bottom of the planet. Use the side drawer for the broader product map and modal close/back controls for focus.

# Imagery and icons

World depth comes from atmospheric blur and spatial lighting. Cards use soft shadow and occasional translucent separation.

### Decorative Depth

Use bloom, colored haze, tiny particles, and softly blurred scenery behind conversation. Avoid glass-heavy chrome that competes with the world.

# States

Daily streaks, token balance, locks, insight progress, and remaining chat appear beside the relevant world or item.

# iOS adaptation

Keep the world full-screen on phones. Wider screens may center the world and place menu or journal content in an adjacent panel.

### Touch Targets

World actions, drawer rows, carousel cards, shop tiles, and chat controls require at least 44pt targets.

### Collapsing Strategy

Keep primary conversation actions visible. Move secondary progression and commerce into the drawer or a bottom sheet.

### Image Behavior

Use `cover` for the rendered world and `contain` for the companion, clothing, decorations, and prompt artwork.

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

- Keep the companion visible whenever possible.
- Use cream UI against the colorful world.
- Make cards short and emotionally specific.
- Preserve the toy-like 3D language.

### Don't

- Do not flatten the experience into a generic chat list.
- Do not use sharp rectangular controls.
- Do not mix unrelated character styles.
- Do not cover the world with dense chrome.

</design-context>
