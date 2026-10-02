<design-context>
---
version: 1
platform: iOS
name: Opal-design-analysis
description: "An immersive near-black focus interface built from atmospheric full-screen media, translucent blurred glass panels, luminous collectible gem objects, white pill actions, compact sans-serif hierarchy, custom outline navigation, and shifting cyan-violet-mint accents emitted by content rather than a flat brand tint."
colors:
  canvas: "#050506"
  surface-primary: "#191A1D"
  surface-secondary: "#292A2F"
  accent-primary: "#B9FFD0"
  accent-secondary: "#5AB8FF"
  text-primary: "#F7F8F8"
  text-secondary: "#AEB0B5"
  divider: "#3C3D43"
  destructive: "#F0646A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 36}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 18
  card: 26
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "#F7F8F8", text: "#111214", cornerRadius: 999, minHeight: 52}
  glass-panel: {fill: "translucent-charcoal", text: "{colors.text-primary}", cornerRadius: 26, padding: 16}
  gem-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 24, padding: 16}
  navigation: {fill: "translucent-black", selected: "#FFFFFF", unselected: "{colors.text-secondary}", minHeight: 62}
---

# Overview

Opal presents focus as an immersive environment rather than a utility dashboard. Near-black, smoky gradients, cinematic moon or weather imagery, and subtle vignettes extend edge to edge. Controls float above those fields in translucent charcoal glass. Large glowing gem objects provide identity and progress, while white type and pill actions establish hierarchy. Accent color shifts with the active gem, session, badge, or media surface instead of behaving as one universal flat tint.

# Non-negotiable visual invariants

- Near-black or cinematic imagery fills the entire screen through both safe areas; opaque light canvases are exceptional setup states, not the default.
- Primary cards and controls use translucent blurred charcoal glass with subtle strokes and large radii rather than flat gray rectangles.
- A single luminous gem, mineral, milestone object, or atmospheric image often occupies the upper or central visual mass.
- Primary actions are high-contrast white or pale-mint pills while supporting actions remain dark glass.
- Custom bottom navigation and timer controls float over content with thin outline icons and bright-white selected emphasis.
- Accent colors arise as emitted cyan, violet, mint, blue, amber, or pink light from objects, progress, and media rather than broad flat fills.
- Session screens preserve large negative space and group timing, pause, break, or stop controls in the bottom third.
- Dense setup and settings screens retain glass surfaces, rounded pills, and dark atmospheric context despite higher information density.

# Color and surfaces

Black and near-black are the dominant masses, frequently modified by vertical banding, smoky blur, low-contrast vignette, or full-bleed cinematic media. Primary panels are translucent dark glass with background blur, a faint light stroke, and little conventional shadow. Some onboarding and permission choices become white or pale selected cards against the dark field.

White carries titles, selected navigation, and primary actions. Mint or pale green communicates constructive focus and start actions. Electric blue supports setup and permission guidance. Gems and media introduce cyan, violet, magenta, lime, amber, and coral as controlled emitted light. Destructive actions use coral red. Default iOS blue applied globally, opaque gray card stacks, or broad flat accent fields would break the atmospheric system.

# Typography

Typography is a compact, confident SF-like sans. Hero and state headings are bold, centered, and approximately 30-38 points. Section titles are 21 points and semibold or bold. Body and settings copy is smaller, light gray, and often centered in onboarding but left-aligned in forms and lists. Gem and milestone labels may use short display-like uppercase treatment.

Use SF Pro Display for hero, timer, and state headings and SF Pro Text for controls, schedules, settings, and metadata. Numeric durations and streaks should use tabular figures. Under Dynamic Type, explanatory text and schedule metadata wrap before the timer, focus score, gem title, or primary action loses prominence; glass panels grow vertically instead of clipping.

# Screen composition

Onboarding stages a small top mark or step context, a bold centered heading, stacked choices or one luminous object, and a broad bottom CTA. Permission and subscription surfaces keep the same vertical pacing, with selected cards or benefit content in the middle and action at the lower safe area.

Home is a long vertical composition: a large glowing gem in the upper half, progress or score copy below, horizontal rails of gem or focus cards, additional atmospheric modules, and persistent bottom navigation or timer control. The hero object and surrounding negative space establish the initial viewport; later sections become denser without losing the dark atmospheric field.

