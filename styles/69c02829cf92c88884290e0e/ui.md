<design-context>
---
version: 1
platform: iOS
name: Manus-AI-design-analysis
description: "A quiet editorial AI workspace built on a warm pale-gray field, sparse serif prompts, compact sans-serif task logs, a large white bottom composer, minimal black and blue controls, native iOS sheets, and generated artifacts that supply nearly all visual color."
colors:
  canvas: "#F4F2F3"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EAE7EA"
  accent-primary: "#171719"
  accent-secondary: "#1787E8"
  text-primary: "#1B1A1C"
  text-secondary: "#77747A"
  divider: "#DFDCE1"
  destructive: "#C64D55"
typography:
  hero: {fontFamily: "Georgia", fontSize: 36, fontWeight: 400, lineHeight: 42}
  title: {fontFamily: "Georgia", fontSize: 28, fontWeight: 400, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 8
rounded:
  control: 12
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "#FFFFFF", cornerRadius: 999, minHeight: 44}
  composer: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 18, padding: 12}
  task-step: {fill: "{colors.surface-secondary}", text: "{colors.text-primary}", cornerRadius: 10, padding: 12}
  artifact-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 14, padding: 12}
---

# Overview

Manus is defined by restraint rather than decoration. Before a task begins, a warm pale-gray canvas and large areas of empty space frame one editorial serif prompt and a substantial white composer at the bottom. As work progresses, the middle fills with compact chronological steps, status pills, tool output, and artifact previews while the composer remains the stable lower anchor. Generated websites, slides, images, and documents introduce their own colors inside clearly bounded content surfaces; the surrounding app chrome stays neutral.

# Non-negotiable visual invariants

- The pre-task screen preserves a large quiet central void; it is not filled with cards, marketing copy, or decoration.
- A high-contrast serif is reserved for the main prompt and occasional major headings, while dense controls, logs, and metadata use a compact system sans.
- The white rounded composer is the dominant bottom-owned control and remains visually separate from the pale-gray canvas.
- Black controls communicate primary submission, publication, or selected state; blue is limited to guidance, active work, credits, links, and focused selection.
- Task execution grows as a chronological vertical transcript of compact steps and artifacts rather than a collection of oversized chat bubbles.
- Generated artifacts keep their own palettes and proportions inside bounded previews; their colors do not leak into the global app chrome.
- Native iOS alerts, document pickers, keyboards, and sheets remain visually native around the restrained workspace.

# Color and surfaces

The main field is a warm, nearly white gray extending through the safe areas. White isolates the composer, floating suggestion cards, task cards, and artifact previews. Soft secondary gray differentiates nested steps and passive controls; thin cool-gray dividers and borders define structure without heavy shadows.

Near-black carries headings, primary text, send/stop controls, publishing actions, and selected filters. Blue appears in small, functional moments such as credits, upgrade links, active progress, focused tools, and selected theme outlines. Green is confined to completion. Red is destructive. Generated content may be colorful, but it remains content rather than a source of global UI tokens. Default system blue used everywhere would destroy the deliberately neutral hierarchy.

# Typography

The principal prompt uses a calm editorial serif with regular weight and generous line spacing. Georgia is a suitable iOS-safe substitute. Everything operational uses SF Pro Text: compact task titles, progress labels, settings rows, timestamps, credit values, and transcript text. The contrast between a 28-36 point serif prompt and 12-15 point sans-serif interface copy is essential.

Task output remains readable but dense, with semibold labels marking step and artifact boundaries. Numeric credits, durations, and small state labels use tabular figures where helpful. Under Dynamic Type, transcript rows and settings cells grow vertically; metadata wraps or moves below before the prompt, task title, or composer action loses prominence.

# Screen composition

The empty or initial workspace places minimal controls near the top, a centered serif prompt in the upper-middle, and a large composer immediately above the keyboard or bottom safe area. The central area may remain mostly blank. Suggestion cards form a compact horizontal rail near the composer rather than occupying the whole viewport.

Execution screens retain a light top bar and bottom composer while the center becomes a vertical scroll of user input, assistant text, nested gray task steps, timing, checks, and artifact cards. Spacing becomes tighter as information accumulates. Result and artifact screens may transition into a webview-like composition with a compact top bar and a full-page preview.

