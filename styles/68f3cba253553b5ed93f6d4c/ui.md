<design-context>
---
version: 1
platform: iOS
name: Dzen-design-analysis
description: "A dark immersive media feed with near-black cards, white editorial text, warm coral subscribe actions, large edge-to-edge video and article imagery, compact engagement rows, a five-destination content tab bar, and focused black creation surfaces for posts, clips, articles, and video."
colors:
  primary: "#FF6A3D"
  on-primary: "#FFFFFF"
  primary-soft: "#3A211B"
  ink: "#FFFFFF"
  ink-muted: "#9C9C9F"
  ink-subtle: "#66666A"
  canvas: "#000000"
  surface-1: "#171717"
  surface-2: "#242426"
  hairline: "#303033"
  semantic-success: "#35B66A"
  semantic-danger: "#E05A64"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  media-frame: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0 }
  action-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.sm}", padding: 12 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Dzen is a dark media canvas where creator imagery and video fill the screen. White type structures the feed while coral identifies subscription and publish actions.

# Non-negotiable visual invariants

- The recurring color treatment uses Near-black immersive feed.
- Let creator media dominate.
- Keep source and subscription visible.
- Preserve engagement context.
- Confirm draft loss or save.
- The feed is a single vertical stream with large media and creator cards.
- Creation uses a full-screen dark composer with a compact tool row.
- Let media fill space; keep copy and actions tightly grouped beneath the associated item.

# Color and surfaces

- **Primary** ({colors.primary}): Subscribe, publish, forward, and selected emphasis.
- **Primary Soft** ({colors.primary-soft}): Low-emphasis coral state.

- **Canvas** ({colors.canvas}): Feed, video, clips, and composer.
- **Surface 1** ({colors.surface-1}): Content cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls.
- **Hairline** ({colors.hairline}): Card and sheet divisions.

- **Ink** ({colors.ink}): Headlines and primary controls.
- **Ink Muted** ({colors.ink-muted}): Metadata and engagement counts.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder state.

- **Success** ({colors.semantic-success}): Published and monetization success.
- **Danger** ({colors.semantic-danger}): Report, block, and destructive state.
- **Overlay** ({colors.semantic-overlay}): Media and sheet focus.

# Typography

- **SF Pro Display** — feed and creator headings.
- **SF Pro Text** — body, metadata, and controls.
- **SF Mono** — code or technical creator data.

Use 27–38 points for feature titles, 17–22 points for feed headlines, 14–16 points body, and 10–12 points metadata.

- Keep headlines readable over or below media.
- Use compact metadata rows.
- Preserve creator identity near each item.
- Keep composer text comfortable in dark mode.

Use the platform system sans or **Inter**.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points card padding, 16 points feed gutters where present, and 8 points engagement gaps.

The feed is a single vertical stream with large media and creator cards. Creation uses a full-screen dark composer with a compact tool row.

Let media fill space; keep copy and actions tightly grouped beneath the associated item.

Creator photography and video supply all decorative depth; the product shell stays monochrome.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Clips, Create, Video, and Channel remain in the bottom bar; notifications and refresh sit in the top chrome.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use coral subscribe pills and publish circles; engagement actions stay monochrome line icons.

Use feed cards, media frames, creator headers, engagement rows, creation sheets, and draft confirmations.

Creation supports text, mention, attachment, media preview, settings, and publish while keeping the canvas uncluttered.

Show subscribed, liked, saved, draft, publishing, reported, blocked, and monetization state explicitly.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Crop creator media to strong editorial frames and full-width video. Do not impose a decorative illustration system on user content.

Use cover for designed feed media and contain vertical clips as needed; never stretch creator content.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show subscribed, liked, saved, draft, publishing, reported, blocked, and monetization state explicitly.

- **Success** ({colors.semantic-success}): Published and monetization success.
- **Danger** ({colors.semantic-danger}): Report, block, and destructive state.
- **Overlay** ({colors.semantic-overlay}): Media and sheet focus.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep tabs, creator, subscribe, reactions, share, overflow, and creation tools at least 44 points.
- Preserve media, creator, headline, engagement, and navigation. Move secondary metadata and recommendations below the item.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not brighten the shell with many accents.
- Do not hide report and block actions.
- Do not crop video without respecting aspect ratio.
- Do not add decorative cards around every media item.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
