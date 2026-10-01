<design-context>
---
version: 1
platform: iOS
name: memo-design-analysis
description: "A black-first learning interface built around fluorescent green actions, full-bleed meme media, compact dark controls, and a recurring retro-screen mascot."
colors:
  canvas: "#000000"
  surface-primary: "#171717"
  surface-secondary: "#242424"
  accent-primary: "#53F576"
  accent-bright: "#B8FF3D"
  text-primary: "#FFFFFF"
  text-secondary: "#A6A6AA"
  text-tertiary: "#707075"
  divider: "#303033"
  success: "#53F576"
  danger: "#FF5757"
  attention: "#FFB895"
  overlay: "#000000"
typography:
  display: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 32}
  title: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 25}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 22}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 20}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 20
  card-gap: 4
  control-gap: 8
  card-padding: 16
rounded:
  control: 16
  card: 18
  media: 20
  pill: 999
components:
  primary-action: {minHeight: 56, fill: "#53F576", foreground: "#0A0A0A", radius: 28}
  answer-option: {minHeight: 68, fill: "#171717", foreground: "#FFFFFF", radius: 16}
  dark-card: {fill: "#171717", foreground: "#FFFFFF", radius: 18, padding: 16}
  media-control: {minSize: 48, fill: "#171717", foreground: "#FFFFFF", radius: 24}
  progress-track: {height: 5, fill: "#242424", active: "#53F576", radius: 3}
---

# Overview

memo is visually split between a controlled black interface layer and intentionally heterogeneous lesson media. Fluorescent green identifies the brand, active progress, selected answers, and commitment actions. Full-bleed video or meme imagery supplies most of the changing color, while navigation, exercises, subscription screens, and chat-like onboarding remain dark and restrained. A small retro-screen character anchors branded moments.

# Non-negotiable visual invariants

- Black is the dominant interface mass; dark charcoal modules separate from it without visible shadow.
- Fluorescent green is concentrated in the wordmark, progress, selection, and primary actions rather than washing every surface.
- Learning media is allowed to dominate the viewport and retain its original visual character; the surrounding controls stay coherent and neutral.
- The retro-screen mascot is a product graphic with a stable silhouette, face, and green field. It is not replaced by a system icon.
- Exercise screens reduce the interface to one prompt, a small set of choices, progress, and one next action.
- Explore screens form a tight image-led mosaic; they are not converted into a spaced list of generic cards.

# Color and surfaces

The operational canvas is true or near black. Cards, answer choices, chat bubbles, and media controls step up only to deep charcoal. White carries primary copy; gray carries metadata, inactive answers, legal text, and disabled actions. Fluorescent green is the only persistent interaction accent and may shift toward yellow-green in promotional emphasis.

Content media is exempt from the restrained interface palette. Observed cards and memes include yellow, cobalt, pink, cyan, white, and photographic color. Preserve those large color masses as content, not as a global token set. Light surfaces appear when the content itself is a white meme panel or an external chat view; they do not redefine the default theme.

Selection is shown through a green outline, green fill, or green progress segment. Correct feedback pairs green with explicit text or a check. Incorrect feedback uses coral red for the rejected choice, message, and continuation while preserving the correct answer in green. A temporarily disabled listening mode uses a muted peach notice and action. Idle unavailable states recede through lower-contrast text and outlines.

# Typography

The interface uses a compact system sans serif. Page and exercise titles are medium to bold, while chat, labels, and captions use regular or semibold weights. Large marketing statements use short, tightly wrapped lines; ordinary lessons do not inherit the marketing scale.

Media captions can be authored into the source or overlaid near the media edge. They require high contrast against changing imagery, using an outline, shadow, or opaque backing only when needed. Exercise choices use comfortably readable labels and keep emphasis on the selected or correct response. Small counters, creator names, speed labels, and legal copy remain secondary.

Use SF Pro Display and SF Pro Text as the direct iOS implementation. Dynamic Type may reflow prompts, choices, and chat bubbles; it must not shrink text to preserve a fixed number of lines.

# Screen composition

Common screens use minimal horizontal inset and large uninterrupted black areas. The source alternates among four reusable compositions:

## Branded introduction

A mascot or brand mark occupies a large isolated region. Conversation bubbles, a question, or a small set of choices follow in one vertical sequence. The surrounding negative space keeps attention on the current exchange.

## Media viewer

One video or meme occupies most of the upper and middle viewport. A small mode switch and count sit over or immediately above the media. Reaction, caption, sound, and sharing controls form one compact row adjacent to the content. When transcript or answer text is present, it continues below without boxing every line.

## Explore collection

