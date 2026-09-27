<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 17px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 15px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.2px }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.8px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 5px, sm: 10px, md: 16px, lg: 22px, xl: 28px, xxl: 36px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  activity-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 18px }
  chat-bubble: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 10px 14px }
  drawer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xl}", padding: 20px }
  shop-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 8px }
---

## Overview

Tolan layers compact cream cards and dark pill actions over a continuously rendered alien planet. The companion and its world carry the emotional identity; utility UI stays quiet and rounded.

## Colors

### Brand & Accent

Near-black indigo grounds controls. Teal and coral come from the character; violet, cyan, and warm yellow support magical events and rewards.

### Surface

Use warm cream for menus, chat bubbles, and shop sheets. The main canvas is a deep, softly colored 3D environment.

### Text

Use dark plum-black on light surfaces and white on the world. Muted gray carries helper copy and inventory state.

### Semantic

Green confirms progress, yellow marks rewards and tokens, and coral-red marks destructive actions. Do not confuse world lighting with status.

## Typography

### Font Family

Use a friendly rounded grotesk for UI and a restrained editorial serif only inside reflective prompt cards.

### Hierarchy

Use 24–38px onboarding statements, 17–20px card titles, 15–17px conversation text, and 11–13px labels.

### Principles

Keep copy warm and direct. Let short prompts breathe and avoid placing long text directly on detailed scenery.

### Note on Font Substitutes

Use SF Pro Rounded or Nunito Sans for UI; Georgia may substitute for the occasional reflective serif prompt.

## Layout

### Spacing System

Use a 4px base, 16px screen gutters, 12px compact gaps, and 24px between major card groups.

### Grid & Container

The world fills the viewport. Cards occupy the upper middle, bottom actions form a three-point dock, and sheets use full-width mobile columns.

### Whitespace Philosophy

Treat open scenery as whitespace. Keep overlays small enough that the character remains visible and emotionally present.

## Elevation & Depth

World depth comes from atmospheric blur and spatial lighting. Cards use soft shadow and occasional translucent separation.

### Decorative Depth

Use bloom, colored haze, tiny particles, and softly blurred scenery behind conversation. Avoid glass-heavy chrome that competes with the world.

## Shapes

### Border Radius Scale

Use 16px chat bubbles, 22px activity cards, 28px drawers and sheets, and fully round icon controls.

### Photography & Illustration Geometry

Keep the 3D companion fully visible with safe space for UI. Inventory assets sit centered on rounded square tiles.

## Components

### Buttons

Primary actions are dark rounded pills or white circular arrows. Native controls must inherit the rounded geometry, dark-plum ink, and playful scale.

### Pricing Tabs

Membership and shop categories use compact pills with a dark selected state and quiet cream track.

### Cards & Containers

Activity cards use cream or saturated gradient panels with one prompt and one clear action. Drawers use a clean icon-and-label list.

### Inputs & Forms

Onboarding fields are large white pills. Chat input is a low floating capsule with camera and voice actions attached.

### Status & Build Page

Daily streaks, token balance, locks, insight progress, and remaining chat appear beside the relevant world or item.

### Navigation

Anchor camera, chat, and voice at the bottom of the planet. Use the side drawer for the broader product map and modal close/back controls for focus.

### Footer

There is no footer. The persistent world controls or current sheet action complete each surface.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints

Keep the world full-screen on phones. Wider screens may center the world and place menu or journal content in an adjacent panel.

### Touch Targets

World actions, drawer rows, carousel cards, shop tiles, and chat controls require at least 44px targets.

### Collapsing Strategy

Keep primary conversation actions visible. Move secondary progression and commerce into the drawer or a bottom sheet.

### Image Behavior

Use `cover` for the rendered world and `contain` for the companion, clothing, decorations, and prompt artwork.

## Iteration Guide

Start with the planet, companion, three bottom actions, cream prompt card, and side drawer. Add chat, daily activities, progression, and customization after the core relationship loop works.

## Known Gaps

Video-only moments in the catalog limit inspection of some animation transitions. Static screens and complete flow structures clearly establish the world, overlays, chat, progression, shop, and settings patterns.

</design-context>

Use the design system above for all UI you generate.
