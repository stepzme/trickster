<design-context>
---
version: 1
platform: iOS
name: Not-Boring-Vibes-design-analysis
description: "An immersive dark interface where full-screen low-poly worlds provide the dominant color and depth, sparse floating HUD controls frame the edges, condensed display type names each atmosphere, and yellow-gold accents punctuate otherwise minimal chrome."
colors:
  canvas: "#000000"
  surface-primary: "#1E1C20"
  surface-secondary: "#4B4A50"
  accent-primary: "#F6B400"
  accent-secondary: "#8D43FF"
  text-primary: "#FFFFFF"
  text-secondary: "#B8B5BC"
  divider: "#4B4A50"
  destructive: "#F28C86"
typography:
  hero: {fontFamily: "Avenir Next Condensed", fontSize: 40, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "Avenir Next Condensed", fontSize: 30, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "Avenir Next Condensed", fontSize: 22, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 18}
  caption: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 16
  sheet: 28
  pill: 999
components:
  primary-action: {background: "transparent", foreground: "#FFFFFF", borderColor: "#FFFFFF", borderWidth: 1, radius: 999, minHeight: 56}
  secondary-action: {background: "#1E1C20CC", foreground: "#FFFFFF", radius: 999, minHeight: 44}
  primary-card: {background: "#1E1C20", radius: 16, padding: 16}
  navigation: {background: "translucent charcoal", radius: 999, minTarget: 44}
---

# Overview

(Not Boring) Vibes treats a rendered environment as the interface rather than as decoration. Forest, desert, water, sky, and celestial scenes fill the entire viewport, while compact translucent controls hover at stable edges. Sparse white type, tall condensed mode names, and a yellow-gold active accent keep the chrome subordinate to the atmosphere.

# Non-negotiable visual invariants

- A low-poly 3D environment or a deliberately isolated authored object occupies the principal visual mass; it cannot be replaced by a plain gradient or card stack.
- Active scenes run full bleed through both safe areas, leaving only sparse edge-mounted controls above them.
- Mode names use tall, condensed, often all-caps display type with much greater scale than helper copy.
- Black and charcoal form the persistent UI shell, while each environment supplies its own pastel or saturated palette.
- Navigation appears as circular floating controls and a compact HUD, never as a conventional tab bar.
- The screen normally has one atmospheric focal point and generous visual quiet; opaque panels are reserved for focused settings or sheets.
- Yellow-gold consistently marks active toggles, energy, progress, or selection against the dark shell.

# Color and surfaces

True black is the stable canvas behind onboarding, settings, and scene transitions. Full-screen scenes introduce large masses of pale cyan sky, peach-pink desert, moss and olive forest, watery green, purple, or salmon, but the overlaid chrome remains charcoal, white, and translucent. `#F6B400` through `#FFD21A` is the recurring active accent; `#8D43FF` appears as a secondary mode color rather than the universal control tint.

Utility surfaces are near-black or `#1E1C20`, sometimes translucent enough to retain the world beneath. Settings cards and mode tiles are dark with restrained dividers; bottom sheets use a larger charcoal mass and a dimmed background. White outline controls remain transparent. Default blue tint, generic light grouped backgrounds, or a page-wide undifferentiated gradient would break the reference.

# Typography

Use Avenir Next Condensed as an iOS-safe substitute for the observed tall condensed display face. Hero mode words can reach 40 points and often use uppercase; screen and section headings remain 22–30 points. SF Pro Text carries sparse explanatory copy and controls. Tiny technical labels use SF Mono around 11 points and may be uppercase. Large numeric readouts are tabular and isolated rather than embedded in paragraphs.

The scale contrast is intentionally extreme: one mode word or number dominates, while most helper copy is small and quiet. Dynamic Type should expand utility lists and sheets, but scene labels may wrap or reduce available negative space before obscuring the environment or HUD controls.

# Screen composition

Scene screens are full bleed, with a slim vertical rail of 44-point circular controls near one edge, occasional small controls at the lower-left, and a compact mode or play control near the lower-right. The middle of the viewport remains dominated by landscape depth, horizon, cloud, or one environmental landmark.

Observed archetypes include:

