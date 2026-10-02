<design-context>
---
version: 1
platform: iOS
name: Wabi-design-analysis
description: "Wabi alternates pearl-white creator workspaces with a black immersive feed, using sparse SF typography, rounded collectible object cards, glossy generated spheres, black pill actions, and a floating five-icon dock."
colors:
  canvas: "#F8F8F6"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F0EE"
  accent-primary: "#111111"
  accent-secondary: "#27B8E6"
  text-primary: "#111111"
  text-secondary: "#777777"
  divider: "#E4E4E1"
  destructive: "#E05A64"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 700, lineHeight: 39}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 16
  card: 24
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "#111111", text: "#FFFFFF", radius: 999, height: 56}
  secondary-action: {fill: "#FFFFFF", text: "#111111", border: "#E4E4E1", radius: 999, height: 44}
  primary-card: {fill: "#FFFFFF", radius: 24, shadow: "soft"}
  navigation: {fill: "#FFFFFF", selected: "#111111", inactive: "#111111", radius: 999, height: 56}
---

# Overview

The observed Wabi iOS screens use two distinct but connected visual modes. Onboarding, creation, messages, and profile screens are quiet pearl-white workspaces with generous empty space, black text, black pill actions, soft-shadow white cards, and glossy generated object thumbnails. The feed switches to a near-black stage where one large rounded mini-app canvas dominates the viewport and the surrounding controls become thin white outlines, compact labels, and a floating dock.

# Non-negotiable visual invariants

- Light workspaces use a warm off-white canvas with white elevated controls and black decisive actions.
- The immersive feed uses a black canvas with one large rounded media or game surface occupying most of the screen width.
- Generated glossy spheres or object thumbnails provide the main color, not persistent chrome or tinted system bars.
- Primary actions are black full-width pills on light screens and white or outlined pill controls on black feed screens.
- The bottom navigation is a floating five-icon dock; selected state is a filled black icon or black circular center action.
- Mini-app and profile grids use large white rounded tiles with one centered circular object preview and very little metadata.
- Sheets dim the underlying screen and keep rounded white or charcoal panels with a visible grabber or strong top radius.

# Color and surfaces

Wabi's light canvas is a warm pearl white rather than pure iOS white. Cards, search fields, phone fields, and sheets sit on top as white surfaces with soft ambient shadows. The inverse feed is nearly black, with the mini-app canvas clipped into a tall rounded rectangle and separated by subtle outline or shadow.

Black is the stable brand accent: it fills primary buttons, selected chips, selected dock icons, and key labels. Cyan appears as small badges and credit indicators, while violet, yellow, orange, and teal come from generated objects inside thumbnails or onboarding bubbles. Generic iOS blue would visibly break the reference except inside system permission alerts that remain native.

Text is near-black on light screens, white on dark screens, and medium gray for helper copy, timestamps, subtitles, and inactive chips. Dividers are minimal; separation mostly comes from whitespace, rounded surfaces, and shadow. Destructive states were only indirectly visible through report/delete flows in the catalog, so keep destructive color restrained and do not let it become a brand accent.

# Typography

The hierarchy uses SF-style rounded system typography with bold compact titles and plain body copy. Onboarding headlines are centered, large, and sentence-case, while workspace titles such as "Create" and "Messages" are left-aligned, heavy, and close to the safe area. Feed captions, counts, and interaction labels are small and dense so the generated canvas remains dominant.

Numeric content is compact: phone input digits, verification boxes, credit counts, likes, comments, and save counts sit in small labels or badges. Keep tab and chip labels short; selected labels may use semibold text on a black pill. At Dynamic Type sizes, let secondary labels wrap or truncate before reducing the primary object thumbnail, feed canvas, or main title hierarchy.

# Screen composition

Light screens use approximately 12-16 point side insets, a top title or logo row, and large vertical gaps. Onboarding centers a cluster of glossy bubbles above a centered headline and pins the primary action near the lower third above the keyboard or home indicator. Phone verification places a single frosted input row or verification boxes in the upper half and keeps the number keyboard native below.

Home and Create use a sparse two-column card grid. Each tile is about half the screen width, with a large circular rendered object near the top and a short label underneath. Messages use a white search field, small segmented chips, and a vertical list with circular thumbnails and tight metadata. Profile centers the avatar and handle, then returns to the same two-column mini-app grid.

