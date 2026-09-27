<design-context>
---
version: alpha
name: Pure-design-analysis
description: "An irreverent dating interface mixing torn-paper white and black surfaces, hot-fuchsia accents, hand-drawn monochrome characters, distorted patterns, serif editorial statements, and a single-profile discovery stage."
colors: {primary: "#F000C8", on-primary: "#FFFFFF", primary-hover: "#FF27DA", primary-focus: "#C600A5", ink: "#0B0B0C", ink-muted: "#626064", ink-subtle: "#9B989D", ink-tertiary: "#C9C5CB", canvas: "#FFFFFF", surface-1: "#F3EEF7", surface-2: "#DCCEFF", surface-3: "#C4A9FF", surface-4: "#A987F0", hairline: "#D8D3DB", hairline-strong: "#BDB5C1", hairline-tertiary: "#9B919F", inverse-canvas: "#050506", inverse-surface-1: "#1D1B1E", inverse-surface-2: "#332F35", inverse-ink: "#FFFFFF", brand-secure: "#A77AF5", semantic-success: "#5DBF86", semantic-overlay: "#000000"}
typography:
  display-xl: {fontFamily: Georgia, fontSize: 42px, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1.1px}
  display-lg: {fontFamily: Georgia, fontSize: 34px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.7px}
  display-md: {fontFamily: Georgia, fontSize: 28px, fontWeight: 600, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: Georgia, fontSize: 23px, fontWeight: 600, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 500, lineHeight: 1.22, letterSpacing: 0.1px}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.4px}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0.5px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2px, sm: 6px, md: 10px, lg: 16px, xl: 24px, xxl: 32px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-primary-hover: {backgroundColor: "{colors.inverse-surface-2}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 11px}
  profile-stage: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.headline}", rounded: "{rounded.xs}", padding: 16px}
  promo-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 14px}
  text-input: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12px 14px}
  status-badge: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 4px 8px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px}
---
## Overview

Pure rejects polished romance conventions in favor of loud editorial collage. Torn white and black edges frame a single-person feed, while fuchsia, lavender, hand-drawn stickers, and serif statements create a deliberately candid personality.

**Key Characteristics:** torn-paper frame, one-profile stage, black and fuchsia actions, warped patterns, doodle badges, editorial serif text, three destinations, and expressive profile styling.

## Colors

### Brand & Accent

Hot fuchsia carries reward, identity, and moments of heightened attraction. Lavender and dusty tan form large patterned fields; black owns decisive controls.

### Surface

White and black alternate as torn-paper layers. Illustrated fields may use lavender, tan, burgundy, or zebra-like patterns without becoming generic card backgrounds.

### Text

Black leads on light stages, white leads on dark patterns, and gray is limited to profile metadata and secondary navigation.

### Semantic

Fuchsia signals heightened interest or premium value; black signals action; safety information uses clear neutral contrast rather than playful ambiguity.

## Typography

### Font Family

Use a heavy editorial serif for feed statements and match moments, paired with SF Pro Text for controls, metadata, and settings.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-xl | 42px | 700 | Match or campaign statement |
| display-lg | 34px | 700 | Profile feed message |
| headline | 23px | 600 | Profile or prompt |
| body | 13px | 400 | Metadata |
| caption | 9px | 500 | Badge and nav label |

### Principles

- Make one expressive statement dominate the stage.
- Keep identity data legible and more restrained.
- Use uppercase sans sparingly for buttons and sticker-like labels.

### Note on Font Substitutes

Use Georgia or another sturdy editorial serif, avoiding delicate fashion Didones that lose the hand-made energy.

## Layout

### Spacing System

Use a 4px base, 12–16px control gaps, 16px screen gutters, and large central space for the active profile or illustration.

### Grid & Container

Discovery is a single full-height stage; chat is a simple list; profile settings use horizontal sections and tall media slots.

### Whitespace Philosophy

Whitespace is intentionally irregular. Torn edges, offset stickers, and asymmetrical fields create rhythm without crowding the central decision.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White or patterned canvas | Base scene |
| 1 | Torn dark paper | Profile and CTA layer |
| 2 | Sticker and badge overlap | Status and personality |
| 3 | Focused overlay | Match, promo, safety |

### Decorative Depth

Create depth through collage overlap, paper tears, rough frames, and scale shifts rather than polished drop shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 2px | Paper and CTA edge |
| rounded-sm | 6px | Input |
| rounded-md | 10px | Photo cutout |
| rounded-lg | 16px | Promo panel |
| rounded-full | full | Interest and avatar controls |

### Photography & Illustration Geometry

Profile photography sits in rough rectangular cutouts; doodles, bursts, hands, faces, and speech scraps overlap around it without obscuring identity.

## Components

### Buttons

Use black rectangular buttons for commitment, fuchsia for reward or premium, and white circular buttons for feed decisions.

### Pricing Tabs

Profile sections use text tabs with a simple underline; premium options use bold collage panels rather than conventional pricing pills.

### Cards & Containers

Avoid uniform cards. Use a full-stage profile, torn chat promo strips, profile paper layers, and dashed media placeholders.

### Inputs & Forms

Inputs stay simple and high contrast inside the expressive frame; native behavior remains intact while presentation follows this typography and collage language.

### Status & Build Page

Make match, time remaining, verification, premium status, safety, and profile completion explicit with bold sticker-like cues.

### Navigation

Use three bottom destinations for discovery, chats, and profile, with light gray inactive line icons and black active emphasis.

### Footer

No footer; bottom navigation and the current feed actions own the safe area.

## Do's and Don'ts

### Do

- Preserve rough collage, torn edges, and one-profile focus.
- Keep safety and identity facts readable beneath the playful shell.
- Style native controls to inherit this visual system.

### Don't

- Don't smooth the system into generic rounded dating cards.
- Don't use fuchsia as a full-time background on every screen.
- Don't cover profile faces or safety information with decorative stickers.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Reduce sticker overlap |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand central stage |

### Touch Targets

Feed decisions, chat rows, tabs, profile sections, and safety actions remain at least 44px.

### Collapsing Strategy

Preserve photo, identity, status, interest actions, and safety; reduce secondary stickers and premium decoration first.

### Image Behavior

Crop profile photos around the person, maintain rough collage framing, and keep expressive overlays outside key facial regions.

## Iteration Guide

Tune discovery stage and feed decisions first, then match, chat, profile styling, verification, and premium states.

## Known Gaps

- Long conversation and moderation recovery were not fully sampled.
- Some premium and adult-content states were only represented by entry screens.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
