<design-context>
---
version: 1
platform: iOS
name: Revolut-design-analysis
description: "A modular finance interface that shifts between atmospheric violet-blue gradient roots and calm off-white task surfaces, using oversized balances, compact black actions, translucent rounded widgets, dense financial rows, and restrained product imagery."
colors:
  canvas: "#F5F4F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0EFF2"
  accent-primary: "#5E5CE6"
  accent-secondary: "#10A6B4"
  text-primary: "#101014"
  text-secondary: "#6F7078"
  divider: "#E3E2E6"
  destructive: "#D94D5A"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "SF Pro Display", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Display", fontSize: 21, fontWeight: 600, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "near-black", text: "white semibold", height: 52, radius: 999}
  gradient-widget: {fill: "translucent white over violet-blue field", padding: 16, radius: 20}
  circular-action: {fill: "translucent white or pale gray", diameter: 48, icon: "compact monochrome"}
  navigation: {fill: "white or translucent light", selected: "dark icon and label", unselected: "muted gray"}
---

# Overview

Revolut combines two visual registers. Root and account-oriented surfaces use large violet, blue, aqua, or navy gradient fields with oversized white values and translucent widgets. Focused forms, lists, settings, and modal tasks move onto calm off-white or white surfaces with black typography and black pill actions. Rounded modular cards, circular actions, dense financial rows, and compact icon grids connect those registers. Photography and product renders appear selectively; financial hierarchy rather than imagery remains dominant.

# Non-negotiable visual invariants

- Saturated violet-blue or aqua gradients form large background fields on atmospheric root surfaces rather than decorating every card.
- Focused tasks switch to an off-white or white canvas with near-black primary actions and retain the same rounded geometry.
- The primary balance or financial value is oversized, tabular, and visually isolated from compact supporting metadata.
- Dashboard information is organized into independent translucent or white rounded widgets with minimal shadow.
- High-priority actions are black full-width pills; compact account actions are circular and visually lighter.
- Bottom navigation remains a light four-item bar with a dark selected state and muted inactive items.
- Green, red, and amber appear only for direction, outcome, restriction, or warning states, not as general decoration.
- Product photography, flags, avatars, and card renders remain supporting imagery and never displace core financial values.

# Color and surfaces

The neutral canvas is a cool off-white used for focused tasks, lists, settings, and sheets. White primary surfaces and pale-gray secondary controls create quiet separation with thin cool-gray dividers. On atmospheric screens, navy, violet, blue, and aqua blend into broad full-width fields. White or lightly translucent widgets float over these gradients without heavy shadows.

Near-black carries primary text and decisive actions on light surfaces; white type sits directly on saturated gradients. Violet and aqua support contextual selected states and background families rather than becoming universal control colors. Medium gray carries dates, rates, labels, and inactive navigation. Green and red communicate positive or negative financial direction and transaction results; amber marks warnings or restrictions. Default iOS blue, strong colored borders on every card, and saturated gradients inside every widget would break the reference.

# Typography

Use SF Pro Display for balances, amounts, and page titles, and SF Pro Text for rows, labels, and controls. Hero balances reach roughly 34–40 points, page titles 26–30, widget headings 18–22, body content 14–16, and dense metadata 11–13. Primary numbers use bold weight and tabular figures; secondary financial qualifiers remain regular and compact.

Balances may center within atmospheric headers, while focused task content and detailed lists are left-aligned. Bold weight is reserved for values, decisions, and section hierarchy rather than applied to every row. Supporting labels wrap before amounts or currencies lose their relationship. With Dynamic Type, metric pairs stack, widgets grow vertically, and dense trailing metadata moves below the label before primary values are truncated.

# Screen composition

Atmospheric screens use approximately 12–16 point edge insets, 8–12 point gaps between widgets, and 16 points inside cards. Focused task surfaces use 16-point insets and roughly 24–28 points between major groups. Gradient or neutral canvas extends through the top safe area. Long feeds and lists scroll vertically; bottom navigation or a single completion action reserves the lower safe area.

Observed archetypes include:

