<design-context>
---
version: 1
platform: iOS
name: VK-Messenger-design-analysis
description: "A dark communication interface built from black and charcoal surfaces, compact avatar-led lists, blue call actions, violet messaging accents, and expressive gradient chat bubbles. It is familiar, dense, and optimized for frequent return."

colors:
  primary: "#4C8FF0"
  on-primary: "#FFFFFF"
  primary-pressed: "#3576D0"
  accent-violet: "#8B56EE"
  ink: "#F4F5F6"
  ink-muted: "#989BA0"
  ink-subtle: "#62656A"
  canvas: "#0B0C0D"
  surface-1: "#18191B"
  surface-2: "#2A2B2E"
  hairline: "#34363A"
  semantic-success: "#45B877"
  semantic-warning: "#E2A23A"
  semantic-danger: "#E95664"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-lg: { fontFamily: System Sans, fontSize: 29, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 23, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  message-bubble: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [9, 12]}
  composer: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [9, 12]}
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VK Messenger uses a dark utility shell for lists and calls, then allows richer wallpaper and violet message styling inside conversations. Avatars, presence, and unread state organize dense communication.

# Non-negotiable visual invariants

- The reference consistently shows list hierarchy compact and readable.
- The reference consistently shows attach state to the related chat.
- The reference consistently shows preserve large call and compose targets.
- The reference consistently shows maintain bubble contrast over wallpaper.
- The reference consistently shows a dark communication interface built from black and charcoal surfaces.
- The reference consistently shows compact avatar-led lists.
- The reference consistently shows blue call actions.
- The reference consistently shows violet messaging accents.

# Color and surfaces

### Brand & Accent

Blue owns contact, call, link, and general navigation actions. Violet belongs to message controls, chat bubbles, and expressive conversation themes.

### Surface

Use near-black for lists, charcoal for search and sheets, and optional dark wallpaper behind chat bubbles.

### Text

Off-white carries names and messages; gray carries presence, timestamps, previews, and inactive navigation.

### Semantic

Green marks online or successful delivery, amber warns, and red marks missed calls or destructive actions.

# Typography

### Font Family

Use a familiar system sans with compact list metrics and strong multilingual support.

### Hierarchy

Use 23–36 points onboarding titles, 20 points page titles, 14–16 points names and messages, and 10–12 points status.

### Principles

Keep names stronger than previews, timestamps aligned, and message copy comfortable at small sizes.

### Note on Font Substitutes

Use SF Pro or Inter with medium weights and reliable Cyrillic coverage.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 8–10 points list gaps, and 16–24 points between grouped account sections.

### Grid & Container

Lists align avatar, text block, timestamp, and state. Conversations reserve the bottom for a persistent composer.

### Whitespace Philosophy

Keep list rhythm compact. Give media, quoted messages, and grouped call actions extra internal space.

Surface hierarchy observed in the source:

Use tonal sheets and subtle bubble contrast. Chat wallpaper may add atmospheric depth without reducing text contrast.

### Decorative Depth

Onboarding may use blue gradients and translucent device art. Core lists remain flat; chat themes carry optional decoration.

# Navigation appearance

Use four bottom destinations for Contacts, Calls, Chats, and Account. Conversation navigation stays local and focused.

# Components

### Buttons

Call and contact actions use blue icons or tiles; message send and voice use violet. Native controls must inherit the dark palette and current accent.

### Cards & Containers

Chat rows remain mostly flat. Promotions, permission reminders, and community prompts use contained graphite cards.

### Inputs & Forms

Search uses a graphite field; the composer is a dark pill with attachment, emoji, media, and voice actions.

# Imagery and icons

Onboarding may use blue gradients and translucent device art. Core lists remain flat; chat themes carry optional decoration.

Avatars are circular and media respects its aspect ratio inside rounded bubbles. There is no standalone illustration system.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Online, typing, unread, pinned, muted, delivered, missed call, and recording states appear beside the relevant chat or participant.

# iOS adaptation

### Touch Targets

Chat rows, avatars, tabs, call controls, composer actions, and navigation require at least 44 points targets.

### Collapsing Strategy

Keep participant, messages, composer, and call actions visible. Move media, search, and advanced chat tools into panels.

### Image Behavior

Use `cover` for avatars and story media, `contain` for files and QR codes, and preserve message attachment aspect ratios.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Do not decorate the chat list heavily.
- Do not make previews compete with names.
- Do not use red outside warning or failure.
- Do not expose light native controls.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
