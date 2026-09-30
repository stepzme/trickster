<design-context>
---
version: alpha
name: Omio-design-analysis
description: "A multimodal travel marketplace built from navy headers, coral commitment actions, pale gray form rows, white comparison cards, and pastel blue-pink journey collages. Search remains welcoming and image-led, while transport results, hotel listings, passenger data, extras, and payment use a dense but calm operational grid."
colors:
  primary: "#172F72"
  on-primary: "#FFFFFF"
  primary-hover: "#25458E"
  primary-focus: "#102255"
  accent: "#FF6570"
  accent-soft: "#FFB1B4"
  ink: "#12265B"
  ink-muted: "#5F6674"
  ink-subtle: "#999FAB"
  ink-tertiary: "#C5C9D0"
  canvas: "#F4F5F7"
  surface-1: "#FFFFFF"
  surface-2: "#F0F1F4"
  surface-3: "#E5E8ED"
  surface-4: "#D9DDE4"
  hairline: "#E0E3E8"
  hairline-strong: "#C8CDD5"
  hairline-tertiary: "#ADB4BF"
  inverse-canvas: "#617FB2"
  inverse-surface-1: "#91A8CF"
  inverse-surface-2: "#E6BBC5"
  inverse-ink: "#FFFFFF"
  brand-secure: "#3AA887"
  semantic-success: "#2AA37F"
  semantic-overlay: "#0E1B3F"
typography:
  display-xl: {fontFamily: SF Pro Display, fontSize: 38px, fontWeight: 700, lineHeight: 1.04, letterSpacing: -1.0px}
  display-lg: {fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.6px}
  display-md: {fontFamily: SF Pro Display, fontSize: 25px, fontWeight: 700, lineHeight: 1.12, letterSpacing: -0.4px}
  headline: {fontFamily: SF Pro Display, fontSize: 21px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.2px}
  card-title: {fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 600, lineHeight: 1.32, letterSpacing: 0}
  body-lg: {fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0}
  body: {fontFamily: SF Pro Text, fontSize: 13px, fontWeight: 400, lineHeight: 1.38, letterSpacing: 0}
  body-sm: {fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.2px}
  mono: {fontFamily: SF Mono, fontSize: 11px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
rounded: {xs: 4px, sm: 8px, md: 12px, lg: 16px, xl: 22px, xxl: 28px, pill: 9999px, full: 9999px}
spacing: {xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 20px, xl: 24px, xxl: 32px, section: 44px}
components:
  button-primary: {backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px}
  button-primary-pressed: {backgroundColor: "#E95361", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}"}
  button-secondary: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 12px 16px}
  search-field: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", padding: 12px}
  result-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14px}
  hotel-card: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 0}
  filter-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.pill}", padding: 8px 12px}
  bottom-nav: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px}
---
## Overview

Omio balances a warm illustrated travel invitation with disciplined comparison and checkout surfaces. Navy carries trust and structure, coral marks commitment, and pale neutral rows keep complex travel inputs approachable.

## Colors

### Brand & Accent
- Navy owns journey headers, prices, headings, and selected transport context.
- Coral marks search, selected tabs, active navigation, and promotional emphasis.

### Surface
- White cards sit on a cool pale-gray canvas.
- Search fields and secondary controls use slightly darker gray fills without heavy borders.

### Text
- Navy replaces black for major text; neutral gray supports schedules, conditions, and inactive controls.

### Semantic
- Green indicates savings, cheapest options, included choices, and completed selection. Coral remains transactional rather than error-specific.

## Typography

### Font Family

Use SF Pro Display for journey and destination headings, SF Pro Text for results, hotel detail, passenger forms, and payment.

### Hierarchy

| Token | Size | Weight | Use |
|---|---:|---:|---|
| display-lg | 30px | 700 | Onboarding statement |
| headline | 21px | 700 | Search or booking section |
| card-title | 16px | 700 | Operator, hotel, or destination |
| body | 13px | 400 | Itinerary and conditions |
| caption | 10px | 400 | Navigation and metadata |

