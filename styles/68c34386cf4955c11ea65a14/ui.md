<design-context>
---
version: 1
platform: iOS
name: Magnifier-design-analysis
description: "A high-contrast camera utility dominated by a full-screen live view, a dark translucent rounded control deck, dense circular white-on-charcoal tools, yellow active feedback, native dark settings, and minimal system typography."
colors:
  canvas: "#090909"
  surface-primary: "#1D1D1F"
  surface-secondary: "#2C2C2E"
  accent-primary: "#FFD83D"
  accent-secondary: "#34C759"
  text-primary: "#FFFFFF"
  text-secondary: "#B8B8BC"
  divider: "#39393D"
  destructive: "#FF453A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 29}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 17, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 500, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 12
  card: 16
  sheet: 24
  pill: 999
components:
  control-deck: {fill: "translucent graphite", radiusTop: 24, height: "quarter to third of viewport"}
  circular-tool: {fill: "surface-secondary", icon: "white line", selected: "yellow"}
  adjustment-slider: {track: "charcoal", thumb: "white or yellow", endpoints: "minus and plus"}
  status-pill: {fill: "accent-primary", text: "black uppercase", radius: 999}
  configuration-row: {fill: "surface-secondary", height: 48, controls: "check, add, remove, or drag"}
---

# Overview

Magnifier is a camera-first utility whose main visual field is live imagery rather than an application canvas. A dark translucent control deck occupies the lower quarter to third of the screen, keeping dense circular tools legible without fully hiding the camera. Bright white controls, graphite surfaces, and yellow selection or feedback create an accessibility-oriented, high-contrast system that continues into native dark settings and modal screens.

# Non-negotiable visual invariants

- Live camera imagery fills the viewport and remains visible behind the primary controls.
- A dark translucent deck with large rounded top corners anchors the lower quarter to third of camera screens.
- Tools are circular charcoal controls with white line icons; active tools, slider thumbs, checks, and feedback use bright yellow.
- The central capture control is visually larger than surrounding utility controls and remains aligned near the bottom safe area.
- Adjustment controls use dense horizontal slider rows with clear minus and plus endpoints above or within the tool deck.
- Immediate mode feedback appears as compact yellow pills with high-contrast black labels over the camera image.
- Configuration screens switch to opaque native dark grouped lists with white labels, gray supporting text, and yellow navigation actions.
- Camera, filter, and captured-image content remains functional imagery; decorative illustration is not introduced.

# Color and surfaces

Camera pixels provide the variable full-screen background. Interface surfaces are black and graphite: a near-black base around `#090909`, translucent primary panels around `#1D1D1F`, and circular or grouped secondary controls around `#2C2C2E`. Dividers are subdued charcoal so control grouping is visible without reducing camera contrast.

Bright yellow around `#FFD83D` is the defining state color for selected icons, active slider elements, checks, navigation actions, and floating status pills. White carries primary labels and icons; cool gray carries helper text and disabled controls. Green and red remain bounded to add/success and removal/destructive controls. Default iOS blue would visibly contradict the yellow-on-black state language.

# Typography

Use SF Pro Display and SF Pro Text. Camera HUD labels are compact, often uppercase, and approximately 11-12 points semibold inside yellow pills. Circular tools rely primarily on icons with concise adjacent labels where needed. Dark modal or settings titles are about 20-24 points bold, list labels 15-17 points regular or semibold, and helper text 12-15 points gray.

Typography stays literal and sparse because imagery and controls carry the hierarchy. Centered modal titles and edge-aligned yellow actions follow native iOS patterns; settings copy is left-aligned. Dynamic Type should increase row, field, and modal height while keeping camera controls spatially stable and avoiding label collisions with sliders or circular tools.

# Screen composition

The camera archetype uses a full-bleed live view from the status area to the home indicator. A bottom deck with a centered grabber or chevron rises above the lower safe area. Its upper row holds a full-width adjustment slider; lower rows place several secondary circular tools around one larger central capture control. Floating yellow feedback stays near the image edge rather than covering the focal center.

