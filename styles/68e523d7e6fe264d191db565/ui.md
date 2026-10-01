<design-context>
---
version: 1
platform: iOS
name: Lovi-design-analysis
description: "A soft AI wellness companion built from lavender and pink haze, bright white glassy cards, generous rounded geometry, periwinkle gradients, green compatibility scores, and a smiling orb guide. Product decisions feel calm, personal, and gently assisted rather than clinical."
colors:
  primary: "#6670F4"
  on-primary: "#FFFFFF"
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
  display-xl: {fontFamily: SF Pro Rounded, fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.8}
  display-lg: {fontFamily: SF Pro Rounded, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.6}
  display-md: {fontFamily: SF Pro Rounded, fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.3}
  headline: {fontFamily: SF Pro Rounded, fontSize: 20, fontWeight: 700, lineHeight: 1.20, letterSpacing: -0.2}
  card-title: {fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.24, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 400, lineHeight: 1.24, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 13, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 9, fontWeight: 600, lineHeight: 1.18, letterSpacing: 0.1}
  mono: {fontFamily: SF Mono, fontSize: 10, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
rounded:
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  pill: 9999
  full: 9999
spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  section: 40
components:
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [14, 20]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [13, 18]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [10, 14]}
  button-inverse: {backgroundColor: "{colors.inverse-canvas}", textColor: "{colors.inverse-ink}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: [12, 16]}
  insight-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xl}", padding: 16}
  product-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 12}
  score-badge: {backgroundColor: "#E4F7EC", textColor: "#368B60", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [5, 8]}
  scan-control: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.full}", padding: 16}
  assistant-orb: {backgroundColor: "{colors.brand-secure}", textColor: "{colors.inverse-ink}", typography: "{typography.caption}", rounded: "{rounded.full}", padding: 0}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xxl}", padding: [8, 10]}
---

# Overview

Lovi is a gentle AI product companion where soft gradients, white rounded cards, compatibility scores, and a friendly orb turn scanning and ingredient analysis into a reassuring routine.

**Key Characteristics:**
- Lavender-pink atmospheric background.
- White glassy cards with large radii.
- Periwinkle primary actions and scan controls.
- Green compatibility scores and benefits.
- Smiling orb assistant across guidance moments.

# Non-negotiable visual invariants

- The reference consistently shows lavender-pink atmospheric background.
- The reference consistently shows white glassy cards with large radii.
- The reference consistently shows periwinkle primary actions and scan controls.
- The reference consistently shows green compatibility scores and benefits.
- The reference consistently shows smiling orb assistant across guidance moments.

# Color and surfaces

### Brand & Accent

Periwinkle drives primary actions, active navigation, and scan states. Blush pink warms the assistant and atmospheric background without becoming an action color.

### Surface

Use a pale lavender canvas with bright white cards. Secondary lilac fills organize categories, filters, and supporting information.

### Text

Deep violet-gray carries titles and decisions. Muted lavender-gray supports explanations, ingredient notes, and timestamps.

### Semantic

Soft green communicates fit, positive ingredients, and benefits. Warnings should use muted warm tones rather than aggressive red unless safety requires it.

# Typography

### Font Family

Use SF Pro Rounded for large friendly headings and SF Pro Text for product, ingredient, and insight detail.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Onboarding and assistant claim |
| headline | 20 points | 700 | Today, Products, and Insights title |
| card-title | 15 points | 600 | Product and insight title |
| body-lg | 14 points | 400 | Guidance and explanation |
| caption | 9 points | 400 | Score, tag, and navigation label |

### Principles

- Keep headings warm and conversational.
- Make scores prominent but not alarmist.
- Use comfortable line height for AI explanations.

### Note on Font Substitutes

Inter may replace SF Pro Text; use a softly rounded sans only for headings, not dense ingredient data.

# Screen composition

### Spacing System

Use a 4 points base, 12 points card gaps, and 16 points screen gutters.

### Grid & Container

Today and Insights use a single stacked feed. Products can use compact cards or rows; scanning centers one dominant capture control.

### Whitespace Philosophy

Maintain generous breathing room around assistant messages and scores. Product detail may be denser but should remain grouped into rounded sections.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Lavender-pink haze | App background |
| 1 | Bright white card | Products and insights |
| 2 | Soft shadow or blur | Floating navigation and assistant |
| 3 | Focused sheet | Scan result or expanded explanation |

### Decorative Depth

Use gentle gradient haze, subtle translucency, and the shaded orb. Avoid hard shadows and glossy realism on ordinary controls.

# Navigation appearance

Use a floating white bottom dock with rounded corners and a dominant scan action. Active states are periwinkle; labels remain quiet.

# Components

### Buttons

Primary actions are periwinkle pills. Secondary actions are white or pale lilac pills; the scan action may use a large circular form.

### Cards & Containers

Cards use white surfaces, large radii, minimal borders, and grouped title, score, explanation, and suggested action.

### Inputs & Forms

Search and profile inputs use pale rounded fields. Camera permissions, scan framing, and corrections must inherit periwinkle focus and soft geometry.

# Imagery and icons

Use gentle gradient haze, subtle translucency, and the shaded orb. Avoid hard shadows and glossy realism on ordinary controls.

Product imagery is contained on clean card surfaces. The assistant orb floats freely; line-face illustrations stay centered inside soft circular or rounded fields.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Scanning uses a clear central frame and progress cue. Results lead with the product, compatibility score, and a brief explanation before ingredients.

# iOS adaptation

### Touch Targets

Scan, score details, product cards, chips, assistant, and navigation remain at least 44 points.

### Collapsing Strategy

Stack content in one column, scroll chips horizontally, and collapse long ingredient detail behind progressive disclosure.

### Image Behavior

Contain product packaging on white, preserve scan framing, and scale the assistant orb without cropping its face.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't turn the interface into a clinical dashboard.
- Don't use harsh red for ordinary incompatibility.
- Don't overcrowd cards with every ingredient at once.
- Don't mix sharp rectangular controls into rounded flows.
- Don't place the orb over essential product content.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not omit compositionally important imagery while final assets are pending; preserve its footprint with a faithful placeholder.

</design-context>
