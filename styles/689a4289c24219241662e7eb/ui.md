<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  profile-card: { backgroundColor: "{colors.surface-dark}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  reaction-button: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 20]}
  collection-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.on-primary}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 58 }
---

# Overview

VK Dating balances immersive dark profile discovery with bright white collections and account surfaces. Photography carries identity while reaction colors keep decisions explicit.

# Non-negotiable visual invariants

- The reference consistently shows faces and identity central.
- Sampled screens consistently use make reactions explicit beyond color.
- The reference consistently shows real photography consistently.
- The reference consistently shows preserve readable scrims over images.
- Imagery consistently uses a photo-led dating interface that alternates between dark immersive profile cards and bright white discovery collections. Blue system actions.
- The reference consistently shows pink category labels.
- The reference consistently shows red-purple-blue reaction controls create a familiar but energetic social aesthetic.

# Color and surfaces

### Brand & Accent

System blue marks navigation, filters, and general action. Pink labels collections; red, purple, and blue distinguish dislike, priority, and like.

### Surface

Use white for collections and profile management, pale gray for supporting cards, and near-black behind immersive profile media.

### Text

Near-black carries light-surface content; white overlays photography; gray carries metadata and inactive navigation.

### Semantic

Green confirms match or completion, amber warns, and red marks destructive action. The red dislike control needs an icon and label, not color alone.

# Typography

### Font Family

Use a friendly system sans with strong Cyrillic support.

### Hierarchy

Use 24–38 points onboarding statements, 17–20 points names and collection titles, 14–16 points bios, and 10–12 points metadata.

### Principles

Keep name, age, distance, activity, and intent easy to scan. Limit text overlays to a few short lines.

### Note on Font Substitutes

Use SF Pro or Inter with medium-to-bold profile headings and reliable Cyrillic metrics.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points discovery gutters, 12 points card gaps, and 24 points between collection sections.

### Grid & Container

Profiles use one tall media card. Collections use a two-column photo grid beneath occasional full-width campaigns.

### Whitespace Philosophy

Let photography fill discovery. On white surfaces, give collection headings and explanatory copy clear breathing room.

Surface hierarchy observed in the source:

Use image scrims, card overlap, and slight reaction-button lift. Collection cards stay mostly flat.

### Decorative Depth

Photography and campaign media provide depth. UI uses small gradient fills only for reaction or promotional emphasis.

# Navigation appearance

Use five bottom destinations for Profiles, Collections, Likes, Chats, and Profile. Keep filter access in Profiles and Collections headers.

# Components

### Buttons

Profile reactions are wide colored pills with distinct symbols. Native controls must inherit blue focus and the current light or dark surface.

### Cards & Containers

Profile cards layer activity, distance, name, age, and bio over a bottom scrim. Collection cards use one image, one label, and one short title.

### Inputs & Forms

Onboarding uses large dark fields and multi-select interest chips. Chat uses a familiar light message composer.

# Imagery and icons

Photography and campaign media provide depth. UI uses small gradient fills only for reaction or promotional emphasis.

Profile photography uses tall `cover` crops with face-safe placement. Collection imagery uses rounded portrait tiles; no separate illustration language is present.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Online, recently active, verified, liked, priority, match, unread, and profile-completion states appear beside the related person or message.

# iOS adaptation

### Touch Targets

Reaction buttons, filters, collection cards, navigation, likes, and chat actions require at least 44 points targets.

### Collapsing Strategy

Keep photo, name, activity, and reactions visible. Collapse full bio, interests, and secondary profile facts into a detail sheet.

### Image Behavior

Use `cover` with face-aware positioning for profiles and collection photos; use `contain` for badges, logos, and small identity marks.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Do not cover profile faces with controls.
- Do not mix unrelated illustration styles.
- Do not rely on swipe alone.
- Do not expose default accent colors.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

The inspected catalog documents 19 flows across signup, onboarding, profiles, collections, likes, chats, and profile management. Safety reporting and some match completion states are less represented.

</design-context>