- A black launch screen with a very small centered authored mark.
- Center-weighted onboarding with one isolated object or scene on black, a brief heading, and a low outline action.
- A setup composition with a top heading, a centered pill or picker, generous empty space, and one bottom outline action.
- A full-screen low-poly world with sparse edge HUD controls and no containing card.
- A softened or blurred world behind a centered grid of colorful square mode tiles.
- A large rounded timer sheet rising over a still-visible environment.
- A black settings or achievements screen with compact dark cards, thin dividers, and a centered top title.

Use roughly 16-point utility insets, 12-point control gaps, and 24–32 points between content groups. Scrolling belongs to dense settings content, not the immersive scene.

# Navigation appearance

No standard tab bar is present. Navigation uses small circular icon buttons, a vertical edge rail, isolated lower-corner controls, and occasional circular back or close buttons. The selected mode may be represented by a colorful square tile or large centered word. Focused utility screens use a centered title on black and restrained back chrome. Sheets have broad rounded tops and may show a subtle handle. This section defines appearance only.

# Components

The principal outline action is 52–60 points high, transparent, white-stroked, and pill-shaped with a centered semibold label. Floating secondary controls are circular, charcoal or translucent, and visually compact while retaining a 44-point hit area.

Energy controls use a horizontal segmented-pill treatment with a clear yellow-gold active segment. Mode selection uses 64–76-point square tiles with 12–16-point radii, authored colorful icons, and restrained labels. Large mode states may replace most interface text with one condensed word. Timer selection appears in a broad dark sheet with a prominent numeric picker and compact confirmation control.

Settings use dark 12–16-point-radius cards or grouped rows with thin dividers. Toggles use yellow for the on state rather than native green. Achievement cells are dark rounded squares with authored badge silhouettes; locked states reduce contrast without changing the grid geometry.

# Imagery and icons

Authored imagery is structural: full-screen low-poly environments, atmospheric haze, clouds, celestial discs, simplified terrain, and isolated 3D objects carry the identity and state. Controls must be positioned around the focal landmark and readable horizon rather than placed over them. Mode and achievement icons inherit the same sculpted, faceted family.

The imagery cannot be omitted while final assets are pending. Temporary or generated art must preserve its full-viewport scale, horizon or central landmark, atmospheric depth, palette mass, and stable negative-space zones. Functional icons remain minimal and monochrome; arbitrary SF Symbols are not substitutes for authored mode art.

# States

Observed mode states change the environmental palette, central word, tile selection, and energy segmentation while keeping the HUD positions stable. Timer presentation dims or softens the underlying world and introduces a large charcoal sheet. Focused or rise states preserve full-screen scenery with different atmospheric color. Locked achievements retain the same dark grid and show reduced-contrast authored badges. Settings toggles use yellow when active. Native permission and purchase sheets may temporarily cover the dark shell and should return to the same visual context.

# iOS adaptation

Render the environment edge to edge beneath safe areas; keep HUD controls inset from the status bar and home indicator. Use layered overlays rather than putting the scene inside a rounded container. Compact heights should preserve the scene focal point, primary mode control, and exit/back control; move secondary choices into a sheet before shrinking the authored world.

All visually small HUD controls require at least 44-point hit targets. Sheets and settings lists scroll internally when Dynamic Type expands them. VoiceOver should identify the current atmosphere or mode before its controls, then follow the visible edge order. System permission and purchase UI remain native. Preserve the observed dark shell; do not fabricate a light appearance. Reduce Motion may simplify transitions without replacing the scene with static generic UI.

# Anti-generic checklist

- Do not replace the authored world with gradients, stock photography, or a decorative header image.
- Do not wrap the active scene in a card or cover it with opaque dashboard panels.
- Do not add an unstyled `TabView`, default blue tint, or a conventional bottom navigation bar.
- Do not use arbitrary SF Symbols for modes, achievements, or scene landmarks.
- Do not flatten all typography into regular SF Pro at similar sizes.
- Do not crowd the environment with prose, metrics, or redundant labels.
- Do not use the same palette for every atmosphere.
- Do not collapse circular HUD controls, square mode tiles, cards, and sheets to one radius.

</design-context>
