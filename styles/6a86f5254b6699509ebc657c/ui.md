<design-context>
---
version: 1
platform: iOS
name: Tolan-design-analysis
description: "An immersive companion interface built around a full-screen 3D cartoon alien world, deep navy-purple skies, saturated character color, white rounded onboarding controls, and sparse floating utilities over the scene."
colors:
  canvas: "#17142B"
  surface-primary: "#FFFDF8"
  surface-secondary: "#EEE9E4"
  accent-primary: "#6C4AE8"
  accent-secondary: "#22B8B0"
  text-primary: "#242131"
  text-secondary: "#756F7E"
  divider: "#DCD6D2"
  destructive: "#D95265"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 38, fontWeight: 700, lineHeight: 43}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Rounded", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 23}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 12
rounded:
  control: 16
  card: 24
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "white or deep plum", text: "deep plum or white", shape: "large circle or pill"}
  secondary-action: {fill: "translucent dark", text: "white", shape: "circle"}
  primary-card: {fill: "warm white", content: "short prompt or activity", shape: "large rounded"}
  navigation: {fill: "transparent over illustrated world", selected: "white or violet outline", accessory: "floating corner controls"}
---

# Overview

Tolan is an immersive illustrated world with UI layered on top. A blue companion, pastel alien terrain, stars, and cosmic lighting fill the viewport; onboarding prompts and in-world utilities remain sparse, rounded, and high-contrast so the world stays visible.

# Non-negotiable visual invariants

- The 3D cartoon alien world fills the screen rather than sitting inside a card.
- The companion or a clear world focal point occupies a major share of the viewport.
- Deep navy-purple space surrounds saturated blue, teal, pink, yellow, and green forms.
- Onboarding uses centered prompts and a large circular white progression control.
- In-world utilities float at corners or edges and do not form a heavy toolbar.
- Warm-white inputs and cards use generous rounded geometry.
- Authored character/world imagery is never replaced by generic symbols or gradients.

# Color and surfaces

Deep space navy and purple form the canvas. The character and terrain introduce saturated blue, teal, pink, yellow, and green. Warm white carries fields, primary circles, cards, and permission pre-prompts; dark plum carries text. Black translucent caption bars may overlay scenery. Violet or pink outlines indicate selected or magical states. Error red remains semantic.

# Typography

Use SF Pro Rounded for the logo and major prompts, with SF Pro Text for body and controls. Headings are bold and friendly; explanation is short and centered. Avoid long copy over detailed scenery. Dynamic Type may expand white prompt regions or captions, but must preserve the character and focal landscape.

# Screen composition

Splash and onboarding alternate warm off-white branding with full-screen cosmic scenes. Prompts center above or around large character/world imagery; inputs and a circular next action occupy the lower region. Active scene screens leave the 3D world exposed and place menu, notification, camera, chat, microphone, and pointer controls at edges. Permission pre-prompts use a custom rounded card before the native dialog.

# Navigation appearance

Navigation floats over the world: small circular menu and notification utilities near top corners and camera, chat, microphone, or compass-like controls near the bottom. Selected controls may gain a violet-pink outline or bright fill. Sheets use warm-white surfaces with broad corners. This appearance does not transfer source routing.

# Components

Primary actions are large white circles with dark symbols or deep-plum pills with white labels. Secondary controls are translucent dark circles with white icons. Inputs are wide warm-white pills. Prompt and permission cards use warm white, large corners, centered text, and optional character art. Disabled states reduce opacity while preserving the same toy-like geometry.

# Imagery and icons

The consistent 3D cartoon companion and alien landscape are the primary visual mass and cannot be omitted pending final assets. Clothing and accessory variants retain the same character construction. Functional icons are simple white or dark symbols inside circular controls; they support, never substitute for, the authored world.

# States

Observed states include splash, character introduction, empty and filled onboarding input, native and custom permission prompts, finding/loading a companion, communication/loading, active world, chat, and daily activity. Character style, cosmic palette, and floating rounded controls persist.

# iOS adaptation

Use aspect-fill for world backgrounds and protected focal regions for the character so cropping survives current iPhone sizes. Keep utilities inside safe areas with 44-point hit regions. Move input controls above the keyboard while maintaining visual contact with the scene. Dynamic Type expands cards rather than covering the character. VoiceOver order follows prompt, world description, controls, then action.

# Anti-generic checklist

- No generic chat list replacing the world.
- No gradient-only background standing in for character scenery.
- No white card stack covering most of the companion.
- No rectangular toolbar at the bottom.
- No arbitrary SF Symbols used as illustration.
- No flat unrelated mascot or stock 3D style.
- No omission of the world while final assets are pending.
</design-context>
