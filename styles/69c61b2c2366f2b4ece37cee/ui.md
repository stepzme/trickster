<design-context>
---
version: 1
platform: iOS
name: Alfa-Bank-design-analysis
description: "A personalized banking interface where quiet off-white finance surfaces and black controls frame an exuberant layer of colorful 3D offer cards. Five persistent destinations, dense modular content, and a recurring heart motif keep a broad financial product recognizable."
colors:
  primary: "#171619"
  on-primary: "#FFFFFF"
  brand-red: "#EE1C25"
  accent-cyan: "#49D8E4"
  accent-lime: "#8EEB2E"
  accent-violet: "#9B58EE"
  accent-orange: "#FF9B3D"
  ink: "#171619"
  ink-muted: "#75757B"
  ink-subtle: "#A9A9AE"
  canvas: "#F5F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECECEF"
  hairline: "#E1E1E5"
  semantic-success: "#1FB66B"
  semantic-danger: "#E8393F"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 800, lineHeight: 0.98, letterSpacing: -1.2 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 750, lineHeight: 1.05, letterSpacing: -0.7 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 28, xxl: 34, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  offer-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 14 }
  payment-form: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  receipt-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 20 }
  navigation-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [12, 16]}
---

# Overview

Alfa-Bank separates serious finance from playful discovery. Off-white screens, white modules, and black actions carry transactions; saturated 3D cards make offers, benefits, and tutorials unmistakable.

# Non-negotiable visual invariants

- Primary screens use Off-white canvas with white rounded modules.
- Keep transaction actions black and explicit.
- Use color to distinguish content, not financial state alone.
- Preserve receipt follow-up actions.
- Keep user personalization visible.
- Let offer art be expressive inside bounded cards.
- Home combines horizontal story cards, quick contacts, and stacked finance modules.
- Benefits uses one- and two-column offer grids.

# Color and surfaces

- **Black** ({colors.primary}): Primary actions, selected segments, and structural emphasis.
- **Alfa Red** ({colors.brand-red}): Brand and heart emphasis.
- **Cyan, Lime, Violet, Orange**: Promotional fields and category accents.

- **Canvas** ({colors.canvas}): Default page background.
- **Surface 1** ({colors.surface-1}): Accounts, lists, forms, and receipts.
- **Surface 2** ({colors.surface-2}): Search, input, and grouped settings.
- **Hairline** ({colors.hairline}): Sparse separators.

- **Ink** ({colors.ink}): Balances, headings, and actions.
- **Ink Muted** ({colors.ink-muted}): Metadata and descriptions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled states.

- **Success** ({colors.semantic-success}): Positive amounts and completed actions.
- **Danger** ({colors.semantic-danger}): Errors and logout.
- **Overlay** ({colors.semantic-overlay}): Receipt and context-menu scrims.

# Typography

- **System Sans** — all finance, navigation, chat, and settings UI.
- **System Mono** — account fragments, codes, and aligned amounts.

- `{typography.display-xl}` — 42 points — 800 — Promotional numeral
- `{typography.display-md}` — 27 points — 700 — Balance or receipt amount
- `{typography.headline}` — 22 points — 700 — Screen heading
- `{typography.card-title}` — 15 points — 600 — Offer or account title
- `{typography.body}` — 14 points — 400 — Default content
- `{typography.caption}` — 10 points — 400 — Navigation and metadata
- `{typography.button}` — 15 points — 600 — Actions

- Keep finance copy compact and direct.
- Let promotional art carry expressive typography.
- Align amounts and dates for fast scanning.
- Use black selection before adding color.

Use **SF Pro**, **Inter**, or **Roboto**. Promotional art may use a custom heavy display face.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base. Screen gutters are 12–16 points, card gaps 8–12 points, and dense lists use 12–14 points row padding.

Home combines horizontal story cards, quick contacts, and stacked finance modules. Benefits uses one- and two-column offer grids. Transactions, chat, and settings use one column.

Keep transactional areas calm and open. Allow promotional cards to be dense internally, but separate them with generous neutral gutters.

Use shadows sparingly on chrome. Let 3D objects, cropped type, and color fields provide depth in promotional content.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Payments, Benefits, History, and Chats form the bottom bar. The active destination turns black; Home may retain the red heart motif.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary actions use black fill and white text. Secondary actions sit on gray or white. Color-filled actions are reserved for promotional content.

Account cards show balance and concise controls. Offer cards combine one claim with one visual. Receipt cards center amount and expose three follow-up actions.

Payment inputs use pale grouped fields, source/recipient selectors, amount entry, suggestions, and a keyboard-safe submit action.

Positive amounts use green. Transaction analytics combines color and text. Tutorials use illustrated cards, while system states use plain labels.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Avatar and contact photos are circular. Card art may crop a dominant 3D object, while literal payment-card renders preserve their full rounded rectangle.

Cover promotional card fields while preserving the dominant object. Contain literal card renders, merchant marks, and receipt evidence.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Positive amounts use green. Transaction analytics combines color and text. Tutorials use illustrated cards, while system states use plain labels.

- **Success** ({colors.semantic-success}): Positive amounts and completed actions.
- **Danger** ({colors.semantic-danger}): Errors and logout.
- **Overlay** ({colors.semantic-overlay}): Receipt and context-menu scrims.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Maintain 44 points for navigation, contacts, payment rails, category pills, and settings rows.
- Keep finance flows single-column. Collapse offer grids before reducing artwork legibility; horizontal category lists should scroll.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not turn every finance module into a promotional card.
- Do not use red for ordinary selection.
- Do not mix chat types without labels.
- Do not hide home customization behind drag gestures alone.
- Do not crop literal payment-card evidence.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Exact brand tokens and font names were inferred visually.
- The 242-flow inventory was complete; representative leaf flows were inspected.
- Several recorded screens were video-only and motion was not assessed.
- No tablet or desktop screens were present.

</design-context>
