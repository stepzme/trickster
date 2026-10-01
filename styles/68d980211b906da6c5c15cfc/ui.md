<design-context>
---
version: 1
platform: iOS
name: OTP-Bank-design-analysis
description: "A light modular banking system using neon lime brand actions, white cards on pale lavender-gray, black product type, colorful 3D finance objects, and restrained bottom navigation."
colors: {primary: "#B6F52B", on-primary: "#17200E", primary-focus: "#95D30F", ink: "#1A1B1F", ink-muted: "#6B6D73", ink-subtle: "#9DA0A6", ink-tertiary: "#C5C7CC", canvas: "#F7F6FA", surface-1: "#FFFFFF", surface-2: "#EEEFF4", surface-3: "#E2E3E9", surface-4: "#D5D7DE", hairline: "#E4E5EA", hairline-strong: "#CCCED4", hairline-tertiary: "#B3B6BD", inverse-canvas: "#1A1B1F", inverse-surface-1: "#2B2C31", inverse-surface-2: "#3C3D44", inverse-ink: "#FFFFFF", brand-secure: "#173F4D", semantic-success: "#73C63C", semantic-overlay: "#17181C"}
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
  button-primary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-primary-pressed: {backgroundColor: "{colors.primary-focus}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  button-tertiary: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [10, 14]}
  content-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14}
  feature-card: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16}
  text-input: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-nav: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

OTP Bank places cards, exchange rates, transfers, payments, and product applications in bright white modules, using neon lime sparingly and friendly 3D objects to explain breadth.

**Key Characteristics:** pale lavender-gray canvas, white rounded modules, neon lime brand, black type, story rail, 3D product objects, and line-icon navigation.

# Non-negotiable visual invariants

- Sampled screens consistently use pale lavender-gray canvas.
- The reference consistently shows white rounded modules.
- The reference consistently shows neon lime brand.
- Typography consistently uses black type.
- The reference consistently shows story rail.
- The reference consistently shows 3D product objects.
- Navigation consistently uses line-icon navigation.

# Color and surfaces

### Brand & Accent

Neon lime marks brand, active navigation, application, and positive call to action. Deep teal may anchor serious calculations.

### Surface

Use pale lavender-gray for the canvas, white for cards and lists, and slightly tinted panels for transfers or templates.

### Text

Near-black leads balances, products, and payments; gray supports rates, terms, and explanations.

### Semantic

Lime signals brand or positive state, while blue, amber, and red retain conventional informational meanings.

# Typography

### Font Family

Use SF Pro Display for banking and product headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with product, balance, transfer destination, or application value.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the platform sans with tabular currency and sturdy compact Cyrillic.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

My Bank stacks wide product modules; Payments uses a transfer panel plus two-column service tiles; Products is a vertical list.

### Whitespace Philosophy

Keep financial lists compact but give application decisions and results clear breathing room.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use soft surface separation and small 3D objects; promotional stories can be saturated but must stay bounded.

# Navigation appearance

Use five line-icon destinations on the pale canvas, with lime active icon and label.

# Components

### Buttons

Lime drives application and active selection; dark teal or charcoal may anchor calculation and return actions.

### Cards & Containers

White banking cards align product, amount, masked details, or exchange columns; product rows pair copy with an object.

### Inputs & Forms

Transfer and application fields use pale rounded fills, lime focus or continuation, and precise validation.

# Imagery and icons

Use soft surface separation and small 3D objects; promotional stories can be saturated but must stay bounded.

3D objects sit to the right of wide product rows; result symbols center above amount; stories are rounded squares.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Keep application, transfer, fee, product, and chat state beside the affected card or action.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Preserve product, amount, destination, and action; reduce stories before operational banking.

### Image Behavior

Keep 3D objects contained in rows and promotional photography inside stories; protect financial copy.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Preserve the documented appearance.

# Anti-generic checklist

- Don't use 3D decoration behind balances or dense financial forms.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
