<design-context>
---
version: alpha
name: Aviasales-design-analysis
description: "A playful travel marketplace built from saturated Aviasales blue, white rounded cards, heavy black headings, orange purchase accents, destination photography, and humorous editorial illustration. Flight search, hotel discovery, experiences, favorites, and profile share a soft stacked-card system with clear price-led actions."
colors:
  primary: "#0B7CFA"
  on-primary: "#FFFFFF"
  primary-hover: "#006DDF"
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
  display-xl: { fontFamily: ALS Hauss, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.8px }
  display-lg: { fontFamily: ALS Hauss, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: ALS Hauss, fontSize: 26px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: ALS Hauss, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: ALS Hauss, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: ALS Hauss, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: ALS Hauss, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: ALS Hauss, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: ALS Hauss, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: ALS Hauss, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: ALS Hauss, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: ALS Hauss, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 26px, xxl: 32px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  button-purchase: { backgroundColor: "{colors.accent-orange}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  search-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  result-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  destination-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 0 }
  filter-chip: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px }
  top-nav: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 56px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Aviasales balances serious comparison with a playful travel voice. Blue establishes trust and search context, white cards separate dense options, orange closes purchases, and photography plus humorous graphics keep planning aspirational.

**Key Characteristics:**
- Saturated blue search headers.
- White rounded cards on a pale gray feed.
- Price-first flight results and seller choice.
- Destination photography across discovery.
- Expressive character, emoji, and collage moments.

## Colors

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

## Typography

### Font Family

- **ALS Hauss** — brand headings, prices, cards, forms, and navigation.
- **SF Mono** — booking or reference codes only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Campaign or onboarding line |
| `{typography.headline}` | 21px | 700 | Feed and booking section |
| `{typography.card-title}` | 16px | 600 | Destination, flight, or hotel |
| `{typography.body}` | 14px | 400 | Itinerary and form copy |
| `{typography.caption}` | 10px | 400 | Tab and fare metadata |
| `{typography.button}` | 14px | 600 | Search, buy, and book |

### Principles

- Use bold, conversational headings.
- Make total price and itinerary immediately comparable.
- Keep caveats in readable supporting text.
- Allow playful copy in discovery, not payment details.

### Note on Font Substitutes

Use **Inter** or **Arial** when ALS Hauss is unavailable.

## Layout

### Spacing System

Use a 4px base, 12px screen gutters, 12px card gaps, and 14–16px card padding.

### Grid & Container

Home is a stacked discovery feed with horizontal destination rails. Search and purchase are one-column forms. Results and offers stack full-width cards with chips above.

### Whitespace Philosophy

Use white cards to isolate decisions; keep blue blocks compact enough that destination imagery remains prominent.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Feed and results |
| 1 | White rounded card | Search, ticket, and hotel |
| 2 | Colored promo panel | Editorial offer |
| 3 | Photo plus blue atmosphere | Confirmation |

### Decorative Depth

Use photography, collage, and playful cutout art. Ordinary cards rely on surface contrast rather than heavy shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 8px | Compact fields and media |
| `{rounded.sm}` | 12px | Destination imagery |
| `{rounded.md}` | 16px | Search and result cards |
| `{rounded.lg}` | 20px | Promo and confirmation panels |
| `{rounded.pill}` | full | Filters and route chips |
| `{rounded.full}` | full | Avatars and circular actions |

### Photography & Illustration Geometry

Destination photos use rounded landscape crops. Character art appears as clean cutouts; promotional collages may overlap landmarks and objects inside a bounded card.

## Components

### Buttons

Blue covers general progression and selection. Orange closes purchases and hotel search. Secondary actions use pale or white full-width rows.

### Pricing Tabs

Filters, transfers, baggage, route type, and dates use compact pills. Selected pills gain a blue border or fill and retain a clear close/reset action.

### Cards & Containers

Flight cards show price, badges, baggage, times, carrier, and transfer count. Destination and experience cards lead with photography. Seller rows end with a Buy button.

### Inputs & Forms

Route search groups origin and destination; dates and travelers stay adjacent. Payment groups total, method, card, and contact fields in separate white cards.

### Status & Build Page

Cheapest, optimal, few seats, transfer, baggage, favorite, ticket issued, and payment failed states remain explicit and contextual.

### Navigation

Flights, Hotels, Experiences, Favorites, and Profile form the bottom bar. Search context may remain pinned at the top during long result and discovery feeds.

### Footer

Bottom navigation remains persistent in discovery. Purchase and confirmation replace it with the next booking action.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add result columns or split itinerary details |
| Compact | 390–767px | Default stacked cards and horizontal rails |
| Small | <390px | Shorten labels and reduce rail card width |

### Touch Targets

Keep tabs, search fields, chips, favorites, seller rows, Buy, and booking actions at least 44px.

### Collapsing Strategy

Keep route, date, passenger, and price information before optional badges. Horizontal discovery rails may scroll rather than compress.

### Image Behavior

Use cover crops for destinations and contain important collage subjects. Preserve aspect ratio and keep text outside photography unless authored into a promo asset.

## Iteration Guide

1. Establish search header and bottom navigation.
2. Build result and ticket-detail cards.
3. Add purchase and payment.
4. Add hotels, experiences, favorites, and profile.
5. Layer promotional art and playful empty states last.

## Known Gaps

- Tokens were inferred visually from the inspected mobile screens.
- All 90 flow names were inventoried; onboarding, home, ticket search, ticket detail, purchase, and hotels were image-reviewed.
- Video, audio-guide playback, map gestures, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
