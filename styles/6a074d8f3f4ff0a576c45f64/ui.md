<design-context>
---
version: 1
platform: iOS
name: Pure-design-analysis
description: "A deliberately rough dating visual system built from torn black-and-white paper, warped psychedelic patterns, hot-fuchsia accents, handmade ink drawings, serif editorial statements, compact metadata, and collage-like profile stages."
colors:
  canvas: "#F7F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFECEF"
  accent-primary: "#F000C8"
  accent-secondary: "#CDB8FF"
  text-primary: "#050506"
  text-secondary: "#636067"
  divider: "#D9D4DC"
  destructive: "#B3261E"
  primary: "#F000C8"
  on-primary: "#FFFFFF"
  primary-focus: "#C600A5"
  ink: "#050506"
  ink-muted: "#636067"
  ink-subtle: "#A7A2AA"
  ink-tertiary: "#D0CBD3"
  surface-1: "#FFFFFF"
  surface-2: "#EFECEF"
  surface-3: "#CDB8FF"
  surface-4: "#C49A6C"
  hairline: "#D9D4DC"
  hairline-strong: "#BFB8C4"
  hairline-tertiary: "#9C94A0"
  inverse-canvas: "#050506"
  inverse-surface-1: "#1B191D"
  inverse-surface-2: "#332E36"
  inverse-ink: "#FFFFFF"
  brand-secure: "#9F79FF"
  semantic-success: "#37A66A"
  semantic-overlay: "#000000"
typography:
  hero: {fontFamily: "Georgia", fontSize: 40, fontWeight: 700, lineHeight: 44}
  title: {fontFamily: "Georgia", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "Georgia", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 700, lineHeight: 17}
  caption: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 500, lineHeight: 14}
  display-xl: {fontFamily: "Georgia", fontSize: 40, fontWeight: 700, lineHeight: 1.10, letterSpacing: 0}
  display-lg: {fontFamily: "Georgia", fontSize: 32, fontWeight: 700, lineHeight: 1.12, letterSpacing: 0}
  display-md: {fontFamily: "Georgia", fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0}
  headline: {fontFamily: "Georgia", fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  card-title: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 700, lineHeight: 1.28, letterSpacing: 0}
  body-lg: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body-sm: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 1.32, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.4}
  eyebrow: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 800, lineHeight: 1.20, letterSpacing: 0.5}
  mono: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
spacing:
  screen-horizontal: 12
  section-gap: 34
  card-padding: 16
  control-gap: 10
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
rounded:
  control: 2
  card: 8
  sheet: 12
  pill: 999
  xs: 2
  sm: 6
  md: 10
  lg: 16
  xl: 22
  xxl: 28
  full: 9999
components:
  primary-action: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [14, 18]}
  secondary-action: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [11, 14]}
  primary-card: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 16}
  navigation: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.accent-primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [11, 13]}
  profile-stage: {backgroundColor: "{colors.surface-3}", textColor: "{colors.text-primary}", typography: "{typography.headline}", rounded: "{rounded.xs}", padding: 16}
  promo-card: {backgroundColor: "{colors.surface-secondary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14}
  text-input: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.text-primary}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.surface-primary}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Pure's iOS screens use a handmade editorial-collage language rather than a polished dating-card system. The dominant ingredients are torn black and white bands, high-contrast ink drawings, distorted psychedelic pattern fields, sparse profile photography, hot-fuchsia reward accents, and large serif statements that sit directly on the scene.

**Key Characteristics:** torn-paper safe-area bands, single-profile discovery stages, warped magenta/lavender/tan/burgundy backgrounds, rough black ink characters, black rectangular CTAs, white circular reaction controls, sticker badges, and compact tabbed profile/settings pages.

# Non-negotiable visual invariants

