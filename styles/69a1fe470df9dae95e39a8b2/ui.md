<design-context>
---
version: 1
platform: iOS
name: Zopa-design-analysis
description: "A calm UK banking interface built around deep forest green, white financial cards, mint accents, soft peach promotions, serif-led balances, and friendly botanical artwork. Transactional steps remain sparse and explicit, while hubs and offers add warmth without weakening trust."
colors: { primary: "#063B32", on-primary: "#FFFFFF", primary-soft: "#DDFBEF", accent: "#67E0BC", ink: "#12221F", ink-muted: "#707A77", ink-subtle: "#ADB5B2", canvas: "#F3F1F7", surface-1: "#FFFFFF", surface-2: "#E9ECEB", hairline: "#DDE2E0", semantic-success: "#56D68A", semantic-warning: "#F2C65C", semantic-danger: "#B83D46", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Georgia, fontSize: 42, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: Georgia, fontSize: 34, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: Georgia, fontSize: 28, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.3 }
  headline: { fontFamily: Georgia, fontSize: 22, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Arial, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Arial, fontSize: 16, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Arial, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Arial, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Arial, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Arial, fontSize: 10, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Arial, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Arial, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5, sm: 9, md: 13, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: [13, 18]}
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [5, 9]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: [12, 14]}
  navigation-bar: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52 }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

Zopa combines reassuring traditional finance typography with modern mint accents, clear account cards, and direct payment flows.

# Non-negotiable visual invariants

- Keep money and source visible before review.
- Explain beta and AI limitations.
- Confirm movement of money explicitly.
- Home stacks account, savings, offers, and growth; payments and account detail use grouped cards above a five-tab footer.
- Keep transfer forms sparse and allow dashboards to be moderately dense.

# Color and surfaces

Use forest green for trust and primary actions, mint for active highlights, and peach for promotional messages.

Use a pale lavender-gray canvas with white cards and deep-green branded headers.

Use dark green-black for balances and titles, gray for metadata, and muted red for declined transactions.

Use mint for success, amber for savings prompts, red for declined state, and gray for disabled actions.

# Typography

Use a restrained serif for greetings, balances, and major headings and a clear sans for controls and details.

Use 34–42 points for balances, 22 points for page titles, 16 points for cards, 14 points body, and 10–12 points metadata.

Make amount, available balance, interest, and payment state stronger than promotional content.

Use Georgia for display and the platform sans or Arial for interface text.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 10–12 points gutters, 10 points card gaps, and 14 points padding.

Home stacks account, savings, offers, and growth; payments and account detail use grouped cards above a five-tab footer.

Keep transfer forms sparse and allow dashboards to be moderately dense.

Use small botanical scenes and floating financial objects inside promotional cards.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Home, Payments, the central assistant, Apply, and Help remain in the bottom bar.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use forest-green filled buttons for review and confirm; outlined buttons provide secondary exits.

Use account, savings, benefit, activity, payee, direct debit, offer, and consent cards.

Stack amount, source, destination, payee identity, sort code, and account number with visible validation.

Show available balance, interest, active benefits, transfer progress, declined entries, and beta state.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Contain artwork inside offer cards and keep financial inputs free of decoration.

Contain promo art without crop and keep it outside transactional fields.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Show available balance, interest, active benefits, transfer progress, declined entries, and beta state.

Use mint for success, amber for savings prompts, red for declined state, and gray for disabled actions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Keep account actions, payees, fields, footer, and confirmation controls at least 44 points.
- Preserve amount, source, destination, state, and primary action; move offers lower.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not let promotions outrank account state.
- Do not hide declined transactions.
- Do not pre-enable incomplete transfer forms.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
