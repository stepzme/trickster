<design-context>
---
version: 1
platform: iOS
name: Le-Chat-design-analysis
description: "A sparse charcoal AI workspace centered on a persistent bottom composer, restrained off-white conversation type, orange creation controls, cyan research cues, drawer-and-sheet navigation, large intentional negative space, and a recurring crisp pixel-art mascot."
colors:
  canvas: "#211F24"
  surface-primary: "#2B292E"
  surface-secondary: "#37343A"
  accent-primary: "#FF4A1C"
  accent-secondary: "#46BDD7"
  text-primary: "#F6F4F7"
  text-secondary: "#AAA5AD"
  divider: "#464249"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 16
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#FF4A1C", text: "#FFFFFF", height: 50, radius: 12}
  composer: {fill: "#2B292E", text: "#F6F4F7", radius: 16, padding: 12}
  message-surface: {fill: "#37343A", text: "#F6F4F7", radius: 14, padding: 12}
  navigation: {fill: "#211F24", selected: "#FF4A1C", unselected: "#AAA5AD"}
---

# Overview

Le Chat is a sparse, composer-first AI workspace on a warm charcoal field rather than pure black. Off-white response text forms the main content mass, while compact dark panels hold prompts, tools, projects, settings, and modal tasks. Orange identifies the assistant and the most important creation actions; cyan marks research or source-oriented states. Large empty regions are intentional, often framing a crisp pixel mascot above the bottom composer. The interface must remain calm and tool-like rather than becoming a dashboard of equal cards.

# Non-negotiable visual invariants

- Keep the default canvas warm charcoal with small surface steps between the background, composer, messages, drawer, and modal panels.
- Anchor conversational screens with a broad rounded composer at the bottom, including compact attachment, mode, voice, and send controls.
- Reserve bright orange for the assistant identity, primary actions, microphone or send state, checks, settings accents, and upgrade emphasis.
- Use cyan sparingly for research, sources, and advanced informational states rather than as a second general-purpose action color.
- Preserve large vertical negative space on welcome, empty, loading, and lightweight project surfaces.
- Keep assistant answers mostly borderless as readable text blocks with a compact action row; do not wrap every paragraph in a card.
- Use drawer, sheet, and top-control navigation with no persistent bottom tab bar.
- Keep the pixel mascot visibly crisp and recurring across splash, onboarding, empty chat, assistant avatar, incognito, and upgrade contexts.

# Color and surfaces

The default canvas is a warm charcoal (`#211F24`), with primary panels around `#2B292E` and stronger selected or input surfaces around `#37343A`. These small tonal steps define depth without heavy shadows. Off-white is used for primary conversation text; muted gray handles placeholders, timestamps, disclaimers, and inactive controls. Orange-red (`#FF4A1C`) identifies actions and brand moments. Cyan (`#46BDD7`) is limited to research, sources, or advanced-state emphasis. Destructive controls use a compact red.

Most screens remain dark and low-saturation. The upgrade composition is the deliberate exception: an orange gradient becomes the full-screen field while a dark plan card remains the focal surface. A light appearance is explicitly offered and uses white or warm off-white surfaces with dark type, but the same component hierarchy must remain intact. Avoid default iOS blue, hard black cards, multicolor assistant messages, and elevated shadows that overpower the subtle surface steps.

# Typography

Typography is restrained because conversation content carries the screen. Onboarding and upgrade headings use 26–32 point bold SF Pro Display; screen and modal titles are about 20–24 points. Prompts, responses, project rows, and settings use 14–16 point SF Pro Text with comfortable 21–23 point line height. Utilities, source labels, disclaimers, and action captions sit around 10–12 points. Text is primarily left aligned; centered type is reserved for welcome, empty, loading, and upgrade compositions.

Use SF Pro for functional text and keep pixel lettering inside generated illustration assets only. Preserve readable paragraph measure and spacing under Dynamic Type. Let answers, settings values, source rows, and composer text wrap and expand vertically. Do not introduce oversized motivational headings or decorative copy: visible text should be a prompt, response, mode, source, state, setting, value, or action that is not already clear from context.

# Screen composition

Most conversational screens divide into a compact top control band, a flexible central content region, and a bottom composer that occupies roughly 12–18% of the viewport before the keyboard. With little or no conversation, the center remains largely empty and the mascot sits near the visual center. With content, one readable column fills vertically and scrolls behind or above the composer. Horizontal insets are about 16 points, with 10–14 points inside dark panels.

Observed visual archetypes include:

- **Welcome or empty workspace:** sparse top controls, centered pixel mascot with generous surrounding space, and the composer anchored near the bottom.
- **Conversation:** compact header, vertically scrolling prompt and borderless response blocks, small assistant avatar, source or progress treatment when present, response action row, then the persistent composer.
- **Research or tool state:** a cyan-accented mode chip, compact progress and source cards in the content column, and otherwise unchanged charcoal composition.
- **Drawer and search:** a dark panel slides over most of the width from the left, leaving a dimmed strip of the underlying screen; search and history rows stack in one compact column.
- **Projects or lightweight management:** large empty field, one or two restrained rows or cards, and a focused creation modal when needed.
- **Settings or account sheet:** tall rounded dark sheet with grouped rows, quiet section labels, toggles or checks, and compact close/back controls.
- **Upgrade:** saturated orange gradient fills the viewport, brand mark and concise plan text sit above or around one dark pricing card, followed by a clear orange or light purchase action.

