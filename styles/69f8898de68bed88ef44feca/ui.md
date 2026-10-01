<design-context>
---
version: 1
platform: iOS
name: Poizon-design-analysis
description: "A dense social-commerce interface with a white canvas, black utility typography, bright turquoise purchase actions, media-heavy two-column feeds, compact product metadata, and persistent marketplace navigation."
colors: {primary: "#12C8C2", on-primary: "#FFFFFF", primary-focus: "#0AA29E", ink: "#111214", ink-muted: "#686B70", ink-subtle: "#9A9DA3", ink-tertiary: "#C5C8CC", canvas: "#FFFFFF", surface-1: "#F6F7F8", surface-2: "#EDF0F2", surface-3: "#E1E5E8", surface-4: "#D5DADF", hairline: "#E4E7E9", hairline-strong: "#CBD1D5", hairline-tertiary: "#B4BBC0", inverse-canvas: "#121416", inverse-surface-1: "#24272A", inverse-surface-2: "#363A3E", inverse-ink: "#FFFFFF", brand-secure: "#08AAA5", semantic-success: "#2CB879", semantic-overlay: "#111315"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.7}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4}
  display-md: {fontFamily: SF Pro Display, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Display, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2, sm: 6, md: 10, lg: 14, xl: 20, xxl: 26, pill: 9999, full: 9999}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 14 18}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 12 16}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 9 12}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8}
  media-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 6}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10 12}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3 7}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8 8}
---

# Overview

Poizon is a dense hybrid of social feed and marketplace. White carries the interface, imagery dominates both feed and product surfaces, and a bright turquoise purchase action cuts through otherwise black and gray utility chrome.

# Non-negotiable visual invariants

- The principal image treatment uses two-column media feed.
- The sampled screens consistently show dense search and category rails.
- The principal image treatment uses large product media.
- The sampled screens consistently show compact price and assurance metadata.
- The sampled screens consistently show turquoise Buy now.
- The sampled screens consistently show social likes and follows.
- The sampled screens consistently show four destinations.
- Preserve the media-first social-commerce density.

# Color and surfaces

Turquoise owns purchase, selected commerce tools, and key promotional claims. Black leads navigation, text, and secondary commerce actions.

White is the continuous canvas; pale gray separates search, service facts, and sub-navigation; dark overlays appear over video or focused media.

Black leads product, price, and feed captions; gray supports sales, historical price, ratings, and service assurances.

Turquoise means action and marketplace trust, green confirms success, and red is limited to badges or destructive attention.

# Typography

Use SF Pro Display for section emphasis and SF Pro Text for compact social and marketplace metadata.

- display-lg — 28 points — 700 — Major state
- headline — 20 points — 700 — Product or section
- card-title — 15 points — 600 — Price or content title
- body — 12 points — 400 — Dense metadata
- caption — 9 points — 400 — Counts and conditions

- Let media and current price lead.
- Keep commerce metadata compact and aligned.
- Use turquoise only where action or trust must break the neutral field.

Use the platform sans with compact metrics, tabular prices, and clear multilingual glyphs.

The hierarchy must remain legible with Dynamic Type: supporting text may wrap before the primary metric, title, or action loses its role.

# Screen composition

Use a 4 points base, 6–10 points card gaps, 12 points screen gutters, and tightly packed product facts.

Feed and search results use two columns; product detail becomes a single media-first column with a sticky bottom action bar.

Density is intentional. Separation comes from imagery, thin dividers, and section rhythm rather than wide empty zones.

Use product photography and video as depth; keep commerce containers flat and avoid heavy shadow.

Primary iPhone screens keep the documented content grouping and vertical rhythm inside a scroll container when content exceeds the viewport. Bottom-owned actions or navigation reserve the lower safe area rather than covering content.

# Navigation appearance

Use four bottom destinations for Dewu, Shopping, Discover, and Me, with dense top-level topic and category navigation.

This section governs appearance only; destinations and transitions are defined in `ux.md`.

# Components

Use turquoise for Buy now and critical commerce action, white or black for bargaining and utility, and bare icons for social responses.

Media cards combine image, short caption, author, and likes; product detail stacks media, price, title, assurances, attributes, sales, reviews, and related items.

Search is a compact pale field with text, photo, and scanner entry; checkout fields remain grouped and inherit turquoise focus.

Keep authenticity, price history, recent sales, return promise, size guidance, delivery, and order state close to the related decision.

Controls retain at least a 44-point interactive area. Pressed and disabled treatments should stay within the documented palette and hierarchy; no unobserved state styling is prescribed.

# Imagery and icons

Feed media uses tight portrait tiles; product photography fills the upper viewport; variant thumbnails stay in a compact horizontal strip.

Crop feed media consistently and contain product photography without distorting proportions.

When imagery is part of the documented composition, it cannot be omitted while final assets are pending. A temporary asset must preserve its placement, crop, scale, and approximate visual weight.

# States

Keep authenticity, price history, recent sales, return promise, size guidance, delivery, and order state close to the related decision.

Turquoise means action and marketplace trust, green confirms success, and red is limited to badges or destructive attention.

Only the states documented above are specified; other states must preserve the same canvas, hierarchy, and component language without inventing a new visual system.

# iOS adaptation

- Extend the documented canvas through the iPhone safe areas while keeping readable content within appropriate insets.
- Use a vertical `ScrollView` for content that does not fit compact heights; keep documented bottom actions and navigation clear of the home indicator.
- Tabs, cards, social actions, variant thumbnails, and purchase controls remain at least 44 points.
- Preserve media, price, variant, authenticity, and Buy now; reduce secondary social counts and related content first.
- Present the keyboard and system permission UI natively, then return to the same visual context.
- Preserve semantic reading order in VoiceOver and allow text to grow with Dynamic Type.
- Do not infer an unobserved dark or light variant; use the appearance documented by the reference.

# Anti-generic checklist

- Do not replace product media with decorative card framing.
- Do not use turquoise on every navigation label.
- Do not hide price history or service conditions behind vague marketing copy.
- Do not replace the documented canvas and surfaces with a generic grouped background and uniform white cards.
- Do not use an unstyled `TabView`, default blue tint, or arbitrary SF Symbols when they contradict the reference.
- Do not collapse every component to one corner radius or remove compositionally important imagery.

</design-context>
