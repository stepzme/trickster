<design-context>
---
version: 1
platform: iOS
name: Ucom-design-analysis
description: "A dark telecom dashboard built from charcoal panels, electric lime-green branding, allowance gauges, compact service lists, and photography-backed promotional tiles. The interface is high-contrast, functional, and unmistakably carrier-oriented."

colors:
  primary: "#65D400"
  on-primary: "#101210"
  primary-pressed: "#4FB500"
  ink: "#F5F6F3"
  ink-muted: "#A0A39E"
  ink-subtle: "#666A65"
  canvas: "#171817"
  surface-1: "#202120"
  surface-2: "#292A29"
  hairline: "#343634"
  semantic-success: "#65D400"
  semantic-warning: "#F0AD38"
  semantic-danger: "#EF5A62"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 38, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.5 }
  display-lg: { fontFamily: System Sans, fontSize: 30, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.3 }
  display-md: { fontFamily: System Sans, fontSize: 24, fontWeight: 650, lineHeight: 1.15, letterSpacing: 0 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.4 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  allowance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  service-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.sm}", padding: [12, 14]}
  tariff-card: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14 }
  bottom-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 58 }
---

# Overview

Ucom uses charcoal surfaces and vivid lime controls to turn plan management into a compact dashboard. Gauges and repeated service rows keep balance and allowances immediately scannable.

# Non-negotiable visual invariants

- Reserve lime for action and active service.
- Keep allowances comparable.
- Use dark layered surfaces consistently.
- Pin activation when the decision is ready.
- Home stacks balance, one three-column allowance card, promo rail, and action rows.
- Tariff pages use vertical comparison cards.
- Keep panels compact but distinct.
- Use open dark space around balance and page titles to prevent visual crowding.

# Color and surfaces

Electric lime owns primary actions, active navigation, allowance arcs, and current-plan emphasis.

Use near-black canvas with layered charcoal cards. A full lime header may mark balance or a selected tariff detail.

Off-white carries primary values and labels; gray carries terms and inactive navigation. Dark ink is used on lime buttons.

Lime confirms active service and success, amber warns about limits, and red marks failure or destructive action.

# Typography

Use a clean system sans with tabular figures for balances, allowances, and prices.

Use 24–38 points balance values, 16–20 points section titles, 14–16 points rows, and 10–12 points metadata.

Align units consistently, keep plan names distinct from allowance values, and make terms readable without competing with activation.

Use Inter or SF Pro with tabular numerals and medium weights on dark surfaces.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8–12 points within dense cards, and 20–24 points between service groups.

Home stacks balance, one three-column allowance card, promo rail, and action rows. Tariff pages use vertical comparison cards.

Keep panels compact but distinct. Use open dark space around balance and page titles to prevent visual crowding.

Promotional tiles may use photography and green overlays. Core account surfaces remain flat and data-focused.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations for Home, Payments, Tariffs/Services, and More. Detail pages use back and a pinned action.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary Login, Activate, and Pay actions are full-width lime rectangles. Native controls must inherit lime focus and charcoal surfaces.

Allowance cards pair three gauges with values. Tariff cards group included data, minutes, SMS, and price before disclosure.

Login uses restrained underlined fields; payment forms use dark grouped inputs with explicit amount and account context.

Remaining allowance, active tariff, balance, autopayment, roaming, and payment status appear beside the relevant service.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Crop promo photography into compact rounded tiles. Keep gauges as consistent semicircles with simple service icons.

Use `cover` for promo photography and `contain` for carrier logos, plan symbols, and allowance icons.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Remaining allowance, active tariff, balance, autopayment, roaming, and payment status appear beside the relevant service.

Lime confirms active service and success, amber warns about limits, and red marks failure or destructive action.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Service rows, gauges, promo tiles, tabs, navigation, and primary actions require at least 44 points targets.
- Keep balance, current plan, allowance, and top-up visible. Collapse terms and secondary service details below summaries.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use low-contrast gray values.
- Do not overload the home screen with promotions.
- Do not make every panel bright green.
- Do not expose light native controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
