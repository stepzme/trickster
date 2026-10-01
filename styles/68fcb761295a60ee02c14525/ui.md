<design-context>
---
version: 1
platform: iOS
name: Kupibilet-design-analysis
description: "A travel-booking interface that opens on a deep navy search field with stacked white inputs and bright green action, then shifts to white and ice-gray comparison screens built from rounded itinerary cards, compact route data, green selection, native sheets, and a light icon tab bar."
colors:
  canvas: "#F4F5F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#ECEEF3"
  accent-primary: "#22E986"
  accent-secondary: "#303D63"
  text-primary: "#191A1E"
  text-secondary: "#70737A"
  divider: "#E3E5EA"
  destructive: "#D84A4A"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 700, lineHeight: 42}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 20, fontWeight: 600, lineHeight: 25}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 14
  control-gap: 10
rounded:
  control: 12
  card: 18
  sheet: 24
  pill: 999
components:
  primary-action: {fill: "#22E986", foreground: "#10241A", shape: "rounded-rectangle"}
  secondary-action: {fill: "#303D63", foreground: "#FFFFFF", shape: "rounded-rectangle-or-pill"}
  primary-card: {fill: "#FFFFFF", foreground: "#191A1E", shape: "rounded-itinerary-card"}
  navigation: {fill: "#FFFFFF", inactive: "#A0A3AA", selected: "#22A96B"}
---

# Overview

Kupibilet uses a strong two-field contrast: a deep navy branded search stage and a light white/ice-gray workspace for comparison, forms, payment, chat, and account content. Bright mint-green consistently marks the next decision, selection, or confirmation. Dense route, date, price, baggage, and status information is contained in rounded white cards and sheets, while native iOS pickers, keyboards, alerts, and tab geometry remain visible.

# Non-negotiable visual invariants

- The primary search composition uses a large deep-navy upper field with stacked white rounded inputs and one bright green CTA.
- Downstream content uses white or ice-gray canvases with rounded white cards rather than carrying navy across every screen.
- Mint green is the recurring primary action, selected, confirmed, and favorable-price color; default blue must not replace it.
- Travel data is dense but aligned into clear vertical stacks with price, route endpoints, time, duration, baggage, and status separated by weight and spacing.
- Bottom sheets are the dominant transient surface, with white fill, rounded top corners, a grab handle, and bottom CTA where needed.
- The light bottom tab bar uses thin line icons, small labels, and green selected emphasis.
- Sticky or bottom-proximate CTAs stay above the home indicator and retain the same green geometry through long forms.
- Native iOS keyboards, wheel pickers, permission alerts, and confirmations remain visibly native.

# Color and surfaces

Deep navy forms the branded search and occasional navigation mass. The rest of the interface is white or pale ice gray, with white cards and form groups separated by fine cool-gray dividers. Electric mint-green is the strongest interaction color for progress, selection, active tabs, buttons, checks, and favorable price. Near-black carries route facts, prices, and titles; medium gray carries labels, time details, airports, and helper copy. Warm orange or pale yellow is limited to waiting and urgency panels, while red marks validation, failed payment, or destructive action. Destination photos, map content, and airline marks provide local color. Purple, generic iOS blue, or gradient-heavy surfaces would break the navy-green grammar.

# Typography

Large branded headings use SF Pro Rounded or a similar friendly rounded sans; dense itineraries, forms, and payment content use SF Pro Text. Prices and route endpoints receive the strongest weight, followed by times and section titles; airport, duration, baggage, seller, and helper text remain smaller and gray. CTA labels are semibold and dark on green. The hierarchy must remain compact but readable. Dynamic Type should expand cards and form sections vertically, allow supporting details to wrap, and preserve price-route-status order rather than shrinking the entire data block.

# Screen composition

Search archetypes place a compact mark or title in the upper safe area, one vertically stacked white form in the navy field, and a full-width green CTA below it. Optional recommendations or destination imagery continue on lighter surfaces. Results archetypes use a compact back/header region, horizontal date-price chips, and a single vertical list of rounded flight cards. Each card groups route times and endpoints, connection or duration facts, baggage/status, then a bold price and action.

