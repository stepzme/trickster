<design-context>
---
version: 1
platform: iOS
name: APP-NAME-design-analysis
description: "One concrete sentence describing the app's dominant mobile visual language, including its main color field, hierarchy, surfaces, type character, navigation appearance, and imagery role."
colors:
  canvas: "#000000"
  surface-primary: "#000000"
  surface-secondary: "#000000"
  accent-primary: "#000000"
  accent-secondary: "#000000"
  text-primary: "#000000"
  text-secondary: "#000000"
  divider: "#000000"
  destructive: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 18}
spacing:
  screen-horizontal: 20
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 14
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {}
  secondary-action: {}
  primary-card: {}
  navigation: {}
---

# Overview

Describe the visual impression of the real iOS screens. Identify what dominates the viewport and what makes the app recognizably different from a generic SwiftUI application.

# Non-negotiable visual invariants

List five to eight properties that must survive adaptation to another product. Use observable statements, for example: the background is a full-screen color field; the main metric occupies roughly the upper third; navigation is a translucent floating pill; illustrations occupy at least a quarter of promotional cards.

# Color and surfaces

Define the roles of the canvas, primary and secondary surfaces, accents, text, dividers, success, warning, and destructive color. Explain large color masses and gradients, not only token values. State which generic system colors would visibly break the reference.

# Typography

Describe hierarchy, scale contrast, weight, alignment, casing, numeric treatment, and wrapping. Map styles to iOS text roles and explain how the hierarchy survives Dynamic Type. Do not copy unavailable brand fonts without naming an iOS-safe substitute.

# Screen composition

Describe the repeated top, middle, and bottom structure of the sampled screens; typical edge insets; vertical rhythm; card width; scrolling behavior; safe-area treatment; and the proportion occupied by primary content, supporting content, and imagery.

Include the main screen archetypes actually visible in the reference. For each archetype, describe its composition rather than its product-specific copy.

# Navigation appearance

Describe only visual properties of tab bars, navigation bars, sheets, back controls, and selected states. Product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Describe only characteristic components visible in the reference. For each, include geometry, fill, border, typography, icon treatment, spacing, and selected/pressed/disabled appearance when observed. Native behavior may remain native, but default appearance is not acceptable when it contradicts these properties.

# Imagery and icons

Describe the visual weight, placement, crop, scale, palette, and relationship of photography, illustration, symbols, charts, or decorative objects to nearby text. If imagery is compositionally important, explicitly state that it cannot be omitted while waiting for final assets.

# States

Describe observed empty, populated, selected, completed, error, permission, and modal states only when visible. State which visual properties remain constant across states.

# iOS adaptation

Explain how to preserve the reference on current iPhone sizes using SwiftUI or UIKit: safe areas, scroll containers, keyboard, sheets, system permission transitions, 44-point targets, VoiceOver order, Dynamic Type, light/dark appearances when supported, and compact-width behavior.

Do not introduce desktop hover states, web breakpoints, top navigation, footers, marketing pricing cards, or pointer-only behavior unless they genuinely appear in the iOS reference.

# Anti-generic checklist

List the default SwiftUI substitutions that would destroy the reference, such as a generic white card stack, default blue tint, unstyled `TabView`, `Form` sections, arbitrary SF Symbols, missing imagery, or uniform corner radii.

</design-context>
