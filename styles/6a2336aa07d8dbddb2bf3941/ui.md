<design-context>
---
version: 1
platform: iOS
name: VTB-design-analysis
description: "A feature-rich banking interface built from vivid blue account headers, white rounded sheets, bold black monetary typography, pastel payment icons, multicolor gradients, and polished 3D product metaphors. It is broad, energetic, and conversion-oriented."

colors:
  primary: "#1677FF"
  on-primary: "#FFFFFF"
  primary-pressed: "#0E5FD6"
  ink: "#181A1E"
  ink-muted: "#6E727A"
  ink-subtle: "#A5A9B0"
  canvas: "#F4F6FA"
  surface-1: "#FFFFFF"
  surface-2: "#EEF3FB"
  accent-violet: "#B14CEB"
  accent-cyan: "#35CDE8"
  hairline: "#E0E4EA"
  semantic-success: "#22A768"
  semantic-warning: "#F0A43A"
  semantic-danger: "#E24E5B"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8 }
  display-lg: { fontFamily: System Sans, fontSize: 32, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5 }
  display-md: { fontFamily: System Sans, fontSize: 25, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.2 }
  headline: { fontFamily: System Sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 16, fontWeight: 650, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.3 }
  mono: { fontFamily: System Mono, fontSize: 12, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 30, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  account-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  product-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  bottom-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.xl}", height: 60 }
---

# Overview

VTB layers white financial sheets over a vivid blue account header and uses polished 3D product art for discovery. Pastel category icons and clear monetary hierarchy tame a very broad feature set.

# Non-negotiable visual invariants

- The reviewed screens use this composition: A feature-rich banking interface built from vivid blue account headers, white rounded sheets, bold black monetary typography, pastel payment icons, multicolor gradients.
- The dominant canvas token is #F4F6FA and the primary accent token is #1677FF.
- The recorded display style is 40 points while the body style is 14 points.
- Navigation uses five bottom destinations for Home, Payments, Products, History, and Chat.
- The reviewed screens use this hierarchy: It is broad, energetic, and conversion-oriented.

# Color and surfaces

### Brand & Accent

Bright blue owns primary action, balance context, links, and navigation. Violet, cyan, magenta, and yellow distinguish promotions and product categories.

### Surface

Use pale blue-gray canvas, white cards and sheets, and saturated blue for the main account header or navigation dock.

### Text

Near-black carries balances and titles; gray carries product labels and terms. White appears on blue and dark gradients.

### Semantic

Green and red show financial result, amber warns, and blue remains brand action.

# Typography

### Font Family

Use a modern system sans with tabular figures for balances, rates, and payments.

### Principles

Keep amount, product, rate, and action distinct. Align numeric values and avoid bolding every service row.

### Note on Font Substitutes

Use Inter or SF Pro with tabular figures and strong 700–750 display weights.

# Screen composition

### Grid & Container

Home stacks account header, quick-action grid, promotions, payments sheet, and product groups. Details use one wide account card and lists.

### Whitespace Philosophy

Give totals and primary actions open space. Dense payment categories should stay aligned in grids or lists.

# Navigation appearance

Use five bottom destinations for Home, Payments, Products, History, and Chat. Keep product-specific settings local.

# Components

### Buttons

Primary open, transfer, and support actions are blue rectangles or pills. Native controls must inherit blue focus and the rounded banking system.

Product types, payment modes, and rate options use compact segments, chips, or cards with blue selected state.

### Cards & Containers

Account cards foreground balance and actions. Product tiles pair one 3D metaphor with a short category title.

### Inputs & Forms

Transfer and application fields use white or pale fills with clear source, recipient, amount, fee, and validation.

### Status & Build Page

Privilege, card state, transfer status, savings goal, rate conditions, application, unread chat, and history appear in context.

### Navigation

Use five bottom destinations for Home, Payments, Products, History, and Chat. Keep product-specific settings local.

# Imagery and icons

Use rounded sheet overlap, soft card shadow, and layered gradient headers. Keep operation rows flat.

### Decorative Depth

Use glossy 3D product metaphors, spectral gradients, and subtle particles inside promotions. Avoid such decoration in transfers or confirmations.

# States

Privilege, card state, transfer status, savings goal, rate conditions, application, unread chat, and history appear in context.

# iOS adaptation

Phones use one financial flow at a time. Wider screens may place account list, product detail, and history in adjacent panes.

### Touch Targets

Accounts, quick actions, payment categories, product tiles, navigation, and confirmation controls require at least 44pt targets.

### Collapsing Strategy

Keep balance, source, recipient, amount, fee, and next action visible. Collapse terms and secondary benefits into detail sections.

### Image Behavior

Use `contain` for 3D product metaphors, cards, and logos; use `cover` only for editorial campaign photography.

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

- Lead with balance and next actions.
- Keep fees and reversibility visible.
- Use product art only for discovery.
- Align financial values.

### Don't

- Do not decorate transactional confirmation.
- Do not use blue for profit or loss.
- Do not crowd the home header.
- Do not expose default native accents.

# Known gaps

The catalog contains 245 flows across core banking and product management. Representative complete scenarios were inspected; rare product branches and some video-only transition states are less visually verified.

</design-context>
