<design-context>
---
version: alpha
name: VK-Dating-design-analysis
description: "A photo-led dating interface that alternates between dark immersive profile cards and bright white discovery collections. Blue system actions, pink category labels, and red-purple-blue reaction controls create a familiar but energetic social aesthetic."

colors:
  primary: "#2688EB"
  on-primary: "#FFFFFF"
  primary-pressed: "#1E6FC5"
  accent-pink: "#F35BB4"
  accent-purple: "#8C3ACD"
  accent-red: "#B62940"
  ink: "#17181B"
  ink-muted: "#777A80"
  ink-subtle: "#A8AAB0"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F1F2F5"
  surface-dark: "#18171C"
  hairline: "#DFE1E5"
  semantic-success: "#41AF70"
  semantic-warning: "#F0A536"
  semantic-danger: "#D83D52"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  profile-card: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  reaction-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 20px }
  collection-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58px }
---

## Overview

VK Dating balances immersive dark profile discovery with bright white collections and account surfaces. Photography carries identity while reaction colors keep decisions explicit.

## Colors

### Brand & Accent

System blue marks navigation, filters, and general action. Pink labels collections; red, purple, and blue distinguish dislike, priority, and like.

### Surface

Use white for collections and profile management, pale gray for supporting cards, and near-black behind immersive profile media.

### Text

Near-black carries light-surface content; white overlays photography; gray carries metadata and inactive navigation.

### Semantic

Green confirms match or completion, amber warns, and red marks destructive action. The red dislike control needs an icon and label, not color alone.

## Typography

### Font Family

Use a friendly system sans with strong Cyrillic support.

### Hierarchy

Use 24–38px onboarding statements, 17–20px names and collection titles, 14–16px bios, and 10–12px metadata.

### Principles

Keep name, age, distance, activity, and intent easy to scan. Limit text overlays to a few short lines.

### Note on Font Substitutes

Use SF Pro or Inter with medium-to-bold profile headings and reliable Cyrillic metrics.

## Layout

### Spacing System

Use a 4px base, 8–12px discovery gutters, 12px card gaps, and 24px between collection sections.

### Grid & Container

Profiles use one tall media card. Collections use a two-column photo grid beneath occasional full-width campaigns.

### Whitespace Philosophy

Let photography fill discovery. On white surfaces, give collection headings and explanatory copy clear breathing room.

## Elevation & Depth

Use image scrims, card overlap, and slight reaction-button lift. Collection cards stay mostly flat.

### Decorative Depth

Photography and campaign media provide depth. UI uses small gradient fills only for reaction or promotional emphasis.

## Shapes

### Border Radius Scale

Use 8px chips, 12px collection cards, 18px profile media, 24px sheets, and pill-shaped reactions.

### Photography & Illustration Geometry

Profile photography uses tall `cover` crops with face-safe placement. Collection imagery uses rounded portrait tiles; no separate illustration language is present.

## Components

### Buttons

Profile reactions are wide colored pills with distinct symbols. Native controls must inherit blue focus and the current light or dark surface.

### Pricing Tabs

Collections, likes, and profile sections use underline tabs or compact chips with blue selected state.

### Cards & Containers

Profile cards layer activity, distance, name, age, and bio over a bottom scrim. Collection cards use one image, one label, and one short title.

### Inputs & Forms

Onboarding uses large dark fields and multi-select interest chips. Chat uses a familiar light message composer.

### Status & Build Page

Online, recently active, verified, liked, priority, match, unread, and profile-completion states appear beside the related person or message.

### Navigation

Use five bottom destinations for Profiles, Collections, Likes, Chats, and Profile. Keep filter access in Profiles and Collections headers.

### Footer

There is no footer. Profile and account actions live inside the final navigation destination.

## Do's and Don'ts

### Do

- Keep faces and identity central.
- Make reactions explicit beyond color.
- Use real photography consistently.
- Preserve readable scrims over images.

### Don't

- Do not cover profile faces with controls.
- Do not mix unrelated illustration styles.
- Do not rely on swipe alone.
- Do not expose default accent colors.

## Responsive Behavior

### Breakpoints

Keep one profile card on phones. Wider screens may place detail beside media and expand collections to more columns.

### Touch Targets

Reaction buttons, filters, collection cards, navigation, likes, and chat actions require at least 44px targets.

### Collapsing Strategy

Keep photo, name, activity, and reactions visible. Collapse full bio, interests, and secondary profile facts into a detail sheet.

### Image Behavior

Use `cover` with face-aware positioning for profiles and collection photos; use `contain` for badges, logos, and small identity marks.

## Iteration Guide

Start with onboarding, interest selection, profile discovery, explicit reactions, collections, likes, and chat. Add campaigns, verification, premium priority, and advanced filters afterward.

## Known Gaps

The inspected catalog documents 19 flows across signup, onboarding, profiles, collections, likes, chats, and profile management. Safety reporting and some match completion states are less represented.

</design-context>

Use the design system above for all UI you generate.
