<design-context>
---
version: 1
platform: iOS
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
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 750, lineHeight: 1.06, letterSpacing: -0.6 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.1 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  profile-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 0 }
  action-circle: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 14 }
  topic-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.sm}", height: 60 }
---

# Overview

Twinby places large profile photography on a charcoal stage, then uses violet, lime, and pink for decisions, compatibility, and celebration. Flat illustrated conversation packs extend the playful relationship theme.

# Non-negotiable visual invariants

- Keep profile photography dominant.
- Separate compatibility from premium color.
- Reuse the flat illustration family.
- Make decisions explicit beyond gestures.
- Discovery uses one tall photo card with anchored actions.
- Cards and profile settings use stacked lists or horizontal rails.
- Let photography dominate discovery.
- In questionnaires and settings, use generous vertical gaps to reduce cognitive load.

# Color and surfaces

Violet owns primary action and premium features. Lime marks compatibility and positive matching; pink marks celebratory or flirtatious moments.

Use near-black canvas, charcoal cards, and slightly lighter grouped controls. Bright match screens may temporarily fill with violet.

Off-white carries primary content; cool gray carries metadata and helper text. Text over photos requires a dark scrim.

Lime confirms compatibility and success, amber warns, and coral-red marks destructive actions. Do not use pink alone for error state.

# Typography

Use a confident rounded system sans with strong Cyrillic and Latin support.

Use 24–38 points onboarding and match statements, 16–20 points profile titles, 14–16 points body, and 10–12 points metadata.

Keep names, age, location, intent, and compatibility immediately scannable. Use short energetic labels for actions.

Use SF Pro Rounded, Inter, or Manrope with the same dark-mode weights and spacing.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points screen gutters, 12–16 points internal card spacing, and 24 points between profile sections.

Discovery uses one tall photo card with anchored actions. Cards and profile settings use stacked lists or horizontal rails.

Let photography dominate discovery. In questionnaires and settings, use generous vertical gaps to reduce cognitive load.

Match screens use overlapping photo cutouts, flat confetti, and large color fields. Illustrated card packs remain flat and graphic.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five bottom destinations for activity, likes, discovery, cards, and profile. Keep local back or close actions for focused tests and edits.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions are white or violet pills; swipe decisions use dark circles with distinct symbols. Native controls must inherit violet focus and charcoal surfaces.

Profile cards combine photography, a bottom scrim, compact tags, and action dock. Topic tiles use saturated illustration without extra chrome.

Onboarding and chat use dark outlined fields. Questionnaire choices use large rows with visible progress and selected state.

Compatibility, verification, match, premium, boost, superlike, and message delivery appear directly on the related profile or chat.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Profile photography uses tall `cover` crops with subject-safe placement. Topic illustrations fill rounded squares with one centered metaphor.

Use `cover` for profile photos with face-safe cropping and `contain` for illustrated symbols when the full metaphor matters.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Compatibility, verification, match, premium, boost, superlike, and message delivery appear directly on the related profile or chat.

Lime confirms compatibility and success, amber warns, and coral-red marks destructive actions. Do not use pink alone for error state.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Swipe actions, bottom navigation, filters, questionnaire answers, topic tiles, and chat actions require at least 44 points targets.
- Keep photo, name, compatibility, and decision actions visible. Collapse secondary facts and premium tools into sheets.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not obscure names or compatibility.
- Do not rely on swipe alone.
- Do not mix glossy 3D with flat topic art.
- Do not expose light native controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
