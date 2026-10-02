<design-context>
---
version: 1
platform: iOS
name: Omio-design-analysis
description: "Omio uses a navy and coral iOS travel interface with illustrated blue-pink journey headers, white rounded cards, pale gray input rows, dense comparison lists, and photo-led hotel surfaces."
colors:
  canvas: "#F4F5F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFF1F5"
  accent-primary: "#FF6570"
  accent-secondary: "#162E71"
  text-primary: "#10265C"
  text-secondary: "#687083"
  divider: "#E1E5EC"
  destructive: "#B54747"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 32, fontWeight: 700, lineHeight: 36}
  title: {fontFamily: "SF Pro Display", fontSize: 24, fontWeight: 700, lineHeight: 30}
  section: {fontFamily: "SF Pro Text", fontSize: 18, fontWeight: 700, lineHeight: 24}
  body: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 400, lineHeight: 21}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 12
  section-gap: 24
  card-padding: 14
  control-gap: 8
rounded:
  control: 8
  card: 8
  sheet: 16
  pill: 999
components:
  primary-action: {fill: "#FF6570", foreground: "#FFFFFF", cornerRadius: 8, height: 48}
  secondary-action: {fill: "#162E71", foreground: "#FFFFFF", cornerRadius: 8, height: 44}
  primary-card: {fill: "#FFFFFF", foreground: "#10265C", cornerRadius: 8, shadow: "soft"}
  navigation: {fill: "#FFFFFF", selected: "#FF6570", unselected: "#A9AFBB"}
---

# Overview

The real iOS screens combine a soft illustrated travel world with compact booking and comparison surfaces. Omio is recognizable through dark navy headers, coral commitment controls, pale gray form rows, white cards with tight itinerary data, and recurring pastel transport artwork at the top of discovery screens.

# Non-negotiable visual invariants

- Travel discovery starts with a large blue-pink illustrated header; it must not be replaced by a flat color bar.
- Focused comparison and checkout screens use a solid navy top bar with white status/navigation text.
- The main action color is coral, used for search, continue, payment, selected tabs, and active underline states.
- Forms are built from pale gray rounded rows on white or pale gray canvases, not default bordered text fields.
- Result cards are white, slightly elevated, and dense, with navy text, small green status labels, and right-aligned prices.
- Photography appears in hotel and offer modules and remains directly attached to the related title, rating, or price.
- Bottom browsing navigation is white and low contrast, with coral selection; focused booking screens remove the visual weight of that navigation.
- Error and required states use thin red outlines and small red labels while preserving the neutral form structure.

# Color and surfaces

The main canvas is a cool very pale gray. Primary surfaces are white cards and white sheets; secondary surfaces are light gray rows for origin, destination, dates, passengers, billing fields, and settings-like sections. Navy is the structural color for route headers, headings, prices, and selected mode context. Coral is the action and selection color. Muted blue-gray is used for icons, inactive tabs, placeholder text, and separators. Green appears only as a compact positive label for cheapest, fastest, free, selected, or discount-applied information. Generic iOS blue would visibly break the reference because it would compete with the navy/coral system.

# Typography

The hierarchy is bold and compact. Onboarding and discovery headings use heavy SF Pro Display-style text, centered or left aligned depending on the scene. Operational screens use SF Pro Text with tight line heights, bold operator/hotel names, bold prices, and small captions for times, stations, policies, and legal copy. Numeric content should use tabular alignment where possible because times, fares, dates, passenger counts, and totals are repeatedly compared. Dynamic Type can wrap secondary lines, but route names, prices, primary actions, and selected status labels need to remain visually dominant.

# Screen composition

Discovery screens repeat a top scenic illustration occupying roughly the upper quarter, a white rounded search panel attached beneath it, segmented Travel/Stays tabs, stacked input rows, a coral action, offer cards, and a white bottom tab bar. Ticket result screens use a fixed navy route header, a mode selector strip, horizontally scrollable date chips, filter chips, and one-column result cards. Booking and passenger screens keep the navy route header fixed above white section groups, forms, totals, and a bottom coral action. Hotel detail screens begin with a full-width photograph under the navy header, then stack white information sections and a sticky coral bottom action.

