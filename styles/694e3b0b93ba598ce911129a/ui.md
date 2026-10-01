<design-context>
---
version: 1
platform: iOS
name: Wise-design-analysis
description: "A confident global-finance system built from bright acid green, white or near-black canvases, bold condensed headings, calm gray account cards, and highly legible transaction detail. Playful painted 3D imagery appears selectively while money tasks remain direct and transparent."

colors:
  primary: "#9FE870"
  on-primary: "#0E0F0C"
  primary-pressed: "#7FD94B"
  ink: "#12130F"
  ink-muted: "#5D6258"
  ink-subtle: "#92978E"
  canvas: "#F7F7F5"
  surface-1: "#FFFFFF"
  surface-2: "#ECEDEA"
  surface-3: "#DFE2DD"
  hairline: "#D2D5CF"
  semantic-success: "#2F8F4E"
  semantic-warning: "#B98000"
  semantic-danger: "#C94747"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: Wise Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.05, letterSpacing: -1.0 }
  display-lg: { fontFamily: Wise Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.7 }
  display-md: { fontFamily: Wise Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.4 }
  headline: { fontFamily: Wise Sans, fontSize: 22, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.2 }
  card-title: { fontFamily: Wise Sans, fontSize: 17, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Wise Sans, fontSize: 16, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: Wise Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: Wise Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: Wise Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: Wise Sans, fontSize: 11, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: Wise Sans, fontSize: 14, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: Wise Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }

rounded: { xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 22]}
  button-secondary: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 18]}
  content-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  text-input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: [12, 14]}
  status-badge: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [4, 8]}
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 56 }
---

# Overview

Wise pairs a playful global brand with unusually explicit financial information. Lime actions, oversize headings, quiet cards, and transparent fee rows make complex transfers feel understandable.

# Non-negotiable visual invariants

- Repeat amount, currency, fees, and arrival before confirmation.
- Use lime for decisive action.
- Keep financial cards calm and scannable.
- Style native controls in Wise's brand language.
- Home uses a horizontal balance-card row above a single transaction column; forms remain one column with full-width review rows.
- Allow generous space around amounts and decision points; transaction lists can be compact but never cramped.

# Color and surfaces

Use bright Wise green for primary actions, selected chips, focus, and key links. Text on green is near-black.

Use warm white or near-black canvases, white or charcoal cards, and soft gray secondary surfaces.

Use near-black on light mode, warm white in dark mode, and medium gray for labels, dates, and explanatory detail.

Reserve green semantic tones for completion distinct from brand lime; use amber for review and red for destructive or failed states.

# Typography

Use Wise Sans or a compact grotesk with a condensed heavy display companion.

Use 28–40 points compressed headlines, 20–24 points balances, 15–17 points controls, and 11–13 points transaction metadata.

Align amounts clearly, keep currency attached, and separate labels from values through weight rather than color noise.

Use Archivo Black or a condensed grotesk for headlines and Inter or SF Pro for data-rich body text.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12 points card padding, 16 points gutters, and 24–32 points between financial sections.

Home uses a horizontal balance-card row above a single transaction column; forms remain one column with full-width review rows.

Allow generous space around amounts and decision points; transaction lists can be compact but never cramped.

Use painted 3D objects, textured card artwork, and faint green glows only in brand or onboarding moments.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a four-item floating-looking bottom bar with Home, Cards, Recipients, and Payments; active state relies on weight and a soft filled island.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary buttons are lime full-width pills with black labels. Native buttons must inherit the same fill, radius, weight, and pressed darkening.

Balance cards show currency identity, account detail, and amount with minimal decoration. Review containers divide facts into clear labeled rows.

Use large numeric inputs, outlined references, and compact Change chips. Keep currency and destination visible during editing.

Show pending tasks, transfer progress, card freeze, fee, arrival, and limit states with explicit labels rather than color alone.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Place isolated 3D objects centrally with open space. Currency flags and avatars stay circular; payment cards keep their physical ratio.

Use contain for 3D objects and payment cards, cover for avatars only, and never crop flags or security symbols.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show pending tasks, transfer progress, card freeze, fee, arrival, and limit states with explicit labels rather than color alone.

Reserve green semantic tones for completion distinct from brand lime; use amber for review and red for destructive or failed states.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Currency, recipient, amount, change, confirm, card control, and navigation targets require at least 44 points.
- Keep amount, currency, recipient, fee, arrival, and primary action visible; collapse supporting account data and education.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use default blue links or buttons.
- Do not hide fees behind disclosure.
- Do not use illustration inside critical review rows.
- Do not color every currency surface.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