Active sessions become full-bleed cinematic screens with timer or state in the upper-middle and glass controls grouped in the lower third. Setup, template, sleep, profile, achievement, and settings screens use stacked glass rows, section labels, pills, toggles, mini charts, and gem grids. Sheets rise over a full-screen dark overlay with a grabber and rounded top.

# Navigation appearance

Navigation is custom and visually light. Top controls are small circular glass buttons containing close, down, share, edit, or menu glyphs; headings may sit directly on the background without a bar container. Modal and setup screens use a compact back or close affordance at the safe-area edge.

The persistent bottom bar floats over content as a translucent black-glass surface with thin outline icons. Active state is bright white, while inactive items are subdued gray. Timer actions may occupy a separate docked pill cluster. Sheets use a dark overlay and rounded glass or charcoal panel rather than an opaque system-white card, except native permission UI where observed.

# Components

Primary actions are wide white or pale-mint pills about 52 points high with dark semibold labels. Secondary actions are dark translucent pills with white or gray text. Glass panels use 24-30 point radii, background blur, faint borders, and generous but not oversized padding.

Home gem cards combine a glowing collectible object, short label, progress or ownership state, and compact action. Focus or session cards combine atmospheric image, title, schedule or benefit, and one local pill action. Template and setup rows use dark fields, toggles, selection chips, and section labels while retaining glass material.

Profile and achievement areas use compact stat cards, mini charts, badges, and repeated gem states. Session controls use stable circular or pill buttons for pause, break, edit, and stop. Loading keeps the same glass geometry with spinner or progress label; selected choices become white or strongly outlined rather than default-blue rows.

# Imagery and icons

Cinematic moon, space, mist, rain, thunder, observatory, and soundscape imagery creates session atmosphere. These are media or content art, not the stable illustration family. Crop them cover-style through the screen or rounded card, preserving a dark region for white labels and controls.

A separate authored 3D gem and milestone system supplies luminous collectible objects, unlocked and locked progress states, and hero focal points. Follow illustrations.md for generation and asset integration. Functional icons are thin monochrome symbols attached to rows, tabs, pills, and circular glass buttons. Charts remain sparse line, bar, or grid data graphics. Compositionally important imagery and gems must keep their scale and light mass while final assets are pending.

# States

Loading appears as a spinner over a subscription surface or a progress message within the Home composition. Active session, break, and early-end states retain the cinematic background while changing lower control clusters and state copy. Selected onboarding or setup choices become white or strongly highlighted cards on dark.

Screen Time and Face ID access use native iOS permission UI or setup panels without imitation. Empty or lightweight states such as a new list, single-person leaderboard, or initial support conversation preserve glass surfaces and broad dark space. Sheets and edit panels keep the underlying context visible through dimming. No explicit error state was observed.

# iOS adaptation

Extend black, atmospheric media, and vignette through both safe areas. Use vertical scrolling for Home, gem browsing, templates, profile, achievements, settings, and support; reserve bottom inset for floating navigation and timer docks. Active session imagery should remain full-bleed with controls protected above the home indicator.

Pills, circular glass buttons, tabs, session controls, rows, and gem cards need 44-point targets. On compact widths, reduce secondary copy and grid columns before shrinking the hero gem, timer, or primary action. Preserve VoiceOver order from state and duration through controls, constraints, and next action. Dynamic Type should expand glass panels. The observed system is dark; do not substitute a generic light appearance.

# Anti-generic checklist

- Do not replace the atmospheric black field with a plain grouped background.
- Do not flatten glass panels into opaque uniform gray cards or add heavy conventional shadows.
- Do not use a single flat accent color where the reference relies on emitted gem and media light.
- Do not render the bottom navigation or timer dock as an unstyled tab view or toolbar.
- Do not replace cinematic session media or luminous gem heroes with gradients, SF Symbols, emoji, or SwiftUI shape drawings.
- Do not mix locked stones, unlocked gems, photography, charts, and functional icons into one asset family.
- Do not remove the large negative space surrounding timer, focus score, or hero object.
- Do not let dense settings forms abandon the rounded glass geometry and dark context.

</design-context>
