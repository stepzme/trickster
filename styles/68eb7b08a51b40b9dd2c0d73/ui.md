<design-context>
---
version: 1
platform: iOS
name: Kinopoisk-design-analysis
description: "A near-black cinematic interface where full-bleed key art and dense poster rails dominate, bold white type and compact gray metadata sit over image fades, orange marks playback and selection, green ratings punctuate content, and a translucent five-item dock anchors non-immersive screens."
colors:
  canvas: "#050505"
  surface-primary: "#111113"
  surface-secondary: "#202023"
  accent-primary: "#FF5A16"
  accent-secondary: "#42C95A"
  text-primary: "#FFFFFF"
  text-secondary: "#A9A9AF"
  divider: "#303034"
  destructive: "#E5484D"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 10
  sheet: 26
  pill: 999
components:
  primary-action: {fill: "#FF5A16", text: "#FFFFFF", height: 50, radius: 999}
  poster-card: {fill: "#111113", radius: 8, imageRatio: "2:3"}
  media-control: {fill: "#202023", text: "#FFFFFF", size: 44, radius: 999}
  navigation: {fill: "#111113", selected: "#FF5A16", unselected: "#77777E"}
---

# Overview

Kinopoisk is an image-dominant entertainment system built on a continuous near-black field. Film and series key art, posters, still frames, cast photography, and channel imagery provide most of the screen's color and visual identity. Bold white titles and compact gray metadata sit directly on black or on protected image gradients. Orange is reserved for playback, selected navigation, progress, switches, and key links; compact green ratings form a second recognisable signal. The result must feel cinematic and content-dense, not like generic dark cards with media thumbnails added afterward.

# Non-negotiable visual invariants

- Keep a near-black canvas continuous across discovery, detail, search, profile, settings, and immersive playback surfaces.
- Make real media imagery the dominant visual mass through full-width heroes, tall poster cards, wide stills, and dense horizontal rails.
- Reserve orange for primary playback, selected navigation, active controls, progress, switches, and high-priority links.
- Keep compact numeric ratings green and visually attached to their poster or title context.
- Preserve the translucent dark five-item bottom dock on non-immersive screens and remove it when media takes over the viewport.
- Build title-focused screens from a 45–60% image-led upper region followed by metadata, one orange action, compact icon controls, and content rails.
- Use dark rounded groups for settings and filters, but keep poster and editorial content largely chrome-free.
- Keep loading and error states quiet on black, using a small centered message, orange spinner, or concise orange retry action.

# Color and surfaces

Black or near-black (`#050505`) is the uninterrupted base and should remain visible between content groups and behind safe areas. Primary panels use deep charcoal; secondary controls, sheets, filter fields, and settings groups use a slightly lighter charcoal. Orange (`#FF5A16`) is the action and active-state color. Green is limited to ratings and positive audience values rather than general success styling. Primary text is white, supporting metadata is cool gray, and dividers are low-contrast charcoal.

Large color masses normally come from licensed media imagery and their gradients, not from UI panels. Heroes fade smoothly into black so white text and controls remain legible without a boxed overlay. A white surface can appear in a specific filter/result treatment, but it is an exception rather than the base system. Branded subscription art may introduce magenta, violet, blue, or gold locally. Default iOS blue, light grouped backgrounds, and saturated multicolor system controls would visibly break the reference.

# Typography

Major title and campaign text uses bold SF Pro Display at roughly 28–34 points. Section headings are strong at about 20–22 points, card labels remain around 14–16 points, and metadata, navigation, durations, dates, and badges sit between 10 and 13 points. Large type often overlays protected hero imagery; long editorial sections return to left-aligned white text on black. Numeric ratings use bold tabular figures and green color so changing values remain stable and scannable.

Use SF Pro Display and SF Pro Text as the iOS-safe families. Preserve the contrast between major title, section heading, content label, and metadata under Dynamic Type. Let synopsis and settings text wrap and let groups grow vertically; do not enlarge compact badges until they overpower imagery. Keep wording concise and factual. Do not add decorative copy where poster art, a title, rating, or action already establishes context.

# Screen composition

Horizontal content insets are typically 12–16 points, while hero artwork may extend to the screen edges and under the status region. The upper part of discovery and detail screens is image-heavy; the middle becomes a vertical sequence of headings, poster rails, wide stills, metadata, or editorial blocks; the bottom is held by a dark translucent navigation dock unless an immersive player or focused modal replaces it. Section gaps are larger than item gaps so dense media remains readable.

Observed visual archetypes include:

- **Image-led discovery:** a large poster mosaic or full-width hero occupies most of the upper viewport, followed by strong section titles and horizontally scrolling poster or still rails.
- **Title detail:** key art and title treatment occupy roughly the upper half, fading into black; ratings and compact metadata lead to an orange pill action, circular secondary controls, and vertically stacked media sections.
- **Search and results:** a dark filled search field sits near the top, followed by empty space, segmented results, poster grids, or list rows; the dark dock remains visible.
- **Filter form:** compact dark fields, chips, slider, and choice rows stack vertically, with an orange full-width action held near the lower safe area and white used only in an observed local result treatment.
- **Immersive playback:** nearly pure black viewport, sparse white/orange top and bottom controls, and no persistent tab dock.
- **Profile, settings, or subscription:** vertically grouped charcoal surfaces with white row text, gray secondary values, chevrons, orange switches or actions, and occasional bounded promotional imagery.
- **Error or loading:** generous black space around a small centered message, orange retry link, skeleton, or spinner.

