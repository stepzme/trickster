<design-context>
---
version: 1
platform: iOS
name: My-O-Bank-design-analysis
description: "A dense super-app system of pale gray background, bright white service modules, hot magenta ecosystem accents, cyan utility links, product imagery, and a floating translucent dock."
colors: {primary: "#EC008C", on-primary: "#FFFFFF", primary-focus: "#C60076", ink: "#17181B", ink-muted: "#65676D", ink-subtle: "#96989E", ink-tertiary: "#C1C3C8", canvas: "#F5F3F6", surface-1: "#FFFFFF", surface-2: "#EEEAF0", surface-3: "#E1DDE4", surface-4: "#D4CFD7", hairline: "#E5E1E7", hairline-strong: "#CCC7CF", hairline-tertiary: "#B3ACB6", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#00A9DF", semantic-success: "#68B94B", semantic-overlay: "#17181C"}
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
rounded: {xs: 6, sm: 10, md: 16, lg: 22, xl: 28, xxl: 32, pill: 9999, full: 9999}
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
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8 10}
---

# Overview

My O! + Bank combines telecom, finance, services, rewards, and marketplace content through white modules, magenta identity, and persistent quick navigation.

# Non-negotiable visual invariants

- Characteristic content and controls use white modular cards.
- Characteristic content and controls use hot magenta controls.
- The recurring color treatment uses cyan links.
- Primary screens use pale gray canvas.
- The sampled screens consistently show compact product grids.
- The sampled screens consistently show story rails.
- Navigation or control chrome uses a floating QR-centered dock.
- Preserve clear separation among telecom, banking, and marketplace modules.

# Color and surfaces

Magenta owns the O! identity, QR scanner, active navigation, and selected ecosystem products; cyan identifies secondary links and some telecom utilities.

Use pale gray behind crisp white modules, with subtly tinted fields and sheets for grouped choices.

Near-black leads balances, service titles, and product prices; gray supports account identifiers, financing, and allowance context.

Green confirms available allowance or success; blue communicates information; magenta should not replace error red.

# Typography

Use SF Pro Display for balances and service headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with the current account, balance, service, or product price.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans with stable currency metrics and readable Cyrillic.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home stacks full-width account modules and service icon grids; Market uses two-column products and horizontal category rails.

Keep related service groups compact, but separate telecom, bank, and commerce domains clearly.

Use translucent dock blur, light module separation, and bounded product imagery rather than heavy card shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating white translucent dock with four destinations and a central magenta QR scanner.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Magenta drives primary ecosystem actions and scan; financial links may use cyan, while secondary controls remain white or pale.

Service modules combine one domain heading, decisive metric, and direct action; product cards align image, price, and term.

Search and payment fields use soft filled surfaces with magenta focus, matching the rounded system.

Keep allowance, loan, bonus, transfer, and order status beside the module or transaction they affect.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Product photography stays contained in white cards; story and campaign imagery uses compact rounded frames.

Contain product and campaign imagery within stable aspect ratios and protect all embedded copy.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep allowance, loan, bonus, transfer, and order status beside the module or transaction they affect.

Green confirms available allowance or success; blue communicates information; magenta should not replace error red.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve account context, balance, and primary action; reduce campaign rails before operational tools.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use promotional color on every operational card.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
