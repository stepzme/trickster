<design-context>
---
version: 1
platform: iOS
name: Strava-design-analysis
description: "A precise sports-tracking visual system built from white canvases, near-black typography, concentrated Strava orange actions, real activity photography, map surfaces, compact charts, and large metric numerals."
colors:
  primary: "#FC4C02"
  on-primary: "#FFFFFF"
  primary-focus: "#D94200"
  ink: "#111111"
  ink-muted: "#4E4E4E"
  ink-subtle: "#747474"
  ink-tertiary: "#A5A5A5"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F2"
  surface-2: "#ECECEA"
  surface-3: "#DEDEDA"
  surface-4: "#CFCFCA"
  hairline: "#E5E5E2"
  hairline-strong: "#C7C7C2"
  inverse-canvas: "#050505"
  inverse-surface-1: "#151515"
  inverse-surface-2: "#262626"
  inverse-ink: "#FFFFFF"
  chart-blue: "#357FCA"
  chart-green: "#67CE2A"
  chart-red: "#E11D24"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 64, fontWeight: 800, lineHeight: 0.98, letterSpacing: 0}
  display-lg: {fontFamily: SF Pro Display, fontSize: 40, fontWeight: 800, lineHeight: 1.05, letterSpacing: 0}
  display-md: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.14, letterSpacing: 0}
  headline: {fontFamily: SF Pro Display, fontSize: 23, fontWeight: 700, lineHeight: 1.18, letterSpacing: 0}
  card-title: {fontFamily: SF Pro Text, fontSize: 17, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
rounded:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 22
  xxl: 28
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 44
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", minHeight: 50, padding: [14, 24]}
  secondary-action: {backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", minHeight: 44, padding: [12, 18]}
  inverse-option: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.subhead}", rounded: "{rounded.sm}", minHeight: 64, padding: [14, 16]}
  choice-tile: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.subhead}", rounded: "{rounded.md}", minHeight: 72, padding: [14, 12]}
  feed-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 16}
  metric-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 16}
  map-chip: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", minHeight: 34, padding: [7, 12]}
  recording-panel: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  tab-bar: {backgroundColor: "{colors.canvas}", selectedColor: "{colors.primary}", unselectedColor: "{colors.ink}", typography: "{typography.caption}", minHeight: 58}
---

# Overview

Strava's observed iOS screens use a restrained athletic language: white is the dominant surface, black type carries nearly all information, and orange is held back for the Strava logo, primary actions, selected tabs, route strokes, and the most important progress accents. The UI avoids decorative framing; real activity photos, real map tiles, graphs, and metric readouts provide the texture.

The system should feel exact and physical rather than playful. A screen can contain a large photo, a route map, a chart, or a giant live metric, but the surrounding controls stay compact, monochrome, and disciplined.

# Non-negotiable visual invariants

- Strava orange appears as a concentrated action and selection color, not as a general background wash except the splash screen.
- Most app-owned surfaces are white, with pale gray tiles used for choices, badges, and informational strips.
- Headlines, activity names, prices, and live metrics use heavy black type with very little decorative styling.
- Maps and real activity photography are treated as content surfaces, often full-width or edge-to-edge within the screen.
- Selection controls use rounded light-gray tiles or black selected pricing cards, paired with simple black line icons.
- The bottom tab bar is white with compact black outline icons and an orange selected destination.
- Recording states shift from dense map context to huge numeric readouts and a single orange pill action.

# Color and surfaces

Orange is the only brand color that should direct the eye. Use it for the splash background, active tab, primary button, route line, progress dot, selected radio, and important text links. Do not introduce extra accent families for routine controls.

White is the default canvas. Pale gray appears in activity-choice tiles, goal strips, filter chips, inactive subscription options, graph backplates, and system-like permission/setup panels. Hairlines are very light and used sparingly; many group boundaries are created by whitespace instead of visible borders.

Black and near-black carry labels, headings, icons, and giant numbers. Muted grays support helper copy, captions, axes, inactive controls, and explanatory footnotes. Red can appear only where the reference uses it as a strong celebratory or warning band; green is limited to completed-goal/progress indicators.

Map screens can temporarily replace the canvas with map imagery, but floating controls stay white, rounded, and compact. Do not tint map controls orange unless they are the active route or primary recording action.

# Typography

Use SF Pro as the iOS implementation face. The observed style depends on strong weight contrast: 22-28 point bold prompts for onboarding, 17-20 point activity and section titles, 13-15 point content text, 10-12 point metadata, and very large 40-64 point metric numerals in recording views.

Keep letter spacing neutral. The Strava wordmark is an asset, not a text style to reconstruct. Use tabular alignment for time, distance, pace, price, and chart values. Short headings can wrap naturally but should preserve their blunt, high-confidence weight.

Button text is compact and bold. Supporting text under charts, privacy examples, or subscription legal copy stays small and calm; it should not compete with the headline or the orange action.

# Screen composition

## Branded entry

The splash screen is a full orange field with a centered white Strava wordmark. Onboarding uses a large photographic or product-preview upper area, then a white lower decision area with centered title copy, pager dots, one full-width orange pill, and a quieter secondary text action.

## Onboarding choices

