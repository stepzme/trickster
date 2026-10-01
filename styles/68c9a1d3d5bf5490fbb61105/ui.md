<design-context>
---
version: 1
platform: iOS
name: Badoo-design-analysis
description: "A photo-led dating interface built from bright white surfaces, a saturated violet gradient, heavy black headings, circular portraits, and full-height encounter cards. Five stable tabs move between nearby people, encounters, likes, chat, and profile; expressive line-and-color illustrations explain onboarding, empty states, premium, and safety."
colors:
  primary: "#6C36F4"
  on-primary: "#FFFFFF"
  primary-soft: "#EEE8FF"
  accent-pink: "#FF8CB4"
  accent-blue: "#4D8DFF"
  accent-green: "#35B96B"
  ink: "#202124"
  ink-muted: "#777980"
  ink-subtle: "#A9ABB1"
  canvas: "#FFFFFF"
  surface-1: "#F4F4F6"
  surface-2: "#E9E9ED"
  hairline: "#DEDFE3"
  semantic-success: "#35B96B"
  semantic-danger: "#E74A5A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 22, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  profile-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  encounter-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16 }
  premium-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 18 }
  safety-card: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  bottom navigation: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Badoo places people and intent first. Violet carries matching and premium actions; white chrome stays quiet around portraits, profile cards, chat, and safety tools.

**Key Characteristics:**
- Photo-led nearby grid and encounter cards.
- Saturated violet gradient for brand and CTA.
- Circular portraits and full-radius actions.
- Five stable social destinations.
- Expressive onboarding and safety illustrations.

# Non-negotiable visual invariants

- Imagery consistently uses photo-led nearby grid and encounter cards.
- Sampled screens consistently use saturated violet gradient for brand and CTA.
- The reference consistently shows circular portraits and full-radius actions.
- The reference consistently shows five stable social destinations.
- The reference consistently shows expressive onboarding and safety illustrations.

# Color and surfaces

### Brand & Accent
- **Badoo Violet** ({colors.primary}): Primary action, premium, message, and selected emphasis.
- **Pink** ({colors.accent-pink}): Match hints and supportive illustration.
- **Blue** ({colors.accent-blue}): Verification and linked trust signals.
- **Green** ({colors.accent-green}): Online and success state.

### Surface
- **Canvas** ({colors.canvas}): Discovery, chat, and profile.
- **Surface 1** ({colors.surface-1}): Inputs, safety cards, and secondary controls.
- **Surface 2** ({colors.surface-2}): Disabled state.
- **Hairline** ({colors.hairline}): List and input separation.

### Text
- **Ink** ({colors.ink}): Names, headings, and prompts.
- **Ink Muted** ({colors.ink-muted}): Guidance and profile metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled tabs and placeholders.

### Semantic
- **Success** ({colors.semantic-success}): Online and verified completion.
- **Danger** ({colors.semantic-danger}): Block, report, and safety warnings.
- **Overlay** ({colors.semantic-overlay}): Match, privacy, and premium focus.

# Typography

### Font Family

- **SF Pro Display** — destination and match headings.
- **SF Pro Text** — profiles, chat, forms, and plans.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38 points | 700 | Match statement |
| `{typography.headline}` | 22 points | 700 | Destination or prompt |
| `{typography.card-title}` | 17 points | 600 | Name, question, or plan |
| `{typography.body}` | 14 points | 400 | Profile and chat copy |
| `{typography.caption}` | 10 points | 400 | Tab and activity label |
| `{typography.button}` | 15 points | 600 | Primary action |

### Principles

- Use direct conversational prompts.
- Keep names and intent prominent.
- Use supporting copy for safety and consent.
- Avoid decorative typography over profile photos.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4 points base, 12 points gutters, 12 points card gaps, and 16 points form padding.

### Grid & Container

Nearby uses a three-column circular portrait grid. Encounters use one dominant full-height card. Chat and profile use single-column lists and cards.

### Whitespace Philosophy

Keep chrome open and light so portraits and emotional states remain dominant.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and chat |
| 1 | Soft gray control | Inputs and secondary rows |
| 2 | Violet card or action | Premium and matching |
| 3 | Dimmed photo plus sheet | Match, boost, and privacy |

### Decorative Depth

Use photo blur, overlay scrims, and flat illustration. Avoid shadows on ordinary profile rows.

# Navigation appearance

Nearby, Encounters, Likes, Chat, and Profile form the bottom bar. Filters remain top-right in discovery.

# Components

### Buttons

Primary actions use violet pills. Swipe decisions use circular white controls over photography. Destructive actions remain text-led and explicit.

### Cards & Containers

Encounter cards combine media, name, status, prompts, interests, and actions. Safety and premium cards use bounded violet treatments. Chat bubbles use compact pills.

### Inputs & Forms

Onboarding uses one question per screen with a single field. Chat uses a fixed composer with media, emoji, and voice. Profile editing uses grouped rows.

# Imagery and icons

Use photo blur, overlay scrims, and flat illustration. Avoid shadows on ordinary profile rows.

Nearby portraits are circular; encounters and matches use immersive photo crops. Illustration uses clean white space, black outlines, and purple/pink geometric fills.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Online, verified, matched, seen, boosted, profile completion, premium, and safety state use icon plus text rather than color alone.

# iOS adaptation

### Touch Targets

Keep tabs, swipe actions, filters, chat composer controls, premium rows, and safety actions at least 44 points.

### Collapsing Strategy

Reduce nearby columns before portrait size becomes illegible. Encounter media stays dominant while secondary prompts collapse behind details.

### Image Behavior

Use cover crops with focal-point protection on faces. Never stretch portraits; blur only for privacy, moderation, or background atmosphere.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't use profile photos as decorative backgrounds for forms.
- Don't hide block or report tools.
- Don't signal state by color alone.
- Don't mix safety and upsell messaging.
- Don't shrink swipe actions below touch size.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

# Known gaps

- Tokens were inferred visually from inspected mobile screens.
- All 14 flow names were inventoried; onboarding, nearby, encounters, chat, profile, and premium flows were image-reviewed.
- Gesture physics, calls, moderation behavior, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>
