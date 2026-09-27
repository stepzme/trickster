<design-context>
---
version: alpha
name: Sora-design-analysis
description: "A cinematic, black-first social video interface that alternates between an immersive cosmic onboarding world and almost invisible media chrome. Full-screen video is the dominant surface; controls are compact white glyphs, translucent charcoal circles, outlined pills, and one central white create button. Creation happens in a dark prompt composer with cameo avatars, while drafts and profiles use sparse black grids."

colors:
  primary: "#FFFFFF"
  on-primary: "#0A0A0A"
  primary-hover: "#F0F0F0"
  primary-focus: "#DADADA"
  ink: "#FFFFFF"
  ink-muted: "#C8C8CE"
  ink-subtle: "#8B8B94"
  ink-tertiary: "#62626B"
  canvas: "#000000"
  surface-1: "#1E1C20"
  surface-2: "#2B292E"
  surface-3: "#38363D"
  surface-4: "#45424A"
  hairline: "#333138"
  hairline-strong: "#5A5661"
  hairline-tertiary: "#76717E"
  inverse-canvas: "#FFFFFF"
  inverse-surface-1: "#F3F3F4"
  inverse-surface-2: "#E6E6E8"
  inverse-ink: "#08080A"
  brand-secure: "#BDEBFF"
  semantic-success: "#74D69B"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: SF Pro Display
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.1px
  display-lg:
    fontFamily: SF Pro Display
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.7px
  display-md:
    fontFamily: SF Pro Display
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  headline:
    fontFamily: SF Pro Display
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.3px
  card-title:
    fontFamily: SF Pro Display
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  subhead:
    fontFamily: SF Pro Text
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: -0.1px
  body-lg:
    fontFamily: SF Pro Text
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: 0
  body:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: SF Pro Text
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: SF Pro Text
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: SF Pro Text
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: SF Pro Text
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  mono:
    fontFamily: SF Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  xxl: 32px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 48px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 12px 20px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 10px 16px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 13px 24px
  video-feed-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 0
  action-circle:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 10px
  prompt-composer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 12px 16px
  cameo-avatar:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: 2px
  status-badge:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 52px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 8px 12px
---

## Overview

Sora combines a playful space-themed entry experience with an almost entirely black social video product. After onboarding, generated media becomes the color system. The interface avoids decorative panels and lets white controls float directly over video or black space.

**Key Characteristics:**
- Full-screen vertical video with a right-side action rail.
- Black surfaces, white controls, and muted gray secondary information.
- Central white create action anchors the bottom bar.
- Cosmic navy onboarding with a pale-blue cloud mascot.
- Prompt-first creation with cameo avatars and an integrated submit action.
- Sparse drafts and profile grids.

## Colors

### Brand & Accent
- White is the main functional accent for create, continue, and publish.
- Pale blue belongs to the mascot and cosmic onboarding only.

### Surface
- Black is the default feed, editor, drafts, and profile canvas.
- Charcoal surfaces appear in prompt fields, circular dismiss buttons, and secondary pills.
- Onboarding replaces black with a deep star-field navy.

### Text
- White handles labels and high-priority captions.
- Cool gray separates supporting copy, counts, and legal text.
- Text over media gains a dark gradient or shadow only when necessary.

### Semantic
- Success is restrained and should not compete with video.
- Black overlay may strengthen media legibility or focus.

## Typography

### Font Family

- SF Pro Display for identity and profile headlines.
- SF Pro Text for captions, prompts, controls, and metadata.
- SF Mono only for timed generation or diagnostic values.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 40px | 700 | Brand or launch title |
| display-lg | 32px | 700 | Onboarding title |
| display-md | 26px | 700 | Profile name or advisory title |
| headline | 22px | 700 | Focused screen title |
| body | 15px | 400 | Captions and prompt text |
| caption | 11px | 400 | Counts and legal copy |

### Principles

