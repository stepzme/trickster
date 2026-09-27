<design-context>
---
version: alpha
name: Avtoelon-uz-design-analysis
description: "A compact automotive marketplace built from bright blue actions, white utility surfaces, black headings, pale blue contact controls, and dense vehicle photography. Home mixes categories, quick-find chips, listings, and dealer content; car detail and selling flows keep price, condition, location, contact, and promotion continuously visible."
colors:
  primary: "#0A84FF"
  on-primary: "#FFFFFF"
  primary-hover: "#0072DF"
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
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px }
  headline: { fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 17px, fontWeight: 500, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.45, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  button-contact: { backgroundColor: "{colors.accent-green}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px }
  listing-card: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.xs}", padding: 0 }
  category-tile: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px }
  price-meter: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 12px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 12px }
---

## Overview

Avtoelon.uz is a direct, locally focused vehicle marketplace. Photography and price dominate; blue drives search and selling, green handles calls, and yellow marks credit or moderation context.

**Key Characteristics:**
- White compact marketplace canvas.
- Blue posting and progression actions.
- Dense photo-led vehicle rows.
- Visible region, year, mileage, fuel, and location.
- Pinned Chat and Call actions on details.

## Colors

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

## Typography

### Font Family

- **SF Pro Display** — screen and form headings.
- **SF Pro Text** — listings, filters, and metadata.
- **SF Mono** — listing identifiers only.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-xl}` | 36px | 700 | Onboarding question |
| `{typography.headline}` | 21px | 700 | Screen and form heading |
| `{typography.card-title}` | 16px | 600 | Price and model |
| `{typography.body}` | 14px | 400 | Specs and inputs |
| `{typography.caption}` | 10px | 400 | Status and views |
| `{typography.button}` | 14px | 600 | Post, chat, and call |

### Principles

- Keep model and price strongest.
- Present specs as short icon-led facts.
- Use blue text for linked actions only.
- Keep seller and moderation copy plain.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

## Layout

### Spacing System

Use a 4px base, 10–12px gutters, 8px grid gaps, and 12px group padding.

### Grid & Container

Home stacks category tiles, quick filters, list rows, dealer media, and recommendations. Details are a single scroll with pinned contact. Posting uses a one-column step sequence.

### Whitespace Philosophy

Keep listings dense and forms open. Use pale cards only to clarify groups, not to decorate every row.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | White canvas | Listings and forms |
| 1 | Pale grouped card | Filters and account |
| 2 | Colored status panel | Price and moderation |
| 3 | Scrim plus modal | Confirmation |

### Decorative Depth

Vehicle photography supplies depth. Controls remain flat with minimal shadow.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Badges and media |
| `{rounded.sm}` | 8px | Buttons and category tiles |
| `{rounded.md}` | 12px | Groups and price meter |
| `{rounded.lg}` | 16px | Dialogs |
| `{rounded.pill}` | full | Sort chips |
| `{rounded.full}` | full | Favorite and add controls |

### Photography & Illustration Geometry

Use honest rectangular vehicle photography with small radius. Category cutouts are functional thumbnails, not a separate illustrative layer.

## Components

### Buttons

Blue progresses posting and management. Green calls the seller. Pale blue carries Telegram consultation or secondary management.

### Pricing Tabs

Sort and filter choices use simple chips or rows. Currency switches stay compact and adjacent to price.

### Cards & Containers

Listings combine image, model, price, year, mileage, fuel, and location. Detail recommendations reuse compact two-column cards. Account cards show moderation and promotion state.

### Inputs & Forms

Search and posting fields are full-width, plain, and step-based. Price uses currency choice and a good-to-high meter with recommended value.

### Status & Build Page

New, official dealer, credit, good price, under review, published, views, phone views, and promotion are explicit badges or rows.

### Navigation

Home, Saved, Post, Chat, and Account form the bottom bar. Post is the central blue action.

### Footer

Details pin Chat and Call. Posting pins Continue; account pins promotion and listing management actions.

## Do's and Don'ts

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

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | 768px+ | Add result columns or split detail |
| Compact | 390–767px | Default dense list |
| Small | <390px | Shorten spec labels and category text |

### Touch Targets

Keep tabs, favorites, search rows, filters, Chat, Call, and posting actions at least 44px.

### Collapsing Strategy

Hide secondary dealer or ad modules before vehicle facts. Keep posting one-column and contact actions full width.

### Image Behavior

Use cover crops in lists and larger contained galleries on details. Preserve aspect ratio and visible vehicle condition.

## Iteration Guide

1. Establish bottom navigation and home listings.
2. Build search, filters, and car details.
3. Add seller chat and price tools.
4. Add posting and moderation states.
5. Add dealers, parts, services, and account.

## Known Gaps

- Tokens were inferred visually from inspected mobile screens.
- All 64 flow names were inventoried; onboarding, home, search, car detail, posting, and profile flows were image-reviewed.
- Video, phone handoff, and motion were not assessed.
- No tablet or desktop captures were present.

</design-context>

Use the design system above for all UI you generate.
