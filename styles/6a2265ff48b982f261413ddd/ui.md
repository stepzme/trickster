<design-context>
---
version: 1
platform: iOS
name: Avtoelon-uz-design-analysis
description: "A compact automotive marketplace built from bright blue actions, white utility surfaces, black headings, pale blue contact controls, and dense vehicle photography. Home mixes categories, quick-find chips, listings, and dealer content; car detail and selling flows keep price, condition, location, contact, and promotion continuously visible."
colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-soft: "#E4F2FF"
  accent-green: "#19B83F"
  accent-yellow: "#F7D63B"
  accent-red: "#E94A4A"
  ink: "#111111"
  ink-muted: "#767676"
  ink-subtle: "#A7A7A7"
  canvas: "#FFFFFF"
  surface-1: "#F3F4F6"
  surface-2: "#E8EAED"
  hairline: "#DDE0E4"
  semantic-success: "#19B83F"
  semantic-danger: "#E94A4A"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: SF Pro Display, fontSize: 25, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: SF Pro Display, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 22, xxl: 28, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  button-contact: { backgroundColor: "{colors.accent-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 0 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8 }
  price-meter: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12 }
---

# Overview

Avtoelon.uz is a direct, locally focused vehicle marketplace. Photography and price dominate; blue drives search and selling, green handles calls, and yellow marks credit or moderation context.

**Key Characteristics:**
- White compact marketplace canvas.
- Blue posting and progression actions.
- Dense photo-led vehicle rows.
- Visible region, year, mileage, fuel, and location.
- Pinned Chat and Call actions on details.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: White compact marketplace canvas.
- The reviewed screens show this treatment: Blue posting and progression actions.
- The reviewed screens show this treatment: Dense photo-led vehicle rows.
- The reviewed screens show this treatment: Visible region, year, mileage, fuel, and location.
- The reviewed screens show this treatment: Pinned Chat and Call actions on details.

# Color and surfaces

### Brand & Accent
- **Marketplace Blue** ({colors.primary}): Posting, selection, links, and progression.
- **Contact Green** ({colors.accent-green}): Seller calls and positive price range.
- **Yellow** ({colors.accent-yellow}): Credit and moderation badges.
- **Red** ({colors.accent-red}): Reports and new listing signals.

### Surface
- **Canvas** ({colors.canvas}): Listings, details, and forms.
- **Surface 1** ({colors.surface-1}): Categories, filters, and management cards.
- **Surface 2** ({colors.surface-2}): Disabled and nested fields.
- **Hairline** ({colors.hairline}): Row separation.

### Text
- **Ink** ({colors.ink}): Price, model, and actions.
- **Ink Muted** ({colors.ink-muted}): Specs, date, and views.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and disabled copy.

### Semantic
- **Success** ({colors.semantic-success}): Published and good price.
- **Danger** ({colors.semantic-danger}): Report and destructive state.
- **Overlay** ({colors.semantic-overlay}): Dialog focus.

# Typography

### Font Family

- **SF Pro Display** — screen and form headings.
- **SF Pro Text** — listings, filters, and metadata.
- **SF Mono** — listing identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Onboarding question |
| `{typography.headline}` | 21pt | 700 | Screen and form heading |
| `{typography.card-title}` | 16pt | 600 | Price and model |
| `{typography.body}` | 14pt | 400 | Specs and inputs |
| `{typography.caption}` | 10pt | 400 | Status and views |
| `{typography.button}` | 14pt | 600 | Post, chat, and call |

### Principles

- Keep model and price strongest.
- Present specs as short icon-led facts.
- Use blue text for linked actions only.
- Keep seller and moderation copy plain.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Grid & Container

Home stacks category tiles, quick filters, list rows, dealer media, and recommendations. Details are a single scroll with pinned contact. Posting uses a one-column step sequence.

### Whitespace Philosophy

Keep listings dense and forms open. Use pale cards only to clarify groups, not to decorate every row.

# Navigation appearance

Home, Saved, Post, Chat, and Account form the bottom bar. Post is the central blue action.

# Components

### Buttons

Blue progresses posting and management. Green calls the seller. Pale blue carries Telegram consultation or secondary management.

Sort and filter choices use simple chips or rows. Currency switches stay compact and adjacent to price.

### Cards & Containers

Listings combine image, model, price, year, mileage, fuel, and location. Detail recommendations reuse compact two-column cards. Account cards show moderation and promotion state.

### Inputs & Forms

Search and posting fields are full-width, plain, and step-based. Price uses currency choice and a good-to-high meter with recommended value.

### Status & Build Page

New, official dealer, credit, good price, under review, published, views, phone views, and promotion are explicit badges or rows.

### Navigation

Home, Saved, Post, Chat, and Account form the bottom bar. Post is the central blue action.

Details pin Chat and Call. Posting pins Continue; account pins promotion and listing management actions.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listings and forms |
| 1 | Pale grouped card | Filters and account |
| 2 | Colored status panel | Price and moderation |
| 3 | Scrim plus modal | Confirmation |

### Decorative Depth

Vehicle photography supplies depth. Controls remain flat with minimal shadow.

# States

New, official dealer, credit, good price, under review, published, views, phone views, and promotion are explicit badges or rows.

# iOS adaptation

| Wide | 768pt+ | Add result columns or split detail |
| Small | <390pt | Shorten spec labels and category text |

### Touch Targets

Keep tabs, favorites, search rows, filters, Chat, Call, and posting actions at least 44pt.

### Collapsing Strategy

Hide secondary dealer or ad modules before vehicle facts. Keep posting one-column and contact actions full width.

### Image Behavior

Use cover crops in lists and larger contained galleries on details. Preserve aspect ratio and visible vehicle condition.

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

- Lead with price and vehicle facts.
- Preserve local region and currency context.
- Keep Chat and Call persistent.
- Show moderation state clearly.
- Separate dealer, private, parts, and service listings.

### Don't

- Don't hide mileage or location.
- Don't crop vehicle evidence excessively.
- Don't color every card blue.
- Don't merge posting and promotion.
- Don't add decorative illustration to listings.

</design-context>