Keep chat and settings vertical. Do not introduce multi-column layouts on iPhone, dense dashboard grids, or decorative cards solely to occupy negative space.

# Navigation appearance

There is no bottom tab bar. Primary navigation is expressed through small top controls, a large left-side drawer, ordinary back arrows, and rounded modal sheets. The top-left control may be a compact profile-initial circle; a centered upgrade pill can appear in the header; contextual controls stay at the right. These are visual treatments only and do not define reusable product routes.

The side drawer uses the same charcoal canvas, covers most of the width, and leaves a narrow dimmed edge of the current screen. Sheets have about 26-point top corners, a dark fill, a close or back affordance, and grouped rows. Selected theme or settings choices use an orange check. Mode selection appears as a dark popover or sheet with orange/cyan emphasis. Avoid adding a tab bar, light navigation bar, blue system back button, or oversized branded close control.

# Components

- **Composer:** broad charcoal rounded panel with about 12-point internal padding, multiline off-white input, gray placeholder, and a compact lower tool row. Attachment and mode actions remain quiet; microphone or send becomes orange when actionable. Keyboard state expands the composer without replacing its visual identity.
- **Primary action:** about 50 points high, orange fill, 12-point radius, centered semibold white label, and a deeper orange pressed state. Use for focused confirmation or upgrade rather than every inline action.
- **User prompt surface:** compact darker charcoal bubble or block with 12-point padding and 14-point radius, sized to content rather than filling the width unnecessarily.
- **Assistant response:** largely borderless body text preceded by the small pixel avatar when needed, followed by a low-contrast icon row for feedback, copy, regenerate, or more.
- **Mode chip:** compact dark rounded control with concise label and cyan research emphasis or orange active mark; it stays subordinate to the input.
- **Source or progress card:** small dark rounded surface with compact title, metadata, and cyan informational cue. Do not turn the entire response into nested cards.
- **Drawer row:** full-width quiet row with white primary label, gray metadata where needed, subtle selected fill, and no heavy separator.
- **Settings row:** dark grouped surface with concise label, optional secondary value, and an orange check/toggle or neutral chevron.
- **Toast:** small dark floating banner with concise feedback, muted shadow, and no unrelated illustration.

# Imagery and icons

The pixel mascot is compositionally important on splash, onboarding, welcome, assistant identity, incognito, and upgrade surfaces. It must not be omitted while waiting for final assets or substituted with an SF Symbol, emoji, smooth vector logo, or code-drawn blocks. Follow `illustrations.md`: generate required pixel artwork with the available image-generation model, obtain approval, and integrate the approved image asset.

Generated user or assistant output, such as a realistic image or document preview, is content rather than part of the brand illustration language. Show it in a rounded preview with an appropriate crop without pixelating it. Functional icons are compact, monochrome, and visually consistent; active send, microphone, check, or settings accents become orange, while research/source marks may become cyan.

# States

Observed states include splash and welcome, loading primary action, empty composer with keyboard, typed first prompt, streaming with a stop control, completed answer with action row and feedback toast, quick-answer notice, mode picker, research progress and sources, document or browser preview, generated image result, empty file library and attached file, drawer search with results and reached-end state, monthly/yearly upgrade and system payment confirmation, empty and created project states, settings, light/dark/system theme selection, and data/account toggles.

The charcoal hierarchy, bottom composer, restrained type, orange identity/action color, and large negative space stay stable. Progress remains inline rather than becoming a blocking full-screen loader. Light appearance changes surface and text contrast but not composition. Do not invent branded error, permission, or success illustration variants beyond the observed evidence.

# iOS adaptation

Extend the chosen theme through the status and home-indicator safe areas. Use one vertical scroll container for chat content with a keyboard-safe bottom inset matching the composer height. Keep the composer attached above the keyboard and scroll the active prompt or latest response into view without covering content. Drawers should respect the status region and preserve a visible dimmed strip; settings and mode surfaces can use native sheet behavior with custom charcoal fill, radius, and selection colors.

Give every compact icon a minimum 44-point hit target even when its visible glyph is small. VoiceOver order should follow header, conversation content, response actions, and composer tools; group each response meaningfully without hiding individual actions. Dynamic Type should widen or wrap tool labels, grow prompts and settings rows, and let the composer expand. On compact widths, move lower-priority composer tools into one menu before shrinking the text area. Pixel art should scale with crisp nearest-neighbor treatment where practical. Both dark and light appearances are observed; preserve semantic surface hierarchy and orange/cyan contrast in each.

# Anti-generic checklist

- Do not add a bottom tab bar or convert drawer-and-sheet navigation into a generic five-tab structure.
- Do not replace the warm charcoal surface steps with pure black, blue-gray, or a stack of identical floating cards.
- Do not wrap every assistant paragraph, source, and action row in nested cards.
- Do not omit the bottom composer or separate its tools into a detached toolbar.
- Do not use default blue tint, light native text fields, generic `Form` styling, or arbitrary mixed SF Symbols.
- Do not fill intentional empty space with tips, slogans, suggested-copy poetry, or decorative panels.
- Do not recreate the pixel mascot with SwiftUI shapes, emoji, a smooth vector mark, or a generic chatbot icon.
- Do not apply pixel-art styling to generated images, documents, functional icons, or conversation typography.

</design-context>
