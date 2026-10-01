<design-context>
---
version: 1
platform: iOS
name: Pure-design-analysis
description: "An irreverent dating interface mixing torn-paper white and black surfaces, hot-fuchsia accents, hand-drawn monochrome characters, distorted patterns, serif editorial statements, and a single-profile discovery stage."
colors: {primary: "#F000C8", on-primary: "#FFFFFF", primary-focus: "#C600A5", ink: "#0B0B0C", ink-muted: "#626064", ink-subtle: "#9B989D", ink-tertiary: "#C9C5CB", canvas: "#FFFFFF", surface-1: "#F3EEF7", surface-2: "#DCCEFF", surface-3: "#C4A9FF", surface-4: "#A987F0", hairline: "#D8D3DB", hairline-strong: "#BDB5C1", hairline-tertiary: "#9B919F", inverse-canvas: "#050506", inverse-surface-1: "#1D1B1E", inverse-surface-2: "#332F35", inverse-ink: "#FFFFFF", brand-secure: "#A77AF5", semantic-success: "#5DBF86", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 42, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.1}
  display-lg: {fontFamily: Georgia, fontSize: 34, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7}
  display-md: {fontFamily: Georgia, fontSize: 28, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.4}
  headline: {fontFamily: Georgia, fontSize: 23, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0.1}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.4}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.5}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2, sm: 6, md: 10, lg: 16, xl: 24, xxl: 32, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 44}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 11}
  profile-stage: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", padding: 16}
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 14}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [4, 8]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 12]}
---

# Overview

Pure rejects polished romance conventions in favor of loud editorial collage. Torn white and black edges frame a single-person feed, while fuchsia, lavender, hand-drawn stickers, and serif statements create a deliberately candid personality.

**Key Characteristics:** torn-paper frame, one-profile stage, black and fuchsia actions, warped patterns, doodle badges, editorial serif text, three destinations, and expressive profile styling.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: torn-paper frame.
- The reviewed screens show this treatment: one-profile stage.
- The reviewed screens show this treatment: black and fuchsia actions.
- The reviewed screens show this treatment: warped patterns.
- The reviewed screens show this treatment: doodle badges.
- The reviewed screens show this treatment: editorial serif text.
- The reviewed screens show this treatment: three destinations.
- The reviewed screens show this treatment: expressive profile styling.

# Color and surfaces

### Brand & Accent

Hot fuchsia carries reward, identity, and moments of heightened attraction. Lavender and dusty tan form large patterned fields; black owns decisive controls.

### Surface

White and black alternate as torn-paper layers. Illustrated fields may use lavender, tan, burgundy, or zebra-like patterns without becoming generic card backgrounds.

### Text

Black leads on light stages, white leads on dark patterns, and gray is limited to profile metadata and secondary navigation.

### Semantic

Fuchsia signals heightened interest or premium value; black signals action; safety information uses clear neutral contrast rather than playful ambiguity.

# Typography

### Font Family

Use a heavy editorial serif for feed statements and match moments, paired with SF Pro Text for controls, metadata, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42pt | 700 | Match or campaign statement |
| display-lg | 34pt | 700 | Profile feed message |
| headline | 23pt | 600 | Profile or prompt |
| body | 13pt | 400 | Metadata |
| caption | 9pt | 500 | Badge and nav label |

### Principles

- Make one expressive statement dominate the stage.
- Keep identity data legible and more restrained.
- Use uppercase sans sparingly for buttons and sticker-like labels.

### Note on Font Substitutes

Use Georgia or another sturdy editorial serif, avoiding delicate fashion Didones that lose the hand-made energy.

# Screen composition

### Grid & Container

Discovery is a single full-height stage; chat is a simple list; profile settings use horizontal sections and tall media slots.

### Whitespace Philosophy

Whitespace is intentionally irregular. Torn edges, offset stickers, and asymmetrical fields create rhythm without crowding the central decision.

# Navigation appearance

Use three bottom destinations for discovery, chats, and profile, with light gray inactive line icons and black active emphasis.

# Components

### Buttons

Use black rectangular buttons for commitment, fuchsia for reward or premium, and white circular buttons for feed decisions.

Profile sections use text tabs with a simple underline; premium options use bold collage panels rather than conventional pricing pills.

### Cards & Containers

Avoid uniform cards. Use a full-stage profile, torn chat promo strips, profile paper layers, and dashed media placeholders.

### Inputs & Forms

Inputs stay simple and high contrast inside the expressive frame; native behavior remains intact while presentation follows this typography and collage language.

### Status & Build Page

Make match, time remaining, verification, premium status, safety, and profile completion explicit with bold sticker-like cues.

### Navigation

Use three bottom destinations for discovery, chats, and profile, with light gray inactive line icons and black active emphasis.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White or patterned canvas | Base scene |
| 1 | Torn dark paper | Profile and CTA layer |
| 2 | Sticker and badge overlap | Status and personality |
| 3 | Focused overlay | Match, promo, safety |

### Decorative Depth

Create depth through collage overlap, paper tears, rough frames, and scale shifts rather than polished drop shadow.

# States

Make match, time remaining, verification, premium status, safety, and profile completion explicit with bold sticker-like cues.

# iOS adaptation

### Touch Targets

Feed decisions, chat rows, tabs, profile sections, and safety actions remain at least 44pt.

### Collapsing Strategy

Preserve photo, identity, status, interest actions, and safety; reduce secondary stickers and premium decoration first.

### Image Behavior

Crop profile photos around the person, maintain rough collage framing, and keep expressive overlays outside key facial regions.

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

- Preserve rough collage, torn edges, and one-profile focus.
- Keep safety and identity facts readable beneath the playful shell.
- Style native controls to inherit this visual system.

### Don't

- Don't smooth the system into generic rounded dating cards.
- Don't use fuchsia as a full-time background on every screen.
- Don't cover profile faces or safety information with decorative stickers.

# Known gaps

- Long conversation and moderation recovery were not fully sampled.
- Some premium and adult-content states were only represented by entry screens.
- iPad and landscape layouts were not represented.

</design-context>
