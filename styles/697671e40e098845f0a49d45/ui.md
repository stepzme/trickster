<design-context>
---
version: 1
platform: iOS
name: t2-design-analysis
description: "A bold telecom ecosystem built from black header fields, white rounded sheets, an electric-lime identity accent, condensed uppercase headings, and bright magenta, cyan, violet, and pastel 3D service objects. Dense account data stays modular and strongly labeled."

colors:
  primary: "#B7FF00"
  on-primary: "#101010"
  primary-pressed: "#9DE000"
  accent-magenta: "#F42C91"
  accent-cyan: "#18C9E8"
  accent-violet: "#5D29C7"
  ink: "#111113"
  ink-muted: "#73757A"
  ink-subtle: "#AAADB1"
  canvas: "#F3F3F5"
  surface-1: "#FFFFFF"
  surface-2: "#ECEDEF"
  dark: "#050505"
  hairline: "#E1E2E5"
  semantic-success: "#27B567"
  semantic-warning: "#EBAE25"
  semantic-danger: "#E64E59"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.0, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 28, fontWeight: 800, lineHeight: 1.1, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 800, lineHeight: 1.18, letterSpacing: -0.1 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 600, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 14, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 800, lineHeight: 1.25, letterSpacing: 0.4 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.dark}", textColor: "#FFFFFF", typography: "{typography.button}", rounded: "{rounded.md}", padding: [13, 18]}
  account-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  service-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.lg}", padding: 12 }
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 60 }
---

# Overview

t2 pairs assertive black-and-lime branding with modular white account sheets. Bright service colors and 3D objects make a wide telecom ecosystem feel energetic without weakening data hierarchy.

# Non-negotiable visual invariants

- Keep black and lime as anchors.
- Use one bright hue per category.
- Preserve explicit telecom data.
- Reuse the same 3D object family.
- The account screen stacks paired summary cards and full-width lists.
- More uses a colorful tile grid; finance uses long service cards.
- Keep dense account data compact, but give service objects and offers generous card space.

# Color and surfaces

Electric lime carries identity and small highlights. Magenta, cyan, and violet distinguish services; black anchors actions and headers.

White rounded sheets sit on pale gray or black header fields. Light gray groups inputs and secondary modules.

Near-black carries data and headings; gray carries terms, dates, and inactive states. White is used on black chrome.

Green confirms service state, amber warns about balance, and red marks errors. Bright category colors never replace semantics.

# Typography

Use a bold condensed-feeling grotesk for headings and a neutral system sans for body and data.

Use 22–28 points bold headings, 15–17 points module titles, 14 points body, and 10–12 points allowance metadata.

Keep tariff, balance, allowance, and price visually distinct. Uppercase is appropriate for short section labels only.

Use Inter or SF Pro, with an optional condensed sans for display headings. Preserve heavy weights and clear numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points gutters, 8–12 points module gaps, and 20–24 points between account groups.

The account screen stacks paired summary cards and full-width lists. More uses a colorful tile grid; finance uses long service cards.

Keep dense account data compact, but give service objects and offers generous card space.

Use metallic toy-like objects on pastel platforms and occasional magenta or cyan gradients. Keep transaction forms flat.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Five bottom destinations persist across Connectivity, MiXX, Home, Finance, and More. Active state uses black emphasis.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions are black or deep violet with white text; lime highlights selection. Native controls must inherit the package palette and weight.

Account sheets foreground number, balance, allowances, and direct actions. Service cards pair strong labels with one object.

Top-up, SIM, and service forms use pale rounded fields and explicit amount or number labels.

Connected, remaining, transferred, blocked, subscribed, and payment states appear next to the relevant product with explicit text.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Use centered 3D objects for services and rectangular photography for editorial offers. Avatars and assistants remain circular.

Use `contain` for 3D service objects and `cover` for editorial offers. Preserve readable labels over media.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Connected, remaining, transferred, blocked, subscribed, and payment states appear next to the relevant product with explicit text.

Green confirms service state, amber warns about balance, and red marks errors. Bright category colors never replace semantics.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Tabs, service rows, allowance controls, and bottom navigation require at least 44 points targets.
- Allow stories and offers to scroll horizontally. Keep top-up and activation actions visible through long forms.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not make whole screens lime.
- Do not hide tariff terms behind art.
- Do not mix several gradients in one card.
- Do not expose default blue controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

All 144 flow records were surveyed; representative account, finance, More, Profile, MiXX, and Home screens were inspected. Tablet layouts and every service failure were not visible.

</design-context>
