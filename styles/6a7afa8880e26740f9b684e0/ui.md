<design-context>
---
version: 1
platform: iOS
name: Booking-design-analysis
description: "A dense, utility-first travel marketplace organized around a royal-blue header, bright-blue actions, yellow focus frames, white information cards, green deal signals, and destination photography. Search parameters, comparison data, policies, and totals remain explicit through every travel category."
colors:
  primary: "#003B95"
  on-primary: "#FFFFFF"
  primary-soft: "#EAF3FF"
  accent: "#0071C2"
  accent-secondary: "#FEBB02"
  ink: "#1A1A1A"
  ink-muted: "#5D6268"
  ink-subtle: "#9CA1A6"
  canvas: "#FFFFFF"
  surface-1: "#FFFFFF"
  surface-2: "#F2F4F6"
  hairline: "#DDE1E5"
  semantic-success: "#008234"
  semantic-danger: "#D4111E"
  semantic-overlay: "#000000"
typography:
  display-xl: { fontFamily: SF Pro Display, fontSize: 36, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.7 }
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
  eyebrow: { fontFamily: SF Pro Text, fontSize: 11, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0.3 }
  mono: { fontFamily: SF Mono, fontSize: 12, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0 }
rounded: { xs: 8, sm: 12, md: 16, lg: 20, xl: 26, xxl: 32, pill: 9999, full: 9999 }
spacing: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: [14, 18]}
  feature-card: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: 16 }
  action-tile: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-sm}", rounded: "{rounded.md}", padding: 12 }
  grouped-list: { backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: [8, 16]}
  input: { backgroundColor: "{colors.surface-2}", textColor: "{colors.ink}", typography: "{typography.body-lg}", rounded: "{rounded.md}", padding: [14, 16]}
---

# Overview

Booking unifies stays, flights, cars, taxis, and attractions through a shared search-first shell. Dense results remain comparable because dates, party, location, price, policy, and rating are kept close.

**Key Characteristics:**
- Royal-blue product header.
- Yellow-framed search module.
- Photo-led result cards.
- Green deal and cancellation labels.
- Persistent Search, Saved, Bookings, and Account navigation.

# Non-negotiable visual invariants

- The reviewed screens show this treatment: Royal-blue product header.
- The reviewed screens show this treatment: Yellow-framed search module.
- The reviewed screens show this treatment: Photo-led result cards.
- The reviewed screens show this treatment: Green deal and cancellation labels.
- The reviewed screens show this treatment: Persistent Search, Saved, Bookings, and Account navigation.

# Color and surfaces

### Brand & Accent
- **Primary** ({colors.primary}): Header, brand context, and selected service.
- **Accent** ({colors.accent}): Search, select, and linked actions.
- **Secondary Accent** ({colors.accent-secondary}): Search-frame focus and rating emphasis.

### Surface
- **Canvas** ({colors.canvas}): Results, details, and checkout.
- **Surface 1** ({colors.surface-1}): Main cards and sheets.
- **Surface 2** ({colors.surface-2}): Secondary fields and controls.
- **Hairline** ({colors.hairline}): Quiet grouping.

### Text
- **Ink** ({colors.ink}): Headings and primary values.
- **Ink Muted** ({colors.ink-muted}): Supporting detail.
- **Ink Subtle** ({colors.ink-subtle}): Placeholder and inactive state.

### Semantic
- **Success** ({colors.semantic-success}): Completed or positive state.
- **Danger** ({colors.semantic-danger}): Error and destructive state.
- **Overlay** ({colors.semantic-overlay}): Modal focus.

# Typography

### Font Family

- **SF Pro Display** — destination and booking headings.
- **SF Pro Text** — controls, forms, and explanations.
- **SF Mono** — codes and compact numeric data.

### Hierarchy

Use 36pt bold for major statements, 22pt bold for screen headings, 16pt semibold for cards, 14pt regular for detail, and 15pt semibold for primary actions.

### Principles

- Lead with destination, date, and party.
- Keep total price and cancellation visible.
- Use green only for verified benefits.
- Let photography identify place, not state.

### Note on Font Substitutes

Use **Inter** or the platform system sans when SF Pro is unavailable.

# Screen composition

### Spacing System

Use a 4pt base, 16pt edge gutters, 12pt control gaps, and 16pt card padding.

### Grid & Container

The header holds horizontally scrollable travel modes and a stacked search form. Results use one-column photo cards; detail and checkout use dense grouped sections.

### Whitespace Philosophy

Separate major decisions clearly, but keep related comparison data tightly grouped.

# Navigation appearance

Search, Saved, Bookings, and My account anchor the app; category work stays in the Search branch.

# Components

### Buttons

Bright blue commits search, room selection, and final booking. Text links reveal policies, reviews, and detail.

Travel modes, filters, sort, map, and room choices show an explicit selected state without competing with the main CTA.

### Cards & Containers

Result cards combine photo, rating, distance, benefit labels, availability, and total. Booking cards group room, conditions, and included amenities.

### Inputs & Forms

Destination, dates, party, traveler, and payment fields remain stacked, labeled, and editable before commitment.

### Status & Build Page

Expose limited availability, mobile price, Genius benefit, free cancellation, no prepayment, pending, confirmed, and cancelled in text.

### Navigation

Search, Saved, Bookings, and My account anchor the app; category work stays in the Search branch.

Bottom navigation persists in browsing; booking steps replace it with a focused continuation action.

# Imagery and icons

Keep the base flat, raise actionable cards slightly, and reserve overlays for confirmation or interruption.

### Decorative Depth

Use slight shadows on search, result, and confirmation cards. Real photography supplies visual richness.

# States

Expose limited availability, mobile price, Genius benefit, free cancellation, no prepayment, pending, confirmed, and cancelled in text.

# iOS adaptation

### Touch Targets

Keep every row, tab, selector, and primary action at least 44pt.

### Collapsing Strategy

Preserve destination, dates, total, policy, and main action. Collapse secondary facilities and promotions first.

### Image Behavior

Crop around the property or destination while retaining a useful overview. Keep badges and booking data outside the photo.

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

- Keep price terms explicit.
- Preserve search context on results.
- Show policy before commitment.
- Use real travel photography.
- Support map and list comparison.

### Don't

- Don't hide taxes or cancellation.
- Don't replace property photos with illustration.
- Don't overload the blue header with actions.
- Don't bury traveler edits.
- Don't use yellow as a second primary button.

</design-context>
