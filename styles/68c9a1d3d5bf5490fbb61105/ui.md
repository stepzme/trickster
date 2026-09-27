<design-context>
---
version: alpha
name: Badoo-design-analysis
description: "A photo-led dating interface built from bright white surfaces, a saturated violet gradient, heavy black headings, circular portraits, and full-height encounter cards. Five stable tabs move between nearby people, encounters, likes, chat, and profile; expressive line-and-color illustrations explain onboarding, empty states, premium, and safety."
colors:
  primary: "#6C36F4"
  on-primary: "#FFFFFF"
  primary-hover: "#5924D9"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.03, letterSpacing: -0.8px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 31px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 22px, xl: 28px, xxl: 34px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  profile-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  encounter-action: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16px }
  premium-card: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 18px }
  safety-card: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Badoo places people and intent first. Violet carries matching and premium actions; white chrome stays quiet around portraits, profile cards, chat, and safety tools.

**Key Characteristics:**
- Photo-led nearby grid and encounter cards.
- Saturated violet gradient for brand and CTA.
- Circular portraits and full-radius actions.
- Five stable social destinations.
- Expressive onboarding and safety illustrations.

## Colors

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

## Typography

### Font Family

- **SF Pro Display** — destination and match headings.
- **SF Pro Text** — profiles, chat, forms, and plans.
- **SF Mono** — codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 38px | 700 | Match statement |
| `{typography.headline}` | 22px | 700 | Destination or prompt |
| `{typography.card-title}` | 17px | 600 | Name, question, or plan |
| `{typography.body}` | 14px | 400 | Profile and chat copy |
| `{typography.caption}` | 10px | 400 | Tab and activity label |
| `{typography.button}` | 15px | 600 | Primary action |

### Principles

- Use direct conversational prompts.
- Keep names and intent prominent.
- Use supporting copy for safety and consent.
- Avoid decorative typography over profile photos.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px gutters, 12px card gaps, and 16px form padding.

### Grid & Container

Nearby uses a three-column circular portrait grid. Encounters use one dominant full-height card. Chat and profile use single-column lists and cards.

### Whitespace Philosophy

Keep chrome open and light so portraits and emotional states remain dominant.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Discovery and chat |
| 1 | Soft gray control | Inputs and secondary rows |
| 2 | Violet card or action | Premium and matching |
| 3 | Dimmed photo plus sheet | Match, boost, and privacy |

### Decorative Depth

Use photo blur, overlay scrims, and flat illustration. Avoid shadows on ordinary profile rows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Tags and fields |
| `{rounded.sm}` | 12px | Chat bubbles |
| `{rounded.md}` | 16px | Premium and safety cards |
| `{rounded.lg}` | 22px | Encounter and modal cards |
| `{rounded.pill}` | full | CTAs and bubbles |
| `{rounded.full}` | full | Portraits and swipe actions |

### Photography & Illustration Geometry

Nearby portraits are circular; encounters and matches use immersive photo crops. Illustration uses clean white space, black outlines, and purple/pink geometric fills.

## Components

### Buttons

Primary actions use violet pills. Swipe decisions use circular white controls over photography. Destructive actions remain text-led and explicit.

### Pricing Tabs

Profile switches between Plans and Safety with a simple underline. Premium comparisons use feature rows with checkmarks.

### Cards & Containers

Encounter cards combine media, name, status, prompts, interests, and actions. Safety and premium cards use bounded violet treatments. Chat bubbles use compact pills.

### Inputs & Forms

Onboarding uses one question per screen with a single field. Chat uses a fixed composer with media, emoji, and voice. Profile editing uses grouped rows.

### Status & Build Page

Online, verified, matched, seen, boosted, profile completion, premium, and safety state use icon plus text rather than color alone.

### Navigation

Nearby, Encounters, Likes, Chat, and Profile form the bottom bar. Filters remain top-right in discovery.

### Footer

Bottom navigation persists through destinations; full-screen match and profile media may temporarily replace it.

## Do's and Don'ts

### Do

- Keep consent and safety language explicit.
- Let portraits dominate discovery.
- Preserve intent and verification cues.
- Make premium benefits comparable.
- Use illustration to explain non-photo concepts.

### Don't

- Don't use profile photos as decorative backgrounds for forms.
- Don't hide block or report tools.
- Don't signal state by color alone.
- Don't mix safety and upsell messaging.
- Don't shrink swipe actions below touch size.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Increase nearby columns or split chat |
| Compact | 390–767px | Default mobile composition |
| Small | <390px | Reduce nearby columns and shorten prompts |

### Touch Targets

Keep tabs, swipe actions, filters, chat composer controls, premium rows, and safety actions at least 44px.

### Collapsing Strategy

Reduce nearby columns before portrait size becomes illegible. Encounter media stays dominant while secondary prompts collapse behind details.

### Image Behavior

Use cover crops with focal-point protection on faces. Never stretch portraits; blur only for privacy, moderation, or background atmosphere.

## Iteration Guide

1. Establish navigation and portrait geometry.
2. Build Nearby and Encounters.
3. Add likes, match, and chat.
4. Add profile, verification, and safety.
5. Add premium and illustrations last.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 14 flow names were inventoried; onboarding, nearby, encounters, chat, profile, and premium flows were image-reviewed.
- Gesture physics, calls, moderation behavior, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
