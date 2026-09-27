<design-context>
---
version: alpha
name: Zopa-design-analysis
description: "A calm UK banking interface built around deep forest green, white financial cards, mint accents, soft peach promotions, serif-led balances, and friendly botanical artwork. Transactional steps remain sparse and explicit, while hubs and offers add warmth without weakening trust."
colors: { primary: "#063B32", on-primary: "#FFFFFF", primary-hover: "#002E27", primary-soft: "#DDFBEF", accent: "#67E0BC", ink: "#12221F", ink-muted: "#707A77", ink-subtle: "#ADB5B2", canvas: "#F3F1F7", surface-1: "#FFFFFF", surface-2: "#E9ECEB", hairline: "#DDE2E0", semantic-success: "#56D68A", semantic-warning: "#F2C65C", semantic-danger: "#B83D46", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: Georgia, fontSize: 42px, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: Georgia, fontSize: 34px, fontWeight: 500, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: Georgia, fontSize: 28px, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: Georgia, fontSize: 22px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: Arial, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: Arial, fontSize: 16px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: Arial, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: Arial, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: Arial, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: Arial, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: Arial, fontSize: 15px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: Arial, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 13px 18px }
  finance-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  status-chip: { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 5px 9px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px 14px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

Zopa combines reassuring traditional finance typography with modern mint accents, clear account cards, and direct payment flows.

## Colors

### Brand & Accent
Use forest green for trust and primary actions, mint for active highlights, and peach for promotional messages.

### Surface
Use a pale lavender-gray canvas with white cards and deep-green branded headers.

### Text
Use dark green-black for balances and titles, gray for metadata, and muted red for declined transactions.

### Semantic
Use mint for success, amber for savings prompts, red for declined state, and gray for disabled actions.

## Typography

### Font Family
Use a restrained serif for greetings, balances, and major headings and a clear sans for controls and details.

### Hierarchy
Use 34–42px for balances, 22px for page titles, 16px for cards, 14px body, and 10–12px metadata.

### Principles
Make amount, available balance, interest, and payment state stronger than promotional content.

### Note on Font Substitutes
Use Georgia for display and the platform sans or Arial for interface text.

## Layout

### Spacing System
Use a 4px base, 10–12px gutters, 10px card gaps, and 14px padding.

### Grid & Container
Home stacks account, savings, offers, and growth; payments and account detail use grouped cards above a five-tab footer.

### Whitespace Philosophy
Keep transfer forms sparse and allow dashboards to be moderately dense.

## Elevation & Depth
Use white cards with light borders and shadow; reserve overlays for consent and feedback.

### Decorative Depth
Use small botanical scenes and floating financial objects inside promotional cards.

## Shapes

### Border Radius Scale
Use 9px for fields, 13px for cards, 18px for sheets, and circles for account actions.

### Photography & Illustration Geometry
Contain artwork inside offer cards and keep financial inputs free of decoration.

## Components

### Buttons
Use forest-green filled buttons for review and confirm; outlined buttons provide secondary exits.

### Pricing Tabs
Use segmented choices for personal or business payees and compact status chips.

### Cards & Containers
Use account, savings, benefit, activity, payee, direct debit, offer, and consent cards.

### Inputs & Forms
Stack amount, source, destination, payee identity, sort code, and account number with visible validation.

### Status & Build Page
Show available balance, interest, active benefits, transfer progress, declined entries, and beta state.

### Navigation
Home, Payments, the central assistant, Apply, and Help remain in the bottom bar.

### Footer
Keep the footer white; use mint for the assistant and dark green for active destinations.

## Do's and Don'ts

### Do
- Keep money and source visible before review.
- Explain beta and AI limitations.
- Confirm movement of money explicitly.

### Don't
- Don't let promotions outrank account state.
- Don't hide declined transactions.
- Don't pre-enable incomplete transfer forms.

## Responsive Behavior

### Breakpoints
Use one column on phones, split account and activity on tablet, and a capped banking workspace on desktop.

### Touch Targets
Keep account actions, payees, fields, footer, and confirmation controls at least 44px.

### Collapsing Strategy
Preserve amount, source, destination, state, and primary action; move offers lower.

### Image Behavior
Contain promo art without crop and keep it outside transactional fields.

## Iteration Guide
1. Build home, account detail, payments, and navigation.
2. Add transfers, payees, savings, and benefits.
3. Add assistant, offers, applications, and help.

## Known Gaps
- Tokens were inferred visually from sampled mobile screens.
- Bank account, Add money instantly, Assistant, and Send money were image-reviewed.
- Lending application and card-management edge cases were not deeply sampled.

</design-context>
