<design-context>
---
version: 1
platform: iOS
name: Twinby-design-analysis
description: "A media-first social interface that alternates full-screen violet acquisition moments with charcoal runtime surfaces, oversized rounded profile photography, white pill actions, purple controls, lime compatibility signals, compact five-item navigation, and selective soft 3D relationship objects."
colors:
  canvas: "#1B1A20"
  surface-primary: "#25242B"
  surface-secondary: "#323039"
  accent-primary: "#8B4DFF"
  accent-secondary: "#91E63B"
  text-primary: "#F8F6FA"
  text-secondary: "#AAA6B0"
  divider: "#403D47"
  destructive: "#F05B67"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 38, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 16
  card: 24
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#FFFFFF", text: "#1B1A20", cornerRadius: 999, minHeight: 52}
  profile-card: {fill: "{colors.surface-primary}", text: "{colors.text-primary}", cornerRadius: 28, padding: 0}
  compatibility-action: {fill: "{colors.accent-secondary}", text: "#17200E", cornerRadius: 999, minHeight: 56}
  navigation: {fill: "{colors.surface-primary}", selected: "{colors.accent-primary}", unselected: "{colors.text-secondary}", minHeight: 60}
---

# Overview

Twinby uses two deliberate visual modes. Acquisition, celebration, and monetization screens can become saturated violet or purple-gradient fields with large white statements and centered soft-volume objects. The everyday interface is charcoal and media-first: a tall rounded profile photo dominates discovery, while purple, lime, pink, and white controls float above dark surfaces. A complete light theme preserves the same geometry and hierarchy with white surfaces and dark text rather than merely inverting colors.

# Non-negotiable visual invariants

- Discovery gives a single tall, rounded profile photograph most of the viewport; text and actions are anchored over its upper and lower gradient scrims.
- Runtime screens use charcoal canvases and layered dark-gray surfaces, while acquisition and paywall moments may use full-screen violet gradients.
- Purple carries brand selection, progress, chat, and premium emphasis; lime is reserved for compatibility and positive relationship signals.
- Primary CTAs are broad white pills on dark or purple fields, not default tinted rectangles.
- The five-item bottom bar is compact and icon-led, with a central butterfly/wing discovery mark and clear purple selected emphasis.
- Compatibility remains visually distinct through lime circular treatment, percentage values, rings, and linked-circle symbolism.
- Soft 3D relationship objects are large focal masses in selected onboarding, feature, and monetization surfaces; they cannot be replaced by generic line icons.
- Light appearance preserves photo scale, rounded geometry, purple/lime roles, and navigation hierarchy rather than becoming a generic white list.

# Color and surfaces

Near-black and charcoal cover most runtime screens, with slightly lighter dark cards, controls, and sheets. Violet is the main brand and interaction accent in selected states, progress, chat bubbles, subscription panels, and full-screen gradients. Lime green marks compatibility, completion, or positive connection and should not be repurposed as the general action color. Pink and orange support romantic celebration and monetized feature art.

White supplies high-contrast primary pill buttons, key text, and selected dots. Cool gray carries helper copy and inactive icons. The light theme uses off-white or white canvases, subtle pale shadows, dark text, and the same accent roles. Destructive actions use coral red; warnings use warm amber. Default iOS blue would visibly conflict with the purple/lime semantic split.

# Typography

Typography is a confident SF-like rounded sans rather than a decorative display system. Onboarding, match, and paywall statements use bold 28-38 point white type, often centered. Profile names and major section titles use 20-28 point bold styles. Form titles are centered with smaller gray subtitles, while settings rows and chat metadata use compact sans-serif labels.

SF Pro Rounded is a safe substitute for large brand-facing headings and SF Pro Text for controls and dense content. Preserve immediate hierarchy for name, age, location, intent, and compatibility percentage. Under Dynamic Type, allow tags, secondary facts, and subtitles to wrap below; keep the photo, primary identity, compatibility signal, and decision actions visually dominant.

# Screen composition

Onboarding places a small brand mark near the top, a large centered illustration in the middle, and broad authentication or continuation pills above legal copy at the bottom. Profile-creation and questionnaire screens use top progress, a centered title, one large control or answer region, and a fixed bottom CTA with generous vertical separation.

Discovery keeps compact utilities near the top safe area, a nearly full-height photo card in the center, identity and tags over a lower scrim, a row of circular decisions near the bottom of the image, and persistent navigation above the home indicator. Long profile details continue the photo hero into a vertical text and media scroll with a sticky lower action tray.

