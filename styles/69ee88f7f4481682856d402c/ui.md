<design-context>
---
version: 1
platform: iOS
name: VK-Video-design-analysis
description: "A bright video-discovery interface built from white surfaces, oversized thumbnail imagery, compact black titles, cool-blue navigation, and a red play-brand accent. Dense feeds remain readable through strict card rhythm and minimal chrome."

colors:
  primary: "#2688EB"
  on-primary: "#FFFFFF"
  primary-pressed: "#1E6FC5"
  accent-red: "#F03448"
  ink: "#17181B"
  ink-muted: "#73767C"
  ink-subtle: "#A5A8AD"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F3F5"
  hairline: "#DFE1E5"
  semantic-success: "#42AF72"
  semantic-warning: "#E5A038"
  semantic-danger: "#E34B58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.28, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 3, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  video-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0 }
  channel-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  search-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [10, 12]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

VK Video uses strict white feed structure so vivid thumbnails and channel media carry the visual energy. Blue guides navigation while red stays tied to the play identity and live video.

# Non-negotiable visual invariants

- Let thumbnails lead discovery.
- Keep metadata consistent.
- Preserve watch progress.
- Separate long video and clips modes.
- The primary feed is single-column; themed sections use horizontal rails or two-column grids.
- Playback stays edge-to-edge.
- Let thumbnails touch the feed rhythm while keeping title and metadata blocks distinct.
- Use more space around search and channel headers.

# Color and surfaces

Blue owns navigation, search, follow, and general action. Red is limited to the play mark, live content, and urgent media state.

Use white for feeds and channel pages, pale gray for search and placeholders, and black for playback chrome.

Near-black carries titles; gray carries channels, views, dates, duration context, and inactive navigation.

Green confirms upload or save, amber warns, and red marks live or destructive action. Use labels with all states.

# Typography

Use a compact system sans with readable Cyrillic and strong thumbnail-title pairing.

Use 24–38 points page titles, 15–20 points video and channel titles, 12–14 points metadata, and 10 points navigation labels.

Limit titles to a few lines, preserve clear channel metadata, and keep duration separate from title text.

Use SF Pro or Inter with medium card titles and tabular duration figures.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points feed gutters, 10 points card gaps, and 20–24 points between discovery sections.

The primary feed is single-column; themed sections use horizontal rails or two-column grids. Playback stays edge-to-edge.

Let thumbnails touch the feed rhythm while keeping title and metadata blocks distinct. Use more space around search and channel headers.

Thumbnails, channel art, and video provide all decorative depth. UI stays neutral.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five bottom destinations for Home, Clips, Create, Subscriptions, and Profile. Keep discovery tabs in the Home header.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Subscribe, create, and follow actions use blue or high-contrast white over playback. Native controls must inherit blue focus and the current surface.

Video cards pair one thumbnail with title, channel, views, age, and overflow. Continue Watching adds progress to the thumbnail.

Search uses a pale field and cancel action. Publishing forms use grouped fields for title, media, cover, category, and visibility.

Live, duration, progress, subscribed, saved, restricted, upload, and processing states appear on the relevant thumbnail or creator flow.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Video thumbnails use 16:9 `cover`; clips use portrait `cover`; channel avatars are circular. No separate illustration language is present.

Use `cover` for thumbnails and clips, circular crop for avatars, and `contain` for logos or unavailable placeholders.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Live, duration, progress, subscribed, saved, restricted, upload, and processing states appear on the relevant thumbnail or creator flow.

Green confirms upload or save, amber warns, and red marks live or destructive action. Use labels with all states.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Tabs, video cards, channel links, search, overflow, and navigation require at least 44 points hit regions.
- Keep thumbnail, title, channel, duration, and primary action visible. Move secondary metadata and management into detail or overflow.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not decorate feed backgrounds.
- Do not over-round every card.
- Do not hide channel attribution.
- Do not expose unrelated accent colors.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The inspected catalog documents 86 flows across onboarding, feeds, Kids, search, channels, clips, subscriptions, profile, creation, and settings. Some live and upload-failure states are less represented.

</design-context>
