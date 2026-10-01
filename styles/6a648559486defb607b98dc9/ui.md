<design-context>
---
version: 1
platform: iOS
name: Bereke-design-analysis
description: "A bright retail-banking interface that combines clean white cards, pale cool-gray canvases, saturated green actions, and electric-blue highlights. Dense money tasks stay legible through large totals, compact shortcuts, and rounded grouped lists, while polished 3D objects distinguish promotional products."
colors:
  primary: "#10A95B"
  on-primary: "#FFFFFF"
  primary-soft: "#EAF8F0"
  accent-blue: "#1268E8"
  accent-cyan: "#DFF5FF"
  ink: "#17191C"
  ink-muted: "#777C84"
  ink-subtle: "#A9ADB3"
  canvas: "#F3F5F6"
  surface-1: "#FFFFFF"
  surface-2: "#E9ECEF"
  hairline: "#E1E4E7"
  semantic-success: "#10A95B"
  semantic-danger: "#E5484D"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.3 }
  headline: { fontFamily: SF Pro Display, fontSize: 22, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
---

# Overview

Bereke presents everyday banking as a sequence of clear white modules over a cool-gray canvas. Green commits actions, blue adds product emphasis, and 3D campaign objects are reserved for discovery.

**Key Characteristics:**
- Bright white grouped surfaces.
- Green transactional actions.
- Blue secondary product accents.
- Large balances with compact shortcuts.
- Glossy 3D promotional objects.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Bright white grouped surfaces.
- The reviewed screens show this treatment: Green transactional actions.
- The reviewed screens show this treatment: Blue secondary product accents.
- The reviewed screens show this treatment: Large balances with compact shortcuts.
- The reviewed screens show this treatment: Glossy 3D promotional objects.

# Color and surfaces

### Brand & Accent
- **Bereke Green** ({colors.primary}): Primary actions, active state, and success.
- **Electric Blue** ({colors.accent-blue}): Product emphasis and selected utilities.
- **Soft Cyan** ({colors.accent-cyan}): Supporting promotional fields.

### Surface
- **Canvas** ({colors.canvas}): Main page background.
- **Surface 1** ({colors.surface-1}): Cards, forms, and grouped lists.
- **Surface 2** ({colors.surface-2}): Secondary controls and inactive fields.
- **Hairline** ({colors.hairline}): Row separation.

### Text
- **Ink** ({colors.ink}): Balances, headings, and primary labels.
- **Ink Muted** ({colors.ink-muted}): Details, dates, and conditions.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and unavailable state.

### Semantic
- **Success** ({colors.semantic-success}): Completed operation and positive state.
- **Danger** ({colors.semantic-danger}): Errors and destructive controls.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family

- **SF Pro Display** — balances and screen headings.
- **SF Pro Text** — transactions, controls, and forms.
- **SF Mono** — card suffixes and codes.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Total balance |
| `{typography.headline}` | 22pt | 700 | Screen heading |
| `{typography.card-title}` | 16pt | 600 | Product or payment row |
| `{typography.body}` | 14pt | 400 | Details and forms |
| `{typography.caption}` | 10pt | 400 | Navigation and metadata |
| `{typography.button}` | 15pt | 600 | Main action |

### Principles

- Put amount and recipient ahead of secondary details.
- Keep row labels short and scannable.
- Use strong weight for totals and section titles only.
- Keep authored campaign lettering inside imagery.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt side gutters, 12pt gaps, and 16pt card padding.

### Grid & Container

Home stacks balance and product cards above shortcuts and activity. Transfers, payments, and services move from compact category grids into one-column forms.

### Whitespace Philosophy

Separate task groups with canvas space; keep information dense within a clearly bounded card.

# Navigation appearance

Persistent bottom navigation anchors the main areas. Deep money tasks switch to a focused top bar and back action.

# Components

### Buttons

Green filled buttons commit transfers, payments, and applications. Secondary actions use white or soft-gray rows; destructive actions remain red.

Products and payment categories use compact tabs or chips with a green active state.

### Cards & Containers

Account cards show balance, card identity, and shortcuts. Grouped lists handle beneficiaries, payment categories, services, and settings.

### Inputs & Forms

Use large single-column amount and recipient fields, contextual numeric keyboards, and a review step before confirmation.

### Status & Build Page

Expose available balance, card state, transfer fee, limit, processing, success, and failure as text plus semantic color.

### Navigation

Persistent bottom navigation anchors the main areas. Deep money tasks switch to a focused top bar and back action.

Keep bottom navigation above the safe area. Focused forms replace it with a full-width continuation action.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Cool-gray canvas | Screen base |
| 1 | White rounded group | Accounts and directories |
| 2 | Colored campaign card | Product discovery |
| 3 | Sheet over dimmed content | Confirmation |

### Decorative Depth

Use soft shadows sparingly. Reserve reflective volume and directional light for promotional 3D objects.

# States

Expose available balance, card state, transfer fee, limit, processing, success, and failure as text plus semantic color.

# iOS adaptation

| Wide | 768pt+ | Add two-column dashboard groups |
| Small | <390pt | Stack shortcuts and shorten labels |

### Touch Targets

Keep navigation, service cells, list rows, chips, and form actions at least 44pt.

### Collapsing Strategy

Stack shortcut groups before reducing type. Keep current balance, primary account, and next action above campaigns.

### Image Behavior

Contain 3D objects with clear copy-safe space. Never crop account identifiers, QR codes, or transaction evidence.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not turn the documented white canvas into a generic card stack; preserve the observed accent, density, imagery, and surface grouping.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Keep balances and fees explicit.
- Use green for committed progress.
- Group dense directories by task.
- Preserve generous separation between modules.
- Restrict 3D art to product discovery.

### Don't

- Don't hide the transfer review step.
- Don't place campaign art behind financial data.
- Don't use blue and green as competing primary actions.
- Don't compress touch rows below comfortable height.
- Don't rely on icon color alone for status.

</design-context>
