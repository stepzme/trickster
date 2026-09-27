<design-context>
---
version: alpha
name: Claude-design-analysis
description: "A warm, editorial conversational workspace with an off-white paper canvas, dark ink, restrained terracotta actions, serif headings, fine outline icons, neutral rounded composers, and compact blue system toggles. Chats, artifacts, image and file input, code, voice, capabilities, privacy, subscription, and settings remain calm and text-led."
colors:
  primary: "#D97757"
  on-primary: "#FFFFFF"
  primary-hover: "#BF6042"
  primary-soft: "#F7EAE5"
  accent: "#191714"
  accent-secondary: "#2F80ED"
  ink: "#1C1A18"
  ink-muted: "#706D68"
  ink-subtle: "#AAA69F"
  canvas: "#F8F7F3"
  surface-1: "#FFFFFF"
  surface-2: "#EFEEE9"
  hairline: "#DFDDD6"
  semantic-success: "#3A9B6C"
  semantic-danger: "#C94A47"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: Georgia, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: Georgia, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: Georgia, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  headline: { fontFamily: Georgia, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12px }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px 16px }
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: 14px 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Claude treats chat like an editorial document. Warm paper tones, serif titles, modest terracotta actions, and a large rounded composer keep conversation, artifacts, and code approachable.

**Key Characteristics:**
- Warm off-white paper canvas.
- Serif product and model headings.
- Terracotta primary actions.
- Fine black outline icons.
- Large rounded bottom composer.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): New chat, send, and selected product actions.
- **Accent** ({colors.accent}): Body ink, voice, and strong controls.
- **Secondary Accent** ({colors.accent-secondary}): Native capability toggles and links.

### Surface
- **Canvas** ({colors.canvas}): Chat, drawer, artifacts, and settings.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls and grouped fields.
- **Hairline** ({colors.hairline}): Quiet separation.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

## Typography

### Font Family

- **Georgia** — product name, model, and editorial headings.
- **SF Pro Text** — controls, forms, and explanatory copy.
- **SF Mono** — code, identifiers, or compact numeric data.

### Hierarchy

Use 36px bold for major statements, 22px bold for screen headings, 16px semibold for cards, 14px regular for detail, and 15px semibold for primary actions.

### Principles

- Keep prose readable and calm.
- Use serif type for identity, not long body text.
- Let artifacts remain distinct from chat.
- Keep capability state explicit.

### Note on Font Substitutes

Use **Inter** or the platform system sans when the reference display face is unavailable.

## Layout

### Spacing System

Use a 4px base, 16px edge gutters, 12px control gaps, and 16px card padding.

### Grid & Container

Chat is a single readable column above a large composer. The drawer groups New chat, Chats, Artifacts, recents, account, and settings.

### Whitespace Philosophy

Use paper-like margins and generous breathing room around short responses; tighten only for code and structured output.

## Elevation & Depth

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use nearly flat warm surfaces and light modal sheets. Content and typography create hierarchy.

## Shapes

### Border Radius Scale

Use 8px for small controls, 12px for fields, 16px for actions, 20px for cards, and full pills or circles for compact selection.

### Photography & Illustration Geometry

User images and generated artifacts appear as content. Small ghost and capability icons are functional, not a separate illustration system.

## Components

### Buttons

Terracotta circles send or start a new chat; black circular voice controls and neutral text actions handle secondary behavior.

### Pricing Tabs

Model and artifact state use compact menus; capabilities and privacy use native toggles.

### Cards & Containers

Composer, recent row, artifact chip, incognito notice, and settings sections use restrained rounded surfaces.

### Inputs & Forms

The composer supports text, image, file, voice, tools, and app connections with clear send state.

### Status & Build Page

Show incognito, generating, artifact created, connected app, upload, voice, error, and capability enabled through label plus icon.

### Navigation

The drawer holds global chat and artifact destinations; settings opens as a focused native sheet.

### Footer

The rounded composer stays above the safe area and keeps add, tools, voice, and send within reach.

## Do's and Don'ts

### Do

- Preserve the warm paper feel.
- Keep prose highly readable.
- Use terracotta sparingly.
- Separate artifacts from conversation.
- Label privacy and capability state.

### Don't

- Don't add glossy gradients.
- Don't use decorative illustrations in the shell.
- Don't make every action terracotta.
- Don't crowd the composer.
- Don't render long code as body prose.

## Responsive Behavior

### Breakpoints

Use a centered or split panel above 768px, the reference single column from 390–767px, and tighter labels below 390px.

### Touch Targets

Keep every row, tab, selector, map control, and primary action at least 44px.

### Collapsing Strategy

Preserve model, content, composer, send or voice, and drawer access. Move secondary response actions into overflow.

### Image Behavior

Contain uploaded images and artifacts as conversation content; never use them as page background or decoration.

## Iteration Guide

1. Build conversation and composer.
2. Add drawer, chats, and recents.
3. Add image, file, voice, and code.
4. Add artifacts and app connections.
5. Add capabilities, privacy, subscription, and settings.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 11 available flow names were inventoried; home, code, image and file input, voice, capabilities, and settings were image-reviewed.
- Artifact editing, realtime voice animation, and connected-app authorization were not fully assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
