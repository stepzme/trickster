<design-context>
---
version: 1
platform: iOS
name: Optima24-design-analysis
description: "A dark banking super-app combining near-black stacked modules, hot red line icons, gold card accents, orange QR, saturated 3D service tiles, and dense promotional panels."
colors: {primary: "#E9293A", on-primary: "#FFFFFF", primary-focus: "#C31C2C", ink: "#F5F5F6", ink-muted: "#A2A2A8", ink-subtle: "#707077", ink-tertiary: "#4E4F55", canvas: "#0D0E10", surface-1: "#1B1C1F", surface-2: "#27282C", surface-3: "#34353A", surface-4: "#414249", hairline: "#2B2C30", hairline-strong: "#43444A", hairline-tertiary: "#595A62", inverse-canvas: "#FFFFFF", inverse-surface-1: "#F1F1F3", inverse-surface-2: "#E3E3E6", inverse-ink: "#151619", brand-secure: "#F0A91B", semantic-success: "#3BC274", semantic-overlay: "#17181C"}
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
rounded: {xs: 6, sm: 10, md: 14, lg: 18, xl: 24, xxl: 28, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 8 10}
---

# Overview

Optima24 uses a black modular dashboard, red service glyphs, gold product cues, and saturated campaigns to make a broad banking and partner-service range feel energetic.

# Non-negotiable visual invariants

- Primary screens use near-black canvas.
- Characteristic content and controls use charcoal cards.
- The recurring color treatment uses red line icons.
- The sampled screens consistently show gold selected product.
- The recurring color treatment uses orange scanner.
- The recurring color treatment uses colorful service renders.
- The sampled screens consistently show dense promotional modules.
- Preserve the dark red-gold banking hierarchy.

# Color and surfaces

Red drives active navigation, payment, and service icons. Gold identifies premium card and milestone value; orange belongs to the scanner.

Use near-black for the canvas and layered charcoal for grouped banking cards, lists, and dock.

White leads balances and headings; gray supports masked products, descriptions, and metadata.

Green confirms product or money state; gold signals premium value; red should not replace warning semantics without context.

# Typography

Use SF Pro Display for balances and banking headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with balance, product, recipient, or payment amount.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans with clear Cyrillic and stable currency numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home mixes icon grids and two-column product tiles; My Bank uses a single stacked product list; Services uses asymmetrical colored tiles.

Dense Home content is intentional, but focused payment and product screens should simplify sharply.

Use layered charcoal, colored tiles, and 3D objects; avoid light shadows that disappear on black.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating dark five-item dock with a raised orange QR control and red active destination.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Red drives payment and primary banking actions; secondary actions stay charcoal, while QR uses orange.

Bank cards group balance and status; service tiles pair label with a distinct rendered object; campaigns remain bounded.

Dark amount and recipient forms use styled gray keypad or fields, red action, and clear source details.

Keep fee, product state, operation result, notification, and balance impact beside the relevant action.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Service renders live in rounded colored tiles; cards and campaigns use wide rectangles with cropped art.

Contain promotional and service art in rounded modules; keep transaction data on calm dark surfaces.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep fee, product state, operation result, notification, and balance impact beside the relevant action.

Green confirms product or money state; gold signals premium value; red should not replace warning semantics without context.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Keep product, balance, and primary action first; reduce campaigns and partner offers before core banking.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use every campaign color for ordinary transactional controls.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

# Known gaps

- Long-tail error recovery was not fully sampled.
- Rare support and account states were not reviewed.
- Tablet and landscape layouts were not represented.

</design-context>