Main visible archetypes are illustrated onboarding, illustrated search home, transport result list, filter sheet, booking detail, passenger/billing form, promotional bottom sheet, and photo-led hotel detail. Each archetype keeps narrow mobile gutters around content, with full-width navy bars and bottom actions allowed to touch the screen edges.

# Navigation appearance

The browsing tab bar is white, flat, and icon-led with small captions; the selected item is coral and inactive items are light gray-blue. Focused screens use a dark navy navigation bar with a back chevron, compact route title/subtitle, outlined Modify button when present, and a share icon. Full-screen filters use a white top bar with a left close glyph, centered title, and a fixed bottom control row. Bottom sheets use a white rounded top corner container over a dimmed page, with a close glyph in the upper right.

# Components

Primary actions are coral rectangles with 8 point corners, white semibold labels, and full-width placement near the bottom of the current section or viewport. Disabled or unavailable action states are the same shape with a pale coral fill.

Search rows are light gray rounded rectangles with leading transport or calendar icons, navy text, and muted placeholders. Adjacent date/return rows share a horizontal row, each preserving the same fill and height.

Result cards are white rounded rectangles with a subtle shadow, small green badges at the top, operator brand text or logo, large navy departure and arrival times, thin connecting lines, station names below, a small Direct pill, and a bold fare near the lower right.

Filter chips are small rounded white pills on the pale gray canvas. Selected chips can become navy pills with a close glyph, while ordinary chips keep navy text and minimal shadow.

Filter sheets use simple radio rows, square checkboxes with navy outlines, blue range sliders, uppercase gray section labels, and a fixed coral Done button.

Form sections use white groups divided by hairlines. Inputs are pale gray rounded rows; invalid inputs add a red outline and a small red Required label beneath the field.

Hotel and promotional cards rely on photography or generated art with rounded clipping. Labels such as Cheapest sit as small green tags over or near the media, not as large banners.

# Imagery and icons

Illustration is central on splash, onboarding, home search, and some promotional states. The language is a soft pastel travel collage: blue-violet sky and water, blush horizon, simplified bus/train/plane/ferry forms, distant bridges and city silhouettes, low contrast clouds, and small white birds. Hotel flows use real photography cropped full width or in horizontal cards. Icons are small, mostly line-based, and colored navy or muted blue-gray; they support text rather than becoming decorative hero elements. If final artwork is not ready, the illustrated header and photo areas still need reserved space and cannot be omitted.

# States

Observed states include privacy consent over the illustrated background, third-party sign-in sheets, selected transport modes, selected date chips, selected filters, discount applied, invalid billing fields, enabled green toggles, promotional modal sheets, and populated hotel/detail screens. Across these states, navy route/context bars, coral commitment controls, pale form rows, and white card groups remain stable.

# iOS adaptation

Use native safe areas while preserving the full-width navy header and the illustrated discovery header. Long comparison, filter, passenger, and billing screens scroll vertically; bottom actions stay pinned only when observed as a sticky footer. Keep 44 point touch targets for tabs, chips, fields, toggles, close controls, and bottom actions. VoiceOver order should follow the visible top-to-bottom structure: route context, mode/date controls, filters, cards, then primary action. Dynamic Type should wrap station names, policies, and descriptions while keeping prices and main actions readable. Light appearance is the observed baseline; do not invent an unrelated dark theme.

Do not introduce desktop hover states, web breakpoints, top navigation, footers, marketing pricing cards, or pointer-only behavior unless they genuinely appear in the iOS reference.

# Anti-generic checklist

- Do not replace navy and coral with default iOS blue.
- Do not use a generic white SwiftUI `Form` for search, passenger, billing, or filter screens.
- Do not remove the illustrated travel header from discovery screens.
- Do not flatten result cards into plain list rows.
- Do not use arbitrary SF Symbols when the reference uses compact transport-specific line icons and muted glyphs.
- Do not make every radius the same; fields, cards, sheets, pills, and photos have distinct geometry.
- Do not detach fares, ratings, policies, or labels from the card or photo they describe.
- Do not omit photo or illustration slots while waiting for production assets.

</design-context>
