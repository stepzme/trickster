<design-context>
---
version: 1
platform: iOS
name: Ohmywishes-design-analysis
description: "A light social wishlist system defined by bold black type, product photography, translucent white navigation, soft gray tiles, black save actions, and restrained pink-to-lilac creation accents."
colors: {primary: "#111111", on-primary: "#FFFFFF", primary-focus: "#000000", ink: "#141416", ink-muted: "#6E6E73", ink-subtle: "#A1A1A6", ink-tertiary: "#C8C8CC", canvas: "#FFFFFF", surface-1: "#F4F4F5", surface-2: "#ECECEE", surface-3: "#DFDFE2", surface-4: "#D2D2D6", hairline: "#E5E5E7", hairline-strong: "#CDCDD0", hairline-tertiary: "#B5B5BA", inverse-canvas: "#1B1C20", inverse-surface-1: "#2C2D32", inverse-surface-2: "#3D3E45", inverse-ink: "#FFFFFF", brand-secure: "#8D9CFF", semantic-success: "#5EBB69", semantic-overlay: "#17181C"}
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
rounded: {xs: 6, sm: 10, md: 14, lg: 20, xl: 26, xxl: 30, pill: 9999, full: 9999}
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

Ohmywishes is a nearly colorless social-shopping canvas where product photos, editorial collections, large profile type, and a floating dock keep gift discovery and wish management friendly.

# Non-negotiable visual invariants

- Primary screens use white canvas.
- The recurring color treatment uses bold black headings.
- Characteristic content and controls use pale gray tiles.
- The sampled screens consistently show image grids.
- Characteristic content and controls use black pill actions.
- Navigation or control chrome uses frosted dock.
- The sampled screens consistently show small pink-lilac creation accents.
- Preserve photography-led discovery and almost colorless chrome.

# Color and surfaces

Black is the primary action and content anchor. Warm pink-red and blue-lilac gradients appear sparingly on add, create, and social game moments.

White carries primary content; pale gray organizes profile categories, gift topics, and inactive controls.

Near-black leads names, gift titles, and prices; medium gray supports descriptions, reservation, and list metadata.

Green marks active game or confirmed state; blue may indicate discovery links; red remains distinct from the soft creation gradient.

# Typography

Use SF Pro Display for profile and collection headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with the person, gift title, price, or social state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use a rounded modern system sans; preserve the friendly oversized headings and compact commerce copy.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Gift ideas and wishlists use two image-led columns; profiles and Secret Santa use wide tiles and horizontal category rails.

Keep generous space around profile identity and social creation, while allowing dense product grids below.

Use frosted navigation, soft gray tiles, and image content rather than visible card shadows.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use a floating translucent four-item dock with soft active capsule and minimal line icons.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary save uses a black full-width pill; create actions may use a subtle red-to-lilac gradient; secondary buttons stay gray.

Gift cards are image-first with title, price, add, and overflow; social games use large simple tiles with avatar stacks.

Search floats above navigation in a white pill, and forms inherit the same soft rounded treatment.

Keep reserved count, game state, ownership, and save status next to the relevant wish or group.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Product images use tall rounded crops; avatars are circular; social tiles use broad rounded rectangles.

Use consistent portrait or square crops and keep product focal objects clear; never stretch source photography.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep reserved count, game state, ownership, and save status next to the relevant wish or group.

Green marks active game or confirmed state; blue may indicate discovery links; red remains distinct from the soft creation gradient.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve identity, item image, price, and save action; reduce collection metadata before core wish content.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not wrap every wish in heavy borders or use gradients on ordinary controls.
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