A featured media tile spans the available width, followed by a dense two-column grid. Tiles use strong content color, short titles, and image crops that reach the edges. Gaps are narrow and consistent; card height may vary by content role but the grid remains visually locked.

## Exercise

A segmented progress indicator and dismiss control establish the task. One prompt occupies the upper portion, answer choices occupy the middle, and result plus continuation appear only after evaluation. Listening tasks reserve a large central target for playback; matching tasks use an even two-column matrix.

Subscription and feedback screens use the same black canvas but return to a single reading column with one dominant action and a small number of grouped modules.

# Navigation appearance

Persistent navigation is visually subordinate to lesson media: a black continuation of the canvas, simple white or gray line icons, and no raised container. The active destination becomes white while inactive destinations remain gray. Use only the destinations required by the adapted product; do not copy memo's destination count or labels as a visual requirement.

Focused lessons use a close control and progress instead of persistent navigation. Detail screens use a compact back control and short title. The content mode switch is a lightweight text control, not a second full navigation bar.

# Components

## Primary action

A wide fluorescent-green pill with dark centered text. It appears for continuation, trial start, adding words, or another real commitment. Disabled actions use an outline or dark neutral treatment with subdued text; they do not remain green at reduced opacity.

## Answer option

A large charcoal tile with centered text. Options may appear as a vertical list, a two-up choice, or a two-column matching matrix. Selection gains a green outline; correct evaluation adds explicit positive feedback. Keep the option geometry stable between idle and evaluated states.

## Media controls

Compact dark circular or pill controls sit next to the media and use familiar symbols for captions, sound, reaction, and sharing. Counts are attached only when meaningful. Controls must remain legible over both pale and saturated content.

## Explore tile

An image-led rounded rectangle with one short title and no decorative metadata. The crop, field color, and title placement are chosen together. A tile may use photography, 3D imagery, meme art, or the mascot while preserving the shared grid geometry.

## Chat bubble

Onboarding uses short charcoal bubbles with white copy, a small mascot avatar, and a low-contrast typing state. Language or preference choices become larger dark rows with a concrete leading mark. Do not use chat styling for ordinary settings or content lists.

## Subscription option

Plans are dark outlined rows with price and period aligned as one comparison. The selected or recommended plan uses green emphasis and may carry a small label. Legal and cancellation copy remains separated from the main decision.

# Imagery and icons

There are two distinct image roles. The branded role uses the same retro-screen mascot: a square black face inside a rounded off-white shell, thin limbs, simple white expressions, and a fluorescent-green environment. The learning role uses licensed or authored meme/video material whose style can vary dramatically from cartoons and 3D objects to screenshots, photography, and internet collage.

Preserve this distinction. Conventional controls may use coherent system-style icons. The mascot, lesson media, and collection art are image assets and must not be reconstructed from unrelated SF Symbols. Media needs a stable large footprint and an intentional crop even while placeholder content is used.

# States

Observed states include splash, conversational onboarding, a system tracking prompt, language choice, paywall and plan selection, media with and without transcript, collection browsing, listening, translation and matching exercises, correct-answer feedback, wrong-answer recovery, listening temporarily disabled, streak celebration, promotional offer, feedback invitation, and support chat.

Loading or typing feedback stays local to the content being prepared. A selected answer changes before evaluation; a correct result preserves the chosen option and adds a clear confirmation plus continuation. A dismissed lesson or full-screen promotion returns to the prior context. System permission UI remains native and visually distinct from app-owned surfaces.

# iOS adaptation

Keep primary actions and conventional controls at least 44 points and preserve the bottom safe area on immersive black screens. Full-bleed media may extend toward safe-area edges, but captions and controls must remain readable and reachable. Use `ScrollView` only where content genuinely exceeds the viewport; a single exercise should not drift into a generic scrolling form.

VoiceOver order should follow prompt, media or playback, answer choices, feedback, then continuation. Expose paired vocabulary as coherent pairs and announce selected/correct state. Respect Reduce Motion for automatic mascot or media movement while retaining the static composition. With larger text, stack choice controls or let transcript content scroll rather than reducing font size or covering the media action row.

# Anti-generic checklist

- Do not replace the black canvas and charcoal hierarchy with white `Form` sections.
- Do not spread fluorescent green across every card, label, and icon.
- Do not reduce the mascot to a generic robot symbol or redraw it from SwiftUI primitives.
- Do not crop lesson media into small thumbnails when it is the primary teaching context.
- Do not turn the Explore mosaic into equal white cards with repeated metadata.
- Do not carry oversized marketing typography into exercises, transcripts, or settings.
- Do not copy memo's specific learning destinations into an unrelated product; transfer the visual hierarchy, not the product model.
</design-context>
