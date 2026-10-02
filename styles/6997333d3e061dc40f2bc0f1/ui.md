<design-context>
---
version: 1
platform: iOS
name: ChallengeUp-design-analysis
description: "A poster-like challenge tracker built on pure black, oversized circular actions, ultra-bold rounded display type, full-screen saturated color fields, geometric progress tokens, and flat-vector human scenes inside vivid template cards."
colors:
  canvas: "#000000"
  surface-primary: "#171717"
  surface-secondary: "#292929"
  accent-primary: "#FFC400"
  accent-secondary: "#57D6A3"
  text-primary: "#FFFFFF"
  text-secondary: "#9D9D9D"
  divider: "#3A3A3A"
  destructive: "#E3482C"
typography:
  hero: {fontFamily: "Arial Black", fontSize: 36, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "Arial Black", fontSize: 30, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "Arial Black", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "single challenge color", text: "near-black or white bold", height: 54, radius: 16}
  template-card: {fill: "saturated flat field", padding: 16, radius: 22, content: "heavy title and editorial figure"}
  progress-token: {fill: "black or challenge color", shape: "circle", content: "large number, check, pause, or play"}
  navigation: {fill: "black", selected: "white or challenge-color icon", unselected: "muted gray"}
---

# Overview

ChallengeUp treats goals as bold graphic posters rather than a conventional productivity dashboard. Pure black is the stage; giant circles, full-width saturated blocks, ultra-bold rounded titles, numbered grids, and large status tokens carry the interface. Yellow, mint, coral, purple, blue, green, pink, and gray are assigned one at a time to individual challenges or actions. Flat-vector human scenes give template cards an editorial identity, while active progress, forms, settings, and completion states remain geometric and type-led.

# Non-negotiable visual invariants

- Pure black fills the full viewport and remains visible as generous negative space between large graphic objects.
- Each challenge or primary state uses one dominant saturated color field rather than mixing several accents in one composition.
- Ultra-bold rounded or extended display type dominates titles, counters, and major calls to action; body and settings text remain neutral sans-serif.
- Empty and creation states center one oversized circular action instead of presenting a conventional card stack.
- Template cards combine a heavy title, one flat-vector human or activity scene, and a saturated flat background.
- Active progress uses large circles, numbered grids, checkmarks, play or pause overlays, and explicit labels rather than small charts.
- Forms and modal sheets use charcoal rows over black while retaining the current challenge color for selection or completion.
- Illustration is confined to template and category browsing; detailed progress and settings remain geometric and data-led.

# Color and surfaces

The canvas is pure black. Charcoal primary and secondary surfaces hold form rows, settings groups, accordion content, modal sheets, and disabled controls. Dividers are dark gray and subordinate to spacing. Saturated challenge fields may occupy an entire card or most of a detail screen.

Yellow is a recurring high-attention creation and progression accent, while mint, coral, mustard, purple, blue, green, pink, and gray identify individual challenge contexts. White carries primary text on black; near-black carries type on yellow or light color fields. Gray carries supporting and inactive state. Green or mint confirms completion, while red-orange marks destructive actions. Default blue tint, gradients, soft shadows, and multicolor surfaces would break the flat poster language.

# Typography

Use Arial Black as the iOS-safe approximation for the heavy rounded display face and SF Pro Text for forms, settings, explanations, and metadata. Hero titles and counters sit around 30–36 points, section headings around 20–24, buttons and card titles around 15–18, body copy around 14–16, and metadata around 11–13.

Display titles are often uppercase, short, and tightly composed inside color fields. Large numeric day counts and progress values use tabular figures. Body text is left-aligned and more restrained; poster titles may center or align strongly to a card edge. With Dynamic Type, template titles and forms gain height, progress grids reduce columns, and supporting text wraps before circles, counters, or actions are clipped.

# Screen composition

Screens generally use 16-point edge insets, 12-point control gaps, 16 points inside cards, and 28–40 points between major graphic objects. Black extends through both safe areas. Long template galleries, active challenge lists, forms, and settings scroll vertically; fixed lower action bars reserve the home-indicator region.

Observed archetypes include:

