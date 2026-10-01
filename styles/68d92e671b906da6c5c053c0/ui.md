<design-context>
---
version: 1
platform: iOS
name: VK-Messenger-design-analysis
description: "A dense dark-mode messenger with black and charcoal list surfaces, white compact typography, blue-violet selected states, avatar-led rows, rounded search and composer fields, a four-item bottom bar, and circular call controls over frosted participant imagery."
colors:
  canvas: "#0B0C0D"
  surface-primary: "#18191B"
  surface-secondary: "#2A2B2E"
  accent-primary: "#4C8FF0"
  accent-secondary: "#8B56EE"
  text-primary: "#F4F5F6"
  text-secondary: "#989BA0"
  divider: "#34363A"
  destructive: "#E95664"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#4C8FF0", foreground: "#FFFFFF", shape: "rounded-rectangle-or-circle"}
  secondary-action: {fill: "#2A2B2E", foreground: "#F4F5F6", shape: "pill-or-icon"}
  primary-card: {fill: "#18191B", foreground: "#F4F5F6", shape: "flat-list-or-message"}
  navigation: {fill: "#0B0C0D", inactive: "#62656A", selected: "#4C8FF0"}
---

# Overview

VK Messenger is a dark, high-frequency communication interface whose identity comes from dense avatar-led rows, compact white type, blue-violet interaction states, and native iOS transient surfaces. The shell is predominantly black and charcoal. Conversations can introduce purple doodle wallpaper, richer bubbles, media, stickers, or participant imagery, but navigation, search, settings, and calls remain operational and restrained.

# Non-negotiable visual invariants

- Black or near-black fills the viewport; charcoal provides the only ordinary surface elevation for search, inputs, grouped panels, and sheets.
- Lists are compact and avatar-led, with stronger names, muted previews, aligned timestamps, and localized badges or status.
- Blue and violet carry primary selection, messaging, and call emphasis; green and red stay semantic.
- Rounded search fields and composer fields recur across dense screens and remain visually distinct from the flat list behind them.
- A dark four-item icon-and-label bottom bar uses muted inactive items and a blue or light selected state.
- Calls use frosted or blurred participant surfaces, a black lower control region, large circular buttons, and a uniquely red hang-up action.
- Bottom sheets and action sheets are the primary transient surface, with charcoal fill, large top corners, and visible dimmed context.
- Identity and status are carried by circular avatars, small badges, and concise text rather than large decorative cards.

# Color and surfaces

Near-black is the default canvas across lists, settings, chats, and navigation. Charcoal tones distinguish search bars, message composer, bubbles, sheets, selected rows, and grouped settings without creating a bright layered dashboard. Off-white carries names, messages, and titles; gray carries previews, timestamps, presence, placeholders, and inactive navigation. Blue marks navigation, call, link, switch, and selected control states, while violet is especially visible in conversation emphasis, themes, and messaging controls. Green signals positive or online state; red marks missed, destructive, or hang-up state. Decorative gradients, pale system backgrounds, or exposed white forms would break the reference.

# Typography

Typography uses SF Pro-like proportions with strong Cyrillic support. Large bold type is limited to onboarding or empty-state titles; screen titles are compact semibold; names and message labels sit around 15–17 points; previews, timestamps, and tab labels are smaller and gray. In lists, name weight must clearly exceed preview weight, and timestamps align without competing with unread badges. Message text uses comfortable regular weight inside compact bubbles. Dynamic Type should increase row and bubble height, wrap previews or labels when space allows, and preserve name-message-metadata hierarchy rather than shrinking avatars or controls.

# Screen composition

List archetypes use a safe-area top bar, a rounded full-width search field, and a continuous vertical table of avatar-text-state rows above the fixed bottom bar. Horizontal insets are tight, around 12–16 points, because density is part of the style. Conversation archetypes use a compact participant bar, vertically scrolling bubbles or media over a dark or themed wallpaper, and a persistent rounded composer above the keyboard or home indicator. Settings and picker archetypes use grouped dark rows with sparse separators, trailing controls, and no card-per-section treatment.