- Atmospheric dashboard composition: compact circular controls frame a centered account label and oversized value, followed by a row of circular actions and a one-column feed of translucent widgets.
- Modular data composition: white or translucent cards hold a short heading, one main metric, compact chart or list content, and at most one subordinate footer action.
- Focused amount composition: off-white canvas, large numeric value or entry area, small currency or account selectors, native numeric keyboard, and one black lower action.
- Dense list composition: white or pale surface with compact leading icon or avatar, black label, muted financial metadata, and occasional trailing status or disclosure.
- Product-card composition: one large physical-card render or product tile occupies the central visual region, with circular contextual actions and restrained supporting rows below.
- Modal composition: rounded white bottom sheets or full-height light task pages present grouped selectors, warnings, and one strong black action.
- Premium composition: near-black or dark surfaces invert the type and use controlled product imagery without changing the core pill-and-card geometry.

# Navigation appearance

The primary bottom bar is white or lightly translucent and contains four evenly spaced icon-and-label items. The selected item is dark and higher contrast; inactive items are muted gray. Atmospheric headers use compact circular profile, search, or contextual controls. Detail surfaces use minimal leading back or close controls on a light bar. Bottom sheets have white surfaces, large top corners, and a small drag indicator where observed. Segmented or overflow controls use pale rounded fills and stronger black selected text.

# Components

- Primary action: 50–54 points tall, full or near-full width, near-black fill, pill radius, and centered white semibold label. Disabled state turns gray while preserving geometry.
- Gradient widget: translucent or opaque white fill over a saturated field, 18–22 point radius, 14–16 point padding, near-black content, and little visible shadow.
- Circular action: 44–52 point circle using translucent white on gradients or pale gray on neutral surfaces, with a compact monochrome icon and short caption beneath when needed.
- Metric tile: white rounded surface with one strong value, compact label, and optional green/red direction mark. Adjacent tiles align their numeric baseline.
- Search or selector field: pale or translucent fill, 44–48 point height, pill geometry, compact leading icon, and muted placeholder.
- Financial row: compact icon, flag, avatar, or card thumbnail; primary label; secondary date, rate, or context; and trailing amount or status. Dividers are subtle or replaced by spacing.
- Warning card: contained white or pale surface with amber or neutral icon, concise text, and one clear remedy action.

# Imagery and icons

Imagery is secondary. Onboarding uses full-bleed or large product photography; other surfaces use small news thumbnails, circular avatars, currency flags, card renders, QR codes, and product icons. Crops are simple and controlled: avatars remain circular, news images stay small and rounded, flags and security marks are never cropped, and card renders preserve their physical ratio.

The sampled screens do not establish a recurring standalone authored illustration system. Functional icons are compact black, white, or gray line and filled glyphs, sometimes placed inside circular or rounded-square containers. Background gradients must scale without seams and avoid bright hotspots behind white text. When final supporting media is unavailable, placeholders must preserve the documented scale, crop, and hierarchy.

# States

Observed states include selected and inactive bottom tabs, disabled completion actions, expanded overflow menus, warnings and restrictions, empty or no-transaction cards, keyboard-open amount entry, modal overlays, notification badges, and a dark premium or plan surface. Across states, the hierarchy of one primary value, restrained supporting metadata, rounded surfaces, and high-contrast action remains stable.

Positive and negative direction uses green and red; warnings use amber or contained neutral emphasis. Disabled actions become gray. Empty states preserve the widget geometry and open space rather than introducing decorative illustration. Dark premium states invert canvas and type while retaining familiar cards, pills, and spacing.

# iOS adaptation

Extend the active gradient, off-white canvas, or dark field through the safe areas. Use vertical scroll containers for widget feeds and lists; reserve the lower inset for the four-item tab bar or full-width action. Horizontal card carousels may retain a partial neighboring card, but financial text must remain readable on compact widths.

All circular actions, icon buttons, selectors, tabs, and rows need at least 44-point targets. VoiceOver should announce the primary amount and currency first, then account context, state, and action. Preserve native keyboards, QR/camera, system sheets, and permission transitions. With large Dynamic Type, stack metric tiles and trailing metadata before shrinking text. Maintain the observed light, atmospheric, and bounded dark contexts instead of forcing one palette over every screen.

# Anti-generic checklist

- Do not flatten atmospheric roots into a generic white card stack.
- Do not place saturated gradients inside every widget or use them as decorative button fills.
- Do not use default blue primary actions; focused completion actions are near-black pills.
- Do not reduce balances and amounts to the same scale as row labels.
- Do not add heavy shadows or glass blur that lowers financial contrast.
- Do not ship an unstyled `TabView`; preserve the four-item light bar and dark selected state.
- Do not replace card renders, flags, avatars, or product photography with arbitrary SF Symbols.
- Do not give circular actions, pills, widgets, and sheets one uniform corner treatment.

</design-context>