Prompts sit high with generous left and right margins. Activity choices use a two-column grid of light-gray rounded rectangles with black line activity icons and bold labels. Goal or purpose questions can use full-width pale tiles stacked vertically. The orange Continue button sits pinned near the bottom with safe-area breathing room.

## Feed and profile

Feed screens are mostly one-column white scroll views. Content starts with profile identity or activity title, then compact metric rows, achievement strips, photo grids, and simple engagement icons. Profile screens use a small avatar badge, a soft orange-tinted header image, compact counts, outlined orange actions, and charts below.

## Activity details

Activity details combine a large route map at the top, then a white content sheet with athlete identity, title, achievement strip, metric grid, and intelligence or analysis cards. Keep chart cards rounded and sparse; blue area graphs and gray reference bands should feel analytical, not decorative.

## Maps and recording

Map discovery is full-screen map texture with white floating search, chips, layer controls, a Create Route pill, and a bottom tab bar. Recording setup uses the same map surface plus a bottom white panel. Active recording can remove map detail entirely and present giant timer/distance/speed values on white with one orange pause/start pill.

# Navigation appearance

Use a five-item bottom bar with Home, Maps, Record, Groups, and You as compact outline icons with small labels. The selected item uses orange icon and label. Record is visually centered and circular in the reference; preserve the strong central recording affordance without turning the whole bar into a branded slab.

Top bars are light and sparse: back chevrons, bookmark, overflow, search, share, settings, chat, and bell controls are black line icons inside either no container or a small white circular button over maps. Keep app bars white or transparent over content; avoid large colored navigation headers.

# Components

## Primary action

Primary actions are orange pills, usually full-width and about 50 points tall. Text is white, bold, and centered. Pressed or disabled states should darken/desaturate the orange or move to light gray; do not invent gradients.

## Secondary and text actions

Secondary actions are plain orange text or white pills with orange borders. Use them for login, share QR code, edit, remove section, and small supporting links. Their visual weight must stay below the primary orange button.

## Choice tiles

Activity and purpose choices are rounded pale tiles with simple black line icons when relevant. Selected pricing choices can invert to black with orange selection rings. Preserve the clear two-column or stacked rhythm; avoid generic iOS list rows for these screens.

## Activity content

Activity cards include avatar/badge, athlete name, date, title, compact metrics, achievement strip, media, and engagement icons. Keep each part visibly separated by whitespace. The media grid can crop photos tightly and can sit directly in the feed without heavy shadows.

## Metrics and charts

Metric panels use large black values, small labels, and minimal dividers. Charts use flat blue fills, gray backplates, orange points or route strokes, and light axes. Do not add ornamental chart gradients or decorative dashboard chrome.

## Floating map controls

Map chips and controls are white rounded pills or circles with black icons and text. They sit above map tiles and may stack on the right side. Keep them compact, high contrast, and visibly tappable.

# Imagery and icons

Real photography and maps are core evidence surfaces. Use actual activity photos, route map tiles, and graph screenshots or equivalent raster/content-backed imagery when implementing screens. Do not replace them with abstract sports illustrations.

Icons are simple black outline symbols for sport types, navigation, likes, comments, share, bookmark, settings, and map layers. The Strava shield and wordmark are brand assets and should be treated as raster/vector brand artwork. Privacy and subscription promo graphics can use small authored raster images, but they do not define a reusable illustration language.

# States

Selected tab: orange icon and label. Inactive tab: black or muted gray icon and label. Selected subscription option: black card, white text, orange radio. Inactive subscription option: pale gray or white card, black text, gray radio.

Recording ready: map background, white bottom sheet, green GPS confirmation strip, orange circular start control. Recording active: giant black metrics on white and one orange pause pill. Goal achieved: light strip with a green badge. Paywall or subscription states: high-contrast plan cards and one orange trial button with small legal copy.

Permission or privacy states should use native iOS permission UI when the system asks, and Strava-owned explanatory screens should remain white, centered, and minimal with one orange next action.

# iOS adaptation

Respect the iOS safe areas and keep the home indicator clear of pinned orange actions. Visible controls may be compact, but the hit area must remain at least 44 points. Dynamic Type may wrap onboarding body copy, chart annotations, and legal text; do not shrink the large recording numerals until necessary for fit.

Use native map and chart rendering only when it can visually match the observed flat route, heatmap, and graph language. Otherwise use captured or generated raster surfaces. Sheets over map content should keep the rounded white bottom-panel treatment and leave enough map visible to preserve context.

VoiceOver order should read identity, title, metrics, media summary, and actions in the same visual order. Photo grids, map previews, and charts need concise labels because they carry important visual meaning.

# Anti-generic checklist

- Do not turn Strava into a generic fitness dashboard with blue accents, glass cards, or gradient panels.
- Do not replace activity photography, route maps, or chart surfaces with decorative vector illustrations.
- Do not use default unstyled `List`, `Form`, or `TabView` rows where the reference uses custom tiles, pills, or compact tab icons.
- Do not spread orange across every badge or container; keep it concentrated on brand, action, route, and selected state.
- Do not flatten all metrics into body text; large black numerals are a defining part of recording and analysis screens.
- Do not add heavy shadows around feed cards, maps, choice tiles, or charts.

</design-context>
