<design-context>
---
version: 1
platform: iOS
name: DeepSeek-design-analysis
description: "A sparse white AI conversation workspace with dense readable black prose, pale-blue user messages, cobalt active states, compact reasoning/search chips, a bottom-fixed rounded composer, minimal top chrome, and native white sheets."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F7F8FA"
  accent-primary: "#4D6BFE"
  accent-secondary: "#EEF2FF"
  text-primary: "#15171B"
  text-secondary: "#777B84"
  divider: "#E7E9ED"
  destructive: "#D84C4C"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 24}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  composer: {fill: "surface-primary", border: "divider", radius: 18, position: "fixed above safe area"}
  user-message: {fill: "accent-secondary", radius: 14, text: "text-primary"}
  mode-chip: {fill: "surface-primary", radius: 10, selected: "cobalt tint and stroke"}
  send-control: {fill: "accent-primary", shape: "circle", icon: "white"}
  modal-sheet: {fill: "surface-primary", radiusTop: 28, backdrop: "dimmed"}
---

# Overview

DeepSeek reduces AI conversation to a white reading surface, black structured prose, pale-blue user messages, compact cobalt mode controls, and a bottom-fixed composer. Long answers and reasoning remain the visual protagonist; navigation, settings, history, attachment tools, and feedback are handled through thin separators, restrained panels, and native sheets rather than decorative dashboards.

# Non-negotiable visual invariants

- White fills the full conversation canvas and remains visually flatter than cards or grouped system pages.
- Long assistant answers use readable black prose with headings, lists, and generous line height rather than repeated bubbles.
- User prompts sit in pale-blue rounded blocks that remain clearly distinct from unboxed assistant content.
- Cobalt is reserved for the logo, primary buttons, selected mode chips, checks, toggles, send, and generation controls.
- A wide rounded composer remains anchored above the bottom safe area or keyboard, with active modes visibly attached to it.
- Top navigation is minimal: one compact leading control, centered title, and one small trailing action.
- Drawers and settings use white surfaces, subtle dividers, rounded modal geometry, and little decorative depth.
- Uploaded files and images remain content previews; the whale logo does not imply a broader illustration system.

# Color and surfaces

Pure white is the dominant canvas and primary surface. Very pale gray around `#F7F8FA` supports settings groups, disabled controls, and subtle fields; pale cobalt around `#EEF2FF` identifies user messages and selected-mode tint. Hairline gray separates composer edges, rows, and grouped content.

Cobalt around `#4D6BFE` is the only strong brand/action color. It fills primary auth actions, circular send or stop controls, selected chips, checks, and toggles. Black and near-black carry final responses and titles; gray distinguishes reasoning, metadata, placeholders, and disabled states. Red stays destructive. Decorative gradients or multiple competing accent colors would break the observed restraint.

# Typography

Use SF Pro Display and SF Pro Text, with SF Mono for code. Welcome headings are approximately 26-30 points bold, chat titles 16-17 points semibold, answer text 15-17 points with generous 22-25 point line height, controls 13-15 points, and metadata 11-13 points gray.

Hierarchy within answers comes from bold section labels, lists, spacing, and code formatting rather than containers. Reasoning uses muted gray without becoming illegibly small. Dynamic Type should expand paragraphs, bubbles, and rows, preserve code distinction, and keep composer actions clear of multiline input.

# Screen composition

Empty chat uses broad white space, a centered brand/welcome moment, and a composer near the bottom. Active conversation becomes a single scrolling column with roughly 16-point gutters, a compact top bar, pale-blue user message blocks, long unboxed answer content, inline response actions, and a floating new-conversation chip immediately above the composer.

Authentication uses centered logo and title, stacked rounded actions, fields, consent checkbox, and keyboard-aware spacing. A history drawer is a white side panel with date labels, concise chat rows, and a bottom account strip. Settings appears as a tall white rounded modal sheet over dimmed content with grouped rows, icons, chevrons, legal copy, and a close control.

Attachment states use a compact popover, native photo picker, file or image previews, and keyboard-aware composer. Share and feedback states use selection surfaces or rounded sheets with a full-width cobalt bottom action.

# Navigation appearance

There is no bottom tab bar. Chat top bars use a small hamburger, back, or close control on the left, compact centered title, and a small new-chat action on the right. The history drawer overlays part of the conversation without introducing an unrelated navigation style.

Settings, feedback, share, and attachment choices use white rounded sheets or native iOS overlays with dimmed context. Completion actions remain compact or bottom-anchored. Product destinations and history grouping must come from approved Research and Planning, not from this reference.

# Components

The composer is a wide white rounded rectangle with an 18-point radius, subtle gray border, multiline input, attachment control, compact mode chips, and a circular cobalt send button. Selected reasoning or search modes use blue text, tint, stroke, or check; generation replaces send with a cobalt stop control.

User messages use pale-blue fill and 14-point corners. Assistant responses remain unboxed and end with a compact row of neutral copy, regenerate, feedback, and share icons. File attachments use concise chips or thumbnail previews. A small step counter and transient toast may appear near result actions.

Primary authentication and sheet actions are full-width cobalt rounded buttons; disabled actions use pale gray. Settings rows use simple leading icons, labels, dividers, and chevrons. Native permission alerts, photo picker, feedback sheet, and logout alert retain platform geometry.

# Imagery and icons

The blue whale mark is the only recurring branded visual. Keep it compact and centered in splash or welcome contexts. Uploaded images, generated media, document previews, OCR thumbnails, and photo-picker content are functional conversation media and retain contained rounded crops. These media areas cannot be omitted when compositionally present; placeholders must preserve their footprint.

Icons are simple system-like lines in black, gray, or cobalt active states. No stable authored illustration system appears: onboarding uses the logo, while media and isolated decoration remain functional. Do not invent characters, scenes, or decorative page backgrounds.

# States

Observed states include sign-in and consent, empty home, populated conversation, pale-blue prompt, reasoning generation, search-enabled generation, active selected chips, stop-generation control, result actions, feedback sheet, share selection, attachment popover, native photo picker, file preview, permission alert, toast, open history drawer, settings modal, keyboard composer, disabled action, and logout alert. White canvas, cobalt state, structured prose, and fixed composer remain stable.

# iOS adaptation

Respect the status bar, keyboard, home indicator, drawer, and modal sheet safe areas. Conversation content scrolls above a composer that follows the keyboard. Long responses, settings groups, and history require internal scrolling; fixed buttons must stay above the bottom safe area without covering content.

Drawer, new-chat, chips, attachment, send, response actions, settings rows, and sheet controls require at least 44-point hit regions. VoiceOver should follow top context, conversation chronologically, response actions, attachments, active modes, then composer controls. On compact widths, move secondary response actions into overflow and let input grow vertically before shrinking targets. Preserve the light white system unless the approved product defines another appearance.

# Anti-generic checklist

- Do not fill the conversation with identical elevated cards or assistant bubbles.
- Do not replace cobalt with several decorative accents or apply it to every inline action.
- Do not hide selected reasoning or search modes inside the composer.
- Do not collapse long answers, lists, and code into cramped undifferentiated body text.
- Do not shrink the composer into a default text field or add an unstyled tab bar.
- Do not use default grouped `Form` sections for chat, history, or settings appearance.
- Do not omit user media and file previews when they carry conversation content.
- Do not infer an illustration system or copy the source product's history and settings architecture.

</design-context>
