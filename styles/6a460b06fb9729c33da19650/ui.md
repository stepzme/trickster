<design-context>
---
version: 1
platform: iOS
name: Beeline-design-analysis
description: "A light, playful telecom dashboard built from a cold pale-gray canvas, inflated white cards, Beeline yellow controls, black utility type, lavender tariff bands, floating pill navigation, and authored yellow-black promotional art."
colors:
  canvas: "#F1F4F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9EEF3"
  accent-primary: "#FFD200"
  accent-secondary: "#FF5B14"
  accent-violet: "#8E78E8"
  accent-dark: "#1F2530"
  text-primary: "#171A20"
  text-secondary: "#6D747C"
  text-tertiary: "#A3ABB4"
  divider: "#DDE4EA"
  success: "#26B866"
  destructive: "#E54B59"
  overlay: "#000000"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 34, fontWeight: 600, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 600, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 600, lineHeight: 23}
  cardTitle: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 500, lineHeight: 21}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 600, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 14}
  navLabel: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 500, lineHeight: 12}
spacing:
  screen-horizontal: 14
  section-gap: 18
  card-padding: 16
  control-gap: 8
  tile-gap: 4
rounded:
  control: 16
  card: 24
  tile: 14
  sheet: 30
  pill: 999
components:
  primary-action: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.text-primary}", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [13, 20]}
  urgent-action: {backgroundColor: "{colors.accent-secondary}", textColor: "#FFFFFF", typography: "{typography.label}", rounded: "{rounded.pill}", padding: [12, 18]}
  bento-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.card}", padding: 16}
  service-tile: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.caption}", rounded: "{rounded.tile}", padding: 12}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-secondary}", selectedColor: "{colors.text-primary}", rounded: "{rounded.pill}"}
---

# Overview

Beeline's iOS screens use a soft dashboard language rather than a plain settings app. The viewport is usually a pale cool-gray field with white, inflated bento modules, a small centered yellow brand capsule in the status area, and a floating bottom navigation cluster. Saturated color is tightly controlled: yellow marks the brand and primary controls, orange appears only for urgent balance relief, and violet appears as a tariff or subscription accent.

The style is recognizably Beeline because utilitarian telecom data sits beside playful authored art: yellow-black sphere motifs, dot-matrix allowance graphics, 3D objects, campaign stills, and occasional characters. Functional account, tariff, and history screens stay airy and flat; promotional panels carry the illustration and image weight.

# Non-negotiable visual invariants

- The canvas is a cold pale gray, while nearly every content module is a rounded white or frosted white surface.
- Beeline yellow is the dominant action color for recharge, choose, connect, toggle-on, and compact brand marks.
- Balance, allowance, and plan modules use bento geometry with very large card radii and tight internal grouping.
- The bottom navigation is a floating rounded cluster above the home indicator, with a separate round shortcut at each edge.
- Promotional imagery uses yellow-black 3D objects, dot-matrix fills, or campaign photography inside spacious cards.
- Modal choices dim the full screen and rise as a high-radius bottom sheet with a small centered drag handle.
- Utility icons are small, dark, and sparse; large colorful symbols are reserved for authored promo art, not generic controls.

# Color and surfaces

Use `#F1F4F7` as the main app field. It should read cool and misty, not beige or pure white. Primary cards are white with almost no visible border and soft shadow or blur-like separation. Secondary tiles can use `#E9EEF3` or a very light gray gradient, but still need a white-card feeling.

Beeline yellow `#FFD200` carries the brand, filled CTAs, active toggles, small price/action pills, and the centered app mark. It should feel warm and solid, not neon. Orange `#FF5B14` is an exceptional accent for urgent top-up or relief actions and should not replace yellow as the default CTA.

Text is nearly black `#171A20` for headings and values, with muted gray `#6D747C` for metadata and pale gray `#A3ABB4` for inactive labels. Lavender/violet `#8E78E8` appears in plan-enhancer bands and selected plan atmosphere. Success is a small green indicator, usually paired with text rather than filling a large surface. Destructive or alert color is used sparingly for warnings.

Avoid default iOS blue, flat black-on-white form sections, heavy outlines, saturated gradients across the full app, or high-contrast dividers between every row. Separation should mostly come from air, rounded surfaces, and subtle gray fields.

# Typography

Typography is SF Pro-based, friendly, and slightly understated. Headings use SF Pro Display at medium weights rather than heavy editorial bold. Many headings and labels are lowercase in the reference; preserve that relaxed casing when the surrounding product copy allows it. Do not force title case everywhere.

Large account values and allowance numbers should be direct and roomy, usually 24-34 points with short labels below. Service and tile titles sit around 13-16 points, with a compact line height and enough wrapping room for Russian-length labels. Captions are small but not hairline; keep 10-11 point captions legible and avoid compressed tracking.

Buttons use 13-15 point semibold text. Navigation labels are tiny and secondary, with icon prominence doing most of the work. At larger Dynamic Type sizes, allow cards to grow vertically and wrap secondary labels; do not shrink headline/value text until it becomes unreadable.

# Screen composition

Most screens are vertically scrolling iPhone canvases with 14-16 point side gutters and 4-8 point gaps between adjacent bento tiles. The top safe area stays light and uncluttered. The small yellow Beeline badge appears centered near the status area on many signed-in screens; back buttons and utility controls are circular white buttons.

Dashboard composition: a horizontal story rail occupies the top edge, followed by account/search controls, a status notice, balance actions, a plan card, allowance tiles, product/service cards, and the floating nav. Cards often touch into a dense bento group, with rounded outer corners and small seams between inner tiles.

