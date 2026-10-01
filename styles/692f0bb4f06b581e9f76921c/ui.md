<design-context>
---
version: 1
platform: iOS
name: My-Viva-design-analysis
description: "A bright telecom utility with clean white surfaces, Viva red activation controls, blue allowance meters, compact story tiles, and straightforward account modules."
colors: {primary: "#E9001D", on-primary: "#FFFFFF", primary-focus: "#C60019", ink: "#18191C", ink-muted: "#696B71", ink-subtle: "#9B9DA3", ink-tertiary: "#C5C7CC", canvas: "#FFFFFF", surface-1: "#F7F7F9", surface-2: "#EFEFF2", surface-3: "#E4E4E8", surface-4: "#D7D7DC", hairline: "#E6E6E9", hairline-strong: "#CDCDD2", hairline-tertiary: "#B4B4BA", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#2A9FDB", semantic-success: "#32B877", semantic-overlay: "#17181C"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

My Viva is a restrained white account interface where red actions, blue usage meters, and image-led promotional cards separate daily telecom work from offers.

# Non-negotiable visual invariants

- Primary screens use white canvas.
- The recurring color treatment uses Viva red.
- The recurring color treatment uses blue progress meters.
- Characteristic content and controls use soft shadowed account cards.
- The sampled screens consistently show compact stories.
- The sampled screens consistently show plain icon utilities.
- Preserve red action hierarchy and blue allowance feedback.
- Keep the primary task and current state immediately legible.

# Color and surfaces

Viva red owns activation, pay, active navigation, and brand identity. Blue is functional for allowances and selected service metrics.

White is the main canvas; very pale gray lifts account, shortcut, and promotion cards without heavy borders.

Near-black carries balances and headings; gray supports cost timestamps, package totals, and promotional detail.

Blue shows usage, green confirms success, and red remains brand-led unless a destructive state is explicit.

# Typography

Use SF Pro Display for account and promotion headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with balance, remaining allowance, or activation decision.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans and preserve compact numeric clarity across Armenian, Russian, or English content.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home uses one account column, compact utility tiles, and two-column recommendations; promotions use a single vertical feed.

Keep operational account facts concise and give promotional detail more vertical breathing room.

Use restrained soft card separation and crisp white space; promotional images provide most visual depth.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations with red active icon and quiet gray inactive labels.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Full-width red buttons drive pay and activate; secondary utilities use white tiles or text links.

Account cards align balance, pay, allowance meters, and timestamp; promotion cards separate image and explanatory copy.

Phone and account fields are sparse, with red actions and platform keypad controls visually integrated.

Keep package usage, service cost, activation, and account timestamp next to the relevant metric.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Story tiles are compact rounded squares; promotion art uses wide rounded crops; account icons remain simple.

Preserve promotion crops and embedded brand text; keep account content independent of imagery.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep package usage, service cost, activation, and account timestamp next to the relevant metric.

Blue shows usage, green confirms success, and red remains brand-led unless a destructive state is explicit.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Retain balance, pay, and allowance values; reduce recommendations before core account utilities.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not use promotional imagery as background behind account data.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
