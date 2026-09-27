<design-context>
---
version: alpha
name: Poizon-design-analysis
description: "A dense social-commerce interface with a white canvas, black utility typography, bright turquoise purchase actions, media-heavy two-column feeds, compact product metadata, and persistent marketplace navigation."
colors: {primary: "#12C8C2", on-primary: "#FFFFFF", primary-hover: "#31D5CF", primary-focus: "#0AA29E", ink: "#111214", ink-muted: "#686B70", ink-subtle: "#9A9DA3", ink-tertiary: "#C5C8CC", canvas: "#FFFFFF", surface-1: "#F6F7F8", surface-2: "#EDF0F2", surface-3: "#E1E5E8", surface-4: "#D5DADF", hairline: "#E4E7E9", hairline-strong: "#CBD1D5", hairline-tertiary: "#B4BBC0", inverse-canvas: "#121416", inverse-surface-1: "#24272A", inverse-surface-2: "#363A3E", inverse-ink: "#FFFFFF", brand-secure: "#08AAA5", semantic-success: "#2CB879", semantic-overlay: "#111315"}
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 34px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.7px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 28px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.4px}
  display-md: {fontFamily: SF Pro Display, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Display, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.34, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.28, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.22, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 2px, sm: 6px, md: 10px, lg: 14px, xl: 20px, xxl: 26px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 40px}
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.xs}"}
  button-secondary: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.xs}", padding: 12px 16px}
  button-tertiary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 9px 12px}
  product-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 8px}
  media-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 6px}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 10px 12px}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 3px 7px}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 8px}
---
## Overview

Poizon is a dense hybrid of social feed and marketplace. White carries the interface, imagery dominates both feed and product surfaces, and a bright turquoise purchase action cuts through otherwise black and gray utility chrome.

**Key Characteristics:** two-column media feed, dense search and category rails, large product media, compact price and assurance metadata, turquoise Buy now, social likes and follows, and four destinations.

## Colors

### Brand & Accent

Turquoise owns purchase, selected commerce tools, and key promotional claims. Black leads navigation, text, and secondary commerce actions.

### Surface

White is the continuous canvas; pale gray separates search, service facts, and sub-navigation; dark overlays appear over video or focused media.

### Text

Black leads product, price, and feed captions; gray supports sales, historical price, ratings, and service assurances.

### Semantic

Turquoise means action and marketplace trust, green confirms success, and red is limited to badges or destructive attention.

## Typography

### Font Family

Use SF Pro Display for section emphasis and SF Pro Text for compact social and marketplace metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 28px | 700 | Major state |
| headline | 20px | 700 | Product or section |
| card-title | 15px | 600 | Price or content title |
| body | 12px | 400 | Dense metadata |
| caption | 9px | 400 | Counts and conditions |

### Principles

- Let media and current price lead.
- Keep commerce metadata compact and aligned.
- Use turquoise only where action or trust must break the neutral field.

### Note on Font Substitutes

Use the platform sans with compact metrics, tabular prices, and clear multilingual glyphs.

## Layout

### Spacing System

Use a 4px base, 6–10px card gaps, 12px screen gutters, and tightly packed product facts.

### Grid & Container

Feed and search results use two columns; product detail becomes a single media-first column with a sticky bottom action bar.

### Whitespace Philosophy

Density is intentional. Separation comes from imagery, thin dividers, and section rhythm rather than wide empty zones.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Feed and marketplace |
| 1 | Pale grouped strip | Search and service facts |
| 2 | Sticky turquoise action | Purchase commitment |
| 3 | Dark media overlay | Video and focused content |

### Decorative Depth

Use product photography and video as depth; keep commerce containers flat and avoid heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 2px | Buy action and media edge |
| rounded-sm | 6px | Search and tags |
| rounded-md | 10px | Compact panel |
| rounded-lg | 14px | Focused overlay |
| rounded-full | full | Avatar and small icon action |

### Photography & Illustration Geometry

Feed media uses tight portrait tiles; product photography fills the upper viewport; variant thumbnails stay in a compact horizontal strip.

## Components

### Buttons

Use turquoise for Buy now and critical commerce action, white or black for bargaining and utility, and bare icons for social responses.

### Pricing Tabs

Feed topics, product subsections, and filters use compact horizontal text tabs with underlined or turquoise selection.

### Cards & Containers

Media cards combine image, short caption, author, and likes; product detail stacks media, price, title, assurances, attributes, sales, reviews, and related items.

### Inputs & Forms

Search is a compact pale field with text, photo, and scanner entry; checkout fields remain grouped and inherit turquoise focus.

### Status & Build Page

Keep authenticity, price history, recent sales, return promise, size guidance, delivery, and order state close to the related decision.

### Navigation

Use four bottom destinations for Dewu, Shopping, Discover, and Me, with dense top-level topic and category navigation.

### Footer

No footer; bottom navigation or sticky purchase action owns the safe area.

## Do's and Don'ts

### Do

- Preserve the media-first social-commerce density.
- Keep authenticity and purchase assurances visible.
- Style native controls to inherit this visual system.

### Don't

- Don't replace product media with decorative card framing.
- Don't use turquoise on every navigation label.
- Don't hide price history or service conditions behind vague marketing copy.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten metadata and tabs |
| Standard | 375–430px | Default composition |
| Wide | 431px+ | Expand media and gutters |

### Touch Targets

Tabs, cards, social actions, variant thumbnails, and purchase controls remain at least 44px.

### Collapsing Strategy

Preserve media, price, variant, authenticity, and Buy now; reduce secondary social counts and related content first.

### Image Behavior

Crop feed media consistently and contain product photography without distorting proportions.

## Iteration Guide

Tune social feed and Shopping first, then product detail, authenticity, checkout, profile, and seller tools.

## Known Gaps

- Some localized labels were machine-translated in the captured screens.
- Seller and post-purchase recovery were only partially reviewed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