List screens use a direct title plus vertically stacked rows. The profile hub uses an account summary, premium banner, two-column feature tiles, and additional blocks in a long scroll. Paywalls and boosts stack a large soft-volume object, bold headline, benefit or plan controls, and a bottom CTA on a purple field. Bottom sheets dim or blur the current composition and present a rounded-top dark or light surface.

# Navigation appearance

The persistent bottom bar contains five compact outline icons with small labels or state marks. Inactive items are gray or white; active items use purple fill, dot, or ring treatment. The central butterfly/wing mark identifies the visually dominant discovery position. The bar sits on a dark-gray surface in dark appearance and a white surface in light appearance.

Focused forms, tests, edits, and settings subpages use a minimal back chevron or thin close icon and a compact centered title. Discovery utilities are small icon-only controls without a heavy navigation bar. Sheets have a centered grabber, pronounced rounded top corners, and stacked wide actions. Paywalls may use only a small close control over the full-screen gradient.

# Components

The discovery card uses a large cover-cropped portrait, approximately 24-28 point corners, and dark gradient scrims for legible identity and controls. Its action row combines circular undo, reject, compatibility, special-like, and like controls; the lime compatibility control is larger or more visually charged than its neighbors and includes linked-circle or percentage treatment.

Primary actions are 52-point white pills with dark semibold text. Purple pills and selected outlines support branded secondary decisions. Questionnaires use large answer rows, outlined Likert circles with visible selected dots, and purple horizontal progress. Profile completeness uses purple progress rings around avatars.

Settings are flat dark rows with a thin line icon, main label, optional secondary value, and chevron. Filter and support sheets pair compact controls with one wide white apply action and subdued secondary reset or cancel. Subscription choices use rounded translucent plan cards, fine white borders, badges, and a clear selected outline.

# Imagery and icons

User photography is the principal content material. Portraits use tall cover crops with face-safe positioning, large rounded corners, and top/bottom scrims; city or travel images use smaller rounded grid crops. Photography cannot be removed or replaced with avatars while final assets are pending because it supplies most of the discovery screen’s color and scale.

Functional icons are thin white, gray, or purple line symbols for filtering, messaging, settings, location, likes, and navigation. Compatibility combines lime rings, linked-circle marks, and percentages. A separate soft 3D/vector-hybrid illustration family supplies centered wings, intertwined hearts, documents, suitcases, lightning, and flame-like objects; follow illustrations.md for its generation and asset requirements.

# States

Selected navigation, questionnaire answers, chat bubbles, and progress use purple. Compatibility and successful connection use lime. Match and premium moments may replace the charcoal field with violet and add pink celebration accents. Loading can use a circular progress ring around a portrait while preserving the surrounding dark composition.

The observed empty chat state keeps the same dark list canvas and uses a restrained heart placeholder with one invitation action. Subscription and boost states use full-screen gradients, illustrated focal objects, plan cards, and bottom CTAs. Sheets retain the underlying screen through a dim layer. Native tracking permission appears above the branded onboarding field without custom imitation. No clear in-app error screen was observed.

# iOS adaptation

Extend the active charcoal, violet, or light field through the safe areas. Use vertical scrolling for profile details, settings, questionnaires, hubs, and paywalls; reserve bottom inset for the persistent bar or sticky decision tray. Keep portrait crops face-safe across compact and tall iPhones, and avoid letting the home indicator overlap decisions.

All photo actions, answer rows, filters, navigation items, fields, and sheet choices require at least 44-point targets. On compact widths, wrap profile tags and stack secondary facts before reducing the photograph or compatibility control. Preserve VoiceOver order from identity and photo description through compatibility, facts, and decisions. Dynamic Type should grow list rows and form sections vertically. Dark and light appearances must keep the same accent semantics and component proportions.

# Anti-generic checklist

- Do not shrink discovery photography into a small card surrounded by generic dashboard modules.
- Do not replace the charcoal runtime field with a default grouped background or default blue tint.
- Do not merge purple premium/selection and lime compatibility into one accent color.
- Do not render the bottom bar as an unstyled tab view or omit the central butterfly/wing mark.
- Do not rely on swipe alone; preserve the visible circular decision row.
- Do not expose default form, picker, or toggle styling that ignores charcoal surfaces and purple focus.
- Do not replace the soft 3D relationship objects with SF Symbols, emoji, or SwiftUI shape drawings.
- Do not force the light appearance into a different card geometry or hierarchy.

</design-context>
