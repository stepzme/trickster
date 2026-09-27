<design-context>
---
version: alpha
name: Pi-design-analysis
description: "An intimate dark AI companion interface with a warm charcoal canvas, cream serif conversation text, a restrained mint-green voice action, hairline composer borders, and richly colored editorial discovery illustrations."
colors: {primary: "#35B67A", on-primary: "#0F1A14", primary-hover: "#4BC98F", primary-focus: "#289462", ink: "#F1EEE7", ink-muted: "#C8C3BA", ink-subtle: "#8F8B84", ink-tertiary: "#62605B", canvas: "#242421", surface-1: "#2E2E2A", surface-2: "#383833", surface-3: "#44443E", surface-4: "#505049", hairline: "#4C4C46", hairline-strong: "#62625B", hairline-tertiary: "#73736B", inverse-canvas: "#F4F1EA", inverse-surface-1: "#E8E3D9", inverse-surface-2: "#DAD4C8", inverse-ink: "#242421", brand-secure: "#278E60", semantic-success: "#35B67A", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 40px, fontWeight: 400, lineHeight: 1.08, letterSpacing: -0.7px}
  display-lg: {fontFamily: Georgia, fontSize: 32px, fontWeight: 400, lineHeight: 1.12, letterSpacing: -0.4px}
  display-md: {fontFamily: Georgia, fontSize: 26px, fontWeight: 400, lineHeight: 1.16, letterSpacing: -0.2px}
  headline: {fontFamily: Georgia, fontSize: 22px, fontWeight: 400, lineHeight: 1.25, letterSpacing: -0.1px}
  card-title: {fontFamily: Georgia, fontSize: 17px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: Georgia, fontSize: 17px, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 48px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12px 16px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 10px 14px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10px}
  prompt-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12px}
  chat-surface: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 16px}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  side-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 16px}
---
## Overview

Pi feels like a quiet late-night conversation. Warm charcoal fills the screen, cream serif type makes responses personal, and a single mint-green voice action carries most of the chromatic emphasis.

**Key Characteristics:** warm dark canvas, cream serif dialogue, green voice circle, bottom composer, minimal response tools, compact side panel, and richly illustrated discovery prompts.

## Colors

### Brand & Accent

Mint green is reserved for voice, primary conversational action, and small success moments. The tiny flower mark may use a few bright illustrative colors.

### Surface

Charcoal is continuous across chat and navigation; slightly lighter brown-gray panels hold composer, history, and cards without breaking the intimate mood.

### Text

Warm cream leads dialogue and prompt titles, muted beige carries secondary navigation, and dim gray marks inactive tools.

### Semantic

Green indicates active voice or continuation; reports and destructive actions remain subdued until confirmation.

## Typography

### Font Family

Use a warm book serif such as Georgia for conversation and discovery titles, paired with SF Pro Text for controls and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32px | 400 | Reflective opener |
| headline | 22px | 400 | Conversation prompt |
| card-title | 17px | 400 | Discover title |
| body-lg | 17px | 400 | AI response |
| caption | 10px | 400 | Tool label |

### Principles

- Let serif text set the emotional voice.
- Keep controls small and visually secondary.
- Treat the green action as scarce and unmistakable.

### Note on Font Substitutes

Use Georgia or a similarly readable book serif; avoid a high-fashion Didone or a purely geometric sans for dialogue.

## Layout

### Spacing System

Use a 4px base, 16px reading gutters, 20–24px conversational separation, and a fixed composer near the safe area.

### Grid & Container

Chat is a single reading column; Discover uses an irregular two-column card mosaic; call mode centers one conversational state.

### Whitespace Philosophy

Large dark areas create calm and attention. Do not fill pauses with dashboard widgets or persistent status chrome.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm charcoal | Chat and call |
| 1 | Slightly lighter panel | Composer and history |
| 2 | Illustrated rounded card | Discover prompt |
| 3 | Side panel over dimmed chat | Navigation |

### Decorative Depth

Illustrated cards provide color and texture; main chat surfaces remain flat with only hairline composer outlines.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 4px | Inline state |
| rounded-sm | 8px | History row |
| rounded-md | 12px | Compact panel |
| rounded-lg | 16px | Discover card |
| rounded-full | full | Voice and utility controls |

### Photography & Illustration Geometry

Use richly colored artwork in rounded portrait or landscape cards; keep the chat itself free of decorative frames.

## Components

### Buttons

Primary voice uses a mint circular button; mute, menu, and response tools use quiet charcoal circles or bare icons.

### Pricing Tabs

There are no pricing tabs; appearance and voice choices use simple list selection with restrained green indication.

### Cards & Containers

Discover cards combine full-bleed art and white serif titles; chat history uses flat rows; continuation prompts use subtle outlined panels.

### Inputs & Forms

The composer is a thin outlined pill on charcoal with serif placeholder and green voice control; native keyboard presentation should harmonize with the dark palette.

### Status & Build Page

Keep listening, mute, call, continuation, and message feedback states directly beside the relevant action.

### Navigation

Use a compact side panel for New chat, Discover, history, Help, and Settings rather than persistent bottom tabs.

### Footer

No footer; the composer or call controls own the lower safe area.

## Do's and Don'ts

### Do

- Preserve warm dark space and serif conversational voice.
- Keep the mint action rare and central.
- Style native controls to inherit this visual system.

### Don't

- Don't turn chat into stacked bright message bubbles.
- Don't introduce multiple competing neon accents.
- Don't place decorative art behind long conversation text.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten composer tools |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Increase reading margins |

### Touch Targets

Voice, composer, menu, response tools, history rows, and call controls remain at least 44px.

### Collapsing Strategy

Preserve dialogue, composer, voice action, and call state; reduce Discover card density and secondary tools first.

### Image Behavior

Crop discovery art intentionally around subjects and maintain a calm text-safe zone for serif titles.

## Iteration Guide

Tune chat voice and composer first, then voice call, side navigation, Discover, settings, and recovery states.

## Known Gaps

- Some recorded video screens had no still preview.
- Subscription and long-tail account recovery were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
