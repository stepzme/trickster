<design-context>
---
version: 1
platform: iOS
name: setka-design-analysis
description: "A black-first social interface with dense charcoal content, wide rounded display type, white selection states, vivid violet-to-magenta actions, and luminous network imagery used at identity moments."
colors:
  canvas: "#000000"
  surface-primary: "#1C1C1E"
  surface-secondary: "#2A2A2C"
  surface-pressed: "#343437"
  accent-violet: "#6F00FF"
  accent-magenta: "#D500FF"
  accent-blue: "#315CFF"
  text-primary: "#F7F7F8"
  text-secondary: "#A1A1A6"
  text-inverse: "#111111"
  divider: "#303033"
  success: "#31C967"
  destructive: "#E93636"
typography:
  display: {fontFamily: "Wide Rounded Sans", fontSize: 32, fontWeight: 600, lineHeight: 34}
  title: {fontFamily: "Wide Rounded Sans", fontSize: 24, fontWeight: 600, lineHeight: 28}
  section: {fontFamily: "Wide Rounded Sans", fontSize: 19, fontWeight: 600, lineHeight: 23}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "Wide Rounded Sans", fontSize: 14, fontWeight: 600, lineHeight: 18}
  metadata: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 13}
spacing:
  screen-horizontal: 10
  section-gap: 20
  card-gap: 8
  card-padding: 12
  control-gap: 8
rounded:
  control: 10
  card: 14
  sheet: 24
  pill: 999
components:
  primary-action: {height: 54, treatment: "violet-magenta-gradient", foreground: "#FFFFFF", radius: 10}
  content-card: {fill: "#1C1C1E", radius: 14, padding: 12}
  selected-chip: {fill: "#F7F7F8", foreground: "#111111", radius: 8}
  input: {fill: "#1C1C1E", foreground: "#F7F7F8", radius: 8}
  bottom-navigation: {height: 62, fill: "#1C1C1E", selected: "#F7F7F8", unselected: "#8C8C91"}
---

# Overview

Setka is a compact, black-first social interface. Pure black supplies most of the screen area; charcoal cards, inputs, and navigation form a shallow secondary layer. White type and selection fills establish hierarchy, while saturated violet-to-magenta gradients are concentrated in commitment actions and identity moments. Everyday feeds are dense and media-led; onboarding and profile screens create more negative space for luminous network graphics and personal identity.

# Non-negotiable visual invariants

- Pure black is the dominant canvas. Charcoal surfaces group content without turning the product into a gray card stack.
- A wide, rounded geometric display face distinguishes headings, action labels, and short statements; long posts and metadata use a neutral, readable sans serif.
- Violet-to-magenta gradient is a scarce high-energy accent for primary actions and identity glow, not a universal interactive tint.
- Selected filters invert to a near-white fill with dark text; unselected filters remain charcoal with light text.
- Social content is compact: author, context, copy, media, response actions, and counts read as one continuous card.
- Persistent navigation is low-contrast and secondary to content. Its item count and destinations must follow the adapted product rather than reproduce the source architecture.
- Authored network imagery and empty-state drawings occupy deliberate space and must not be replaced by arbitrary system symbols.

# Color and surfaces

Black covers the shell, large empty regions, and most form backgrounds. Feed cards, community rows, chat bubbles, selection tiles, and app-owned sheets use closely spaced charcoal values. Separation comes from the change between black and charcoal, compact gaps, and occasional hairlines; shadows are not a meaningful layer.

Near-white carries primary text, conventional icons, and active navigation. Cool gray carries timestamps, role labels, subscriber counts, hints, and inactive navigation. A white surface is reserved for decisive selection or a high-contrast secondary action, never used as a general card background.

The brand accent moves from deep violet through electric purple to magenta. Large gradient actions may span that range horizontally. Smaller selection outlines can use violet or blue-violet. Green appears locally for completion or verified success, red for destructive actions, and blue for familiar platform-owned text selection or send affordances. User avatars, organization marks, emoji, and media are allowed to introduce independent color without recoloring the shell.

# Typography

Short interface headings use a broad, rounded geometric sans with open counters and an intentionally technological character. Titles are commonly lowercase, but case follows product copy rather than becoming a blanket transformation rule. Tight line spacing makes two- or three-line onboarding statements feel like a single graphic block.

Posts, comments, chat messages, descriptions, and metadata switch to a neutral system sans. Author names and content titles use medium or semibold weight; body copy stays regular; timestamps and counts are materially smaller and muted. Avoid applying the display face to paragraphs or dense lists.

Use a metrically similar wide rounded face when the original family is unavailable. Dynamic Type should expand body copy and actions first. Display headlines may step down within a bounded range, but they must retain their distinctive width and weight rather than collapsing into default bold SF Pro.

# Screen composition

The standard shell uses narrow horizontal gutters, a compact header, one primary scroll region, and—when the product needs persistent top-level destinations—a fixed bottom navigation region. Dense screens leave roughly 8 points between cards; onboarding, profile identity, and empty states use much larger vertical intervals.

## Onboarding and account setup

Introductory screens place a segmented progress indicator near the top, a short centered statement, and either a framed product preview or a network graphic in the middle. The primary action stays isolated near the lower safe area. Data-entry steps replace the central graphic with a small number of full-width fields or paired choice tiles while retaining the black canvas and compact header.

## Feed and content detail

The feed begins with a title and compact utilities, followed by a horizontally scrolling filter row. A dismissible guidance card may precede the first content card. Posts use edge-to-edge card media when available; text-only questions place the prompt in a darker nested panel. Content detail removes competing feed chrome, gives the post the full width, and anchors the active comment input above the navigation or keyboard.

