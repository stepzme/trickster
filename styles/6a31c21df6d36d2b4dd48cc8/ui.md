<design-context>
---
version: alpha
name: WB-Travel-design-analysis
description: "A bright photo-led travel marketplace combining Wildberries magenta, violet gradient actions, white search sheets, compact discount badges, rounded destination photography, and dense but orderly booking facts. Discovery is colorful and editorial; booking progressively strips back to structured white forms and price review."

colors:
  primary: "#D900D8"
  on-primary: "#FFFFFF"
  primary-start: "#A522FF"
  primary-end: "#E300CD"
  primary-pressed: "#B700B8"
  ink: "#171719"
  ink-muted: "#73737A"
  ink-subtle: "#A7A7AD"
  canvas: "#F6F5F8"
  surface-1: "#FFFFFF"
  surface-2: "#F4F3F6"
  discount: "#ED185B"
  info-blue: "#1BA7DA"
  warning: "#D8922C"
  hairline: "#E7E4E9"
  semantic-success: "#269768"
  semantic-danger: "#D94C58"
  semantic-overlay: "#000000"

typography:
  display-xl: { fontFamily: System Sans, fontSize: 40px, fontWeight: 750, lineHeight: 1.04, letterSpacing: -0.8px }
  display-lg: { fontFamily: System Sans, fontSize: 32px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.5px }
  display-md: { fontFamily: System Sans, fontSize: 25px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.25px }
  headline: { fontFamily: System Sans, fontSize: 20px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0 }
  card-title: { fontFamily: System Sans, fontSize: 15px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: System Sans, fontSize: 17px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }
  body-lg: { fontFamily: System Sans, fontSize: 16px, fontWeight: 400, lineHeight: 1.42, letterSpacing: 0 }
  body: { fontFamily: System Sans, fontSize: 14px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0 }
  body-sm: { fontFamily: System Sans, fontSize: 12px, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0 }
  caption: { fontFamily: System Sans, fontSize: 10px, fontWeight: 450, lineHeight: 1.3, letterSpacing: 0 }
  button: { fontFamily: System Sans, fontSize: 15px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 0 }
  eyebrow: { fontFamily: System Sans, fontSize: 10px, fontWeight: 700, lineHeight: 1.25, letterSpacing: 0.2px }
  mono: { fontFamily: System Mono, fontSize: 12px, fontWeight: 450, lineHeight: 1.35, letterSpacing: 0 }

rounded: { xs: 5px, sm: 9px, md: 13px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: 14px 18px }
  search-panel: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16px }
  destination-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.card-title}", rounded: "{rounded.md}", padding: 0 }
  result-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 12px }
  filter-chip: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.sm}", padding: 8px 12px }
---

## Overview

WB Travel is a visual marketplace: destination and property photography attracts attention, while magenta actions and white structured cards turn discovery into a predictable booking path.

## Colors

### Brand & Accent

Use hot magenta for brand and violet-to-magenta gradients for Search, Continue, and Pay. Red discount badges and blue information labels remain secondary.

### Surface

Use white search and booking surfaces on a very pale gray canvas. Let hero and destination photography provide most background color.

### Text

Use near-black for destination, price, and booking facts; gray for crossed-out prices, rules, metadata, and supporting labels.

### Semantic

Use green for confirmed or refundable conditions, red for discounts and errors, amber for urgency, and magenta for neutral action.

## Typography

### Font Family

Use a modern system sans with tabular figures for fares, dates, discounts, and totals.

### Hierarchy

Use 32–40px hero statements, 20–25px page headings, 14–17px destination and booking facts, and 10–12px card metadata.

### Principles

Keep destination, date, price, and selected option easy to compare. Use bold sparingly for price and section title.

### Note on Font Substitutes

Use SF Pro or Inter with 650–750 display weights and tabular numerals.

## Layout

### Spacing System

Use a 4px base, 10–12px card gaps, 12–16px phone gutters, and 24px between search, recommendations, and booking sections.

### Grid & Container

Home combines hero search, horizontal category rail, and photo carousels. Results use two-column photo grids or single-column fare cards; booking uses one column.

### Whitespace Philosophy

Discovery may be image-dense, but every card should retain clear title and price zones. Forms should become calm and linear.

## Elevation & Depth

Use softly raised white cards, rounded images, sticky bottom actions, and mild shadow where booking layers overlap. Avoid dramatic elevation.

### Decorative Depth

Use playful dimensional category icons and an occasional 3D assistant bubble. Do not extend decorative objects into result or payment screens.

## Shapes

### Border Radius Scale

Use 9px filter chips, 13px result cards, 18px search panels, 24px hero media, and pills for discounts and primary actions.

### Photography & Illustration Geometry

Use immersive hero crops, 4:3 destination cards, and wide hotel-room media. Maintain consistent rounded clipping and keep subjects centered.

## Components

### Buttons

Primary search and payment actions use a wide violet-magenta gradient. Secondary share, filter, and detail actions use white or pale controls. Native controls must inherit the gradient and radius system.

### Pricing Tabs

Tours, Flights, Hotels, Experiences, and Ideas use an icon category rail. Sort, rating, type, meal, baggage, and room choices use compact chips or rows.

### Cards & Containers

Destination cards pair rounded photography with title, category, and price. Fare cards prioritize time, route, duration, baggage, price, and urgency.

### Inputs & Forms

Search forms use stacked pale rows for origin, destination, dates, nights, and guests. Traveler forms keep one person or booking block at a time.

### Status & Build Page

Use discount, cheapest, fastest, remaining-seat, baggage, refundable, selected payment, booking total, and confirmation states close to the relevant value.

### Navigation

Use a category rail from Home and conventional back navigation inside each vertical. Preserve the selected vertical through results and detail.

### Footer

There is no footer. Contacts, rules, agreement, cancellation, support, and payment terms appear inside booking review.

## Do's and Don'ts

### Do

- Let photography drive discovery.
- Keep total price and discount easy to compare.
- Use one predictable search-to-payment sequence.
- Reduce decoration as commitment increases.

### Don't

- Do not bury fees or baggage inside photo cards.
- Do not use gradients for every small filter.
- Do not mix inconsistent image ratios in one grid.
- Do not retain default native blue actions.

## Responsive Behavior

### Breakpoints

Phones show one search or booking flow. Wider screens may pair filters and results, or gallery and booking summary, while maintaining readable card widths.

### Touch Targets

Category icons, search rows, filters, result cards, galleries, room or fare choices, and payment controls require at least 44px targets.

### Collapsing Strategy

Keep destination, dates, selected offer, total, and next action visible. Collapse reviews, maps, rules, organizer detail, and editorial copy.

### Image Behavior

Use `cover` for destinations, hotels, excursions, and hero campaigns; preserve faces and landmarks with centered focal points. Use `contain` for transport or category icons.

## Iteration Guide

Start with Home, category rail, tour search/results/detail, hotel or room choice, flight search/results, traveler details, review, and payment. Add experiences, ideas, articles, maps, reviews, and cancellation afterward.

## Known Gaps

Forty-five catalog flows were reviewed by structure with complete representative scenarios across Home, tour search, hotel booking, flight search, experiences, and ideas. Rare filter combinations and post-payment states were not exhaustively inspected.

</design-context>

Use the design system above for all UI you generate.