Use vertical scrolling for long detail and settings content, horizontal scrolling for media rails, and stable poster widths so adjacent content remains visibly discoverable.

# Navigation appearance

The main bottom navigation is a dark translucent full-width dock containing five evenly distributed icons with small labels. Inactive items are gray; the selected icon and label turn orange. A compact profile image may occupy the final item. The dock is visually integrated with the black canvas rather than floating as a light pill. Its appearance can be reused, but its source-product destinations must not be copied.

Horizontal category tabs use compact white/gray labels and a thin orange selected underline. Top bars use sparse back, close, search, or more controls without a light navigation background. Dark bottom picker sheets use large rounded top corners and a dimmed black backdrop. Immersive media removes the dock and reduces navigation to close or more controls over the image. Avoid default blue chevrons, an unstyled `TabView`, or oversized circular back controls.

# Components

- **Primary media action:** orange capsule about 50 points high, centered semibold white label, optional leading play symbol, and a darker pressed orange. It stays visually dominant without becoming a full-screen orange band.
- **Poster card:** tall 2:3 media crop with a modest 8-point radius, little surrounding chrome, and compact title or metadata below. A small green rating badge may overlay a corner.
- **Wide media card:** landscape still or trailer image with a subtle dark gradient, minimal corner radius, and concise text aligned below or protected over the image.
- **Secondary media control:** 44-point dark circular button with a crisp white icon and no unnecessary label; selected state may gain orange emphasis.
- **Rating treatment:** bold green tabular value placed as a compact badge or within a restrained dark panel, never as a generic green button.
- **Search or filter field:** charcoal rounded rectangle with white entered text, gray placeholder, and orange active or selected accents; no light default text field.
- **Settings row:** dark grouped surface, 16-point side padding, white primary label, gray secondary value, subtle divider, and compact trailing chevron or orange switch.
- **Bottom sheet:** charcoal surface with roughly 26-point top corners, concise title, stacked choice rows, and orange selection or action over a dimmed backdrop.

# Imagery and icons

Real film and series posters, hero key art, still frames, cast portraits, channel marks, and editorial photography are compositionally mandatory. A hero or poster rail cannot be omitted while waiting for final assets; use representative licensed-safe placeholders with the same aspect, crop, density, and visual weight during design validation. Preserve faces, title treatments, and key subjects when applying aspect-fill. Use dark-to-transparent gradients only where text or controls overlap imagery.

Operational icons are compact, mostly monochrome, and become orange when active. Poster rating badges and progress marks remain small. Subscription and promotion graphics are campaign-specific authored assets rather than proof of an app-wide illustration system. Do not generalize those occasional graphics into mascots or reusable illustrations, and do not replace media imagery with arbitrary SF Symbols or code-drawn gradients.

# States

Observed states include onboarding slides and a permission prompt, populated discovery, skeleton and loaded title detail, player loading and playback, a traffic-saving notice, cast overlay, empty and typed search, segmented results, multiple filter selections and picker sheet, ticket/editorial surfaces, server error, profile, settings, and subscription promotion. The black canvas, white/gray hierarchy, orange active controls, restrained green ratings, and image-led density remain stable across them.

Loading uses dark skeletons or an orange spinner rather than a bright progress screen. Error keeps the composition quiet with a concise centered message and orange retry. Toasts are compact and transient over the dark surface. Do not invent light mode, permission styling beyond the observed system prompt context, or decorative empty-state art that the evidence does not support.

# iOS adaptation

Extend black through all safe areas and allow hero imagery to reach under the status region with an adequate readability scrim. Use vertical `ScrollView` or custom-styled native lists for long pages and horizontal lazy stacks for poster rails. Preserve a visible partial next item where the reference signals horizontal scrolling. Keep the dock and sticky filter action above the home indicator. In search, let the keyboard reduce the results viewport while keeping the search field and selected segment visible.

All icon-only actions need at least 44-point hit targets even when the glyph is visually small. VoiceOver order should follow the visible hierarchy: title, rating and metadata, primary action, secondary actions, then content sections. Announce poster title, rating, and progress as one useful element while leaving its action distinct. Dynamic Type should grow metadata and rows, wrap synopsis text, and reduce rail density before clipping labels. Compact widths retain 12–16 point gutters and media aspect ratios. The sampled system is dark; do not claim a separate observed light appearance.

# Anti-generic checklist

- Do not replace the near-black canvas with white sheets or a generic grouped-card background.
- Do not reduce full-width key art, poster rails, stills, or cast imagery to small thumbnails beside text.
- Do not use default iOS blue for selection, links, progress, switches, or navigation.
- Do not ship an unstyled `TabView`, `Form`, default media controls, or light search field.
- Do not over-round posters or wrap every media item in a shadowed charcoal card.
- Do not spread green beyond compact ratings and genuine positive audience values.
- Do not infer a reusable illustration system from subscription graphics or licensed promotional campaigns.
- Do not add mood-setting or redundant copy that competes with title art, metadata, ratings, and playback actions.

</design-context>
