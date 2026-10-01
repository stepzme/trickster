<design-context>
---
version: 1
platform: iOS
name: yandex-design-analysis
description: "A white search shell with a centered universal query field, coral-red identity, dense vertical result modes, dark commitment actions, and a separate purple-blue Alice workspace."
colors:
  canvas: "#FFFFFF"
  surface-soft: "#F3F3F4"
  surface-muted: "#EDEDEF"
  surface-dark: "#2F3033"
  text-primary: "#171719"
  text-secondary: "#73747A"
  text-tertiary: "#A6A7AB"
  brand-coral: "#FF5A4F"
  action-dark: "#2C2D32"
  action-yellow: "#FFD426"
  alice-purple: "#6F48E8"
  alice-blue: "#566BFF"
  success: "#2FAE68"
  danger: "#E94B50"
  divider: "#E7E7E9"
typography:
  display: { fontFamily: "YS Text", fontSize: 32, fontWeight: 700, lineHeight: 36, letterSpacing: -0.5 }
  title: { fontFamily: "YS Text", fontSize: 24, fontWeight: 700, lineHeight: 29, letterSpacing: -0.3 }
  headline: { fontFamily: "YS Text", fontSize: 20, fontWeight: 700, lineHeight: 24, letterSpacing: -0.2 }
  section: { fontFamily: "YS Text", fontSize: 17, fontWeight: 600, lineHeight: 22, letterSpacing: 0 }
  body: { fontFamily: "YS Text", fontSize: 15, fontWeight: 400, lineHeight: 20, letterSpacing: 0 }
  body-compact: { fontFamily: "YS Text", fontSize: 13, fontWeight: 400, lineHeight: 17, letterSpacing: 0 }
  caption: { fontFamily: "YS Text", fontSize: 11, fontWeight: 400, lineHeight: 14, letterSpacing: 0 }
  action: { fontFamily: "YS Text", fontSize: 15, fontWeight: 500, lineHeight: 19, letterSpacing: 0 }
spacing:
  screen-horizontal: 16
  compact-gap: 8
  control-gap: 12
  section-gap: 24
  hero-gap: 40
rounded:
  input: 22
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  universal-search: { height: 48, fill: "#F3F3F4", radius: 22, horizontalPadding: 12 }
  primary-action: { height: 52, fill: "#2C2D32", foreground: "#FFFFFF", radius: 12 }
  shortcut-tile: { minHeight: 104, fill: "#F3F3F4", radius: 16, padding: 12 }
  result-card: { fill: "#FFFFFF", radius: 16, padding: 12 }
  bottom-navigation: { height: 58, fill: "#FFFFFF", selected: "#171719", unselected: "#73747A" }
---

# Overview

Yandex is a multi-mode search product held together by one recognizable shell rather than one repeated card system. The sparse start screen centers the universal query field and a few shortcuts; search results become denser and switch structure according to web, finance, product, image, video, or camera content. Alice opens as a distinct assistant workspace with its own purple-blue accents, while account and identity tasks use calm white pages and near-black actions.

# Non-negotiable visual invariants

- The start screen leaves a large white field around a single central search control and a small number of shortcut modules.
- The search control begins with the coral Yandex mark and keeps voice and camera actions inside the same rounded field.
- Search modes use a compact horizontal category row directly beneath the active query instead of separate destination cards.
- Results adapt to content: reading uses vertical answer blocks, shopping uses image-led masonry, and finance uses compact filter and offer modules.
- Alice uses purple-blue accents and a bottom composer while the surrounding search shell remains white and neutral.
- Account and sign-in screens use near-black full-width actions; yellow appears only in selected service-specific actions.
- Persistent browser controls remain compact and secondary to the current search, result, or assistant task.

# Color and surfaces

White dominates the start screen, results, assistant, and identity pages. Pale neutral gray fills search fields, suggestion cards, filters, and grouped utilities. Dividers are faint and visible shadows are limited to overlays, menus, and floating composers.

Coral-red identifies the Yandex mark and selected Alice entry points without becoming the global action color. Purple and blue belong to Alice modes, generated content, and assistant actions. Near-black anchors text and consequential buttons. Yellow is a local service accent, not a substitute for the main action system. Success and destructive colors remain confined to status feedback.

# Typography

Use YS Text when available and SF Pro as the iOS substitute. The system is compact and text-led: 24–32-point titles are reserved for onboarding and major prompts; 20-point headings introduce answers or identity tasks; 15–17-point text carries controls and primary reading; 11–13-point text carries sources, tabs, prices, and metadata.

