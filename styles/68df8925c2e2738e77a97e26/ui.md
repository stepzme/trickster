<design-context>
---
version: 1
platform: iOS
name: Sora-design-analysis
description: "A cinematic black-first social media interface with full-screen generated video, compact white overlay controls, a right-side action rail, a dark five-item bottom bar with a central white create pill, and prompt-driven charcoal creation surfaces."
colors:
  canvas: "#000000"
  surface-primary: "#1E1C20"
  surface-secondary: "#2B292E"
  accent-primary: "#FFFFFF"
  accent-secondary: "#BDEBFF"
  text-primary: "#FFFFFF"
  text-secondary: "#C8C8CE"
  divider: "#333138"
  destructive: "#F04F63"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 38}
  title: {fontFamily: "SF Pro Display", fontSize: 26, fontWeight: 700, lineHeight: 32}
  section: {fontFamily: "SF Pro Text", fontSize: 22, fontWeight: 700, lineHeight: 27}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 10
rounded:
  control: 14
  card: 18
  sheet: 28
  pill: 999
components:
  media-viewport: {fill: "generated or user media", crop: "full-screen vertical", chrome: "overlay"}
  action-control: {fill: "translucent charcoal", shape: "circle", icon: "white"}
  prompt-composer: {fill: "surface-primary", radius: 24, action: "white circular arrow"}
  primary-action: {fill: "accent-primary", text: "black semibold", radius: 999, height: 50}
  bottom-navigation: {fill: "canvas", center: "white create pill", selected: "white"}
---

# Overview

Sora is a cinematic black-first interface in which generated or user media becomes the color system. The feed is a full-screen vertical viewport with compact white overlay chrome, a right-side action rail, creator text near the bottom, and a dark bottom bar anchored by a central white create control. Creation, drafts, profile, and settings shift to sparse black or charcoal workspaces with prompt fields, avatar chips, media grids, and restrained white actions.

# Non-negotiable visual invariants

- Full-screen vertical media occupies nearly the entire feed viewport; interface chrome overlays rather than frames it.
- Product surfaces outside media are black or dark charcoal, with white primary controls and muted gray secondary information.
- Feed actions form a compact vertical rail of white glyphs and counters along one side of the media.
- A dark five-position bottom bar uses a larger white central create pill or circle as its strongest navigation object.
- Creator identity and prompt or caption text sit near the bottom over media with controlled contrast support.
- Creation uses a rounded charcoal prompt composer, horizontal cameo/avatar chips, keyboard-aware layout, and a white circular submit control.
- Drafts and profiles use sparse black media grids with minimal borders and compact badges.
- Generated media, avatars, and video thumbnails remain content; the cloud logo and star-field do not constitute a reusable illustration system.

# Color and surfaces

Black is the primary canvas for feed, creation, drafts, profile, settings, and overlays. Charcoal around `#1E1C20` and `#2B292E` supports prompt fields, circular actions, popovers, rows, and sheets. Full-screen media supplies dynamic color. Onboarding alone uses a deep navy star field with cold-white and pale-blue details.

White is the main functional accent for primary pills, create, submit, publish, labels, and overlay icons. Gray separates metadata, counts, placeholders, and inactive navigation. Pink or red appears in liked, report, delete, or destructive states; blue is mostly native system UI. Additional bright brand colors or broad tinted panels would compete with generated media and break the black-first hierarchy.

# Typography

Use SF Pro Display and SF Pro Text. Onboarding and short identity titles are approximately 28-32 points bold, focused-screen and profile titles 22-26 points, creator names and primary labels 14-17 points semibold, captions and prompts 13-16 points, and counters or metadata 10-13 points gray.

Text over media is compact, left-aligned, and limited to creator, caption, and state; centered text is reserved for onboarding, advisories, and empty states. Dynamic Type should grow sheets, prompt fields, and list rows while maintaining overlay clearance, keeping the action rail reachable, and avoiding excessive text over the media focal area.

# Screen composition

The feed archetype is one edge-to-edge vertical media viewport beneath the status area. A compact centered feed label sits at the top, a vertical action rail hugs the right edge, creator and caption information occupy the lower-left, pagination dots sit near the bottom, and persistent navigation overlays or follows the lower safe area.

