<design-context>
---
version: 1
platform: iOS
name: Pool-design-analysis
description: "Pool uses an airy white iOS screenshot library with editorial serif titles, floating cyan glass controls, large rounded onboarding sheets, tactile duck artwork, and screenshot mosaics as the dominant content."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F2F2F1"
  accent-primary: "#8BD6FF"
  accent-secondary: "#FFC21C"
  text-primary: "#202027"
  text-secondary: "#7A7A82"
  divider: "#E5E5E2"
  destructive: "#E84855"
typography:
  hero: {fontFamily: "New York", fontSize: 40, fontWeight: 500, lineHeight: 44}
  title: {fontFamily: "New York", fontSize: 30, fontWeight: 500, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 500, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 32
  card-padding: 20
  control-gap: 12
rounded:
  control: 24
  card: 28
  sheet: 32
  pill: 999
components:
  primary-action: {fill: "#8BD6FF", foreground: "#FFFFFF", cornerRadius: 999, height: 54}
  secondary-action: {fill: "#F2F2F1", foreground: "#202027", cornerRadius: 999, height: 48}
  primary-card: {fill: "#FFFFFF", foreground: "#202027", cornerRadius: 32, shadow: "soft"}
  navigation: {fill: "#BDEAFFCC", selected: "#FFFFFF", unselected: "#FFFFFF"}
---

# Overview

Pool is visually led by the user's screenshot collection on a sparse white canvas. The app identity comes from an editorial serif title voice, cyan floating glass controls, rounded oversized setup sheets, a small yellow duck mascot, and tactile 3D/painted objects that sit above or around the content without replacing it.

# Non-negotiable visual invariants

- Screenshot thumbnails are the dominant working content and appear as airy mosaics with large white gaps.
- Page titles such as Pool and Pools use an editorial serif, while controls and settings rows use system sans.
- The yellow duck mascot is a persistent brand object on entry, onboarding, and library screens.
- Floating controls use soft cyan or frosted white fills, pill geometry, blur, glow, and very light shadows.
- Onboarding sits on a blue watercolor-like background with a large white rounded sheet in the lower portion.
- Pool covers are pale rounded containers holding small clustered screenshots, not generic folder icons.
- Settings rows use soft grouped gray surfaces with line icons, right chevrons, toggles, and segmented controls.
- Destructive actions are red text/icons inside the same calm grouped settings language.

# Color and surfaces

The primary working canvas is pure white. Secondary surfaces are warm light gray groups, empty pool covers, text areas, and settings rows. The main accent is a soft cyan-blue used for search, add, selected navigation, and continue controls. A yellow-orange duck and pink inflated number provide brand accents. Text is near-black for titles and labels, with gray secondary copy. Dividers are extremely light. The observed dark treatment is limited to content thumbnails and referenced media; the app's visible settings and library baseline are light.

# Typography

Use an iOS-safe editorial serif such as New York for the visible display role: large centered Pool/Pools titles and onboarding questions. Use SF Pro Text for buttons, metadata, settings rows, counts, hints, and screenshot labels. The serif should remain moderate weight, not bold display advertising. Onboarding copy is centered; settings and controls are left aligned. The small POOL.DAY wordmark appears in uppercase at the status-bar level. Dynamic Type should preserve the contrast between expressive serif headings and compact sans controls.

# Screen composition

Home and library screens use a full white canvas with top safe-area wordmark, a small duck at upper left, a centered serif title, a pink 3D count at upper right, and a grid of screenshots below. Bottom navigation floats over content as a cyan translucent pill, with a separate round search or add control near the lower right.

Onboarding uses a full-screen blue watercolor field. A duck floats near the top and a large white sheet with 32 point corners holds the question, step indicator, optional object artwork, chips or input area, and a bottom pill action.

Detail screens center a screenshot preview in the viewport, with translucent round edge controls for close, share, menu, add, delete, and related actions. Search uses a bottom sheet above the keyboard with suggested category chips and a cyan search field. Pools screens use large rounded empty or populated cover tiles and sparse labels underneath. Settings screens scroll vertically through grouped gray row clusters.

Main visible archetypes are entry/login, onboarding/personalization sheet, screenshot mosaic library, screenshot detail viewer, search sheet, pools grid, and settings/profile list.

# Navigation appearance

Navigation is mostly floating and object-like. The bottom switcher is a wide translucent cyan pill with two labels, a stronger selected capsule, and soft glow. Search and add appear as separate circular cyan glass buttons. Close/back/share/menu controls are pale frosted circles or pills placed near screen edges. Settings use a close circle at upper left and keep the POOL.DAY wordmark centered above the content.

# Components

Primary actions are large cyan gradient-like pills with white centered labels. Secondary onboarding options are rounded light gray pills in a two-column grid; selected chips gain a subtle gray selected fill and a checkmark.

Onboarding cards are white sheets with very large corner radii, centered serif headings, tiny progress marks, soft circular close/back controls, and abundant internal whitespace.

Screenshot thumbnails are small raster images with native aspect ratio, arranged in 3 or 4 columns with open gutters. They should not be boxed into uniform cards unless the source image itself has a device frame.

Pool cards are rounded pale covers, sometimes wide and sometimes square, containing small overlapping screenshot clusters. Empty covers remain pale and lightly textured rather than outlined.

Settings rows are grouped rounded rectangles with light gray fill, left icon capsule, label, optional description, trailing chevron or toggle, and thin internal dividers. Segmented controls for appearance and columns sit inside the same grouped section.

Detail controls are frosted circular buttons with muted glyphs and soft shadow; the central screenshot remains the visual anchor.

# Imagery and icons

User screenshots are the main imagery and must remain unmodified in color. Authored brand imagery includes the yellow duck, pink inflated count, blue watercolor background, small rendered motifs such as a globe or flame, and product mockups inside onboarding. Icons are simple line glyphs in neutral gray or white inside glass controls. The duck and rendered objects are not interchangeable with flat symbols; they provide the product's tactile layer.

# States

Observed states include login entry, onboarding choices, iOS photo permission prompt over the blue illustrated setup screen, populated screenshot grid, scrolled grid, screenshot detail viewer, search sheet with keyboard, pools overview, settings toggles/segmented controls, and destructive account rows. Across states, the light canvas, editorial title, duck/3D landmarks, cyan glass controls, and soft rounded groups remain stable.

# iOS adaptation

Respect top and bottom safe areas while keeping the wordmark, duck, title, and floating bottom controls in the same visual zones. Grids must adapt by changing column count and spacing rather than stretching thumbnails. Keep floating controls at least 44 points and maintain sufficient hit area around translucent buttons. VoiceOver order should prioritize close/navigation controls, title, primary content, then floating actions. Dynamic Type may expand settings rows and onboarding text, but it must not crowd the duck, step indicator, or bottom action. Keyboard-driven search should keep the rounded sheet above the keyboard with the cyan search field visible.

Do not introduce desktop hover states, web breakpoints, top navigation, footers, marketing pricing cards, or pointer-only behavior unless they genuinely appear in the iOS reference.

# Anti-generic checklist

- Do not replace the editorial serif titles with plain SF Pro headings.
- Do not turn the screenshot grid into uniform white cards or a standard photo picker.
- Do not replace cyan glass navigation with an unstyled `TabView`.
- Do not remove the duck, pink count, or authored objects from screens where they are part of the composition.
- Do not substitute SF Symbols, emoji, or SwiftUI shapes for authored brand art.
- Do not use default iOS blue instead of the soft cyan control system.
- Do not make onboarding a generic full-screen form; it needs the blue painted background and oversized rounded white sheet.
- Do not recolor or blur the user's screenshots except where the source screen itself shows blur under overlays.

</design-context>
