<design-context>
---
version: 1
platform: iOS
name: Alice-AI-assistant-design-analysis
description: "A sparse near-white assistant interface where black reading text, compact icon-led chrome, a fixed soft-gray composer, and concentrated violet-to-blue AI accents frame generated media without turning the conversation into a generic card stack."
colors:
  canvas: "#FCFAFD"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F0F3"
  accent-primary: "#7A4CF5"
  accent-secondary: "#30BCEB"
  text-primary: "#19171D"
  text-secondary: "#77747D"
  divider: "#E6E3E8"
  destructive: "#E34D58"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  composer: {fill: "#F2F0F3", radius: 20, inset: 12, action: "violet circular control"}
  mode-chip: {fill: "#EEE8FF", text: "#7A4CF5", radius: 999}
  media-card: {fill: "#FFFFFF", radius: 16, crop: "contained or aspect-fit until preview"}
  navigation: {fill: "visually open", icons: "compact black line icons", selected: "violet accent"}
---

# Overview

The dominant impression is a quiet reading and composing surface rather than a dashboard. Most screens are almost entirely near-white, with compact black controls at the top and a soft rounded composer anchored at the bottom. Violet is concentrated in the AI action, selected modes, and subscription emphasis; it does not wash every surface. Uploaded and generated media become the main visual mass only when present. The separate entry treatment uses a saturated blue-violet gradient, oversized block typography, and a glowing dotted Alice mark.

# Non-negotiable visual invariants

- The ordinary assistant canvas remains spacious, near-white, and largely free of card containers.
- The rounded composer stays visually anchored at the bottom and carries the densest cluster of controls.
- Violet is the primary AI and selected-state signal; blue appears mainly as a supporting gradient color.
- The top bar is compact and icon-led, with no tall generic navigation title block.
- Secondary actions appear as small pills, popovers, or bottom sheets rather than full-width card sections.
- Generated or uploaded media appears inline as a substantial rounded content card, not as background decoration.
- System surfaces such as the keyboard, alerts, file picker, sheets, and Apple Pay remain recognizably native.
- Account and subscription screens may be denser, but retain soft radii, restrained dividers, and the same black-on-light hierarchy.

# Color and surfaces

The canvas and primary surface are subtly different whites, producing an airy field without relying on shadows. Soft gray is reserved for the composer, quiet controls, file pills, and inactive states. Violet is used for the send action, selected generation modes, progress emphasis, and subscription controls; a cyan-blue partner appears inside the branded gradient and glow. Primary text is nearly black, while helper copy and metadata use a middle gray. Dividers are pale and sparse. Destructive actions use muted red rather than the brand color.

The entry and subscription archetypes can become large blue-violet color fields, but the conversation archetype must not. Default iOS blue tint, heavy gray grouped backgrounds, or repeated elevated white cards would erase the observed distinction between open canvas and controls.

# Typography

Typography is system-sans, left aligned in reading contexts, with strong scale contrast reserved for entry, empty-state, and subscription statements. Conversation text is regular-weight and comfortable for multiline reading; section and action labels are compact semibold. Metadata, disclaimers, and processing notes are visibly quieter. Large display text may be tightly set, while ordinary content uses more generous leading.

Use SF Pro Display and SF Pro Text as iOS-safe equivalents. Preserve hierarchy under Dynamic Type by allowing titles and responses to wrap, keeping captions subordinate, and moving compact controls to another row before shrinking their labels. Generated-output numerals and progress indicators should use stable-width numerals when alignment matters.

# Screen composition

The repeated composition is a compact safe-area top bar, one open scrolling content column, and a bottom composer separated from the home indicator by safe-area spacing. Horizontal insets are usually 12–16 points; larger account and subscription cards use roughly 16–20 points internally. Empty assistant screens center a short prompt or branded mark in the otherwise open middle area, leaving the composer as the strongest bottom anchor.