Booking, passenger, payment, and account archetypes use pale canvases with one-column white rounded form groups, short section titles, validation near the relevant field, and a sticky green CTA. Filter and sort controls rise in sheets containing chips, checkboxes, sliders, toggles, or radio rows. Map archetypes let the map or globe occupy most of the screen with compact filters floating over it. Chat uses a vertically scrolling message surface and bottom composer. Empty states center one spot asset or symbol, short copy, and a single action.

# Navigation appearance

The main shell uses a light bottom tab bar with thin line icons, compact labels, muted gray inactive states, and green selected emphasis. Many tab surfaces use a small centered brand mark in the top region. Task-focused screens use a simple back chevron, compact title, and minimal close or trailing action. Bottom sheets have white fill, large top corners, centered handle, and optional fixed green action. Native alert, picker, keyboard, and permission surfaces remain unmasked.

# Components

The primary CTA is a full-width mint-green rounded rectangle with dark semibold text; disabled states shift to pale gray without changing geometry. Search inputs are large white rows grouped on navy, with clear labels and route/date/passenger hierarchy. Flight cards use white fill, 18-point-class corners, compact route diagrams, bold times and price, gray metadata, and restrained status panels. Date and filter chips are small rounded pills with clear green selected treatment. Forms use thin gray borders or grouped white surfaces, and focus or validation remains local. Sheets group checkbox, radio, slider, and toggle rows with generous touch height.

# Imagery and icons

Destination photography, map/globe content, airline marks, and route symbols are functional and retain their natural roles. Photos use intentional `cover` crops inside rounded cards; maps remain full surfaces; airline logos stay small and contained. Onboarding rabbit art, travel line drawings, order/card empty states, profile promo assets, push bell, and other spot graphics vary among hand-drawn line, flat colored vector, and photographic treatments. The evidence does not confirm one tightly stable authored illustration system, so do not generalize a universal mascot or drawing language from these assets. Empty-state imagery cannot replace route data or decorate flight cards.

# States

Observed states include splash and onboarding, system notification permission, search and recommendation loading, date-price calendar, route results and filters, sort sheet, booking validation, wheel picker, fare and support selections, card payment and confirmation loading, map filters and city download, chat introduction and messages, empty and populated orders, logged-out and logged-in profile, registration keyboard, referral modal, saved-card emptiness and list, settings toggles, notebook validation, price-tracking feedback, and empty subscriptions. Navy-green identity, rounded white groups, compact travel hierarchy, and native transient surfaces remain consistent.

# iOS adaptation

Respect safe areas for navy headers, bottom tabs, sticky CTAs, sheets, and the home indicator. Put search extensions, results, booking forms, profile, settings, chat, and order content in vertical scroll containers; let date, insurance, and filter rails scroll horizontally rather than shrinking. Keep fields, chips, cards, toggles, tab items, and CTAs at least 44 points. On compact widths, stack route facts and secondary details while preserving endpoints, price, primary status, and action. VoiceOver order should announce route endpoints and times, duration/connections, baggage/status, price, then action; favorable, selected, waiting, and error states cannot rely on color alone. Native keyboard, picker, permission, and alert transitions should remain system-owned. Preserve the navy-to-light composition rather than flattening everything into one theme.

# Anti-generic checklist

- Do not carry navy across every form and result screen or remove the observed navy-to-light contrast.
- Do not replace green primary actions and selection with default blue.
- Do not turn dense flight information into a grid of unrelated mini-cards or hide fees and route complexity.
- Do not over-round individual data rows inside an already rounded flight or form card.
- Do not use an unstyled `TabView`; preserve the light bar, line icons, and green active state.
- Do not decorate result, booking, or payment cards with rabbit, bell, or travel illustration.
- Do not infer one universal illustration language from the mixed custom assets.
- Do not cover the bottom CTA or final form fields with the tab bar, keyboard, or home indicator.

</design-context>
