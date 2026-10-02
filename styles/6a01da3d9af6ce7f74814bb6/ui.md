<design-context>
---
version: 1
platform: iOS
name: Choco-design-analysis
description: "A bright multi-service commerce shell using white and light-grey fields, bold rounded headings, pink-red and orange accents, large photo-led service cards, compact pill controls, and a persistent rounded bottom bar."
colors:
  canvas: "#F7F7F8"
  surface-primary: "#FFFFFF"
  surface-secondary: "#F0F1F3"
  accent-primary: "#EF3D5D"
  accent-secondary: "#FFA800"
  text-primary: "#171719"
  text-secondary: "#74777B"
  divider: "#E3E5E7"
  destructive: "#D83C4B"
typography:
  hero: {fontFamily: "SF Pro Rounded", fontSize: 36, fontWeight: 700, lineHeight: 41}
  title: {fontFamily: "SF Pro Rounded", fontSize: 28, fontWeight: 700, lineHeight: 34}
  section: {fontFamily: "SF Pro Text", fontSize: 21, fontWeight: 700, lineHeight: 26}
  body: {fontFamily: "SF Pro Text", fontSize: 16, fontWeight: 400, lineHeight: 22}
  label: {fontFamily: "SF Pro Text", fontSize: 15, fontWeight: 600, lineHeight: 20}
  caption: {fontFamily: "SF Pro Text", fontSize: 12, fontWeight: 400, lineHeight: 17}
spacing:
  screen-horizontal: 16
  section-gap: 24
  card-padding: 16
  control-gap: 12
rounded:
  control: 14
  card: 20
  sheet: 28
  pill: 999
components:
  primary-action: {fill: "pink-red or orange by visual context", shape: "wide rounded control", text: "high contrast"}
  secondary-action: {fill: "pale neutral", shape: "pill", text: "near-black"}
  primary-card: {fill: "white", shape: "large rounded photo-led card", elevation: "soft"}
  navigation: {fill: "white rounded bottom bar", active: "context accent", inactive: "grey"}
---

# Overview

Choco is a bright, photo-led multi-service interface. A white or very light grey shell holds large service tiles, promotional rails, merchant and product imagery, while pink-red and orange distinguish high-priority actions. Bold rounded headings and a persistent soft bottom bar make otherwise dense commerce screens feel approachable.

# Non-negotiable visual invariants

- White and light grey remain the dominant viewport masses.
- Large service or promotional cards carry real photography and occupy more visual weight than utility chrome.
- Pink-red is the strongest general accent; warm orange appears as a distinct secondary commerce accent.
- Headings are bold and rounded while prices, labels, and metadata remain compact.
- Cards use soft radii and restrained shadows, never hard outlines.
- Category chips and search controls are pills; bottom navigation is a rounded white bar with a clear colored active state.
- Product and venue imagery is never replaced by generic icons.

# Color and surfaces

Use a near-white grey canvas beneath pure white cards and bars. Pink-red marks principal actions, selection, favorites, and brand emphasis; orange and yellow are bounded secondary accents. Text is near black with medium grey supporting detail. Hairlines are quiet because spacing and card boundaries provide most grouping. Default iOS blue or a saturated full-page accent field would break the reference.

# Typography

Major page and service headings use a bold rounded sans; product names, prices, labels, and controls use compact SF Pro Text. Prices and primary actions outrank descriptions. Keep promotional copy short and allow metadata to wrap before shrinking price or title. Map headings to large title/title 2, card names to headline, content to body, and metadata to caption; Dynamic Type grows cards vertically.

# Screen composition

Home screens stack large service tiles and wide promotions above the rounded bottom bar. Commerce views use full-width photo cards, horizontal chips or stories, and dense one- or two-column lists. Search and profile use a simpler single column with grouped rows. Use about 16-point gutters, 12-point local gaps, and 20–24-point section spacing. Scroll long feeds and reserve the lower safe area for navigation or basket actions.

# Navigation appearance

The persistent bottom bar is white, rounded, and icon-led with compact labels; the active item uses the current accent and inactive items are grey. Top chrome is sparse: back, close, search, favorite, or cart controls. Sheets have large top radii. This describes appearance only, not destinations or service architecture.

# Components

Primary actions are filled pink-red or orange rounded controls with semibold high-contrast labels. Search fields and category selectors are pale pills. Photo cards pair an edge-to-edge image with compact title, price/rating/status, and small favorite or cart controls. Profile panels use white grouped rows with chevrons, toggles, or segmented pills. Disabled controls become pale grey without changing geometry.

# Imagery and icons

Food, products, restaurants, venues, and offers rely on real high-saturation photography cropped around the subject. Promotional tiles may mix photos with simple branded graphic fragments, but no stable independent authored illustration family recurs across the sampled product. Imagery that defines a card cannot be omitted while assets are pending; temporary raster assets must preserve crop, scale, and weight. Utility icons are simple line or filled symbols in a coherent family.

# States

Observed states include onboarding, populated feeds and catalogs, search, favorite/cart affordances, selected chips, language segments, profile rows, and native toggle treatments. Selection retains the current accent; inactive items remain grey; destructive actions use muted red. Surface hierarchy and image-led cards remain constant.

# iOS adaptation

Extend the light canvas through safe areas and keep content inside compact-width gutters. Use vertical scrolling for feeds and grouped rows, horizontal scrolling for chips and promotions, and bottom padding above navigation or basket actions. Native keyboards, sheets, and permissions return to the same visual context. All compact icons and rows require 44-point targets; VoiceOver reads title, price/status, then action. Preserve the observed light appearance and let Dynamic Type expand cards.

# Anti-generic checklist

- Do not replace the photo-led service hierarchy with a generic stack of white cards.
- Do not use default blue, unstyled `TabView`, or `Form`.
- Do not merge pink-red and orange into arbitrary rainbow accents.
- Do not replace listing photos with SF Symbols, emoji, or programmatic art.
- Do not apply one radius to cards, chips, sheets, and navigation.
- Do not add mood copy that repeats visible service, price, or status context.

</design-context>