Product and plan composition: a large white card holds price, discount, usage quotas, and a grid of service tiles. A fixed yellow recharge pill can sit above the bottom navigation. Interior rows are low contrast and rounded; toggles and selectable allowance chips use yellow for the active state and dark charcoal for category labels.

History and usage composition: summary cards sit in the upper half, often two cards wide, with debit/top-up or traffic metrics shown as large numbers. Promotion cards are inserted between data groups but remain visually subordinate to account totals. Bottom CTAs stay pill-shaped and safe-area aware.

Focused entry screens: sign-in and PIN screens become sparse, with large top-left headings, a mostly empty light-gray field, white circular back/help controls, and system keyboard or custom keypad anchored at the bottom. The visual identity remains through the centered yellow badge and yellow CTA.

# Navigation appearance

Navigation chrome is rounded and floating. The bottom bar is a white pill with soft shadow, compact dark icons, small gray labels, and a dark selected icon. It does not span edge-to-edge like an unstyled `TabView`. Small round shortcut buttons can flank the pill and must align to the same bottom safe-area baseline.

Top controls are light: circular white back buttons, small utility icons, and a centered yellow brand chip. Sheets have dim overlays, a rounded top edge around 30 points, a centered white drag handle area, large lowercase title text, and stacked full-width pill actions. Alerts and permission transitions should keep the dimming behavior native, but app-owned controls must match the orange/yellow/charcoal hierarchy.

# Components

Primary action: a full-width or wide yellow pill, roughly 48-56 points tall, with centered semibold dark text. It can float above navigation or sit inside a card. Disabled primary actions fade toward gray rather than using blue.

Urgent action: a smaller orange pill or rounded rectangle for urgent balance relief. Use white text/icons and keep it visually secondary to the yellow brand system by limiting it to exceptional states.

Bento card: white, 20-24 point radius, 12-16 point padding, very light shadow, no heavy border. Cards can form two-column grids; internal separators are made by small gutters, not visible lines.

Allowance chip/tile: rounded rectangular cells with numeric labels. Active states use yellow fill for values and charcoal fill for unit labels; inactive states stay white or pale gray. Dot-matrix yellow graphics may occupy background space behind allowance values.

Service tile: compact white tile with one small dark icon, title, price/status metadata, and optional green connected mark. Keep icons quiet; do not use colorful SF Symbol sets as substitutes for observed icon/art treatment.

Search/account control: white pill or joined pill row near the top, with small profile/search icons and phone number text. The plus/action control is a circular white or yellow button at the row end.

Toggle: iOS-style pill toggle with a yellow on-fill and pale neutral off state. Place it inside a white tile with enough breathing room, not inside a default form row.

# Imagery and icons

Imagery is essential in Beeline's style. Promo modules use authored 3D objects, yellow-black bee-sphere forms, coin and device props, dot-matrix yellow fields, campaign photography, and occasional game/character art. The art is usually centered or cropped inside a large white card with spacious negative space and a small yellow CTA below.

Functional data cards should not be decorated heavily. Balance, tariff, usage, security, and history content can use faint abstract geometric shadows or dot fields, but values must stay readable. Iconography is simple, monochrome, and rounded. Do not replace authored image panels with SF Symbols, emoji, line-art placeholders, or vector blobs.

# States

Observed loading uses a full-screen dark dim over the current screen with a white spinner. Observed bottom sheets use the same dark overlay and preserve the underlying screen blur/dim relationship.

Observed selected states include yellow filled allowance chips, yellow toggles, selected bottom-nav icons in dark ink, and pill CTAs. Observed disabled or unavailable actions are pale gray with muted text. Observed error/attention states use small warning marks and restrained red/orange rather than full red screens.

Observed permission and setup states are sparse: a light field, large explanatory title, optional contact/avatar mosaic, and one or two full-width bottom actions. Keep these states visually calm and Beeline-branded through yellow, rounded controls, and the centered brand chip.

# iOS adaptation

Use native safe areas, but style app-owned bars and sheets. Content should scroll under a floating bottom bar with enough bottom padding so the final card and CTA are never hidden. Keep controls at least 44 points tall; primary pills should usually be closer to 48-56 points.

For compact iPhones, preserve one full-width primary metric or card before reducing two-column grids. Service bento tiles can become taller, but should not collapse into default `Form` rows. Product and promo art should remain contained and uncropped unless the source composition already crops photography.

Dynamic Type should expand card height and wrap captions while retaining the hierarchy: top metric or title first, metadata second, CTA last. Keep the keypad and keyboard layouts native where present, but do not let a native keyboard force blue accent controls into the app-owned UI.

Use light appearance as the supported visual base. A dark mode should not be invented from these screens unless separately approved; the observed system is light, gray, white, yellow, and charcoal.

# Anti-generic checklist

- Do not use default iOS blue tint for links, selected tabs, toggles, or filled actions.
- Do not replace the floating rounded bottom navigation with an edge-to-edge `TabView`.
- Do not turn bento dashboards into plain `Form` sections or identical list rows.
- Do not remove the yellow-black authored art, dot-matrix texture, or campaign image panels when they are compositionally visible.
- Do not use the same corner radius for sheets, primary pills, service tiles, and large cards.
- Do not overuse orange; yellow is the regular primary, orange is exceptional.
- Do not place decorative art behind account numbers, allowance values, or transaction totals.
- Do not add product navigation, marketing page sections, desktop hover behavior, or web breakpoints to this iOS style.
</design-context>