- Preserve the rough torn edge between black headers, white content fields, and patterned discovery backgrounds.
- Discovery-style screens are built as one full-height stage, not a feed of interchangeable cards.
- Large profile statements use a bold serif with theatrical scale; metadata and controls use compact SF Pro Text.
- Hot fuchsia is a reward, premium, progress, or personality accent; it is not a generic app-wide background.
- Handmade black-and-white drawings, stickers, and irregular speech scraps are compositionally important where shown.
- Primary commitment actions are hard black rectangles with white uppercase labels and very small or no radius.
- Bottom navigation stays visually quiet: thin line icons, mostly gray inactive states, and black selected emphasis.
- Avoid smoothing every surface into the same rounded material; roughness and asymmetry are part of the brand.

# Color and surfaces

Pure is mostly black, white, and near-white, with large interruptions of hot fuchsia, lavender, dusty tan, burgundy, coral pink, and occasional cyan. The palette is intentionally unstable across expressive screens, but the contrast model is stable: black controls and headers, white reading fields, and vivid decorative backdrops.

Black is used as a material, not just a text color: top bands, torn profile plates, CTAs, sticker labels, chat promos, and active feed actions. White is a paper layer with uneven lower or upper edges. Pale gray supports form pages and profile bodies. Fuchsia marks reward bars, selected style accents, premium cues, and desire states. Lavender and tan are large patterned scene colors.

Generic iOS blue, translucent system grouped backgrounds, and uniform pastel cards would visibly break the reference. If semantic colors are needed, keep them subordinate to the black/fuchsia system: red only for destructive decisions, green only for clear success, and gray for disabled or secondary information.

# Typography

The defining contrast is an expressive serif for big declarations and compact sans text for interface mechanics. Use Georgia as the iOS-safe substitute for the observed editorial serif; use SF Pro Text for metadata, buttons, rows, captions, settings, and chat.

Serif headlines are centered or left-aligned depending on the stage and can occupy the middle third of the screen. They use normal letter spacing, strong weight, and line breaks that feel poster-like. Sans labels are small, often uppercase, and dense. Buttons are uppercase or all-caps-like with wide enough tracking to feel stamped, not default.

Dynamic Type may enlarge body and row text, but preserve the hierarchy: the serif statement or section heading remains visually dominant; metadata wraps below it; badges and doodles may move before the main text becomes cramped.

# Screen composition

Discovery screens use a full-bleed pattern or color field inside the safe area. A single photo, doodle, or sticker cluster sits near the upper-middle; one large serif phrase sits lower; distance/status metadata sits above the action row; reaction controls are white circles near the bottom. The bottom edge is often a torn white strip that contains the tab bar.

Onboarding alternates full-screen art and form pages. The splash is a maximal magenta optical pattern with a centered black mask illustration. The sign-in screen is a white poster: top title, central illustration, then a black torn block containing stacked outlined sign-in controls. Setup pages use a black torn header, white/pale body, one large doodle, selected cards, and a full-width black bottom CTA.

Chat and settings screens are calmer but keep the same grammar. Chat uses a white list, a lavender safety banner with a hand illustration, small circular avatars, and simple message bubbles. Settings uses a black top bar, segmented text tabs with an underline, white rows, small fuchsia values, and a black bottom contact button.

Profile screens place a patterned banner behind a torn black identity card. Tabs are plain text with a thin underline and a small fuchsia indicator when active. Profile media and style previews are large blocks with doodle overlays, rough poster crops, and little conventional chrome.

# Navigation appearance

Navigation is low ornament and thin-line. Bottom destinations sit on a white torn-paper strip with gray inactive icons and black selected state. The active destination may also show a tiny fuchsia notification dot or heart fill. Avoid default `TabView` blue, filled capsules, labels-heavy tabs, and floating web-style nav.

Top bars alternate by context. Expressive discovery pages keep status elements over the scene with small icons and a compact premium badge. Settings and detail pages use a black bar with white title/back affordance, then return immediately to white paper content.

Sheets and system prompts may use native iOS behavior, but app-owned overlays should match Pure's contrast: black or white panels, rough/sticker-like art, and terse labels. Do not introduce glossy blur panels unless the underlying platform permission dialog requires it.

