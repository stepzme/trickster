<design-context>
---
version: 1
platform: iOS
name: Open-design-analysis
description: "A sparse black onboarding interface pairing full-bleed close-up human photography with widely spaced white branding, understated form typography, hairline inputs, and a floating white circular next control."
colors:
  canvas: "#000000"
  surface-primary: "#111213"
  surface-secondary: "#252627"
  accent-primary: "#FFFFFF"
  accent-secondary: "#B9D8D2"
  text-primary: "#F7F7F5"
  text-secondary: "#A5A6A4"
  divider: "#424342"
  destructive: "#D55252"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 600, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 600, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 500, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 24
  section-gap: 32
  card-padding: 16
  control-gap: 14
rounded:
  control: 16
  card: 22
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "white", text: "black", shape: "circle or pill"}
  secondary-action: {fill: "black", text: "white", shape: "thin outlined pill"}
  primary-card: {fill: "black", content: "single prompt or sparse form", shape: "unframed"}
  navigation: {fill: "black or transparent over photo", selected: "white", accessory: "minimal back or close icon"}
---

# Overview

Open's inspected onboarding is cinematic and extremely sparse. Near-black form screens alternate with full-bleed close-up human imagery. Widely spaced branding, thin rules, modest white type, and one floating circular next control create the identity.

# Non-negotiable visual invariants

- Black fills form screens edge to edge.
- Opening imagery is full-bleed, close, and human rather than contained in a card.
- The wordmark uses large white type with visibly wide spacing over imagery.
- Forms leave substantial empty black space around one prompt.
- Text inputs are underline-led or nearly unframed.
- Progression uses a floating white circular control near the lower trailing edge.
- Helper labels remain small and quiet; they never compete with the prompt.

# Color and surfaces

Use pure black for the canvas, nearly black for the few grouped controls, white for primary text and actions, and medium gray for secondary copy and rules. A soft blue-green avatar gradient may appear as an isolated placeholder, not a recurring decoration. Error red remains semantic. Bright default blue and light card surfaces would break the reference.

# Typography

Use SF Pro with regular or light form copy and restrained bolding. The photographic wordmark is large and widely spaced; form titles are smaller than a conventional hero and stay left aligned. Compact uppercase helper labels may punctuate fields. Dynamic Type expands the sparse vertical layout and wraps prompts without filling the intentional empty space with extra copy.

# Screen composition

Photo-led opening screens use edge-to-edge face imagery with branding and limited actions overlaid. Form screens place a back or close control at top, one prompt and underline input in the upper-middle, large empty black space, and a circular next control near the lower trailing region. Keyboard-active layouts compress vertically but retain the same left edge and bottom progression. Choice screens use a small number of outlined pills or rows.

# Navigation appearance

Navigation is nearly invisible: a white back arrow or close symbol on black or photography, plus the isolated circular next control. There is no evidence for a persistent tab bar in the inspected set. Native permission dialogs remain visually native. The appearance does not imply a product navigation structure.

# Components

Primary progression is a white circle with a black arrow; broader commitments may use white pills with black labels. Secondary actions are black with thin white or gray outlines. Text fields use a baseline, small label, and validation check rather than a filled card. Multi-select choices use restrained outlined pills. Disabled or loading next controls remain circular and reduce contrast.

# Imagery and icons

Full-bleed close-up human photography is compositionally essential on the opening screens and cannot be omitted pending final assets. Profile photography appears later. The wordmark, functional icons, and the isolated gradient avatar are separate elements; none establishes an authored illustration system.

# States

Observed states include photographic introduction, sign-in and account creation choices, empty and filled inputs, validation success, loading, disabled progression, selected choices, profile image, and native notification permission. Black canvas, sparse copy, and minimal white controls remain constant.

# iOS adaptation

Crop full-bleed photography to protect faces across iPhone aspect ratios. Use safe-area-aware overlays and keyboard avoidance while keeping the progression control reachable and at least 44 points. Dynamic Type grows prompt blocks upward and expands choice rows. VoiceOver reads prompt, field state, helper, then next action. Native permission prompts remain untouched; app-owned fields preserve the dark styling.

# Anti-generic checklist

- No white card stack on a gray background.
- No default blue buttons or links.
- No dense onboarding prose.
- No large filled text fields replacing hairline inputs.
- No generic bottom tab bar invented from absent evidence.
- No decorative gradients beyond the isolated observed avatar treatment.
- No replacement of full-bleed human photography with illustration.
</design-context>
