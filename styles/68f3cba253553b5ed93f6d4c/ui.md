<design-context>
---
version: alpha
name: Dzen-design-analysis
description: "A dark immersive media feed with near-black cards, white editorial text, warm coral subscribe actions, large edge-to-edge video and article imagery, compact engagement rows, a five-destination content tab bar, and focused black creation surfaces for posts, clips, articles, and video."
colors:
  primary: "#FF6A3D"
  on-primary: "#FFFFFF"
  primary-hover: "#E9572F"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 27px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.1px }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 18px }
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  media-frame: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 0 }
  action-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px }
  input: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Dzen is a dark media canvas where creator imagery and video fill the screen. White type structures the feed while coral identifies subscription and publish actions.

**Key Characteristics:**
- Near-black immersive feed.
- Large video, article, and clip media.
- Coral subscribe and forward actions.
- Compact engagement rows.
- Dark creator tools and modal sheets.

## Colors

### Brand & Accent
- **Primary** ({colors.primary}): Subscribe, publish, forward, and selected emphasis.
- **Primary Soft** ({colors.primary-soft}): Low-emphasis coral state.

### Surface
- **Canvas** ({colors.canvas}): Feed, video, clips, and composer.
- **Surface 1** ({colors.surface-1}): Content cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary controls.
- **Hairline** ({colors.hairline}): Card and sheet divisions.

### Text
- **Ink** ({colors.ink}): Headlines and primary controls.
- **Ink Muted** ({colors.ink-muted}): Metadata and engagement counts.
- **Ink Subtle** ({colors.ink-subtle}): Disabled and placeholder state.

### Semantic
- **Success** ({colors.semantic-success}): Published and monetization success.
- **Danger** ({colors.semantic-danger}): Report, block, and destructive state.
- **Overlay** ({colors.semantic-overlay}): Media and sheet focus.

## Typography

### Font Family
- **SF Pro Display** — feed and creator headings.
- **SF Pro Text** — body, metadata, and controls.
- **SF Mono** — code or technical creator data.

### Hierarchy
Use 27–38px for feature titles, 17–22px for feed headlines, 14–16px body, and 10–12px metadata.

### Principles
- Keep headlines readable over or below media.
- Use compact metadata rows.
- Preserve creator identity near each item.
- Keep composer text comfortable in dark mode.

### Note on Font Substitutes
Use the platform system sans or **Inter**.

## Layout

### Spacing System
Use a 4px base, 12px card padding, 16px feed gutters where present, and 8px engagement gaps.

### Grid & Container
The feed is a single vertical stream with large media and creator cards. Creation uses a full-screen dark composer with a compact tool row.

### Whitespace Philosophy
Let media fill space; keep copy and actions tightly grouped beneath the associated item.

## Elevation & Depth
Use dark surface contrast and bottom sheets, not shadows. Full-screen video remains visually flat and immersive.

### Decorative Depth
Creator photography and video supply all decorative depth; the product shell stays monochrome.

## Shapes

### Border Radius Scale
Use 8px for thumbnails, 12px for cards, 16px for action groups, 22px for sheets, and full pills for subscribe.

### Photography & Illustration Geometry
Crop creator media to strong editorial frames and full-width video. Do not impose a decorative illustration system on user content.

## Components

### Buttons
Use coral subscribe pills and publish circles; engagement actions stay monochrome line icons.

### Pricing Tabs
Content modes and studio analytics use compact tabs or chips with high-contrast selected state.

### Cards & Containers
Use feed cards, media frames, creator headers, engagement rows, creation sheets, and draft confirmations.

### Inputs & Forms
Creation supports text, mention, attachment, media preview, settings, and publish while keeping the canvas uncluttered.

### Status & Build Page
Show subscribed, liked, saved, draft, publishing, reported, blocked, and monetization state explicitly.

### Navigation
Home, Clips, Create, Video, and Channel remain in the bottom bar; notifications and refresh sit in the top chrome.

### Footer
The black tab bar stays stable in consumption; creation replaces it with attachment and settings tools.

## Do's and Don'ts

### Do
- Let creator media dominate.
- Keep source and subscription visible.
- Preserve engagement context.
- Confirm draft loss or save.

### Don't
- Don't brighten the shell with many accents.
- Don't hide report and block actions.
- Don't crop video without respecting aspect ratio.
- Don't add decorative cards around every media item.

## Responsive Behavior

### Breakpoints
Use a single media column on phones, a centered feed on tablet, and feed plus recommendation or channel rail above 1024px.

### Touch Targets
Keep tabs, creator, subscribe, reactions, share, overflow, and creation tools at least 44px.

### Collapsing Strategy
Preserve media, creator, headline, engagement, and navigation. Move secondary metadata and recommendations below the item.

### Image Behavior
Use cover for designed feed media and contain vertical clips as needed; never stretch creator content.

## Iteration Guide
1. Build feed and content cards.
2. Add video, clips, comments, and sharing.
3. Add channel and subscription.
4. Add creation and drafts.
5. Add studio, analytics, moderation, and monetization.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 31 flows were inventoried; Home, Viewing content: Video, and Creating a post were image-reviewed.
- Article editing, studio analytics, and monetization were not deeply sampled.
- No coherent product-owned illustration language appeared in reviewed screens.

</design-context>

Use the design system above for all UI you generate.
