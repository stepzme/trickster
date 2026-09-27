<design-context>
---
version: alpha
name: Telegram-design-analysis
description: "A native-feeling communication system built from white or pure-black canvases, translucent floating navigation, Telegram-blue actions, compact chat rows, colorful square settings icons, and playful emoji-like mascot empty states. Hierarchy remains nearly identical across light and dark themes."

colors:
  primary: "#229ED9"
  on-primary: "#FFFFFF"
  primary-pressed: "#1688C3"
  ink: "#101114"
  ink-muted: "#7A7D83"
  ink-subtle: "#AEB0B5"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F6"
  surface-2: "#EAEBED"
  dark-canvas: "#000000"
  dark-surface-1: "#1C1C1E"
  dark-surface-2: "#2C2C2E"
  hairline: "#E3E4E7"
  semantic-success: "#34C759"
  semantic-warning: "#F5A623"
  semantic-danger: "#FF3B30"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4px }
  display-md: { fontFamily: System Sans, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 11px 18px }
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px 12px }
  settings-group: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8px }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 10px 14px }
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58px }
---

## Overview

Telegram combines dense communication utility with unusually soft floating chrome. Blue actions, compact rows, colorful settings icons, and occasional mascot scenes remain consistent in light and dark themes.

## Colors

### Brand & Accent

Telegram blue marks active navigation, links, unread badges, and direct actions. Settings icons use category colors inside bounded squares.

### Surface

Light theme uses white with pale gray grouped rows; dark theme uses black with graphite groups. Floating dock and buttons use translucent lifted surfaces.

### Text

Near-black or white carries names and titles; gray carries previews, timestamps, and inactive labels.

### Semantic

Green confirms sent or active state, red marks unread badges and destructive actions, and orange warns. Blue remains interaction.

## Typography

### Font Family

Use the platform system sans for a native, highly legible communication rhythm.

### Hierarchy

Use 21–27px profile or settings titles, 16px chat names, 14px message previews, and 10–12px timestamps or dock labels.

### Principles

Prioritize sender, preview, time, and unread count. Keep action labels concise and preserve dynamic-type legibility.

### Note on Font Substitutes

Use SF Pro on Apple platforms or Inter elsewhere. Match platform numeral and emoji behavior.

## Layout

### Spacing System

Use a 4px base, 10–12px page gutters, 8px row rhythm, and 16–20px between settings groups.

### Grid & Container

Chats, contacts, and calls use full-width lists. Settings stacks rounded groups; empty states center one illustration in open space.

### Whitespace Philosophy

Keep lists dense and predictable. Empty states use generous whitespace to focus the character and next action.

## Elevation & Depth

Floating dock, circular top actions, search, and sheets use soft blur and shadow over otherwise flat lists.

### Decorative Depth

Use translucency for chrome and glossy mascot art for empty states. Avoid decorative effects inside message rows.

## Shapes

### Border Radius Scale

Settings groups use 16px, fields 12px or pills, floating actions and avatars are circular, and the dock is a full pill.

### Photography & Illustration Geometry

Avatars are circular; chat media respects its source ratio. Mascots are centered, compact, and surrounded by clear space.

## Components

### Buttons

Primary actions are blue text or blue pills; top actions use translucent circles. Native controls must inherit theme surfaces and Telegram blue.

### Pricing Tabs

Call filters, media modes, and settings segments use compact pale pills with stronger selected fill.

### Cards & Containers

Chat rows remain flat. Settings use grouped rounded containers; message attachments and sheets use contextual cards.

### Inputs & Forms

Search is a pale pill. Message composition uses a compact field with attachment and media actions; account forms stay single-column.

### Status & Build Page

Unread, muted, pinned, verified, online, delivered, edited, scheduled, and call states appear close to the related chat or message.

### Navigation

Use the floating five-part dock for Contacts, Calls, Chats, Settings, and Search. Blue identifies the active destination.

### Footer

There is no footer. Lists end above the floating dock; conversations end at the composer and safe area.

## Do's and Don'ts

### Do

- Preserve chat scan order.
- Keep blue as the action anchor.
- Match hierarchy across themes.
- Use mascots only in spacious states.

### Don't

- Do not round every chat row.
- Do not add heavy shadows to messages.
- Do not mix mascots into dense lists.
- Do not expose mismatched light controls in dark mode.

## Responsive Behavior

### Breakpoints

Phone layouts remain list-to-detail. Wider screens may show navigation, chat list, and conversation in adjacent columns.

### Touch Targets

Rows, message actions, attachments, top actions, and dock destinations require at least 44px targets.

### Collapsing Strategy

Move contextual actions into menus on narrow screens. Keep composer and current conversation context persistent.

### Image Behavior

Use `cover` for avatars, preserve media ratios, and `contain` mascot art. Maintain contrast in both themes.

## Iteration Guide

Start with chat list, floating dock, search, conversation composer, and theme pair. Add attachments, calls, contacts, groups, stories, and settings afterward.

## Known Gaps

All 262 flow records were surveyed; representative Chats, Contacts, Calls, Settings, and Dark mode screens were inspected. Tablet split view and every media or payment failure were not visible.

</design-context>

Use the design system above for all UI you generate.