- Use bold type for short identity moments, not long captions.
- Keep creator captions left-aligned and compact over media.
- Use centered text only in onboarding, advisories, and empty states.

### Note on Font Substitutes

Use the Apple system family to preserve the compact, familiar control rhythm.

## Layout

### Spacing System

Use a 4px base. Keep overlay controls 8–12px apart, composer groups 12–16px apart, and onboarding blocks separated by 24–32px.

### Grid & Container

Feed content is one full-width media viewport. Profile and drafts use a sparse two-column media grid. Creation remains a single focused column above the keyboard.

### Whitespace Philosophy

Black space is functional and cinematic. Avoid filling unused regions with cards, separators, or decorative copy.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Full-screen media or black canvas | Feed, drafts, profile |
| 1 | Translucent charcoal circle or pill | Close, overflow, secondary action |
| 2 | Opaque white pill | Continue, submit, publish |
| 3 | Focused full-screen layer | Creation and editing |

### Decorative Depth

Onboarding uses stars and subtle nebula texture. Product screens use media and translucent overlays rather than shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Small media tags |
| rounded-md | 12px | Draft thumbnails |
| rounded-lg | 18px | Media containers |
| rounded-xl | 24px | Prompt composer |
| rounded-pill | full | CTAs and counters |
| rounded-full | full | Cameos, avatars, action circles |

### Photography & Illustration Geometry

Generated media is edge-to-edge and vertically cropped. Avatars and cameos are circular. The mascot remains centered with generous star-field space.

## Components

### Buttons

Use white pill buttons with black labels for primary actions. Secondary actions are black or charcoal with thin gray outlines. The submit control can collapse to a white circular arrow.

### Pricing Tabs

No pricing tabs appeared in the reviewed flows. If needed, use the outlined pill language rather than a card-heavy selector.

### Cards & Containers

Avoid conventional cards in feed and profile. Drafts use media thumbnails directly on black; onboarding forms use rounded pills without an enclosing panel.

### Inputs & Forms

The prompt composer is a rounded charcoal field with media attachment on the left and a circular submit action on the right. Cameos sit in a horizontal avatar row immediately above it.

### Status & Build Page

New or invitation counts use small white pills with black text. Draft state is conveyed by location in Drafts and a small badge rather than a dedicated status dashboard.

### Navigation

The bottom bar has five glyphs. The center create action is a large white circle with a black plus; profile uses the user avatar. Focused flows temporarily remove the bar.

### Footer

Do not add a footer. End screens on black with safe-area clearance.

## Do's and Don'ts

### Do

- Let generated media supply the color.
- Keep feed controls visually light and thumb-reachable.
- Give the create action unmistakable central priority.
- Use cosmic imagery only for entry and transitional states.
- Keep prompt and cameo selection together.

### Don't

- Don't wrap every video or profile section in cards.
- Don't add a colorful brand accent to the feed chrome.
- Don't use the star field behind generated media.
- Don't separate publishing into many small forms.
- Don't crowd drafts with metadata.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighter captions and cameo spacing |
| Standard | 375–430px | Default full-screen composition |
| Wide | 431px+ | Larger media crop and composer width |

### Touch Targets

Overlay actions, bottom navigation, and close controls retain at least 44px hit areas. The center create action is larger.

### Collapsing Strategy

Long captions truncate behind an explicit expansion action. Cameos scroll horizontally. Secondary publishing actions stack before the primary action becomes narrower.

### Image Behavior

Use aspect-fill for vertical feed media and preserve the subject in the safe center. Draft thumbnails may use fixed rounded portrait crops.

## Iteration Guide

Start with media hierarchy, then tune overlay legibility and thumb reach. Only after that refine the cosmic entry art and microcopy.

## Known Gaps

- Video motion and generation waiting behavior were not represented by still images.
- Moderation, error, and failed-generation states were not present in the sampled flows.
- Tablet and landscape behavior was not observed.
</design-context>
