<design-context>
---
version: 1
platform: iOS
name: Haptic-design-analysis
description: "An airy white activity journal with oversized rounded cards, saturated violet actions, colorful category glyphs, sparse heavy type, focused bottom sheets, and a minimal bottom bar built around a central circular action."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F4F4F6"
  accent-primary: "#7445F5"
  accent-secondary: "#EEE8FF"
  text-primary: "#171719"
  text-secondary: "#85858C"
  divider: "#E7E7EA"
  destructive: "#E45460"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 15}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 22
  sheet: 30
  pill: 999
components:
  violet-action: {fill: "solid or softly graded violet", text: "white semibold", minHeight: 52, radius: 14}
  activity-card: {fill: "white", shadow: "very soft diffuse", radius: 22, padding: 16}
  category-tile: {fill: "category-tinted", icon: "small high-contrast glyph", radius: 12}
  central-action-navigation: {bar: "minimal white", action: "raised violet circle", inactive: "muted gray"}
---

# Overview

Haptic is visually sparse and tactile: broad white space, heavy display type, and large rounded surfaces carry more weight than decoration. Saturated violet appears as the decisive brand mass in onboarding, primary controls, toggles, selected navigation, and the raised central action. Small colorful category glyphs punctuate otherwise neutral screens. The combination of generous breathing room, low-contrast secondary UI, and task-focused bottom sheets distinguishes it from a default SwiftUI card list.

# Non-negotiable visual invariants

- Keep the viewport predominantly white or near-white, with violet reserved for the strongest action and selected state.
- Preserve conspicuous empty space around titles, primary values, and single-purpose forms.
- Use large rounded activity surfaces with barely visible, diffuse separation rather than borders or hard shadows.
- Present focused creation and editing surfaces as high-radius bottom sheets with a visible drag handle.
- Keep category identity compact: a colored rounded tile, a simple glyph, and a short label rather than a large illustration.
- Preserve a minimal bottom bar whose strongest element is a raised circular violet action at the center.
- Use large, heavy titles against much smaller pale-gray metadata; do not flatten the scale contrast.

# Color and surfaces

White is the continuous canvas and the dominant viewport mass. Primary cards remain white and separate from the canvas through spacing and an extremely soft shadow; pale neutral gray is reserved for input fields, inactive controls, disabled choices, and supporting panels. Violet is the sole repeated brand accent and may expand into a full onboarding field or wide action, while category colors remain small local signals.

Near-black is used for titles and important values, medium gray for metadata, and very pale gray for low-priority or unavailable UI. Completion may use restrained green, warnings warm amber, and destructive actions muted red. Default iOS blue would break the system when used for ordinary product actions; native system dialogs may retain system coloring.

# Typography

The hierarchy is SF-like, bold, and deliberately sparse. Onboarding statements and key headings use 30–38 point heavy display type; screen titles sit around 30 points; section heads use roughly 22 points; controls and body copy use 15–16 points; dates, statistics labels, and uppercase micro-labels sit around 11 points. Large values and titles are the first scan target, with pale metadata clearly subordinate.

Use SF Pro Display and SF Pro Text as the iOS-safe family. Allow supporting labels and metadata to wrap before shrinking primary values. With Dynamic Type, preserve the visual jump between title, body, and caption, move secondary rows vertically, and let icon grids reduce their column count rather than compressing labels illegibly.

# Screen composition

Screens generally begin below the top safe area with a large title or isolated prompt, followed by one dominant task or a vertical stack of broad cards. Horizontal insets are compact at about 16 points, but vertical gaps are generous, commonly 24–32 points. Cards approach the available width and use substantial internal padding. Long timelines and statistics scroll vertically; short forms remain centered with large surrounding negative space.

The visible archetypes are: a full-field onboarding page with one dominant statement and action; an airy activity overview made of stacked wide cards; an icon-grid chooser with evenly spaced category tiles; a centered single-purpose creation form; a statistics view combining calendar-like panels and compact charts; a profile/settings surface with restrained rows; and a rounded bottom sheet for logging, selecting, or editing. Bottom navigation and fixed actions reserve the lower safe area instead of covering scroll content.

# Navigation appearance

The primary bottom bar is visually light, white, and minimally divided from the canvas. Inactive destinations use small muted-gray symbols and labels; the selected state turns violet. A prominent circular violet action rises from the bar's center and is visually stronger than surrounding destinations. Deeper screens use compact back controls and restrained top actions. Modal tasks appear as high-radius bottom sheets with a centered drag handle and white surface.

# Components

Primary actions are wide violet controls with white semibold labels, a roughly 14-point radius, and at least a 52-point height. Some observed brand surfaces soften the violet with a subtle gradient, but the control remains a single coherent color mass. Disabled actions become pale gray rather than outlined.

Activity cards are broad white rounded rectangles with 16-point padding, restrained metadata, and extremely soft elevation. Category tiles are compact colored squares with small symbolic glyphs and short labels; their color varies by category while their geometry stays consistent. Toggles use violet in the on state and neutral gray off. Text-entry fields sit on pale-gray rounded surfaces. Pricing selectors, calendar/stat panels, and compact charts reuse the same low-border rounded language. Pressed states should darken or reduce opacity within the established color rather than introducing a new tint.

# Imagery and icons

Imagery is subordinate to layout and data. Category glyphs are small, simple, and contained in tinted rounded squares; occasional cover art may use the same compact container. Gradients and blurred color fields function as brand decoration, not as a standalone illustration language. Charts are sparse and use thin marks or small filled regions. Avoid large decorative scenes, stock photography, or arbitrary oversized SF Symbols that would compete with the negative space and typography.

# States

Observed populated views preserve the white canvas, violet selection, rounded surfaces, and muted metadata. Selected categories and controls become violet or category-colored while unselected options stay pale. Disabled choices recede to very light gray. Completed or saved feedback may use restrained green; destructive actions use muted red. Paywall selection, action sheets, keyboard entry, and bottom-sheet editing keep the same large-radius geometry and sparse hierarchy rather than switching to an unrelated native form appearance.

# iOS adaptation

Extend white or branded onboarding fields through both safe areas while keeping readable content inside 16-point horizontal insets. Use vertical scrolling for card stacks, timelines, statistics, and icon grids; inset content so the bottom bar and raised action never obscure the last item. Present task sheets with native interactive dismissal and keyboard avoidance while retaining the observed radius, handle, and padding.

All symbols, tiles, toggles, and controls need at least 44-point targets. VoiceOver should read the large title or primary value before supporting metadata, then actions in visual order. Dynamic Type should reflow card contents and reduce grid columns rather than truncate meaningful labels. The sampled reference is light-led; do not invent a dark palette without product requirements. On compact widths, preserve card width, violet action prominence, and generous vertical spacing before retaining extra columns.

# Anti-generic checklist

- Do not replace the white field and sparse rhythm with a gray grouped `Form` or a dense universal card stack.
- Do not use default blue tint for primary actions, toggles, or selected navigation.
- Do not ship an unstyled `TabView`; preserve the muted bar and raised central violet action.
- Do not give every icon a random SF Symbol treatment or remove the consistent colored category containers.
- Do not replace focused bottom sheets with full-screen generic forms.
- Do not add hard borders, strong drop shadows, or equal emphasis to every card.
- Do not fill deliberate negative space with decorative copy, imagery, or extra metrics.

</design-context>
