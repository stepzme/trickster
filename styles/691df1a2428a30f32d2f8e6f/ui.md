<design-context>
---
version: 1
platform: iOS
name: Synchronize-design-analysis
description: "A black editorial learning interface where large cultural imagery and occasional serif display titles carry the atmosphere, while restrained charcoal controls, compact sans-serif metadata, and violet-to-blue access actions keep dense content precise."
colors:
  canvas: "#000000"
  surface-primary: "#171518"
  surface-secondary: "#242126"
  accent-primary: "#675CFF"
  accent-secondary: "#D871FF"
  text-primary: "#FFFFFF"
  text-secondary: "#C9C6CB"
  divider: "#2B282D"
  destructive: "#E45A68"
typography:
  hero: {fontFamily: "New York", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "New York", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "violet-to-blue gradient", text: "white semibold", height: 52, radius: 999}
  featured-card: {fill: "cultural image with dark lower gradient", radius: 20, text: "white editorial title and compact metadata"}
  category-chip: {fill: "charcoal or white", height: 36, radius: 999, text: "compact sans-serif"}
  navigation: {fill: "charcoal rounded bar", selected: "white or violet emphasis", unselected: "muted gray"}
---

# Overview

Synchronize is a black, image-led editorial interface. Cultural photography, paintings, sculpture, film stills, and constructed collages provide most of the color and emotional weight; interface chrome stays quiet in charcoal, white, and a controlled violet-to-blue accent. Large serif titles appear selectively at editorial moments, while dense metadata, filters, progress, and lesson controls use compact sans-serif type. The specific imagery and mixed-type hierarchy distinguish it from a generic streaming or course-card application.

# Non-negotiable visual invariants

- Pure black remains the dominant full-screen canvas; cards and controls use nearby charcoal values with little or no shadow.
- Culturally specific imagery is the primary visual mass on discovery and collection surfaces and cannot be omitted.
- Editorial display moments use a large serif title, while navigation, metadata, filters, and controls remain sans-serif.
- Violet-to-blue gradients are reserved for high-priority access or continuation actions rather than spread across every surface.
- Featured content uses a nearly full-width image card with a visible hint of adjacent content in horizontal rails.
- Dense libraries use a two-column image rhythm; detailed lesson or utility material returns to a single vertical column.
- White and charcoal pill controls coexist with the image field, using restrained geometry and no decorative shadow.
- Text over imagery is protected by a deliberate dark gradient and remains subordinate to the art's focal subject.

# Color and surfaces

The canvas is uninterrupted black. Primary charcoal surfaces hold fields and quiet cards; secondary charcoal carries pills, nested controls, the bottom bar, and modal groupings. Dividers are subtle and often unnecessary when spacing or imagery already establishes separation.

White is the primary reading color and soft cool gray carries metadata and inactive navigation. A saturated violet-to-blue gradient marks decisive access, subscription, locked, or selected emphasis; pink-lilac appears as a secondary accent in badges and artwork but does not become a general UI tint. Destructive actions use a restrained red. Default iOS blue, light grouped backgrounds, pastel card stacks, and indiscriminate multicolor gradients would visibly break the reference.

# Typography

Use New York as the iOS-safe editorial serif for hero and campaign-like titles, and SF Pro Display/Text for sections, body, metadata, and controls. Serif is selective rather than universal: it introduces featured material and gives a publication-like tone, while the functional layer remains compact and neutral.

The hierarchy ranges from 30–40 point editorial titles to 20–24 point sans-serif section headings, 15–17 point body or control text, and 11–13 point metadata. Titles use bold weight and controlled multi-line wrapping; metadata is regular or medium and often placed in short horizontal groups. Avoid giving unrelated text levels nearly identical size and weight. With Dynamic Type, metadata groups wrap below titles, grids can become one column, and no image-overlay title may be clipped.

# Screen composition

Screens typically use 16-point edge insets, 12–16 points between related controls, and 28–32 points between editorial sections. Black extends through both safe areas. Image surfaces are allowed to dominate: a featured card can occupy much of the upper viewport, while utility controls remain comparatively compact.

Observed archetypes include:

- Featured editorial composition: a nearly full-width image or collage card leads, with a partial next card visible in a horizontal rail and short supporting metadata below or over a dark gradient.
- Library composition: filter and sort pills sit above a two-column grid of tall image tiles. Titles and status marks remain compact so the repeated artwork establishes the rhythm.
- Detail composition: a large media header or artwork is followed by an editorial title, concise metadata, a prominent rounded action, and a single-column sequence of dark lesson or information rows.
- Playback composition: video or audio content occupies the upper visual field; title, progress, supporting lesson context, and feedback controls continue in one vertical scroll context.
- Authentication and payment composition: black canvas, sparing editorial imagery or title, dark rounded inputs, and one strong white or violet-gradient pill action; native keyboard or web payment content remains visually contained.
- Modal composition: charcoal bottom sheets group choices in a single column, with large top corners and pill-like selections where observed.

