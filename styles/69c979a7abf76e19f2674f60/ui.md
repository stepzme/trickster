<design-context>
---
version: 1
platform: iOS
name: Headspace-design-analysis
description: "A friendly wellness interface on white, animated by large warm orange-yellow illustration fields, occasional deep-purple sleep gradients, rounded pale cards, heavy conversational type, quiet three-item navigation, and blue action controls."
colors:
  canvas: "#FFFFFF"
  surface-primary: "#FFFFFF"
  surface-secondary: "#FAF4F4"
  accent-primary: "#FF7A1A"
  accent-secondary: "#0877F2"
  text-primary: "#202124"
  text-secondary: "#76777C"
  divider: "#E9E5E3"
  destructive: "#D95D5D"
typography:
  hero: {fontFamily: "Avenir Next", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "Avenir Next", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "Avenir Next", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "Avenir Next", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "Avenir Next", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "Avenir Next", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 18
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 999
  card: 16
  sheet: 28
  pill: 999
components:
  illustrated-card: {fill: "warm or purple authored art", radius: 16, text: "charcoal or white by contrast"}
  primary-action: {fill: "blue", text: "white semibold", radius: 999, minHeight: 52}
  playback-control: {fill: "charcoal", shape: "circle", icon: "simple high-contrast glyph"}
  quiet-navigation: {fill: "white", items: 3, inactive: "gray", selected: "black"}
---

# Overview

Headspace combines quiet white utility surfaces with expressive authored illustration. Warm orange and yellow art forms the dominant emotional mass in onboarding, home content, results, and playback; deep purple gradients distinguish sleep-oriented material. Rounded pale cards, heavy conversational headings, and pill or circular controls keep the interface friendly. Navigation remains deliberately quiet so illustration and the current practice lead.

# Non-negotiable visual invariants

- Keep white as the utility canvas while allowing authored art to form large warm color masses at the top or inside cards.
- Use orange and yellow as the emotional brand field, blue for primary interaction, and purple for darker sleep-oriented content.
- Preserve large friendly headings with much smaller compact metadata.
- Use rounded white sheets and pale cards over colorful illustration fields rather than shadows or borders.
- Keep the three-item bottom bar visually quiet, with gray inactive and black selected treatment.
- Center illustration, concise copy, and one action in empty and result states.
- Present selectors in high-radius bottom sheets over a dimmed backdrop with a visible drag handle.
- Make playback a focused full-screen composition with an unmistakable large circular control.

# Color and surfaces

White is the base for discovery, profile, forms, and navigation. Soft pink and warm off-white create secondary card surfaces. Orange-yellow can expand across a header, card, or playback region and should read as one confident field. Purple gradients carry darker rest or sleep moods. Blue is reserved for clear actions, selection rings, radio marks, and progress emphasis.

Charcoal carries titles and major controls; warm gray supports metadata and dividers. Green can confirm completion, while muted red is reserved for destructive or error states. Generic system-blue navigation, gray grouped backgrounds, or many unrelated accent colors would flatten the reference.

# Typography

Type is rounded, approachable, and bold at the top of the hierarchy. Major titles use roughly 30–36 points, section titles 20–22, card labels 15–17, body text 15–16, and metadata 11–13. Task and result screens often center the heading; discovery cards keep concise left-aligned labels. Use Avenir Next as an iOS-safe approximation.

With Dynamic Type, let supporting copy and metadata wrap before reducing the title or playback hierarchy. Cards should grow vertically, and centered task layouts should scroll on compact heights. Keep duration, progress, and primary action legible without making all secondary text equally prominent.

# Screen composition

Onboarding uses a large illustrated hero mass with title and one pill action. Home and Explore scroll vertically through rounded illustrated cards, thumbnails, and compact rails with about 18-point outer gutters. Playback expands color and artwork across the viewport around a centered circular control. Profile uses a white dashboard with rounded statistic cards. Forms are sparse and white; selectors rise from the bottom as large-radius sheets.

Observed archetypes include illustrated onboarding, card-grid discovery, full-screen audio playback, lesson detail, profile/statistics dashboard, stress check and result composition, bottom-sheet radio selectors, sparse account forms, centered confirmation modal, and an empty downloads view with illustration. Bottom navigation and fixed actions reserve the lower safe area.

# Navigation appearance

The persistent bottom bar is white and contains three icon-and-label items. Inactive items are gray; selection becomes black rather than a bright brand fill. Top navigation uses compact close or back controls. Playback minimizes other chrome. Sheets have a centered drag handle and large rounded upper corners; confirmation uses a rounded centered card over a dim overlay.

# Components

Primary actions are blue pills with white semibold labels and at least 52-point height. Playback centers a large charcoal circular button with a simple high-contrast glyph, accompanied by minimal progress or slider treatment. Illustrated content cards use 12–18 point radii and either place concise text on a quiet region of the art or below it.

Annual/monthly selection uses a rounded segmented pill. Radio rows use blue selected dots or rings. Profile statistics, trial timelines, progress bars, toasts, and pale inputs preserve the same rounded, low-border language. Disabled controls recede through pale fill and muted text without changing geometry.

# Imagery and icons

Authored illustration is compositionally essential and cannot be omitted while final assets are pending. It appears in large hero zones, cards, player backgrounds, stress checks, breathing, profile statistics, empty downloads, and modal/result states. Supporting portraits or content thumbnails remain secondary. Icons are simple line or filled glyphs and must not substitute for the authored scenes.

# States

Selected radios, segments, and actions use blue. Playback, pause, progress, loading, and completion preserve the current illustration and color field rather than switching to generic system views. Empty downloads and result states center authored art with concise copy. Bottom sheets dim the prior context. Destructive logout uses a rounded modal and muted red action while retaining the same friendly type and spacing.

# iOS adaptation

Extend the current white, warm, or purple field through safe areas where it fills the screen. Use vertical scrolling for discovery, profile, results, and forms; horizontal rails may remain scrollable. Inset content for the quiet bottom bar and keep playback close/control clear of the home indicator. Sheets need keyboard avoidance and native interactive dismissal.

All tabs, cards, playback, close, radio, and action targets need at least 44 points. VoiceOver should announce title, duration or state, then the primary action before secondary metadata. Dynamic Type should enlarge cards and task layouts vertically. Compact widths should reduce grid columns and secondary illustration detail before shrinking text. Do not invent an unrelated dark theme beyond observed dark-purple content fields.

# Anti-generic checklist

- Do not replace authored art with gradients, arbitrary SF Symbols, emoji, or stock wellness photography.
- Do not turn the white discovery surface into a generic grouped card list.
- Do not use default blue for the tab bar; preserve gray inactive and black selected navigation.
- Do not overcrowd playback with controls, metrics, or explanatory copy.
- Do not omit large warm art fields while waiting for final assets.
- Do not apply one uniform corner radius to cards, pills, sheets, and circular playback controls.
- Do not use clinical iconography or hard shadows.

</design-context>
