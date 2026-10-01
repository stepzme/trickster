<design-context>
---
version: 1
platform: iOS
name: ONAY-design-analysis
description: "A bright transit-payment system using vivid yellow cards and actions, black icons, cool white surfaces, softly colored 3D service objects, and a glowing central QR scanner."
colors: {primary: "#FFD600", on-primary: "#111111", primary-focus: "#E8C000", ink: "#141518", ink-muted: "#676A70", ink-subtle: "#999CA2", ink-tertiary: "#C2C5CA", canvas: "#F8F9FB", surface-1: "#FFFFFF", surface-2: "#F0F2F5", surface-3: "#E4E7EB", surface-4: "#D7DBE0", hairline: "#E4E7EA", hairline-strong: "#CCD1D6", hairline-tertiary: "#B3BAC1", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#15172B", semantic-success: "#28B86A", semantic-overlay: "#17181C"}
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10 14}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 12 14}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xl}", padding: 8 10}
---

# Overview

ONAY uses bright yellow mobility cards, white grouped surfaces, friendly rendered objects, and a central scanner to make transit payment and route discovery immediately approachable.

# Non-negotiable visual invariants

- The recurring color treatment uses ONAY yellow.
- Characteristic content and controls use large balance card.
- The sampled screens consistently show central glowing QR.
- Characteristic content and controls use rounded white panels.
- The typographic hierarchy uses black route type.
- The principal image treatment uses colorful service objects.
- The sampled screens consistently show compact commerce surface.
- Preserve yellow mobility focus and scannable numeric hierarchy.

# Color and surfaces

Yellow owns transit cards, scanner, active selections, and primary actions. Black provides necessary contrast and strong wayfinding.

Use cool near-white for the canvas and crisp white for cards, route grids, and shortcut tiles.

Near-black leads balances, route numbers, and product prices; gray supports trip count and instructions.

Green confirms successful payment or eligibility; red is reserved for errors and service interruption.

# Typography

Use SF Pro Display for balance and route headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with card balance, route number, or fare action.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the platform sans with strong numerals and clear Cyrillic or Kazakh labels.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Cards use one wide carousel; routes use a four-column number grid; shop uses two product columns.

Keep route and payment actions spacious while allowing marketplace shelves to become denser.

Use a soft yellow scanner glow, light card elevation, and illustrated object shadow rather than heavy containers.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use Routes, Cards, a raised yellow QR scanner, Shop, and Menu in a rounded white bottom bar.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary payment and add actions use yellow pills with black labels; secondary actions stay white and outlined.

Balance cards combine city, trips, QR, and details; route cells focus on the number; shop cards remain image-first.

Search and phone fields use pale fills, yellow continuation, and system-aligned validation.

Keep balance, trip count, ticket, payment, and city state close to the active card or route.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Transit cards are wide rounded rectangles; QR is circular; service illustrations live in centered rounded tiles.

Contain product photos in the shop and rendered objects in educational or service modules.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep balance, trip count, ticket, payment, and city state close to the active card or route.

Green confirms successful payment or eligibility; red is reserved for errors and service interruption.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve card balance, scanner, and current route tools; reduce promotions before transit essentials.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not use yellow as a broad background behind dense route or shop content.
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