# Navigation appearance

Primary navigation uses a rounded charcoal bottom bar with compact icons and labels. Selected content gains white or violet emphasis; inactive items remain muted gray. Detail surfaces use a minimal dark navigation bar with a leading back control and concise title treatment. Sheets are dark with approximately 28-point top corners and a subtle drag indicator. Filters and sorting controls appear as rounded sheets or pill groups without introducing a new navigation architecture.

# Components

- Primary action: 50–54 points tall, full or near-full width, strongly rounded, and filled with a violet-to-blue gradient when access or continuation needs emphasis. The label is centered white semibold; a pressed state slightly deepens the gradient.
- Secondary action: white pill with black label or charcoal pill with white label, chosen according to surrounding contrast. It remains visually quieter than the gradient action.
- Featured card: large cultural image, 18–24 point radius, restrained dark lower gradient, editorial title, and compact white metadata. The crop keeps the subject recognizable and leaves a safe text zone.
- Grid tile: portrait-oriented cultural image with a smaller 12–16 point radius; short title and metadata sit below or over a controlled lower fade. Tiles do not receive floating white card backgrounds.
- Category chip: 34–40 points tall, charcoal or white fill, pill radius, compact sans-serif label, and clear selected contrast. Multiple chips form a horizontal scroll or wrapped group.
- Input: dark charcoal fill, 14-point radius, off-white entry text, and muted placeholder. Focus changes border or luminance subtly rather than turning system blue.
- Status badge: small white, violet, or pink pill placed over artwork for lock, availability, or progress information; it never obscures the image subject.

# Imagery and icons

Imagery is structurally essential. The observed system uses paintings, architecture, sculpture, photographed people, film stills, and topic-specific cut-out collages. Assets are cropped boldly and often fill almost the entire card. Featured images are wide and immersive; library images are repeated portrait tiles; detail screens may use a large banner or media frame. Dark gradients protect overlaid text without flattening the underlying color.

This is an editorial content direction rather than one stable standalone authored illustration system. Do not force all assets into one synthetic drawing style. Use subject-specific cultural media with consistent crop, contrast, and text-safe composition. Icons remain compact, simple, and mostly white or gray; violet or pink signals a state rather than decorating every icon. If final media is unavailable, temporary imagery must still preserve the documented crop, scale, palette density, and visual weight.

# States

Selected filters, locked access, active continuation, progress, completed content, feedback, authentication, and modal choices are visible across the sample. These states preserve the black canvas and image-first hierarchy. Violet, blue, or pink may mark access and lock states; completion uses a restrained positive indication; inactive and disabled states reduce contrast within the same charcoal system.

Search and filtered surfaces keep the same grid geometry even when the result set changes. Player and lesson states preserve media prominence while progress and actions update below it. Native keyboard and payment surfaces may introduce system white regions, but they are transitions rather than a new app-wide appearance. Confirmation and destructive dialogs remain visually simple and do not introduce decorative artwork.

# iOS adaptation

Extend black through the safe areas and keep bottom navigation or actions clear of the home indicator. Use vertical scroll containers for detail, playback, and form surfaces; use horizontal scrolling only where the partial-next-card composition is intentional. On narrow widths or large Dynamic Type, change two-column libraries to one column before reducing readable type or damaging image crops.

Controls and icons need at least 44-point targets even when their visible pills are compact. VoiceOver should announce artwork meaning, title, status, and action in that order; decorative collage fragments should not become separate accessibility elements. Keep keyboard avoidance native, preserve system payment and permission transitions, and return to the same black context. Dark appearance is the observed source; do not invent a generic light theme. Use aspect-filled imagery with deliberate focal positioning rather than center-cropping every asset identically.

# Anti-generic checklist

- Do not replace the black canvas with a light grouped background or white card stack.
- Do not omit cultural imagery or substitute uniform stock-photo thumbnails.
- Do not use one sans-serif size and weight for every level; preserve the selective serif editorial hierarchy.
- Do not apply the violet gradient to every button, card, or icon.
- Do not ship an unstyled `TabView`, default blue tint, or generic `Form` sections.
- Do not give featured cards, grid tiles, inputs, and sheets one uniform corner radius.
- Do not use arbitrary SF Symbols as decorative replacements for image-led content.
- Do not place text directly on busy imagery without a controlled contrast gradient and text-safe crop.

</design-context>
