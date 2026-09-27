<design-context>
---
version: alpha
name: MAX-design-analysis
description: "A clean messenger with a neutral white communication shell, vivid blue active controls, pale-blue message surfaces, black circular creation actions, dark immersive call stages, and a luminous blue-violet brand mark."
colors:
  primary: "#1488F8"
  on-primary: "#FFFFFF"
  primary-hover: "#359CFA"
  primary-focus: "#006DD6"
  ink: "#151518"
  ink-muted: "#77777E"
  ink-subtle: "#A8A8AE"
  ink-tertiary: "#CCCCD1"
  canvas: "#FFFFFF"
  surface-1: "#F3F3F5"
  surface-2: "#EAF4FC"
  surface-3: "#DFEAF4"
  surface-4: "#D3DDE7"
  hairline: "#E8E8EB"
  hairline-strong: "#D1D1D6"
  hairline-tertiary: "#B8B8BF"
  inverse-canvas: "#15161A"
  inverse-surface-1: "#292B30"
  inverse-surface-2: "#3A3D43"
  inverse-ink: "#FFFFFF"
  brand-secure: "#7658FF"
  semantic-success: "#27C46B"
  semantic-overlay: "#151518"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  chat-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 12px}
  message-bubble: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 9px 12px}
  call-tray: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 8px 12px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 7px 8px}
---
## Overview

MAX is a neutral messenger where blue marks communication, white keeps lists readable, and calls switch into a dark focused stage.

**Key Characteristics:**
- White contacts and chat lists.
- Blue active controls and pale-blue messages.
- Black circular create actions.
- Dark call and media viewers.
- Luminous 3D brand onboarding.

## Colors

### Brand & Accent

Bright blue is primary; violet enriches brand moments. Black is reserved for create actions and dark-stage controls.

### Surface

White is primary with pale gray lists and pale blue communication surfaces.

### Text

Near-black carries names and messages; gray carries time, status, and previews.

### Semantic

Green means online, red ends calls or destroys, and blue confirms active communication.

## Typography

### Font Family

Use SF Pro Display for brand and call titles, SF Pro Text for conversations and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding claim |
| headline | 20px | 700 | Section title |
| card-title | 15px | 600 | Contact and chat name |
| body | 12px | 400 | Message and preview |
| caption | 9px | 400 | Time, status, navigation |

### Principles

- Lead rows with identity.
- Keep timestamps quiet and aligned.
- Prioritize message legibility over decoration.

### Note on Font Substitutes

Inter is suitable; preserve Cyrillic and compact message density.

## Layout

### Spacing System

Use a 4px base, 10px row rhythm, and 12px screen gutters.

### Grid & Container

Contacts and chats use lists; conversations use a message column; calls use one centered stage.

### Whitespace Philosophy

Lists stay compact while calls, QR, and identity sharing receive open space.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Contacts and chats |
| 1 | Pale message surface | Conversation |
| 2 | Floating black control | Create and share |
| 3 | Dark focused stage | Calls and media |

### Decorative Depth

Use glow only in brand and call context; ordinary communication remains flat.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Badges |
| rounded-sm | 8px | Fields and buttons |
| rounded-md | 12px | Media |
| rounded-lg | 16px | Message bubbles |
| rounded-full | full | Avatar and call controls |

### Photography & Illustration Geometry

Avatars are circular, media uses clean rectangles, and the brand mark remains centered and uncropped.

## Components

### Buttons

Primary actions are blue; create controls are black circles; call controls use dark pills with red end-call.

### Pricing Tabs

Tabs use text with a blue underline; settings use restrained segmented controls.

### Cards & Containers

Chat rows stay flat. QR identity and system accounts may use isolated cards or sheets.

### Inputs & Forms

Search and compose fields are pale gray with blue focus and integrated attachment controls.

### Status & Build Page

Online, unread, delivery, and call states use compact markers close to the related identity or message.

### Navigation

Keep Contacts, Calls, Chats, and Settings fixed; active state uses blue.

### Footer

No footer; bottom navigation or the composer owns the safe area.

## Do's and Don'ts

### Do

- Keep identity and presence clear.
- Preserve message readability.
- Separate light messaging from dark calls.
- Restyle native permissions coherently.

### Don't

- Don't overuse brand glow.
- Don't put heavy cards around every row.
- Don't hide call controls.
- Don't mix sticker art into settings.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten previews and composer |
| Standard | 375–430px | Default list and call layout |
| Wide | 431px+ | Expand message measure and media |

### Touch Targets

Rows, compose, attachments, calls, tabs, and navigation remain at least 44px.

### Collapsing Strategy

Truncate previews before names, wrap messages naturally, and keep call controls in one reachable tray.

### Image Behavior

Crop avatars consistently, contain QR codes, and preserve media aspect ratios.

## Iteration Guide

Tune chat scanning first, then conversation rhythm, media sharing, calls, and identity exchange.

## Known Gaps

- Group administration was not visually sampled.
- Service mini-app surfaces were not represented.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