Observed archetypes include: an empty assistant canvas with centered prompt suggestions; a populated conversation where text and media flow directly on the canvas; generation surfaces with compact segmented controls, progress, and rounded result cards; attachment and feedback choices presented in popovers or sheets; account/settings lists built from soft white rows; and a branded entry or subscription surface in which gradient, display type, and plan cards replace the quiet conversation field. Full-screen media preview moves content onto a dark overlay while retaining sparse controls.

# Navigation appearance

Navigation bars are visually light and compact, using small black line controls with generous tap areas rather than a prominent filled bar. Back, close, history, and creation controls use consistent optical weight. Popovers are small rounded white surfaces; modal choices and detailed controls use rounded-corner bottom sheets with a visible separation from the underlying canvas. Selected modes and segments use violet text or a soft-violet pill. The ordinary assistant surface has no persistent generic tab bar.

# Components

The composer is a soft-gray or white rounded container with multiline text, compact attachment and mode controls, and a violet circular primary action. Its controls keep at least 44-point hit areas even when their visible glyphs are small. Prompt and mode chips are short pills with quiet fills and concise labels.

Generated-media cards preserve the asset's visible aspect ratio, use medium radii, and may sit in a compact grid when multiple alternatives are shown. File attachments use small rounded pills with filename and state. Feedback choices are compact selectable chips or rows, not a survey-shaped card stack. Settings use full-width white rows or grouped cards with subtle separators, trailing values, and native toggles. Subscription and payment surfaces use stronger violet emphasis, large rounded plan cards, and a clearly dominant action while keeping secondary copy gray.

# Imagery and icons

Imagery is content-driven: uploaded photos, generated images, avatars, and document previews enter the conversation as rounded cards and can become the dominant middle-region mass. Preserve their aspect ratio, visible crop, and sufficient inspection size; do not reduce them to thumbnails or use them decoratively behind text. The branded Alice mark is a compact luminous or dotted form on gradient entry surfaces, not a general-purpose illustration system.

Icons are simple monochrome line symbols at compact visual size, with violet reserved for the active AI action. Do not invent decorative characters or replace content imagery with symbols. The generated outputs visible in the sampled screens are user content, not reusable authored illustration assets.

# States

Observed states include empty and populated conversation, attached file or photo, generation in progress, generated-result variants, feedback selected, media preview, authentication error, subscription selection, payment, and account/settings views. Loading uses a restrained spinner or inline progress treatment. Errors preserve the same light surfaces and introduce concise red messaging. Selection consistently shifts the relevant pill, segment, or action to violet without recoloring the entire screen.

# iOS adaptation

Keep the top controls and composer inside current iPhone safe areas, with the conversation in a scroll container that follows the keyboard and keeps the latest content visible. Use native presentation behavior for file picking, alerts, Apple Pay, and bottom sheets while styling their surrounding controls to the recorded palette and radii. Preserve 44-point targets, logical VoiceOver order from top bar through content to composer, and descriptive labels for icon-only actions.

On compact widths, let response text and chips wrap, collapse multi-column media to one column before cropping, and keep the primary composer action reachable. Dynamic Type may increase vertical density but must not flatten title, body, and metadata into one size. The sampled visual system is light; if a dark appearance is required without direct reference evidence, preserve semantic contrast and violet priority rather than simply inverting every surface.

# Anti-generic checklist

- Do not wrap every assistant turn in a colored chat bubble or white card.
- Do not replace the compact top controls with a tall default navigation title.
- Do not apply default blue tint to selected modes or the primary AI action.
- Do not use an unstyled `Form`, generic grouped list, or uniform card stack for the conversation.
- Do not omit the fixed composer or simplify it to a plain `TextField` plus text button.
- Do not crop generated and uploaded media into arbitrary square thumbnails.
- Do not use arbitrary colorful SF Symbols or decorative emoji in place of the restrained icon system.
- Do not spread the entry gradient across ordinary reading screens.

</design-context>
