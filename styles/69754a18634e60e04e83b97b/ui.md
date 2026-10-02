<design-context>
---
version: 1
platform: iOS
name: Chizhik-design-analysis
description: "A bold yellow-white-black grocery interface with oversized slanted headings, speech-bubble panels, a recurring black bird mascot, dense packshot product cards, yellow actions and selected navigation, and branded map pins."
colors:
  canvas: "#F7F7F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#EFEFEF"
  accent-primary: "#FFDD00"
  accent-secondary: "#111111"
  text-primary: "#171717"
  text-secondary: "#747474"
  divider: "#E1E3E5"
  destructive: "#D9343A"
typography:
  hero: {fontFamily: "Arial Black", fontSize: 38, fontWeight: 900, lineHeight: 40}
  title: {fontFamily: "Arial Black", fontSize: 30, fontWeight: 900, lineHeight: 33}
  section: {fontFamily: "SF Pro Display", fontSize: 22, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "{colors.accent-primary}", text: "{colors.text-primary}", height: 52, radius: "{rounded.control}"}
  secondary-action: {fill: "{colors.accent-secondary}", text: "#FFFFFF", height: 50, radius: "{rounded.pill}"}
  primary-card: {fill: "{colors.surface-primary}", radius: "{rounded.card}", border: "none"}
  navigation: {fill: "#FFFFFF", activeFill: "{colors.accent-primary}", inactive: "{colors.text-secondary}"}
  speech-panel: {fill: "#FFFFFF", shape: "large rounded speech bubble", text: "{colors.text-primary}"}
  product-tile: {fill: "#FFFFFF", columns: 2, addFill: "{colors.accent-primary}", radius: "{rounded.card}"}
---

# Overview

Chizhik uses yellow, white, and black as large graphic masses rather than small accents. A recurring black bird mascot, white speech-bubble panels, and heavy slanted display type make home, onboarding, stores, and empty states unmistakably branded. Product and checkout areas become denser and more utilitarian, but retain yellow controls, large price numerals, rounded white cards, and the same bold hierarchy.

# Non-negotiable visual invariants

- Preserve saturated yellow as a full-screen or large-section brand field, not merely a small button color.
- Pair yellow with high-contrast black type, black controls, and broad white speech-bubble/card surfaces.
- Use heavy, slanted, uppercase display headings for short branded statements.
- Keep the black bird mascot recurring across launch, home, store, map, onboarding, and empty/status moments.
- Reuse speech-bubble geometry for prominent hero, onboarding, and modal-like branded panels.
- Build product grids from large contained packshots, oversized price numerals, and small yellow add controls.
- Keep the bottom navigation white with a yellow selected pill/icon treatment and gray inactive items.
- Blend store/map views with branded bird-shaped or mascot-derived pins rather than generic map markers alone.

# Color and surfaces

Yellow is the dominant brand field and the fill for primary actions, toggles, add controls, and selected navigation. Black provides display type, mascot mass, strong secondary buttons, and maximum contrast. White forms speech bubbles, product cards, sheets, and most dense commerce surfaces. Pale gray supports catalog, form, and utility backdrops without competing with yellow. Red is reserved for destructive/error meaning and small mascot or promotional accents. Success may use green locally but does not replace yellow as the brand color. Default iOS blue, pastel gradients, or a uniformly white/gray interface would visibly erase the reference.

# Typography

The key hierarchy pairs expressive heavy, slightly slanted uppercase display lettering with a neutral SF Pro system sans for forms, lists, and product facts. Use the shipped display face when available; Arial Black with an optical skew is an iOS-safe approximation, while SF Pro Text handles operational content. Branded headings are short and occupy a large share of their panel. Product prices use large bold numerals, with title and unit metadata much smaller. Under Dynamic Type, operational copy and product names wrap before price or action loses priority; speech-bubble headlines may reflow across more lines while preserving their strong scale and safe margins.

# Screen composition

Screens use about 16-point side insets, 12-point internal gaps, and 24–32 points between major groups. Brand-led screens often begin with a yellow safe-area field and mascot/logo, followed by a very large white speech-bubble panel or bold graphic card. Dense shopping screens use a pale canvas with white product cards and a persistent bottom bar. Bottom-owned actions or basket totals sit above the home indicator.

The observed visual archetypes are:

