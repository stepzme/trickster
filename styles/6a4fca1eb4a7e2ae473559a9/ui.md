<design-context>
---
version: 1
platform: iOS
name: Numo-design-analysis
description: "A black-first productivity interface with heavy condensed white headings, electric-blue actions and task surfaces, charcoal rounded panels, large outline navigation, and occasional high-contrast photo-collage brand moments."
colors:
  canvas: "#090909"
  surface-primary: "#1A1A1A"
  surface-secondary: "#262626"
  accent-primary: "#2374FF"
  accent-secondary: "#9FC0FF"
  text-primary: "#FFFFFF"
  text-secondary: "#A7A7A7"
  divider: "#373737"
  destructive: "#F05252"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 800, lineHeight: 42}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 800, lineHeight: 33}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 700, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 20
  section-gap: 28
  card-padding: 18
  control-gap: 10
rounded:
  control: 16
  card: 22
  sheet: 30
  pill: 999
components:
  primary-action: {fill: "accent-primary", text: "white semibold", shape: "rounded rectangle or circle"}
  secondary-action: {fill: "surface-secondary", text: "text-primary", shape: "pill"}
  primary-card: {fill: "surface-primary", text: "text-primary", shape: "rounded panel"}
  navigation: {fill: "canvas", selected: "accent-primary", unselected: "text-primary"}
---

# Overview

Numo is a black-first productivity product with poster-like white headings, electric-blue task and action emphasis, charcoal panels, and a large icon-label bottom bar. Most working screens remain stark and functional, while onboarding briefly introduces zebra pattern, photo cutouts, oversized type, and mixed brand assets. The defining system is the contrast and typography, not a reusable illustration language.

# Non-negotiable visual invariants

- Near-black fills the entire app-owned viewport, including safe-area regions.
- Heavy, compact white display headings create poster-level contrast against the black field.
- Electric blue marks primary actions, selected navigation, active toggles, and prominent task surfaces.
- Charcoal rounded panels group content without turning the screen into a light card stack.
- The bottom navigation is visually large, using outline icons and labels with an unmistakable blue selected state.
- Filters and secondary controls use compact pills on dark surfaces.
- Photo-collage and zebra assets are reserved for branded onboarding moments, not repeated across utility screens.

# Color and surfaces

Near-black is the dominant canvas, with charcoal and slightly lighter gray used for panels, fields, and inactive controls. Electric blue is the sole strong app-owned accent across CTAs, selected tabs, switches, and task emphasis. White carries headings and primary content; medium gray carries descriptions and inactive labels; dark dividers separate rows. Red is reserved for destructive feedback. Pale or default system surfaces would break the immersive dark field, and default iOS blue must be tuned to the observed saturated electric treatment.

# Typography

Use SF Pro Display Black or Heavy as an iOS-safe match for the observed condensed poster voice, with SF Pro Text for working content. Hero headings use approximately 40 point extra-bold type with tight line spacing; titles use 30 point extra-bold; section labels use 20 point bold; task, form, and action text uses 15–16 point regular or semibold; metadata uses 12–13 point gray captions. Preserve the large weight and scale contrast under Dynamic Type, allowing screens and panels to scroll before shrinking the headline.

# Screen composition

Onboarding gives most of the viewport to an oversized headline and a high-contrast photo/collage or zebra-pattern brand block, with a blue action near the lower safe area. Working home screens use a strong title high below the status area, compact filters, and one or more charcoal task sections in a vertical scroll. Task creation and detail use single-column forms, dark fields, and blue commitment controls above the keyboard or bottom inset. Profile, settings, teams, hacks, and prioritizer views use rounded dark panels and list rows with broad 20-point outer insets. The large bottom bar remains attached to the lower edge.

# Navigation appearance

Bottom navigation is black or very dark, with generously spaced outline icon-label items; the selected item turns electric blue while unselected items remain white or gray. Focused screens use compact circular or plain back and close controls. Filters and content modes use dark pills with blue selected fill or label. App-owned modal panels use charcoal surfaces with large rounding, while the iOS keyboard and system controls remain native in form contexts.

# Components

Primary actions are saturated blue rounded rectangles or circles with white semibold labels and at least 44-point height. Secondary controls are charcoal pills with white labels and a blue selected state. Task cards use dark rounded panels, strong white title, muted supporting text, and a blue status or action region. Form fields use charcoal fill, compact labels, and clear blue focus. Toggles inherit the electric blue active state. List rows use restrained dividers, white labels, gray metadata, and simple outline icons. Pressed controls darken; disabled controls shift toward mid-gray while retaining their label.

# Imagery and icons

Imagery is concentrated in onboarding: cutout photography, zebra pattern, oversized type, and occasional mascot or app-icon assets. These mixed media elements should remain bold and high-contrast when used, but the observed screens do not define a consistent authored illustration grammar. Utility screens rely on outline icons, simple product graphics, and occasional emoji-like marks. Do not replace brand photography with programmatic shapes, and do not extrapolate isolated mascots into a character system.

# States

Observed states include multi-screen onboarding, populated home, task creation with keyboard, task detail, profile, settings, teams, hacks, prioritizer, selected filters, active toggles, and modal or form states. The black field, white typographic contrast, blue action hierarchy, rounded charcoal panels, and large navigation remain constant. Errors and destructive actions use red locally rather than changing the overall dark palette.

# iOS adaptation

Extend black through both safe areas, keep the bottom bar and blue actions clear of the home indicator, and use vertical scrolling for task, settings, and content panels. Move focused fields and final actions with the keyboard. App-owned sheets preserve dark charcoal surfaces; native keyboard and permission transitions may remain system-rendered. Back, tabs, filters, task actions, toggles, and navigation require 44-point hit regions. VoiceOver order should follow heading, task content or field labels, then status and actions. At large Dynamic Type, stack task metadata and allow panels to grow while retaining the poster-like heading. Preserve an intentional dark appearance; do not auto-generate a light equivalent.

# Anti-generic checklist

- Do not replace the black immersive canvas with a generic white or light-gray dashboard.
- Do not flatten the heavy poster heading and utility copy into one system text scale.
- Do not use an unstyled `TabView`, `Form`, `List`, toggle, or default tint.
- Do not soften electric blue into a minor accent or introduce competing bright colors.
- Do not fill the dark workspace with unnecessary cards, explanatory copy, or decoration.
- Do not substitute onboarding photography and collage with emoji, arbitrary SF Symbols, or SwiftUI shapes.
- Do not infer a reusable illustration system from mixed onboarding and mascot assets.

</design-context>
