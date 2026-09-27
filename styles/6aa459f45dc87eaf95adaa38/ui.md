<design-context>
---
version: alpha
name: Wabi-design-analysis
description: "A playful AI-creator network alternating clean pearl-white workspaces with immersive black mini-app feeds. The interface is restrained and object-led: black pill controls, large rounded canvases, glassy 3D bubbles, sparse typography, and a five-item dock make generated experiences feel like collectible social objects."

colors:
  primary: "#151515"
  on-primary: "#FFFFFF"
  primary-pressed: "#303030"
  ink: "#111111"
  ink-muted: "#6D6D6D"
  ink-subtle: "#A5A5A5"
  canvas: "#F8F8F6"
  surface-1: "#FFFFFF"
  surface-2: "#F0F0EE"
  inverse-canvas: "#050505"
  inverse-surface: "#121212"
  inverse-ink: "#FFFFFF"
  accent-cyan: "#32B8D8"
  accent-violet: "#7A63FF"
  hairline: "#DEDEDA"
  semantic-success: "#2FA56F"
  semantic-danger: "#E45B64"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -1.1px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7px }
  display-md: { fontFamily: System Sans, fontSize: 26px, fontWeight: 650, lineHeight: 1.15, letterSpacing: -0.4px }
  headline: { fontFamily: System Sans, fontSize: 21px, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2px }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 11px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14px, fontWeight: 550, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.15px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6px, sm: 10px, md: 16px, lg: 22px, xl: 30px, xxl: 40px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 22px }
  mini-app-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 0 }
  board-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 14px }
  prompt-composer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.lg}", padding: 14px 16px }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.pill}", height: 52px }
---

## Overview

Wabi pairs a monochrome social shell with expressive generated objects. White creation and profile spaces feel airy and tactile, while the feed becomes a black stage around one large interactive canvas.

## Colors

### Brand & Accent

Black and white are the product identity. Cyan, violet, yellow, and iridescent highlights come from generated 3D objects rather than persistent chrome.

### Surface

Use warm off-white for workspaces, pure white for tiles and composers, and near-black for the immersive feed. Keep nested cards only slightly separated.

### Text

Use near-black on light surfaces and white on the feed. Medium gray carries counts, timestamps, and supporting copy.

### Semantic

Use green for successful connection or publish state and soft red for report or delete. Do not repurpose object colors as status.

## Typography

### Font Family

Use a neutral modern system sans with compact metrics and clear lowercase forms.

### Hierarchy

Use 26–32px page statements, 20–21px headings, 14–17px working text, and 11–12px social metadata.

### Principles

Keep labels short and conversational. Let mini-app titles and prompts lead without competing display decoration.

### Note on Font Substitutes

Use SF Pro or Inter with 600–700 headings and regular body weights.

## Layout

### Spacing System

Use a 4px base, 12–16px phone gutters, 12px card gaps, and 24–32px between creation groups.

### Grid & Container

The feed uses one full-width rounded canvas. Home and Profile use two-column mini-app tiles; creation uses one conversational column.

### Whitespace Philosophy

Preserve broad empty fields around the agent, profile, and object tiles. The feed may be dense only around engagement controls.

## Elevation & Depth

Use soft ambient shadow under white tiles and docks. Contrast between black stage and light canvas does most of the layering.

### Decorative Depth

Use refractive bubbles, frosted controls, iridescent highlights, and small contact shadows. Keep them tied to content objects, not generic backgrounds.

## Shapes

### Border Radius Scale

Use 10px for compact controls, 16px for input surfaces, 22px for tiles, 30px for embedded canvases, and pills for navigation and primary actions.

### Photography & Illustration Geometry

Crop avatars as circles and mini-app art as circular glass objects or rounded rectangular canvases. Preserve the object silhouette with generous inset.

## Components

### Buttons

Primary actions are black full-width pills on light screens. Feed actions are outlined dark pills with white icons. Native controls must inherit these fills, radii, and restrained contrast.

### Pricing Tabs

Boards, content modes, and creation options use underlined text tabs or compact chips; selected state is black and unselected state is gray.

### Cards & Containers

Mini-app cards feature one large object preview, a short title, and minimal status. Draft labels sit as tiny frosted chips over the object.

### Inputs & Forms

The creation composer is a rounded white conversational card with prompt text, attachment or Max option, and a black circular send action.

### Status & Build Page

Use compact Draft, credit, unread, count, save, and publish indicators. Generation progress remains inside the agent conversation or preview.

### Navigation

Use a floating five-item dock for Home, Search, Create, Messages, and Profile. Create is emphasized with a dark circular button and optional unread badge.

### Footer

There is no footer. Terms, social links, account deletion, and sign out belong in Profile settings.

## Do's and Don'ts

### Do

- Alternate quiet light workspaces with an immersive black feed.
- Give one generated object or canvas visual priority.
- Keep social actions close to the mini app.
- Use black pills consistently for decisive actions.

### Don't

- Do not tint every system surface with rainbow color.
- Do not shrink interactive mini apps into ordinary feed thumbnails.
- Do not add heavy shadows to every tile.
- Do not leave default native blue on controls.

## Responsive Behavior

### Breakpoints

Phones show one feed canvas or one creation flow at a time. Wider screens may pair boards or conversation with live preview while preserving the single-object focus.

### Touch Targets

Navigation, engagement, remix, save, send, board, and mini-app controls require at least 44px targets.

### Collapsing Strategy

Keep canvas, title, primary interaction, and remix/save actions visible. Collapse comments, counts, details, and configuration into secondary panels.

### Image Behavior

Use `contain` for 3D objects and `cover` for user photos. Interactive canvases retain their authored aspect ratio inside rounded clipping.

## Iteration Guide

Start with onboarding, feed canvas, Home boards, prompt-to-draft creation, save/remix, Messages, and Profile. Add multiplayer, credits, publishing settings, and advanced moderation afterward.

## Known Gaps

Fifty-seven catalog flows were reviewed by structure with complete representative scenarios across onboarding, feed, creation, messaging, and profile. Several preview entries are video-only, so their transitional motion is not fully captured here.

</design-context>

Use the design system above for all UI you generate.
