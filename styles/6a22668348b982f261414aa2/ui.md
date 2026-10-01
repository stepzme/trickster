<design-context>
---
version: 1
platform: iOS
name: Alatau-City-Bank-design-analysis
description: "A high-density retail-banking interface combining bright Alatau blue, emphatic yellow actions, white rounded modules, and glossy 3D product objects. Five persistent tabs organize an unusually broad service catalogue, with light and dark themes sharing the same modular card hierarchy."
colors:
  primary: "#1679C8"
  on-primary: "#FFFFFF"
  primary-soft: "#EAF5FD"
  accent-yellow: "#FFD900"
  accent-green: "#15B861"
  accent-violet: "#8B55C8"
  ink: "#161819"
  ink-muted: "#74787A"
  ink-subtle: "#A9ADB0"
  canvas: "#F5F6F7"
  surface-1: "#FFFFFF"
  surface-2: "#ECEFF1"
  hairline: "#E1E4E6"
  dark-canvas: "#101010"
  dark-surface: "#202020"
  semantic-success: "#22BA55"
  semantic-danger: "#E6534B"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 800, lineHeight: 1.00, letterSpacing: -1.0 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.6 }
  display-md: { fontFamily: System Sans, fontSize: 26, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.3 }
  headline: { fontFamily: System Sans, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: System Mono, fontSize: 13, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6, sm: 10, md: 14, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.accent-yellow}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 20]}
  product-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  service-grid: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.caption}", rounded: "{rounded.lg}", padding: 16 }
  transfer-form: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 16 }
  receipt-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 20 }
---

# Overview

Alatau City Bank compresses a large financial catalogue into white rounded modules, icon grids, and five stable destinations. Blue carries brand and information; yellow owns high-priority conversion.

**Key Characteristics:**
- Blue promotional hero with white modular foreground.
- Yellow full-width primary actions.
- Rounded service grids and finance cards.
- Glossy 3D product and service objects.
- Stable five-tab navigation.
- Complete dark-theme counterpart.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Blue promotional hero with white modular foreground.
- The reviewed screens show this treatment: Yellow full-width primary actions.
- The reviewed screens show this treatment: Rounded service grids and finance cards.
- The reviewed screens show this treatment: Glossy 3D product and service objects.
- The reviewed screens show this treatment: Stable five-tab navigation.
- The reviewed screens show this treatment: Complete dark-theme counterpart.

# Color and surfaces

### Brand & Accent
- **Alatau Blue** ({colors.primary}): Brand, selected states, and informational icons.
- **Yellow** ({colors.accent-yellow}): Primary conversion and card identity.
- **Green** and **Violet**: Success, deposits, investments, and insurance.

### Surface
- **Canvas** ({colors.canvas}): Light gray app background.
- **Surface 1** ({colors.surface-1}): Cards, sheets, and navigation.
- **Surface 2** ({colors.surface-2}): Input and disabled group background.
- **Dark Canvas / Surface**: Full dark-theme hierarchy.

### Text
- **Ink** ({colors.ink}): Headings, balances, and actions.
- **Ink Muted** ({colors.ink-muted}): Product descriptions and transaction metadata.
- **Ink Subtle** ({colors.ink-subtle}): Placeholders and disabled labels.

### Semantic
- **Success** ({colors.semantic-success}): Completed payment and positive balance.
- **Danger** ({colors.semantic-danger}): Failed or destructive state.
- **Overlay** ({colors.semantic-overlay}): Sheet and identity-capture scrim.

# Typography

### Font Family

- **System Sans** — product, transaction, service, and navigation UI.
- **System Mono** — account fragments, codes, and aligned financial figures.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 40pt | 800 | Promotional rate |
| `{typography.display-md}` | 26pt | 700 | Balance or receipt amount |
| `{typography.headline}` | 21pt | 700 | Screen heading |
| `{typography.card-title}` | 15pt | 600 | Product title |
| `{typography.body}` | 14pt | 400 | Default content |
| `{typography.caption}` | 10pt | 400 | Tabs and service labels |
| `{typography.button}` | 15pt | 600 | Actions |

