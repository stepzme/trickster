<design-context>
---
version: 1
platform: iOS
name: MyAmeria-design-analysis
description: "A light modular banking interface built around vivid lime green, softly elevated white product panels, pale gray service tiles, compact account lists, and a prominent central QR scanner."
colors: {primary: "#73D04B", on-primary: "#102010", primary-focus: "#59B936", ink: "#151719", ink-muted: "#696D6C", ink-subtle: "#9A9E9D", ink-tertiary: "#C2C6C4", canvas: "#F8F9F8", surface-1: "#FFFFFF", surface-2: "#F0F3F1", surface-3: "#E4E8E5", surface-4: "#D6DCD8", hairline: "#E3E7E4", hairline-strong: "#CBD1CD", hairline-tertiary: "#B1B9B4", inverse-canvas: "#202126", inverse-surface-1: "#303138", inverse-surface-2: "#42434B", inverse-ink: "#FFFFFF", brand-secure: "#322F37", semantic-success: "#73D04B", semantic-overlay: "#17181C"}
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

MyAmeria uses lime brand energy and customizable white modules to bring products, transfers, payments, apps, exchange rates, and QR actions into one calm banking workspace.

**Key Characteristics:** lime green accent, white modules, pale gray service tiles, product tabs, customizable Home, compact line icons, and a central scan action.

# Non-negotiable visual invariants

- The reference consistently shows lime green accent.
- The reference consistently shows white modules.
- The reference consistently shows pale gray service tiles.
- The reference consistently shows product tabs.
- The reference consistently shows customizable Home.
- The reference consistently shows compact line icons.
- Sampled screens consistently use a central scan action.

# Color and surfaces

### Brand & Accent

Lime marks active navigation, product identity, scanning, new badges, and primary payment. Dark olive text keeps bright actions legible.

### Surface

Use almost-white canvas and crisp white modules, with pale cool-gray tiles for services and app shortcuts.

### Text

Near-black leads products and amounts; neutral gray supports account identifiers and exchange or application detail.

### Semantic

Lime communicates positive or active state; specific warnings use amber or red rather than muddying the brand.

# Typography

### Font Family

Use SF Pro Display for product and transaction headings and SF Pro Text for controls, content, and metadata.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30 points | 700 | Hero or state |
| headline | 21 points | 700 | Section title |
| card-title | 16 points | 600 | Primary item |
| body | 13 points | 400 | Detail |
| caption | 10 points | 400 | Metadata |

### Principles

- Lead with the product, amount, destination, or exchange value.
- Keep repeated metadata aligned and visually quieter.
- Reserve high contrast and weight for real decisions.

### Note on Font Substitutes

Use the system sans with stable tabular numbers and compact multilingual labels.

# Screen composition

### Spacing System

Use a 4 points base, 8–12 points internal gaps, and 16 points horizontal screen gutters.

### Grid & Container

Home mixes product tabs, horizontal shortcut rails, and wide modules; Services uses structured lists by type.

### Whitespace Philosophy

Give products and transactions breathing room while keeping large service catalogs compact.

Surface hierarchy observed in the source:

| Level | Treatment | Use |
|---|---|---|
| 0 | Base canvas | Primary context |
| 1 | Grouped surface | Cards and sections |
| 2 | Sticky or floating action | Commitment |
| 3 | Sheet over scrim | Focused choice |

### Decorative Depth

Use broad rounded panels and subtle surface contrast; avoid decorative shadow on every service tile.

# Navigation appearance

Use Home, Services, central QR, History, and Apps, with a glowing lime scan control at center.

# Components

### Buttons

Primary payment uses full-width lime; secondary choices use white or pale gray with simple dark labels.

### Cards & Containers

Product panels combine account type, masked value, and overflow menu; modules group one financial domain.

### Inputs & Forms

Payment and transfer fields use clean white groups, green focus, and precise validation messaging.

# Imagery and icons

Use broad rounded panels and subtle surface contrast; avoid decorative shadow on every service tile.

Campaign cards and app icons stay in bounded rounded frames; financial lists and QR states remain image-independent.

If final imagery is not yet available, any placeholder must preserve the documented scale, placement, crop, and visual weight rather than removing that layer.

# States

Place insufficient funds, technical issue, success, and application state beside the relevant account or action.

# iOS adaptation

### Touch Targets

Primary actions, navigation, cards, and contextual controls remain at least 44 points.

### Collapsing Strategy

Keep account, amount, and primary action first; stack shortcut rails and shorten customization prompts.

### Image Behavior

Keep campaigns and partner app art bounded; never overlay transaction data on promotional imagery.

Apply these rules within current iPhone safe areas and scrolling containers. Keep interactive targets at least 44 points, preserve a logical VoiceOver order, and let Dynamic Type wrap supporting text without flattening the documented hierarchy. Do not infer an unobserved dark or light appearance.

# Anti-generic checklist

- Don't turn all product tiles green or hide amounts inside decorative cards.
- Don't hide status, constraints, or secondary conditions.
- Don't add heavy shadows around every container.
- Do not replace the documented hierarchy with a generic stack of identical white cards or `Form` sections.
- Do not use default blue tint, an unstyled `TabView`, arbitrary SF Symbols, or uniform corner radii when they contradict the recorded tokens and components.
- Do not invent decorative imagery or symbol treatments that are absent from the reference.

</design-context>
