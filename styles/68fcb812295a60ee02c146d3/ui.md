<design-context>
---
version: 1
platform: iOS
name: Otello-design-analysis
description: "A hotel discovery system with electric green search and savings accents, white content canvas, black rating badges, image-led property rails, neighborhood maps, and small toy-like 3D state symbols."
colors: {primary: "#67E82F", on-primary: "#142112", primary-focus: "#4FC21D", ink: "#17191B", ink-muted: "#696C71", ink-subtle: "#9B9EA3", ink-tertiary: "#C3C6CA", canvas: "#FFFFFF", surface-1: "#F6F6F5", surface-2: "#EDEFEA", surface-3: "#E2E5DF", surface-4: "#D5D9D2", hairline: "#E4E7E2", hairline-strong: "#CCD1C9", hairline-tertiary: "#B3B9B0", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#173C43", semantic-success: "#67E82F", semantic-overlay: "#17181C"}
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
rounded: {xs: 6, sm: 10, md: 16, lg: 20, xl: 26, xxl: 30, pill: 9999, full: 9999}
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
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 10}
---

# Overview

Otello uses vivid green search and savings cues, crisp hotel photography, black comparison badges, and simple booking states to make accommodation discovery direct.

# Non-negotiable visual invariants

- The recurring color treatment uses electric green accent.
- Primary screens use white canvas.
- The recurring color treatment uses black rating badges.
- The sampled screens consistently show horizontal property rails.
- The sampled screens consistently show map photo clusters.
- Characteristic content and controls use compact filter chips.
- The principal image treatment uses friendly 3D state objects.
- Preserve green savings emphasis and black factual badges.

# Color and surfaces

Electric green owns search, savings, booking action, and favorable price. Charcoal provides contrast for ratings and selected segments.

White is primary; light warm gray groups cards, chips, and empty booking panels.

Near-black leads property and destination titles; green may emphasize price; gray supports dates, location, and review count.

Green communicates favorable or primary action, while red and amber remain available for cancellation or warning.

# Typography

Use SF Pro Display for destination and property headings and SF Pro Text for controls, content, and metadata.

- display-lg — 30 points — 700 — Hero or state
- headline — 21 points — 700 — Section title
- card-title — 16 points — 600 — Primary item
- body — 13 points — 400 — Detail
- caption — 10 points — 400 — Metadata

- Lead with destination, property, price, rating, or booking state.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

Use the system sans with compact rating and price numerals.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

Home and Super Prices use horizontal property rails; map clusters images by area; bookings use one wide column.

Allow search and empty states more space, while repeated hotel rails stay compact.

Use photography, black badges, and restrained card contrast; 3D symbols remain small and centered.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use five labeled destinations on white, with black active icon and gray inactive icons.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Primary search and booking use green with dark text; secondary actions use white or charcoal segments.

Property cards align image, discount, rating, reviews, dates, and price; booking cards emphasize state and recovery.

Destination search uses white rounded field with green focus or trailing action, styled consistently across map and Home.

Keep discount, upgrade, availability, active or past booking, and sign-in requirement close to the item.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Property photos use rounded landscape crops; map pins can be image clusters; state objects sit centered in white panels.

Use consistent hotel crops and protect focal interiors or facades; do not distort map thumbnails.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep discount, upgrade, availability, active or past booking, and sign-in requirement close to the item.

Green communicates favorable or primary action, while red and amber remain available for cancellation or warning.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Primary actions, navigation, cards, and contextual controls remain at least 44 points.
- Preserve destination, photo, rating, price, and booking action; reduce collections before core comparison.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not turn every card green or cover property photos with excessive chrome.
- Do not hide status, constraints, or secondary conditions.
- Do not add heavy shadows around every container.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