Call archetypes devote most of the screen to participant tiles, avatars, blur, or video, with status in safe upper regions and circular controls in a stable lower strip. Member, reaction, chat, recording, access, and sharing controls rise in rounded charcoal sheets. Onboarding or QR archetypes allow a larger centered graphic, but ordinary screens return immediately to dense native tables and controls.

# Navigation appearance

The main shell uses a dark four-item bottom bar with outline icons, compact labels, muted inactive states, and blue or off-white selection. Task-focused screens use iOS back chevrons, compact centered titles, and blue or white Cancel/Done actions. Search uses a rounded graphite field. Sheets have charcoal fill, large upper corners, a short grab handle, and vertically arranged rows. Native permission dialogs, keyboards, alerts, and action sheets retain iOS geometry in dark appearance. Call surfaces replace the tab bar with their own black circular-control dock.

# Components

Chat and contact rows use a circular avatar, leading-aligned name and preview stack, trailing timestamp or status, and optional compact badge. Message bubbles are rounded charcoal or violet-tinted shapes with off-white text; media keeps its aspect ratio within rounded clipping. The composer is a dark pill containing attachment, emoji or media, text, and voice or send controls. Search is a wide graphite pill with a leading magnifier. Call controls are large flat circles with monochrome glyphs, with blue for active emphasis and red for hang-up. Settings rows use switches, checks, segmented controls, chips, or chevrons aligned to the trailing edge. Empty states use one line icon and short centered text.

# Imagery and icons

Real avatars, contact thumbnails, message media, QR content, participant video, and call blur are functional imagery and should retain their visual footprint. Avatars use face-aware circular `cover`; message attachments preserve their natural aspect ratio; QR codes use contained square framing. Icons are simple monochrome line glyphs. Purple doodle wallpaper, Vmoji assets, sticker graphics, onboarding visuals, empty-state symbols, and promotional cards vary in construction and role; together they do not establish one stable authored illustration system. Do not extrapolate them into a universal decorative language.

# States

Observed states include onboarding, populated and searched lists, message sending with keyboard, phantom or themed conversation, unread and muted rows, profile and contact panels, permission alerts, active and grouped calls, participant access, recording and broadcast controls, reactions, in-call chat, scheduled-call forms, archive, sticker and avatar pickers, appearance choices, cache and privacy settings, blocked lists, location panels, and payment promos. Dark canvas, native navigation, rounded inputs, compact type, avatar hierarchy, and blue-violet selection remain constant. Status changes remain local to badges, icons, controls, or text.

# iOS adaptation

Use safe-area-aware top bars, a bottom inset for the four-item bar, and keyboard-aware positioning for the composer. Long lists, messages, settings, members, and sheets must scroll while top bars and active input remain stable. Preserve at least 44-point targets around compact icons, avatars, rows, tabs, call controls, and composer actions. On compact widths, truncate previews before names, keep timestamps and badges readable, and allow message bubbles to narrow rather than shrinking type. VoiceOver order should follow row avatar/name/preview/state, or conversation participant/messages/composer; online, unread, muted, recording, and destructive state must not rely on color alone. Keep native permission transitions system-owned. The sampled reference is dark-first; do not expose light defaults.

# Anti-generic checklist

- Do not replace the dark dense list with a stack of elevated cards or oversized rows.
- Do not expose light `Form`, search, alert, or sheet styling inside the dark shell.
- Do not use an unstyled `TabView`; preserve four compact items and the muted-to-blue/light selected contrast.
- Do not let previews, timestamps, or badges compete with participant names.
- Do not replace the persistent composer with a generic text field and detached send button.
- Do not reuse red outside missed, destructive, or hang-up states.
- Do not apply one radius to avatars, bubbles, sheets, pills, call circles, and media.
- Do not turn isolated Vmoji, QR, onboarding, wallpaper, or promo graphics into general decoration.

</design-context>
