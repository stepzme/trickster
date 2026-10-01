<design-context>
---
version: 1
platform: iOS
name: Emma-design-analysis
description: "A two-mode personal-finance UI: cinematic violet-on-plum onboarding and subscription screens transition into a bright, information-dense dashboard. Purple gradients carry primary actions and premium emphasis; white cards, pale gray canvas, and compact system typography organize accounts, transactions, saving, payments, investments, and credit. Luminous 3D objects make abstract financial benefits tangible without entering dense data views."

colors:
  primary: "#A92BFF"
  on-primary: "#FFFFFF"
  primary-soft: "#F4E6FF"
  primary-gradient-end: "#C65CFF"
  ink: "#111219"
  ink-muted: "#737582"
  ink-subtle: "#A1A4AF"
  canvas: "#F6F7FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF0F5"
  dark-canvas: "#160C29"
  dark-surface: "#25183A"
  dark-ink: "#FFFFFF"
  hairline: "#E7E8ED"
  accent-mint: "#21C9B1"
  accent-pink: "#F35B91"
  semantic-success: "#24B86A"
  semantic-danger: "#DD4964"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: System Sans
    fontSize: 38
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.9
  display-lg:
    fontFamily: System Sans
    fontSize: 32
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.6
  display-md:
    fontFamily: System Sans
    fontSize: 27
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.4
  headline:
    fontFamily: System Sans
    fontSize: 22
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: -0.2
  card-title:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  subhead:
    fontFamily: System Sans
    fontSize: 17
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-lg:
    fontFamily: System Sans
    fontSize: 16
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body:
    fontFamily: System Sans
    fontSize: 14
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  body-sm:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: System Sans
    fontSize: 11
    fontWeight: 400
    lineHeight: 1.30
    letterSpacing: 0
  button:
    fontFamily: System Sans
    fontSize: 15
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: System Sans
    fontSize: 12
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2
  mono:
    fontFamily: System Mono
    fontSize: 12
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0

rounded:
  xs: 6
  sm: 10
  md: 14
  lg: 18
  xl: 24
  xxl: 30
  pill: 9999
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 64

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  button-secondary:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: [14, 20]
  finance-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 12
  onboarding-choice:
    backgroundColor: "{colors.dark-surface}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 16
  text-input:
    backgroundColor: "{colors.dark-canvas}"
    textColor: "{colors.dark-ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.md}"
    padding: [12, 0]
  status-badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: [4, 8]
  navigation-bar:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.card-title}"
    rounded: "{rounded.xs}"
    height: 52
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: [20, 12]
---

# Overview

Emma uses contrast between two modes. Setup and premium storytelling live on a deep plum canvas with luminous purple actions and 3D hero objects. The working product shifts to a bright financial dashboard where white rounded cards, small colored icons, and stable bottom navigation prioritize numbers and tasks.

# Non-negotiable visual invariants

- Primary screens use Deep plum onboarding paired with a bright in-product canvas.
- Maintain the dark-to-light transition between setup and daily product use.
- Reserve purple gradient for the clearest primary action.
- Group financial facts into one-purpose white cards.
- Keep amounts tied to currency, time, and account context.
- Use 3D art for education and premium benefits, not for transaction rows.
- The product uses one mobile column, with two-column summary tiles and horizontal recommendation cards where comparison helps.
- Onboarding choices use a two-column grid.

# Color and surfaces

- **Emma Purple** ({colors.primary}): Primary actions, selected tabs, links, and key figures.
- **Purple pressed** ({colors.primary}) and **Gradient End** ({colors.primary-gradient-end}): CTA gradient and premium emphasis.
- **Soft Purple** ({colors.primary-soft}): Quiet callouts, selected chips, and button backgrounds.
- **Mint** ({colors.accent-mint}) and **Pink** ({colors.accent-pink}): Supporting financial categories and status icons.

- **Canvas** ({colors.canvas}): Bright dashboard background.
- **Surface 1** ({colors.surface-1}): Finance cards, rows, and navigation.
- **Surface 2** ({colors.surface-2}): Secondary fields and disabled areas.
- **Dark Canvas** ({colors.dark-canvas}): Onboarding and subscription.
- **Dark Surface** ({colors.dark-surface}): Choice cards, testimonials, and secondary dark actions.
- **Hairline** ({colors.hairline}): Quiet dividers in dense financial groups.

- **Ink** ({colors.ink}): Amounts, headings, and primary labels on light screens.
- **Ink Muted** ({colors.ink-muted}): Explanations, timestamps, and account context.
- **Ink Subtle** ({colors.ink-subtle}): Inactive tabs and disabled metadata.
- **Dark Ink** ({colors.dark-ink}): Primary text on plum surfaces.

