<design-context>
---
version: 1
platform: iOS
name: MTBank-Moby-design-analysis
description: "A bright mobile-banking system with saturated blue account headers, white rounded product cards, cool gray grouped backgrounds, fine line icons, and a cyan-magenta Moby brand accent."
colors: {primary: "#1677E8", on-primary: "#FFFFFF", primary-focus: "#0B61C5", ink: "#17191C", ink-muted: "#697079", ink-subtle: "#969DA6", ink-tertiary: "#C3C8CE", canvas: "#FFFFFF", surface-1: "#F2F3F4", surface-2: "#E8EBEE", surface-3: "#DDE1E5", surface-4: "#CFD5DB", hairline: "#E2E5E8", hairline-strong: "#CBD0D5", hairline-tertiary: "#AFB6BE", inverse-canvas: "#0A1830", inverse-surface-1: "#102949", inverse-surface-2: "#173B62", inverse-ink: "#FFFFFF", brand-secure: "#E31E55", semantic-success: "#2FB978", semantic-overlay: "#101820"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2}
  mono: {fontFamily: SF Mono, fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 6, sm: 12, md: 18, lg: 24, xl: 28, xxl: 32, pill: 9999, full: 9999}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8 10}
---

# Overview

MTBank Moby uses a saturated blue account stage and soft white product cards to make balances, actions, cards, deposits, and applications feel direct and approachable.

# Non-negotiable visual invariants

- Navigation or control chrome uses blue gradient headers.
- Characteristic content and controls use generous rounded cards.
- The sampled screens consistently show line icons.
- The sampled screens consistently show account carousels.
- Characteristic content and controls use white quick-action tiles.
- The recurring color treatment uses a small cyan-magenta identity.
- Preserve the blue account stage and calm white product hierarchy.
- Keep the primary task and current state immediately legible.

# Color and surfaces

Electric blue drives active navigation, action icons, and financial focus; cyan-magenta belongs to the Moby mark and rare brand moments.

White owns operational content, while cool light gray groups stacked products and blue gradients frame account context.

Near-black carries balances and product titles; blue may emphasize actions, dates, and favorable product facts.

Green indicates positive money movement and success; red is reserved for warnings or destructive decisions.

# Typography

Use SF Pro Display for balances and section headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 20 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with balance, product status, and next action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the system sans with tabular numerals; keep currency and masked account identifiers stable.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home stacks full-width account and deposit cards; Products uses simple vertical rows beneath a promotion rail.

Give money values and quick actions room, then keep settings and product lists compact.

Use gradient headers, nested card layers, and restrained soft shadows only where a product floats above the grouped canvas.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations in a white rounded bar; the active icon may use the Moby gradient while labels remain crisp.

This section governs appearance only; product behavior and information architecture come from the approved Research and Planning artifacts.

# Components

Primary actions use blue; the three core money actions appear as equal white tiles within the blue header.

Product cards combine balance, masked identifier, status, bonuses, and one clear expansion or action affordance.

Inputs and keypads remain light and sparse, with blue focus and no generic default styling.

Attach transaction direction, pending state, balance impact, and product availability to the relevant card or row.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy.

# Imagery and icons

Keep cards, account art, and promotional imagery within generous rounded rectangles; avoid decorative cropping near financial data.

Contain promotional art in dedicated banners and keep it away from balances, limits, and control labels.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Attach transaction direction, pending state, balance impact, and product availability to the relevant card or row.

Green indicates positive money movement and success; red is reserved for warnings or destructive decisions.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve balances and money actions first, then stack product metadata and shorten promotional content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Preserve the documented appearance instead of introducing an unrelated light or dark palette.

# Anti-generic checklist

- Do not extend cosmic launch art into every transactional surface.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