History and settings use compact lists with small icons, excerpts, times, values, and chevrons. Tool/computer screens place a large preview high in the viewport, a short status/progress area below, and controls near the bottom. Profile and notification content appears in tall rounded sheets over a dark scrim; the underlying screen remains visible at the edges.

# Navigation appearance

Top chrome is compact and transparent to the current canvas: small back or close controls, a short task or model title, a credit pill, and occasional share or more icons. It does not resemble a large colored navigation bar. History uses a centered wordmark treatment with small account and utility controls at the sides and compact filters below.

There is no dominant conventional tab bar in the observed core workspace. Local mode changes use compact pills, icon tabs, or sheets. Bottom sheets use a dark scrim, white rounded-top surface, grabber, and plain icon rows. Artifact previews use a webview-like back/title/share bar. Selected controls are black or blue rather than default iOS-blue throughout.

# Components

The composer is a white rounded dock with multiline text, optional attachment chips, plus/tool controls, microphone, and a black circular send or stop action. It grows with content but keeps a compact internal rhythm. Suggestion cards pair a small thumbnail or icon with a short title and explanation in a horizontally scrolling row.

Task steps are light-gray rounded rows with compact glyphs, labels, checks, nested actions, and elapsed-time details. They appear chronologically inside the transcript. Artifact cards use a white surface, small colored type icon, title and status, then compact black or neutral actions for preview, publish, dashboard, or settings.

Credit controls are small pills combining a sparkle mark, numeric balance, and blue action text. Settings and history rows use thin dividers or subtle cards, left icons, short primary text, muted secondary text, and a right value or chevron. Buttons remain at least 44 points tappable even when their visible circle or label is visually smaller.

# Imagery and icons

The stable chrome uses restrained monochrome line icons and a black hand-like brand mark. Generated websites, slides, posters, images, document thumbnails, and campaign videos are content-specific and may vary widely; they are not an illustration system and must not be used to infer a single decorative style.

Artifact previews preserve document, website, slide, or image proportions inside rounded frames or full-page viewers. When a sampled screen depends on a preview, retain its placement, aspect, and approximate color mass with a temporary raster asset until the real output exists. Do not replace artifact imagery with decorative SwiftUI shapes or unrelated symbols.

# States

Loading appears as a small centered HUD, a spinner on an otherwise blank artifact surface, a blue thinking indicator, or compact in-transcript progress rows. Completion uses a green check and keeps the finished artifact adjacent to the status. Selected themes, filters, and publish controls use a black or blue treatment without changing the underlying neutral surfaces.

The empty search and home states remain intentionally sparse. Sheets and native pickers dim or cover the workspace while preserving standard iOS appearance. Observed access-related UI includes native sign-in and document/photo surfaces; it is not custom-redrawn. No explicit hard error screen was observed, so error treatment should preserve the same neutral canvas and component geometry rather than invent a decorative state.

# iOS adaptation

Extend the warm-gray canvas through both safe areas. Keep the composer above the keyboard or home indicator and add scroll inset equal to its occupied height. Execution transcripts, history, profile, settings, and artifacts require vertical scrolling; initial empty states should not gain filler merely because a taller device provides more space.

Maintain 44-point targets for composer tools, send/stop, task rows, filters, artifact actions, and sheet choices. On compact widths, collapse secondary tool labels before shrinking icons or primary actions, and move artifact buttons beneath the preview. Preserve VoiceOver order from top context through transcript and artifact to the composer. Let Dynamic Type grow rows and composer height. The observed system is light; do not invent a dark workspace without a separately defined appearance.

# Anti-generic checklist

- Do not fill the pre-task empty space with welcome prose, metric cards, or decorative imagery.
- Do not replace the serif prompt with the same system-sans style used by controls.
- Do not turn every transcript item into an equally prominent white chat bubble.
- Do not make blue the dominant canvas, button, or card color.
- Do not use an unstyled text editor, form, or generic message composer.
- Do not flatten task steps, elapsed time, and artifact state into one undifferentiated response block.
- Do not replace generated artifact previews with arbitrary SF Symbols or omit their visual mass.
- Do not add a generic persistent tab bar where the observed composition uses task-local top chrome and sheets.

</design-context>
