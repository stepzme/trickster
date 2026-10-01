<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 500, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [11, 18]}
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [8, 12]}
  settings-group: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 8 }
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  bottom-dock: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 58 }
---

# Overview

Telegram combines dense communication utility with unusually soft floating chrome. Blue actions, compact rows, colorful settings icons, and occasional mascot scenes remain consistent in light and dark themes.

# Non-negotiable visual invariants

- Preserve chat scan order.
- Keep blue as the action anchor.
- Match hierarchy across themes.
- Use mascots only in spacious states.
- Chats, contacts, and calls use full-width lists.
- Settings stacks rounded groups; empty states center one illustration in open space.
- Keep lists dense and predictable.
- Empty states use generous whitespace to focus the character and next action.

# Color and surfaces

Telegram blue marks active navigation, links, unread badges, and direct actions. Settings icons use category colors inside bounded squares.

Light theme uses white with pale gray grouped rows; dark theme uses black with graphite groups. Floating dock and buttons use translucent lifted surfaces.

Near-black or white carries names and titles; gray carries previews, timestamps, and inactive labels.

Green confirms sent or active state, red marks unread badges and destructive actions, and orange warns. Blue remains interaction.

# Typography

Use the platform system sans for a native, highly legible communication rhythm.

Use 21–27 points profile or settings titles, 16 points chat names, 14 points message previews, and 10–12 points timestamps or dock labels.

Prioritize sender, preview, time, and unread count. Keep action labels concise and preserve dynamic-type legibility.

Use SF Pro on Apple platforms or Inter elsewhere. Match platform numeral and emoji behavior.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 10–12 points page gutters, 8 points row rhythm, and 16–20 points between settings groups.

Chats, contacts, and calls use full-width lists. Settings stacks rounded groups; empty states center one illustration in open space.

Keep lists dense and predictable. Empty states use generous whitespace to focus the character and next action.

Use translucency for chrome and glossy mascot art for empty states. Avoid decorative effects inside message rows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use the floating five-part dock for Contacts, Calls, Chats, Settings, and Search. Blue identifies the active destination.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are blue text or blue pills; top actions use translucent circles. Native controls must inherit theme surfaces and Telegram blue.

Chat rows remain flat. Settings use grouped rounded containers; message attachments and sheets use contextual cards.

Search is a pale pill. Message composition uses a compact field with attachment and media actions; account forms stay single-column.

Unread, muted, pinned, verified, online, delivered, edited, scheduled, and call states appear close to the related chat or message.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Avatars are circular; chat media respects its source ratio. Mascots are centered, compact, and surrounded by clear space.

Use `cover` for avatars, preserve media ratios, and `contain` mascot art. Maintain contrast in both themes.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Unread, muted, pinned, verified, online, delivered, edited, scheduled, and call states appear close to the related chat or message.

Green confirms sent or active state, red marks unread badges and destructive actions, and orange warns. Blue remains interaction.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Rows, message actions, attachments, top actions, and dock destinations require at least 44 points targets.
- Move contextual actions into menus on narrow screens. Keep composer and current conversation context persistent.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not round every chat row.
- Do not add heavy shadows to messages.
- Do not mix mascots into dense lists.
- Do not expose mismatched light controls in dark mode.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