- Brand home: yellow upper field with mascot/logo, oversized white speech-bubble hero, promotional carousel or graphic card, rounded utility/store blocks, and persistent navigation.
- Onboarding/permission: full yellow or yellow-framed screen, large bird character and speech panel, short heavy headline, then a yellow or black pill action.
- Product catalog: compact title/search/filter region above a two-column grid of contained packshots, large price values, short labels, and yellow add controls.
- Product focus: large packshot on white above a strong price/action cluster, followed by flat information and related items.
- Basket/checkout: pale canvas with stacked white item or form sections, explicit totals, yellow selections/toggles, and a sticky yellow continuation action.
- Store/map: map or store information as the central field, augmented with yellow/black branded controls and mascot-derived pins or cards.
- Profile/utility: large title followed by rounded white row groups and restrained gray metadata.
- Empty/cancelled/status: one bird or heart/bird illustration, concise explicit text, and a clear yellow or black action in open space.

Long catalogs, store information, profiles, and checkout forms scroll vertically. Fixed navigation and actions reserve enough bottom inset for the final card.

# Navigation appearance

Primary screens use a white four-item bottom bar with compact gray inactive icons and a yellow active capsule, icon, or label emphasis; one item may use a mascot-derived profile mark. Top navigation alternates between a yellow branded cap and a simple light bar with black back/title controls. Focused product, basket, and checkout screens may replace tabs with a fixed action. Bottom sheets are white with large rounded top corners over a dark neutral scrim. This section defines only visual treatment, not product destinations.

# Components

Primary actions are full-width yellow rounded rectangles about 52 points high with bold black labels. Strong secondary actions may be black pills with white text. Speech panels are oversized white rounded bubbles with a pointed/tail detail, large black display type, and generous negative space around the mascot or message.

Product tiles use white rounded cards with a large contained packshot, compact product label, prominent black price, and small yellow add/quantity control. Search and form fields are pale rounded rectangles with black labels and gray placeholders. Toggles and selected chips use yellow. Map controls and pins combine white, yellow, black, and mascot shapes. Pressed states deepen yellow or black; disabled states mute contrast while preserving geometry. All targets remain at least 44 points.

# Imagery and icons

Product shopping relies on real packshots and promotional product photography, kept distinct from the authored mascot system. The black bird character and related heart/bird, map-pin, and speech-bubble graphics are major brand imagery on launch, home, store, onboarding, and empty/status screens. Product packshots use contain behavior on white; promotional imagery may crop inside a bounded graphic card. Icons are simplified black/gray navigation or utility aids. Both product imagery and mascot art are compositionally required where observed; temporary assets must preserve their relative scale, crop, silhouette, and visual weight.

# States

Selected navigation, toggles, chips, and primary actions use yellow with black content. Populated product states retain white tile geometry and price emphasis. Empty, cancelled, and branded status screens use the bird or heart/bird motif with explicit text rather than color alone. Modal/permission states may combine a speech bubble or native iOS surface with the yellow context behind it. Destructive actions are red and isolated. System permission sheets can remain native. No separate dark appearance was established in the inspected screens.

# iOS adaptation

Extend yellow brand fields, pale commerce canvases, or map content through the appropriate safe areas while keeping readable panels inside 16-point insets. Use lazy grids for catalogs and vertical scroll containers for home, profile, store, and checkout content. Reflow product grids to one column before Dynamic Type makes prices, labels, or add controls collide. Add bottom inset for the four-item bar or sticky action and lift focused fields above the keyboard. Native permission transitions may interrupt, then return to the same yellow/white/black visual context. Maintain 44-point targets for tabs, map controls, toggles, and add buttons. VoiceOver order should identify mascot art as decorative or meaningful as appropriate, then read heading, content, value, and action.

# Anti-generic checklist

- Do not reduce yellow to a minor accent on a generic white card stack.
- Do not replace the heavy slanted display hierarchy with a standard navigation title.
- Do not substitute emoji, arbitrary SF Symbols, or generic map pins for the authored bird imagery.
- Do not render the selected navigation state as default iOS blue or an unstyled `TabView`.
- Do not replace product packshots with illustration or hide the large price hierarchy.
- Do not remove speech-bubble geometry from branded hero and onboarding compositions.
- Do not spread red or green across normal controls; yellow and black remain primary.
- Do not collapse speech panels, product cards, sheets, pills, and circular add controls to one radius.

</design-context>
