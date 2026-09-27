<design-context>
---
version: alpha
name: For-Profi-design-analysis
description: "A compact professional job marketplace with a very light lavender canvas, white rounded order cards, black text-heavy listings, restrained teal and yellow status accents, horizontal story tiles, and a five-tab task model for orders, chats, balance, profile, and support."
colors: { primary: "#17171B", on-primary: "#FFFFFF", primary-hover: "#303036", primary-soft: "#F0EFF7", accent: "#25B993", accent-yellow: "#F6B91E", ink: "#18191D", ink-muted: "#777B83", ink-subtle: "#AFB2B8", canvas: "#F8F7FF", surface-1: "#FFFFFF", surface-2: "#F0EFF7", hairline: "#E4E3EA", semantic-success: "#25B993", semantic-warning: "#F6B91E", semantic-danger: "#D85762", semantic-overlay: "#000000" }
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7px }
  display-lg: { fontFamily: SF Pro Display, fontSize: 30px, fontWeight: 700, lineHeight: 1.10, letterSpacing: -0.5px }
  display-md: { fontFamily: SF Pro Display, fontSize: 26px, fontWeight: 700, lineHeight: 1.15, letterSpacing: -0.3px }
  headline: { fontFamily: SF Pro Display, fontSize: 22px, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0 }
  card-title: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 650, lineHeight: 1.25, letterSpacing: 0 }
  subhead: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0 }
  body-lg: { fontFamily: SF Pro Text, fontSize: 16px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body: { fontFamily: SF Pro Text, fontSize: 14px, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0 }
  body-sm: { fontFamily: SF Pro Text, fontSize: 12px, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
  caption: { fontFamily: SF Pro Text, fontSize: 10px, fontWeight: 500, lineHeight: 1.20, letterSpacing: 0 }
  button: { fontFamily: SF Pro Text, fontSize: 15px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0 }
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11px, fontWeight: 650, lineHeight: 1.20, letterSpacing: 0.2px }
  mono: { fontFamily: SF Mono, fontSize: 12px, fontWeight: 500, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 6px, sm: 10px, md: 14px, lg: 18px, xl: 24px, xxl: 30px, pill: 9999px, full: 9999px }
spacing: { xxs: 4px, xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, xxl: 48px, section: 64px }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: 14px 18px }
  order-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 14px }
  story-tile: { backgroundColor: "#BFC5E8", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.md}", padding: 10px }
  input: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 11px 13px }
  top-nav: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.xs}", height: 52px }
  footer: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: 8px 10px }
---

## Overview

For Profi is a text-first jobs marketplace that favors fast scanning, explicit budgets, and direct response over visual promotion.

## Colors

### Brand & Accent
Use near-black for primary response, teal for positive status, and yellow for rating or balance emphasis.

### Surface
Use a pale lavender canvas, white order cards, and slightly darker neutral controls.

### Text
Use black for job and price, gray for metadata, and pale gray for inactive state.

### Semantic
Use teal for online or discount, yellow for attention, and red for complaint or deletion.

## Typography

### Font Family
Use SF Pro Display for sections and SF Pro Text for listings, chat, and profile.

### Hierarchy
Use 26–36px for major headings, 16px semibold for order titles, 14px body, and 10–12px metadata.

### Principles
Keep title, budget, scope, timing, and location scannable in every order card.

### Note on Font Substitutes
Use the platform sans or Inter with tabular currency.

## Layout

### Spacing System
Use a 4px base, 8px card gaps, 14px card padding, and 16px gutters.

### Grid & Container
Home stacks list-map toggle, stories, search, filters, dense orders, and a five-tab footer.

### Whitespace Philosophy
Prefer compact informative cards with clear separation over large decorative whitespace.

## Elevation & Depth
Use white cards and sheets with nearly no shadow.

### Decorative Depth
Story tiles and portfolio images are secondary; job text drives hierarchy.

## Shapes

### Border Radius Scale
Use 10px for search, 14px for cards, 18px for sheets, and full circles for avatars.

### Photography & Illustration Geometry
Use portfolio images and avatars as real content; keep helper icons simple and monochrome.

## Components

### Buttons
Use wide black response actions; secondary filters, maps, and status controls stay white or outlined.

### Pricing Tabs
Use segmented List or Map and compact chips for filters, order state, and chat status.

### Cards & Containers
Use order cards, story tiles, similar-order rails, response form, chat rows, balance and profile groups.

### Inputs & Forms
Search, price proposal, question, profile services, addresses, and portfolio forms use explicit labels.

### Status & Build Page
Show new, high chance, client researching price, responded, in work, complete, archived, and balance states.

### Navigation
Orders, Chats, Balance, Profile, and Support remain in the bottom bar.

### Footer
The white footer keeps the active destination dark and shows unread support or chat badges.

## Do's and Don'ts

### Do
- Keep budget and scope visible.
- Preserve list and map context.
- Show response cost before submission.

### Don't
- Don't truncate the job title before budget.
- Don't hide client status.
- Don't make stories compete with listings.

## Responsive Behavior

### Breakpoints
Use one list column on phones, list plus map on tablet, and persistent filters above 1024px.

### Touch Targets
Keep filters, orders, response, chats, balance, and tabs at least 44px.

### Collapsing Strategy
Preserve search, filters, job, budget, response, and navigation; move stories below current listings.

### Image Behavior
Contain portfolio images and crop avatars to circles; avoid decorative backgrounds.

## Iteration Guide
1. Build order list, search, filter, and map.
2. Add response, chat, and balance.
3. Add profile, portfolio, statistics, and support.

## Known Gaps
- Tokens were inferred visually from inspected mobile screens.
- All 35 flows were inventoried; Homepage, Job description, and Response were image-reviewed.
- Map, portfolio, and payment edge cases were not deeply sampled.
- No expressive illustration language appeared in reviewed task screens.

</design-context>

Use the design system above for all UI you generate.