The feed composition is inverted: a black full-screen stage, small top account/header controls, one tall rounded mini-app canvas, engagement controls below the canvas, and a floating dock above the bottom safe area. Bottom sheets cover the lower portion with a large rounded panel and dimmed backdrop; permission alerts remain native iOS alerts over the Wabi screen.

# Navigation appearance

The bottom navigation is visually a floating white pill on light screens and a translucent or outlined dark pill on black feed screens. It contains five equally spaced icon-only items, with the middle create item often shown as a dark circular control and small blue notification badges. The selected tab is a filled black glyph or black circular item; inactive items are outline glyphs without text emphasis.

Back controls are circular or pill-like with soft shadow on light screens and dark translucent circles on black screens. Top utility controls such as notification, settings, share, search, and expand are small icon buttons with little or no label. Sheets use a centered grabber and large rounded top corners.

# Components

Primary buttons are tall black pills with white semibold labels and no decorative outline. Disabled buttons turn pale gray with muted text. Secondary and utility buttons are white or frosted pills on light screens, and outlined or translucent rounded pills on the black feed.

Mini-app tiles are white rounded rectangles with very soft shadow, a centered circular generated thumbnail, a compact title, and occasional tiny frosted labels such as draft or count badges over the thumbnail. Empty tile placeholders keep the same rounded shape and subtle shadow but omit content.

Search fields are white rounded capsules with a leading magnifier and muted placeholder. Segmented filters are compact pills; selected state is black fill with white text, unselected state is light gray or transparent with gray text. Credit panels and action sheets use large rounded white cards over a dimmed background, with internal progress bars or app-extension share rows.

Feed engagement controls are low-contrast but legible: outline hearts, comment bubbles, share icons, remix and save pills, tiny count bubbles, and circular in-canvas controls. Native permission alerts can stay native, but app-owned panels, chips, cards, and docks must match the observed fills, radii, and shadows.

# Imagery and icons

Imagery is compositionally important. Wabi's recognisable visual system depends on glossy, generated, orb-like objects: onboarding bubbles, mini-app thumbnails, draft icons, profile object cards, and in-feed game canvases. These objects should be treated as authored raster assets or generated images, not replaced by plain SF Symbols.

Photos appear as rounded avatars or embedded inside circular thumbnails. Interactive/game canvases use large screenshots or rendered scenes with rounded clipping and preserved aspect ratio. App icons are simple line-style glyphs with rounded strokes; avoid arbitrary symbol sets that introduce mismatched weight or filled system-blue accents.

# States

Observed states include onboarding, phone number entry, verification with empty code boxes, disabled Next button, native paste permission alert, populated home/create grids, messages filter selection, profile credit bottom sheet, share sheet, black feed save tooltip, and profile-photo edit view. Across these states, the same rules persist: pearl or black canvas, pill controls, large rounded surfaces, sparse typography, and object-led imagery.

Selected filters turn black with white text. Disabled actions are gray and low-contrast. Modal states dim the background and preserve the underlying layout enough to keep spatial context. The photo edit state is an all-black utility surface with a large rounded-square crop and minimal bottom actions.

# iOS adaptation

Preserve safe-area spacing at the top and bottom; the floating dock must clear the home indicator and should not collide with feed engagement controls. Use `ScrollView` or UIKit scroll containers for light grids and message lists, while keeping the primary feed canvas visually dominant on compact iPhones. Keyboard states should keep the main input and primary action visible above the native keyboard.

Use at least 44-point touch targets for dock icons, chips, back controls, share/save/remix controls, and sheet actions. VoiceOver order should follow the visual order: title or logo, primary object/card content, controls, then navigation. Let Dynamic Type expand titles and helper copy, but keep object thumbnails, feed canvases, and bottom navigation stable. The observed reference is light for workspaces and dark for feed; do not invent a generic automatic dark-mode inversion that removes this contrast.

# Anti-generic checklist

- Do not replace generated glossy objects with arbitrary SF Symbols, emoji, flat blobs, or empty placeholders.
- Do not turn light Wabi workspaces into a generic white `Form` or dense settings list.
- Do not use default iOS blue for buttons, selected states, verification controls, or tab selection.
- Do not flatten the black feed into ordinary white cards; it must remain an immersive stage around one large canvas.
- Do not use an unstyled `TabView`; the dock must look like the observed floating pill with icon-only items.
- Do not apply one uniform radius to every surface; pills, cards, sheets, avatars, and feed canvases have visibly different rounding.

</design-context>
