<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.4 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 18, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.15 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  search-field: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  chat-row: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 12]}
  message-composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [10, 14]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 52 }
---

# Overview

WB Chat is intentionally plain and content-first. Monochrome chrome, thin separators, soft search surfaces, and small avatar color create a messenger that feels fast and unobtrusive.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A quiet monochrome messenger built from white space, charcoal actions, pale search fields, hairline-separated lists, rounded bottom docks, and restrained avatar color.
- The dominant canvas token is #FFFFFF and the primary accent token is #2D2D31.
- The recorded display style is 36 points while the body style is 14 points.
- Navigation uses a three-item floating dock for Contacts, Chats, and Settings.
- The reviewed screens use this hierarchy: Both light and dark themes keep the same low-decoration structure, letting conversation content provide identity.

# Color and surfaces

### Brand & Accent

Charcoal is the primary action and selected-navigation color. Magenta, orange, lime, cyan, and blue appear mainly in generated avatars and user content.

### Surface

Use white canvas, very pale gray search and dock surfaces, and occasional light-gray sheet backdrops. Dark mode uses near-black canvas with charcoal fields.

### Text

Use near-black for names and headings, medium gray for status and previews, and white on charcoal actions or dark canvas.

### Semantic

Use green for online or successful state, red for reporting, blocking, or deletion, and neutral gray for muted or unavailable states.

# Typography

### Font Family

Use a neutral system sans with compact Cyrillic and Latin metrics.

### Principles

Names and active conversation titles receive medium emphasis; message previews and availability remain lighter. Avoid display typography inside threads.

### Note on Font Substitutes

Use SF Pro or Inter with 600–650 headings and regular body weights.

# Screen composition

### Grid & Container

Chats and contacts are single-column lists. Threads reserve the top for identity, center for messages, and bottom for the composer.

### Whitespace Philosophy

Keep empty states genuinely empty. In populated lists, use separators and alignment instead of enclosing each row in a card.

# Navigation appearance

Use a three-item floating dock for Contacts, Chats, and Settings. Within Chats, keep the category row directly under Search.

# Components

### Buttons

Empty-state and creation actions are wide charcoal rounded rectangles. Header actions are monochrome icons. Native controls must inherit these fills, radii, and neutral emphasis.

All, Chats, Groups, and Channels use text tabs with a thin black underline; inactive items are gray.

### Cards & Containers

Chat rows remain flat with circular avatar, name, preview, and trailing time or state. Settings use simple full-width rows rather than cards.

### Inputs & Forms

Search fields are pale and compact. The message composer is a low rounded bar with attachment, emoji, microphone, and placeholder.

### Status & Build Page

Use small online, last-seen, muted, unread, pinned, delivered, blocked, typing, and theme states next to the relevant identity or message.

### Navigation

Use a three-item floating dock for Contacts, Chats, and Settings. Within Chats, keep the category row directly under Search.

# Imagery and icons

Use very soft shadow only under the bottom dock or modal sheet. Most structure is flat and separated by tone or hairlines.

### Decorative Depth

Do not introduce decorative depth. Theme changes, wallpaper, avatars, and shared media may add character without altering the neutral chrome.

# States

Use small online, last-seen, muted, unread, pinned, delivered, blocked, typing, and theme states next to the relevant identity or message.

# iOS adaptation

Phones show one list or thread. Wider screens may pair chat list and active conversation, with profile or settings in a third pane.

### Touch Targets

Tabs, rows, header icons, composer actions, messages, reactions, and bottom navigation require at least 44pt targets.

### Collapsing Strategy

Keep conversation identity, message history, and composer visible. Move search, media, members, moderation, and settings into side or modal panels.

### Image Behavior

Use `cover` for avatars and shared photos, `contain` for files and stickers, and preserve media aspect ratio inside rounded clipping.

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

- Let conversation content provide color.
- Keep rows flat and easy to scan.
- Mirror structure precisely between themes.
- Use one clear action in empty states.

### Don't

- Do not wrap every message or setting in a large card.
- Do not introduce brand gradients into conversation chrome.
- Do not overdecorate empty states.
- Do not leave default blue accents on native controls.

# Known gaps

Eighty-four catalog flows were reviewed by structure with complete representative scenarios across login, Home, private chat, group creation, profile, and dark theme. Call and media transitions were not exhaustively inspected.

</design-context>
