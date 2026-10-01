<design-context>
---
version: 1
platform: iOS
name: Freedom-design-analysis
description: "A bright financial super-app built from white modular surfaces, emerald-to-teal gradients, compact banking data, rounded service tiles, and promotional 3D artwork. Dense dashboards remain approachable through generous grouping and a persistent five-tab shell."
colors: { primary: "#21B76C", on-primary: "#FFFFFF", primary-soft: "#EAF9F1", accent: "#00A69C", ink: "#14171A", ink-muted: "#6F7479", ink-subtle: "#A8ADB2", canvas: "#F5F6F7", surface-1: "#FFFFFF", surface-2: "#EDF1F2", hairline: "#E1E5E7", semantic-success: "#28B56D", semantic-warning: "#F2B849", semantic-danger: "#DC5656", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 38, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 32, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 27, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [13, 18]}
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  service-tile: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: 10 }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Freedom balances a dense financial super-app with white cards, green accents, clear account hierarchy, and promotional 3D scenes.

# Non-negotiable visual invariants

- Keep account identity and money visible.
- Pair instructions with one primary action.
- Separate promotions from banking controls.
- Stack account, service, promotion, operation, and guidance modules above a five-tab footer.
- Use compact internal spacing but clear gaps between unrelated financial tasks.

# Color and surfaces

Use emerald for primary actions and teal gradients for branded account or campaign areas.

Keep the app canvas pale gray and group financial modules on white cards.

Use near-black for money and titles, gray for metadata, and pale gray for disabled controls.

Reserve green for successful or available state, amber for attention, and red for destructive outcomes.

# Typography

Use SF Pro Display for balances and titles and SF Pro Text for services, details, and forms.

Use 27–32 points for key amounts, 22 points for page titles, 16 points for card titles, 14 points body, and 10–12 points metadata.

Keep amount, account name, and action hierarchy legible inside dense dashboards.

Use the platform sans or Inter with tabular numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 12 points gaps, and 14 points card padding.

Stack account, service, promotion, operation, and guidance modules above a five-tab footer.

Use compact internal spacing but clear gaps between unrelated financial tasks.

Use gradients, glassy highlights, and small 3D props only in promotional or explanatory modules.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Operations, Services, Messages, and More remain in the bottom bar.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Use green filled buttons for the next financial action and pale gray for secondary exits.

Use account cards, service grids, transaction groups, offer banners, and instructional sheets.

Group labeled banking fields in white cards with explicit editable and disabled states.

Show balance, pending amount, reward, eligibility, completion, and failure near the affected object.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Crop promo artwork inside rounded banners while preserving the copy area.

Crop promotional art without obscuring copy and contain functional card artwork.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show balance, pending amount, reward, eligibility, completion, and failure near the affected object.

Reserve green for successful or available state, amber for attention, and red for destructive outcomes.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep transfers, services, cards, switches, and tabs at least 44 points.
- Preserve balance, primary actions, current task, and confirmation; move promotions lower.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not hide fees or state inside decoration.
- Do not overuse gradients in forms.
- Do not crowd long explanations beside account actions.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
