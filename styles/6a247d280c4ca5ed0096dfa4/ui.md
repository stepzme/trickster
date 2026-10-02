<design-context>
---
version: 1
platform: iOS
name: Aviasales-design-analysis
description: "A playful travel marketplace with full blue brand fields, heavy rounded headings, stacked white search and result cards, compact price-led travel data, photography-led hotel discovery, and bold outlined cartoon moments."
colors:
  canvas: "#F4F5F7"
  surface-primary: "#FFFFFF"
  surface-secondary: "#E9EBEF"
  accent-primary: "#0B7CFA"
  accent-secondary: "#FF6B2C"
  text-primary: "#111111"
  text-secondary: "#74777E"
  divider: "#DBDEE3"
  destructive: "#F04444"
typography:
  hero: {fontFamily: "SF Pro Display", fontSize: 36, fontWeight: 750, lineHeight: 40}
  title: {fontFamily: "SF Pro Display", fontSize: 30, fontWeight: 700, lineHeight: 35}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 14, fontWeight: 600, lineHeight: 19}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 16}
spacing:
  screen-horizontal: 16
  section-gap: 28
  card-padding: 14
  control-gap: 10
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "#0B7CFA", textColor: "#FFFFFF", cornerRadius: 14, minHeight: 50}
  secondary-action: {fill: "#E9EBEF", textColor: "#111111", cornerRadius: 14, minHeight: 46}
  primary-card: {fill: "#FFFFFF", cornerRadius: 20, padding: 14}
  navigation: {fill: "#FFFFFF", selectedColor: "#0B7CFA", unselectedColor: "#74777E"}
---

# Overview

Aviasales uses saturated blue as a large environmental field rather than a small accent. Rounded white search, fare, seller, and hotel cards stack on pale gray; heavy friendly headings and compact travel metadata keep comparison legible. Real destination/property photography coexists with a distinct authored cartoon language used in onboarding, loading, and prompts.

# Non-negotiable visual invariants

- Saturated Aviasales blue fills onboarding, home/search heroes, and selected branded states.
- White rounded cards layer over blue or pale-gray canvases with minimal shadow.
- Price and route/property title visibly lead dense secondary travel metadata.
- Search forms, filters, and fare choices use broad rounded geometry and compact spacing.
- Bottom navigation is persistent and selected state is unmistakably blue.
- Hotel/destination photography remains large and authentic on inventory surfaces.
- Authored cartoon characters/objects use thick dark outlines and simple playful proportions.

# Color and surfaces

Blue dominates brand and search contexts and remains the primary action/selected color. Pale gray supports result feeds; white holds forms, fares, sellers, hotels, and payment. Orange appears in selected purchase/promo moments but does not replace blue globally. Green may identify favorable price or success; red is local to errors. Near-black carries headings/prices, gray carries conditions. Default blue without the full brand field or excessive colored cards would break the hierarchy.

# Typography

Use SF Pro with heavy rounded display weights as a safe substitute. Hero/search titles are bold and friendly; itinerary/property titles and prices are semibold/bold; conditions, duration, seller, and amenities use compact gray text. Keep price, route, times, stops, and conditions distinct. Dynamic Type expands cards and stacks metadata without separating the primary price/action or making titles collide with photography.

# Screen composition

Onboarding and home can use a full blue field with a large title/illustration and rounded white search module. Flight results are a dense vertical stack of cards with route/timing above price/seller action. Ticket detail and purchase stack fare, baggage, seller, passenger, and payment cards with a sticky bottom CTA. Hotel discovery uses blue hero/search followed by horizontal or vertical photo cards; hotel detail begins with a large gallery. Insets are around 16 points, with bottom navigation above the home indicator.

Visible archetypes include illustrated onboarding; login; flight/hotel search home; ticket results/detail/purchase; profile; hotel discovery/search/detail; and modal prompt/loading states.

# Navigation appearance

Bottom tabs use a clean white bar with simple filled icons and blue selected emphasis. Many screens use a small centered brand capsule/logo, blue back controls, and compact filter/sort actions. Modal sheets are white with broad rounded top corners. Sticky purchase bars remain white/pale with a dominant blue or orange action. Native navigation behavior is acceptable when the custom tint and card geometry are preserved.

# Components

The characteristic search module is a large white rounded panel containing route/date/passenger rows and a blue action. Result/fare cards use white fill, clear subgroups, pill badges, and price hierarchy. Filter chips are compact pills with blue selection. Seller/payment rows use dividers and concise metadata. Hotel cards pair large aspect-fill photography with title/rating/price. Primary actions are broad blue rounded rectangles; occasional purchase/promo actions may use orange. Disabled states retain geometry and mute contrast.

# Imagery and icons

Hotel/property/destination photography, maps, and travel inventory imagery are content assets and cannot be omitted. Authored onboarding/loading/prompt art follows the separate illustration specification. The illustration layer must not enter dense price, itinerary, passenger, or payment cards. Interface icons are compact and simple; branded cartoon objects cannot be substituted with emoji, SF Symbols, or SwiftUI drawings.

# States

Observed states include onboarding, login, filled search, flight/hotel results, fare/seller choices, purchase loading, sticky purchase CTA, profile, hotel detail, and favorite/prompt states. Blue remains primary; white card structure and price hierarchy persist. Loading/empty/prompts may introduce authored art without recoloring operational screens. Errors remain local red.

# iOS adaptation

Extend blue fields through the top safe area and keep bottom tabs/sticky CTAs above the home indicator. Use vertical scroll containers for results/detail/purchase, horizontal rails for discovery, and keyboard-aware forms. Maintain 44-point targets for search rows, filters, fare choices, tabs, and seller actions. VoiceOver order should follow route/property → date/time/rating → conditions → price → action; decorative art can be hidden. On compact widths, stack result subgroups and preserve photo height. Dynamic Type expands cards. Maintain high contrast on blue.

# Anti-generic checklist

- Do not reduce saturated blue to a small default tint on white.
- Do not omit travel photography or authored cartoon moments.
- Do not use an unstyled `TabView`, `Form`, filter chip, result card, or sticky CTA.
- Do not flatten route/time/price/conditions into one text level.
- Do not place illustration inside dense itinerary/payment content.
- Do not recreate cartoon assets with SF Symbols, emoji, or SwiftUI shapes.
- Do not use one corner radius for search panels, cards, sheets, and controls.

</design-context>
