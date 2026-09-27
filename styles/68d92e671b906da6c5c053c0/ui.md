<design-context>
---
version: alpha
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
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-lg: { fontFamily: System Sans, fontSize: 29px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 23px, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 13px 18px }
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  message-bubble: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 9px 12px }
  composer: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 9px 12px }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58px }
---

## Overview

VK Messenger uses a dark utility shell for lists and calls, then allows richer wallpaper and violet message styling inside conversations. Avatars, presence, and unread state organize dense communication.

## Colors

### Brand & Accent

Blue owns contact, call, link, and general navigation actions. Violet belongs to message controls, chat bubbles, and expressive conversation themes.

### Surface

Use near-black for lists, charcoal for search and sheets, and optional dark wallpaper behind chat bubbles.

### Text

Off-white carries names and messages; gray carries presence, timestamps, previews, and inactive navigation.

### Semantic

Green marks online or successful delivery, amber warns, and red marks missed calls or destructive actions.

## Typography

### Font Family

Use a familiar system sans with compact list metrics and strong multilingual support.

### Hierarchy

Use 23–36px onboarding titles, 20px page titles, 14–16px names and messages, and 10–12px status.

### Principles

Keep names stronger than previews, timestamps aligned, and message copy comfortable at small sizes.

### Note on Font Substitutes

Use SF Pro or Inter with medium weights and reliable Cyrillic coverage.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 8–10px list gaps, and 16–24px between grouped account sections.

### Grid & Container

Lists align avatar, text block, timestamp, and state. Conversations reserve the bottom for a persistent composer.

### Whitespace Philosophy

Keep list rhythm compact. Give media, quoted messages, and grouped call actions extra internal space.

## Elevation & Depth

Use tonal sheets and subtle bubble contrast. Chat wallpaper may add atmospheric depth without reducing text contrast.

### Decorative Depth

Onboarding may use blue gradients and translucent device art. Core lists remain flat; chat themes carry optional decoration.

## Shapes

### Border Radius Scale

Use 8px fields, 12px bubbles, 16px sheets, and circular avatars or call controls.

### Photography & Illustration Geometry

Avatars are circular and media respects its aspect ratio inside rounded bubbles. There is no standalone illustration system.

## Components

### Buttons

Call and contact actions use blue icons or tiles; message send and voice use violet. Native controls must inherit the dark palette and current accent.

### Pricing Tabs

Use thin underline or text tabs for media and profile sections, with blue or violet active state.

### Cards & Containers

Chat rows remain mostly flat. Promotions, permission reminders, and community prompts use contained graphite cards.

### Inputs & Forms

Search uses a graphite field; the composer is a dark pill with attachment, emoji, media, and voice actions.

### Status & Build Page

Online, typing, unread, pinned, muted, delivered, missed call, and recording states appear beside the relevant chat or participant.

### Navigation

Use four bottom destinations for Contacts, Calls, Chats, and Account. Conversation navigation stays local and focused.

### Footer

There is no footer. The composer or bottom navigation completes each primary surface.

## Do's and Don'ts

### Do

- Keep list hierarchy compact and readable.
- Attach state to the related chat.
- Preserve large call and compose targets.
- Maintain bubble contrast over wallpaper.

### Don't

- Do not decorate the chat list heavily.
- Do not make previews compete with names.
- Do not use red outside warning or failure.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Phones show one list or conversation. Wider screens may use list, conversation, and detail panes.

### Touch Targets

Chat rows, avatars, tabs, call controls, composer actions, and navigation require at least 44px targets.

### Collapsing Strategy

Keep participant, messages, composer, and call actions visible. Move media, search, and advanced chat tools into panels.

### Image Behavior

Use `cover` for avatars and story media, `contain` for files and QR codes, and preserve message attachment aspect ratios.

## Iteration Guide

Start with chat list, search, conversation, composer, contacts, calls, and four-item navigation. Add communities, favorites, stories, themes, and account tools afterward.

## Known Gaps

The inspected catalog documents 50 flows across onboarding, chats, contacts, calls, and profiles. Large group moderation and degraded delivery states are less represented.

</design-context>

Use the design system above for all UI you generate.