## Search, communities, and messages

Search uses a compact field followed by a horizontal category selector. Results alternate between two-column relationship tiles, stacked community rows, and content cards. A true empty result gives most of the viewport to a single authored line drawing and one short statement.

Community browsing uses stacked rounded rows with a leading identity mark and a concise text block. Messages reduce decoration further: a sparse conversation list opens into a full-height thread with compact bubbles and a keyboard-attached composer.

## Profile and relationship detail

Profile identity is centered over a subtle violet glow, with a large circular portrait, prominent name, one or two actions, and a compact row of metrics. Career and activity content then resumes a denser card rhythm. Relationship detail can combine two people in one dark card with a luminous connection path, followed by a plain list of other mutual connections.

## Forms and completion

Creation and profile forms use full-width inputs plus paired choice tiles where options are mutually exclusive. The primary action remains near the lower safe area when the form is short. Completion appears as an app-owned dark sheet over the existing context, with a small green success mark and a limited choice of next actions.

# Navigation appearance

The observed top-level navigation is a flat charcoal bottom region with compact outline icons and very small labels. Active items become near-white; inactive items stay gray; unread state uses a small local badge. This is a visual treatment, not a requirement to copy five destinations. Use only the adapted product's true peers, and do not duplicate the same destination as both a persistent item and a pushed page.

Secondary pages use a minimal top row with a back chevron, a centered short title when needed, and an optional trailing action. Search and content utilities may sit in the header without a surrounding toolbar surface. App-owned action menus and confirmations rise from the bottom with large upper corners and a charcoal fill; system permission and rating dialogs remain native.

# Components

## Primary action

A full-width control approximately 54 points high with modest rounding, white wide-display text, and a left-to-right violet-to-magenta gradient. Pressed state darkens the gradient without shrinking the label. Disabled state becomes charcoal with low-contrast gray text.

## Filter chip

A compact rounded rectangle sized to its short label. Selected state uses near-white fill with dark text; unselected state uses charcoal fill with light text. The contrast change, not a checkmark, communicates selection.

## Social content card

A charcoal container with author identity at the top, content immediately below, optional full-width media, and a compact response row. Text-only prompts may sit inside a second charcoal level. Counts and metadata remain visually subordinate to the authored content.

## Community or result row

A leading circular mark or avatar, a title and two short metadata lines, then one local action or disclosure. Multiple rows form a list through repeated spacing rather than bright separators.

## Choice tile and input

Inputs use dark fills, subtle or absent borders, and light placeholder text. Choice tiles may share a two-column grid; the selected tile gains a thin blue-violet outline. Keyboard-focused compositions preserve the editor and formatting controls above the system keyboard.

## Bottom sheet

An app-owned charcoal panel with a short centered title, compact explanatory text, and one or two full-width actions. Menus use plain icon-label rows. Destructive actions are red and separated from ordinary destinations.

# Imagery and icons

Conventional actions—back, close, search, notifications, disclosure, sharing, attachments, and settings—use quiet line-style interface icons. Keep their stroke weight consistent and do not give every icon a colored backplate.

Product imagery has separate roles. Onboarding uses framed interface previews and glossy violet relationship nodes connected by thin luminous lines. Profile identity uses a restrained violet glow behind photography. Empty search uses a high-contrast monochrome line drawing. User-generated and publisher media may fill the content width and retain its own palette.

These authored graphics have reserved composition space. Omitting the network field, identity glow, or empty-state drawing would materially change the screen and cannot count as faithful design approval. Follow `illustrations.md` for generation and integration rules.

# States

Observed states include launch branding, native tracking permission, multi-step onboarding progress, empty and completed inputs, selected and unselected choice tiles, loading feed, selected feed filters, populated posts and questions, empty and populated search, draft-exit confirmation, published content, success completion, empty relationship state, unread chat, keyboard-active chat and composer, selected status, share menu, and destructive profile action.

Loading stays inside the existing black composition. Empty states reduce content instead of introducing a pale placeholder card. Selection uses inversion or a precise outline. Completion uses a local success indicator; failure or destructive choices keep the surrounding context available and do not recolor the whole screen.

# iOS adaptation

Build the shell with explicit black and charcoal surfaces rather than default `List`, `Form`, or `TabView` styling. Respect the top and bottom safe areas while allowing violet glows, media, and onboarding artwork to extend behind content where observed. Keep the persistent navigation clear of the home indicator and ensure the last scroll item remains reachable above it.

Use native keyboards, text selection, tracking permission, and rating prompts when the operating system owns the interaction. App-owned sheets, selection tiles, chips, and actions must retain the documented dark treatment. Keep interactive targets at least 44 points even when the visible icon or label is compact.

VoiceOver order should follow page title, contextual controls, primary content, actions, then navigation. Combine author identity with its role and time metadata; expose reaction and count controls with explicit labels. Let feed copy and form guidance wrap under Dynamic Type, switch paired tiles to one column when necessary, and preserve the display face only where it remains legible.

# Anti-generic checklist

- Do not replace the pure-black shell with a generic dark-gray theme.
- Do not use purple for every link, icon, and selected state; reserve the gradient for emphasis.
- Do not turn dense posts, community rows, and forms into identical elevated cards.
- Do not apply the display face to long posts, chats, or metadata.
- Do not use a white card as the default container; white is a scarce selection and contrast state.
- Do not copy the source's destination count or professional-network entities when the adapted product has a different architecture.
- Do not omit authored network or empty-state imagery, and do not replace it with unrelated SF Symbols.
</design-context>