An expanded-tool archetype adds a horizontal strip of rectangular image swatches or additional controls above the core deck. A multi-image state introduces concise top copy and a bottom pill while preserving the live-view field. Native share sheets overlay and dim the camera context.

Configuration archetypes replace the camera with a full-height black or grouped-dark canvas. They use 16-20 point side insets, 44-52 point rounded rows, section headers, drag handles, add/remove controls, or checkmarks. Keyboard forms use a dark field and preserve the bottom safe area around the keyboard.

# Navigation appearance

Camera screens avoid a conventional tab bar; navigation and mode controls are integrated into the lower deck. The deck uses a small centered expansion affordance, circular icon groups, and a visually dominant central action. Selected state is yellow rather than blue.

Deeper full-screen surfaces use native dark navigation bars with centered titles and compact edge actions in yellow. Modal forms, share sheets, and the keyboard follow system geometry. Back and completion controls remain ordinary text or icon affordances rather than oversized branded buttons.

# Components

The control deck is a translucent graphite panel with roughly 24-point top corners, tight 12-point gaps, and a small centered grabber. Circular tools are at least 44 points, use charcoal fill and white line icons, and switch their icon, ring, or adjacent indicator to yellow when selected. The capture control is materially larger and may use a bright white face or ring.

Adjustment sliders span most of the deck width, use a dark track, white or yellow thumb, and recognizable minus and plus endpoints. Filter choices appear as small rectangular camera-derived thumbnails with a yellow check for selection. Status feedback uses a bright yellow pill and compact black uppercase label.

Configuration rows use opaque dark rounded rectangles, white labels, optional gray descriptions, and trailing checkmarks, drag handles, green add controls, or red remove controls. Disabled completion actions turn gray; active completion actions turn yellow. Destructive swipe reveals a solid red block.

# Imagery and icons

Live or captured camera imagery is the primary visual content and must retain full-viewport scale. Filter thumbnails are transformed samples of that same imagery, not decorative cards. Camera content should not be arbitrarily cropped independently of the visible zoom state, and overlays must avoid obscuring the central recognition area. This imagery layer cannot be omitted while final capture integration is pending; a temporary camera/sample frame must preserve its full-screen role.

Icons are concise SF-symbol-like line forms in white, yellow when active, and gray when unavailable. They sit in consistent circular containers and are supported by visible state feedback. No stable authored illustration system appears in the sampled screens; do not add decorative scenes or treat instructional symbols as illustrations.

# States

Observed states include default camera view, active yellow tool, yellow status label, zoom and image-adjustment changes, selected filter with yellow check, expanded tool deck, multi-image capture with a view pill, share sheet, dark naming form with keyboard, disabled and enabled completion action, customized control list, green add control, red remove control, drag ordering, and selected activity or filter checkmark. Full-screen imagery, dark controls, white legibility, and yellow selection remain constant.

# iOS adaptation

Extend the camera view through the full screen while keeping the deck, top feedback, and capture controls within safe areas. Use a bottom safe-area inset for the deck and home indicator, native keyboard avoidance for forms, and internally scrolling grouped lists when Dynamic Type increases row height. Share sheets and modal forms should use current iOS presentation behavior.

All circular tools, slider endpoints, drag handles, filter cells, and navigation actions require at least 44-point hit regions. VoiceOver should identify the live view context, current mode, slider value, tools in visual order, central capture action, then deck expansion. On compact widths, reduce the number of simultaneously visible secondary tools or allow horizontal scrolling rather than shrinking targets. Preserve strong contrast over unpredictable camera frames with dark materials and clear state tinting; do not auto-convert the authored dark control system to a light panel.

# Anti-generic checklist

- Do not replace the live full-screen camera field with a conventional page background or card preview.
- Do not use default blue selection; active controls and navigation actions are yellow.
- Do not flatten the bottom deck into a standard toolbar or unstyled `TabView`.
- Do not make all controls equal-sized; the capture action remains dominant.
- Do not use low-contrast thin controls or hide the current mode against camera imagery.
- Do not build configuration screens as default light `Form` sections.
- Do not crop or cover the center of the camera view with decorative content.
- Do not invent illustrations, promotional cards, or product navigation from this utility reference.

</design-context>
