<design-context>
---
version: 1
platform: iOS
name: MAX-design-analysis
description: "A clean messenger with a neutral white communication shell, vivid blue active controls, pale-blue message surfaces, black circular creation actions, dark immersive call stages, and a luminous blue-violet brand mark."
colors:
  primary: "#1488F8"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  chat-row: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 12]}
  message-bubble: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [9, 12]}
  call-tray: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [8, 12]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [7, 8]}
---

# Overview

MAX is a neutral messenger where blue marks communication, white keeps lists readable, and calls switch into a dark focused stage.

**Key Characteristics:**
- White contacts and chat lists.
- Blue active controls and pale-blue messages.
- Black circular create actions.
- Dark call and media viewers.
- Luminous 3D brand onboarding.

# Non-negotiable visual invariants

- The reference consistently shows white contacts and chat lists.
- The reference consistently shows blue active controls and pale-blue messages.
- The reference consistently shows black circular create actions.
- The reference consistently shows dark call and media viewers.
- The reference consistently shows luminous 3D brand onboarding.

# Color and surfaces

### Brand & Accent

Bright blue is primary; violet enriches brand moments. Black is reserved for create actions and dark-stage controls.

### Surface

White is primary with pale gray lists and pale blue communication surfaces.

### Text

Near-black carries names and messages; gray carries time, status, and previews.

### Semantic

Green means online, red ends calls or destroys, and blue confirms active communication.

# Typography

### Font Family

Use SF Pro Display for brand and call titles, SF Pro Text for conversations and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Onboarding claim |
| headline | 20 points | 700 | Section title |
| card-title | 15 points | 600 | Contact and chat name |
| body | 12 points | 400 | Message and preview |
| caption | 9 points | 400 | Time, status, navigation |

### Principles

- Lead rows with identity.
- Keep timestamps quiet and aligned.
- Prioritize message legibility over decoration.

### Note on Font Substitutes

Inter is suitable; preserve Cyrillic and compact message density.

# Screen composition

### Spacing System

Use a 4 points base, 10 points row rhythm, and 12 points screen gutters.

### Grid & Container

Contacts and chats use lists; conversations use a message column; calls use one centered stage.

### Whitespace Philosophy

Lists stay compact while calls, QR, and identity sharing receive open space.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Contacts and chats |
| 1 | Pale message surface | Conversation |
| 2 | Floating black control | Create and share |
| 3 | Dark focused stage | Calls and media |

### Decorative Depth

Use glow only in brand and call context; ordinary communication remains flat.

# Navigation appearance

Keep Contacts, Calls, Chats, and Settings fixed; active state uses blue.

# Components

### Buttons

Primary actions are blue; create controls are black circles; call controls use dark pills with red end-call.

### Cards & Containers

Chat rows stay flat. QR identity and system accounts may use isolated cards or sheets.

### Inputs & Forms

Search and compose fields are pale gray with blue focus and integrated attachment controls.

# Imagery and icons

Use glow only in brand and call context; ordinary communication remains flat.

Avatars are circular, media uses clean rectangles, and the brand mark remains centered and uncropped.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Online, unread, delivery, and call states use compact markers close to the related identity or message.

# iOS adaptation

### Touch Targets

Rows, compose, attachments, calls, tabs, and navigation remain at least 44 points.

### Collapsing Strategy

Truncate previews before names, wrap messages naturally, and keep call controls in one reachable tray.

### Image Behavior

Crop avatars consistently, contain QR codes, and preserve media aspect ratios.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't overuse brand glow.
- Don't put heavy cards around every row.
- Don't hide call controls.
- Don't mix sticker art into settings.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

# Known gaps

- Group administration was not visually sampled.
- Service mini-app surfaces were not represented.
- Tablet and landscape layouts were not represented.

</design-context>
