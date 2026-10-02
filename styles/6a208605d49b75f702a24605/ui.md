<design-context>
---
version: 1
platform: iOS
name: OneTwoTrip-design-analysis
description: "A travel-commerce interface that moves from full-bleed destination photography into precise white booking surfaces, black transactional headers, violet actions, yellow logo chips, and dense comparison cards."
colors:
  primary: "#6948F5"
  on-primary: "#FFFFFF"
  primary-focus: "#5434D6"
  primary-soft: "#EEE9FF"
  brand-yellow: "#FFDC18"
  route-orange: "#FF7A1A"
  promo-green: "#22E883"
  ink: "#17181C"
  ink-muted: "#666970"
  ink-subtle: "#989BA2"
  ink-tertiary: "#C5C6CC"
  canvas: "#FFFFFF"
  surface-1: "#F5F5F7"
  surface-2: "#ECECF0"
  surface-3: "#E0E0E5"
  hairline: "#E3E3E7"
  inverse-canvas: "#17171B"
  inverse-surface-1: "#2A2A30"
  inverse-surface-2: "#3B3B43"
  inverse-ink: "#FFFFFF"
  semantic-success: "#35B96F"
  semantic-warning: "#FFCF25"
  semantic-danger: "#E34D4A"
  semantic-overlay: "#000000"
typography:
  display-xl: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 700, lineHeight: 1.06, letterSpacing: 0}
  display-lg: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 1.10, letterSpacing: 0}
  display-md: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 1.14, letterSpacing: 0}
  headline: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 1.20, letterSpacing: 0}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 1.24, letterSpacing: 0}
  card-title: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 600, lineHeight: 1.25, letterSpacing: 0}
  subhead: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 1.30, letterSpacing: 0}
  body-lg: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 1.40, letterSpacing: 0}
  body: {fontFamily: "SF Pro Text", fontSize: 13, fontWeight: 400, lineHeight: 1.36, letterSpacing: 0}
  body-sm: {fontFamily: "SF Pro Text", fontSize: 11, fontWeight: 400, lineHeight: 1.30, letterSpacing: 0}
  caption: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 400, lineHeight: 1.25, letterSpacing: 0}
  button: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  eyebrow: {fontFamily: "SF Pro Text", fontSize: 10, fontWeight: 600, lineHeight: 1.20, letterSpacing: 0}
  mono: {fontFamily: "SF Mono", fontSize: 11, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0}