Search results rely on weight and spacing more than dramatic scale changes. Query terms, answer headings, prices, and identity decisions use semibold or bold weight. Supporting facts, URLs, and source labels recede through size and neutral color. Preserve strong Cyrillic legibility and allow long result text to wrap without reducing it below the documented scale.

# Screen composition

The start screen is vertically sparse: utility controls sit near the top, the universal search field occupies the center, and a short shortcut row sits below it. The persistent browser controls stay at the bottom. When Alice is revealed from the start screen, its content rises from below while the search context remains visible behind the transition.

Results move the query field to the top and place the category row immediately below. Reading modes form a single scroll column. Shopping results use two image-led columns. Finance and comparison results combine compact parameters, filter capsules, and full-width offer modules. Smart Camera uses the camera preview as the upper canvas and attaches search modes and results below it. Document scanning changes to a dark editing workspace with the captured page centered.

Identity tasks use a centered logo or title, one decision at a time, restrained explanatory copy, and a bottom or mid-page commitment action. The assistant uses a large calm workspace, suggestion modules near the empty state, compact mode controls above the composer, and generated content in the same scrolling conversation.

# Navigation appearance

The persistent bottom row uses simple dark line icons for browser back, home, Alice, and open tabs. Labels are normally omitted. Search categories are a text row with a short underline on the active mode. The start screen adds small top utilities for services, mail, weather, account, and menu; these controls stay visually lighter than the query field.

Drill-down identity pages use a back control and centered Yandex ID title. Overlays use a close action and retain the underlying context. Alice exposes chat history and new-chat actions at the top without turning them into another tab bar.

# Components

The universal search field is a pale rounded capsule with the coral mark at the leading edge, placeholder or query text in the middle, and voice plus camera controls at the trailing edge. In result mode it can gain a subtle outline while keeping the same internal order.

Primary actions are near-black, full-width rounded rectangles with white text. Secondary decisions use white or pale controls with dark text and a faint border. Yellow actions are reserved for the specific Yandex service context in which they appear.

Shortcut tiles are compact, image-aware modules with a small title and one dominant visual or data preview. They may form a short horizontal row but do not expand into a dashboard of equal generic cards.

Result structures follow their content. Answer blocks combine an Alice/source header, bold explanatory text, inline source links, and optional media. Product results prioritize large imagery, price, merchant, and media state. Finance results use compact parameters and filters above offer rows. Selection sheets group radio choices or segmented controls in a rounded white surface.

Alice suggestion modules are horizontally scrollable and use concise task titles with a small product-specific mark. The composer remains anchored near the bottom with attachments and mode actions kept subordinate to the input.

# Imagery and icons

Use familiar system-style symbols for navigation, close, microphone, camera, scan, sharing, and disclosure. Preserve the Yandex mark as a compact coral focal point rather than converting every icon to the brand color.

Result imagery is content, not decoration: product photos use clean rectangular or rounded crops, camera results retain the captured scene, generated images remain large enough to evaluate, and identity illustrations occupy deliberately reserved space. Do not invent replacement copy or decorative graphics when a product image, source thumbnail, or generated result is unavailable; preserve the intended footprint until the real asset exists.

# States

The shell supports empty search, active query, loading, answer, filtered results, media results, camera recognition, scan editing, assistant suggestions, active conversation, generated media, sign-in, account recovery, and local notification feedback. Loading may reduce the screen to a centered progress indicator. Menus and source selectors appear above retained context.

Selected search modes use underline and text emphasis. Alice modes use purple-blue emphasis inside the composer or control row. Success and warnings appear as local banners or inline modules. Permission requests and biometric prompts remain native system states and return to the pending task.

# iOS adaptation

Keep every search, voice, camera, assistant, navigation, filter, and account action at least 44 points. Preserve the start screen's large empty field on smaller devices before compressing the universal query control. Allow result category rows, filters, and assistant suggestions to scroll horizontally instead of shrinking labels.

Use custom-styled scrolling containers so native list backgrounds and default blue tint do not replace the observed surfaces. Maintain a logical VoiceOver order from query and active mode through the primary result and its actions. Treat source-and-answer blocks as coherent accessibility groups, expose product price with merchant, and announce generated or loading states without moving focus unexpectedly.

# Anti-generic checklist

- Do not turn the start screen into a dense dashboard or a grid of equal service cards.
- Do not apply coral-red to every action, tab, icon, or result highlight.
- Do not force web answers, finance offers, products, images, and camera results into one reusable card layout.
- Do not make Alice look like a generic chat screen with default blue controls and plain message bubbles.
- Do not replace the dark identity actions with default iOS blue buttons or `Form` styling.
- Do not add decorative copy, invented metrics, or filler cards to sparse search and assistant states.

</design-context>
