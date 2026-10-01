<design-context>
---
version: 1
platform: iOS
name: Simbank-design-analysis
description: "A playful mobile bank built from pastel lime, peach, lilac, and sand gradients; black circular actions; oversized balance numerals; and white rounded content sheets. Emoji-rich language and small cartoon finance objects make serious tasks feel informal without changing the clear transaction structure."

colors:
  primary: "#0B0B0C"
  on-primary: "#FFFFFF"
  accent-lime: "#B8FF98"
  accent-peach: "#FFB6A8"
  accent-lilac: "#B9B5FF"
  accent-sand: "#F2DDB4"
  ink: "#111113"
  ink-muted: "#6F7075"
  ink-subtle: "#A2A3A8"
  canvas: "#FFFDFB"
  surface-1: "#FFFFFF"
  surface-2: "#F3F2F3"
  hairline: "#E6E3E5"
  semantic-success: "#24B867"
  semantic-warning: "#F0A92F"
  semantic-danger: "#E64C55"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 42, fontWeight: 500, lineHeight: 1.0, letterSpacing: -1 }
  display-lg: { fontFamily: System Sans, fontSize: 34, fontWeight: 600, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 27, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 12, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0.1 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  action-circle: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 }
  finance-sheet: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16 }
  story-circle: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 3 }
  contact-row: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [10, 0]}
  input-field: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  bottom-nav: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", height: 62 }
---

# Overview

Simbank is a playful bank where changing pastel gradients frame a clear black-and-white transaction system. Large balance numerals, black circular shortcuts, white rounded sheets, emoji, and friendly illustrations make the product informal while preserving financial hierarchy.

# Non-negotiable visual invariants

- The recurring color treatment uses Pastel gradient backdrop changes by product area.
- Keep black as the action anchor.
- Use one pastel atmosphere per screen.
- Preserve the white overlapping sheet.
- Keep finance data explicit.
- Use emoji and cartoons sparingly.
- Home stacks balance, three circular shortcuts, card, and a large rounded sheet.
- Payments and transfers use one-column lists; savings may combine action circles with a sheet.

# Color and surfaces

- **Black** ({colors.primary}) carries decisive actions, cards, and shortcut circles.
- Lime, peach, lilac, and sand are contextual atmospheres rather than competing CTA colors.

- **Canvas** ({colors.canvas}) is the neutral base beneath gradients.
- **Surface 1** ({colors.surface-1}) carries sheets and transaction content.
- **Surface 2** ({colors.surface-2}) supports fields and segmented controls.

- **Ink** ({colors.ink}) carries balances and titles.
- **Muted** ({colors.ink-muted}) carries metadata.
- **Subtle** ({colors.ink-subtle}) is for disabled and placeholder text.

Green marks incoming value and completion; amber and red remain warnings or failures. Contextual pastels must never substitute for semantic feedback.

# Typography

Use a neutral system sans. Oversized light-to-medium balance numerals contrast with bold screen titles and regular transaction copy.

- `{typography.display-xl}` — 42 points — 500 — Balance
- `{typography.display-lg}` — 34 points — 600 — Amount or onboarding claim
- `{typography.display-md}` — 27 points — 700 — Screen title
- `{typography.headline}` — 22 points — 700 — Sheet heading
- `{typography.card-title}` — 16 points — 600 — Service or transaction title
- `{typography.body}` — 14 points — 400 — Default finance content
- `{typography.caption}` — 10 points — 400 — Date, fee, and navigation

- Keep balances large and calm.
- Use emoji as punctuation, not replacement for meaning.
- Keep amount and fee information explicit.
- Avoid decorative fonts inside financial tasks.

Use SF Pro or Inter with clear numerals. Preserve generous balance sizing and compact list copy.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 16 points gutters, 10–12 points row gaps, and 24 points between balance, shortcuts, and the main sheet.

Home stacks balance, three circular shortcuts, card, and a large rounded sheet. Payments and transfers use one-column lists; savings may combine action circles with a sheet.

Keep the gradient header spacious and the white sheet dense. Large empty areas around balances are intentional.

Use tilted black cards, multicolor story rings, and small cartoons. Avoid glass effects or multiple shadow layers.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five bottom destinations for Home, Payments, Savings, Cashback, and More. Active state is black; contextual gradients continue behind the current section.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary buttons and circular shortcuts are black with white labels or icons. Secondary controls use pale gray. Native controls must inherit black actions and the package geometry.

The payment card is black and minimal. White sheets group stories, checklists, transactions, services, or savings education under the balance.

Transfer search, phone, card, and goal fields use pale rounded inputs. Keep amount, source, commission, and confirmation in one linear sequence.

Transfer detail exposes recipient, amount, note, receipt, split, repeat, and help. Success may expand into a full-screen personal postcard while retaining close and transaction context.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

User-postcard imagery can fill the viewport. Product illustrations remain centered on white sheets with ample space and simple silhouettes.

Use `cover` for personal receipt imagery and `contain` for finance cartoons. Maintain text contrast over gradient backgrounds.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Transfer detail exposes recipient, amount, note, receipt, split, repeat, and help. Success may expand into a full-screen personal postcard while retaining close and transaction context.

Green marks incoming value and completion; amber and red remain warnings or failures. Contextual pastels must never substitute for semantic feedback.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Circular actions, story items, rows, segments, and bottom navigation require at least 44 points targets.
- Allow story circles and analytics controls to scroll horizontally. Keep the confirmation button pinned in long transfer or savings setup flows.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not turn pastel colors into competing CTAs.
- Do not hide fees behind playful language.
- Do not over-round list rows inside sheets.
- Do not mix several gradients on one screen.
- Do not expose default blue controls.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

The reviewed scenarios cover onboarding, home, cards, transfers, payments, savings, goals, cashback, and More. Tablet layouts, dark mode, accessibility scaling, and every failure state were not visible.

</design-context>
