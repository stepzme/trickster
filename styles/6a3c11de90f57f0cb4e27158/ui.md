<design-context>
---
version: 1
platform: iOS
name: Pi-design-analysis
description: "An intimate dark AI companion interface with a warm charcoal canvas, cream serif conversation text, a restrained mint-green voice action, hairline composer borders, and richly colored editorial discovery illustrations."
colors: {primary: "#35B67A", on-primary: "#0F1A14", primary-focus: "#289462", ink: "#F1EEE7", ink-muted: "#C8C3BA", ink-subtle: "#8F8B84", ink-tertiary: "#62605B", canvas: "#242421", surface-1: "#2E2E2A", surface-2: "#383833", surface-3: "#44443E", surface-4: "#505049", hairline: "#4C4C46", hairline-strong: "#62625B", hairline-tertiary: "#73736B", inverse-canvas: "#F4F1EA", inverse-surface-1: "#E8E3D9", inverse-surface-2: "#DAD4C8", inverse-ink: "#242421", brand-secure: "#278E60", semantic-success: "#35B67A", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 40, fontWeight: 400, lineHeight: 1.08, letterSpacing: -0.7}
  display-lg: {fontFamily: Georgia, fontSize: 32, fontWeight: 400, lineHeight: 1.12, letterSpacing: -0.4}
  display-md: {fontFamily: Georgia, fontSize: 26, fontWeight: 400, lineHeight: 1.16, letterSpacing: -0.2}
  headline: {fontFamily: Georgia, fontSize: 22, fontWeight: 400, lineHeight: 1.25, letterSpacing: -0.1}
  card-title: {fontFamily: Georgia, fontSize: 17, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 500, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: Georgia, fontSize: 17, fontWeight: 400, lineHeight: 1.48, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: [12, 16]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}"}
  button-secondary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [10, 14]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 10}
  prompt-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.lg}", padding: 12}
  chat-surface: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.xs}", padding: 16}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  side-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 16]}
---

# Overview

Pi feels like a quiet late-night conversation. Warm charcoal fills the screen, cream serif type makes responses personal, and a single mint-green voice action carries most of the chromatic emphasis.

**Key Characteristics:** warm dark canvas, cream serif dialogue, green voice circle, bottom composer, minimal response tools, compact side panel, and richly illustrated discovery prompts.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: warm dark canvas.
- The reviewed screens show this treatment: cream serif dialogue.
- The reviewed screens show this treatment: green voice circle.
- The reviewed screens show this treatment: bottom composer.
- The reviewed screens show this treatment: minimal response tools.
- The reviewed screens show this treatment: compact side panel.
- The reviewed screens show this treatment: richly illustrated discovery prompts.

# Color and surfaces

### Brand & Accent

Mint green is reserved for voice, primary conversational action, and small success moments. The tiny flower mark may use a few bright illustrative colors.

### Surface

Charcoal is continuous across chat and navigation; slightly lighter brown-gray panels hold composer, history, and cards without breaking the intimate mood.

### Text

Warm cream leads dialogue and prompt titles, muted beige carries secondary navigation, and dim gray marks inactive tools.

### Semantic

Green indicates active voice or continuation; reports and destructive actions remain subdued until confirmation.

# Typography

### Font Family

Use a warm book serif such as Georgia for conversation and discovery titles, paired with SF Pro Text for controls and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 32pt | 400 | Reflective opener |
| headline | 22pt | 400 | Conversation prompt |
| card-title | 17pt | 400 | Discover title |
| body-lg | 17pt | 400 | AI response |
| caption | 10pt | 400 | Tool label |

### Principles

- Let serif text set the emotional voice.
- Keep controls small and visually secondary.
- Treat the green action as scarce and unmistakable.

### Note on Font Substitutes

Use Georgia or a similarly readable book serif; avoid a high-fashion Didone or a purely geometric sans for dialogue.

# Screen composition

### Grid & Container

Chat is a single reading column; Discover uses an irregular two-column card mosaic; call mode centers one conversational state.

### Whitespace Philosophy

Large dark areas create calm and attention. Do not fill pauses with dashboard widgets or persistent status chrome.

# Navigation appearance

Use a compact side panel for New chat, Discover, history, Help, and Settings rather than persistent bottom tabs.

# Components

### Buttons

Primary voice uses a mint circular button; mute, menu, and response tools use quiet charcoal circles or bare icons.

### Cards & Containers

Discover cards combine full-bleed art and white serif titles; chat history uses flat rows; continuation prompts use subtle outlined panels.

### Inputs & Forms

The composer is a thin outlined pill on charcoal with serif placeholder and green voice control; native keyboard presentation should harmonize with the dark palette.

### Status & Build Page

Keep listening, mute, call, continuation, and message feedback states directly beside the relevant action.

### Navigation

Use a compact side panel for New chat, Discover, history, Help, and Settings rather than persistent bottom tabs.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Warm charcoal | Chat and call |
| 1 | Slightly lighter panel | Composer and history |
| 2 | Illustrated rounded card | Discover prompt |
| 3 | Side panel over dimmed chat | Navigation |

### Decorative Depth

Illustrated cards provide color and texture; main chat surfaces remain flat with only hairline composer outlines.

# States

Keep listening, mute, call, continuation, and message feedback states directly beside the relevant action.

# iOS adaptation

### Touch Targets

Voice, composer, menu, response tools, history rows, and call controls remain at least 44pt.

### Collapsing Strategy

Preserve dialogue, composer, voice action, and call state; reduce Discover card density and secondary tools first.

### Image Behavior

Crop discovery art intentionally around subjects and maintain a calm text-safe zone for serif titles.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Preserve warm dark space and serif conversational voice.
- Keep the mint action rare and central.
- Style native controls to inherit this visual system.

### Don't

- Don't turn chat into stacked bright message bubbles.
- Don't introduce multiple competing neon accents.
- Don't place decorative art behind long conversation text.

</design-context>