- Creation composition: sparse black field with hamburger and add controls near the top, one giant colored circle centered in the viewport, and minimal supporting text.
- Template composition: horizontally paged or grid-arranged saturated cards, each with oversized title and a contained flat-vector activity scene.
- Active-challenge composition: full-width saturated block with heavy title, day or schedule context, and one dominant circular completion control or progress grid.
- Detail composition: large challenge-color field leads, followed by bold counter, numbered circle grid, explicit status, and compact share, edit, pause, or completion controls.
- Form composition: black canvas with stacked rounded charcoal rows, color swatches, date or time selectors, switches, native keyboard, and one saturated lower action.
- Advice composition: long-form white text and accordion panels on black, using color sparingly for current context.
- Modal composition: rounded charcoal bottom sheet or system alert over a dimmed black or saturated challenge field.

# Navigation appearance

Navigation is visually sparse and sits directly on black. Top controls use simple white hamburger, plus, back, close, gear, or share icons with generous touch regions. No persistent light navigation bar dominates the composition. Bottom action regions use a full-width challenge color or black/charcoal surface. Sheets have dark surfaces, large top corners, and a subtle drag indicator. Selected swatches, tabs, or states use the current challenge color with explicit marks.

# Components

- Giant action circle: large saturated circle centered on black, with bold near-black or white icon/text and enough negative space to remain the sole focal control.
- Template card: saturated flat field, 20–24 point radius, heavy black or white title, and one contained editorial figure or activity scene. Artwork and title share the card without overlapping key gestures.
- Progress token: large circle containing a number, checkmark, play, pause, or completion mark. Its state is also written in nearby text.
- Challenge block: full-width colored rectangle or rounded card with large title, day count, schedule context, and one dominant action.
- Form row: charcoal rounded field, white entered text, gray placeholder or label, and trailing selector, switch, or disclosure. Selected color appears in a bounded control.
- Color swatch: clear circular sample with explicit selected outline or checkmark; selection does not rely on hue alone.
- Modal action: dark rounded sheet with concise title, short explanation, and visually separated confirm/cancel actions; destructive confirmation uses red-orange.

# Imagery and icons

Template imagery uses flat-vector human figures and simple activity objects. Figures are angular and expressive, with stylized skin and clothing colors, minimal line detail, and no gradients or volume. The saturated card background acts as part of the illustration. Each scene preserves a clear gesture and one dominant activity; proportions and crop remain consistent across templates.

Progress and form surfaces rely on geometric circles, checks, badges, and simple white icons rather than illustration. System screens may introduce native settings or permission visuals without redefining the style. The template illustration is compositionally important and cannot be omitted. Temporary art must preserve the flat medium, human scale, gesture, saturated field, and text-safe zone.

# States

Observed states include ready, started, done-today, paused, completed, reset, shared, and deleted challenges; selected color swatches; disabled save actions; expanded accordion panels; numbered progress; destructive confirmation; native permission alerts; and external settings surfaces. These retain the black stage, one challenge color, heavy type, and large graphic tokens.

Completion uses checkmarks, filled circles, explicit labels, or green/mint emphasis. Paused state uses a clear pause mark and text. Destructive actions use red-orange and remain confined to confirmation. Disabled actions become gray without changing geometry. System sheets may retain native styling but return to the same black graphic context.

# iOS adaptation

Extend black or the active challenge field through the safe areas and reserve the lower inset for the documented action region. Use vertical scroll containers for galleries, details, forms, and advice; keep circles and bottom actions clear of the home indicator and keyboard. On compact widths, reduce grid columns rather than shrinking progress tokens below readability.

All top icons, circles, swatches, switches, rows, and action bars need at least 44-point targets. VoiceOver should announce challenge title, day or schedule, state, progress value, and action in that order; decorative illustration fragments should not become separate elements. Preserve native keyboard, date/time picker, notification permission, system settings, and sheets. With Dynamic Type, maintain the dominant title/action relationship and allow cards to grow. The sampled product is dark-first; do not introduce white grouped screens except for unavoidable system transitions.

# Anti-generic checklist

- Do not replace the pure-black stage with a standard grouped background or stacked white cards.
- Do not convert large progress circles and counters into small dashboard charts.
- Do not mix several challenge colors or introduce gradients and soft shadows in one composition.
- Do not replace heavy display titles with thin generic typography.
- Do not replace template illustrations with photography, SF Symbols, emoji, or glossy 3D assets.
- Do not crowd template cards or challenge blocks with secondary actions.
- Do not give circles, poster cards, form rows, sheets, and bottom bars one uniform radius.
- Do not make color the only indicator of selection, completion, pause, or destructive state.

</design-context>
