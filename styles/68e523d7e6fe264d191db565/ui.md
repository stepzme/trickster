<design-context>
---
version: alpha
name: Lovi-design-analysis
description: "A soft AI wellness companion built from lavender and pink haze, bright white glassy cards, generous rounded geometry, periwinkle gradients, green compatibility scores, and a smiling orb guide. Product decisions feel calm, personal, and gently assisted rather than clinical."
colors:
  primary: "#6670F4"
  on-primary: "#FFFFFF"
  primary-hover: "#7A82F7"
  primary-focus: "#545AD8"
  ink: "#27243A"
  ink-muted: "#74718A"
  ink-subtle: "#A7A3B7"
  ink-tertiary: "#CAC6D5"
  canvas: "#F7F3FF"
  surface-1: "#FFFFFF"
  surface-2: "#F0EBFA"
  surface-3: "#E7DFF5"
  surface-4: "#D9CDEB"
  hairline: "#E7E1EF"
  hairline-strong: "#D3CADD"
  hairline-tertiary: "#B9AFC5"
  inverse-canvas: "#27243A"
  inverse-surface-1: "#393550"
  inverse-surface-2: "#4B4763"
  inverse-ink: "#FFFFFF"
  brand-secure: "#F29BB8"
  semantic-success: "#54B985"
  semantic-overlay: "#27243A"
typography:
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 36px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8px}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 24px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3px}
  headline: {fontFamily: SF Pro Rounded, fontSize: 20px, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9px, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1px}
  mono: {fontFamily: SF Mono, fontSize: 10px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  pill: 9999px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 14px 20px}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-primary-hover: {backgroundColor: "{colors.primary-hover}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 13px 18px}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 10px 14px}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 16px}
  insight-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16px}
  product-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12px}
  score-badge: {backgroundColor: "#E4F7EC", textColor: "#368B60", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: 5px 8px}
  scan-control: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16px}
  assistant-orb: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 0}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xxl}", padding: 8px 10px}
---
## Overview

Lovi is a gentle AI product companion where soft gradients, white rounded cards, compatibility scores, and a friendly orb turn scanning and ingredient analysis into a reassuring routine.

**Key Characteristics:**
- Lavender-pink atmospheric background.
- White glassy cards with large radii.
- Periwinkle primary actions and scan controls.
- Green compatibility scores and benefits.
- Smiling orb assistant across guidance moments.

## Colors

### Brand & Accent

Periwinkle drives primary actions, active navigation, and scan states. Blush pink warms the assistant and atmospheric background without becoming an action color.

### Surface

Use a pale lavender canvas with bright white cards. Secondary lilac fills organize categories, filters, and supporting information.

### Text

Deep violet-gray carries titles and decisions. Muted lavender-gray supports explanations, ingredient notes, and timestamps.

### Semantic

Soft green communicates fit, positive ingredients, and benefits. Warnings should use muted warm tones rather than aggressive red unless safety requires it.

## Typography

### Font Family

Use SF Pro Rounded for large friendly headings and SF Pro Text for product, ingredient, and insight detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding and assistant claim |
| headline | 20px | 700 | Today, Products, and Insights title |
| card-title | 15px | 600 | Product and insight title |
| body-lg | 14px | 400 | Guidance and explanation |
| caption | 9px | 400 | Score, tag, and navigation label |

### Principles

- Keep headings warm and conversational.
- Make scores prominent but not alarmist.
- Use comfortable line height for AI explanations.

### Note on Font Substitutes

Inter may replace SF Pro Text; use a softly rounded sans only for headings, not dense ingredient data.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, and 16px screen gutters.

### Grid & Container

Today and Insights use a single stacked feed. Products can use compact cards or rows; scanning centers one dominant capture control.

### Whitespace Philosophy

Maintain generous breathing room around assistant messages and scores. Product detail may be denser but should remain grouped into rounded sections.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Lavender-pink haze | App background |
| 1 | Bright white card | Products and insights |
| 2 | Soft shadow or blur | Floating navigation and assistant |
| 3 | Focused sheet | Scan result or expanded explanation |

### Decorative Depth

Use gentle gradient haze, subtle translucency, and the shaded orb. Avoid hard shadows and glossy realism on ordinary controls.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-xs | 8px | Small tags and fields |
| rounded-sm | 12px | Buttons and compact controls |
| rounded-md | 16px | Product rows |
| rounded-xl | 24px | Insights and recommendation cards |
| rounded-full | full | Scan, score, and assistant controls |

### Photography & Illustration Geometry

Product imagery is contained on clean card surfaces. The assistant orb floats freely; line-face illustrations stay centered inside soft circular or rounded fields.

## Components

### Buttons

Primary actions are periwinkle pills. Secondary actions are white or pale lilac pills; the scan action may use a large circular form.

### Pricing Tabs

Categories and benefit filters use rounded chips. Select one state with a periwinkle fill or border and keep labels concise.

### Cards & Containers

Cards use white surfaces, large radii, minimal borders, and grouped title, score, explanation, and suggested action.

### Inputs & Forms

Search and profile inputs use pale rounded fields. Camera permissions, scan framing, and corrections must inherit periwinkle focus and soft geometry.

### Status & Build Page

Scanning uses a clear central frame and progress cue. Results lead with the product, compatibility score, and a brief explanation before ingredients.

### Navigation

Use a floating white bottom dock with rounded corners and a dominant scan action. Active states are periwinkle; labels remain quiet.

### Footer

No footer; the floating bottom dock owns the safe area and maintains visible breathing room from the screen edge.

## Do's and Don'ts

### Do

- Keep the assistant visually friendly and consistent.
- Explain scores in plain language.
- Use soft depth and generous radius throughout.
- Show product identity before ingredient detail.
- Restyle native camera and form controls to match.

### Don't

- Don't turn the interface into a clinical dashboard.
- Don't use harsh red for ordinary incompatibility.
- Don't overcrowd cards with every ingredient at once.
- Don't mix sharp rectangular controls into rounded flows.
- Don't place the orb over essential product content.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten card padding and dock labels |
| Standard | 375–430px | Default stacked cards and scan frame |
| Wide | 431px+ | Expand card gutters and insight measure |

### Touch Targets

Scan, score details, product cards, chips, assistant, and navigation remain at least 44px.

### Collapsing Strategy

Stack content in one column, scroll chips horizontally, and collapse long ingredient detail behind progressive disclosure.

### Image Behavior

Contain product packaging on white, preserve scan framing, and scale the assistant orb without cropping its face.

## Iteration Guide

Tune scan confidence and score explanation first, then product comparison, insight hierarchy, and assistant placement.

## Known Gaps

- Failed camera recognition and manual product correction were not fully sampled.
- Account and subscription management were not opened in detail.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