spacing: {xxs: 4, xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32, section: 40}
rounded: {xs: 6, sm: 10, md: 14, lg: 20, xl: 26, sheet: 26, pill: 9999, full: 9999}
components:
  primary-action: {backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [14, 18]}
  secondary-action: {backgroundColor: "{colors.surface-1}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: [12, 16]}
  input-field: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: [12, 14]}
  itinerary-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: 14}
  hotel-card: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.md}", padding: 0}
  filter-chip: {backgroundColor: "{colors.surface-1}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.pill}", padding: [8, 12]}
  status-badge: {backgroundColor: "{colors.surface-2}", textColor: "{colors.ink-muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: [3, 7]}
  bottom-navigation: {backgroundColor: "{colors.canvas}", textColor: "{colors.ink-subtle}", typography: "{typography.caption}", rounded: "{rounded.xs}", padding: [8, 10]}
---

# Overview

OneTwoTrip combines aspirational travel imagery with highly practical booking comparison. The first impression is full-bleed destination photography with a small yellow logo chip; the working screens become white, black, gray, and violet. Search forms are sparse and large, result lists are dense and comparable, and payment/details surfaces use stacked cards with precise metadata.

# Non-negotiable visual invariants

- Destination photography can fill the full viewport in onboarding and the top of travel-detail screens.
- The OneTwoTrip mark appears as a compact yellow pill or chip, especially on dark or photographic headers.
- Violet is the primary action and selection color for dates, filters, payment, booking, and sticky controls.
- Flight results use white itinerary cards with an orange airline/accent stripe and tightly aligned time, route, duration, baggage, and price data.
- Transactional search and result screens often use a black top bar with white text and the yellow brand mark.
- Hotel results are image-led cards with rating badges, price blocks, and thumb-level sticky violet filters.
- Bottom sheets use white rounded panels over a dark scrim with simple black text and restrained checkmarks.

# Color and surfaces

Use white as the main transactional canvas. Search forms, payment steps, filters, and details sit on white with pale gray fields and dividers. Black or near-black appears in route/result headers and photo overlays, giving transactional screens a stronger frame than a generic travel app.

Violet is the app-owned interaction color. It fills primary buttons, selected calendar dates, selected chips, filter buttons, active tab icons, and some promo cards. Use `primary-focus` for pressed states. Avoid default iOS blue; it would visibly break the reference.

Yellow belongs to the brand mark and selected story/card outlines, not to every call to action. Orange appears as airline or route accents in flight cards. Bright green is used sparingly for favorable hotel cashback or completed/available status. Text is near-black for decisions and muted gray for airport names, baggage, policy, board, distance, and helper copy.

Surfaces are flat and clean. Shadows are light, usually only enough to lift cards from white or pale gray. Hairlines separate form groups and bottom-sheet rows. Full-bleed photography needs a dark gradient or overlay only where text sits on top.

# Typography

Use SF Pro Display for major screen headings such as search questions, onboarding statements, and large travel-detail titles. Use SF Pro Text for fields, metadata, cards, forms, and navigation. The visual style relies on strong but not oversized headings: black 30 to 36 point onboarding copy, 22 to 24 point search titles, and 16 point semibold card titles.

Comparison typography is compact and aligned. Times and prices are strong; route codes, city names, baggage, transfer count, and policies are quieter. Prices should use tabular numerals where possible and stay right-aligned inside result cards. Rating chips are small high-contrast blocks, often yellow for hotel score and green for favorable value.

Dynamic Type should increase vertical card height and line wrapping without flattening hierarchy. Preserve the route/date/price/action cluster before secondary conditions. Do not use decorative travel typefaces; the reference is system-sans and pragmatic.

# Screen composition

Onboarding uses full-screen destination video or photography with darkened image overlays, a tiny yellow brand chip near the top, large white headline copy near the lower half, pagination dots, and a wide translucent gray button at the bottom.

Home starts with a photographic header, a small brand icon, service tiles arranged as rounded rectangles over the photo, a dark eSIM strip, story cards, promotional cards, and a white bottom navigation. The home composition is image-heavy, but cards remain readable and separated.

Search input screens are sparse: back control, small yellow logo chip, one large heading, a pale input field, and a vertical list of suggestions. The keyboard may occupy the bottom half, so the visible content should be uncluttered and left aligned.

Calendar screens use wide segmented controls, month sections, small date cells with tiny green price annotations, a violet selected date, optional toggles, and a fixed full-width violet selection button. Keep the date grid light and airy.

Flight results are dense scroll lists under a black route header. Date chips sit horizontally below the header, then a violet promo strip, then repeated white itinerary cards. A sticky bottom filter row overlays the lower edge with violet and white pill buttons. Hotel results use larger image cards with rating badge, distance, board, cashback, total, and favorite control.

Details and payment screens stack cards vertically. Ticket and hotel detail pages use a photographic or dark header, then a large rounded white sheet rising from the lower portion. Payment screens keep a countdown, itinerary summary card, service add-ons, promo field, price summary, and full-width violet commit button.

# Navigation appearance

Top bars are either minimal white with a back chevron and yellow logo chip, or black/inverse with white route text and compact controls. Photo detail headers place white line icons over imagery. Keep the brand chip small and centered or near the top, not enlarged into a hero logo.

The bottom navigation has five compact items on white, with violet for the selected icon/text and gray for inactive items. In focused booking, filter, and payment states, sticky action buttons or filter pills replace navigation emphasis. Bottom sheets have rounded top corners, a small drag handle or close button, and no decorative header art.

# Components

Primary buttons are saturated violet rounded rectangles with centered semibold white text. Secondary actions are white or pale gray with violet or black text. Pressed states deepen violet; disabled states fade toward pale gray and reduce text contrast.

Inputs are pale gray rounded rectangles with no heavy border. Search fields use large top spacing, muted placeholder text, and simple clear buttons. Form groups in booking and payment use white cards separated by hairlines and pale gray nested fields.

Flight cards must preserve their comparison grid: airline logo and name, time pair, airport codes, duration, direct/transfer state, baggage lines, and price. The orange vertical accent at the left is characteristic and should not be replaced with generic separators.

Hotel cards use a large photo with rounded top corners, an overlaid favorite icon, a yellow rating block, review count, title, location/distance, board/payment labels, cashback row, and price aligned to the right. Keep sticky filter controls at thumb height with violet active pills.

Filter sheets use white panels over scrim, simple text rows, pill chips, iOS toggles, range sliders with violet tracks, and a sticky violet result button. Sorting sheets are shorter bottom sheets with a simple list and checkmark.

# Imagery and icons

Photography is central. Use warm destination photos for onboarding and home, aerial or city photos for completed ticket headers, and real hotel room/lobby photos for hotel search and details. Preserve recognisable travel context and avoid dark, blurred, or decorative-only crops when the image supports a booking decision.

Icons are functional, simple, and small: airplane, hotel, train, bus, car, back, close, filter, sort, favorite, share, card, seat, notification. They should be thin line or simple filled pictograms in black, white, gray, violet, or yellow-chip contexts. Do not replace content imagery with arbitrary SF Symbols.

Fresh evidence does not prove a stable authored illustration system for OneTwoTrip. Campaign visuals vary between photography, card graphics, 3D mascot-like objects, and service promos, so this package should not create an `illustrations.md` unless future Screen Gallery evidence shows repeated authored illustration rules across multiple screens or states.

# States

Observed states include onboarding, native notification permission over photo onboarding, search with keyboard, selected calendar date, populated flight results, filter sheet, sorting sheet, fare loading, payment add-ons, card selection, purchased-ticket detail, hotel search, hotel results, hotel detail, cashback, certificates, travel puzzles, and profile.

Across states, keep the same system: white transactional surfaces, violet selection/action, yellow brand chip, black or photo headers where relevant, compact metadata, and bottom sheets over dark scrims. Native iOS permission alerts may remain native, but the app-owned background behind them should preserve the destination-photo treatment.

# iOS adaptation

Respect safe areas for photo headers, black top bars, sticky filters, primary buttons, and bottom navigation. On smaller iPhones, stack service tiles and result metadata vertically only when necessary, but keep price and primary action visible. Let dense comparison cards grow in height rather than shrinking type below readability.

Keyboard screens should keep the title, input, and first suggestions above the keyboard. Calendar and filter sheets need 44 point controls even when visual chips are compact. Use native scroll views and sheets, but style them to match the observed white rounded panels, violet controls, and black scrims.

Dynamic Type should preserve route/date/price/action priority and allow secondary policy text to wrap. Light mode is the primary documented appearance. For dark or photo-top areas, use inverse text and black surfaces only where observed; do not convert every transactional screen into dark mode without evidence.

# Anti-generic checklist

- Do not replace violet actions and selections with default iOS blue.
- Do not remove full-bleed destination or hotel photography from screens where it defines the composition.
- Do not render flight results as generic list rows; preserve the itinerary-card grid and orange airline accent.
- Do not use a plain `Form` for filters, booking, or payment without custom surfaces, chips, sliders, and sticky violet actions.
- Do not enlarge the yellow logo chip into decorative branding or use yellow as the primary CTA color.
- Do not use arbitrary SF Symbols as substitutes for service tiles, hotel photos, airline marks, or payment/card context.
- Do not add web-like nav, footers, hover states, or marketing pricing cards.
- Do not create an illustration system from one-off campaign graphics.

</design-context>