# Components

Primary buttons are black rectangles, almost square-cornered, full-width near the bottom, with white uppercase text. Pressed state darkens or slightly lowers opacity but keeps the hard rectangular shape. Disabled actions may use gray text inside the same geometry.

Secondary and reaction controls are white circles or pills with black line icons. The feed heart state fills black; inactive and unavailable states use pale gray strokes. Diamond/premium actions use a black line icon inside a white circle.

Choice cards are irregular but still structured: white cards over pale gray, compact text, black ink illustration at the top, and a fuchsia/lavender selected fill or small checkmark. Do not use equal-radius Material cards with large shadows.

Profile header plates are torn black slabs with centered avatar, small edit icon, identity metadata, and a fuchsia progress/reward strip attached along the bottom. Settings rows are plain white rows with uppercase labels, minimal separators, fuchsia values, and no decorative chevron overload.

Chat bubbles are small rounded rectangles in light gray for incoming messages and black for outgoing messages. Input chrome is native-light but thin, with plus and microphone affordances kept quiet.

# Imagery and icons

Imagery is essential. Use real profile photography only where the product needs a person or uploaded media; crop faces and bodies clearly and avoid covering identity-critical areas with stickers. Surround photography with rough collage frames, badges, and patterned fields rather than clean marketplace cards.

Icons should look hand-drawn, thin, and imperfect when they belong to the brand shell. Interface icons in settings and nav can be simple line icons, but avoid arbitrary SF Symbols that feel smooth, filled, or system-default. Sticker badges may be black scraps with white text or white scraps with black outlines.

Decorative depth comes from layer order: pattern field, paper tear, sticker scrap, photo cutout, badge, CTA. Avoid glassmorphism, heavy drop shadows, and polished 3D.

# States

Observed selected states use fuchsia or lavender fills, checkmarks, and black active icons. Completion states can appear as torn white notification strips with a small hand-drawn figure. Loading keeps the black bottom button shell and places a small spinner inside it.

The chat leave/report action uses a native bottom action sheet over a dimmed profile/chat context. Keep the sheet plain, high contrast, and readable; do not redraw destructive reporting as playful art. System permission dialogs remain native, while the underlying screen keeps the Pure visual field.

Empty or sparse profile tabs should preserve the tab strip, torn profile plate, and bottom nav even when content is blank. The blank area should feel like white paper, not a generic empty-state illustration unless a matching authored doodle has been generated and approved.

# iOS adaptation

Respect iPhone safe areas but let black bands and patterned fields meet the top and bottom edges. Scroll setup and profile content when needed; keep the bottom CTA or bottom nav fixed only when it does not obscure content. Keyboard screens keep the black/torn header visible and allow the input or picker region to occupy the lower portion.

All interactive controls remain at least 44 points. For Dynamic Type, grow row height and allow copy to wrap, but keep big serif statements and artwork from colliding. On compact screens, reduce decorative stickers before shrinking the main statement, photo, CTA, or required metadata.

Use SwiftUI or UIKit primitives for accessibility and focus order, but restyle app-owned surfaces explicitly. Native `Form`, default grouped lists, default blue links, stock segmented controls, and unstyled permission pre-prompts are not acceptable visual substitutes.

# Anti-generic checklist

- Do not replace the torn-paper construction with smooth rounded cards.
- Do not turn the discovery stage into a Tinder-like stack of clean photo cards.
- Do not use default iOS blue for selected states, links, toggles, or buttons.
- Do not omit hand-drawn art where the reference uses it as the primary visual mass.
- Do not use uniform corner radii across CTAs, profile plates, stickers, and sheets.
- Do not use generic SF Symbols as decorative characters, profile badges, or safety illustrations.
- Do not center every screen into a clean marketing layout; preserve offset collage and controlled asymmetry.
- Do not make fuchsia the only color; the source alternates fuchsia with lavender, tan, burgundy, white, and black.

</design-context>
