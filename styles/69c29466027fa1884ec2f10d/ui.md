<design-context>
---
version: alpha
name: Twinby-design-analysis
description: "A dark dating interface built from charcoal surfaces, immersive profile photography, vivid violet controls, lime compatibility signals, pink match celebrations, and bold flat relationship illustrations. It feels energetic, candid, and game-like without losing profile clarity."

colors:
  primary: "#8B4DFF"
  on-primary: "#FFFFFF"
  primary-pressed: "#7136D8"
  ink: "#F7F5FA"
  ink-muted: "#A7A3AE"
  ink-subtle: "#716D79"
  canvas: "#1B1A1F"
  surface-1: "#242329"
  surface-2: "#302E36"
  hairline: "#3D3A43"
  accent-lime: "#8FE62D"
  accent-pink: "#F15FC8"
  accent-orange: "#FF8A4C"
  semantic-success: "#76D635"
  semantic-warning: "#F1AD3D"
  semantic-danger: "#F05B67"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38px, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6px }
  display-lg: { fontFamily: System Sans, fontSize: 30px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3px }
  display-md: { fontFamily: System Sans, fontSize: 24px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16px, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4px, sm: 8px, md: 12px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px }
  profile-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  action-circle: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 14px }
  topic-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 60px }
---

## Overview

Twinby places large profile photography on a charcoal stage, then uses violet, lime, and pink for decisions, compatibility, and celebration. Flat illustrated conversation packs extend the playful relationship theme.

## Colors

### Brand & Accent

Violet owns primary action and premium features. Lime marks compatibility and positive matching; pink marks celebratory or flirtatious moments.

### Surface

Use near-black canvas, charcoal cards, and slightly lighter grouped controls. Bright match screens may temporarily fill with violet.

### Text

Off-white carries primary content; cool gray carries metadata and helper text. Text over photos requires a dark scrim.

### Semantic

Lime confirms compatibility and success, amber warns, and coral-red marks destructive actions. Do not use pink alone for error state.

## Typography

### Font Family

Use a confident rounded system sans with strong Cyrillic and Latin support.

### Hierarchy

Use 24–38px onboarding and match statements, 16–20px profile titles, 14–16px body, and 10–12px metadata.

### Principles

Keep names, age, location, intent, and compatibility immediately scannable. Use short energetic labels for actions.

### Note on Font Substitutes

Use SF Pro Rounded, Inter, or Manrope with the same dark-mode weights and spacing.

## Layout

### Spacing System

Use a 4px base, 12px screen gutters, 12–16px internal card spacing, and 24px between profile sections.

### Grid & Container

Discovery uses one tall photo card with anchored actions. Cards and profile settings use stacked lists or horizontal rails.

### Whitespace Philosophy

Let photography dominate discovery. In questionnaires and settings, use generous vertical gaps to reduce cognitive load.

## Elevation & Depth

Use tonal layering, image scrims, and slight lift on circular actions. Avoid broad soft shadows on the dark canvas.

### Decorative Depth

Match screens use overlapping photo cutouts, flat confetti, and large color fields. Illustrated card packs remain flat and graphic.

## Shapes

### Border Radius Scale

Use 8–12px fields, 18px profile cards, 24px large sheets, and fully round decision actions.

### Photography & Illustration Geometry

Profile photography uses tall `cover` crops with subject-safe placement. Topic illustrations fill rounded squares with one centered metaphor.

## Components

### Buttons

Primary actions are white or violet pills; swipe decisions use dark circles with distinct symbols. Native controls must inherit violet focus and charcoal surfaces.

### Pricing Tabs

Premium plans, profile filters, and topic categories use pills or cards with a violet selected state and clear benefit labels.

### Cards & Containers

Profile cards combine photography, a bottom scrim, compact tags, and action dock. Topic tiles use saturated illustration without extra chrome.

### Inputs & Forms

Onboarding and chat use dark outlined fields. Questionnaire choices use large rows with visible progress and selected state.

### Status & Build Page

Compatibility, verification, match, premium, boost, superlike, and message delivery appear directly on the related profile or chat.

### Navigation

Use five bottom destinations for activity, likes, discovery, cards, and profile. Keep local back or close actions for focused tests and edits.

### Footer

There is no footer. Profile settings end with account and support actions inside the scrolling content.

## Do's and Don'ts

### Do

- Keep profile photography dominant.
- Separate compatibility from premium color.
- Reuse the flat illustration family.
- Make decisions explicit beyond gestures.

### Don't

- Do not obscure names or compatibility.
- Do not rely on swipe alone.
- Do not mix glossy 3D with flat topic art.
- Do not expose light native controls.

## Responsive Behavior

### Breakpoints

Keep one discovery card on phones. Wider screens may place profile details beside the active card or show topic packs in a grid.

### Touch Targets

Swipe actions, bottom navigation, filters, questionnaire answers, topic tiles, and chat actions require at least 44px targets.

### Collapsing Strategy

Keep photo, name, compatibility, and decision actions visible. Collapse secondary facts and premium tools into sheets.

### Image Behavior

Use `cover` for profile photos with face-safe cropping and `contain` for illustrated symbols when the full metaphor matters.

## Iteration Guide

Start with profile onboarding, one-card discovery, explicit decision actions, match state, chat, and profile edit. Add compatibility tests, card games, premium, and travel mode afterward.

## Known Gaps

The inspected catalog documents 53 flows across onboarding, discovery, compatibility, matches, cards, chat, profile, settings, and monetization. Real-world empty and safety escalation states are less represented.

</design-context>

Use the design system above for all UI you generate.