### Principles

- Lead with destination, transport mode, time, and total.
- Keep prices bold and close to their product.
- Use coral sparingly inside navy-led information hierarchy.

### Note on Font Substitutes

Use the platform system sans with tabular numerals and reliable international glyph coverage.

## Layout

### Spacing System

Use a 4px base, 12px card gaps, 16px side margins, and 12–16px internal padding.

### Grid & Container

Home stacks a scenic header, Travel or Stays tabs, search fields, offers, and media rails. Results use one-column cards; hotel lists pair a large left image with a dense right information block.

### Whitespace Philosophy

Keep search welcoming and open, then compress results and checkout enough to compare without hiding terms.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Pale gray canvas | Results and forms |
| 1 | White card | Search, itinerary, hotel, payment |
| 2 | Navy sticky header | Current journey |
| 3 | Sheet or processing scene | Focused choice and interruption |

### Decorative Depth

Use soft shadows beneath result and hotel cards. Illustration depth comes from layered pastel scenery rather than pronounced drop shadows.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---:|---|
| rounded-sm | 8px | Fields and cards |
| rounded-md | 12px | Offers and media |
| rounded-lg | 16px | Search composition |
| rounded-full | full | Filters and floating map action |

### Photography & Illustration Geometry

Use wide pastel travel collages for headers and real destination or hotel photography in stable rectangular crops. Keep fares, ratings, and terms outside imagery.

## Components

### Buttons

Coral commits search and purchase; navy handles maps and secondary commitment. Outlined white buttons support modifications and low-emphasis actions.

### Pricing Tabs

Transport modes, nearby dates, Travel or Stays, sort, and filters expose one coral or navy selection with quiet inactive states.

### Cards & Containers

Transport cards align operator, departure, arrival, duration, stops, passenger count, and price. Hotel cards align photo, rating, distance, room, policy, old price, and current total.

### Inputs & Forms

Search fields are stacked pale rows with leading icons. Passenger, baggage, seating, billing, discount, and payment sections expand progressively beneath the selected journey.

### Status & Build Page

Use text labels for recommended, cheapest, fastest, direct, included, free, selected, refundable, and processing. Pair status with the affected value rather than a detached notification.

### Navigation

Search, Explore, Favorites, Bookings, and Profile remain fixed in browsing. Focused booking uses a back action, route summary, and share or modify controls.

### Footer

No footer; bottom navigation, a floating map action, or the current checkout action owns the safe area.

## Do's and Don'ts

### Do

- Keep travel modes directly comparable.
- Preserve route context through booking.
- Separate promotional cards from contractual totals.
- Use illustration to establish destination mood.

### Don't

- Don't bury service fees or optional extras.
- Don't place critical fares inside travel artwork.
- Don't use coral for every interactive element.
- Don't separate hotel photos from rating and price context.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---:|---|
| Compact | 320–374px | Tighten result and hotel metadata |
| Standard | 375–430px | Default mobile composition |
| Wide | 431px+ | Widen cards and media without adding columns |

### Touch Targets

Tabs, fields, date chips, filters, hearts, payment rows, and actions keep at least 44px hit areas.

### Collapsing Strategy

Preserve route, mode, dates, times, duration, stops, price, total, and main action. Collapse recommendation media and secondary explanation first.

### Image Behavior

Keep the illustrated horizon visible in home and onboarding. Crop destination and hotel photography around recognizable place or room context.

## Iteration Guide

Tune search and comparison first, then booking extras, payment transparency, hotel density, Explore, and account utilities.

## Known Gaps

- Tokens were inferred visually from reviewed mobile screens.
- Live purchase completion, change, cancellation, support chat, and map gestures were not executed.
- Tablet and landscape layouts were not represented.

</design-context>

Use the design system above for all UI you generate.
