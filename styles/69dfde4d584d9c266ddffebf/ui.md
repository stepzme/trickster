<design-context>
---
version: 1
platform: iOS
name: PayPal-design-analysis
description: "A calm financial interface using a pale blue-lilac canvas, large white cards, strong black headings, PayPal blue action accents, sparse three-tab navigation, and generous empty space around focused payment tasks."
colors: {primary: "#0070E0", on-primary: "#FFFFFF", primary-focus: "#0057B8", ink: "#101114", ink-muted: "#5F6268", ink-subtle: "#92969D", ink-tertiary: "#C2C6CC", canvas: "#F2F4FF", surface-1: "#FFFFFF", surface-2: "#F7F8FC", surface-3: "#E8ECF4", surface-4: "#DDE2EB", hairline: "#E2E5EC", hairline-strong: "#C9CED8", hairline-tertiary: "#B3BAC5", inverse-canvas: "#000000", inverse-surface-1: "#1B1D21", inverse-surface-2: "#2C2F34", inverse-ink: "#FFFFFF", brand-secure: "#003087", semantic-success: "#2E936F", semantic-overlay: "#15171B"}
typography:
  display-xl: {fontFamily: PayPal Open, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.9}
  display-lg: {fontFamily: PayPal Open, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: PayPal Open, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.4}
  headline: {fontFamily: PayPal Open, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.3}
  card-title: {fontFamily: PayPal Open, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: PayPal Open, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: PayPal Open, fontSize: 15, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: PayPal Open, fontSize: 13, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: PayPal Open, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: PayPal Open, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: PayPal Open, fontSize: 13, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: PayPal Open, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 48}
components:
  button-primary: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14 20}
  button-primary-pressed: {backgroundColor: "{colors.inverse-surface-1}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10 14}
  balance-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  activity-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-3}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 12}
---

# Overview

PayPal is sparse and reassuring: a pale blue-lilac field, white financial cards, black typography, and a small amount of PayPal blue. The interface gives each money task a single visible decision.

# Non-negotiable visual invariants

- Primary screens use pale cool canvas.
- Characteristic content and controls use white cards.
- The recurring color treatment uses bold black headings.
- The recurring color treatment uses blue financial accent.
- Characteristic content and controls use black pill commitments.
- The sampled screens consistently show three destinations.
- The sampled screens consistently show deliberate empty space.
- Isolate one money decision per focused screen.

# Color and surfaces

PayPal blue identifies balance, active transfer context, and the raised central navigation action. Black is used for the final Send, Request, or Done commitment.

A pale blue-lilac canvas carries white rounded cards and fields; deeper grays appear only for dividers and inactive structure.

Black leads amounts and task headings; mid-gray carries labels and explanations; blue highlights links and financial context.

Muted green confirms completion, blue denotes trusted action, and orange is limited to small attention dots.

# Typography

Use PayPal Open where available, with SF Pro or another humanist system sans as substitute.

- display-lg — 30 points — 700 — Amount or result
- headline — 21 points — 700 — Task heading
- card-title — 16 points — 600 — Balance or transaction
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Navigation and metadata

- Make amount and action unmistakable.
- Use short centered guidance in focused tasks.
- Keep financial metadata aligned and quiet.

Use a friendly platform sans with sturdy bold weights and tabular numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 12–16 points card padding, 16 points gutters, and large open vertical zones between decisions.

Home and Wallet are one-column card stacks; Send/Request centers one search field and one segmented action near the bottom.

Empty space is functional: it isolates the financial task and prevents transaction details from competing with the next action.

Use soft card separation and one dimensional confirmation object; avoid decorative gradients or multiple shadow levels.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use three destinations with a raised circular Send/Request control in the center.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use black wide pills for final commitments, blue circles for the central transfer action, and text links for secondary navigation.

Balance and activity cards use white, low visual noise, and aligned amounts; wallet cards may carry their own issuer artwork.

Search and recipient inputs use white outlined pills; surrounding native controls inherit the same black type and generous spacing.

Show transaction direction, amount, counterparty, date, and completion outcome without promotional distraction.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Avatars remain small circles; card artwork fills its own rectangular wallet card; confirmation art stays isolated and centered.

Keep avatars circular and wallet-card artwork uncropped within its fixed ratio.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show transaction direction, amount, counterparty, date, and completion outcome without promotional distraction.

Muted green confirms completion, blue denotes trusted action, and orange is limited to small attention dots.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Navigation, transfer actions, segmented controls, transaction rows, and fields remain at least 44 points.
- Preserve amount, recipient, balance, transaction state, and commitment; collapse explanatory copy first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not fill empty space with extra financial promotions.
- Do not use blue for every button when black communicates the final commitment.
- Do not bury transfer direction or amount in prose.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