- **Success** ({colors.semantic-success}): Positive movement, confirmed actions, and connected state.
- **Danger** ({colors.semantic-danger}): Negative movement, errors, and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Modal scrim where required.

# Typography

- **System Sans** — all display, body, controls, amounts, and navigation.
- **System Mono** — optional for account or transaction identifiers only.

- `{typography.display-xl}` — 38 points — 700 — Hero amount or benefit
- `{typography.display-lg}` — 32 points — 700 — Onboarding statement
- `{typography.display-md}` — 27 points — 700 — Setup question
- `{typography.headline}` — 22 points — 600 — Domain heading
- `{typography.card-title}` — 17 points — 600 — Product and card title
- `{typography.body}` — 14 points — 400 — Default content
- `{typography.caption}` — 11 points — 400 — Time, rate, and metadata
- `{typography.button}` — 15 points — 500 — Primary and secondary actions

- Give money values stronger size or weight than surrounding labels.
- Keep onboarding sentences short and centered only when they accompany a hero object.
- Use left alignment for financial tasks and settings.
- Reserve saturated purple text for actions and selected state, not general body copy.

Use **SF Pro Display/Text** on iOS or **Inter** cross-platform. Preserve compact regular text and slightly heavier 600–700 headings; avoid geometric display faces that make dense money screens feel promotional.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Product gutters are 10–12 points, card interiors 12–16 points, and section gaps 16–24 points. Dark onboarding uses larger 24 points outer spacing and anchors the main action near the safe-area bottom.

The product uses one mobile column, with two-column summary tiles and horizontal recommendation cards where comparison helps. Onboarding choices use a two-column grid. Bottom navigation remains fixed across all five domains.

Dark screens use generous negative space to create focus around one idea. Light product screens are denser: cards separate information into readable chunks while the pale canvas keeps domains distinct.

Use restrained card shadows on light surfaces and soft ambient glow behind 3D objects on dark screens. Data cards should not inherit the promotional lighting.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Feed, Save, Pay, Invest, and Credit persist at the bottom with small icons and labels. Selected tabs turn purple; inactive tabs remain gray. Detail screens use a simple back control and centered title.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions use a purple-to-pink gradient, white text, full width, and pill radius. Dark secondary actions use a muted plum pill. On light screens, tertiary actions may use pale-purple fills with purple labels.

Finance cards are white, rounded, and lightly separated from the pale canvas. They can contain account totals, recommended actions, lists, or charts, but each card should express one financial idea. Dark choice cards use a thin purple selection outline.

Registration fields are visually open on the dark canvas with large input text and a fixed bottom Continue action. Product search uses a pale rounded field. Validation belongs inline near the field or button.

Use small colored figures for positive and negative movements, progress rings for processing, and checkmarks for completed tasks. Every status also needs a text label or numeric context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

3D objects sit centered in large dark fields or inside rounded landscape panels. Partner marks and product logos use bounded, evenly spaced tiles. No editorial photography was prominent in the inspected core flows.

3D hero objects remain fully visible with generous padding; scale them down instead of cropping. Partner marks use contain behavior. Illustration panels keep rounded corners and crop only ambient backgrounds.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Use small colored figures for positive and negative movements, progress rings for processing, and checkmarks for completed tasks. Every status also needs a text label or numeric context.

- **Success** ({colors.semantic-success}): Positive movement, confirmed actions, and connected state.
- **Danger** ({colors.semantic-danger}): Negative movement, errors, and destructive actions.
- **Overlay** ({colors.semantic-overlay}): Modal scrim where required.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep primary actions, rows, domain tabs, and bottom navigation at least 44 points high. Give amount selectors and icon-only actions sufficient separation from destructive controls.
- Stack two-column onboarding choices and financial summary tiles when labels or amounts wrap. Preserve one dominant bottom action. Recommendation carousels may become a vertical list on narrow layouts.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not turn the bright dashboard into a purple-filled interface.
- Do not show recommendations with the same weight as account facts.
- Do not rely on colored numbers without a sign or label.
- Do not add multiple large gradient buttons to one screen.
- Do not introduce unrelated illustration materials or hard outlines.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact proprietary colors, typeface names, and gradient stops were inferred visually.
- Motion, haptics, and video behavior were not available from still screens.
- Tablet and desktop layouts were not represented.
- Several secondary product flows were inventoried through Screen Gallery metadata but visually sampled at representative steps.

</design-context>