### Principles

- Emphasize balance, rate, and receipt amount.
- Keep category labels concise under icons.
- Align transaction values to the trailing edge.
- Preserve hierarchy when switching theme.

### Note on Font Substitutes

Use **SF Pro**, **Inter**, or **Roboto** with tabular numerals and Cyrillic support.

# Screen composition

### Grid & Container

Home layers a full-width hero, four-column service grid, and horizontal product cards. Forms and transaction lists use one column; service sheets use four-column icon groups.

### Whitespace Philosophy

Use gray canvas gaps to separate large white modules. Keep whitespace inside financial forms generous even when the catalogue is dense.

# Navigation appearance

Home, My bank, History, Transfers, and Payments live in a rounded bottom bar. Search and notifications remain at the top.

# Components

### Buttons

Primary actions use yellow with dark text. Blue text or outline supports secondary actions. Destructive actions use explicit red labels.

Segmented controls use white or light gray tracks with the selected option raised. History filters use compact pills.

### Cards & Containers

Product cards combine title, summary, and 3D object. Account cards group balance and quick actions. Receipt cards place status and amount above details.

### Inputs & Forms

Transfer forms stack source, recipient, amount, and message. Preset chips assist common amounts; keyboard-safe actions remain pinned low.

### Status & Build Page

Success uses a large green check and receipt metadata. Analytics uses colored bars plus numeric labels. Disabled actions fade without losing form structure.

### Navigation

Home, My bank, History, Transfers, and Payments live in a rounded bottom bar. Search and notifications remain at the top.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Gray canvas | Screen base |
| 1 | White rounded module | Lists and services |
| 2 | Floating bottom sheet | Product or menu choice |
| 3 | Saturated hero or card | Promotion and identity |

### Decorative Depth

Use soft shadows, bright gradients, and modeled 3D objects. Dark mode replaces shadows with surface contrast.

# States

Success uses a large green check and receipt metadata. Analytics uses colored bars plus numeric labels. Disabled actions fade without losing form structure.

# iOS adaptation

| Wide | 768pt+ | Center modules and widen service grid |
| Small | <390pt | Reduce service grid to three columns |

### Touch Targets

Maintain 44pt for service icons, segmented controls, list rows, and bottom navigation.

### Collapsing Strategy

Reduce icon-grid columns before shrinking labels. Keep finance forms single-column and actions full width. Horizontal product cards may scroll.

### Image Behavior

Contain product objects and card renders. Campaign heroes may crop decorative background but must preserve the rate and primary object.

On iPhone, respect top and bottom safe areas, use scrolling for content that does not fit, keep interactive targets at least 44 points, and preserve the visual reading order for VoiceOver. At larger Dynamic Type sizes, allow supporting text to wrap without collapsing the dominant hierarchy. Use native sheets and permission transitions while explicitly styling app-owned surfaces to match the reference.

# Anti-generic checklist

- Do not substitute the documented accent hierarchy with default iOS blue.
- Do not collapse distinct surfaces into a uniform stack of generic white cards.
- Do not use an unstyled `TabView`, `Form`, or arbitrary SF Symbols when they contradict the documented navigation and component language.
- Do not flatten the documented typography into one body-text scale.
- Do not remove compositionally important photography or illustration while assets are pending.
- Do not apply one corner radius to every control and surface.

Source-specific guardrails retained from the review:

### Do

- Use yellow only for decisive actions or product identity.
- Keep the five destinations stable.
- Pair icons with readable labels.
- Show limits and commission before payment.
- Mirror the hierarchy in dark theme.

### Don't

- Don't hide services behind unlabeled icons.
- Don't mix success green with conversion yellow.
- Don't crop card identity or account fragments.
- Don't place dark cards on an isolated light canvas.
- Don't remove receipt actions.

# Known gaps

- Exact brand tokens and font names were inferred visually.
- The 152-flow inventory was complete; representative leaf flows were inspected.
- Motion in promotional and identity flows was not assessed.

</design-context>
