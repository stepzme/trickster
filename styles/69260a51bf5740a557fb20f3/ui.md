<design-context>
---
version: 1
platform: iOS
name: Moonly-design-analysis
description: "An immersive near-black astrology interface where oversized white serif headings, translucent charcoal cards, warm active navigation, and large mystical media create a layered editorial ritual space."
colors:
  canvas: "#15161A"
  surface-primary: "#202126"
  surface-secondary: "#2A2932"
  accent-primary: "#7558E8"
  accent-secondary: "#D9A45E"
  text-primary: "#F7F3F1"
  text-secondary: "#ACA6B2"
  divider: "#393942"
  destructive: "#D95765"
typography:
  hero: {fontFamily: "Georgia", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "Georgia", fontSize: 30, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "Georgia", fontSize: 23, fontWeight: 700, lineHeight: 29}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  mystical-media-card: {fill: "dark image-led surface", geometry: "large rounded portrait or landscape card"}
  translucent-pill: {fill: "low-contrast charcoal", geometry: "compact capsule"}
  premium-lock: {fill: "dark badge", geometry: "small circular or pill lock marker"}
  floating-tab-bar: {fill: "translucent near-black", geometry: "rounded icon-and-label dock"}
---

# Overview

Moonly is a dark, image-led editorial interface. Near-black fills the screen, large serif headings establish the current theme, and rounded translucent cards layer mystical imagery with concise labels. Moon, planet, tarot, rune, meditation, and glowing fantasy imagery frequently occupy the largest content block, while the floating bottom navigation stays subdued.

# Non-negotiable visual invariants

- Near-black extends through the full viewport and remains visible between every card and control.
- Primary section headings use large high-contrast white serif type, distinct from sans-serif controls and metadata.
- Mystical media cards occupy substantial vertical space and preserve one legible celestial, symbolic, or meditative focal subject.
- Violet glow and warm amber accents appear selectively against charcoal rather than filling the entire interface.
- Secondary controls are compact translucent pills or dark tonal segments with low-contrast borders.
- A rounded floating bottom bar combines small symbols and labels, with a warm or violet active state.
- Premium or unavailable content remains visible but adds a small lock badge and reduced emphasis.
- Major screens retain a compact circular avatar or profile affordance near the upper-right safe area.

# Color and surfaces

The canvas is a continuous near-black or charcoal field. Primary cards are slightly lighter charcoal; secondary panels introduce a restrained violet cast or translucency. White carries headings and primary readings, while cool gray supports dates, explanations, and locked labels. Violet marks focused practices and selected controls; warm amber identifies lunar or celestial emphasis and active navigation. Glows stay localized around imagery and never become a generic full-screen gradient. Default white grouped surfaces, iOS blue, or bright flat purple panels would break the observed atmosphere.

# Typography

Use Georgia as an iOS-safe substitute for the observed editorial serif, paired with SF Pro Text for controls, metadata, and longer reading copy. Serif titles use a pronounced 30–38-point scale; card titles sit around 18–23 points; sans-serif body and labels remain compact. Keep headings left-aligned and allow them to wrap naturally. Numeric dates and small status values may use tabular figures. With Dynamic Type, let supporting text and cards grow vertically while preserving the serif-versus-sans contrast and leaving the symbolic subject unobscured.

# Screen composition

Editorial feed archetype: inset content about 16 points, begin with a large serif heading and compact top-right avatar, then stack wide image-led cards, horizontal media rails, and smaller translucent controls. Cards may peek at the horizontal edge, but the main column remains readable.

Symbolic reading archetype: center a large tarot card, rune stone, moon, planet, or glowing object in the middle half of the viewport; surround it with dark negative space, then anchor concise controls or interpretation below. Text overlays require a dark protective scrim.

Focused sheet archetype: use a broad rounded dark sheet over the existing canvas, with a serif or strong sans title, short options, pills, and one clear action. Vertical scrolling keeps long content above the floating navigation and home indicator.

# Navigation appearance

The bottom navigation is a floating rounded dark bar with small icon-and-label items; inactive items are muted gray and the selected item gains warm amber or violet emphasis. Top chrome is minimal and transparent, with compact back, avatar, or utility controls. Sheets preserve the charcoal palette and large top radius. This section describes appearance only; routes and information architecture belong to the consuming product.

# Components

Mystical media cards use 18–22-point radii, dark imagery, localized colored glow, and a single clear focal subject; titles either sit below or overlay a protected dark region. Translucent pills and segmented controls use charcoal fills, subtle borders, compact sans labels, and violet selection. Primary actions use violet with white labels; secondary actions stay dark and tonal. Lock badges are small, close to the affected item, and do not replace its preview. The floating tab bar uses evenly spaced compact items and restrained selection. Pressed states deepen the current surface; disabled and locked states reduce contrast without changing geometry.

# Imagery and icons

Imagery is compositionally essential and cannot be omitted while final assets are pending. Preserve the scale and crop of moon phases, celestial bodies, tarot cards, rune stones, meditative figures, glowing orbs, and fantasy-astrology scenes. One symbolic subject should dominate each card, with dark negative space and localized violet, magenta, amber, or moon-white light. The sampled imagery mixes rendered, painterly, and photo-like treatments, so do not assume one production medium; unify it through darkness, glow, subject scale, and card composition. Icons remain thin, symbolic, and visually quieter than the media.

# States

Selected segments and navigation items add violet or amber while retaining the dark surface. Locked and premium items keep their imagery visible with a small lock and dimmed text. Progress or completion uses restrained positive color close to the affected practice. Paywalls and focused choices appear as dark rounded sheets. Sign-in and assistant surfaces preserve the same canvas, serif hierarchy where applicable, and translucent controls rather than adopting generic light forms.

# iOS adaptation

Extend the near-black canvas through safe areas, but keep titles, avatars, and overlay controls clear of the status bar. Reserve space above the home indicator for the floating tab bar and any bottom action. Use vertical scrolling for editorial feeds and long readings; use horizontal rails only where adjacent cards remain visibly discoverable. All compact icons and pills require at least 44-point hit targets. Native keyboard and system permission transitions may remain native, then return to the dark context. VoiceOver order follows heading, primary symbolic media, its reading or status, controls, then navigation. Dynamic Type expands cards and sheets vertically without shrinking or removing compositionally important imagery. No unrelated light appearance was observed.

# Anti-generic checklist

- Do not replace the near-black field with grouped white cards or a default system background.
- Do not use one generic purple gradient across every surface.
- Do not replace the serif display hierarchy with uniform SF Pro body sizing.
- Do not omit the large mystical media or substitute arbitrary SF Symbols for symbolic subjects.
- Do not use an unstyled `TabView` with default blue selection.
- Do not make locks or premium status into full-width warning banners.
- Do not fill dark negative space with decorative copy or extra utility cards.
- Do not force every image into one medium when the observed coherence comes from composition, darkness, and glow.

</design-context>
