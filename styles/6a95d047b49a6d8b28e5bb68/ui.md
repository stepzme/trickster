<design-context>
---
version: alpha
name: WB-Chat-design-analysis
description: "A quiet monochrome messenger built from white space, charcoal actions, pale search fields, hairline-separated lists, rounded bottom docks, and restrained avatar color. Both light and dark themes keep the same low-decoration structure, letting conversation content provide identity."

colors:
  primary: "#2D2D31"
  on-primary: "#FFFFFF"
  primary-pressed: "#171719"
  ink: "#18181A"
  ink-muted: "#77777D"
  ink-subtle: "#ABABB1"
  canvas: "#FFFFFF"
  surface-1: "#F7F7F9"
  surface-2: "#EEEEF1"
  dark-canvas: "#151518"
  dark-surface: "#242428"
  dark-ink: "#F7F7F7"
  accent-magenta: "#D36AD1"
  accent-orange: "#FF702D"
  accent-lime: "#9BCB5A"
  hairline: "#E6E6E9"
  semantic-success: "#319266"
  semantic-danger: "#D8525D"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 18px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.15px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px }
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 10px 12px }
  message-composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 10px 14px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 52px }
---

## Overview

WB Chat is intentionally plain and content-first. Monochrome chrome, thin separators, soft search surfaces, and small avatar color create a messenger that feels fast and unobtrusive.

## Colors

### Brand & Accent

Charcoal is the primary action and selected-navigation color. Magenta, orange, lime, cyan, and blue appear mainly in generated avatars and user content.

### Surface

Use white canvas, very pale gray search and dock surfaces, and occasional light-gray sheet backdrops. Dark mode uses near-black canvas with charcoal fields.

### Text

Use near-black for names and headings, medium gray for status and previews, and white on charcoal actions or dark canvas.

### Semantic

Use green for online or successful state, red for reporting, blocking, or deletion, and neutral gray for muted or unavailable states.

## Typography

### Font Family

Use a neutral system sans with compact Cyrillic and Latin metrics.

### Hierarchy

Use 24–30px setup headings, 18px page headings, 14–16px names and messages, and 10–12px status or timestamps.

### Principles

Names and active conversation titles receive medium emphasis; message previews and availability remain lighter. Avoid display typography inside threads.

### Note on Font Substitutes

Use SF Pro or Inter with 600–650 headings and regular body weights.

## Layout

### Spacing System

Use a 4px base, 12px list padding, 16px screen gutters, 8–10px row gaps, and 24px around empty-state messaging.

### Grid & Container

Chats and contacts are single-column lists. Threads reserve the top for identity, center for messages, and bottom for the composer.

### Whitespace Philosophy

Keep empty states genuinely empty. In populated lists, use separators and alignment instead of enclosing each row in a card.

## Elevation & Depth

Use very soft shadow only under the bottom dock or modal sheet. Most structure is flat and separated by tone or hairlines.

### Decorative Depth

Do not introduce decorative depth. Theme changes, wallpaper, avatars, and shared media may add character without altering the neutral chrome.

## Shapes

### Border Radius Scale

Use 8px search fields, 12px sheets and action buttons, 18px media, and pills for the composer and bottom dock.

### Photography & Illustration Geometry

Crop avatars as circles and shared media as restrained rounded rectangles. Empty states rely on type and optional small line icons, not hero illustrations.

## Components

### Buttons

Empty-state and creation actions are wide charcoal rounded rectangles. Header actions are monochrome icons. Native controls must inherit these fills, radii, and neutral emphasis.

### Pricing Tabs

All, Chats, Groups, and Channels use text tabs with a thin black underline; inactive items are gray.

### Cards & Containers

Chat rows remain flat with circular avatar, name, preview, and trailing time or state. Settings use simple full-width rows rather than cards.

### Inputs & Forms

Search fields are pale and compact. The message composer is a low rounded bar with attachment, emoji, microphone, and placeholder.

### Status & Build Page

Use small online, last-seen, muted, unread, pinned, delivered, blocked, typing, and theme states next to the relevant identity or message.

### Navigation

Use a three-item floating dock for Contacts, Chats, and Settings. Within Chats, keep the category row directly under Search.

### Footer

There is no footer. Agreement, data management, app information, and logout live in Profile settings.

## Do's and Don'ts

### Do

- Let conversation content provide color.
- Keep rows flat and easy to scan.
- Mirror structure precisely between themes.
- Use one clear action in empty states.

### Don't

- Do not wrap every message or setting in a large card.
- Do not introduce brand gradients into conversation chrome.
- Do not overdecorate empty states.
- Do not leave default blue accents on native controls.

## Responsive Behavior

### Breakpoints

Phones show one list or thread. Wider screens may pair chat list and active conversation, with profile or settings in a third pane.

### Touch Targets

Tabs, rows, header icons, composer actions, messages, reactions, and bottom navigation require at least 44px targets.

### Collapsing Strategy

Keep conversation identity, message history, and composer visible. Move search, media, members, moderation, and settings into side or modal panels.

### Image Behavior

Use `cover` for avatars and shared photos, `contain` for files and stickers, and preserve media aspect ratio inside rounded clipping.

## Iteration Guide

Start with login, chat list and filters, private thread, composer, Contacts, group creation, Profile, and light/dark themes. Add channels, folders, moderation, privacy, and media tools afterward.

## Known Gaps

Eighty-four catalog flows were reviewed by structure with complete representative scenarios across login, Home, private chat, group creation, profile, and dark theme. Call and media transitions were not exhaustively inspected.

</design-context>

Use the design system above for all UI you generate.
