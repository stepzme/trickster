<design-context>
---
version: 1
platform: iOS
name: Ozon-Travel-design-analysis
description: "A vivid travel-booking interface pairing electric-blue and magenta-violet brand fields with large rounded white search panels, friendly bold type, structured itinerary cards, real destination imagery, and glossy travel graphics."
colors:
  canvas: "#F4F6F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EEF2F6"
  accent-primary: "#0868F7"
  accent-secondary: "#E72AAD"
  text-primary: "#17191D"
  text-secondary: "#686C73"
  divider: "#E4E8EC"
  destructive: "#E04A55"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 750, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 29, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 10
rounded:
  control: 12
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#0868F7", textColor: "#FFFFFF", cornerRadius: 12, minHeight: 50}
  secondary-action: {fill: "#EEF2F6", textColor: "#0868F7", cornerRadius: 12, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 16}
  navigation: {fill: "#FFFFFF", selectedColor: "#0868F7", unselectedColor: "#8A9098"}
---

# Overview

Ozon Travel separates expressive discovery from calm booking detail. Top-level screens use large electric-blue-to-violet/magenta fields, glossy travel objects, and a large rounded white search panel. Search results, passenger/date forms, orders, and profile return to pale-gray canvases with structured white cards, compact travel facts, and strong blue actions.

# Non-negotiable visual invariants

- Electric blue and magenta-violet gradients form large branded masses on discovery/onboarding surfaces.
- The primary search/booking module is a broad rounded white panel layered against the saturated header.
- Blue remains the transactional action and selected-state color; magenta/violet stays promotional.
- Real hotel, destination, resort, and tour photography remains large on inventory cards.
- Route, time, date, passenger, price, and status facts are compactly structured inside white cards.
- A clean white bottom navigation bar uses unmistakable blue selected emphasis.
- Glossy travel objects and bright promotional graphics appear in onboarding, empty, and campaign states.

# Color and surfaces

Pale gray is the transactional canvas and white is the primary card/form surface. Electric blue owns booking, selection, trust, and the dominant CTA. Violet and magenta energize top-level gradients and promotions but do not replace blue inside dense forms/results. Green highlights favorable price or completed/positive status; red remains local to errors/destructive conditions. Near-black carries routes/destinations/totals, gray carries conditions and metadata, and white sits on saturated fields. Default blue without the violet/magenta brand context or generic white-only layouts would weaken the reference.

# Typography

Use SF Pro with friendly bold display weights. Discovery headings are large and rounded-feeling; form and result titles are bold but compact. Large green or dark prices receive strong local emphasis, while route details, conditions, and metadata use smaller neutral styles. Keep date/time/duration and passenger facts aligned. At Dynamic Type sizes, allow search rows and itinerary cards to expand vertically, retain route/price/action priority, and wrap secondary conditions below.

# Screen composition

The top safe area may continue the blue/violet gradient and centered brand mark. Discovery screens arrange mode/category icons near the top, then a large rounded white search card with stacked fields and a full-width blue action, followed by promotional cards. Results screens become single-column white-card lists on pale gray. Train/flight cards emphasize route/time/price; hotels and tours use large aspect-fill photos above facts. Date pickers, passenger steppers, filters, and seat/car choices use full-height screens or bottom sheets. Orders/profile use clean grouped lists and cards.

Visible archetypes include illustrated first launch; branded discovery/search; calendar/passenger/filter selection; train/flight result cards; photo-led hotel/tour cards; orders including empty state; and profile lists.

# Navigation appearance

Bottom navigation is white with compact icons/labels and blue selected emphasis. Many white transactional screens use a centered Ozon mark or simple title with ordinary-scale back, filter, and sort controls. Search/discovery navigation can merge into the gradient field. Sheets use broad rounded top corners over a dark scrim, and full-screen selectors retain white/pale backgrounds. Navigation is visually clean rather than heavily chromed.

# Components

Primary actions are wide blue rounded rectangles with white semibold labels. Secondary actions use pale-blue/gray fills or blue text. The characteristic search panel is a large white rounded container with stacked route/date/passenger rows. Mode/category choices use compact pictograms and selected blue emphasis. Result cards use clear sections for route or photo, times/dates, conditions, badges, and price. Passenger controls use steppers; filters and fare options use chips, radios, and grouped rows. Bottom-sheet forms and date pickers retain the same blue/white hierarchy. Disabled states keep geometry and reduce saturation.

# Imagery and icons

Real destination/hotel/tour photography and authored glossy travel graphics are both compositionally important. Photography uses wide aspect-fill crops that preserve the property/destination focal point. Onboarding, empty, and promotion art follows the separate illustration specification. Category pictograms are compact branded objects rather than arbitrary SF Symbols. Route diagrams are functional information graphics and should remain crisp and subordinate to time/price facts.

# States

Observed states include first launch, filled and unfilled search, selected modes, date/passenger/filter sheets, populated train/flight/hotel/tour results, order history, empty orders, and profile rows. Selected fields and modes stay blue; promotional emphasis remains violet/magenta; positive price/status may use green. Empty and onboarding states use authored art without changing the surrounding blue/white structure.

# iOS adaptation

Extend branded gradients beneath the top safe area and keep bottom navigation above the home indicator. Use vertical scrolling for discovery/results/orders, horizontal scrolling only for promotional/category rails, and keyboard-aware sheets for forms. Maintain 44-point targets for modes, search rows, date cells, steppers, filters, and tabs. VoiceOver should read route/destination → date/time → conditions → price/status → action; decorative art can be hidden. At compact widths, stack result facts rather than shrinking them, and preserve enough photo height for recognition. Dynamic Type expands cards/sheets. Support the observed light transactional appearance with saturated full-bleed brand regions.

# Anti-generic checklist

- Do not replace the blue-violet-magenta discovery field with a plain white header.
- Do not make magenta the transactional CTA color; preserve blue for booking.
- Do not omit real travel photography or authored onboarding/empty-state art.
- Do not use an unstyled `TabView`, `Form`, date picker, or generic result card.
- Do not flatten route/time/price/status into one text hierarchy.
- Do not substitute arbitrary SF Symbols for branded travel/category objects.
- Do not apply one corner radius to search panels, result cards, controls, and sheets.

</design-context>