Onboarding centers the logo and short title over a deep navy star field, with stacked white pill actions near the bottom; later forms become keyboard-first dark layouts. Creation uses a full-height black workspace with compact top title and close control, source preview or attachment, horizontal cameo chips, a large charcoal prompt composer, compact settings popovers, and keyboard.

Comments and share appear as rounded dark or blurred bottom sheets with a media thumbnail, rows, search, avatar choices, and bottom actions. Profile and drafts use a centered avatar or stats header, segmented tabs, and a sparse two-column media grid. Draft tiles show thumbnails, blurred or loading placeholders, compact status rings, badges, and publishing controls.

# Navigation appearance

The bottom bar is black with five compact positions. The center create affordance is a larger white pill or circle with a black plus; the remaining items use white or gray line icons, and the profile position may use an avatar. Focused creation and editing surfaces temporarily remove the bar.

Feed top chrome uses a compact centered label with chevron and one small trailing action. Back or close affordances are plain white chevrons or circular charcoal buttons. Overflow actions appear in compact dark rounded popovers; sheets use rounded top corners and dimmed or blurred context. Destination names and order must not be copied into another product.

# Components

The media viewport uses a vertical full-screen crop and adds only necessary contrast gradient or text shadow near labels. The action rail uses consistent white icons for reaction, conversation, remix, share, and overflow, each with a compact counter and at least a 44-point hit area.

Primary actions are white pills with black semibold labels, approximately 48-52 points high. Secondary controls are charcoal pills or circles with white icons and thin gray separation. The prompt composer is a large charcoal rounded field with media attachment, multiline prompt, and a white circular arrow; cameo avatars form a horizontal row immediately above it.

Comments use a rounded dark sheet with handle, small source thumbnail, rows, and composer. Share uses dimmed/blurred context, search, recipient avatar, and bottom pills. Draft cards use media directly on black, with loading ring, new badge, compact publish action, and overflow for download or delete.

# Imagery and icons

Generated and user media is the dominant imagery and must remain edge-to-edge in feed/detail contexts. Draft thumbnails, source previews, cameos, profile avatars, and selected photos retain their functional crops: vertical cover for feed, compact rectangular previews, circular faces, and sparse grid thumbnails. These media regions cannot be omitted while final assets are pending; temporary media must preserve scale, crop, and visual density.

The cloud-face logo and navy star texture identify onboarding, while system-like white icons provide product chrome. They do not establish a standalone authored illustration system: no recurring character scenes or independent decorative family was observed. Do not turn the logo into a mascot narrative or substitute drawn scenes for generated media.

# States

Observed states include star-field onboarding, social login and invitation forms, photo picker, cameo selection, populated full-screen feed, liked state, comments sheet, share sheet, remix source preview, prompt entry, generation settings popover, loading spinner, generation-return chip, publish form, draft loading and completed thumbnails, new badge, edit caption, download/delete overflow, profile grid, settings list, notification state, native auth alert, and keyboard states. Black surfaces, white controls, compact overlays, and media dominance remain stable.

# iOS adaptation

Extend vertical media and black canvases through the screen while keeping status, action rail, captions, navigation, and home indicator readable within safe areas. Creation and forms must track the keyboard; sheets use native safe-area padding and internal scrolling. Feed paging should preserve one full media viewport per page without exposing gaps.

Action-rail icons, bottom navigation, create control, close/back, prompt actions, avatar chips, and sheet rows require at least 44-point hit regions. VoiceOver should announce media identity and caption, action rail, pagination, then bottom navigation; creation should follow source media, cameo choices, prompt, settings, and submit. On compact widths, shorten captions or collapse secondary actions before shrinking controls. Preserve the authored dark appearance; do not expose light default components except native system overlays.

# Anti-generic checklist

- Do not place full-screen media inside rounded cards or surround it with white page chrome.
- Do not fill black negative space with generic panels, separators, or decorative copy.
- Do not replace the central white create control with an ordinary equal-weight tab icon.
- Do not use an unstyled `TabView`, light `Form`, or default blue primary buttons.
- Do not remove the right-side action rail or scatter its controls around the viewport.
- Do not omit generated media, avatars, source previews, or draft thumbnails where they carry the composition.
- Do not infer an illustration package from the cloud logo and star-field onboarding.
- Do not copy the source product's destinations, generation sequence, or social actions into the adapted product.

</design-context>
