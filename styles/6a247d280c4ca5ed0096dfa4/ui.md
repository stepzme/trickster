<design-context>
---
version: 1
platform: iOS
name: Aviasales-design-analysis
description: "A playful travel marketplace built from saturated Aviasales blue, white rounded cards, heavy black headings, orange purchase accents, destination photography, and humorous editorial illustration. Flight search, hotel discovery, experiences, favorites, and profile share a soft stacked-card system with clear price-led actions."
colors:
  primary: "#0B7CFA"
  on-primary: "#FFFFFF"
  primary-soft: "#DCEEFF"
  accent-orange: "#FF6B2C"
  accent-pink: "#FF6F8E"
  accent-green: "#27B35A"
  ink: "#111111"
  ink-muted: "#74777E"
  ink-subtle: "#A8ADB5"
  canvas: "#F4F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#E9EBEF"
  hairline: "#DBDEE3"
  semantic-success: "#27B35A"
  semantic-danger: "#F04444"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: ALS Hauss, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8 }
  display-lg: { fontFamily: ALS Hauss, fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5 }
  display-md: { fontFamily: ALS Hauss, fontSize: 26, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4 }
  headline: { fontFamily: ALS Hauss, fontSize: 21, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2 }
  card-title: { fontFamily: ALS Hauss, fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: ALS Hauss, fontSize: 17, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: ALS Hauss, fontSize: 16, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: ALS Hauss, fontSize: 14, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: ALS Hauss, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: ALS Hauss, fontSize: 10, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: ALS Hauss, fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: ALS Hauss, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  button-purchase: { backgroundColor: "{colors.accent-orange}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  search-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12 }
  result-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14 }
  destination-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: [8, 12]}
---

# Overview

Aviasales balances serious comparison with a playful travel voice. Blue establishes trust and search context, white cards separate dense options, orange closes purchases, and photography plus humorous graphics keep planning aspirational.

**Key Characteristics:**
- Saturated blue search headers.
- White rounded cards on a pale gray feed.
- Price-first flight results and seller choice.
- Destination photography across discovery.
- Expressive character, emoji, and collage moments.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Saturated blue search headers.
- The reviewed screens show this treatment: White rounded cards on a pale gray feed.
- The reviewed screens show this treatment: Price-first flight results and seller choice.
- The reviewed screens show this treatment: Destination photography across discovery.
- The reviewed screens show this treatment: Expressive character, emoji, and collage moments.

# Color and surfaces

### Brand & Accent
- **Aviasales Blue** ({colors.primary}): Search, brand, selected tab, and confirmation atmosphere.
- **Purchase Orange** ({colors.accent-orange}): Buy, book, and hotel search actions.
- **Pink** ({colors.accent-pink}): Editorial promotion.
- **Green** ({colors.accent-green}): Best price and reassurance.

### Surface
- **Canvas** ({colors.canvas}): Feed and results background.
- **Surface 1** ({colors.surface-1}): Search, ticket, hotel, and payment cards.
- **Surface 2** ({colors.surface-2}): Disabled and nested regions.
- **Hairline** ({colors.hairline}): Form and list separation.

### Text
- **Ink** ({colors.ink}): Prices, headings, and core itinerary.
- **Ink Muted** ({colors.ink-muted}): Times, conditions, and supporting metadata.
- **Ink Subtle** ({colors.ink-subtle}): Disabled navigation and hints.

### Semantic
- **Success** ({colors.semantic-success}): Cheapest, confirmed, and protected states.
- **Danger** ({colors.semantic-danger}): Payment failure and alerts.
- **Overlay** ({colors.semantic-overlay}): Sheets and image viewer.

# Typography

### Font Family

- **ALS Hauss** — brand headings, prices, cards, forms, and navigation.
- **SF Mono** — booking or reference codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36pt | 700 | Campaign or onboarding line |
| `{typography.headline}` | 21pt | 700 | Feed and booking section |
| `{typography.card-title}` | 16pt | 600 | Destination, flight, or hotel |
| `{typography.body}` | 14pt | 400 | Itinerary and form copy |
| `{typography.caption}` | 10pt | 400 | Tab and fare metadata |
| `{typography.button}` | 14pt | 600 | Search, buy, and book |

### Principles

- Use bold, conversational headings.
- Make total price and itinerary immediately comparable.
- Keep caveats in readable supporting text.
- Allow playful copy in discovery, not payment details.

### Note on Font Substitutes

Use **Inter** or **Arial** when ALS Hauss is unavailable.

# Screen composition

### Grid & Container

Home is a stacked discovery feed with horizontal destination rails. Search and purchase are one-column forms. Results and offers stack full-width cards with chips above.

### Whitespace Philosophy

Use white cards to isolate decisions; keep blue blocks compact enough that destination imagery remains prominent.

# Navigation appearance

Flights, Hotels, Experiences, Favorites, and Profile form the bottom bar. Search context may remain pinned at the top during long result and discovery feeds.

# Components

### Buttons

Blue covers general progression and selection. Orange closes purchases and hotel search. Secondary actions use pale or white full-width rows.

Filters, transfers, baggage, route type, and dates use compact pills. Selected pills gain a blue border or fill and retain a clear close/reset action.

### Cards & Containers

Flight cards show price, badges, baggage, times, carrier, and transfer count. Destination and experience cards lead with photography. Seller rows end with a Buy button.

### Inputs & Forms

Route search groups origin and destination; dates and travelers stay adjacent. Payment groups total, method, card, and contact fields in separate white cards.

### Status & Build Page

Cheapest, optimal, few seats, transfer, baggage, favorite, ticket issued, and payment failed states remain explicit and contextual.

### Navigation

Flights, Hotels, Experiences, Favorites, and Profile form the bottom bar. Search context may remain pinned at the top during long result and discovery feeds.

Bottom navigation remains persistent in discovery. Purchase and confirmation replace it with the next booking action.

# Imagery and icons

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Feed and results |
| 1 | White rounded card | Search, ticket, and hotel |
| 2 | Colored promo panel | Editorial offer |
| 3 | Photo plus blue atmosphere | Confirmation |

### Decorative Depth

Use photography, collage, and playful cutout art. Ordinary cards rely on surface contrast rather than heavy shadow.

# States

Cheapest, optimal, few seats, transfer, baggage, favorite, ticket issued, and payment failed states remain explicit and contextual.

# iOS adaptation

| Wide | 768pt+ | Add result columns or split itinerary details |
| Small | <390pt | Shorten labels and reduce rail card width |

### Touch Targets

Keep tabs, search fields, chips, favorites, seller rows, Buy, and booking actions at least 44pt.

### Collapsing Strategy

Keep route, date, passenger, and price information before optional badges. Horizontal discovery rails may scroll rather than compress.

### Image Behavior

Use cover crops for destinations and contain important collage subjects. Preserve aspect ratio and keep text outside photography unless authored into a promo asset.

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

- Keep route and total price visible.
- Separate carrier offer from seller choice.
- Use destination photography generously.
- Reserve orange for booking commitment.
- Explain baggage, returns, and transfer conditions.

### Don't

- Don't make playful art compete with payment fields.
- Don't hide fees behind seller selection.
- Don't overload result cards with equal-weight badges.
- Don't crop destination labels into images.
- Don't use blue and orange interchangeably.

</design-context>
